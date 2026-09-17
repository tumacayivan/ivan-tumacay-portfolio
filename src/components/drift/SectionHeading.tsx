import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Japanese label shown as a vertical neon sign */
  kanji: string;
  /** Small HUD label above the title */
  kicker: string;
  /** First part of the title */
  title: string;
  /** Leaning orange word(s) after the title */
  accent?: string;
  /** Right-hand intro copy */
  children?: ReactNode;
  /** Optional readout under the kicker, e.g. a count */
  meta?: ReactNode;
}

const SectionHeading = ({ kanji, kicker, title, accent, children, meta }: SectionHeadingProps) => (
  <motion.header
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    className="relative mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-[auto_1fr_minmax(0,0.8fr)] gap-6 lg:gap-10 items-end"
  >
    <div aria-hidden className="hidden lg:block neon-kanji vertical text-4xl xl:text-5xl self-stretch">
      {kanji}
    </div>

    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span aria-hidden className="lg:hidden neon-kanji text-lg">{kanji}</span>
        <span className="hud-label">{kicker}</span>
        <span aria-hidden className="h-px w-10 bg-hud/50" />
        {meta && <span className="hud-label !text-ink-dim">{meta}</span>}
      </div>
      <h2 className="display-xl text-[13vw] sm:text-7xl xl:text-8xl text-ink">
        {title}
        {accent && (
          <>
            {" "}
            <span className="lean speed-trail">{accent}</span>
          </>
        )}
      </h2>
    </div>

    {children && (
      <div className="text-lg sm:text-xl leading-relaxed text-ink-dim max-w-xl lg:pb-2">{children}</div>
    )}
  </motion.header>
);

export default SectionHeading;
