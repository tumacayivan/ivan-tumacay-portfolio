import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Code2, Headphones, Bot, Palette, Megaphone, Globe } from "lucide-react";
import { useRef, type PointerEvent } from "react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";
import NightCity from "./drift/NightCity";
import { MaskLine, Odometer } from "./drift/Reveal";
import { useIntroDone } from "./drift/IntroSequence";

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

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();

  // Camera: as the hero scrolls away the copy lifts and blurs, the card
  // drifts the other way, and the city falls behind at its own rates.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyBlur = useTransform(scrollYProgress, [0, 0.75], ["blur(0px)", "blur(10px)"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Driver card tilts toward the pointer
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // A slight lean toward a mouse pointer only; the card always hangs straight
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 18 });
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
      data-scene="Start line"
      data-kanji="東京"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <NightCity progress={scrollYProgress} />
      {/* Scrim so the copy always reads over the city */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-b lg:bg-gradient-to-r from-asphalt/85 via-asphalt/55 to-transparent"
      />

      <div className="gutter relative z-10 pt-28 sm:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[100svh]">
        {/* COPY */}
        <motion.div style={{ y: copyY, opacity: copyOpacity, filter: copyBlur }} className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6"
          >
            <span className="flex items-center gap-2 hud-label !text-ink">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-hud animate-ping opacity-70" />
                <span className="relative w-2 h-2 rounded-full bg-hud" />
              </span>
              Open for new projects
            </span>
            <span className="h-px w-8 bg-line/30" />
            <span className="hud-label !text-ink-dim">Cavite, PH · UTC+8 · Remote worldwide</span>
          </motion.div>

          <h1 className="relative display-xl text-[16vw] sm:text-[12.5vw] lg:text-[7.4vw] xl:text-[7vw] text-ink">
            <MaskLine play={ready} delay={0.15}>Ivan</MaskLine>
            <MaskLine play={ready} delay={0.3} className="pl-[0.35em] -ml-[0.35em]">
              <span className="lean speed-trail">Tumacay</span>
            </MaskLine>
            {/* A car goes past: headlights rake across the name */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 mix-blend-overlay"
              style={{ background: "linear-gradient(105deg, transparent, hsl(0 0% 100% / 0.85), transparent)" }}
              initial={{ x: "0%", opacity: 0 }}
              animate={ready ? { x: "420%", opacity: [0, 1, 1, 0] } : {}}
              transition={{ duration: 1.1, delay: 1.15, ease: [0.4, 0, 0.2, 1] }}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            className="mt-6 font-hud text-xl sm:text-2xl font-semibold uppercase tracking-[0.06em] text-ink"
          >
            Software engineer <span className="text-drift">&amp;</span> digital operations specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
            className="mt-4 max-w-2xl text-lg sm:text-xl leading-relaxed text-ink-dim"
          >
            Nearly ten years of full-stack development, enterprise systems, AI automation and hands-on digital
            operations — the engineer and the operator in one seat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#software-portfolio" className="btn-drift">
              <span className="flex items-center gap-2">
                See live builds <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a href="/Ivan-Tumacay-Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" /> View resume
              </span>
            </a>
          </motion.div>

          {/* Instrument strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-3 max-w-xl border-t border-line/15"
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`pt-4 flex flex-col-reverse ${i > 0 ? "pl-4 sm:pl-6 border-l border-line/15" : ""}`}>
                <dt className="hud-label mt-2 !tracking-[0.16em]">{s.label}</dt>
                <dd className="font-display text-4xl sm:text-5xl text-ink leading-none">
                  {ready ? <Odometer value={s.value} suffix={s.suffix} /> : "0"}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* DRIVER CARD */}
        <motion.div style={{ y: cardY }} className="lg:col-span-5 relative [perspective:1200px]">
          <motion.div
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", x: 60 }}
            animate={ready ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            <div className="panel !border-line/15 p-2.5 shadow-[0_40px_80px_-30px_hsl(var(--shadow))]">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={johnDoeAvatar}
                  alt="Ivan Tumacay"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(1) contrast(1.15) brightness(0.95)" }}
                />
                {/* Neon rim grade: cyan from the sign on the left, orange tail-light from the right */}
                <div
                  className="absolute inset-0 mix-blend-color"
                  style={{ background: "linear-gradient(115deg, hsl(var(--hud) / 0.75) 0%, transparent 45%, hsl(var(--drift) / 0.8) 100%)" }}
                />
                <div
                  className="absolute inset-0 mix-blend-soft-light"
                  style={{ background: "linear-gradient(115deg, hsl(var(--hud) / 0.6), transparent 50%, hsl(var(--sign) / 0.6))" }}
                />
                <div className="absolute inset-0 scanlines opacity-50" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--void)/0.9)] to-transparent" />
                {/* Pointer glare */}
                <motion.div
                  className="absolute inset-y-0 w-1/2 -translate-x-1/2 pointer-events-none mix-blend-overlay"
                  style={{
                    left: glareX,
                    background: "linear-gradient(100deg, transparent, hsl(0 0% 100% / 0.35), transparent)",
                  }}
                />

                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <span className="font-hud text-[10px] font-bold tracking-[0.24em] uppercase bg-drift text-on-drift px-2 py-1 -skew-x-12">
                    Driver 01
                  </span>
                  <span className="neon-kanji vertical text-2xl sm:text-3xl" aria-hidden>
                    走り屋
                  </span>
                </div>

                <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                  <div className="text-[hsl(var(--void-ink))]">
                    <div className="font-hud text-[10px] tracking-[0.24em] uppercase text-[hsl(var(--neon-hud))]">Class · all-rounder</div>
                    <div className="font-display text-2xl sm:text-3xl uppercase leading-none mt-1">Tumacay, I.</div>
                  </div>
                  <span className="plate w-[92px] h-[52px] shrink-0">
                    <span className="text-[10px] tracking-[0.08em]">東京 330</span>
                    <span className="text-[22px] tracking-[0.02em] mt-0.5">IT·26</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Role decals */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              {roles.map(({ icon: Icon, label }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.06, ease: EASE }}
                  className="chip"
                >
                  <Icon className="w-3.5 h-3.5 text-drift" />
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
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 hidden sm:flex flex-col items-center gap-2 hud-label !text-ink-dim hover:!text-hud"
        aria-label="Scroll to driver profile"
      >
        Scroll to drive
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
