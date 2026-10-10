import { useEffect, useRef, useState } from "react";
import { acts, story } from "./story";

const pad = (n: number, w = 2) => String(Math.floor(n)).padStart(w, "0");

/** Letterbox bars, timecode, act slate, chapter rail, and the lens flash. */
const Hud = ({ act }: { act: number }) => {
  const tc = useRef<HTMLSpanElement>(null);
  const flash = useRef<HTMLDivElement>(null);
  const tape = useRef<HTMLSpanElement>(null);
  const [clock, setClock] = useState("03:14:07");

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const s = (now - start) / 1000;
      // Timecode runs on real time; the frame counter is the film's position
      if (tc.current) tc.current.textContent = `${pad(s / 3600)}:${pad((s / 60) % 60)}:${pad(s % 60)}:${pad((story.p * 24) % 24)}`;
      if (flash.current) flash.current.style.opacity = String(Math.pow(story.flash, 1.6));
      if (tape.current) tape.current.style.transform = `scaleX(${Math.min(1, story.p / 8.5)})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const id = window.setInterval(() => {
      const d = new Date();
      // The cold open is always 3am; after that the clock is the viewer's own
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    }, 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, []);

  const a = acts[act];

  return (
    <>
      <div ref={flash} className="q-flash" aria-hidden />
      <div className="q-grain" aria-hidden />

      <header className="q-bar q-bar--top">
        <a href="#cold-open" className="flex items-center gap-3 min-w-0">
          <span className="q-serif text-2xl leading-none">
            I<span className="italic text-[var(--q-bull)]">T</span>
          </span>
          <span className="q-label hidden sm:inline !text-[var(--q-ink)]">Your Remote Right Hand</span>
        </a>
        <div className="q-label truncate text-right">
          <span className="text-[var(--q-bull)]">{a.act}</span>
          <span className="hidden sm:inline"> — {a.title}</span>
        </div>
        <a href="/Ivan-Tumacay-Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="q-label !text-[var(--q-ink)] hover:!text-[var(--q-amber)] shrink-0">
          Resume ↗
        </a>
      </header>

      <footer className="q-bar q-bar--bottom" aria-hidden>
        <div className="flex items-center gap-3 q-label">
          <span className="q-rec" />
          <span className="hidden sm:inline">REC</span>
          <span ref={tc} className="tabular-nums !text-[var(--q-ink)]">00:00:00:00</span>
        </div>
        <div className="hidden md:block flex-1 mx-8 h-px bg-[var(--q-line)] relative overflow-hidden">
          <span ref={tape} className="absolute inset-0 origin-left bg-[var(--q-bull)]" style={{ transform: "scaleX(0)" }} />
        </div>
        <div className="q-label text-right truncate">
          <span className="!text-[var(--q-ink)]">{act === 0 ? "03:14:07" : act === acts.length - 1 ? "06:02:00" : a.time}</span>
          <span className="hidden sm:inline"> · {a.where}</span>
          <span className="hidden lg:inline"> · local {clock}</span>
        </div>
      </footer>

      <nav className="q-rail hidden md:flex" aria-label="Acts">
        {acts.map((x, i) => (
          <a key={x.id} href={`#${x.id}`} aria-current={i === act ? "step" : undefined} aria-label={`${x.act}: ${x.title}`}>
            <span className="q-label !text-[10px] whitespace-nowrap">{x.title}</span>
            <i />
          </a>
        ))}
      </nav>
    </>
  );
};

export default Hud;
