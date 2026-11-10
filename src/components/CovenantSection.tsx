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
const scenes = [
  { image: covHero, title: "My life, my all", caption: "A covenant made before the Lord: my life, my all, His Kingdom." },
  { image: covEmbrace, title: "The Lion", caption: "The man in the embrace of the Lion of the tribe of Judah, between Revelation 5:5 and Genesis 32:26." },
  { image: covDeclaration, title: "The declaration", caption: "Nothing I have is my own. My breath, my family, my work and every gift of mind and spirit came from His hand." },
  { image: covArticles, title: "The articles", caption: "Eight vows, one Lord. Each article is a part of life placed in His hands, and each rests on His Word." },
  { image: covVows, title: "The vows", caption: "Every article carries its numeral, its vow and the verse it stands on." },
  { image: covExpansion, title: "Kingdom expansion", caption: "Pillar one: winning souls and making disciples, through the Tumacay Group and among the nations." },
  { image: covFinancing, title: "Financing His Kingdom", caption: "Pillar two: the silver and the gold are His, and what He entrusts funds the work of His Kingdom." },
  { image: covSeal, title: "The seal", caption: "Here I am, Lord. Send me. The covenant closes with a prayer and a signature." },
];

const dossier = [
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
  const scene = scenes[active];

  return (
    <section id="covenant" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 operation-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Covenant file / Ivan Tumacay</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            My <span className="text-gradient-red">Covenant.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
          </p>
        </motion.div>

        <div className="mb-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {dossier.map((d) => (
            <div key={d.label} className="border border-border/70 bg-card/70 px-4 py-3">
              <p className="font-mono text-[11px] font-bold uppercase text-muted-foreground">{d.label}</p>
              <p className="mt-1 text-lg font-black uppercase text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        {/* PLANNING BOARD */}
        <div className="mb-20 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="evidence-frame glass-card glow-red p-3">
              <div className="flex items-center justify-between gap-3 border border-border/60 bg-background/60 px-4 py-2.5">
                <span className="truncate font-mono text-xs font-bold uppercase text-muted-foreground">
                  Scene {pad(active + 1)} — {scene.title}
                </span>
                <span className="hidden items-center gap-2 font-mono text-[11px] font-bold uppercase text-primary sm:flex">
                  <span className="h-1.5 w-1.5 bg-primary animate-pulse-gold" /> Live
                </span>
              </div>
              <div className="relative mt-3 aspect-[2.09/1] overflow-hidden border border-border/60 bg-black">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={scene.image}
                    alt={`My Covenant to the Lord — ${scene.title}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 film-lines opacity-25" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground">
                    <ExternalLink className="h-4 w-4" /> Open the covenant
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="border border-border/70 bg-card/70 p-4">
              <p className="font-mono text-xs font-bold text-primary">SCENE {pad(active + 1)}</p>
              <p className="mt-2 font-semibold leading-relaxed text-muted-foreground">{scene.caption}</p>
            </div>
            <div className="grid grid-cols-4 gap-2 xl:grid-cols-2">
              {scenes.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${s.title}`}
                  className={`relative overflow-hidden border transition-all ${
                    i === active ? "border-primary ring-1 ring-primary" : "border-border/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={s.image} alt="" loading="lazy" className="aspect-video w-full object-cover object-top" />
                  <span className="absolute left-0 top-0 bg-primary px-1.5 font-mono text-[10px] font-bold text-primary-foreground">
                    {pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* HARD RULES */}
        <div className="mb-20 grid grid-cols-1 items-center gap-8 border-y border-border/60 py-12 lg:grid-cols-[1.4fr_1fr]">
          <blockquote className="text-3xl font-black leading-tight sm:text-5xl">
            My life. My all. <span className="text-gradient-red">His Kingdom.</span>
          </blockquote>
          <div>
            <p className="case-label mb-4">
              <Sun className="h-3.5 w-3.5" /> The declaration
            </p>
            <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
              Nothing I have is my own. My breath, my family, my work, my possessions, my opportunities and every gift of mind and spirit came from His hand. I return them to Him as His steward.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">Inside the covenant</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">DECLARATION → SEAL</span>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex h-full flex-col border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">STAGE {s.n}</span>
              </div>
              <h4 className="text-xl font-black leading-tight text-foreground">{s.name}</h4>
              <p className="mt-1 font-mono text-xs font-bold uppercase text-accent">{s.tagline}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.article>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">Eight vows, one Lord</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">TAP A CARD TO TURN IT</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`min-h-[170px] border bg-card/70 p-5 text-left transition-colors hover:bg-surface-hover ${
                  isOpen ? "border-primary/60 glow-red" : "border-border/70"
                }`}
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
                        <p className="font-mono text-xs font-bold uppercase text-primary">{t.word}</p>
                        <p className="mt-2 font-semibold leading-relaxed text-foreground">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">{t.say}</p>
                        <p className="mt-2 text-3xl font-black leading-tight text-foreground">{t.word}</p>
                        <p className="mt-4 font-mono text-xs font-bold uppercase text-primary">Turn the card →</p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ExternalLink className="h-5 w-5" /> Read the covenant
          </a>
          <a
            href={`${SITE_URL}#kingdom-expansion`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            The Kingdom pillars
          </a>
        </div>

        <p className="flex max-w-3xl items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
        </p>
      </div>
    </section>
  );
};

export default CovenantSection;
