import { useEffect, useRef, useState } from "react";

/**
 * HeroEffects — overlay that adds visual punch to the hero:
 *  - A diagonal laser-scanner sweep that runs every ~6s
 *  - A radar-pulse + crosshair targeting overlay
 *  - A subtle parallax tilt that follows the cursor
 *
 * Mounts as fixed-positioned overlay constrained to the hero viewport.
 */
const HeroEffects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(true);
  const [crossPos, setCrossPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Only animate when hero is in view (above the fold)
    const onScroll = () => {
      const y = window.scrollY;
      setActive(y < window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setCrossPos({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[4] overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Diagonal laser scanner sweep */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%]"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 45%, hsl(0 0% 0% / 0.10) 49%, hsl(0 0% 0% / 0.22) 50%, hsl(0 0% 0% / 0.10) 51%, transparent 55%, transparent 100%)",
          mixBlendMode: "multiply",
          animation: "hero-laser 6s ease-in-out infinite",
          transformOrigin: "center",
        }}
      />

      {/* Radar crosshair following cursor (subtle) */}
      <div
        className="absolute"
        style={{
          left: `${crossPos.x}%`,
          top: `${crossPos.y}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.35s ease-out, top 0.35s ease-out",
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          style={{ opacity: 0.18 }}
        >
          <circle
            cx="90"
            cy="90"
            r="85"
            fill="none"
            stroke="hsl(var(--ink-charcoal))"
            strokeWidth="0.6"
            strokeDasharray="3 4"
          />
          <circle
            cx="90"
            cy="90"
            r="60"
            fill="none"
            stroke="hsl(var(--ink-charcoal))"
            strokeWidth="0.6"
          />
          <circle
            cx="90"
            cy="90"
            r="35"
            fill="none"
            stroke="hsl(var(--ink-charcoal))"
            strokeWidth="0.6"
            strokeDasharray="2 3"
          />
          <line
            x1="0"
            y1="90"
            x2="180"
            y2="90"
            stroke="hsl(var(--ink-charcoal))"
            strokeWidth="0.6"
          />
          <line
            x1="90"
            y1="0"
            x2="90"
            y2="180"
            stroke="hsl(var(--ink-charcoal))"
            strokeWidth="0.6"
          />
          <circle cx="90" cy="90" r="3" fill="hsl(var(--ink-charcoal))" />
        </svg>
      </div>

      {/* Corner brackets to suggest a viewfinder */}
      <div className="absolute top-20 left-4 w-8 h-8 border-l-2 border-t-2 border-ink/30" />
      <div className="absolute top-20 right-4 w-8 h-8 border-r-2 border-t-2 border-ink/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-ink/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-ink/30" />

      {/* Targeting label, top-right */}
      <div className="absolute top-24 right-6 font-courier text-[10px] sm:text-[11px] tracking-[0.4em] text-ink-brown uppercase opacity-60">
        <div>◉ TRACKING SUBJECT</div>
        <div className="text-right mt-0.5">
          {crossPos.x.toFixed(1)}° / {crossPos.y.toFixed(1)}°
        </div>
      </div>

      <style>{`
        @keyframes hero-laser {
          0%   { transform: translate(-30%, -30%) rotate(0deg); opacity: 0; }
          15%  { opacity: 1; }
          50%  { transform: translate(30%, 30%) rotate(0deg); opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translate(60%, 60%) rotate(0deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroEffects;
