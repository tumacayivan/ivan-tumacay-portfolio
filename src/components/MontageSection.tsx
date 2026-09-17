import { useEffect, useRef } from "react";
import { montageFrames } from "./PortfolioSection";

const COUNT = montageFrames.length;

const timecode = (p: number) => {
  const total = Math.round(p * (COUNT * 24)); // 24 frames a second, one second a cut
  const f = total % 24;
  const sec = Math.floor(total / 24) % 60;
  const min = Math.floor(total / (24 * 60));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `00:${pad(min)}:${pad(sec)}:${pad(f)}`;
};

/**
 * The montage. The section is tall; the frame inside it is pinned, and
 * scrolling cuts hard from one piece of work to the next — an edit you
 * scrub with the wheel. One rAF loop writes to the DOM, so React never
 * re-renders while you scroll.
 */
const MontageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const codeRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let shown = -1;

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const travel = Math.max(1, rect.height - window.innerHeight);
      const p = Math.max(0, Math.min(1, -rect.top / travel));
      const index = Math.min(COUNT - 1, Math.floor(p * COUNT));

      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (codeRef.current) codeRef.current.textContent = timecode(p);

      if (index !== shown) {
        shown = index;
        frameRefs.current.forEach((f, i) => {
          if (f) f.style.opacity = i === index ? "1" : "0";
        });
        if (numRef.current) numRef.current.textContent = `${String(index + 1).padStart(2, "0")} / ${COUNT}`;
        if (titleRef.current) titleRef.current.textContent = montageFrames[index].title;
        // A single white frame on the cut, the way a splice flashes
        const flash = flashRef.current;
        if (flash) {
          flash.style.opacity = "0.55";
          window.setTimeout(() => {
            if (flash) flash.style.opacity = "0";
          }, 60);
        }
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="montage"
      ref={sectionRef}
      data-scene="Montage"
      data-kanji="編集"
      aria-label="Showreel montage"
      className="relative"
      style={{ height: `${COUNT * 34}vh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[hsl(var(--void))]">
        {/* The frames themselves */}
        {montageFrames.map((f, i) => (
          <div
            key={f.src + i}
            ref={(el) => (frameRefs.current[i] = el)}
            className="absolute inset-0 transition-opacity duration-[90ms]"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <img
              src={f.src}
              alt=""
              loading={i < 4 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[hsl(var(--void)/0.35)]" />
          </div>
        ))}

        <div ref={flashRef} className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-75" style={{ opacity: 0 }} />
        <div aria-hidden className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

        {/* Letterbox */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[8vh] bg-[hsl(var(--void))]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-[8vh] bg-[hsl(var(--void))]" />

        {/* Gate marks */}
        <div aria-hidden className="absolute left-6 top-[10vh] bottom-[10vh] w-3 sprockets rotate-90 origin-left opacity-60" />

        <div className="absolute inset-x-0 top-[10vh] gutter flex items-start justify-between text-[hsl(var(--void-ink))]">
          <div>
            <div className="hud-label !text-sign">Showreel · montage</div>
            <h2 className="display-xl text-[11vw] sm:text-6xl xl:text-7xl mt-2">
              Ten years <span className="lean">in one cut</span>
            </h2>
          </div>
          <div className="text-right font-hud text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <span ref={codeRef} className="block text-drift tabular-nums text-base sm:text-xl">00:00:00:00</span>
            <span ref={numRef} className="block opacity-70 mt-1 tabular-nums">01 / {COUNT}</span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[10vh] gutter flex items-end justify-between gap-6 text-[hsl(var(--void-ink))]">
          <span ref={titleRef} className="font-hud text-sm sm:text-base font-semibold uppercase tracking-[0.14em] truncate">
            {montageFrames[0]?.title}
          </span>
          <span className="hud-label !text-ink-dim shrink-0 hidden sm:block">Keep scrolling to run the tape</span>
        </div>

        {/* Scrub bar */}
        <div aria-hidden className="absolute inset-x-0 bottom-[8vh] h-[3px] bg-[hsl(var(--void-ink)/0.15)]">
          <span ref={barRef} className="block h-full origin-left bg-gradient-to-r from-hud via-drift to-sign" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
};

export default MontageSection;
