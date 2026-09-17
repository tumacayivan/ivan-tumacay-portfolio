import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video, Bot, Megaphone,
} from "lucide-react";
import SectionHeading from "./reaction/SectionHeading";

const reasons = [
  { icon: Code2, label: "Full-stack software development" },
  { icon: Server, label: "Enterprise system architecture" },
  { icon: Headphones, label: "Virtual assistant services" },
  { icon: Share2, label: "Social media management" },
  { icon: Palette, label: "Graphics design & branding" },
  { icon: Video, label: "Video editing & multimedia" },
  { icon: Bot, label: "AI & automation engineering" },
  { icon: Cloud, label: "Cloud infrastructure & DevOps" },
  { icon: Shield, label: "Security & scalability expertise" },
  { icon: Megaphone, label: "Digital marketing support" },
];

const STATEMENT =
  "Ivan combines technical engineering expertise with complete virtual assistant and digital operations services — from enterprise software to social media, graphics and digital marketing — so your business can scale with one versatile professional.";

/** The words that catch the light as the statement is read out. */
const HIGHLIGHT = new Set(["engineering", "operations", "enterprise", "software", "scale", "one"]);

const Word = ({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [6, 0]);
  const clean = word.replace(/[^a-z]/gi, "").toLowerCase();
  return (
    <motion.span aria-hidden style={{ opacity, y }} className={`inline-block mr-[0.26em] ${HIGHLIGHT.has(clean) ? "text-ember" : ""}`}>
      {word}
    </motion.span>
  );
};

/**
 * The closing statement. It is not animated for decoration — the words
 * arrive at reading speed, so the sentence lands one idea at a time.
 */
const WhySection = () => {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: statementRef, offset: ["start 85%", "end 45%"] });
  const words = STATEMENT.split(" ");

  return (
    <section
      id="why"
      data-scene="Closing statement"
      data-code="Part IV · 09"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 chalkboard [mask-image:radial-gradient(ellipse_at_70%_20%,#000,transparent_70%)]" />
      <div className="gutter relative">
        <SectionHeading code="Doc · 09" kicker="Why work with me" title="For the" accent="record" />

        <p className="font-doc text-sm sm:text-base tracking-[0.08em] uppercase text-ink-dim mb-8 max-w-2xl">
          Read into the record, in full:
        </p>

        <p
          ref={statementRef}
          className="display text-3xl sm:text-5xl xl:text-6xl leading-[1.06] text-ink max-w-6xl mb-8"
        >
          <span className="sr-only">{STATEMENT}</span>
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 3) / words.length)]}
            />
          ))}
        </p>

        <div className="flex items-center gap-4 mb-20 max-w-6xl">
          <span aria-hidden className="h-px flex-1 bg-line/20" />
          <span className="font-doc text-[11px] tracking-[0.3em] uppercase text-ink-dim">Statement ends</span>
        </div>

        <div className="slug mb-5">In one seat</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line/15 border border-line/15">
          {reasons.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-base p-6 min-h-[148px] flex flex-col justify-between overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-ember translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
              />
              <Icon className="relative w-6 h-6 text-ember group-hover:text-on-ember transition-colors" />
              <span className="relative font-doc text-sm font-semibold uppercase tracking-[0.04em] leading-snug text-ink group-hover:text-on-ember transition-colors">
                {label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhySection;
