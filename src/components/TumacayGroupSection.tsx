import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, BrainCircuit, ShieldCheck, Scale, Layers, Landmark, Sigma, Gauge } from "lucide-react";
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
const exhibits = [
  { image: tgHero, title: "Gold & Oil", caption: "TUMACAY GROUP — trade gold and oil with machine precision. A 100% machine learning model, no human intervention." },
  { image: tgOverview, title: "At A Glance", caption: "Two focused markets, holding periods of days to months, and every trade decided by the model." },
  { image: tgMarkets, title: "Our Markets", caption: "Gold (XAU · GC) and crude oil (WTI · Brent) only, so every strategy and risk limit is built for how they behave." },
  { image: tgApproach, title: "Our Approach", caption: "Macro and fundamentals, statistics and probability, machine learning, then risk and execution." },
  { image: tgQuantified, title: "Real Assets, Quantified", caption: "Hard assets. Hard data. Hard rules. Gold bars, oil barrels and rising charts rendered in 3D." },
  { image: tgRisk, title: "Risk Management", caption: "Capital protection comes first: selective, tested out of sample, liquid markets only, no human in the trade." },
  { image: tgAccess, title: "Get Access", caption: "Request access to the model by email, then an introductory call, account setup and the model's signals." },
  { image: tgFaq, title: "FAQ", caption: "Why only gold and oil, who makes the decisions, how long positions are held, and why it never manages your money." },
];

const letterOf = (i: number) => String.fromCharCode(65 + i);

const fileMarkings = [
  { label: "Classification", value: "MODEL FILE" },
  { label: "Markets", value: "GOLD & OIL" },
  { label: "Holding Period", value: "DAYS–MONTHS" },
  { label: "Model", value: "100% ML" },
  { label: "Client Funds", value: "NONE HELD" },
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

const SubHeading = ({ title, note }: { title: string; note: string }) => (
  <div className="flex items-center gap-3 sm:gap-5 mb-6">
    <div className="diag-stripes-red h-2 w-12 sm:w-20" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] tracking-[0.06em] leading-none uppercase">
      {title}
    </h3>
    <div className="flex-1 border-t border-[hsl(var(--accent-red)/0.4)]" />
    <span className="hidden md:inline font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">{note}</span>
  </div>
);

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="tumacay-group"
      className="dark relative overflow-hidden bg-[hsl(var(--paper))] text-[hsl(var(--ink-charcoal))]"
      style={{ backgroundImage: "var(--noise-body), var(--body-gradient)" }}
    >
      <div className="diag-stripes h-1.5" />

      <div className="relative py-16 sm:py-24 paper-grain">
        <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,var(--wash-red)_0%,transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-start overflow-hidden">
          <div className="watermark text-[15vw] leading-none rotate-[-6deg] -ml-10">GOLD &amp; OIL</div>
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 2.2, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="hidden lg:flex !absolute right-0 top-2 stamp !text-4xl !px-6 !py-3 z-10"
            >
              NO HUMAN INTERVENTION
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="section-eyebrow">
                <Scale className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                MODEL FILE // MACHINE LEARNING
              </div>
              <span className="inline-flex items-center gap-1.5 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[12px] tracking-[0.3em] px-2.5 py-1 glow-red">
                <BrainCircuit className="w-3 h-3" /> 100% ML
              </span>
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              Researched and developed by Ivan Tumacay
            </p>
            <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
              TUMACAY <span className="accent">GROUP</span>
            </h2>

            {/* File markings */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[hsl(var(--accent-red)/0.6)] max-w-5xl">
              {fileMarkings.map((m) => (
                <div
                  key={m.label}
                  className="px-3 py-2 border-b border-r border-[hsl(var(--accent-red)/0.3)] bg-[hsl(var(--surface-1)/0.8)]"
                >
                  <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">{m.label}</div>
                  <div className="font-blackops text-lg tracking-[0.14em] text-[hsl(var(--accent-red))] leading-tight">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 paper-card-cream p-5 max-w-3xl relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper))]">
                BRIEFING
              </div>
              <p className="font-typewriter text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-1">
                A 100% machine learning model for higher-timeframe swing trading in gold and crude oil. Built on
                mathematics, statistics and probability, with macro and fundamental data. Every trade is decided by the
                model, with no human intervention.
              </p>
            </div>
          </motion.div>

          {/* EXHIBITS */}
          <div className="flex flex-col gap-10 mb-16">
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
              <div className="tape w-20 h-5 -top-2.5 left-10 rotate-[-4deg] z-20" />
              <div className="tape tape-clear w-14 h-4 -top-2 right-14 rotate-[5deg] z-20" />

              <div className="relative bg-[hsl(0_0%_4%)] border-2 border-[hsl(var(--accent-red))] glow-red transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[hsl(var(--accent-red)/0.5)] bg-[hsl(0_0%_7%)]">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(358_79%_51%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(42_95%_52%)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_70%_45%)]" />
                  </div>
                  <span className="font-courier text-[11px] tracking-[0.2em] text-[hsl(40_12%_70%)] truncate uppercase">
                    EXHIBIT {letterOf(active)} // {exhibit.title}
                  </span>
                  <span className="hidden sm:flex items-center font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] shrink-0">
                    <span className="status-pulse" /> LIVE
                  </span>
                </div>

                <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(0_0%_3%)]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.img
                      key={active}
                      src={exhibit.image}
                      alt={`TUMACAY GROUP — ${exhibit.title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                    />
                  </AnimatePresence>
                  <div className="scan-bar" />

                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

                  <div className="absolute inset-0 bg-[hsl(0_0%_3%/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                    <div className="w-16 h-16 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.18)] glow-red">
                      <ExternalLink className="w-6 h-6 text-[hsl(var(--accent-red))]" />
                    </div>
                    <span className="font-blackops text-base text-[hsl(40_22%_94%)] tracking-[0.28em] uppercase">
                      Open Tumacay Group
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Exhibit index */}
            <div className="-mt-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">
                  <span className="font-blackops tracking-[0.3em] text-[hsl(var(--accent-red))]">EXHIBIT {letterOf(active)} //</span>{" "}
                  {exhibit.caption}
                </p>
                <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                  {active + 1} of {exhibits.length} exhibits
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
                {exhibits.map((ex, i) => (
                  <button
                    key={ex.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    aria-label={`Show exhibit ${letterOf(i)}: ${ex.title}`}
                    className={`group/thumb relative text-left border-2 transition-colors ${
                      i === active
                        ? "border-[hsl(var(--accent-red))] glow-red"
                        : "border-[hsl(var(--line)/0.15)] hover:border-[hsl(var(--accent-red)/0.6)]"
                    }`}
                  >
                    <img
                      src={ex.image}
                      alt=""
                      loading="lazy"
                      className={`w-full aspect-[16/9] object-cover object-top transition ${
                        i === active ? "" : "opacity-60 grayscale group-hover/thumb:opacity-100 group-hover/thumb:grayscale-0"
                      }`}
                    />
                    <span className="absolute top-0 left-0 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[11px] tracking-[0.2em] px-1.5">
                      {letterOf(i)}
                    </span>
                    <span className="block px-1.5 py-1 font-courier text-[10px] tracking-[0.12em] uppercase truncate text-[hsl(var(--ink-brown))] bg-[hsl(var(--surface-1))]">
                      {ex.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* HARD RULES */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-16">
            <div>
              <div className="section-eyebrow mb-3">
                <Layers className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                REAL ASSETS, QUANTIFIED
              </div>
              <h3 className="font-blackops text-3xl sm:text-5xl uppercase text-[hsl(var(--accent-bone))] tracking-[0.04em] leading-[1.05]">
                Hard assets. <span className="text-[hsl(var(--accent-red))]">Hard data.</span> Hard rules.
              </h3>
            </div>
            <div className="paper-card-cream p-5 paper-grain relative">
              <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed">
                Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
                learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
              </p>
            </div>
          </div>

          {/* OUR APPROACH */}
          <SubHeading title="A Systematic Trading Process" note="Signal → execution" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="paper-card-cream p-5 paper-grain relative group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">STAGE {s.n}</span>
                  <div className="p-1.5 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(var(--on-red))] transition-colors">
                    <s.icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-blackops text-lg text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-tight mb-1 group-hover:text-[hsl(var(--accent-red))] transition-colors">
                  {s.name}
                </h4>
                <div className="font-courier text-[10px] tracking-[0.28em] text-[hsl(var(--ink-brown))] uppercase mb-2">{s.tagline}</div>
                <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* RISK MANAGEMENT */}
          <SubHeading title="Capital Protection First" note="Tap a card to turn it" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {terms.map((t, i) => {
              const isOpen = flipped === t.word;
              return (
                <button
                  key={t.word}
                  type="button"
                  onClick={() => setFlipped(isOpen ? null : t.word)}
                  aria-expanded={isOpen}
                  className="paper-card-cream p-5 paper-grain relative text-left min-h-[170px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                      TERM {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-courier text-[10px] tracking-[0.2em] text-[hsl(var(--ink-brown))]">{t.say}</span>
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
                        <p className="font-courier text-[13px] text-[hsl(var(--accent-bone))] leading-relaxed">{t.meaning}</p>
                      ) : (
                        <>
                          <div className="font-blackops text-3xl uppercase tracking-[0.04em] text-[hsl(var(--accent-bone))] leading-tight">
                            {t.word}
                          </div>
                          <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mt-3">
                            Turn the card →
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* CTA + DISCLAIMER */}
          <div className="paper-card-cream p-5 sm:p-6 paper-grain relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <p className="flex items-start gap-2 font-courier text-[12px] text-[hsl(var(--ink-brown))] leading-relaxed max-w-3xl">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
                <span>
                  <span className="font-blackops tracking-[0.2em] text-[hsl(var(--accent-red))]">NOTICE ·</span> Trading
                  commodities, futures and derivatives carries substantial risk — you can lose some or all of your
                  capital. TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a
                  solicitation or investment advice. Ivan is not a licensed financial adviser.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm flex-1">
                  <ExternalLink className="w-4 h-4" />
                  <span>VISIT TUMACAY GROUP</span>
                </a>
                <a href={`${SITE_URL}#approach`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
                  <span>HOW THE MODEL WORKS</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
            <span><span className="text-[hsl(var(--accent-red))]">◉</span> END OF MODEL FILE</span>
            <span>NO PERFORMANCE CLAIMS · NO HUMAN INTERVENTION</span>
            <span>FILE · TUMACAY GROUP</span>
          </div>
        </div>
      </div>

      <div className="diag-stripes h-1.5" />
    </section>
  );
};

export default TumacayGroupSection;
