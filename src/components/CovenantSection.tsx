import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Shirt, Layers, ScrollText, Crown, BookOpen, PenLine, Info } from "lucide-react";
import covHero from "@/assets/covenant/cov-01-hero.jpg";
import covEmbrace from "@/assets/covenant/cov-02-embrace.jpg";
import covDeclaration from "@/assets/covenant/cov-03-declaration.jpg";
import covArticles from "@/assets/covenant/cov-04-articles.jpg";
import covVows from "@/assets/covenant/cov-05-vows.jpg";
import covExpansion from "@/assets/covenant/cov-06-expansion.jpg";
import covFinancing from "@/assets/covenant/cov-07-financing.jpg";
import covSeal from "@/assets/covenant/cov-08-seal.jpg";
import ScrollReveal from "./ScrollReveal";

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

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

const Corners = ({ size = "w-4 h-4" }: { size?: string }) => (
  <>
    <div className={`absolute -top-1 -left-1 ${size} border-l-2 border-t-2 border-ink`} />
    <div className={`absolute -top-1 -right-1 ${size} border-r-2 border-t-2 border-ink`} />
    <div className={`absolute -bottom-1 -left-1 ${size} border-l-2 border-b-2 border-ink`} />
    <div className={`absolute -bottom-1 -right-1 ${size} border-r-2 border-b-2 border-ink`} />
  </>
);

const SubHeading = ({ icon: Icon, title, meta }: { icon: typeof Layers; title: string; meta: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-ink" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">{title}</h3>
    <span className="flex-1 h-px border-t border-dashed-ink" />
    <span className="font-courier text-[13px] text-ink-brown tracking-widest uppercase">{meta}</span>
  </div>
);

const CovenantSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="covenant" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-y-2 border-double border-ink paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-start justify-end overflow-hidden">
        <div className="watermark text-[16.1vw] leading-none rotate-[4deg] -mr-6 mt-16">VOWS</div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shirt className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                COVENANT FILE // MY LIFE, MY ALL
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                A COVENANT MADE BEFORE THE LORD
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Built by Ivan · A covenant to the Lord
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight relative">
              MY <span className="text-ink">COVENANT</span>
              <span
                className="absolute -top-4 -right-2 sm:top-2 sm:right-8 stamp stamp-drop-hard font-blackops text-xl sm:text-3xl !p-2 !rotate-[8deg] hidden sm:inline-flex"
                style={{ animationDelay: "0.4s" }}
              >
                BUILT BY IVAN
              </span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">THE COVENANT</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
            </p>
          </div>
        </motion.div>

        {/* FILE TAGS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl">
          {fileTags.map((t, i) => (
            <div key={t.label} className="paper-card-cream px-4 py-3 relative">
              <div className="font-courier text-[12px] tracking-widest text-ink-brown">
                TAG-{pad(i + 1, 3)} · {t.label}
              </div>
              <div className="font-blackops text-xl sm:text-2xl text-ink tracking-tight">{t.value}</div>
            </div>
          ))}
        </div>

        {/* SCENE VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 mb-20">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-hot
            data-spy-label="OPEN THE COVENANT"
            className="group block relative paper-card-cream p-3 sm:p-4 card-lift"
          >
            <Corners />
            <div className="tape tape-yellow w-16 h-4 -top-2 left-10 rotate-[-4deg] z-10" />
            <div className="flex items-center justify-between gap-3 border-b-2 border-dashed-ink pb-2 mb-3">
              <span className="font-blackops text-[13px] sm:text-sm tracking-[0.25em] text-ink truncate">
                SCENE {pad(active + 1, 3)} / {pad(exhibits.length, 3)} · {exhibit.title.toUpperCase()}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 font-blackops text-[12px] tracking-widest text-ink shrink-0">
                <span className="status-pulse" /> LIVE SITE
              </span>
            </div>
            <div
              className="relative overflow-hidden border-2 border-ink aspect-[2.09/1] bg-paper-gray spotlight-paper"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active}
                  src={exhibit.image}
                  alt={`My Covenant to the Lord — ${exhibit.title}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 w-full h-full object-cover object-top photocopy group-hover:scale-[1.02] transition-transform duration-500"
                />
              </AnimatePresence>
              <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
              <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-[hsl(var(--paper))]" />
              <div className="absolute top-3 right-6 stamp !text-[11px] !p-1.5 !rotate-[-6deg] bg-[hsl(var(--paper)/0.7)]">
                LIVE SITE
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-14 h-14 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-[hsl(var(--paper))]" />
                </div>
                <span className="font-blackops text-base text-[hsl(var(--paper))] tracking-widest uppercase">OPEN THE COVENANT</span>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">
                FIELD NOTE {pad(active + 1)}
              </div>
              <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-3">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${ex.title}`}
                  data-spy-label={`SCENE ${pad(i + 1, 3)}`}
                  className={`relative overflow-hidden border-2 border-ink bg-paper p-1 transition-all ${
                    i === active ? "ring-2 ring-[hsl(var(--ink-charcoal))] ring-offset-2 ring-offset-[hsl(var(--paper))]" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top photocopy" />
                  <span className="absolute top-0 left-0 bg-ink text-[hsl(var(--paper))] font-courier text-[11px] font-bold tracking-widest px-1.5">
                    {pad(i + 1, 3)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <ScrollReveal as="h3" effect="ink-bleed" className="font-blackops text-3xl sm:text-5xl text-ink uppercase leading-[1] tracking-tight">
            My life. My all. <span className="underline decoration-2 underline-offset-4">His Kingdom.</span>
          </ScrollReveal>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">THE DECLARATION</div>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* THE COVENANT */}
        <SubHeading icon={Layers} title="Inside the covenant" meta="Declaration → seal" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="paper-card-cream p-5 paper-grain relative card-lift h-full">
                <div className="tape tape-yellow w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />
                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-4">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">STAGE {s.n}</span>
                  <span className="font-blackops text-4xl text-[hsl(var(--ink-charcoal)/0.2)] leading-none">{s.n}</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-blackops text-xl sm:text-2xl text-ink uppercase tracking-tight leading-tight">{s.name}</h4>
                </div>
                <p className="font-courier text-[12px] tracking-widest text-ink-brown uppercase">{s.tagline}</p>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed mt-2">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE EIGHT VOWS */}
        <SubHeading icon={BookOpen} title="Eight vows, one Lord" meta="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                data-spy-label={`CARD ${pad(i + 1, 3)}`}
                className="paper-card-cream p-5 relative card-lift text-left min-h-[170px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-courier text-[12px] tracking-widest text-ink-brown border-b-2 border-dashed-ink pb-2 mb-3">
                      CARD-{pad(i + 1, 3)} · {isOpen ? t.word.toUpperCase() : t.say}
                    </div>
                    {isOpen ? (
                      <p className="font-typewriter text-base text-ink leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-tight leading-tight">{t.word}</div>
                        <div className="font-blackops text-[12px] tracking-widest text-ink mt-3">TURN THE CARD //</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="READ THE COVENANT"
            className="px-5 py-2.5 bg-ink text-[hsl(var(--paper))] border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-2"
          >
            READ THE COVENANT <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`${SITE_URL}#kingdom-expansion`}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="THE KINGDOM PILLARS"
            className="px-5 py-2.5 bg-paper text-ink border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-ink hover:text-[hsl(var(--paper))] transition-colors flex items-center justify-center gap-2"
          >
            THE KINGDOM PILLARS
          </a>
        </div>

        {/* DISCLAIMER */}
        <ScrollReveal effect="page-turn" className="paper-card-cream p-4 sm:p-5 relative max-w-4xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">NOTE</div>
          <p className="flex items-start gap-3 font-typewriter text-sm sm:text-base text-ink leading-relaxed mt-2">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-ink" />
            <span>
              Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
            </span>
          </p>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ COVENANT FILE OPEN</span>
          <span>MY LIFE · MY ALL · HIS KINGDOM</span>
          <span>END OF COVENANT FILE</span>
        </div>
      </div>
    </section>
  );
};

export default CovenantSection;
