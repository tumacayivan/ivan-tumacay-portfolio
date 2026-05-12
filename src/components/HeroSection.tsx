import { motion } from "framer-motion";
import { ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone, Crosshair } from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";

const HeroSection = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 paper-grain">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[24vw] sm:text-[22vw] leading-none -rotate-12 select-none">
          CLASSIFIED
        </div>
      </div>

      <div className="absolute inset-0 tactical-grid opacity-[0.18] pointer-events-none" />

      <div className="absolute top-24 left-4 sm:left-8 flex items-center gap-2 font-courier text-[10px] text-ink-brown tracking-widest z-20">
        <Crosshair className="w-3.5 h-3.5" />
        <span>34.0522 N / 118.2437 W</span>
      </div>
      <div className="absolute top-24 right-4 sm:right-8 font-courier text-[10px] text-ink-brown tracking-widest text-right z-20">
        <div>DOSSIER REF: IT-001</div>
        <div>DATE OF FILE: {today}</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative order-1"
          >
            <div className="tape tape-yellow w-24 h-6 -top-3 -left-2 rotate-[-7deg] z-30" />
            <div className="tape tape-yellow w-20 h-5 -top-2 right-6 rotate-[6deg] z-30" />

            <div className="paper-folder p-3 sm:p-4 relative">
              <div className="absolute -top-5 left-6 sm:left-10 px-4 py-1 bg-[hsl(38_36%_78%)] border border-[hsl(25_25%_40%/0.55)] border-b-0 font-blackops text-[10px] tracking-[0.18em] text-ink">
                SUBJECT FOLDER
              </div>

              <div className="relative paper-card-cream p-2 sm:p-3 scanline-overlay">
                <div className="absolute inset-0 scan-bar" />

                <div className="absolute -top-3 right-4 z-20 bg-[hsl(var(--paper))] border border-ink px-2 py-0.5 font-courier text-[10px] tracking-widest text-ink rotate-[2deg]">
                  EVIDENCE PHOTO 01
                </div>

                <div className="relative overflow-hidden border-2 border-[hsl(var(--ink-charcoal))]">
                  <img
                    src={johnDoeAvatar}
                    alt="Ivan Tumacay - Software Engineer & Digital Operations Specialist"
                    className="w-full h-[420px] sm:h-[560px] lg:h-[720px] object-cover photocopy"
                  />
                  <div className="absolute top-6 right-4 stamp animate-stamp font-blackops text-xl sm:text-2xl">
                    TOP SECRET
                  </div>
                  <div className="absolute bottom-6 left-3 stamp stamp-blue animate-stamp-blue font-blackops text-base sm:text-lg" style={{ transform: 'rotate(4deg)' }}>
                    CONFIDENTIAL
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--paper))]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
                    <Crosshair className="w-10 h-10 text-[hsl(var(--paper))]" />
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 font-courier text-[10px] tracking-widest text-ink">
                  <div className="border border-dashed-ink p-1.5">
                    <div className="text-ink-brown">SUBJECT</div>
                    <div className="font-bold">IVAN TUMACAY</div>
                  </div>
                  <div className="border border-dashed-ink p-1.5">
                    <div className="text-ink-brown">CODENAME</div>
                    <div className="font-bold">OPERATOR-X</div>
                  </div>
                  <div className="border border-dashed-ink p-1.5">
                    <div className="text-ink-brown">STATUS</div>
                    <div className="font-bold text-stamp-red"><span className="status-pulse" />ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -right-3 sticky-note rotate-3 w-44 z-20 text-sm">
              <span className="handwritten-red">Verified</span>
              <div className="mt-1 text-[11px] leading-snug">
                Operative confirmed.<br />Field-ready.
              </div>
            </div>
          </motion.div>

          <div className="relative order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="status-pulse" />
              <span className="font-blackops text-xs sm:text-sm tracking-[0.3em] text-stamp-red uppercase">
                ACTIVE OPERATION - AVAILABLE FOR NEW PROJECTS
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2"
            >
              <div className="font-courier text-[10px] sm:text-xs tracking-[0.4em] text-ink-brown mb-2">
                DOSSIER // OPERATOR PROFILE //
              </div>
              <h1 className="font-blackops text-[2.7rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] tracking-tight text-ink">
                IVAN
                <br />
                <span className="text-stamp-red relative inline-block">
                  TUMACAY
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[hsl(var(--ink-charcoal))]" />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="my-5 border-y-2 border-double border-ink py-3"
            >
              <p className="font-typewriter text-lg sm:text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                Software Engineer &amp;{" "}
                <span className="text-stamp-red font-bold underline decoration-wavy underline-offset-4 decoration-stamp-red/60">
                  Digital Operations Specialist
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-courier text-base sm:text-lg text-ink/85 max-w-xl leading-relaxed mb-7"
            >
              <span className="font-blackops text-stamp-red text-sm tracking-widest">BRIEFING //</span>{" "}
              Combining <span className="text-ink font-bold underline decoration-stamp-red/60">full-stack development</span>, <span className="text-ink font-bold underline decoration-stamp-red/60">enterprise systems</span>, <span className="text-ink font-bold underline decoration-stamp-red/60">AI &amp; automation</span>, and comprehensive <span className="text-ink font-bold underline decoration-stamp-red/60">digital operations services</span> with nearly 10 years of experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: Code2, label: "Full Stack Dev" },
                { icon: Headphones, label: "Virtual Assistant" },
                { icon: Bot, label: "AI & Automation" },
                { icon: Palette, label: "Graphics & Video" },
                { icon: Megaphone, label: "Digital Marketing" },
                { icon: Globe, label: "Cloud & APIs" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-paper border-2 border-ink font-blackops text-[10px] sm:text-xs uppercase tracking-[0.15em] text-ink"
                >
                  <Icon className="w-3.5 h-3.5 text-stamp-red" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper font-blackops text-xs tracking-[0.2em] uppercase border-2 border-ink hover:bg-paper hover:text-ink transition-colors"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
              <div className="font-courier text-[10px] sm:text-xs text-ink-brown tracking-widest border-l-2 border-ink pl-4">
                AUTH-LVL: 5 / 5<br />
                CLEARANCE: GRANTED
              </div>
            </motion.div>

            <div className="mt-8 flex items-end gap-4">
              <div className="barcode h-10 w-44" />
              <div className="font-courier text-[10px] text-ink-brown tracking-widest">
                END OF COVER PAGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
