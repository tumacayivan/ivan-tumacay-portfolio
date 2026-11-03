import { useState } from "react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgOverview from "@/assets/tumacay-group/tg-02-overview.jpg";
import tgMarkets from "@/assets/tumacay-group/tg-03-markets.jpg";
import tgApproach from "@/assets/tumacay-group/tg-04-approach.jpg";
import tgQuantified from "@/assets/tumacay-group/tg-05-quantified.jpg";
import tgRisk from "@/assets/tumacay-group/tg-06-risk.jpg";
import tgAccess from "@/assets/tumacay-group/tg-07-access.jpg";
import tgFaq from "@/assets/tumacay-group/tg-08-faq.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Scenes captured from the live site. Like the site, nothing here claims a
// return or a win rate, and nothing is investment advice.
const scenes = [
  { image: tgHero, title: "Gold & oil", caption: "TUMACAY GROUP — trade gold and oil with machine precision. A 100% machine learning model, no human intervention." },
  { image: tgOverview, title: "At a glance", caption: "Two focused markets, holding periods of days to months, and every trade decided by the model." },
  { image: tgMarkets, title: "Our markets", caption: "Gold (XAU · GC) and crude oil (WTI · Brent) only, so every strategy and risk limit is built for how they behave." },
  { image: tgApproach, title: "Our approach", caption: "Macro and fundamentals, statistics and probability, machine learning, then risk and execution." },
  { image: tgQuantified, title: "Real assets, quantified", caption: "Hard assets. Hard data. Hard rules. Gold bars, oil barrels and rising charts rendered in 3D." },
  { image: tgRisk, title: "Risk management", caption: "Capital protection comes first: selective, tested out of sample, liquid markets only, no human in the trade." },
  { image: tgAccess, title: "Get access", caption: "Request access to the model by email, then an introductory call, account setup and the model's signals." },
  { image: tgFaq, title: "FAQ", caption: "Why only gold and oil, who makes the decisions, how long positions are held, and why it never manages your money." },
];

const stages = [
  { n: "01", name: "Macro & Fundamentals", line: "Interest rates, the dollar, inflation, growth, and the supply and demand of gold and oil." },
  { n: "02", name: "Statistics & Probability", line: "Every idea is tested with mathematics and statistics. No edge, no trade." },
  { n: "03", name: "Machine Learning", line: "Learns from macro, fundamental and market data, and makes every trading decision itself." },
  { n: "04", name: "Risk & Execution", line: "Sized and managed automatically, held for days, weeks or months, with no human intervention." },
];

const terms = [
  { word: "Selective", meaning: "The model only trades when the signal is clear. When there is no edge, it stays out." },
  { word: "Tested", meaning: "Strategies are tested on data they have never seen before they go anywhere near live capital." },
  { word: "Hands-off", meaning: "Every decision comes from the model, so fear and greed never enter the trade." },
  { word: "Liquid", meaning: "Gold and crude oil are among the deepest markets in the world, so positions can be adjusted quickly." },
  { word: "Preserve", meaning: "Protecting the downside comes before chasing the upside." },
  { word: "Report", meaning: "Clear, regular reporting on performance, drawdown and every trade." },
];

/**
 * TUMACAY GROUP — the gold and oil machine learning swing-trading model, as a
 * block inside an act: a scene viewer, the four-step approach, risk cards and
 * the disclaimer.
 */
const TumacayGroup = ({ kicker = "The model" }: { kicker?: string }) => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const scene = scenes[active];

  return (
    <div id="tumacay-group" className="mt-20 scroll-mt-24">
      <div className="max-w-[44rem] mb-10" data-reveal>
        <div className="q-label flex items-center gap-3 mb-4">
          <span className="text-[var(--q-bull)]">{kicker}</span>
          <span className="h-px w-10 bg-[var(--q-line)]" />
          <span>Gold & oil · 100% ML · no human intervention</span>
        </div>
        <h3 className="q-serif text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.95]">
          Tumacay <em className="italic text-[var(--q-amber)]">Group.</em>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-[var(--q-dim)]">
          A 100% machine learning model for higher-timeframe swing trading in gold and crude oil. Built on mathematics,
          statistics and probability, with macro and fundamental data. Every trade is decided by the model, with no
          human intervention.
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
            <img key={active} src={scene.image} alt={`TUMACAY GROUP — ${scene.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
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
        Hard assets. <em className="italic text-[var(--q-amber)]">Hard data.</em> Hard rules.
      </blockquote>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8" data-stagger>
        {stages.map((s) => (
          <li key={s.n} className="bg-[rgba(3,6,10,0.9)] p-5">
            <div className="q-mono text-[11px] text-[var(--q-bull)]">STAGE {s.n}</div>
            <div className="q-serif text-2xl mt-2 leading-tight">{s.name}</div>
            <p className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{s.line}</p>
          </li>
        ))}
      </ol>

      <div className="q-label mb-3">Capital protection first · tap a card to turn it</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--q-line)] mb-8">
        {terms.map((t) => {
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
          Visit Tumacay Group ↗
        </a>
        <a href={`${SITE_URL}#approach`} target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost">
          How the model works
        </a>
      </div>
      <p className="q-card p-4 q-mono text-[10px] leading-relaxed text-[var(--q-dim)] max-w-3xl uppercase tracking-[0.1em]">
        Trading commodities, futures and derivatives carries substantial risk — you can lose some or all of your capital.
        TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a solicitation or
        investment advice. Ivan is not a licensed financial adviser.
      </p>
    </div>
  );
};

export default TumacayGroup;
