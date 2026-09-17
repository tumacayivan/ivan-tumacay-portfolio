import { motion, useReducedMotion } from "framer-motion";
import TougeCar from "./TougeCar";

type Variant = "lead" | "rivalA" | "rivalB";

/**
 * A car crosses the page between sections. It is triggered by scroll: the
 * strip waits until it is in view, then a car runs the width of the screen
 * and is gone — the road between two scenes.
 */
const CarPass = ({
  variant = "lead",
  direction = "right",
  label,
}: {
  variant?: Variant;
  direction?: "right" | "left";
  label?: string;
}) => {
  const reduce = useReducedMotion();
  const toRight = direction === "right";

  return (
    <div aria-hidden className="relative h-24 sm:h-28 overflow-hidden">
      {/* The road */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-line/15" />
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] opacity-40"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--line)) 0 26px, transparent 26px 60px)" }}
      />

      {label && (
        <span className="absolute left-1/2 -translate-x-1/2 top-2 hud-label !text-ink-dim bg-asphalt px-3">{label}</span>
      )}

      {!reduce && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: toRight ? "-20vw" : "110vw" }}
          whileInView={{ x: toRight ? "110vw" : "-20vw" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={toRight ? "" : "scale-x-[-1]"}>
            <TougeCar variant={variant} className="w-16 h-8 sm:w-20 sm:h-10 drop-shadow-[0_0_14px_hsl(var(--drift)/0.7)]" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CarPass;
