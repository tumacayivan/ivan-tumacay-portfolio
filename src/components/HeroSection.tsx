import { motion } from "framer-motion";
import {
  ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone, Star,
} from "lucide-react";
import wolfPortrait from "@/assets/wolf-portrait-03.jpeg";

/* Decorative gold confetti — echoes the movie poster's falling foil. */
const confetti = [
  { l: "6%",  t: "12%", r: -18, d: 0,   s: 1 },
  { l: "14%", t: "44%", r: 24,  d: 0.4, s: 0.8 },
  { l: "9%",  t: "72%", r: 8,   d: 0.8, s: 1.1 },
  { l: "22%", t: "26%", r: -32, d: 0.2, s: 0.7 },
  { l: "31%", t: "80%", r: 14,  d: 0.6, s: 0.9 },
  { l: "48%", t: "8%",  r: -10, d: 0.1, s: 1 },
  { l: "63%", t: "70%", r: 30,  d: 0.5, s: 0.85 },
  { l: "72%", t: "20%", r: -24, d: 0.3, s: 1.1 },
  { l: "84%", t: "52%", r: 16,  d: 0.7, s: 0.75 },
  { l: "91%", t: "14%", r: -8,  d: 0.9, s: 1 },
  { l: "88%", t: "82%", r: 22,  d: 0.2, s: 0.9 },
  { l: "40%", t: "60%", r: -28, d: 0.5, s: 0.7 },
];

const HeroSection = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20">
      {/* Soft golden spotlight from above */}
      <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(45 95% 60% / 0.22) 0%, transparent 62%)" }} />

      {/* Falling gold confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {confetti.map((c, i) => (
          <motion.span
            key={i}
            className="absolute block"
            style={{
              left: c.l, top: c.t,
              width: `${10 * c.s}px`, height: `${5 * c.s}px`,
              background: i % 3 === 0 ? "hsl(45 96% 52%)" : i % 3 === 1 ? "hsl(43 80% 46%)" : "hsl(40 30% 14%)",
              transform: `rotate(${c.r}deg)`,
              boxShadow: "0 1px 2px hsl(40 40% 25% / 0.25)",
            }}
            animate={{ y: [0, 16, 0], rotate: [c.r, c.r + 18, c.r] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: c.d }}
          />
        ))}
      </div>

      {/* Giant faded title behind everything */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[34vw] sm:text-[26vw] leading-[0.78] -rotate-2 select-none whitespace-nowrap">
          WALL STREET
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* ===== MOVIE BILLBOARD ===== */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="font-courier text-[11px] sm:text-[13px] tracking-[0.5em] text-[hsl(var(--ink-brown))] uppercase mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[hsl(var(--accent-red)/0.6)]" />
            A IVAN TUMACAY PRODUCTION
            <span className="h-px w-8 bg-[hsl(var(--accent-red)/0.6)]" />
          </div>

          {/* The iconic yellow title block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block bg-[hsl(var(--accent-red-bright))] px-6 sm:px-10 py-4 sm:py-5 -rotate-1"
            style={{ boxShadow: "0 6px 0 hsl(40 62% 30% / 0.35), 0 26px 50px -18px hsl(45 80% 40% / 0.5)" }}
          >
            <h1 className="font-display text-[14vw] sm:text-[10.5vw] md:text-[9vw] lg:text-[7.4vw] leading-[0.78] tracking-tight uppercase text-[hsl(40_45%_8%)]">
              THE CLOSER
            </h1>
            <div className="font-display text-[5.4vw] sm:text-[4vw] md:text-[3.4vw] lg:text-[2.8vw] leading-none tracking-[0.04em] uppercase text-[hsl(40_45%_8%)] mt-0.5 sm:mt-1">
              OF THE PHILIPPINES
            </div>
          </motion.div>

          <div className="font-courier text-[11px] sm:text-[13px] tracking-[0.4em] text-[hsl(var(--ink-charcoal))] uppercase mt-5">
            FULL-STACK · AUTOMATION · DIGITAL OPERATIONS
          </div>
          <div className="mt-3 flex items-center gap-2 text-[hsl(var(--accent-red))]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[hsl(var(--accent-red))]" />
            ))}
            <span className="ml-2 font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
              Critics' Choice · 10 Yrs Running
            </span>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="hidden sm:flex items-center justify-between font-courier text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.28em] mb-6 border-y border-[hsl(var(--accent-red)/0.3)] py-2">
          <span className="flex items-center gap-2"><span className="red-pin" /> CAVITE · PHILIPPINES</span>
          <span className="text-[hsl(var(--accent-red))]">// NOW ACCEPTING CLIENTS //</span>
          <span>RELEASE · {today}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Portrait — clean cinema one-sheet frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative w-full h-full"
          >
            {/* Gold foil tape — pinning the one-sheet */}
            <div className="tape w-36 h-9 -top-4 -left-3 rotate-[-7deg] z-30" />
            <div className="tape w-32 h-8 -top-4 right-8 rotate-[6deg] z-30" />

            {/* Full-cover one-sheet — photo fills the whole column, no bottom gap */}
            <div className="relative w-full h-full min-h-[68vh] sm:min-h-[80vh] lg:min-h-0 overflow-hidden border-2 border-[hsl(var(--accent-red))] shadow-[0_28px_64px_-26px_hsl(40_40%_25%/0.6)]">
              <img
                src={wolfPortrait}
                alt="Ivan Tumacay — Software Engineer & Digital Operations Specialist"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ filter: "contrast(1.05) saturate(1.04) brightness(1.02)" }}
              />

              {/* Warm golden grade */}
              <div className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                   style={{ background: "linear-gradient(180deg, hsl(45 90% 60% / 0.12) 0%, transparent 40%, hsl(40 50% 35% / 0.1) 100%)" }} />
              {/* Bottom fade for the credit plate */}
              <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
                   style={{ background: "linear-gradient(to top, hsl(40 30% 6% / 0.6) 0%, transparent 100%)" }} />

              {/* NOW SHOWING tag */}
              <div className="absolute top-4 left-4 z-20 px-4 sm:px-5 py-1.5 bg-[hsl(var(--accent-red-bright))] font-blackops text-sm sm:text-base tracking-[0.28em] text-[hsl(40_45%_8%)] uppercase shadow-[0_3px_0_hsl(40_60%_30%/0.35)]">
                NOW SHOWING
              </div>
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[hsl(40_30%_12%)] font-courier text-[11px] sm:text-[12px] tracking-[0.25em] text-[hsl(45_96%_60%)]">
                IVT · BLUE CHIP
              </div>

              {/* Gold corner brackets */}
              <div className="absolute top-3 left-3 w-12 h-12 border-l-[3px] border-t-[3px] border-[hsl(var(--accent-red))]" />
              <div className="absolute top-3 right-3 w-12 h-12 border-r-[3px] border-t-[3px] border-[hsl(var(--accent-red))]" />
              <div className="absolute bottom-3 left-3 w-12 h-12 border-l-[3px] border-b-[3px] border-[hsl(var(--accent-red))]" />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-r-[3px] border-b-[3px] border-[hsl(var(--accent-red))]" />

              {/* Gold seals */}
              <div className="absolute top-20 right-5 stamp animate-stamp font-display text-4xl sm:text-6xl md:text-7xl !p-3 sm:!p-4">
                SOLD
              </div>
              <div className="absolute bottom-32 right-4 stamp animate-stamp-blue font-display text-2xl sm:text-4xl !p-2.5 sm:!p-3" style={{ transform: "rotate(4deg)" }}>
                BULLISH
              </div>

              {/* Credit plate */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex items-stretch bg-[hsl(var(--accent-red-bright))] shadow-[0_6px_18px_-6px_hsl(45_80%_35%/0.6)] overflow-hidden -rotate-1">
                <div className="bg-[hsl(40_30%_12%)] text-[hsl(45_96%_60%)] font-blackops text-[10px] sm:text-[11px] tracking-[0.28em] px-2 py-1 flex flex-col items-center justify-center leading-none">
                  <span>THE</span>
                  <span className="opacity-80">CLOSER</span>
                </div>
                <div className="flex flex-col leading-none px-3 py-1 justify-center font-courier text-[10px] sm:text-[11px] text-[hsl(40_45%_8%)] tracking-[0.18em] font-bold">
                  <span>TUMACAY, IVAN</span>
                  <span className="opacity-80">TICKER · IVT</span>
                </div>
                <div className="border-l border-[hsl(40_45%_8%/0.4)] flex flex-col leading-none px-3 py-1 justify-center font-courier text-[9px] sm:text-[10px] text-[hsl(40_45%_8%)] tracking-[0.2em] font-bold">
                  <span>RELEASE</span>
                  <span>{today}</span>
                </div>
              </div>
            </div>

            {/* Floating sticky note — strong buy */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 sticky-note rotate-3 w-60 z-20 text-base">
              <span className="handwritten-red font-bold uppercase tracking-wider">⟶ STRONG BUY</span>
              <div className="mt-1 text-[14px] leading-snug text-[hsl(40_50%_10%)]">
                Closes every deal.<br />Thinks several moves ahead.<br /><span className="opacity-80">Hire on sight.</span>
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
                STARRING
              </div>
              <h2 className="display-title text-[22vw] sm:text-[16vw] lg:text-[10.4vw] uppercase">
                IVAN
              </h2>
              <h2
                className="display-title text-[22vw] sm:text-[16vw] lg:text-[10.4vw] uppercase relative"
                style={{ marginTop: "0.28em" }}
              >
                <span className="accent">TUMACAY</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="border-y border-[hsl(var(--accent-red)/0.45)] py-4 mb-5 bg-[hsl(45_40%_99%/0.7)] backdrop-blur-sm px-4 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--accent-red))]" />
              <p className="font-typewriter text-xl sm:text-2xl md:text-[26px] text-[hsl(var(--ink-charcoal))] leading-tight tracking-tight">
                <span className="font-blackops text-[hsl(var(--accent-red))] tracking-[0.18em]">THE ROLE:</span>{" "}
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
                ALSO KNOWN FOR
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(45_40%_99%)] border border-[hsl(var(--accent-red)/0.5)] font-blackops text-[13px] sm:text-sm uppercase tracking-[0.18em] text-[hsl(var(--ink-charcoal))] hover:bg-[hsl(var(--accent-red-bright))] hover:text-[hsl(40_45%_8%)] transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 text-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_8%)]" />
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
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1 !rotate-0">THE PITCH</div>
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
                    GET YOUR TICKET
                  </div>
                  <div className="font-blackops text-xl sm:text-2xl tracking-[0.14em] uppercase flex items-center gap-2">
                    VIEW THE TRACK RECORD
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                  <div className="font-courier text-[10px] tracking-[0.25em] opacity-80">
                    EVERY DEAL DOCUMENTED · NOW PLAYING
                  </div>
                </div>
              </a>

              <div className="border border-[hsl(var(--accent-red)/0.5)] p-4 sm:p-5 bg-[hsl(45_40%_99%)] relative overflow-hidden">
                <div className="absolute -top-3 left-3 bg-[hsl(45_40%_99%)] px-2 font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                  STATUS
                </div>
                <div className="flex items-center gap-2 font-blackops text-lg sm:text-xl tracking-[0.14em] uppercase text-[hsl(var(--accent-bone))]">
                  <span className="status-pulse" /> BULL MARKET
                </div>
                <div className="mt-1 font-courier text-[11px] sm:text-[12px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                  Taking on new clients
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                  <span className="rivet" />
                </div>
                <div className="mt-2 font-courier text-[11px] tracking-[0.28em] text-[hsl(var(--accent-red))]">
                  PERFORMANCE 5 / 5
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div className="barcode h-10 w-40 sm:w-56" />
              <div className="font-courier text-[11px] sm:text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.28em] text-right uppercase">
                End of opening titles · Scroll for the feature ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
