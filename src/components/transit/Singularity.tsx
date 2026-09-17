import { useEffect, useRef } from "react";

/**
 * SINGULARITY — the signature moment.
 *
 * A star field and a rendered black hole: an accretion disc lensed over
 * and under the event horizon, a photon ring, Doppler beaming on the
 * approaching side, and a very slow rotation that opens up as the visitor
 * scrolls into the page.
 *
 * How it stays cheap:
 *  - The disc is drawn ONCE, face-on, into an offscreen canvas.
 *    Projecting a rotation in the disc's own plane is exactly
 *    `scale(1, tilt)` after `rotate(angle)` in screen space, so every
 *    frame is a handful of transformed drawImage calls, not per-pixel work.
 *  - One rAF loop writes to the canvas. React never re-renders.
 *  - The loop parks itself whenever the canvas is off screen.
 *  - Reduced motion renders a single still frame.
 */

const TEX = 512;
const TEX_MID = TEX / 2;
/** Disc geometry as a fraction of the texture radius. */
const R_IN = 0.3;
const R_OUT = 0.98;
const STAR_COUNT = 190;

type Star = { x: number; y: number; z: number; r: number; p: number };

const cssVar = (name: string, fallback: string) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
};

/** "38 100% 62%" + alpha -> a canvas-safe colour string. */
const hsla = (triplet: string, alpha: number) => {
  const [h, s, l] = triplet.split(/\s+/);
  return `hsla(${h}, ${s}, ${l}, ${alpha})`;
};

/** Parses "38 100% 62%" into numeric h/s/l so we can interpolate. */
const parseHsl = (triplet: string): [number, number, number] => {
  const m = triplet.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
  if (!m) return [38, 100, 60];
  return [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])];
};

const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/** Builds the face-on accretion disc once, as an RGBA bitmap. */
const buildDisc = (hot: string, mid: string, cool: string) => {
  const off = document.createElement("canvas");
  off.width = off.height = TEX;
  const c = off.getContext("2d");
  if (!c) return off;

  const img = c.createImageData(TEX, TEX);
  const data = img.data;
  const [hH, hS, hL] = parseHsl(hot);
  const [mH, mS, mL] = parseHsl(mid);
  const [cH, cS, cL] = parseHsl(cool);

  // hsl -> rgb, kept local and cheap; this runs once.
  const toRgb = (h: number, s: number, l: number) => {
    const S = s / 100;
    const L = l / 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = S * Math.min(L, 1 - L);
    const f = (n: number) => L - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0) * 255, f(8) * 255, f(4) * 255];
  };

  for (let y = 0; y < TEX; y++) {
    for (let x = 0; x < TEX; x++) {
      const dx = (x - TEX_MID) / TEX_MID;
      const dy = (y - TEX_MID) / TEX_MID;
      const r = Math.hypot(dx, dy);
      const i = (y * TEX + x) * 4;
      if (r < R_IN || r > R_OUT) {
        data[i + 3] = 0;
        continue;
      }
      const theta = Math.atan2(dy, dx);
      // 0 at the inner edge, 1 at the outer edge
      const t = (r - R_IN) / (R_OUT - R_IN);

      // Filament structure: a few sheared harmonics so the disc has grain
      const swirl = theta + 5.5 * Math.log(r / R_IN + 0.001);
      const grain =
        0.62 +
        0.2 * Math.sin(swirl * 7) +
        0.12 * Math.sin(swirl * 17 + 1.7) +
        0.08 * Math.sin(swirl * 31 + 0.4);

      // Brightness: blinding at the inner edge, fading to nothing outside
      const fall = Math.pow(1 - t, 1.9);
      const edgeIn = Math.min(1, (r - R_IN) / 0.04);
      const alpha = Math.max(0, Math.min(1, fall * grain * edgeIn * 1.25));

      const [h, s, l] =
        t < 0.42
          ? [mix(hH, mH, t / 0.42), mix(hS, mS, t / 0.42), mix(hL, mL, t / 0.42)]
          : [
              mix(mH, cH, (t - 0.42) / 0.58),
              mix(mS, cS, (t - 0.42) / 0.58),
              mix(mL, cL, (t - 0.42) / 0.58),
            ];
      const [R, G, B] = toRgb(h, s, l);
      data[i] = R;
      data[i + 1] = G;
      data[i + 2] = B;
      data[i + 3] = alpha * 255;
    }
  }
  c.putImageData(img, 0, 0);
  return off;
};

const Singularity = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let disc = document.createElement("canvas");
    let stars: Star[] = [];
    let size = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let theme = "";

    // getComputedStyle is not free, so the palette is read once per theme
    // rather than once per token per frame.
    let pal = { hot: "44 100% 88%", mid: "38 100% 62%", cool: "22 80% 44%", star: "200 40% 92%", horizon: "220 60% 2%", glow: 1 };

    const readTheme = () => {
      const key = document.documentElement.classList.contains("dark") ? "dark" : "light";
      if (key === theme) return;
      theme = key;
      pal = {
        hot: cssVar("--disc-hot", "44 100% 88%"),
        mid: cssVar("--disc-mid", "38 100% 62%"),
        cool: cssVar("--disc-cool", "22 80% 44%"),
        star: cssVar("--star", "200 40% 92%"),
        horizon: cssVar("--horizon", "220 60% 2%"),
        glow: parseFloat(cssVar("--glow", "1")) || 1,
      };
      disc = buildDisc(pal.hot, pal.mid, pal.cool);
    };

    const seedStars = () => {
      // Deterministic, so the sky is the same on every reload
      let seed = 20140107;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: rnd(),
        y: rnd(),
        z: 0.25 + rnd() * 0.75,
        r: 0.3 + rnd() * 1.1,
        p: rnd() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const css = Math.max(120, Math.min(rect.width, rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      size = Math.round(Math.min(css, 820) * dpr);
      canvas.width = size;
      canvas.height = size;
    };

    const draw = (time: number) => {
      if (!size) return;
      const mid = size / 2;
      const glow = pal.glow;

      // Scroll opens the disc up and pulls the camera in a little
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, window.innerHeight)));
      const tilt = 0.12 + p * 0.3;
      const zoom = 1 + p * 0.16;
      const spin = reduce.matches ? 0 : time * 0.000035;

      ctx.clearRect(0, 0, size, size);

      /* ---- star field, parallaxed by scroll ---- */
      const starTone = pal.star;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const drift = ((s.y + p * s.z * 0.35) % 1) * size;
        const twinkle = reduce.matches ? 0.75 : 0.55 + 0.45 * Math.sin(time * 0.0009 + s.p);
        const d = Math.hypot(s.x * size - mid, drift - mid) / mid;
        // Stars close to the hole are swallowed
        const near = Math.max(0, Math.min(1, (d - 0.3) / 0.22));
        ctx.globalAlpha = twinkle * s.z * 0.85 * near * glow;
        ctx.fillStyle = hsla(starTone, 1);
        ctx.beginPath();
        ctx.arc(s.x * size, drift, s.r * s.z * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      /* ---- the hole ---- */
      const R = mid * 0.3 * zoom;
      const discR = mid * 0.96 * zoom;

      const paintDisc = (scaleY: number, rot: number, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.globalCompositeOperation = "lighter";
        ctx.translate(mid, mid);
        ctx.scale(1, scaleY);
        ctx.rotate(rot);
        ctx.drawImage(disc, -discR, -discR, discR * 2, discR * 2);
        ctx.restore();
      };

      const clipHalf = (top: boolean, run: () => void) => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, top ? 0 : mid, size, mid);
        ctx.clip();
        run();
        ctx.restore();
      };

      // 1. the flat disc, seen nearly edge on
      paintDisc(tilt, spin, 0.95);
      // 2 + 3. light from the far side bent over the top and under the base
      clipHalf(true, () => paintDisc(0.82, spin * 0.92, 0.5 * glow + 0.25));
      clipHalf(false, () => paintDisc(0.62, -spin * 0.86, 0.34 * glow + 0.16));

      // 4. the shadow itself, and the photon ring around it
      const horizon = pal.horizon;
      const shadow = ctx.createRadialGradient(mid, mid, R * 0.7, mid, mid, R * 1.08);
      shadow.addColorStop(0, hsla(horizon, 1));
      shadow.addColorStop(0.86, hsla(horizon, 1));
      shadow.addColorStop(1, hsla(horizon, 0));
      ctx.fillStyle = shadow;
      ctx.beginPath();
      ctx.arc(mid, mid, R * 1.08, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = hsla(pal.hot, 0.85);
      ctx.lineWidth = Math.max(1, 1.4 * dpr);
      ctx.beginPath();
      ctx.arc(mid, mid, R * 1.02, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 5. the near edge of the disc crosses back in front of the shadow
      clipHalf(false, () => paintDisc(tilt, spin, 0.95));

      // 6. Doppler beaming — the side turning toward us runs hot
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const beam = ctx.createLinearGradient(0, 0, size, 0);
      beam.addColorStop(0, hsla(pal.hot, 0.16 * glow));
      beam.addColorStop(0.42, hsla(pal.hot, 0));
      ctx.fillStyle = beam;
      ctx.beginPath();
      ctx.ellipse(mid, mid, discR, discR * Math.max(tilt, 0.1), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 7. bloom
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const bloom = ctx.createRadialGradient(mid, mid, R, mid, mid, discR * 1.15);
      bloom.addColorStop(0, hsla(pal.mid, 0.1 * glow));
      bloom.addColorStop(1, hsla(pal.mid, 0));
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, size, size);
      ctx.restore();
    };

    const tick = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf || reduce.matches) return;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    readTheme();
    seedStars();
    resize();
    draw(0);
    start();

    const onResize = () => {
      resize();
      draw(performance.now());
    };
    window.addEventListener("resize", onResize);

    // Redraw on a theme change so the disc is regraded for daylight
    const themeWatcher = new MutationObserver(() => {
      readTheme();
      draw(performance.now());
    });
    themeWatcher.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const onMotionChange = () => {
      stop();
      if (reduce.matches) draw(performance.now());
      else if (visible) start();
    };
    reduce.addEventListener?.("change", onMotionChange);

    // A still frame is enough when the visitor has asked for calm, but it
    // should still track scroll — cheaply, and only while on screen.
    const onScroll = () => {
      if (reduce.matches && visible) draw(performance.now());
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      stop();
      io.disconnect();
      themeWatcher.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener?.("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`block pointer-events-none select-none ${className}`}
    />
  );
};

export default Singularity;
