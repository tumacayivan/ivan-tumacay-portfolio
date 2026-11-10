import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, BookOpen, ScrollText, Crown, PenLine, Sun, Info } from "lucide-react";
import covHero from "@/assets/covenant/cov-01-hero.jpg";
import covEmbrace from "@/assets/covenant/cov-02-embrace.jpg";
import covDeclaration from "@/assets/covenant/cov-03-declaration.jpg";
import covArticles from "@/assets/covenant/cov-04-articles.jpg";
import covVows from "@/assets/covenant/cov-05-vows.jpg";
import covExpansion from "@/assets/covenant/cov-06-expansion.jpg";
import covFinancing from "@/assets/covenant/cov-07-financing.jpg";
import covSeal from "@/assets/covenant/cov-08-seal.jpg";
import SectionHeading from "./drift/SectionHeading";

const SITE_URL = "https://ivan-tumacay-covenant.onrender.com/";

// Scenes captured from the live site. Every line here is taken from the
// covenant itself, so the section describes the site rather than adding to it.
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

const coverTags = [
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

const articles = [
  { numeral: "I", word: "My life", verse: "Galatians 2:20", meaning: "My days, my body, my time, my strength and my future belong to Him." },
  { numeral: "II", word: "Everything He gave me", verse: "Psalm 24:1", meaning: "All I possess, I hold with an open hand, and give back whenever and however He asks." },
  { numeral: "III", word: "Knowledge, understanding & wisdom", verse: "Proverbs 2:6", meaning: "Every insight, skill, idea and strategy is His, used to build what He is building." },
  { numeral: "IV", word: "All I build", verse: "Exodus 31:3", meaning: "Every business and every work of my hands is dedicated to the Lord: its purpose, its fruit and its increase." },
  { numeral: "V", word: "Kingdom expansion", verse: "Matthew 28:19", meaning: "To win souls for Jesus Christ and make disciples of all nations." },
  { numeral: "VI", word: "Financing His Kingdom", verse: "Deuteronomy 8:18", meaning: "Honour Him with the firstfruits, and direct the wealth He entrusts toward the work of His Kingdom." },
  { numeral: "VII", word: "Integrity in all things", verse: "Colossians 3:23", meaning: "In my home, my business and every dealing: truth, honesty and a just weight." },
  { numeral: "VIII", word: "For the generations", verse: "Psalm 145:4", meaning: "So that the Tumacay name and everything built under it serves the Lord for generations." },
];

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="covenant"
      data-scene="Covenant"
      data-kanji="誓約"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 livery" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 15% 0%, hsl(var(--drift) / calc(0.12 * var(--glow-strength))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading kanji="誓約" kicker="Built by Ivan · A covenant to the Lord" title="My" accent="Covenant">
          The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all
          knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/10 border border-line/10 mb-10 max-w-3xl">
          {coverTags.map((t) => (
            <div key={t.label} className="bg-asphalt px-4 py-3">
              <div className="hud-label !text-ink-dim !text-[10px]">{t.label}</div>
              <div className="font-hud text-lg font-bold uppercase text-ink">{t.value}</div>
            </div>
          ))}
        </div>

        {/* WINDSCREEN VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="panel !border-line/15 overflow-hidden shadow-[0_40px_90px_-40px_hsl(var(--drift)/0.5)]">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line/10 bg-asphalt-2">
                <span className="flex gap-1.5 shrink-0" aria-hidden>
                  <span className="w-2.5 h-2.5 rounded-full bg-sign" />
                  <span className="w-2.5 h-2.5 rounded-full bg-drift" />
                  <span className="w-2.5 h-2.5 rounded-full bg-hud" />
                </span>
                <span className="font-hud text-[11px] tracking-[0.2em] uppercase text-ink-dim truncate">
                  Scene {String(active + 1).padStart(2, "0")} — {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 font-hud text-[10px] tracking-[0.24em] text-sign uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-sign animate-pulse" /> Live
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--void))]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`My Covenant to the Lord — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-[hsl(var(--void)/0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-drift">
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Open the covenant
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <p className="text-ink-dim leading-relaxed">
              <span className="hud-label block mb-1">Scene {String(active + 1).padStart(2, "0")}</span>
              {exhibit.caption}
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border transition-all ${
                    i === active ? "border-drift ring-1 ring-drift" : "border-line/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-drift text-on-drift font-hud text-[10px] font-bold px-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y border-line/10 py-12">
          <blockquote className="font-display text-3xl sm:text-5xl uppercase text-ink leading-tight">
            My life. My all. <span className="text-drift lean">His Kingdom.</span>
          </blockquote>
          <div>
            <div className="hud-label mb-3 flex items-center gap-2">
              <Sun className="w-4 h-4" /> The declaration
            </div>
            <p className="text-ink-dim text-lg leading-relaxed">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift
              of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* THE SITE */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">Inside the covenant</h3>
          <span className="flex-1 h-px bg-line/15" />
          <span className="hud-label !text-ink-dim">Declaration → seal</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="panel panel-hover edge-light p-6 group relative"
            >
              <div className="flex items-center justify-between mb-5">
                <s.icon className="w-6 h-6 text-hud group-hover:text-drift transition-colors" />
                <span className="font-display text-4xl text-line/20 leading-none">{s.n}</span>
              </div>
              <h4 className="font-hud text-lg font-bold uppercase tracking-[0.04em] text-ink mb-1">{s.name}</h4>
              <div className="hud-label !text-[10px] mb-3">{s.tagline}</div>
              <p className="text-ink-dim leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* THE EIGHT VOWS */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">Eight vows, one Lord</h3>
          <span className="flex-1 h-px bg-line/15" />
          <span className="hud-label !text-ink-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/10 border border-line/10 mb-14">
          {articles.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-asphalt p-6 text-left min-h-[190px] hover:bg-asphalt-2 transition-colors"
              >
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
                        <div className="hud-label !text-[10px]">{t.verse}</div>
                        <p className="text-ink leading-relaxed mt-2">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="hud-label !text-ink-dim !text-[10px]">Article {t.numeral}</div>
                        <div className="font-display text-2xl sm:text-3xl uppercase text-ink leading-tight mt-2">{t.word}</div>
                        <div className="hud-label !text-drift !text-[10px] mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-drift">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Read the covenant
            </span>
          </a>
          <a href={`${SITE_URL}#kingdom-expansion`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <span>The Kingdom pillars</span>
          </a>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-dim leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-hud" />
          Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
        </p>
      </div>
    </section>
  );
};

export default CovenantSection;
