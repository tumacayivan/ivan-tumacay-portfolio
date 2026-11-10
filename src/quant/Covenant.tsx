import { useState } from "react";
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

const stages = [
  { n: "01", name: "Declaration", line: "Made freely before the Father, the Son and the Holy Spirit, returning every gift to Him as His steward." },
  { n: "02", name: "Articles", line: "From my life to the generations after me, each vow written out in full with the verse it rests on." },
  { n: "03", name: "Pillars", line: "Two pillars with five commitments each: advancing the Kingdom, and funding the work of the Kingdom." },
  { n: "04", name: "Seal", line: "A closing prayer, signed by Mac Neil Ivan Lucenesio Tumacay, covenant maker, Tumacay Group." },
];

const promises = [
  { word: "My life", meaning: "My days, my body, my time, my strength and my future belong to Him. (Galatians 2:20)" },
  { word: "Everything He gave me", meaning: "All I possess, I hold with an open hand, and give back whenever and however He asks. (Psalm 24:1)" },
  { word: "Knowledge, understanding & wisdom", meaning: "Every insight, skill, idea and strategy is His, used to build what He is building. (Proverbs 2:6)" },
  { word: "All I build", meaning: "Every business and every work of my hands is dedicated to the Lord: its purpose, its fruit and its increase. (Exodus 31:3)" },
  { word: "Kingdom expansion", meaning: "To win souls for Jesus Christ and make disciples of all nations. (Matthew 28:19)" },
  { word: "Financing His Kingdom", meaning: "Honour Him with the firstfruits, and direct the wealth He entrusts toward the work of His Kingdom. (Deuteronomy 8:18)" },
  { word: "Integrity in all things", meaning: "In my home, my business and every dealing: truth, honesty and a just weight. (Colossians 3:23)" },
  { word: "For the generations", meaning: "So that the Tumacay name and everything built under it serves the Lord for generations. (Psalm 145:4)" },
];

/**
 * My Covenant to the Lord — built by Ivan, shown as an aside inside an act: a scene
 * viewer, the four parts of the covenant, the eight vows and a source note. It
 * sits beside the story without changing it.
 */
const Covenant = ({ kicker = "Built by Ivan" }: { kicker?: string }) => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const scene = scenes[active];

  return (
    <div id="covenant" className="mt-20 scroll-mt-24">
      <div className="max-w-[44rem] mb-10" data-reveal>
        <div className="q-label flex items-center gap-3 mb-4">
          <span className="text-[var(--q-bull)]">{kicker}</span>
          <span className="h-px w-10 bg-[var(--q-line)]" />
          <span>A covenant to the Lord · Eight vows</span>
        </div>
        <h3 className="q-serif text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.95]">
          My <em className="italic text-[var(--q-amber)]">Covenant.</em>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-[var(--q-dim)]">
          The covenant of Mac Neil Ivan Lucenesio Tumacay to the Lord: his life, everything God gave him, and all knowledge, understanding and wisdom, given for Kingdom expansion and the financing of His Kingdom.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 mb-10" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block q-card p-2">
          <div className="flex items-center justify-between px-2 pb-2 q-label !text-[10px]">
            <span>
              Scene {String(active + 1).padStart(2, "0")} — {scene.title}
            </span>
            <span className="text-[var(--q-amber)] group-hover:translate-x-0.5 transition-transform">Open ↗</span>
          </div>
          <div className="q-shot aspect-[2.09/1]">
            <img key={active} src={scene.image} alt={`My Covenant to the Lord — ${scene.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </a>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--q-dim)] leading-relaxed">{scene.caption}</p>
          <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
            {scenes.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`Show scene ${i + 1}: ${s.title}`}
                className={`relative overflow-hidden border transition-all ${
                  i === active ? "border-[var(--q-amber)]" : "border-[var(--q-line)] opacity-55 hover:opacity-100"
                }`}
              >
                <img src={s.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                <span className="absolute top-0 left-0 q-mono text-[10px] px-1.5 bg-[var(--q-amber)] text-[var(--q-void)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="q-serif text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight max-w-[48rem] mb-10" data-reveal>
        My life. My all. <em className="italic text-[var(--q-amber)]">His Kingdom.</em>
      </blockquote>

      <div className="q-label mb-3">Inside the covenant · declaration → seal</div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8" data-stagger>
        {stages.map((s) => (
          <li key={s.n} className="bg-[rgba(3,6,10,0.9)] p-5">
            <div className="q-mono text-[11px] text-[var(--q-bull)]">PART {s.n}</div>
            <div className="q-serif text-2xl mt-2 leading-tight">{s.name}</div>
            <p className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{s.line}</p>
          </li>
        ))}
      </ol>

      <div className="q-label mb-3">Eight vows, one Lord · tap a card to turn it</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8">
        {promises.map((t) => {
          const isOpen = flipped === t.word;
          return (
            <button
              key={t.word}
              type="button"
              onClick={() => setFlipped(isOpen ? null : t.word)}
              aria-expanded={isOpen}
              className="bg-[rgba(3,6,10,0.9)] p-5 text-left min-h-[120px] hover:bg-[rgba(3,6,10,0.75)] transition-colors"
            >
              {isOpen ? (
                <>
                  <div className="q-mono text-[11px] text-[var(--q-bull)] uppercase">{t.word}</div>
                  <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{t.meaning}</p>
                </>
              ) : (
                <>
                  <div className="q-serif text-2xl leading-tight">{t.word}</div>
                  <div className="q-mono text-[10px] text-[var(--q-amber)] mt-3 uppercase">Turn the card →</div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 mb-6" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="q-btn">
          Read the covenant ↗
        </a>
        <a href={`${SITE_URL}#kingdom-expansion`} target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost">
          The Kingdom pillars
        </a>
      </div>
      <p className="q-card p-4 q-mono text-[10px] leading-relaxed text-[var(--q-dim)] max-w-3xl uppercase tracking-[0.1em]">
        Every vow, verse and illustration in this section comes from the live covenant site, shown as it appears there.
      </p>
    </div>
  );
};

export default Covenant;
