import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Stage of the mission, e.g. "02" */
  stage: string;
  /** Small telemetry label above the title */
  kicker: string;
  /** First part of the title */
  title: string;
  /** Lit word(s) after the title */
  accent?: string;
  /** Right-hand intro copy */
  children?: ReactNode;
  /** Optional readout beside the kicker, e.g. a count */
  meta?: ReactNode;
}

const SectionHeading = ({ stage, kicker, title, accent, children, meta }: SectionHeadingProps) => (
  <motion.header
    initial={{ opacity: 0, y: 34 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    className="relative mb-14 sm:mb-20 grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,0.78fr)] gap-6 lg:gap-12 items-end"
  >
    {/* Stage rail */}
    <div aria-hidden className="hidden lg:flex flex-col items-center gap-4 self-stretch pb-3">
      <span className="font-tele text-sm tracking-[0.2em] text-gold">{stage}</span>
      <span className="w-px flex-1 bg-gradient-to-b from-gold/60 to-transparent" />
    </div>

    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
        <span aria-hidden className="lg:hidden font-tele text-sm tracking-[0.2em] text-gold">
          {stage}
        </span>
        <span className="tele-label">{kicker}</span>
        {meta && (
          <>
            <span aria-hidden className="h-px w-8 bg-rule/25" />
            <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{meta}</span>
          </>
        )}
      </div>
      <h2 className="plate text-[14vw] sm:text-7xl xl:text-8xl text-ice">
        {title}
        {accent && (
          <>
            {" "}
            <span className="lit">{accent}</span>
          </>
        )}
      </h2>
    </div>

    {children && (
      <div className="text-lg leading-relaxed text-ice-dim max-w-xl lg:pb-3">{children}</div>
    )}
  </motion.header>
);

export default SectionHeading;
