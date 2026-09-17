import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video, Bot, Megaphone,
} from "lucide-react";
import SectionHeading from "./transit/SectionHeading";

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

/** Words that catch the light instead of staying ice */
const HIGHLIGHT = new Set(["engineering", "operations", "enterprise", "software", "scale", "one"]);

const Word = ({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [6, 0]);
  const clean = word.replace(/[^a-z]/gi, "").toLowerCase();
  return (
    <motion.span aria-hidden style={{ opacity, y }} className={`inline-block mr-[0.26em] ${HIGHLIGHT.has(clean) ? "text-gold" : ""}`}>
      {word}
    </motion.span>
  );
};

/**
 * WHAT COMES HOME — the reason the trip was worth taking.
 *
 * One statement, lit word by word as the visitor moves through it, and
 * then the plain list of everything that lands back on the table.
 */
const WhySection = () => {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: statementRef, offset: ["start 85%", "end 45%"] });
  const words = STATEMENT.split(" ");

  return (
    <section
      id="why"
      data-scene="What comes home"
      data-coord="Stage 09 · Return"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="gutter relative">
        <SectionHeading stage="09" kicker="Why work with me" title="What comes" accent="home" />

        <p
          ref={statementRef}
          className="plate text-3xl sm:text-5xl xl:text-6xl leading-[1.12] text-ice max-w-6xl mb-24"
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

        <div className="tele-label mb-6">In one seat</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-rule/10 border border-rule/10">
          {reasons.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: (i % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-deep p-6 min-h-[156px] flex flex-col justify-between overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms] ease-transit"
              />
              <Icon className="relative w-5 h-5 text-signal group-hover:text-on-gold transition-colors duration-500" aria-hidden />
              <span className="relative font-tele text-sm font-medium uppercase tracking-[0.08em] leading-snug text-ice group-hover:text-on-gold transition-colors duration-500">
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
