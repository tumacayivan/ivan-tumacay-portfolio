import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Bot,
  Braces,
  BriefcaseBusiness,
  Clapperboard,
  FileCode2,
  Headphones,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroPortrait from "@/assets/ivan-hero-portrait.webp";
import operationRoom from "@/assets/operation-room-hero.png";

const commandStats = [
  { value: "10+", label: "years freelance fieldwork" },
  { value: "5", label: "years corporate systems" },
  { value: "41", label: "software missions logged" },
  { value: "90+", label: "creative files indexed" },
];

const specialties = [
  { icon: FileCode2, label: "Full-stack systems" },
  { icon: Bot, label: "AI automation" },
  { icon: BriefcaseBusiness, label: "Digital operations" },
  { icon: Clapperboard, label: "Creative production" },
  { icon: Headphones, label: "Client support" },
  { icon: Braces, label: "API orchestration" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[88svh] overflow-hidden pt-16">
      <img
        src={operationRoom}
        alt="Cinematic strategy room with a planning table, maps, and red tactical lighting"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 operation-grid opacity-35" />
      <div className="absolute inset-0 film-lines opacity-25" />

      <div className="relative z-10 mx-auto grid min-h-[calc(88svh-4rem)] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="case-label mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Operation status: open for strategic builds
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-black leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            IVAN <span className="text-gradient-red">TUMACAY</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-foreground sm:text-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Software engineer and digital operations strategist building the systems, automations, creative assets, and support workflows behind complex business moves.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Review Evidence
              <ArrowDownRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
            >
              Open Arsenal
              <ShieldCheck className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            {specialties.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 border border-border/60 bg-background/50 px-3 py-3 backdrop-blur-md">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-bold text-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="grid gap-4"
        >
          <div className="evidence-frame glass-card p-4">
            <div className="grid gap-4">
              <div className="flex min-h-[460px] items-center justify-center overflow-hidden border border-border/60 bg-black/40 sm:min-h-[560px] lg:min-h-[620px]">
                <img
                  src={heroPortrait}
                  alt="Ivan Tumacay"
                  className="h-full max-h-[620px] w-full object-contain object-center grayscale contrast-125"
                />
              </div>
              <div className="grid gap-5 border border-border/60 bg-background/60 p-4 sm:grid-cols-[1fr_190px]">
                <div>
                  <p className="font-mono text-xs font-bold text-primary">CLASSIFIED PROFILE</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">The Operator</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                    A hybrid builder for teams that need engineering judgment, creative execution, and reliable operations in one command chain.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                  <span className="border border-border/60 bg-secondary/60 px-3 py-2 font-mono text-xs font-bold text-muted-foreground">PH</span>
                  <span className="border border-border/60 bg-secondary/60 px-3 py-2 font-mono text-xs font-bold text-muted-foreground">REMOTE</span>
                  <span className="border border-border/60 bg-secondary/60 px-3 py-2 font-mono text-xs font-bold text-muted-foreground">SYSTEMS</span>
                  <span className="border border-border/60 bg-secondary/60 px-3 py-2 font-mono text-xs font-bold text-muted-foreground">MEDIA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {commandStats.map((stat) => (
              <div key={stat.label} className="border border-border/70 bg-background/70 p-4 backdrop-blur-md">
                <p className="text-3xl font-black text-primary sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="blueprint-grid border border-accent/30 bg-accent/10 p-4">
            <div className="flex items-center gap-3">
              <MapPinned className="h-5 w-5 text-accent" />
              <p className="font-mono text-sm font-bold text-accent">Route: discover - build - automate - launch - optimize</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
