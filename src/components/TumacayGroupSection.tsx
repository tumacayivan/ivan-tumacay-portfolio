import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ExternalLink, Scale, ShieldCheck, Landmark, Sigma, Gauge } from "lucide-react";
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

const dossier = [
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

const pad = (n: number) => String(n).padStart(2, "0");

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const scene = scenes[active];

  return (
    <section id="tumacay-group" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 operation-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Operation / Tumacay Group</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Tumacay <span className="text-gradient-red">Group.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            A 100% machine learning model for higher-timeframe swing trading in gold and crude oil. Built on
            mathematics, statistics and probability, with macro and fundamental data. Every trade is decided by the
            model, with no human intervention.
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
                    alt={`TUMACAY GROUP — ${scene.title}`}
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
                    <ExternalLink className="h-4 w-4" /> Open Tumacay Group
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
            Hard assets. <span className="text-gradient-red">Hard data.</span> Hard rules.
          </blockquote>
          <div>
            <p className="case-label mb-4">
              <Scale className="h-3.5 w-3.5" /> Real assets, quantified
            </p>
            <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
              Gold and oil have shaped markets for a century. The model brings mathematics, statistics, machine
              learning, and macro and fundamental analysis to both, and holds swing trades for days, weeks or months.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">A systematic trading process</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">SIGNAL → EXECUTION</span>
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
          <h3 className="text-3xl font-black sm:text-4xl">Capital protection first</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">TAP A CARD TO TURN IT</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <ExternalLink className="h-5 w-5" /> Visit Tumacay Group
          </a>
          <a
            href={`${SITE_URL}#approach`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            How the model works
          </a>
        </div>

        <p className="flex max-w-3xl items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Trading commodities, futures and derivatives carries substantial risk — you can lose some or all of your
          capital. TUMACAY GROUP does not accept, hold or manage client funds, and nothing here is an offer, a
          solicitation or investment advice. Ivan is not a licensed financial adviser.
        </p>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
