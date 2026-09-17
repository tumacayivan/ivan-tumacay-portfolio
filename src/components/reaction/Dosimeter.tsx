import { useEffect, useRef } from "react";

/** Sections the meter can name, in page order. */
const SCENES: { id: string; label: string }[] = [
  { id: "top", label: "Ignition" },
  { id: "subject-profile", label: "Personnel file" },
  { id: "trading-bots", label: "The apparatus" },
  { id: "portfolio", label: "Exposure sheets" },
  { id: "services", label: "Working programme" },
  { id: "education", label: "Training" },
  { id: "experience", label: "Test log" },
  { id: "software-portfolio", label: "Field records" },
  { id: "why", label: "Closing statement" },
  { id: "contact", label: "Authorisation" },
];

const SWEEP = 232; // degrees of needle travel
const R = 44;
const MAX_CPS = 900;

const polar = (deg: number, radius: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [58 + radius * Math.cos(a), 58 + radius * Math.sin(a)];
};

const arc = (from: number, to: number, radius: number) => {
  const [x1, y1] = polar(from, radius);
  const [x2, y2] = polar(to, radius);
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${to - from > 180 ? 1 : 0} 1 ${x2} ${y2}`;
};

const toDeg = (cps: number) => -SWEEP / 2 + (cps / MAX_CPS) * SWEEP;

/**
 * The dosimeter clipped to the corner of the frame.
 *
 * Scroll velocity drives the counter like a Geiger tube — the faster the
 * visitor moves through the record, the higher the count and the harder
 * the needle sits against the red band. A frame counter runs off absolute
 * scroll position, and the accumulated dose is the share of the page read.
 *
 * Everything is written straight to the DOM from one rAF loop, so React
 * never re-renders at 60fps on a page this long.
 */
const Dosimeter = () => {
  const needle = useRef<SVGGElement>(null);
  const cpsEl = useRef<HTMLSpanElement>(null);
  const frameEl = useRef<HTMLSpanElement>(null);
  const doseEl = useRef<HTMLSpanElement>(null);
  const doseBar = useRef<HTMLSpanElement>(null);
  const sceneEl = useRef<HTMLSpanElement>(null);
  const hot = useRef<HTMLSpanElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let cps = 0;
    let lastScene = -1;
    let sceneCheck = 0;

    const tick = (t: number) => {
      const dt = Math.max(1, t - lastT);
      const y = window.scrollY;
      const raw = (Math.abs(y - lastY) / dt) * 1000 * 0.9;
      lastY = y;
      lastT = t;

      // The tube reacts fast and decays slowly, like a real count rate
      cps += (Math.min(raw, MAX_CPS - 1) - cps) * (raw > cps ? 0.3 : 0.06);
      const idle = 6 + Math.abs(Math.sin(t / 700)) * 9;
      if (cps < idle) cps += (idle - cps) * 0.08;

      if (needle.current) needle.current.style.transform = `rotate(${toDeg(cps)}deg)`;
      if (cpsEl.current) cpsEl.current.textContent = String(Math.round(cps)).padStart(3, "0");
      if (hot.current) hot.current.dataset.on = cps > MAX_CPS * 0.72 ? "1" : "0";
      if (frameEl.current) frameEl.current.textContent = String(Math.round(y / 12) + 1).padStart(5, "0");

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const read = max > 0 ? Math.min(1, y / max) : 0;
      if (doseEl.current) doseEl.current.textContent = `${String(Math.round(read * 100)).padStart(3, "0")}%`;
      if (doseBar.current) doseBar.current.style.transform = `scaleX(${read.toFixed(4)})`;

      // Stay out of the opening frame; slide in once the visitor moves
      if (root.current) root.current.dataset.show = y > window.innerHeight * 0.6 ? "1" : "0";

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

  const ticks = Array.from({ length: 10 }, (_, i) => (i * MAX_CPS) / 9);

  return (
    <div
      ref={root}
      aria-hidden
      data-show="0"
      className="hidden lg:flex fixed bottom-5 left-5 z-40 items-end gap-2.5 pointer-events-none select-none origin-bottom-left scale-[0.88] transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] data-[show='0']:opacity-0 data-[show='0']:-translate-x-8"
    >
      <div className="relative w-[116px] h-[116px] bg-[hsl(var(--base)/0.82)] backdrop-blur-md border border-line/20">
        <svg viewBox="0 0 116 116" className="absolute inset-0">
          <path d={arc(-SWEEP / 2, toDeg(MAX_CPS * 0.72), R)} fill="none" stroke="hsl(var(--line) / 0.16)" strokeWidth="4" />
          <path d={arc(toDeg(MAX_CPS * 0.72), SWEEP / 2, R)} fill="none" stroke="hsl(var(--ember-deep))" strokeWidth="4" />
          {ticks.map((v, i) => {
            const major = i % 3 === 0;
            const [x1, y1] = polar(toDeg(v), R - (major ? 9 : 5));
            const [x2, y2] = polar(toDeg(v), R - 1);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i >= 7 ? "hsl(var(--ember-deep))" : "hsl(var(--ink) / 0.6)"}
                strokeWidth={major ? 1.6 : 0.9}
              />
            );
          })}
          <g ref={needle} style={{ transformOrigin: "58px 58px", transform: `rotate(${-SWEEP / 2}deg)` }}>
            <line x1="58" y1="66" x2="58" y2="18" stroke="hsl(var(--ember))" strokeWidth="2" strokeLinecap="square" />
          </g>
          <circle cx="58" cy="58" r="4" fill="hsl(var(--ember))" />
        </svg>
        <div className="absolute inset-x-0 bottom-[14px] flex flex-col items-center leading-none">
          <span className="font-doc text-[8px] tracking-[0.22em] text-ink-dim uppercase">Counts / sec</span>
        </div>
      </div>

      <div className="mb-1 flex flex-col gap-2 bg-[hsl(var(--base)/0.82)] backdrop-blur-md border border-line/20 px-3 py-2.5 min-w-[150px]">
        <div className="flex items-center justify-between">
          <span className="font-doc text-[9px] tracking-[0.22em] text-ink-dim uppercase">Rate</span>
          <span
            ref={hot}
            data-on="0"
            className="w-1.5 h-1.5 bg-line/20 data-[on='1']:bg-ember-deep data-[on='1']:shadow-[0_0_10px_hsl(var(--ember-deep))]"
          />
        </div>
        <div className="flex items-end justify-between gap-3 leading-none">
          <span ref={cpsEl} className="font-display text-4xl text-ember tabular-nums">000</span>
          <span className="text-right">
            <span ref={frameEl} className="font-doc text-base font-semibold text-ink tabular-nums">00001</span>
            <span className="block font-doc text-[9px] tracking-[0.22em] text-ink-dim mt-1">Frame</span>
          </span>
        </div>
        <div className="flex items-center justify-between font-doc text-[9px] tracking-[0.18em] uppercase text-ink-dim">
          <span>Dose</span>
          <span ref={doseEl} className="tabular-nums text-ink">000%</span>
        </div>
        <span className="block h-[3px] bg-line/15 overflow-hidden">
          <span ref={doseBar} className="block h-full bg-ember origin-left scale-x-0" />
        </span>
        <div className="border-t border-line/15 pt-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-ember-deep lamp-blink" />
          <span ref={sceneEl} className="font-doc text-[10px] font-semibold tracking-[0.14em] uppercase text-ink truncate">
            Ignition
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dosimeter;
