import { useEffect, useRef, useState } from "react";

/**
 * ClassifiedEffects
 * Global ambient effect layer for the declassified-document aesthetic.
 *
 * Includes:
 *  - Spy / magnifier custom cursor (with crosshair + label)
 *  - Ink splatter trail on click
 *  - Floating paper scraps + dust particles
 *  - Periodic global scan-bar sweep
 *  - Declassification meter (top-of-page scroll progress)
 *  - Canvas ink particle field that reacts to the mouse
 *
 * Respects prefers-reduced-motion (handled in CSS).
 * Skips touch-only devices for cursor effects.
 */

const CLASSIFIED_LABELS = [
  "ANALYZE",
  "INSPECT",
  "REDACT",
  "DECRYPT",
  "TARGET",
  "SCAN",
  "OBSERVE",
  "REVIEW",
  "ZOOM IN",
  "CLEARANCE 5",
];

const SCRAP_SNIPPETS = [
  "// FILE OPENED · CLEARANCE 5\nSUBJECT-X / CASE 001\nSTATUS: AT LARGE",
  "[REDACTED] / [REDACTED]\n* DO NOT DISCLOSE *\nBUREAU OF DIGITAL OPS",
  "FRAME 03 · 1/4000s\nSUBJECT IDENTIFIED\nLOC. 34.0522N 118.2437W",
  "MEMO — INTERNAL ONLY\nRE: PROJECT FILE IT-2026\nACTION REQUIRED",
  "TRANSCRIPT FRAGMENT\n...the subject was highly\nskilled... [CUT]",
];

const ClassifiedEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelRef = useRef<HTMLSpanElement | null>(null);
  const meterRef = useRef<HTMLDivElement | null>(null);
  const [showScan, setShowScan] = useState(false);
  const [enabled, setEnabled] = useState(true);

  /* ---------------- Detect touch & motion preference ---------------- */
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (matchMedia("(hover: none)").matches ||
        matchMedia("(pointer: coarse)").matches);
    const reduceMotion =
      typeof window !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) {
      setEnabled(false);
      return;
    }
    document.documentElement.classList.add("has-spy-cursor");
    return () => {
      document.documentElement.classList.remove("has-spy-cursor");
    };
  }, []);

  /* ---------------- Spy cursor follower ---------------- */
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    let dotTx = 0,
      dotTy = 0,
      dotCx = 0,
      dotCy = 0;
    let lastHotEl: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dotTx = e.clientX;
      dotTy = e.clientY;

      // Determine if hovering an interactive element
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [role="button"], input, textarea, select, [data-spy-hot]'
      ) as HTMLElement | null;
      if (interactive !== lastHotEl) {
        lastHotEl = interactive;
        if (cursorRef.current) {
          const ring = cursorRef.current.querySelector(".spy-cursor-ring");
          if (interactive) {
            ring?.classList.add("hot");
            cursorRef.current.classList.add("hot");
            if (cursorLabelRef.current) {
              const customLabel = interactive.getAttribute("data-spy-label");
              cursorLabelRef.current.textContent =
                customLabel ||
                CLASSIFIED_LABELS[
                  Math.floor(Math.random() * CLASSIFIED_LABELS.length)
                ];
            }
          } else {
            ring?.classList.remove("hot");
            cursorRef.current.classList.remove("hot");
          }
        }
      }
    };

    const tick = () => {
      // Smoothed ring follow
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      // Dot tracks faster
      dotCx += (dotTx - dotCx) * 0.42;
      dotCy += (dotTy - dotCy) * 0.42;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${dotCx}px, ${dotCy}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  /* ---------------- Click ink splatter ---------------- */
  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      // Skip when clicking inside modal/lightbox (z-index above 90)
      const splat = document.createElement("span");
      splat.className = "ink-splat";
      splat.style.left = `${e.clientX}px`;
      splat.style.top = `${e.clientY}px`;
      const rot = Math.random() * 360;
      const scale = 0.7 + Math.random() * 1.1;
      splat.style.background = `radial-gradient(circle at ${30 + Math.random() * 40}% ${
        30 + Math.random() * 40
      }%, hsl(var(--ink-charcoal)) 0%, hsl(var(--ink-charcoal)) 38%, transparent 70%)`;
      splat.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
      document.body.appendChild(splat);

      // A few small satellite droplets
      const droplets = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < droplets; i++) {
        const drop = document.createElement("span");
        drop.className = "ink-splat";
        const dx = (Math.random() - 0.5) * 60;
        const dy = (Math.random() - 0.5) * 60;
        drop.style.left = `${e.clientX + dx}px`;
        drop.style.top = `${e.clientY + dy}px`;
        drop.style.width = `${4 + Math.random() * 8}px`;
        drop.style.height = drop.style.width;
        document.body.appendChild(drop);
        setTimeout(() => drop.remove(), 720);
      }
      setTimeout(() => splat.remove(), 720);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [enabled]);

  /* ---------------- Declassification scroll meter ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!meterRef.current) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = max <= 0 ? 0 : Math.min(1, window.scrollY / max);
      meterRef.current.style.transform = `scaleX(${pct})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Periodic global scan-bar sweep ---------------- */
  useEffect(() => {
    if (!enabled) return;
    let timeout: number;
    const schedule = () => {
      const delay = 22000 + Math.random() * 30000;
      timeout = window.setTimeout(() => {
        setShowScan(true);
        window.setTimeout(() => setShowScan(false), 4600);
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timeout);
  }, [enabled]);

  /* ---------------- Canvas ink-particle field ---------------- */
  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let mouseX = -9999,
      mouseY = -9999;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
    }> = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Occasional ink dab as you move
      if (Math.random() < 0.18 && particles.length < 80) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 18,
          y: mouseY + (Math.random() - 0.5) * 18,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35 + 0.05,
          r: 0.6 + Math.random() * 1.4,
          life: 0,
          maxLife: 600 + Math.random() * 900,
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      // Soft trail fade rather than clear — gives an ink-bleed feel
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.0015 * dt; // gentle gravity, like ink settling
        const alpha = 0.28 * (1 - p.life / p.maxLife);
        ctx.fillStyle = `rgba(20, 16, 12, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  /* ---------------- Random redaction glitch flashes (subtle ambient) ---------------- */
  useEffect(() => {
    if (!enabled) return;
    let timeout: number;
    const schedule = () => {
      const delay = 9000 + Math.random() * 16000;
      timeout = window.setTimeout(() => {
        // Find a candidate text node we can briefly redact
        const candidates = Array.from(
          document.querySelectorAll<HTMLElement>(
            "h2, h3, .font-typewriter, .font-courier"
          )
        ).filter((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.width > 60 &&
            rect.height > 16 &&
            rect.top > 0 &&
            rect.bottom < window.innerHeight
          );
        });
        if (candidates.length) {
          const target =
            candidates[Math.floor(Math.random() * candidates.length)];
          const overlay = document.createElement("span");
          overlay.style.cssText = `
            position: absolute;
            inset: 0;
            background: hsl(var(--ink-charcoal));
            pointer-events: none;
            mix-blend-mode: multiply;
            z-index: 5;
          `;
          // Make sure parent is positioned
          const prevPos = getComputedStyle(target).position;
          if (prevPos === "static") {
            target.style.position = "relative";
          }
          overlay.className = "glitch-redact";
          target.appendChild(overlay);
          setTimeout(() => overlay.remove(), 650);
        }
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timeout);
  }, [enabled]);

  return (
    <>
      {/* Canvas ink-particle field (behind UI but above background) */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Declassification scroll meter */}
      <div className="declass-meter" aria-hidden>
        <div
          ref={meterRef}
          className="declass-meter-fill"
          style={{ width: "100%", transform: "scaleX(0)" }}
        />
      </div>

      {/* Periodic scan bar */}
      {showScan && <div className="global-scan-bar" aria-hidden />}

      {/* Floating paper scraps + dust */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none overflow-hidden z-[3]"
      >
        {enabled &&
          SCRAP_SNIPPETS.map((text, i) => {
            const dur = 38 + i * 7;
            const left = 5 + ((i * 19) % 80);
            const w = 110 + ((i * 13) % 60);
            const rot = -8 + ((i * 5) % 16);
            const delay = -i * 8;
            return (
              <div
                key={i}
                className="paper-scrap"
                style={
                  {
                    left: `${left}%`,
                    width: `${w}px`,
                    transform: `rotate(${rot}deg)`,
                    animationDuration: `${dur}s`,
                    animationDelay: `${delay}s`,
                    "--dur": `${dur}s`,
                  } as React.CSSProperties
                }
              >
                <pre className="m-0 whitespace-pre-wrap font-courier text-[9px] leading-tight opacity-80">
                  {text}
                </pre>
              </div>
            );
          })}

        {enabled &&
          Array.from({ length: 24 }).map((_, i) => {
            const left = (i * 41) % 100;
            const dur = 12 + ((i * 7) % 22);
            const delay = -(i * 3);
            const size = 1 + ((i * 3) % 4);
            const dx = -40 + ((i * 17) % 80);
            return (
              <span
                key={`dust-${i}`}
                className="dust-particle"
                style={
                  {
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${dur}s`,
                    animationDelay: `${delay}s`,
                    "--dur": `${dur}s`,
                    "--dx": `${dx}vw`,
                  } as React.CSSProperties
                }
              />
            );
          })}
      </div>

      {/* Spy custom cursor */}
      {enabled && (
        <>
          <div
            ref={cursorRef}
            className="spy-cursor"
            aria-hidden
          >
            <div className="spy-cursor-ring spy-cursor-h">
              <div className="spy-cursor-cross" />
            </div>
            <span
              ref={cursorLabelRef}
              className="spy-cursor-label"
            >
              INSPECT
            </span>
          </div>
          <div
            ref={cursorDotRef}
            className="spy-cursor-dot"
            aria-hidden
          />
        </>
      )}
    </>
  );
};

export default ClassifiedEffects;
