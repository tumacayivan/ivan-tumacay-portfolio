import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ScrollText, Crown, BookOpen, PenLine, Sun, Info } from "lucide-react";
import covHero from "@/assets/covenant/cov-01-hero.jpg";
import covEmbrace from "@/assets/covenant/cov-02-embrace.jpg";
import covDeclaration from "@/assets/covenant/cov-03-declaration.jpg";
import covArticles from "@/assets/covenant/cov-04-articles.jpg";
import covVows from "@/assets/covenant/cov-05-vows.jpg";
import covExpansion from "@/assets/covenant/cov-06-expansion.jpg";
import covFinancing from "@/assets/covenant/cov-07-financing.jpg";
import covSeal from "@/assets/covenant/cov-08-seal.jpg";

const SITE_URL = "https://ivan-tumacay-covenant.onrender.com/";

// Scenes captured from the live site. Everything said here comes from the
// site itself, so it stays a description of the site and adds nothing to it.
const exhibits = [
  { image: covHero, title: "My life, my all", caption: "A covenant made before the Lord: my life, my all, His Kingdom." },
  { image: covEmbrace, title: "The Lion", caption: "The man in the embrace of the Lion of the tribe of Judah, between Revelation 5:5 and Genesis 32:26." },
  { image: covDeclaration, title: "The declaration", caption: "Nothing I have is my own. My breath, my family, my work and every gift of mind and spirit came from His hand." },
  { image: covArticles, title: "The articles", caption: "Eight vows, one Lord. Each article is a part of life placed in His hands, and each rests on His Word." },
  { image: covVows, title: "The vows", caption: "Every article carries its numeral, its vow and the verse it stands on." },
  { image: covExpansion, title: "Kingdom expansion", caption: "Pillar one: winning souls and making disciples, through the Tumacay Group and among the nations." },
  { image: covFinancing, title: "Financing His Kingdom", caption: "Pillar two: the silver and the gold are His, and what He entrusts funds the work of His Kingdom." },
  { image: covSeal, title: "The seal", caption: "Here I am, Lord. Send me. The covenant closes with a prayer and a signature." },
];

const letterOf = (i: number) => String.fromCharCode(65 + i);

const fileMarkings = [
  { label: "Covenant of", value: "Ivan Tumacay" },
  { label: "Articles", value: "Eight vows" },
  { label: "Pillars", value: "Two" },
  { label: "Sealed", value: "Isaiah 6:8" },
];

const stages = [
  { n: "01", icon: BookOpen, name: "Declaration", tagline: "Nothing is my own", body: "Made freely before the Father, the Son and the Holy Spirit, returning every gift to Him as His steward." },
  { n: "02", icon: ScrollText, name: "Articles", tagline: "Eight vows", body: "From my life to the generations after me, each vow written out in full with the verse it rests on." },
  { n: "03", icon: Crown, name: "Pillars", tagline: "Expansion & financing", body: "Two pillars with five commitments each: advancing the Kingdom, and funding the work of the Kingdom." },
  { n: "04", icon: PenLine, name: "Seal", tagline: "Here I am, send me", body: "A closing prayer, signed by Mac Neil Ivan Lucenesio Tumacay, covenant maker, Tumacay Group." },
];

const terms = [
  { word: "My life", say: "Article I", meaning: "My days, my body, my time, my strength and my future belong to Him. (Galatians 2:20)" },
  { word: "Everything He gave me", say: "Article II", meaning: "All I possess, I hold with an open hand, and give back whenever and however He asks. (Psalm 24:1)" },
  { word: "Knowledge, understanding & wisdom", say: "Article III", meaning: "Every insight, skill, idea and strategy is His, used to build what He is building. (Proverbs 2:6)" },
  { word: "All I build", say: "Article IV", meaning: "Every business and every work of my hands is dedicated to the Lord: its purpose, its fruit and its increase. (Exodus 31:3)" },
  { word: "Kingdom expansion", say: "Article V", meaning: "To win souls for Jesus Christ and make disciples of all nations. (Matthew 28:19)" },
  { word: "Financing His Kingdom", say: "Article VI", meaning: "Honour Him with the firstfruits, and direct the wealth He entrusts toward the work of His Kingdom. (Deuteronomy 8:18)" },
  { word: "Integrity in all things", say: "Article VII", meaning: "In my home, my business and every dealing: truth, honesty and a just weight. (Colossians 3:23)" },
  { word: "For the generations", say: "Article VIII", meaning: "So that the Tumacay name and everything built under it serves the Lord for generations. (Psalm 145:4)" },
];

const SubHeading = ({ title, note }: { title: string; note: string }) => (
  <div className="flex items-center gap-3 sm:gap-5 mb-6">
    <div className="diag-stripes-red h-2 w-12 sm:w-20" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] tracking-[0.06em] leading-none uppercase">
      {title}
    </h3>
    <div className="flex-1 border-t border-[hsl(var(--accent-red)/0.4)]" />
    <span className="hidden md:inline font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">{note}</span>
  </div>
);

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="covenant"
      className="dark relative overflow-hidden bg-[hsl(var(--paper))] text-[hsl(var(--ink-charcoal))]"
      style={{ backgroundImage: "var(--noise-body), var(--body-gradient)" }}
    >
      <div className="diag-stripes h-1.5" />

      <div className="relative py-16 sm:py-24 paper-grain">
        <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,var(--wash-red)_0%,transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-start overflow-hidden">
          <div className="watermark text-[15vw] leading-none rotate-[-6deg] -ml-10">VOWS</div>
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 2.2, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="hidden lg:flex !absolute right-0 top-2 stamp !text-4xl !px-6 !py-3 z-10"
            >
              BUILT BY IVAN
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="section-eyebrow">
                <Sun className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                COVENANT FILE // EIGHT VOWS
              </div>
              <span className="inline-flex items-center gap-1.5 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[12px] tracking-[0.3em] px-2.5 py-1 glow-red">
                <ScrollText className="w-3 h-3" /> A COVENANT MADE BEFORE THE LORD
              </span>
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              Built by Ivan · A covenant to the Lord
            </p>
            <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
              MY <span className="accent">COVENANT</span>
            </h2>

            {/* File markings */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[hsl(var(--accent-red)/0.6)] max-w-5xl">
              {fileMarkings.map((m) => (
                <div
                  key={m.label}
                  className="px-3 py-2 border-b border-r border-[hsl(var(--accent-red)/0.3)] bg-[hsl(var(--surface-1)/0.8)]"
                >
                  <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">{m.label}</div>
                  <div className="font-blackops text-lg tracking-[0.14em] text-[hsl(var(--accent-red))] leading-tight">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 paper-card-cream p-5 max-w-3xl relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper))]">
                NOTE
              </div>
              <p className="font-typewriter text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-1">
                The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
              </p>
            </div>
          </motion.div>

          {/* EXHIBITS */}
          <div className="flex flex-col gap-10 mb-16">
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
              <div className="tape w-20 h-5 -top-2.5 left-10 rotate-[-4deg] z-20" />
              <div className="tape tape-clear w-14 h-4 -top-2 right-14 rotate-[5deg] z-20" />

              <div className="relative bg-[hsl(0_0%_4%)] border-2 border-[hsl(var(--accent-red))] glow-red transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[hsl(var(--accent-red)/0.5)] bg-[hsl(0_0%_7%)]">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(358_79%_51%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(42_95%_52%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_70%_45%)]" />
                  </div>
                  <span className="font-courier text-[11px] tracking-[0.2em] text-[hsl(40_12%_70%)] truncate uppercase">
                    EXHIBIT {letterOf(active)} // {exhibit.title}
                  </span>
                  <span className="hidden sm:flex items-center font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] shrink-0">
                    <span className="status-pulse" /> LIVE
                  </span>
                </div>

                <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(0_0%_3%)]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                      key={active}
                      src={exhibit.image}
                      alt={`My Covenant to the Lord — ${exhibit.title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                    />
                  </AnimatePresence>
                  <div className="scan-bar" />

                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

                  <div className="absolute inset-0 bg-[hsl(0_0%_3%/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                    <div className="w-16 h-16 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.18)] glow-red">
                      <ExternalLink className="w-6 h-6 text-[hsl(var(--accent-red))]" />
                    </div>
                    <span className="font-blackops text-base text-[hsl(40_22%_94%)] tracking-[0.28em] uppercase">
                      Open the covenant
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Exhibit index */}
            <div className="-mt-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">
                  <span className="font-blackops tracking-[0.3em] text-[hsl(var(--accent-red))]">EXHIBIT {letterOf(active)} //</span>{" "}
                  {exhibit.caption}
                </p>
                <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                  {active + 1} of {exhibits.length} exhibits
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
                {exhibits.map((ex, i) => (
                  <button
                    key={ex.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    aria-label={`Show exhibit ${letterOf(i)}: ${ex.title}`}
                    className={`group/thumb relative text-left border-2 transition-colors ${
                      i === active
                        ? "border-[hsl(var(--accent-red))] glow-red"
                        : "border-[hsl(var(--line)/0.15)] hover:border-[hsl(var(--accent-red)/0.6)]"
                    }`}
                  >
                    <img
                      src={ex.image}
                      alt=""
                      loading="lazy"
                      className={`w-full aspect-[16/9] object-cover object-top transition ${
                        i === active ? "" : "opacity-60 grayscale group-hover/thumb:opacity-100 group-hover/thumb:grayscale-0"
                      }`}
                    />
                    <span className="absolute top-0 left-0 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[11px] tracking-[0.2em] px-1.5">
                      {letterOf(i)}
                    </span>
                    <span className="block px-1.5 py-1 font-courier text-[10px] tracking-[0.12em] uppercase truncate text-[hsl(var(--ink-brown))] bg-[hsl(var(--surface-1))]">
                      {ex.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* HARD RULES */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-16">
            <div>
              <div className="section-eyebrow mb-3">
                <Sun className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                THE DECLARATION
              </div>
              <h3 className="font-blackops text-3xl sm:text-5xl uppercase text-[hsl(var(--accent-bone))] tracking-[0.04em] leading-[1.05]">
                My life. My all. <span className="text-[hsl(var(--accent-red))]">His Kingdom.</span>
              </h3>
            </div>
            <div className="paper-card-cream p-5 paper-grain relative">
              <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed">
                Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
              </p>
            </div>
          </div>

          {/* OUR APPROACH */}
          <SubHeading title="Inside the Covenant" note="Declaration → seal" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="paper-card-cream p-5 paper-grain relative group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">SECTION {s.n}</span>
                  <div className="p-1.5 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(var(--on-red))] transition-colors">
                    <s.icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-blackops text-lg text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-tight mb-1 group-hover:text-[hsl(var(--accent-red))] transition-colors">
                  {s.name}
                </h4>
                <div className="font-courier text-[10px] tracking-[0.28em] text-[hsl(var(--ink-brown))] uppercase mb-2">{s.tagline}</div>
                <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* RISK MANAGEMENT */}
          <SubHeading title="Eight Vows, One Lord" note="Tap a card to turn it" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {terms.map((t, i) => {
              const isOpen = flipped === t.word;
              return (
                <button
                  key={t.word}
                  type="button"
                  onClick={() => setFlipped(isOpen ? null : t.word)}
                  aria-expanded={isOpen}
                  className="paper-card-cream p-5 paper-grain relative text-left min-h-[170px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                      CARD {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-courier text-[10px] tracking-[0.2em] text-[hsl(var(--ink-brown))]">{t.say}</span>
                  </div>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isOpen ? "back" : "front"}
                      initial={{ opacity: 0, rotateX: -70 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      exit={{ opacity: 0, rotateX: 70 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <p className="font-courier text-[13px] text-[hsl(var(--accent-bone))] leading-relaxed">{t.meaning}</p>
                      ) : (
                        <>
                          <div className="font-blackops text-3xl uppercase tracking-[0.04em] text-[hsl(var(--accent-bone))] leading-tight">
                            {t.word}
                          </div>
                          <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mt-3">
                            Turn the card →
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* CTA + DISCLAIMER */}
          <div className="paper-card-cream p-5 sm:p-6 paper-grain relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <p className="flex items-start gap-2 font-courier text-[12px] text-[hsl(var(--ink-brown))] leading-relaxed max-w-3xl">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
                <span>
                  <span className="font-blackops tracking-[0.2em] text-[hsl(var(--accent-red))]">NOTE ·</span> Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm flex-1">
                  <ExternalLink className="w-4 h-4" />
                  <span>READ THE COVENANT</span>
                </a>
                <a href={`${SITE_URL}#kingdom-expansion`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
                  <span>THE KINGDOM PILLARS</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
            <span><span className="text-[hsl(var(--accent-red))]">◉</span> END OF COVENANT FILE</span>
            <span>MY LIFE · MY ALL · HIS KINGDOM</span>
            <span>FILE · COVENANT</span>
          </div>
        </div>
      </div>

      <div className="diag-stripes h-1.5" />
    </section>
  );
};

export default CovenantSection;
