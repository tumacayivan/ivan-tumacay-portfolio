import { motion } from "framer-motion";
import { ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone, Crosshair } from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";

const HeroSection = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16 paper-grain">
      {/* GIANT MOST WANTED watermark backdrop */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[32.2vw] sm:text-[27.6vw] leading-[0.8] -rotate-3 select-none whitespace-nowrap">
          MOST WANTED
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">

        {/* HEADER BAND - the WANTED poster header */}
        <div className="relative border-y-[6px] border-double border-ink py-3 sm:py-5 mb-6 bg-paper-cream text-center">
          <div className="absolute -top-3 left-4 sm:left-8 bg-paper px-3 py-0.5 font-courier text-[13px] sm:text-sm tracking-[0.3em] border border-ink">
            BUREAU OF DIGITAL OPERATIONS
          </div>
          <div className="absolute -top-3 right-4 sm:right-8 bg-paper px-3 py-0.5 font-courier text-[13px] sm:text-sm tracking-[0.3em] border border-ink">
            FILE NO. IT-2026-001
          </div>

          <div className="font-courier text-[13px] sm:text-sm tracking-[0.4em] text-ink-brown uppercase mb-1">
            ◉ NOTICE OF SUBJECT INTEREST ◉
          </div>
          <h1 className="font-blackops text-[16.1vw] sm:text-[11.5vw] md:text-[10.3vw] lg:text-[9.8vw] leading-[0.85] tracking-[-0.02em] text-ink uppercase">
            MOST WANTED
          </h1>
          <div className="font-courier text-[13px] sm:text-sm tracking-[0.4em] text-ink-brown uppercase mt-1">
            BY EMPLOYERS · STARTUPS · AGENCIES · CREATIVE STUDIOS
          </div>
        </div>

        {/* Coordinates strip */}
        <div className="hidden sm:flex items-center justify-between font-courier text-[13px] text-ink-brown tracking-widest mb-4">
          <span className="flex items-center gap-2"><Crosshair className="w-3.5 h-3.5" /> 34.0522 N / 118.2437 W</span>
          <span>SECTION I · COVER PAGE</span>
          <span>DATE FILED: {today}</span>
        </div>

        {/* MAIN GRID — IMAGE DOMINATES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-6 lg:gap-10 items-start">

          {/* LEFT - GIGANTIC SUBJECT PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative w-full"
          >
            {/* Tape on top corners */}
            <div className="tape tape-yellow w-32 h-8 -top-4 -left-2 rotate-[-7deg] z-30" />
            <div className="tape tape-yellow w-28 h-7 -top-4 right-8 rotate-[6deg] z-30" />

            <div className="paper-folder p-3 sm:p-5 relative">
              {/* Folder tab */}
              <div className="absolute -top-7 left-6 sm:left-10 px-6 py-1.5 bg-paper-cream border border-ink border-b-0 font-blackops text-sm sm:text-lg tracking-[0.25em] text-ink">
                SUBJECT FILE
              </div>
              <div className="absolute -top-7 right-6 px-4 py-1.5 bg-paper-cream border border-ink border-b-0 font-courier text-[13px] sm:text-sm tracking-[0.25em] text-ink">
                Δ-001
              </div>

              <div className="relative paper-card-cream p-2 sm:p-3 scanline-overlay">
                <div className="absolute inset-0 scan-bar" />

                {/* Evidence tag */}
                <div className="absolute -top-4 right-4 z-20 bg-paper border border-ink px-3 py-1 font-courier text-[13px] sm:text-sm tracking-widest text-ink rotate-[2deg]">
                  EVIDENCE PHOTO 01 OF 01
                </div>

                {/* THE BIG PHOTO with mugshot height bars */}
                <div className="relative overflow-hidden border-[3px] border-ink flex">
                  {/* left height ruler (mugshot style) */}
                  <div className="hidden sm:flex flex-col items-center justify-between bg-paper-beige border-r-2 border-ink px-1.5 py-3 font-courier text-[11px] text-ink tracking-widest">
                    <span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span>
                  </div>

                  {/* the photo */}
                  <div className="relative flex-1">
                    <img
                      src={johnDoeAvatar}
                      alt="Ivan Tumacay - Software Engineer & Digital Operations Specialist"
                      className="w-full h-[600px] xs:h-[680px] sm:h-[760px] md:h-[820px] lg:h-[900px] object-cover object-top photocopy-strong"
                    />

                    {/* MASSIVE stamps over photo */}
                    <div className="absolute top-8 right-5 stamp animate-stamp font-blackops text-4xl sm:text-6xl md:text-7xl !p-3 sm:!p-4">
                      WANTED
                    </div>
                    <div className="absolute bottom-10 left-4 stamp animate-stamp-blue font-blackops text-2xl sm:text-4xl !p-2.5 sm:!p-3" style={{ transform: "rotate(4deg)" }}>
                      SUBJECT-X
                    </div>
                    <div className="absolute top-1/2 right-6 -translate-y-1/2 stamp !rotate-[-12deg] font-blackops text-lg sm:text-3xl !p-2">
                      CLASSIFIED
                    </div>

                    {/* corner markers */}
                    <div className="absolute top-3 left-3 w-10 h-10 border-l-[3px] border-t-[3px] border-paper" />
                    <div className="absolute top-3 right-3 w-10 h-10 border-r-[3px] border-t-[3px] border-paper" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 border-l-[3px] border-b-[3px] border-paper" />
                    <div className="absolute bottom-3 right-3 w-10 h-10 border-r-[3px] border-b-[3px] border-paper" />

                    {/* center crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
                      <Crosshair className="w-16 h-16 text-paper" />
                    </div>

                    {/* bottom mugshot ID plate */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-paper border-2 border-ink px-4 py-1 font-blackops text-sm sm:text-base tracking-[0.35em] text-ink">
                      ID · IT — 26 — 001
                    </div>
                  </div>
                </div>

                {/* below-photo metadata strip */}
                <div className="mt-3 grid grid-cols-3 gap-2 font-courier text-[13px] sm:text-sm tracking-widest text-ink">
                  <div className="border border-ink p-2 text-center">FRONT · 0001</div>
                  <div className="border border-ink p-2 text-center">CAPTURED · {today}</div>
                  <div className="border border-ink p-2 text-center">PROFILE · 0002</div>
                </div>
              </div>
            </div>

            {/* Sticky memo */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 sticky-note rotate-3 w-56 z-20 text-base">
              <span className="handwritten-red font-bold">⟶ HIGH PRIORITY</span>
              <div className="mt-1 text-[14px] leading-snug">
                Subject is highly skilled.<br />Approach with offer.
              </div>
            </div>
          </motion.div>

          {/* RIGHT - DOSSIER DATA (narrower column) */}
          <div className="relative flex flex-col">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <div className="font-courier text-[13px] sm:text-sm tracking-[0.45em] text-ink-brown mb-2 uppercase">
                ◉ NAME OF SUBJECT ◉
              </div>
              <h2 className="font-blackops text-[20.7vw] sm:text-[14.9vw] lg:text-[9.8vw] leading-[0.85] tracking-[-0.02em] text-ink uppercase">
                IVAN
              </h2>
              <h2 className="font-blackops text-[20.7vw] sm:text-[14.9vw] lg:text-[9.8vw] leading-[0.85] tracking-[-0.02em] text-ink uppercase relative">
                TUMACAY
                <span className="absolute -bottom-1 left-0 right-0 h-[5px] bg-ink" />
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="border-y-[6px] border-double border-ink py-3 sm:py-4 mb-4"
            >
              <p className="font-typewriter text-lg sm:text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                <span className="font-bold">SUBJECT IS:</span> Software Engineer &amp; <span className="font-bold underline">Digital Operations Specialist</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-4"
            >
              <div className="font-courier text-[13px] sm:text-sm tracking-[0.4em] text-ink-brown mb-2 uppercase">
                ◉ ALIASES / KNOWN AS ◉
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-paper border-2 border-ink font-blackops text-[13px] sm:text-sm uppercase tracking-[0.15em] text-ink"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="paper-card-cream p-4 sm:p-5 mb-4 relative"
            >
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">DESCRIPTION</div>
              <p className="font-courier text-lg sm:text-xl text-ink leading-relaxed mt-2">
                Combining <span className="font-bold underline">full-stack development</span>, <span className="font-bold underline">enterprise systems</span>, <span className="font-bold underline">AI &amp; automation</span>, and comprehensive <span className="font-bold underline">digital operations services</span> with nearly 10 years of experience.
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
                className="bg-ink text-paper border-2 border-ink hover:bg-paper hover:text-ink transition-colors p-4 sm:p-5 flex flex-col justify-center"
              >
                <div className="font-courier text-[13px] sm:text-sm tracking-[0.3em] uppercase opacity-80 mb-1">
                  ◉ REWARD FOR ENGAGEMENT
                </div>
                <div className="font-blackops text-2xl sm:text-3xl tracking-[0.05em] uppercase flex items-center gap-2">
                  REVIEW THE FILE
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
                <div className="font-courier text-[13px] sm:text-sm tracking-widest opacity-80 mt-1">
                  ALL EXPERIENCE DOCUMENTED · FILES INSIDE
                </div>
              </a>

              <div className="border-2 border-ink p-4 sm:p-5 bg-paper relative">
                <div className="absolute -top-3 left-3 bg-paper px-2 font-courier text-[13px] tracking-widest text-ink-brown">
                  STATUS
                </div>
                <div className="flex items-center gap-2 font-blackops text-lg sm:text-xl tracking-[0.08em] uppercase">
                  <span className="status-pulse" /> AT LARGE
                </div>
                <div className="mt-1 font-courier text-[13px] sm:text-sm tracking-widest text-ink-brown">
                  ACCEPTING NEW MISSIONS
                </div>
                <div className="mt-2 font-courier text-[13px] tracking-widest text-ink-brown">
                  CLEARANCE LVL 5 / 5
                </div>
              </div>
            </motion.div>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div className="barcode h-10 w-40 sm:w-56" />
              <div className="font-courier text-[13px] sm:text-sm text-ink-brown tracking-widest text-right">
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
