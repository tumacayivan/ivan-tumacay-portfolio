import { useEffect, useRef } from "react";

export const DETONATE_EVENT = "detonate";

/** Fire the signature moment from anywhere on the page. */
export const detonate = () => window.dispatchEvent(new Event(DETONATE_EVENT));

/** The element the shockwave shakes. */
const STAGE_ID = "stage";

const FLASH_RISE = 90;
const FLASH_FALL = 620;
const FLASH_TAIL = 1500;
/** Light arrives first. Sound and pressure take their time. */
const WAVE_DELAY = 1120;
const WAVE_TRAVEL = 780;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeIn = (t: number) => t * t;

/**
 * The detonation.
 *
 * A single frame of blinding light, a long silence, and then — more than a
 * second later — the shockwave finally reaches the viewer and the page
 * flinches. Everything is written straight to the DOM from one rAF loop,
 * so a page with hundreds of images never re-renders because of it.
 *
 * Visitors who ask for reduced motion get a slow warm wash instead: no
 * flash, no ring, no shake.
 */
const Detonation = () => {
  const flash = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLDivElement>(null);
  const wave = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let start = 0;
    let shook = false;

    const frame = (now: number) => {
      const t = now - start;
      const f = flash.current;
      const c = core.current;
      const w = wave.current;

      if (reduce.matches) {
        // A wash, not a flash: peaks low and never fills the frame.
        const p = Math.min(1, t / 900);
        if (f) f.style.opacity = String(0.16 * Math.sin(p * Math.PI));
        if (t < 900) {
          raf = requestAnimationFrame(frame);
        } else if (f) {
          f.style.opacity = "0";
        }
        return;
      }

      // --- the light ---
      let o = 0;
      if (t < FLASH_RISE) o = easeOut(t / FLASH_RISE);
      else if (t < FLASH_RISE + FLASH_FALL) o = 1 - 0.9 * easeIn((t - FLASH_RISE) / FLASH_FALL);
      else if (t < FLASH_TAIL) o = 0.1 * (1 - (t - FLASH_RISE - FLASH_FALL) / (FLASH_TAIL - FLASH_RISE - FLASH_FALL));
      if (f) f.style.opacity = String(Math.max(0, o));
      if (c) {
        const s = 0.2 + 2.6 * easeOut(Math.min(1, t / 700));
        c.style.transform = `translate(-50%, -50%) scale(${s.toFixed(3)})`;
        c.style.opacity = String(Math.max(0, 1 - t / 900));
      }

      // --- the wave, long after ---
      if (t >= WAVE_DELAY) {
        const p = Math.min(1, (t - WAVE_DELAY) / WAVE_TRAVEL);
        if (w) {
          w.style.opacity = String((1 - p) * 0.85);
          w.style.transform = `translate(-50%, -50%) scale(${(0.05 + p * 3.4).toFixed(3)})`;
        }
        if (!shook) {
          shook = true;
          const stage = document.getElementById(STAGE_ID);
          if (stage) {
            stage.classList.remove("quake");
            void stage.offsetWidth; // restart the animation
            stage.classList.add("quake");
            window.setTimeout(() => stage.classList.remove("quake"), 800);
          }
        }
      }

      if (t < WAVE_DELAY + WAVE_TRAVEL + 100) {
        raf = requestAnimationFrame(frame);
      } else {
        if (f) f.style.opacity = "0";
        if (w) w.style.opacity = "0";
      }
    };

    const onFire = () => {
      cancelAnimationFrame(raf);
      shook = false;
      start = performance.now();
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener(DETONATE_EVENT, onFire);
    return () => {
      window.removeEventListener(DETONATE_EVENT, onFire);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[210] overflow-hidden">
      <div
        ref={flash}
        className="absolute inset-0"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle at 50% 44%, hsl(var(--ember-hot)) 0%, hsl(var(--ember-hot)) 12%, hsl(var(--ember)) 30%, hsl(var(--ember-deep)) 48%, transparent 76%)",
        }}
      />
      <div
        ref={core}
        className="absolute left-1/2 top-[44%] h-[34vmax] w-[34vmax] rounded-full"
        style={{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.2)",
          background: "radial-gradient(circle, hsl(var(--ember-hot)) 0%, hsl(var(--ember-hot) / 0.6) 45%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        ref={wave}
        className="absolute left-1/2 top-[44%] h-[34vmax] w-[34vmax] rounded-full border-2"
        style={{
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.05)",
          borderColor: "hsl(var(--ember-hot) / 0.9)",
          boxShadow: "0 0 60px hsl(var(--ember) / 0.55), inset 0 0 60px hsl(var(--ember) / 0.35)",
        }}
      />
    </div>
  );
};

export default Detonation;
