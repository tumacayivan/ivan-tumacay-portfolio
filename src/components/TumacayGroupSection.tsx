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
import SectionHeading from "./transit/SectionHeading";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Frames captured from the live site. Like the site, nothing here claims a
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

const ease = [0.16, 1, 0.3, 1] as const;
const frameLetter = (i: number) => String.fromCharCode(65 + i);

/**
 * MODEL DECK — the academy deck's autonomous neighbour.
 *
 * Where the academy teaches people to trade, this deck logs a model that
 * trades gold and oil with no one at the controls: received frames from the
 * live site, the hard-rules principle, the four-step approach, and the risk cards.
 */
const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="tumacay-group"
      data-scene="Model deck"
      data-coord="Stage 03C · Autonomous channel"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 85% 0%, hsl(var(--gold) / calc(0.09 * var(--glow))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          stage="03C"
          kicker="Gold & oil · researched & developed by Ivan"
          title="Tumacay"
          accent="Group"
        >
          A 100% machine learning model for higher-timeframe swing trading in gold and crude oil. Built on mathematics,
          statistics and probability, with macro and fundamental data. Every trade is decided by the model, with no
          human intervention.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-12 max-w-3xl">
          {modelTags.map((t) => (
            <div key={t.label} className="bg-deep px-4 py-4">
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.label}</div>
              <div className="font-tele text-base font-medium uppercase text-ice mt-1.5">{t.value}</div>
            </div>
          ))}
        </div>

        {/* FRAME VIEWPORT */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="panel overflow-hidden shadow-[0_50px_110px_-60px_hsl(var(--shade))]">
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-rule/10 bg-deep-2">
                <span className="flex gap-2 shrink-0" aria-hidden>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rule/25" />
                </span>
                <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim truncate">
                  Frame {frameLetter(active)} — {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-2 font-tele text-xs tracking-[0.24em] text-gold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon" aria-hidden /> Live
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--void))]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`TUMACAY GROUP — ${exhibit.title}`}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.9, ease }}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-transit group-hover:scale-[1.02]"
                  />
                </AnimatePresence>
                <div aria-hidden className="absolute inset-0 noise opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-[hsl(var(--void)/0.82)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="btn-primary">
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" aria-hidden /> Open Tumacay Group
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            <p className="text-ice-dim leading-relaxed">
              <span className="tele-label block mb-2">Frame {frameLetter(active)}</span>
              {exhibit.caption}
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show frame ${frameLetter(i)}: ${ex.title}`}
                  className={`relative overflow-hidden border transition-all duration-500 ${
                    i === active ? "border-gold" : "border-rule/10 opacity-55 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-gold text-on-gold font-tele text-xs font-semibold px-1.5">
                    {frameLetter(i)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* HARD RULES */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center mb-20 border-y border-rule/10 py-12">
          <blockquote className="plate text-3xl sm:text-5xl text-ice leading-tight">
            Hard assets. <span className="lit">Hard data.</span> Hard rules.
          </blockquote>
          <div>
            <div className="tele-label mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4" aria-hidden /> Real assets, quantified
            </div>
            <p className="text-ice-dim text-lg leading-relaxed">
              Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
              learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">A systematic trading process</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Signal → execution</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.09, ease }}
              className="panel panel-hover beam p-6 group"
            >
              <div className="flex items-center justify-between mb-6">
                <s.icon className="w-5 h-5 text-signal group-hover:text-gold transition-colors duration-500" aria-hidden />
                <span aria-hidden className="font-tele text-sm tracking-[0.2em] text-gold">
                  S{s.n}
                </span>
              </div>
              <h4 className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mb-1.5">{s.name}</h4>
              <div className="tele-label mb-3">{s.tagline}</div>
              <p className="text-ice-dim leading-relaxed text-[0.95rem]">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">Capital protection first</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/10 border border-rule/10 mb-14">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-deep p-6 sm:p-7 text-left min-h-[180px] hover:bg-deep-2 transition-colors duration-500"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {isOpen ? (
                      <>
                        <div className="tele-label">{t.word}</div>
                        <p className="text-ice leading-relaxed mt-3">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.say}</div>
                        <div className="plate text-3xl sm:text-4xl text-ice leading-tight mt-3">{t.word}</div>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-gold mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" aria-hidden /> Visit Tumacay Group
            </span>
          </a>
          <a href={`${SITE_URL}#approach`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>How the model works</span>
          </a>
        </div>

        <p className="flex items-start gap-2.5 text-sm text-ice-dim leading-relaxed max-w-3xl">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-signal" aria-hidden />
          <span>
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
