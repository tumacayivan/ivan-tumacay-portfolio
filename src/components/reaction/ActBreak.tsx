import { motion } from "framer-motion";

/**
 * The spine of the record. Four acts — theory, the build, the test, the
 * consequence — each announced by a rule that draws itself across the
 * page as you arrive.
 */
const ActBreak = ({ numeral, title, line }: { numeral: string; title: string; line: string }) => (
  <div className="gutter relative py-12 sm:py-16">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-px w-full origin-left bg-gradient-to-r from-ember via-line/25 to-transparent"
    />
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
    >
      <span className="font-doc text-[11px] font-semibold tracking-[0.4em] uppercase text-ember shrink-0">
        Part {numeral}
      </span>
      <h2 className="display text-3xl sm:text-5xl text-ink leading-none">{title}</h2>
      <p className="font-doc text-xs sm:text-sm text-ink-dim sm:ml-auto sm:text-right max-w-md leading-relaxed">
        {line}
      </p>
    </motion.div>
  </div>
);

export default ActBreak;
