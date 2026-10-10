import { motion, useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Masked slide-up — each line rises out of an invisible slot, like a
 * title card being pulled into frame.
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
  // The slot only clips while the line is rising, so glows and speed
  // trails aren't cut off once it has landed.
  const [landed, setLanded] = useState(false);
  return (
    <span className={`block pb-[0.08em] -mb-[0.08em] ${landed ? "overflow-visible" : "overflow-hidden"} ${className}`}>
      <motion.span
        className="block"
        initial={from}
        {...(play === undefined
          ? { whileInView: target, viewport: { once: true, margin: "-60px" } }
          : { animate: play ? target : from })}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          if (play !== false) setLanded(true);
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

/** Rolls a number up like an odometer when it scrolls into view. */
export const Odometer = ({
  value,
  suffix = "",
  duration = 1.6,
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
 * Livery sweep — an orange/magenta light bar passes across its parent the
 * first time it enters view. Parent must be `relative overflow-hidden`.
 */
export const LiverySweep = ({ delay = 0.1 }: { delay?: number }) => (
  <motion.span
    aria-hidden
    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 z-20"
    style={{
      background:
        "linear-gradient(100deg, transparent 0%, hsl(var(--drift) / 0.0) 20%, hsl(var(--drift) / 0.55) 50%, hsl(var(--sign) / 0.35) 60%, transparent 80%)",
      mixBlendMode: "screen",
    }}
    initial={{ x: "0%" }}
    whileInView={{ x: "420%" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
  />
);
