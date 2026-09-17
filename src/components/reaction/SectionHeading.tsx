import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Classification code printed down the left edge, e.g. "DOC · 04" */
  code: string;
  /** Typed label above the title */
  kicker: string;
  /** First part of the title */
  title: string;
  /** The word that catches the light */
  accent?: string;
  /** Right-hand intro copy */
  children?: ReactNode;
  /** Optional readout under the kicker, e.g. a count */
  meta?: ReactNode;
}

/**
 * Every section opens like a page of the file: a stencilled code down the
 * margin, a typed caption, and a headline with one word on fire.
 */
const SectionHeading = ({ code, kicker, title, accent, children, meta }: SectionHeadingProps) => (
  <motion.header
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    className="relative mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-[auto_1fr_minmax(0,0.8fr)] gap-6 lg:gap-10 items-end"
  >
    <div
      aria-hidden
      className="hidden lg:flex items-end self-stretch font-doc text-[11px] font-semibold tracking-[0.4em] uppercase text-ember [writing-mode:vertical-rl] rotate-180 pb-1"
    >
      {code}
    </div>

    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span aria-hidden className="lg:hidden slug">{code}</span>
        <span className="slug">{kicker}</span>
        <span aria-hidden className="h-px w-10 bg-ember/60" />
        {meta && <span className="slug slug-dim">{meta}</span>}
      </div>
      <h2 className="display text-[15vw] sm:text-7xl xl:text-8xl text-ink">
        {title}
        {accent && (
          <>
            {" "}
            <span className="ignited">{accent}</span>
          </>
        )}
      </h2>
    </div>

    {children && (
      <div className="text-base sm:text-lg leading-relaxed text-ink-dim max-w-xl lg:pb-2">{children}</div>
    )}
  </motion.header>
);

export default SectionHeading;
