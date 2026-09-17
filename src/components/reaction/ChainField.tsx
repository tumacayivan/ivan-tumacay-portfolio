import { useEffect, useRef } from "react";

interface Nucleus {
  x: number;
  y: number;
  r: number;
  /** 0 = intact, >0 = seconds of glow left after splitting */
  hot: number;
  /** ms timestamp when it becomes fissile again */
  ready: number;
}

interface Neutron {
  x: number;
  y: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
  life: number;
}

const MAX_NEUTRONS = 90;
const MAX_NUCLEI = 170;
const SPEED = 0.16; // px per ms
const HIT_R = 13;
const COOLDOWN = 5200;

const readHsl = (name: string) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || "0 0% 50%";
};

/**
 * The chain reaction behind the opening frame.
 *
 * A lattice of nuclei sits in the dark. Move the pointer through it and
 * you release neutrons; every nucleus one of them touches splits, flares,
 * and throws two more. The reaction runs away, burns itself out, and the
 * lattice slowly comes back — then you can start it again.
 *
 * One canvas, one rAF loop, no React state. It stops itself when scrolled
 * out of view, and renders a single still frame for visitors who ask for
 * reduced motion.
 */
const ChainField = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ink = readHsl("--ink");
    let ember = readHsl("--ember");
    let emberHot = readHsl("--ember-hot");

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nuclei: Nucleus[] = [];
    const neutrons: Neutron[] = [];
    let raf = 0;
    let running = false;
    let last = performance.now();
    let seed = 20260918;

    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      // Keep the backing store small no matter how wide the screen is.
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = Math.min(rect.width, 1400);
      h = Math.min(rect.height, 900);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      seed = 20260918;
      nuclei = [];
      const step = Math.max(58, Math.sqrt((w * h) / MAX_NUCLEI));
      for (let y = step * 0.5; y < h; y += step) {
        for (let x = step * 0.5; x < w; x += step) {
          if (nuclei.length >= MAX_NUCLEI) break;
          nuclei.push({
            x: x + (rand() - 0.5) * step * 0.7,
            y: y + (rand() - 0.5) * step * 0.7,
            r: 2.2 + rand() * 2.4,
            hot: 0,
            ready: 0,
          });
        }
      }
    };

    const emit = (x: number, y: number, n: number) => {
      for (let i = 0; i < n && neutrons.length < MAX_NEUTRONS; i++) {
        const a = rand() * Math.PI * 2;
        neutrons.push({ x, y, px: x, py: y, vx: Math.cos(a) * SPEED, vy: Math.sin(a) * SPEED, life: 2600 });
      }
    };

    const draw = (still: boolean) => {
      ctx.clearRect(0, 0, w, h);

      // the lattice
      for (const n of nuclei) {
        const glow = Math.max(0, n.hot);
        if (glow > 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 5 + glow * 10, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${ember} / ${(glow * 0.22).toFixed(3)})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.ready > 0) {
          // spent: a cold ring
          ctx.strokeStyle = `hsl(${ink} / 0.12)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = glow > 0 ? `hsl(${emberHot} / ${Math.min(1, 0.4 + glow)})` : `hsl(${ink} / 0.22)`;
          ctx.fill();
        }
      }

      if (still) return;

      // the neutrons
      ctx.lineCap = "round";
      for (const p of neutrons) {
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `hsl(${ember} / ${Math.min(0.85, p.life / 1600).toFixed(3)})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${emberHot} / 0.9)`;
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;

      for (let i = neutrons.length - 1; i >= 0; i--) {
        const p = neutrons[i];
        p.px = p.x;
        p.py = p.y;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if (p.life <= 0 || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          neutrons.splice(i, 1);
          continue;
        }
        for (const n of nuclei) {
          if (n.ready > now) continue;
          const dx = n.x - p.x;
          const dy = n.y - p.y;
          if (dx * dx + dy * dy < HIT_R * HIT_R) {
            n.hot = 1;
            n.ready = now + COOLDOWN + rand() * 2500;
            neutrons.splice(i, 1);
            emit(n.x, n.y, 2);
            break;
          }
        }
      }

      for (const n of nuclei) {
        if (n.hot > 0) n.hot = Math.max(0, n.hot - dt / 600);
        if (n.ready > 0 && n.ready <= now) n.ready = 0;
      }

      // Something is always happening, even if nobody touches it
      if (neutrons.length === 0 && rand() > 0.985) {
        emit(rand() * w, rand() * h, 1);
      }

      draw(false);
      if (running) raf = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (running || reduce.matches) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    let lastEmit = 0;
    const onPointer = (e: PointerEvent) => {
      // Inert while the field is off screen, so scrolling the rest of the
      // page never pays for a layout read.
      if (!running || reduce.matches) return;
      const now = performance.now();
      if (now - lastEmit < 110) return;
      lastEmit = now;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      emit(x, y, 1);
    };

    layout();
    draw(true);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()),
      { threshold: 0.01 },
    );
    io.observe(canvas);

    const onResize = () => {
      layout();
      if (reduce.matches) draw(true);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    // Follow the colour grade when the visitor changes the lens
    const themeWatch = new MutationObserver(() => {
      ink = readHsl("--ink");
      ember = readHsl("--ember");
      emberHot = readHsl("--ember-hot");
      if (reduce.matches) draw(true);
    });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      stopLoop();
      io.disconnect();
      themeWatch.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
};

export default ChainField;
