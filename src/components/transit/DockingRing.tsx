import { motion } from "framer-motion";

/**
 * DOCKING RING — the divider between two places.
 *
 * Two hairlines run out to the edges of the frame while a latch ring turns
 * a quarter of a turn and seats. Quiet, mechanical, and the only thing
 * between one section and the next.
 */
const DockingRing = ({ label }: { label?: string }) => (
  <div aria-hidden className="gutter relative py-14 sm:py-20">
    <div className="flex items-center gap-5 sm:gap-8">
      <motion.span
        className="h-px flex-1 origin-right bg-gradient-to-l from-rule/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.svg
        viewBox="0 0 96 96"
        className="w-12 h-12 sm:w-16 sm:h-16 shrink-0"
        initial={{ rotate: -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle cx="48" cy="48" r="44" fill="none" stroke="hsl(var(--rule) / 0.16)" strokeWidth="1" />
        <circle cx="48" cy="48" r="30" fill="none" stroke="hsl(var(--rule) / 0.24)" strokeWidth="1" />
        <circle cx="48" cy="48" r="7" fill="none" stroke="hsl(var(--gold) / 0.8)" strokeWidth="1.5" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const latch = i % 3 === 0;
          return (
            <line
              key={i}
              x1={48 + Math.cos(a) * 30}
              y1={48 + Math.sin(a) * 30}
              x2={48 + Math.cos(a) * 44}
              y2={48 + Math.sin(a) * 44}
              stroke={latch ? "hsl(var(--gold) / 0.7)" : "hsl(var(--rule) / 0.2)"}
              strokeWidth={latch ? 2 : 1}
            />
          );
        })}
      </motion.svg>

      {label && (
        <span className="font-tele text-xs tracking-[0.3em] uppercase text-ice-dim whitespace-nowrap hidden sm:inline">
          {label}
        </span>
      )}

      <motion.span
        className="h-px flex-1 origin-left bg-gradient-to-r from-rule/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </div>
);

export default DockingRing;
