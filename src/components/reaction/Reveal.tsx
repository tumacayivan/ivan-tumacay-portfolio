import { motion, useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Masked slide-up — each line rises out of an invisible slot, the way a
 * title card is pulled into frame.
 */
export const MaskLine = ({
  children,
  delay = 0,
  className = "",
  play,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** When given, animate as soon as this is true instead of on scroll */
  play?: boolean;
}) => {
  const target = { y: "0%", opacity: 1 };
  const from = { y: "105%", opacity: 0 };
  // The slot only clips while the line is rising, so glows aren't cut off
  // once it has landed.
  const [landed, setLanded] = useState(false);
  return (
    <span className={`block pb-[0.08em] -mb-[0.08em] ${landed ? "overflow-visible" : "overflow-hidden"} ${className}`}>
      <motion.span
        className="block"
        initial={from}
        {...(play === undefined
          ? { whileInView: target, viewport: { once: true, margin: "-60px" } }
          : { animate: play ? target : from })}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          if (play !== false) setLanded(true);
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

/** Counts up like a mechanical register when it scrolls into view. */
export const Counter = ({
  value,
  suffix = "",
  duration = 1.8,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(value);
      return;
    }
    const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    const unsub = count.on("change", (v) => setShown(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, duration, reduce, count]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {shown}
      {suffix}
    </span>
  );
};

/**
 * Light sweep — a bar of warm light passes across its parent the first
 * time it enters view, like a lamp swinging past. Parent must be
 * `relative overflow-hidden`.
 */
export const LightSweep = ({ delay = 0.1 }: { delay?: number }) => (
  <motion.span
    aria-hidden
    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 z-20"
    style={{
      background:
        "linear-gradient(100deg, transparent 0%, hsl(var(--ember) / 0) 20%, hsl(var(--ember) / 0.35) 50%, hsl(var(--ember-hot) / 0.25) 62%, transparent 82%)",
      mixBlendMode: "screen",
    }}
    initial={{ x: "0%" }}
    whileInView={{ x: "420%" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.2, delay, ease: [0.65, 0, 0.35, 1] }}
  />
);
