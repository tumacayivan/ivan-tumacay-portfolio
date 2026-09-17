import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Code2, Headphones, Bot, Palette, Megaphone, Globe } from "lucide-react";
import { useRef } from "react";
import Singularity from "./transit/Singularity";
import { MaskLine, Odometer } from "./transit/Reveal";
import { useIntroDone } from "./transit/IntroSequence";

const roles = [
  { icon: Code2, label: "Full-stack dev" },
  { icon: Bot, label: "AI & automation" },
  { icon: Headphones, label: "Virtual assistant" },
  { icon: Palette, label: "Graphics & video" },
  { icon: Megaphone, label: "Digital marketing" },
  { icon: Globe, label: "Cloud & APIs" },
];

const stats = [
  { value: 10, suffix: "", label: "Years building" },
  { value: 18, suffix: "", label: "Live sites" },
  { value: 42, suffix: "", label: "Projects shipped" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * DEPARTURE — the approach.
 *
 * Nothing but the name, a little instrumentation, and the thing we are
 * falling toward. The copy lifts away as the visitor starts moving; the
 * disc opens up behind it.
 */
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const copyBlur = useTransform(scrollYProgress, [0, 0.72], ["blur(0px)", "blur(12px)"]);

  return (
    <section
      id="top"
      ref={ref}
      data-scene="Departure"
      data-coord="Stage 01 · Outbound"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* THE SINGULARITY */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="absolute aspect-square
            w-[150vw] -right-[48vw] -top-[12vh]
            sm:w-[118vw] sm:-right-[34vw] sm:-top-[6vh]
            lg:w-[94vh] lg:-right-[13vh] lg:top-1/2 lg:-translate-y-1/2"
        >
          <Singularity className="w-full h-full opacity-75 lg:opacity-100" />
        </div>
      </div>

      {/* Scrim so the copy always reads against the disc. On small screens
          the disc sits above the copy, so the veil runs the other way. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-t lg:bg-gradient-to-r from-deep via-deep/75 to-deep/5"
      />

      <div className="gutter relative z-10 pt-28 sm:pt-32 pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[100svh]">
        <motion.div style={{ y: copyY, opacity: copyOpacity, filter: copyBlur }} className="lg:col-span-8 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8"
          >
            <span className="flex items-center gap-2.5 font-tele text-xs tracking-[0.24em] uppercase text-ice">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-gold animate-beacon" />
                <span className="relative w-2 h-2 rounded-full bg-gold" />
              </span>
              Open for new projects
            </span>
            <span aria-hidden className="h-px w-8 bg-rule/25" />
            <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">
              Cavite, PH · UTC+8 · Remote worldwide
            </span>
          </motion.div>

          <h1 className="plate text-[17vw] sm:text-[13vw] lg:text-[8.4vw] xl:text-[7.6vw] text-ice">
            <MaskLine play={ready} delay={0.2}>{"Ivan "}</MaskLine>
            <MaskLine play={ready} delay={0.42}>
              <span className="lit">Tumacay</span>
            </MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
            className="mt-8 font-tele text-sm sm:text-base tracking-[0.2em] uppercase text-ice"
          >
            Software engineer <span className="text-gold">·</span> digital operations specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.95, ease: EASE }}
            className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-ice-dim"
          >
            Nearly ten years of full-stack development, enterprise systems, AI automation and hands-on digital
            operations — the engineer and the operator in one seat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#software-portfolio" className="btn-primary">
              <span className="flex items-center gap-2">
                See live builds <ArrowUpRight className="w-4 h-4" aria-hidden />
              </span>
            </a>
            <a href="/Ivan-Tumacay-Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-quiet">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" aria-hidden /> View resume
              </span>
            </a>
          </motion.div>

          {/* Instrument strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 1.3 }}
            className="mt-14 grid grid-cols-3 max-w-2xl border-t border-rule/15"
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`pt-5 ${i > 0 ? "pl-4 sm:pl-7 border-l border-rule/15" : ""}`}>
                <dd className="plate text-4xl sm:text-6xl text-ice leading-none">
                  {ready ? <Odometer value={s.value} suffix={s.suffix} /> : "0"}
                </dd>
                <dt className="font-tele text-xs tracking-[0.18em] uppercase text-ice-dim mt-3">{s.label}</dt>
              </div>
            ))}
          </motion.dl>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 1.5 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 max-w-2xl"
          >
            {roles.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 font-tele text-xs tracking-[0.14em] uppercase text-ice-dim">
                <Icon className="w-3.5 h-3.5 text-gold" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.a
        href="#subject-profile"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-7 z-10 hidden sm:flex flex-col items-center gap-3 font-tele text-xs tracking-[0.3em] uppercase text-ice-dim hover:text-gold transition-colors"
      >
        Begin transit
        <ArrowDown className="w-4 h-4 animate-drift" aria-hidden />
      </motion.a>
    </section>
  );
};

export default HeroSection;
