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

const clientTags = [
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

const underline = "font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4";

const SubHeading = ({ icon: Icon, title, note }: { icon: typeof ScrollText; title: string; note: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-[hsl(var(--accent-red))] shrink-0" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] uppercase tracking-[0.14em]">
      {title}
    </h3>
    <span className="flex-1 h-px bg-[hsl(var(--accent-red)/0.5)]" />
    <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] whitespace-nowrap uppercase hidden sm:inline">
      {note}
    </span>
  </div>
);

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];
  const sceneNo = String(active + 1).padStart(2, "0");

  return (
    <section
      id="covenant"
      className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] paper-grain"
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[17vw] leading-none rotate-[4deg] -mr-6 mt-16 whitespace-nowrap">
          VOWS
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 relative"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[hsl(var(--accent-red)/0.4)]">
            <div className="section-eyebrow">
              <Sun className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 08-B // BUILT BY IVAN
            </div>
            <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] hidden sm:inline">
              MY LIFE · MY ALL · HIS KINGDOM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
                Built by Ivan · A covenant to the Lord
              </p>
              <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
                MY <span className="accent">COVENANT</span>
              </h2>
            </div>
            <div className="paper-card-cream p-5 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">COVENANT FILE</div>
              <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
                The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: <span className={underline}>his life, everything God gave him</span>, and all knowledge, understanding and wisdom, given for Kingdom expansion and the <span className={underline}>financing of His Kingdom</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Model tags */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-3xl">
          {clientTags.map((t) => (
            <div key={t.label} className="paper-card-cream px-4 py-3">
              <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">{t.label}</div>
              <div className="font-blackops text-xl tracking-[0.12em] text-[hsl(var(--accent-bone))]">{t.value}</div>
            </div>
          ))}
        </div>

        {/* Exhibit viewer */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 mb-16">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="paper-card-cream p-2 sm:p-3 surveillance-frame">
              <span className="sv-tl" />
              <span className="sv-tr" />
              <div className="flex items-center justify-between gap-3 px-2 pb-2 mb-2 border-b border-dashed-ink">
                <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] shrink-0">
                  EXHIBIT—{sceneNo}
                </span>
                <span className="font-blackops text-[13px] tracking-[0.22em] uppercase text-[hsl(var(--ink-charcoal))] truncate">
                  {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-2 font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">
                  <span className="status-pulse" /> SITE LIVE
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`My Covenant to the Lord — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[hsl(var(--paper-cream)/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="dossier-cta text-sm">
                    <ExternalLink className="w-4 h-4" /> OPEN THE COVENANT
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="paper-card-cream p-5 relative">
              <div className="tape w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />
              <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] mb-2">
                EXHIBIT {sceneNo} / {String(exhibits.length).padStart(2, "0")}
              </div>
              <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal))] leading-relaxed">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border-2 transition-all ${
                    i === active
                      ? "border-[hsl(var(--accent-red))]"
                      : "border-[hsl(40_18%_32%/0.15)] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-[hsl(var(--accent-red))] text-[hsl(40_45%_10%)] font-courier text-[10px] font-bold px-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hard rules */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-16">
          <div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              The Declaration
            </p>
            <h3 className="display-title text-3xl sm:text-5xl uppercase leading-[1.05]">
              MY LIFE. MY ALL. <span className="accent">HIS KINGDOM.</span>
            </h3>
          </div>
          <div className="paper-card-cream p-5">
            <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* Our approach */}
        <SubHeading icon={ScrollText} title="Inside the Covenant" note="Declaration → Seal" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 relative group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)] transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="font-blackops text-4xl text-[hsl(var(--accent-red)/0.35)] leading-none">{s.n}</span>
              </div>
              <h4 className="font-blackops text-xl uppercase tracking-[0.12em] text-[hsl(var(--accent-bone))] mb-1">{s.name}</h4>
              <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mb-2">{s.tagline}</div>
              <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Risk management */}
        <SubHeading icon={BookOpen} title="Eight Vows, One Lord" note="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="paper-card-cream p-5 relative text-left min-h-[170px] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase">{t.say}</span>
                  <span className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">{isOpen ? "TURNED" : "FACE UP"}</span>
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
                      <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))] leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-blackops text-3xl uppercase tracking-[0.08em] text-[hsl(var(--accent-bone))] leading-tight">{t.word}</div>
                        <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] mt-3">TURN THE CARD //</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm">
            <ExternalLink className="w-4 h-4" /> READ THE COVENANT
          </a>
          <a href={`${SITE_URL}#kingdom-expansion`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
            THE KINGDOM PILLARS
          </a>
        </div>

        {/* Disclaimer */}
        <div className="paper-card-cream p-5 relative max-w-3xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">NOTE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-[hsl(var(--ink-brown))] leading-relaxed mt-1">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
            Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> BUILT BY IVAN</span>
          <span>MY LIFE · MY ALL · HIS KINGDOM</span>
          <span>END OF SECTION 08-B</span>
        </div>
      </div>
    </section>
  );
};

export default CovenantSection;
