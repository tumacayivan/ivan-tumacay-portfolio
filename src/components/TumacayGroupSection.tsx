import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, BrainCircuit, Scale, ShieldCheck, Landmark, Sigma, Gauge } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgOverview from "@/assets/tumacay-group/tg-02-overview.jpg";
import tgMarkets from "@/assets/tumacay-group/tg-03-markets.jpg";
import tgApproach from "@/assets/tumacay-group/tg-04-approach.jpg";
import tgQuantified from "@/assets/tumacay-group/tg-05-quantified.jpg";
import tgRisk from "@/assets/tumacay-group/tg-06-risk.jpg";
import tgAccess from "@/assets/tumacay-group/tg-07-access.jpg";
import tgFaq from "@/assets/tumacay-group/tg-08-faq.jpg";
import SectionHeading from "./reaction/SectionHeading";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Plates captured from the live site. Like the site, nothing here claims a
// return or a win rate, and nothing is investment advice.
const exhibits = [
  { image: tgHero, title: "Gold & oil", caption: "TUMACAY GROUP — trade gold and oil with machine precision. A 100% machine learning model, no human intervention." },
  { image: tgOverview, title: "At a glance", caption: "Two focused markets, holding periods of days to months, and every trade decided by the model." },
  { image: tgMarkets, title: "Our markets", caption: "Gold (XAU · GC) and crude oil (WTI · Brent) only, so every strategy and risk limit is built for how they behave." },
  { image: tgApproach, title: "Our approach", caption: "Macro and fundamentals, statistics and probability, machine learning, then risk and execution." },
  { image: tgQuantified, title: "Real assets, quantified", caption: "Hard assets. Hard data. Hard rules. Gold bars, oil barrels and rising charts rendered in 3D." },
  { image: tgRisk, title: "Risk management", caption: "Capital protection comes first: selective, tested out of sample, liquid markets only, no human in the trade." },
  { image: tgAccess, title: "Get access", caption: "Request access to the model by email, then an introductory call, account setup and the model's signals." },
  { image: tgFaq, title: "FAQ", caption: "Why only gold and oil, who makes the decisions, how long positions are held, and why it never manages your money." },
];

const modelTags = [
  { label: "Markets", value: "Gold & Oil" },
  { label: "Holding period", value: "Days–months" },
  { label: "Model", value: "100% ML" },
  { label: "Client funds", value: "None held" },
];

const stages = [
  { n: "01", icon: Landmark, name: "Macro & Fundamentals", tagline: "What really moves the market", body: "Interest rates, the dollar, inflation, growth, and the supply and demand of gold and oil." },
  { n: "02", icon: Sigma, name: "Statistics & Probability", tagline: "Only when the odds favour it", body: "Every idea is tested with mathematics and statistics. No edge, no trade." },
  { n: "03", icon: BrainCircuit, name: "Machine Learning", tagline: "The model decides", body: "Learns from macro, fundamental and market data, and makes every trading decision itself." },
  { n: "04", icon: Gauge, name: "Risk & Execution", tagline: "No hand on it", body: "Sized and managed automatically, held for days, weeks or months, with no human intervention." },
];

const terms = [
  { word: "Selective", say: "by design", meaning: "The model only trades when the signal is clear. When there is no edge, it stays out." },
  { word: "Tested", say: "rigorously", meaning: "Strategies are tested on data they have never seen before they go anywhere near live capital." },
  { word: "Hands-off", say: "no human intervention", meaning: "Every decision comes from the model, so fear and greed never enter the trade." },
  { word: "Liquid", say: "markets only", meaning: "Gold and crude oil are among the deepest markets in the world, so positions can be adjusted quickly." },
  { word: "Preserve", say: "capital first", meaning: "Protecting the downside comes before chasing the upside." },
  { word: "Report", say: "transparently", meaning: "Clear, regular reporting on performance, drawdown and every trade." },
];

const plate = (i: number) => String.fromCharCode(65 + i);

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="tumacay-group"
      data-scene="The model"
      data-code="Part II · 03B"
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
          code="Doc · 03B"
          kicker="Gold & oil · researched & developed by Ivan"
          title="Tumacay"
          accent="Group"
        >
          A 100% machine learning model for higher-timeframe swing trading in gold and crude oil. Built on mathematics,
          statistics and probability, with macro and fundamental data. Every trade is decided by the model, with no
          human intervention.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-10 max-w-3xl">
          {modelTags.map((t) => (
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
                    alt={`TUMACAY GROUP — ${exhibit.title}`}
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
                      <ExternalLink className="w-4 h-4" /> Open Tumacay Group
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

        {/* HARD RULES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y border-line/15 py-12">
          <blockquote className="display text-3xl sm:text-5xl text-ink">
            Hard assets. <span className="ignited">Hard data.</span> Hard rules.
          </blockquote>
          <div>
            <div className="slug mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4" /> Real assets, quantified
            </div>
            <p className="text-ink-dim text-lg leading-relaxed">
              Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
              learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">A systematic trading process</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">Signal → execution</span>
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

        {/* RISK MANAGEMENT */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">Capital protection first</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line/15 border border-line/15 mb-14">
          {terms.map((t) => {
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
              <ExternalLink className="w-4 h-4" /> Visit Tumacay Group
            </span>
          </a>
          <a href={`${SITE_URL}#approach`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>How the model works</span>
          </a>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-dim leading-relaxed max-w-3xl">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-ember" />
          <span>
            <span className="slug !text-[10px] mr-2">Note for the record</span>
            Trading commodities, futures and derivatives carries substantial risk — you can lose some or all of your
            capital. TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a
            solicitation or investment advice. Ivan is not a licensed financial adviser.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
