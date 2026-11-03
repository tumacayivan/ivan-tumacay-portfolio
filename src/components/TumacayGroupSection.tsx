import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Layers, BrainCircuit, ShieldCheck, Scale, BookOpen, Landmark, Sigma, Gauge } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgOverview from "@/assets/tumacay-group/tg-02-overview.jpg";
import tgMarkets from "@/assets/tumacay-group/tg-03-markets.jpg";
import tgApproach from "@/assets/tumacay-group/tg-04-approach.jpg";
import tgQuantified from "@/assets/tumacay-group/tg-05-quantified.jpg";
import tgRisk from "@/assets/tumacay-group/tg-06-risk.jpg";
import tgAccess from "@/assets/tumacay-group/tg-07-access.jpg";
import tgFaq from "@/assets/tumacay-group/tg-08-faq.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

/* Scenes captured from the live site. Like the site, nothing here claims a
   return or a win rate, and nothing is investment advice. */
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
  { label: "MARKETS", value: "GOLD & OIL" },
  { label: "HOLDING PERIOD", value: "DAYS–MONTHS" },
  { label: "MODEL", value: "100% ML" },
  { label: "CLIENT FUNDS", value: "NONE HELD" },
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

const underline = "font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4";

const SubHeading = ({ icon: Icon, title, note }: { icon: typeof Layers; title: string; note: string }) => (
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

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];
  const sceneNo = String(active + 1).padStart(2, "0");

  return (
    <section
      id="tumacay-group"
      className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] paper-grain"
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[17vw] leading-none rotate-[4deg] -mr-6 mt-16 whitespace-nowrap">
          GOLD &amp; OIL
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
              <Scale className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 08 // THE MODEL THAT TRADES GOLD &amp; OIL
            </div>
            <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] hidden sm:inline">
              100% MACHINE LEARNING · NO HUMAN INTERVENTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
                Machine Learning · Researched &amp; Developed by Ivan
              </p>
              <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
                TUMACAY <span className="accent">GROUP</span>
              </h2>
            </div>
            <div className="paper-card-cream p-5 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">THE MODEL</div>
              <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
                A <span className={underline}>100% machine learning</span> model for higher-timeframe swing trading in
                gold and crude oil. Built on mathematics, statistics and <span className={underline}>probability</span>,
                with macro and fundamental data. Every trade is decided by the model, with no human intervention.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Model tags */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-3xl">
          {modelTags.map((t) => (
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
                    alt={`TUMACAY GROUP — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[hsl(var(--paper-cream)/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="dossier-cta text-sm">
                    <ExternalLink className="w-4 h-4" /> OPEN TUMACAY GROUP
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
              Real Assets, Quantified
            </p>
            <h3 className="display-title text-3xl sm:text-5xl uppercase leading-[1.05]">
              HARD ASSETS. <span className="accent">HARD DATA.</span> HARD RULES.
            </h3>
          </div>
          <div className="paper-card-cream p-5">
            <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed">
              Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
              learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
            </p>
          </div>
        </div>

        {/* Our approach */}
        <SubHeading icon={Layers} title="A Systematic Trading Process" note="Signal → Execution" />
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
        <SubHeading icon={BookOpen} title="Capital Protection First" note="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
            <ExternalLink className="w-4 h-4" /> VISIT TUMACAY GROUP
          </a>
          <a href={`${SITE_URL}#approach`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
            HOW THE MODEL WORKS
          </a>
        </div>

        {/* Disclaimer */}
        <div className="paper-card-cream p-5 relative max-w-3xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">FINE PRINT</div>
          <p className="flex items-start gap-2 font-courier text-xs text-[hsl(var(--ink-brown))] leading-relaxed mt-1">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
            Trading commodities, futures and derivatives carries substantial risk — you can lose some or all of your
            capital. TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a
            solicitation or investment advice. Ivan is not a licensed financial adviser.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> THE MODEL TRADES</span>
          <span>NO HUMAN INTERVENTION · NO PERFORMANCE CLAIMS</span>
          <span>END OF SECTION 08</span>
        </div>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
