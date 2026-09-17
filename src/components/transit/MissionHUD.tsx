import { useEffect, useRef } from "react";

/** Places the mission passes through, in page order. */
const SCENES: { id: string; label: string }[] = [
  { id: "top", label: "Departure" },
  { id: "subject-profile", label: "Crew" },
  { id: "trading-bots", label: "Instrument bay" },
  { id: "portfolio", label: "Archive" },
  { id: "services", label: "The monolith" },
  { id: "education", label: "Training" },
  { id: "experience", label: "Mission log" },
  { id: "software-portfolio", label: "Worlds visited" },
  { id: "why", label: "What comes home" },
  { id: "contact", label: "Transmission" },
];

/** Scroll speed that counts as the speed of light, in px/s. */
const C = 5200;

const clock = (ms: number) => {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

/**
 * MISSION CLOCK — the instrument pinned to the corner of the frame.
 *
 * It reads elapsed mission time, the traverse through the page, where the
 * ship is, and a relativity panel: how fast the visitor is moving through
 * the document as a fraction of c, and how far the clock on board has
 * fallen behind the one at home.
 *
 * Everything is written straight to the DOM from one rAF loop, so React
 * never re-renders while you scroll.
 */
const MissionHUD = () => {
  const root = useRef<HTMLDivElement>(null);
  const elapsedEl = useRef<HTMLSpanElement>(null);
  const betaEl = useRef<HTMLSpanElement>(null);
  const driftEl = useRef<HTMLSpanElement>(null);
  const sceneEl = useRef<HTMLSpanElement>(null);
  const traverseEl = useRef<HTMLSpanElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const needle = useRef<SVGLineElement>(null);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    let lastY = window.scrollY;
    let lastT = t0;
    let beta = 0;
    let drift = 0; // ms the ship clock has lost against home
    let lastScene = -1;
    let sceneCheck = 0;
    let lastShownSecond = -1;

    const tick = (t: number) => {
      const dt = Math.max(1, t - lastT);
      const y = window.scrollY;
      const raw = (Math.abs(y - lastY) / dt) * 1000;
      lastY = y;
      lastT = t;

      // Quick to accelerate, slow to coast down
      const targetBeta = Math.min(0.985, raw / C);
      beta += (targetBeta - beta) * (targetBeta > beta ? 0.22 : 0.035);
      if (beta < 0.0005) beta = 0;

      // Proper time runs slow by the Lorentz factor
      drift += dt * (1 - Math.sqrt(1 - beta * beta));

      const elapsed = t - t0;
      const second = Math.floor(elapsed / 1000);
      if (second !== lastShownSecond) {
        lastShownSecond = second;
        if (elapsedEl.current) elapsedEl.current.textContent = clock(elapsed);
      }
      if (betaEl.current) betaEl.current.textContent = beta.toFixed(3);
      if (driftEl.current) driftEl.current.textContent = `+${(drift / 1000).toFixed(2)}s`;
      if (needle.current) needle.current.style.transform = `rotate(${-120 + beta * 240}deg)`;

      // Stay out of the hero's way; arrive once the transit is under way
      if (root.current) root.current.dataset.show = y > window.innerHeight * 0.55 ? "1" : "0";

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, y / max) : 0;
      if (ring.current) ring.current.style.strokeDashoffset = String(1 - p);
      if (traverseEl.current) traverseEl.current.textContent = `${Math.round(p * 100)}%`;

      if (t - sceneCheck > 220) {
        sceneCheck = t;
        const line = window.innerHeight * 0.4;
        let idx = 0;
        SCENES.forEach((s, i) => {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top <= line) idx = i;
        });
        if (idx !== lastScene && sceneEl.current) {
          lastScene = idx;
          sceneEl.current.textContent = SCENES[idx].label;
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      data-show="0"
      className="hidden lg:flex fixed bottom-5 left-5 z-40 items-stretch gap-2 pointer-events-none select-none transition-[opacity,transform] duration-1000 ease-transit data-[show='0']:opacity-0 data-[show='0']:translate-y-6"
    >
      {/* Traverse dial */}
      <div className="relative w-[104px] h-[104px] instrument backdrop-blur-md">
        <svg viewBox="0 0 104 104" className="absolute inset-0">
          <circle cx="52" cy="52" r="44" fill="none" stroke="hsl(var(--rule) / 0.1)" strokeWidth="1" />
          <circle
            ref={ring}
            cx="52"
            cy="52"
            r="44"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="2"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
            transform="rotate(-90 52 52)"
          />
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const inner = i % 6 === 0 ? 32 : 36;
            return (
              <line
                key={i}
                x1={52 + Math.cos(a) * inner}
                y1={52 + Math.sin(a) * inner}
                x2={52 + Math.cos(a) * 39}
                y2={52 + Math.sin(a) * 39}
                stroke="hsl(var(--rule) / 0.25)"
                strokeWidth="1"
              />
            );
          })}
          <g style={{ transformOrigin: "52px 52px" }}>
            <line
              ref={needle}
              x1="52"
              y1="52"
              x2="52"
              y2="22"
              stroke="hsl(var(--signal))"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ transformOrigin: "52px 52px", transform: "rotate(-120deg)" }}
            />
          </g>
          <circle cx="52" cy="52" r="2.5" fill="hsl(var(--gold))" />
        </svg>
        <div className="absolute inset-x-0 bottom-3 text-center">
          <span ref={traverseEl} className="font-tele text-xs font-medium text-ice tabular-nums">
            0%
          </span>
          <span className="block font-tele text-[0.75rem] leading-tight tracking-[0.2em] text-ice-dim">TRAVERSE</span>
        </div>
      </div>

      {/* Mission clock */}
      <div className="instrument backdrop-blur-md px-3.5 py-2.5 min-w-[196px] flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-tele text-[0.75rem] tracking-[0.24em] text-ice-dim">T+</span>
            <span ref={elapsedEl} className="font-tele text-xl font-medium text-ice tabular-nums">
              00:00:00
            </span>
          </div>
          <div className="mt-2 pt-2 border-t border-rule/10 grid grid-cols-2 gap-2">
            <div>
              <div className="font-tele text-[0.75rem] tracking-[0.18em] text-ice-dim">VELOCITY</div>
              <div className="font-tele text-sm text-signal tabular-nums">
                <span ref={betaEl}>0.000</span> c
              </div>
            </div>
            <div>
              <div className="font-tele text-[0.75rem] tracking-[0.18em] text-ice-dim">Δ HOME</div>
              <div className="font-tele text-sm text-gold tabular-nums">
                <span ref={driftEl}>+0.00s</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2.5 pt-2 border-t border-rule/10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon shrink-0" />
          <span ref={sceneEl} className="font-tele text-xs tracking-[0.14em] uppercase text-ice truncate">
            Departure
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionHUD;
