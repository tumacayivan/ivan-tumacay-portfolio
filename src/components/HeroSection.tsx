import { motion } from "framer-motion";
import {
  ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone,
  FileText, ExternalLink,
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
            "linear-gradient(hsl(var(--line) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--line) / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, var(--wash-red) 0%, transparent 60%)" }} />

      {/* Massive watermark behind everything */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[34vw] sm:text-[26vw] leading-[0.78] -rotate-2 select-none whitespace-nowrap">
          CLASSIFIED
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Top banner — Operation header */}
        <div className="relative border border-[hsl(var(--accent-red)/0.45)] py-5 sm:py-6 mb-8 bg-[hsl(var(--surface-1)/0.85)] text-center backdrop-blur-sm overflow-hidden">
          {/* Inner red strip */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-[hsl(var(--accent-red))]" />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[hsl(var(--accent-red))]" />
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

          <div className="absolute -top-3 left-4 sm:left-8 bg-[hsl(var(--surface-1))] px-3 py-0.5 font-courier text-[11px] sm:text-[12px] tracking-[0.32em] border border-[hsl(var(--accent-red)/0.6)] text-[hsl(var(--accent-red))]">
            BUREAU OF INTELLIGENCE
          </div>
          <div className="absolute -top-3 right-4 sm:right-8 bg-[hsl(var(--surface-1))] px-3 py-0.5 font-courier text-[11px] sm:text-[12px] tracking-[0.32em] border border-[hsl(var(--accent-red)/0.6)] text-[hsl(var(--accent-red))]">
            FILE NO. IT-2026-001
          </div>

          <div className="font-courier text-[11px] sm:text-[13px] tracking-[0.45em] text-[hsl(var(--accent-red))] uppercase mb-1 flex items-center justify-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
            NOTICE OF SUBJECT INTEREST
            <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
          </div>
          <h1 className="font-display text-[17vw] sm:text-[12vw] md:text-[11vw] lg:text-[10.4vw] leading-[0.84] tracking-[-0.005em] uppercase">
            <span className="text-[hsl(var(--accent-bone))]">MOST WANTED</span>
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
          {/* Surveillance photo — vault-grade frame */}
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
              <div className="absolute -top-7 left-6 sm:left-10 px-6 py-1.5 bg-[hsl(var(--accent-red))] border border-[hsl(var(--accent-red-deep))] font-blackops text-base sm:text-lg tracking-[0.28em] text-[hsl(var(--on-red))] uppercase shadow-[0_0_22px_hsl(var(--accent-red)/0.4)]">
                SUBJECT FILE
              </div>
              <div className="absolute -top-7 right-6 px-4 py-1.5 bg-[hsl(var(--surface-1))] border border-[hsl(var(--accent-red))] font-courier text-[12px] sm:text-[13px] tracking-[0.25em] text-[hsl(var(--accent-red))]">
                Δ-001 · CLASSIFIED
              </div>

              <div className="relative paper-card-cream p-2 sm:p-3 scanline-overlay">
                <div className="absolute inset-0 scan-bar" />

                <div className="absolute -top-4 right-4 z-20 bg-[hsl(var(--surface-1))] border border-[hsl(var(--accent-red))] px-3 py-1 font-courier text-[12px] sm:text-[13px] tracking-[0.22em] text-[hsl(var(--accent-red))] rotate-[2deg]">
                  SURVEILLANCE 01 / 01
                </div>

                <div className="relative overflow-hidden border-2 border-[hsl(var(--accent-red)/0.5)] flex bg-[hsl(var(--surface-0))]">
                  {/* Mugshot height ruler — feet markers with tick marks */}
                  <div className="hidden sm:flex flex-col items-stretch justify-between bg-[hsl(var(--surface-3))] border-r-2 border-[hsl(var(--accent-red)/0.4)] py-3 font-courier text-[10px] text-[hsl(var(--ink-charcoal))] tracking-widest relative w-7">
                    {["7'", "6'", "5'", "4'", "3'", "2'"].map((ft, i) => (
                      <div key={ft} className="flex items-center gap-1 justify-end pr-1 relative">
                        <span className="absolute -left-[1px] w-2 h-[2px] bg-[hsl(var(--ink-charcoal))]" />
                        <span className={i === 1 ? "text-[hsl(var(--accent-red))] font-bold" : ""}>{ft}</span>
                      </div>
                    ))}
                    {/* Half-foot subdivision ticks */}
                    <div className="absolute inset-y-3 left-0 w-full pointer-events-none flex flex-col justify-around">
                      {Array.from({ length: 11 }).map((_, i) => (
                        <span key={i} className="block w-1.5 h-px bg-[hsl(var(--line)/0.45)] ml-px" />
                      ))}
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <img
                      src={johnDoeAvatar}
                      alt="Ivan Tumacay — Software Engineer & Digital Operations Specialist"
                      className="w-full h-[600px] sm:h-[760px] md:h-[820px] lg:h-[900px] object-cover object-top"
                      style={{
                        filter:
                          "contrast(1.18) saturate(0.55) brightness(0.92) sepia(0.08)",
                      }}
                    />

                    {/* Cinematic teal-orange surveillance grade */}
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-color"
                      style={{
                        background:
                          "linear-gradient(180deg, hsl(195 60% 35% / 0.18) 0%, hsl(195 50% 25% / 0.10) 45%, hsl(20 60% 35% / 0.10) 100%)",
                      }}
                    />
                    {/* Vignette + bottom shadow for cinematic depth */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 45%, hsl(0 0% 0% / 0.55) 100%), linear-gradient(to top, hsl(0 0% 2% / 0.72) 0%, transparent 35%, transparent 75%, hsl(0 0% 0% / 0.55) 100%)",
                      }}
                    />
                    {/* Subtle surveillance scanlines on the photo */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent 0 2px, hsl(0 0% 4% / 0.35) 2px, transparent 3px)",
                      }}
                    />
                    {/* Faint blue-tone HUD scanlines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, hsl(195 80% 65%) 0 1px, transparent 1px 4px)",
                      }}
                    />

                    {/* REC indicator with timestamp — top-left */}
                    <div className="absolute top-3 left-4 z-10 flex items-center gap-2 bg-[hsl(var(--surface-0)/0.78)] border border-[hsl(var(--accent-red)/0.5)] px-2 py-1 font-courier text-[10px] tracking-[0.28em] text-[hsl(var(--ink-charcoal))]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
                      <span className="text-[hsl(var(--accent-red))] font-bold">REC</span>
                      <span className="text-[hsl(var(--line)/0.75)]">●</span>
                      <span>{today}</span>
                    </div>

                    {/* Side data readout — vitals HUD */}
                    <div className="hidden md:block absolute bottom-24 left-4 z-10 bg-[hsl(var(--surface-0)/0.78)] border border-[hsl(var(--accent-red)/0.4)] px-2.5 py-2 font-courier text-[10px] tracking-[0.18em] text-[hsl(var(--ink-charcoal))] leading-[1.55] backdrop-blur-sm">
                      <div className="text-[hsl(var(--accent-red))] mb-1 tracking-[0.28em]">{"▸ VITALS"}</div>
                      <div>{"HT   "}<span className="text-[hsl(var(--accent-red))]">{"5'11\""}</span></div>
                      <div>{"HAIR "}<span className="text-[hsl(var(--accent-red))]">BLK</span></div>
                      <div>{"EYES "}<span className="text-[hsl(var(--accent-red))]">BRN</span></div>
                      <div>{"SEX  "}<span className="text-[hsl(var(--accent-red))]">M</span></div>
                    </div>

                    {/* Stamps — bold red */}
                    <div className="absolute top-8 right-5 stamp animate-stamp font-display text-4xl sm:text-6xl md:text-7xl !p-3 sm:!p-4">
                      WANTED
                    </div>
                    <div className="absolute bottom-24 right-4 stamp animate-stamp-blue font-display text-2xl sm:text-4xl !p-2.5 sm:!p-3" style={{ transform: "rotate(4deg)" }}>
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

                    {/* Mugshot slate board at the bottom */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-5 z-10 flex items-stretch border-2 border-[hsl(var(--accent-red))] bg-[hsl(var(--surface-0))] shadow-[0_0_22px_hsl(var(--accent-red)/0.4)] overflow-hidden">
                      <div className="bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[10px] sm:text-[11px] tracking-[0.28em] px-2 py-1 flex flex-col items-center justify-center leading-none">
                        <span>SUBJECT</span>
                        <span className="opacity-80">FILE</span>
                      </div>
                      <div className="flex flex-col leading-none px-3 py-1 justify-center font-courier text-[10px] sm:text-[11px] text-[hsl(var(--ink-charcoal))] tracking-[0.18em]">
                        <span className="text-[hsl(var(--accent-red))]">TUMACAY, IVAN</span>
                        <span className="opacity-80">ID · IT—26—001</span>
                      </div>
                      <div className="border-l border-[hsl(var(--accent-red)/0.6)] flex flex-col leading-none px-3 py-1 justify-center font-courier text-[9px] sm:text-[10px] text-[hsl(var(--ink-charcoal))] tracking-[0.2em]">
                        <span className="text-[hsl(var(--accent-red))]">DATE</span>
                        <span>{today}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 font-courier text-[12px] sm:text-[13px] tracking-[0.22em] text-[hsl(var(--ink-charcoal))]">
                  <div className="border border-[hsl(var(--line)/0.18)] p-2 text-center bg-[hsl(var(--surface-1))]">FRONT · 0001</div>
                  <div className="border border-[hsl(var(--accent-red))] p-2 text-center bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))]">CAPTURED · {today}</div>
                  <div className="border border-[hsl(var(--line)/0.18)] p-2 text-center bg-[hsl(var(--surface-1))]">PROFILE · 0002</div>
                </div>
              </div>
            </div>

            {/* Floating sticky note — high-priority warning */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 sticky-note rotate-3 w-60 z-20 text-base">
              <span className="handwritten-red font-bold uppercase tracking-wider">⟶ HIGH PRIORITY</span>
              <div className="mt-1 text-[14px] leading-snug text-[hsl(var(--on-red))]">
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
              className="border-y border-[hsl(var(--accent-red)/0.45)] py-4 mb-5 bg-[hsl(var(--surface-1)/0.6)] backdrop-blur-sm px-4 relative"
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--surface-1))] border border-[hsl(var(--accent-red)/0.45)] font-blackops text-[13px] sm:text-sm uppercase tracking-[0.18em] text-[hsl(var(--ink-charcoal))] hover:border-[hsl(var(--accent-red))] hover:text-[hsl(var(--accent-red))] transition-colors group"
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
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1 !rotate-0 bg-[hsl(var(--surface-2))]">DESCRIPTION</div>
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

              <div className="border border-[hsl(var(--accent-red)/0.45)] p-4 sm:p-5 bg-[hsl(var(--surface-1))] relative overflow-hidden">
                <div className="absolute -top-3 left-3 bg-[hsl(var(--surface-1))] px-2 font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
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

            {/* Resume — declassified dossier document */}
            <motion.a
              href="/Ivan-Tumacay-Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="dossier-cta-ghost justify-between !py-4 mt-3 group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[hsl(var(--accent-red))]" />
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="font-courier text-[10px] tracking-[0.32em] opacity-80">
                    DECLASSIFIED DOCUMENT · PDF
                  </span>
                  <span className="font-blackops text-lg sm:text-xl tracking-[0.14em]">
                    VIEW MY RESUME
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>

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
