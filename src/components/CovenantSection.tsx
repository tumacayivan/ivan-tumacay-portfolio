import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ExternalLink, Layers, ScrollText, Crown, PenLine, Sun, Info } from "lucide-react";
import covHero from "@/assets/covenant/cov-01-hero.jpg";
import covEmbrace from "@/assets/covenant/cov-02-embrace.jpg";
import covDeclaration from "@/assets/covenant/cov-03-declaration.jpg";
import covArticles from "@/assets/covenant/cov-04-articles.jpg";
import covVows from "@/assets/covenant/cov-05-vows.jpg";
import covExpansion from "@/assets/covenant/cov-06-expansion.jpg";
import covFinancing from "@/assets/covenant/cov-07-financing.jpg";
import covSeal from "@/assets/covenant/cov-08-seal.jpg";

const SITE_URL = "https://ivan-tumacay-covenant.onrender.com/";

// Exhibits captured from the live site. Everything said here comes from the
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

const fileTags = [
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

const pad = (n: number) => String(n).padStart(2, "0");

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="covenant" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[16vw] leading-none -rotate-6 -mr-10 mt-10">VOWS</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-ink">
            <div className="flex items-center gap-3">
              <span className="status-pulse" />
              <span className="font-blackops text-sm tracking-[0.3em] text-stamp-red">
                COVENANT FILE // 09-B
              </span>
            </div>
            <span className="font-courier text-[10px] text-ink-brown tracking-widest hidden sm:inline">
              MY LIFE · MY ALL · HIS KINGDOM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
                Built by Ivan // covenant file
              </p>
              <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
                MY <span className="text-stamp-red">COVENANT</span>
              </h2>
            </div>
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1">THE COVENANT</div>
              <p className="font-typewriter text-base sm:text-lg text-ink leading-relaxed mt-2">
                The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: <span className="font-bold text-stamp-red underline decoration-wavy">his life, everything God gave him</span>, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {fileTags.map((t) => (
              <div key={t.label} className="paper-card px-4 py-3">
                <div className="font-courier text-[10px] tracking-widest text-ink-brown uppercase">{t.label}</div>
                <div className="font-blackops text-lg text-ink uppercase tracking-[0.08em]">{t.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EXHIBIT VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="paper-folder p-3 sm:p-4 relative">
              <div className="tape tape-yellow w-16 h-4 -top-2 left-8 rotate-[-4deg] z-10" />
              <div className="tape tape-yellow w-16 h-4 -top-2 right-8 rotate-[3deg] z-10" />
              <div className="flex items-center justify-between gap-3 mb-3 font-courier text-[10px] sm:text-xs tracking-widest text-ink">
                <span className="truncate uppercase">
                  EXHIBIT A-{pad(active + 1)} — {exhibit.title}
                </span>
                <span className="hidden sm:inline text-stamp-red font-blackops">LIVE FEED</span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] border-2 border-ink bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`My Covenant to the Lord — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[hsl(var(--paper))]" />

                <div className="absolute bottom-4 right-6 stamp text-xs sm:text-sm !p-1.5 z-10 bg-[hsl(var(--paper)/0.85)]">
                  EIGHT VOWS · ONE LORD
                </div>

                <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4 z-20">
                  <div className="w-12 h-12 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[hsl(var(--paper))]" />
                  </div>
                  <span className="font-blackops text-sm text-[hsl(var(--paper))] text-center tracking-widest uppercase">
                    OPEN THE COVENANT
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="sticky-note rotate-[-1deg]">
              <div className="font-courier text-[10px] tracking-widest text-ink-brown mb-1">EXHIBIT A-{pad(active + 1)}</div>
              <p className="leading-relaxed">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border-2 bg-paper transition-all ${
                    i === active ? "border-stamp ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : "border-ink opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top photocopy" />
                  <span className="absolute top-0 left-0 bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-[10px] px-1.5">
                    A-{pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* HARD RULES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <blockquote className="font-blackops text-3xl sm:text-5xl text-ink leading-[0.95] uppercase">
            My life. My all. <span className="text-stamp-red">His Kingdom.</span>
          </blockquote>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 flex items-center gap-1">
              <Sun className="w-3 h-3" /> THE DECLARATION
            </div>
            <p className="font-typewriter text-base text-ink leading-relaxed mt-2">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mb-6 flex items-center gap-3">
          <Layers className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">Inside the covenant</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">DECLARATION → SEAL</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 h-full flex flex-col relative paper-grain"
            >
              <div className="tape tape-yellow w-12 h-3 -top-1.5 left-4 rotate-[-3deg]" />
              <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                STAGE {s.n}
              </span>
              <div className="flex items-start gap-3 mb-4 border-b-2 border-dashed-ink pb-3 mt-3">
                <div className="p-2 border-2 border-ink bg-paper text-stamp-red shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="font-blackops text-lg text-ink uppercase tracking-[0.05em] leading-tight">{s.name}</h4>
              </div>
              <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red mb-2">◉ {s.tagline.toUpperCase()}</div>
              <p className="font-typewriter text-sm text-ink/80 leading-snug flex-1">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">Eight vows, one Lord</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">TAP A CARD TO TURN IT</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`paper-card-cream p-5 min-h-[170px] text-left relative transition-shadow ${
                  isOpen ? "ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : ""
                }`}
                style={{ transform: `rotate(${((i % 3) - 1) * 0.4}deg)` }}
              >
                <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                  NOTE-{String(i + 1).padStart(3, "0")}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <>
                        <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red">▣ {t.word.toUpperCase()}</div>
                        <p className="font-typewriter text-sm text-ink leading-snug mt-2">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-courier text-[10px] tracking-widest text-ink-brown">{t.say}</div>
                        <div className="font-blackops text-2xl sm:text-3xl uppercase leading-tight mt-2 text-ink">{t.word}</div>
                        <div className="mt-3 stamp stamp-blue text-[10px] !p-1 inline-block">ARTICLE · TAP TO OPEN</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-sm tracking-[0.18em] uppercase hover:bg-[hsl(var(--paper))] hover:text-stamp-red transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Read the covenant
          </a>
          <a
            href={`${SITE_URL}#kingdom-expansion`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-ink bg-paper text-ink font-blackops text-sm tracking-[0.18em] uppercase hover:text-stamp-red transition-colors"
          >
            The Kingdom pillars
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="paper-card-cream p-4 relative max-w-3xl mt-8">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 !rotate-0">NOTE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-ink leading-relaxed mt-1">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-stamp-red" />
            Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>FILE OPEN · BUILT BY IVAN</span>
          <span>COVENANT FILE / 09-B</span>
        </div>
      </div>
    </section>
  );
};

export default CovenantSection;
