import { useEffect, useRef } from "react";

/** Sections the HUD can name, in page order. */
const SCENES: { id: string; label: string }[] = [
  { id: "top", label: "Start line" },
  { id: "subject-profile", label: "Driver" },
  { id: "trading-bots", label: "Trading bots" },
  { id: "portfolio", label: "Showreel" },
  { id: "services", label: "Services" },
  { id: "process", label: "Pit stop" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Race log" },
  { id: "software-portfolio", label: "Garage" },
  { id: "why", label: "Spec sheet" },
  { id: "contact", label: "Contact" },
];

/** Upper speed (km/h) of each gear; the last one tops out the gauge. */
const GEARS = [22, 55, 95, 140, 195, 300];
const MAX_RPM = 9000;
const REDLINE = 7500;
const SWEEP = 270; // degrees of needle travel
const R = 58;

const polar = (deg: number, radius: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [70 + radius * Math.cos(a), 70 + radius * Math.sin(a)];
};

const arc = (from: number, to: number, radius: number) => {
  const [x1, y1] = polar(from, radius);
  const [x2, y2] = polar(to, radius);
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${to - from > 180 ? 1 : 0} 1 ${x2} ${y2}`;
};

const rpmToDeg = (rpm: number) => -SWEEP / 2 + (rpm / MAX_RPM) * SWEEP;

/**
 * Gauge cluster pinned to the corner of the screen.
 * Scroll speed drives the speedo, an automatic gearbox picks the gear,
 * the tacho climbs inside each gear and the shift light fires near the
 * redline. Everything is written straight to the DOM from one rAF loop so
 * React never re-renders at 60fps.
 */
const DriftHUD = () => {
  const needle = useRef<SVGGElement>(null);
  const speedEl = useRef<HTMLSpanElement>(null);
  const gearEl = useRef<HTMLSpanElement>(null);
  const sceneEl = useRef<HTMLSpanElement>(null);
  const shift = useRef<HTMLSpanElement>(null);
  const progress = useRef<SVGPathElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let speed = 0;
    let rpm = 900;
    let lastScene = -1;
    let sceneCheck = 0;

    const tick = (t: number) => {
      const dt = Math.max(1, t - lastT);
      const y = window.scrollY;
      const raw = (Math.abs(y - lastY) / dt) * 1000 * 0.06; // px/s converted to "km/h"
      lastY = y;
      lastT = t;

      // Throttle response is quick, engine braking is slower
      speed += (Math.min(raw, 299) - speed) * (raw > speed ? 0.18 : 0.05);
      if (speed < 0.5) speed = 0;

      const gear = speed === 0 ? 0 : GEARS.findIndex((top) => speed <= top) + 1 || GEARS.length;
      const lo = gear <= 1 ? 0 : GEARS[gear - 2];
      const hi = GEARS[Math.max(0, gear - 1)];
      const targetRpm = gear === 0 ? 900 + Math.sin(t / 180) * 40 : 1800 + ((speed - lo) / (hi - lo)) * 6600;
      rpm += (targetRpm - rpm) * 0.2;

      if (needle.current) needle.current.style.transform = `rotate(${rpmToDeg(rpm)}deg)`;
      if (speedEl.current) speedEl.current.textContent = String(Math.round(speed)).padStart(3, "0");
      if (gearEl.current) gearEl.current.textContent = gear === 0 ? "N" : String(gear);
      if (shift.current) shift.current.dataset.on = rpm > REDLINE ? "1" : "0";

      // Stay out of the hero's way; roll in once the visitor starts driving
      if (root.current) root.current.dataset.show = y > window.innerHeight * 0.6 ? "1" : "0";

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.strokeDashoffset = String(1 - (max > 0 ? y / max : 0));

      if (t - sceneCheck > 200) {
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

  const ticks = Array.from({ length: MAX_RPM / 500 + 1 }, (_, i) => i * 500);

  return (
    <div
      ref={root}
      aria-hidden
      data-show="0"
      className="hidden lg:flex fixed bottom-5 left-5 z-40 items-end gap-2.5 pointer-events-none select-none origin-bottom-left scale-[0.85] transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] data-[show='0']:opacity-0 data-[show='0']:-translate-x-8"
    >
      <div className="relative w-[140px] h-[140px] rounded-full bg-[hsl(var(--asphalt)/0.82)] backdrop-blur-md border border-line/10 shadow-[0_20px_50px_-20px_hsl(var(--shadow))]">
        <svg viewBox="0 0 140 140" className="absolute inset-0">
          {/* scroll progress ring */}
          <circle cx="70" cy="70" r="67" fill="none" stroke="hsl(var(--line) / 0.08)" strokeWidth="2" />
          <path
            ref={progress}
            d="M 70 3 A 67 67 0 1 1 69.99 3"
            fill="none"
            stroke="hsl(var(--hud))"
            strokeWidth="2"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
          />
          <path d={arc(-SWEEP / 2, rpmToDeg(REDLINE), R)} fill="none" stroke="hsl(var(--line) / 0.12)" strokeWidth="5" />
          <path d={arc(rpmToDeg(REDLINE), SWEEP / 2, R)} fill="none" stroke="hsl(var(--sign))" strokeWidth="5" />
          {ticks.map((rpm) => {
            const major = rpm % 1000 === 0;
            const [x1, y1] = polar(rpmToDeg(rpm), R - (major ? 10 : 6));
            const [x2, y2] = polar(rpmToDeg(rpm), R - 2);
            const [lx, ly] = polar(rpmToDeg(rpm), R - 19);
            return (
              <g key={rpm}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={rpm >= REDLINE ? "hsl(var(--sign))" : "hsl(var(--ink) / 0.7)"} strokeWidth={major ? 2 : 1} />
                {major && (
                  <text x={lx} y={ly + 3} textAnchor="middle" className="font-hud" fontSize="9" fontWeight="600" fill="hsl(var(--ink-dim))">
                    {rpm / 1000}
                  </text>
                )}
              </g>
            );
          })}
          <g ref={needle} style={{ transformOrigin: "70px 70px", transform: `rotate(${-SWEEP / 2}deg)` }}>
            <line x1="70" y1="80" x2="70" y2="18" stroke="hsl(var(--drift))" strokeWidth="3" strokeLinecap="round" />
          </g>
          <circle cx="70" cy="70" r="6" fill="hsl(var(--drift))" />
        </svg>
        <div className="absolute inset-x-0 bottom-[22px] flex flex-col items-center leading-none">
          <span className="font-hud text-[8px] tracking-[0.2em] text-ink-dim">x1000 RPM</span>
        </div>
      </div>

      <div className="mb-2 flex flex-col gap-1.5 rounded-sm bg-[hsl(var(--asphalt)/0.82)] backdrop-blur-md border border-line/10 px-3 py-2 min-w-[132px]">
        <div className="flex items-center justify-between">
          <span className="font-hud text-[9px] tracking-[0.2em] text-ink-dim uppercase">Gear</span>
          <span
            ref={shift}
            data-on="0"
            className="w-2 h-2 rounded-full bg-line/15 data-[on='1']:bg-sign data-[on='1']:shadow-[0_0_10px_hsl(var(--sign))]"
          />
        </div>
        <div className="flex items-end justify-between gap-3">
          <span ref={gearEl} className="font-display text-4xl leading-none text-drift">N</span>
          <span className="text-right leading-none">
            <span ref={speedEl} className="font-hud text-2xl font-bold text-hud tabular-nums">000</span>
            <span className="block font-hud text-[9px] tracking-[0.2em] text-ink-dim mt-1">KM/H</span>
          </span>
        </div>
        <div className="border-t border-line/10 pt-1.5 flex items-center gap-1.5">
          <span className="w-1 h-1 bg-hud rounded-full" />
          <span ref={sceneEl} className="font-hud text-[10px] font-semibold tracking-[0.16em] uppercase text-ink truncate">
            Start line
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriftHUD;
