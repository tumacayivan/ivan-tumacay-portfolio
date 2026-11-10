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
import SectionHeading from "./reaction/SectionHeading";

const SITE_URL = "https://ivan-tumacay-covenant.onrender.com/";

// Plates captured from the live site. Everything said here comes from the
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

const promises = [
  { word: "My life", say: "Article I", meaning: "My days, my body, my time, my strength and my future belong to Him. (Galatians 2:20)" },
  { word: "Everything He gave me", say: "Article II", meaning: "All I possess, I hold with an open hand, and give back whenever and however He asks. (Psalm 24:1)" },
  { word: "Knowledge, understanding & wisdom", say: "Article III", meaning: "Every insight, skill, idea and strategy is His, used to build what He is building. (Proverbs 2:6)" },
  { word: "All I build", say: "Article IV", meaning: "Every business and every work of my hands is dedicated to the Lord: its purpose, its fruit and its increase. (Exodus 31:3)" },
  { word: "Kingdom expansion", say: "Article V", meaning: "To win souls for Jesus Christ and make disciples of all nations. (Matthew 28:19)" },
  { word: "Financing His Kingdom", say: "Article VI", meaning: "Honour Him with the firstfruits, and direct the wealth He entrusts toward the work of His Kingdom. (Deuteronomy 8:18)" },
  { word: "Integrity in all things", say: "Article VII", meaning: "In my home, my business and every dealing: truth, honesty and a just weight. (Colossians 3:23)" },
  { word: "For the generations", say: "Article VIII", meaning: "So that the Tumacay name and everything built under it serves the Lord for generations. (Psalm 145:4)" },
];

const plate = (i: number) => String.fromCharCode(65 + i);

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="covenant"
      data-scene="The covenant"
      data-code="Part II · 03C"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line/20" />
      <div aria-hidden className="absolute inset-0 chalkboard pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 85% 0%, hsl(var(--ember) / calc(0.08 * var(--bloom))), transparent 60%)",
        }}
      />

      <div className="gutter relative">
        <SectionHeading
          code="Doc · 03C"
          kicker="Built by Ivan · A covenant to the Lord"
          title="My"
          accent="Covenant"
        >
          The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-10 max-w-3xl">
          {clientTags.map((t) => (
            <div key={t.label} className="bg-base px-4 py-3">
              <div className="slug slug-dim !text-[10px]">{t.label}</div>
              <div className="font-doc text-base font-semibold uppercase text-ink mt-1">{t.value}</div>
            </div>
          ))}
        </div>

        {/* PLATE VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="plate !border-line/20 overflow-hidden shadow-[0_40px_90px_-40px_hsl(var(--shadow))]">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line/15 bg-base-2">
                <span className="font-doc text-[11px] tracking-[0.2em] uppercase text-ember shrink-0">
                  Plate {plate(active)}
                </span>
                <span className="font-doc text-[11px] tracking-[0.16em] uppercase text-ink-dim truncate">
                  {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 font-doc text-[10px] tracking-[0.24em] text-ink-dim uppercase">
                  <span className="w-1.5 h-1.5 bg-ember tick-pulse" /> Live
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--void))]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`My Covenant to the Lord — ${exhibit.title}`}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div aria-hidden className="absolute -inset-[12%] grain-layer" />
                <div className="absolute inset-0 bg-[hsl(var(--void)/0.82)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-primary">
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
              <span className="slug block mb-1.5">Plate {plate(active)}</span>
              {exhibit.caption}
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show plate ${plate(i)}: ${ex.title}`}
                  className={`relative overflow-hidden border transition-all ${
                    i === active ? "border-ember ring-1 ring-ember" : "border-line/15 opacity-55 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top grayscale" />
                  <span className="absolute top-0 left-0 bg-ember text-on-ember font-doc text-[10px] font-bold px-1.5">
                    {plate(i)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y border-line/15 py-12">
          <blockquote className="display text-3xl sm:text-5xl text-ink">
            My life. My all. <span className="ignited">His Kingdom.</span>
          </blockquote>
          <div>
            <div className="slug mb-3 flex items-center gap-2">
              <Sun className="w-4 h-4" /> The declaration
            </div>
            <p className="text-ink-dim text-lg leading-relaxed">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* INSIDE THE COVENANT */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">Inside the covenant</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">Declaration → seal</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="plate plate-hover filament ticks p-6 group"
            >
              <div className="flex items-center justify-between mb-5">
                <s.icon className="w-6 h-6 text-ember" />
                <span className="display text-4xl text-line/25 group-hover:text-ember transition-colors">{s.n}</span>
              </div>
              <h4 className="font-doc text-base font-semibold uppercase tracking-[0.06em] text-ink mb-1">{s.name}</h4>
              <div className="slug slug-dim !text-[10px] mb-3">{s.tagline}</div>
              <p className="text-ink-dim leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* THE EIGHT VOWS */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">Eight vows, one Lord</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-14">
          {promises.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-base p-6 text-left min-h-[180px] hover:bg-base-2 transition-colors"
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
                        <div className="slug">{t.word}</div>
                        <p className="text-ink leading-relaxed mt-3">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="slug slug-dim !text-[10px]">{t.say}</div>
                        <div className="display text-3xl sm:text-4xl text-ink mt-3">{t.word}</div>
                        <div className="slug !text-[10px] mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Read the covenant
            </span>
          </a>
          <a href={`${SITE_URL}#kingdom-expansion`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>The Kingdom pillars</span>
          </a>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-dim leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-ember" />
          <span>
            <span className="slug !text-[10px] mr-2">Note</span>
            Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
          </span>
        </p>
      </div>
    </section>
  );
};

export default CovenantSection;
