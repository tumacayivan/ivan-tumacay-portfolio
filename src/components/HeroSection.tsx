import { motion } from "framer-motion";
import {
  ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone,
  Crosshair, Radio, Lock,
} from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";

const HeroSection = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20 paper-grain">
      {/* Layered ambient: blueprint grid + tactical noise + radial vignette */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(40 18% 92% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(40 18% 92% / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(358 60% 30% / 0.28) 0%, transparent 60%)" }} />

      {/* Massive watermark behind everything */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[34vw] sm:text-[26vw] leading-[0.78] -rotate-2 select-none whitespace-nowrap">
          CLASSIFIED
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Top banner — Operation header */}
        <div className="relative border border-[hsl(var(--accent-red)/0.45)] py-5 sm:py-6 mb-8 bg-[hsl(0_0%_5%/0.85)] text-center backdrop-blur-sm overflow-hidden">
          {/* Inner red strip */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-[hsl(var(--accent-red))]" />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[hsl(var(--accent-red))]" />
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

          <div className="absolute -top-3 left-4 sm:left-8 bg-[hsl(0_0%_5%)] px-3 py-0.5 font-courier text-[11px] sm:text-[12px] tracking-[0.32em] border border-[hsl(var(--accent-red)/0.6)] text-[hsl(var(--accent-red))]">
            BUREAU OF INTELLIGENCE
          </div>
          <div className="absolute -top-3 right-4 sm:right-8 bg-[hsl(0_0%_5%)] px-3 py-0.5 font-courier text-[11px] sm:text-[12px] tracking-[0.32em] border border-[hsl(var(--accent-red)/0.6)] text-[hsl(var(--accent-red))]">
            FILE NO. IT-2026-001
          </div>

          <div className="font-courier text-[11px] sm:text-[13px] tracking-[0.45em] text-[hsl(var(--accent-red))] uppercase mb-1 flex items-center justify-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
            NOTICE OF SUBJECT INTEREST
            <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
          </div>
          <h1 className="font-display text-[17vw] sm:text-[12vw] md:text-[11vw] lg:text-[10.4vw] leading-[0.84] tracking-[-0.005em] uppercase">
            <span className="text-[hsl(var(--accent-bone))]">MOST</span>{" "}
            <span className="text-[hsl(var(--accent-red))] drop-shadow-[0_0_28px_hsl(358_70%_45%/0.55)]">WANTED</span>
          </h1>
          <div className="font-courier text-[11px] sm:text-[13px] tracking-[0.4em] text-[hsl(var(--ink-brown))] uppercase mt-2">
            BY EMPLOYERS · STARTUPS · AGENCIES · CREATIVE STUDIOS
          </div>
        </div>

        {/* Coordinates strip */}
        <div className="hidden sm:flex items-center justify-between font-courier text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.28em] mb-6">
          <span className="flex items-center gap-2"><span className="red-pin" /> 14.2829° N / 120.8687° E · CAVITE</span>
          <span className="text-[hsl(var(--accent-red))]">// SECTION I · COVER PAGE //</span>
          <span>DATE FILED · {today}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 lg:gap-12 items-start">
          {/* The Professor's surveillance photo — vault-grade frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative w-full"
          >
            {/* Red duct tape — securing the dossier */}
            <div className="tape w-36 h-9 -top-4 -left-3 rotate-[-7deg] z-30" />
            <div className="tape w-32 h-8 -top-4 right-8 rotate-[6deg] z-30" />

            <div className="paper-folder p-3 sm:p-5 relative">
              <div className="absolute -top-7 left-6 sm:left-10 px-6 py-1.5 bg-[hsl(var(--accent-red))] border border-[hsl(var(--accent-red-deep))] font-blackops text-base sm:text-lg tracking-[0.28em] text-[hsl(40_22%_96%)] uppercase shadow-[0_0_22px_hsl(var(--accent-red)/0.4)]">
                SUBJECT FILE
              </div>
              <div className="absolute -top-7 right-6 px-4 py-1.5 bg-[hsl(0_0%_6%)] border border-[hsl(var(--accent-red))] font-courier text-[12px] sm:text-[13px] tracking-[0.25em] text-[hsl(var(--accent-red))]">
                Δ-001 · CLASSIFIED
              </div>

              <div className="relative paper-card-cream p-2 sm:p-3 scanline-overlay">
                <div className="absolute inset-0 scan-bar" />

                <div className="absolute -top-4 right-4 z-20 bg-[hsl(0_0%_5%)] border border-[hsl(var(--accent-red))] px-3 py-1 font-courier text-[12px] sm:text-[13px] tracking-[0.22em] text-[hsl(var(--accent-red))] rotate-[2deg]">
                  SURVEILLANCE 01 / 01
                </div>

                <div className="relative overflow-hidden border-2 border-[hsl(var(--accent-red)/0.5)] flex bg-[hsl(0_0%_4%)]">
                  {/* Frame number rail */}
                  <div className="hidden sm:flex flex-col items-center justify-between bg-[hsl(0_0%_8%)] border-r-2 border-[hsl(var(--accent-red)/0.4)] px-1.5 py-3 font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-widest">
                    <span>07</span><span>06</span><span>05</span><span>04</span><span>03</span><span>02</span>
                  </div>

                  <div className="relative flex-1">
                    <img
                      src={johnDoeAvatar}
                      alt="Ivan Tumacay — Software Engineer & Digital Operations Specialist"
                      className="w-full h-[600px] sm:h-[760px] md:h-[820px] lg:h-[900px] object-cover object-top photocopy-strong"
                    />

                    {/* Cinematic gradient grade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_2%/0.7)] via-transparent to-[hsl(358_50%_8%/0.25)] pointer-events-none" />

                    {/* Stamps — bold red */}
                    <div className="absolute top-8 right-5 stamp animate-stamp font-display text-4xl sm:text-6xl md:text-7xl !p-3 sm:!p-4">
                      WANTED
                    </div>
                    <div className="absolute bottom-12 left-4 stamp animate-stamp-blue font-display text-2xl sm:text-4xl !p-2.5 sm:!p-3" style={{ transform: "rotate(4deg)" }}>
                      PRIORITY
                    </div>
                    <div className="absolute top-1/2 right-6 -translate-y-1/2 stamp stamp-black !rotate-[-12deg] font-display text-lg sm:text-3xl !p-2">
                      CLASSIFIED
                    </div>

                    {/* Cinematic corner brackets */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-[3px] border-t-[3px] border-[hsl(var(--accent-red))]" />
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-[3px] border-t-[3px] border-[hsl(var(--accent-red))]" />
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-[3px] border-b-[3px] border-[hsl(var(--accent-red))]" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-[3px] border-b-[3px] border-[hsl(var(--accent-red))]" />

                    {/* Crosshair overlay center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                      <Crosshair className="w-20 h-20 text-[hsl(var(--accent-red))]" strokeWidth={1} />
                    </div>

                    {/* ID badge */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-[hsl(0_0%_4%)] border-2 border-[hsl(var(--accent-red))] px-4 py-1.5 font-blackops text-sm sm:text-base tracking-[0.32em] text-[hsl(var(--accent-red))] shadow-[0_0_18px_hsl(var(--accent-red)/0.35)]">
                      ID · IT — 26 — 001
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 font-courier text-[12px] sm:text-[13px] tracking-[0.22em] text-[hsl(var(--ink-charcoal))]">
                  <div className="border border-[hsl(40_12%_90%/0.18)] p-2 text-center bg-[hsl(0_0%_5%)]">FRONT · 0001</div>
                  <div className="border border-[hsl(var(--accent-red))] p-2 text-center bg-[hsl(0_0%_5%)] text-[hsl(var(--accent-red))]">CAPTURED · {today}</div>
                  <div className="border border-[hsl(40_12%_90%/0.18)] p-2 text-center bg-[hsl(0_0%_5%)]">PROFILE · 0002</div>
                </div>
              </div>
            </div>

            {/* Floating sticky note — Professor's warning */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 sticky-note rotate-3 w-60 z-20 text-base">
              <span className="handwritten-red font-bold uppercase tracking-wider">⟶ HIGH PRIORITY</span>
              <div className="mt-1 text-[14px] leading-snug text-[hsl(40_22%_96%)]">
                Subject is highly skilled.<br />Thinks several moves ahead.<br /><span className="opacity-80">Approach with offer.</span>
              </div>
            </div>
          </motion.div>

          {/* Right column — name reveal + identity */}
          <div className="relative flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5"
            >
              <div className="section-eyebrow mb-3">
                NAME OF SUBJECT
              </div>
              <h2 className="display-title text-[22vw] sm:text-[16vw] lg:text-[10.4vw] uppercase">
                IVAN
              </h2>
              <h2 className="display-title text-[22vw] sm:text-[16vw] lg:text-[10.4vw] uppercase relative">
                <span className="accent">TUMACAY</span>
                <span className="absolute -bottom-1 left-0 w-1/3 h-[5px] bg-[hsl(var(--accent-red))] shadow-[0_0_18px_hsl(var(--accent-red)/0.6)]" />
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="border-y border-[hsl(var(--accent-red)/0.45)] py-4 mb-5 bg-[hsl(0_0%_5%/0.6)] backdrop-blur-sm px-4 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--accent-red))]" />
              <p className="font-typewriter text-xl sm:text-2xl md:text-[26px] text-[hsl(var(--ink-charcoal))] leading-tight tracking-tight">
                <span className="font-blackops text-[hsl(var(--accent-red))] tracking-[0.18em]">SUBJECT IS:</span>{" "}
                Software Engineer &amp;{" "}
                <span className="text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] decoration-2 underline-offset-4">
                  Digital Operations Specialist
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-5"
            >
              <div className="section-eyebrow mb-3">
                ALIASES · KNOWN AS
              </div>
              <div className="flex flex-wrap gap-2">
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(0_0%_5%)] border border-[hsl(var(--accent-red)/0.45)] font-blackops text-[13px] sm:text-sm uppercase tracking-[0.18em] text-[hsl(var(--ink-charcoal))] hover:border-[hsl(var(--accent-red))] hover:text-[hsl(var(--accent-red))] transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 text-[hsl(var(--accent-red))]" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="paper-card-cream p-5 mb-5 relative"
            >
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1 !rotate-0 bg-[hsl(0_0%_7%)]">DESCRIPTION</div>
              <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
                Combining{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">full-stack development</span>,{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">enterprise systems</span>,{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">AI &amp; automation</span>, and comprehensive{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">digital operations services</span> with nearly 10 years of experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr] gap-3 items-stretch"
            >
              <a
                href="#experience"
                className="dossier-cta justify-between text-base !py-5 !px-5 group"
              >
                <div className="flex flex-col items-start gap-1">
                  <div className="font-courier text-[11px] tracking-[0.32em] uppercase opacity-90">
                    REWARD FOR ENGAGEMENT
                  </div>
                  <div className="font-blackops text-xl sm:text-2xl tracking-[0.14em] uppercase flex items-center gap-2">
                    REVIEW THE FILE
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                  <div className="font-courier text-[10px] tracking-[0.25em] opacity-80">
                    ALL EXPERIENCE DOCUMENTED · FILES INSIDE
                  </div>
                </div>
              </a>

              <div className="border border-[hsl(var(--accent-red)/0.45)] p-4 sm:p-5 bg-[hsl(0_0%_5%)] relative overflow-hidden">
                <div className="absolute -top-3 left-3 bg-[hsl(0_0%_5%)] px-2 font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                  STATUS
                </div>
                <div className="flex items-center gap-2 font-blackops text-lg sm:text-xl tracking-[0.14em] uppercase text-[hsl(var(--accent-bone))]">
                  <span className="status-pulse" /> AT LARGE
                </div>
                <div className="mt-1 font-courier text-[11px] sm:text-[12px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                  Accepting new missions
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                </div>
                <div className="mt-2 font-courier text-[11px] tracking-[0.28em] text-[hsl(var(--accent-red))]">
                  CLEARANCE LVL 5 / 5
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div className="barcode h-10 w-40 sm:w-56" />
              <div className="font-courier text-[11px] sm:text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.28em] text-right uppercase">
                End of cover page · Dossier continues ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
