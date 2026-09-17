import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Code2, Headphones, Bot, Palette, Megaphone, Globe, Zap } from "lucide-react";
import { useRef, type PointerEvent } from "react";
import ivanPortrait from "@/assets/john-doe-avatar.png";
import ChainField from "./reaction/ChainField";
import { MaskLine, Counter } from "./reaction/Reveal";
import { useIgnitionDone } from "./reaction/IgnitionSequence";
import { detonate } from "./reaction/Detonation";

const roles = [
  { icon: Code2, label: "Full-stack dev" },
  { icon: Bot, label: "AI & automation" },
  { icon: Headphones, label: "Virtual assistant" },
  { icon: Palette, label: "Graphics & video" },
  { icon: Megaphone, label: "Digital marketing" },
  { icon: Globe, label: "Cloud & APIs" },
];

const stats = [
  { value: 10, label: "Years building" },
  { value: 18, label: "Live sites" },
  { value: 42, label: "Projects shipped" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIgnitionDone();

  // Camera: as the opening frame leaves, the copy lifts and goes soft and
  // the badge drifts the other way.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyBlur = useTransform(scrollYProgress, [0, 0.75], ["blur(0px)", "blur(9px)"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fieldY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  // The badge tips toward the pointer, like a card held under a lamp
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      id="top"
      ref={ref}
      data-scene="Ignition"
      data-code="Part I · 00"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* The lattice, waiting to be set off */}
      <motion.div style={{ y: fieldY }} className="absolute inset-0 -z-0">
        <ChainField className="absolute inset-0 w-full h-full" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 pointer-events-none vignette" />
      {/* Scrim so the copy always reads over the field */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-b lg:bg-gradient-to-r from-base/92 via-base/60 to-transparent"
      />

      <div className="gutter relative z-10 pt-28 sm:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[100svh]">
        {/* COPY */}
        <motion.div style={{ y: copyY, opacity: copyOpacity, filter: copyBlur }} className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7"
          >
            <span className="flex items-center gap-2 slug">
              <span className="w-1.5 h-1.5 bg-ember tick-pulse" aria-hidden />
              Open for new projects
            </span>
            <span aria-hidden className="h-px w-8 bg-line/30" />
            <span className="slug slug-dim">Cavite, PH · UTC+8 · Remote worldwide</span>
          </motion.div>

          <h1 className="display text-[17vw] sm:text-[13vw] lg:text-[7.8vw] xl:text-[7.2vw] text-ink">
            {/* One name, set on two lines — the space keeps it one name to a screen reader */}
            <span className="sr-only">Ivan Tumacay</span>
            <span aria-hidden>
              <MaskLine play={ready} delay={0.15}>Ivan</MaskLine>
              <MaskLine play={ready} delay={0.3}>
                <span className="ignited">Tumacay</span>
              </MaskLine>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            className="mt-6 font-doc text-base sm:text-lg font-medium uppercase tracking-[0.14em] text-ink"
          >
            Software engineer <span className="text-ember">·</span> digital operations specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
            className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-ink-dim"
          >
            Nearly ten years of full-stack development, enterprise systems, AI automation and hands-on digital
            operations — the engineer and the operator in one seat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#software-portfolio" className="btn-primary">
              <span className="flex items-center gap-2">
                See live builds <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a href="/Ivan-Tumacay-Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-quiet">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" /> View resume
              </span>
            </a>
            <button type="button" onClick={detonate} className="btn-quiet" title="Play the ignition again">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" /> Run it again
              </span>
            </button>
          </motion.div>

          {/* Instrument strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-3 max-w-xl border-t border-line/20"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`pt-4 flex flex-col-reverse ${i > 0 ? "pl-4 sm:pl-6 border-l border-line/20" : ""}`}
              >
                <dt className="slug slug-dim mt-2 !tracking-[0.14em]">{s.label}</dt>
                <dd className="font-display text-5xl sm:text-6xl text-ink leading-none">
                  {ready ? <Counter value={s.value} /> : "0"}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* CLEARANCE BADGE */}
        <motion.div style={{ y: badgeY }} className="lg:col-span-5 relative [perspective:1200px]">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 30 }}
            animate={ready ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div className="plate !border-line/25 p-2 shadow-[0_40px_90px_-30px_hsl(var(--shadow))]">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={ivanPortrait}
                  alt="Ivan Tumacay"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(1) contrast(1.22) brightness(0.92)" }}
                />
                {/* One warm rim light from the left, the way the lamp sits in the room */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(105deg, hsl(var(--ember) / calc(0.85 * var(--bloom))) 0%, transparent 42%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, hsl(var(--ember) / calc(0.22 * var(--bloom))) 0%, transparent 38%)",
                  }}
                />
                <div aria-hidden className="absolute -inset-[12%] grain-layer" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--void)/0.92)] to-transparent"
                />
                {/* Pointer glare */}
                <motion.div
                  aria-hidden
                  className="absolute inset-y-0 w-1/2 -translate-x-1/2 pointer-events-none mix-blend-overlay"
                  style={{
                    left: glareX,
                    background: "linear-gradient(100deg, transparent, hsl(0 0% 100% / 0.28), transparent)",
                  }}
                />

                <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3">
                  <span className="font-doc text-[10px] font-bold tracking-[0.24em] uppercase bg-ember text-on-ember px-2 py-1">
                    Cleared
                  </span>
                  <span
                    aria-hidden
                    className="font-doc text-[10px] tracking-[0.24em] uppercase text-[hsl(var(--void-ink)/0.75)] [writing-mode:vertical-rl]"
                  >
                    Photograph · IT-01
                  </span>
                </div>

                <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                  <div className="text-[hsl(var(--void-ink))]">
                    <div className="font-doc text-[10px] tracking-[0.24em] uppercase text-[hsl(var(--void-ember))]">
                      Category · all-rounder
                    </div>
                    <div className="font-display text-3xl sm:text-4xl uppercase leading-none mt-1">Tumacay, I.</div>
                  </div>
                  {/* Punched barcode, drawn not photographed */}
                  <span
                    aria-hidden
                    className="h-9 w-20 shrink-0 opacity-90"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, hsl(var(--void-ink)) 0 2px, transparent 2px 4px, hsl(var(--void-ink)) 4px 7px, transparent 7px 9px, hsl(var(--void-ink)) 9px 10px, transparent 10px 13px)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* What he is cleared for */}
            <div className="mt-3 flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {roles.map(({ icon: Icon, label }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.06, ease: EASE }}
                  className="tag"
                >
                  <Icon className="w-3.5 h-3.5 text-ember" />
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#subject-profile"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 hidden sm:flex flex-col items-center gap-2 slug slug-dim hover:!text-ember"
        aria-label="Go to the personnel file"
      >
        Begin the record
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
