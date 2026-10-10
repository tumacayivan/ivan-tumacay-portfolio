import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video, Bot, Megaphone,
} from "lucide-react";
import SectionHeading from "./drift/SectionHeading";

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

/** Words that light up in orange instead of ink */
const HIGHLIGHT = new Set(["engineering", "operations", "enterprise", "software", "scale", "one"]);

const Word = ({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const clean = word.replace(/[^a-z]/gi, "").toLowerCase();
  return (
    <motion.span aria-hidden style={{ opacity, y }} className={`inline-block mr-[0.28em] ${HIGHLIGHT.has(clean) ? "text-drift" : ""}`}>
      {word}
    </motion.span>
  );
};

const WhySection = () => {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: statementRef, offset: ["start 85%", "end 45%"] });
  const words = STATEMENT.split(" ");

  return (
    <section id="why" data-scene="Spec sheet" data-kanji="理由" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="gutter relative">
        <SectionHeading kanji="理由" kicker="Why work with me" title="Beyond" accent="expectations" />

        <p
          ref={statementRef}
          className="font-display text-3xl sm:text-5xl xl:text-6xl uppercase leading-[1.08] text-ink max-w-6xl mb-20"
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

        <div className="hud-label mb-5">In one seat</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line/10 border border-line/10">
          {reasons.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-asphalt p-6 min-h-[150px] flex flex-col justify-between overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-drift translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
              />
              <Icon className="relative w-6 h-6 text-hud group-hover:text-on-drift transition-colors" />
              <span className="relative font-hud text-lg font-bold uppercase leading-tight text-ink group-hover:text-on-drift transition-colors">
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
