import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Scale, Layers, BrainCircuit, ShieldCheck, BookOpen, Landmark, Sigma, Gauge } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgOverview from "@/assets/tumacay-group/tg-02-overview.jpg";
import tgMarkets from "@/assets/tumacay-group/tg-03-markets.jpg";
import tgApproach from "@/assets/tumacay-group/tg-04-approach.jpg";
import tgQuantified from "@/assets/tumacay-group/tg-05-quantified.jpg";
import tgRisk from "@/assets/tumacay-group/tg-06-risk.jpg";
import tgAccess from "@/assets/tumacay-group/tg-07-access.jpg";
import tgFaq from "@/assets/tumacay-group/tg-08-faq.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Exhibits captured from the live site. Like the site, nothing here claims a
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

const fileTags = [
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

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

const Corners = ({ tone = "ink", size = "w-4 h-4" }: { tone?: "ink" | "paper"; size?: string }) => {
  const b = tone === "ink" ? "border-ink" : "border-[hsl(var(--paper))]";
  return (
    <>
      <div className={`absolute -top-1 -left-1 ${size} border-l-2 border-t-2 ${b}`} />
      <div className={`absolute -top-1 -right-1 ${size} border-r-2 border-t-2 ${b}`} />
      <div className={`absolute -bottom-1 -left-1 ${size} border-l-2 border-b-2 ${b}`} />
      <div className={`absolute -bottom-1 -right-1 ${size} border-r-2 border-b-2 ${b}`} />
    </>
  );
};

const SubHeading = ({ icon: Icon, title, meta }: { icon: typeof Layers; title: string; meta: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-ink" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">{title}</h3>
    <span className="flex-1 h-px border-t border-dashed-ink" />
    <span className="font-courier text-[13px] text-ink-brown tracking-widest uppercase">{meta}</span>
  </div>
);

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="tumacay-group" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-y-2 border-double border-ink paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-start justify-end overflow-hidden">
        <div className="watermark text-[16.1vw] leading-none rotate-[4deg] -mr-6 mt-16">GOLD &amp; OIL</div>
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
              <Scale className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 07-B // GOLD &amp; OIL MACHINE LEARNING MODEL
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                RESEARCHED &amp; DEVELOPED BY SUBJECT
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Quantitative Trading · No Human Intervention
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
              TUMACAY <span className="text-ink">GROUP</span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">MODEL BRIEF</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              A <span className="font-bold underline">100% machine learning</span> model for higher-timeframe swing
              trading in gold and crude oil. Built on mathematics, statistics and probability, with macro and
              fundamental data. Every trade is decided by the model, with no human intervention.
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

        {/* EVIDENCE VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative paper-card-cream p-3 sm:p-4">
            <Corners />
            <div className="tape tape-yellow w-16 h-4 -top-2 left-10 rotate-[-4deg] z-10" />
            <div className="flex items-center justify-between gap-3 border-b-2 border-dashed-ink pb-2 mb-3">
              <span className="font-blackops text-[13px] sm:text-sm tracking-[0.25em] text-ink truncate">
                EXHIBIT {pad(active + 1, 3)} / {pad(exhibits.length, 3)} · {exhibit.title.toUpperCase()}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 font-blackops text-[12px] tracking-widest text-ink shrink-0">
                <span className="status-pulse" /> LIVE SITE
              </span>
            </div>
            <div className="relative overflow-hidden border-2 border-ink aspect-[2.09/1] bg-paper-gray">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active}
                  src={exhibit.image}
                  alt={`TUMACAY GROUP — ${exhibit.title}`}
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
                NO HUMAN INTERVENTION
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-14 h-14 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-[hsl(var(--paper))]" />
                </div>
                <span className="font-blackops text-base text-[hsl(var(--paper))] tracking-widest uppercase">OPEN TUMACAY GROUP</span>
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
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
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

        {/* HARD RULES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <blockquote className="font-blackops text-4xl sm:text-5xl text-ink uppercase leading-[0.95] tracking-tight">
            Hard assets. <span className="underline decoration-2 underline-offset-4">Hard data.</span> Hard rules.
          </blockquote>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">REAL ASSETS, QUANTIFIED</div>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">
              Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
              learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <SubHeading icon={Layers} title="A systematic trading process" meta="Signal → execution" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 paper-grain relative"
            >
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
              <p className="font-blackops text-[12px] tracking-widest text-ink uppercase">{s.tagline} //</p>
              <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed mt-1">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <SubHeading icon={BookOpen} title="Capital protection first" meta="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="paper-card-cream p-5 min-h-[180px] text-left relative transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                style={{ transform: `rotate(${(((i * 3) % 5) - 2) * 0.3}deg)` }}
              >
                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">TERM-{pad(i + 1, 3)}</span>
                  <span className="font-blackops text-[12px] tracking-widest text-ink uppercase">
                    {isOpen ? "Declassified" : "Classified"}
                  </span>
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
                      <p className="font-typewriter text-base text-ink leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-courier text-[13px] tracking-widest text-ink-brown">{t.say}</div>
                        <div className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-tight leading-tight mt-1">
                          {t.word}
                        </div>
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
            className="px-5 py-2.5 bg-ink text-[hsl(var(--paper))] border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-2"
          >
            ACCESS TUMACAY GROUP <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`${SITE_URL}#approach`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-paper text-ink border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-ink hover:text-[hsl(var(--paper))] transition-colors flex items-center justify-center gap-2"
          >
            HOW THE MODEL WORKS
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="paper-card-cream p-4 sm:p-5 relative max-w-4xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">LEGAL NOTICE</div>
          <p className="flex items-start gap-3 font-typewriter text-sm sm:text-base text-ink leading-relaxed mt-2">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-ink" />
            <span>
              Trading commodities, futures and derivatives carries substantial risk — you can lose some or all of your
              capital. TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a
              solicitation or investment advice. Ivan is not a licensed financial adviser.
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ MODEL FILE SEALED</span>
          <span>NO PERFORMANCE CLAIMS ON RECORD</span>
          <span>END OF SECTION 07-B</span>
        </div>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
