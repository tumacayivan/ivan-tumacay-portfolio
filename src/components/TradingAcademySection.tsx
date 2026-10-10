import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ExternalLink, Hand, Layers, Server, ShieldCheck, SlidersHorizontal } from "lucide-react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

// Scenes captured from the live site. Like the site itself, nothing here
// claims a return, a win rate or an income: it is an education programme.
const scenes = [
  { image: itaColdOpen, title: "Cold open", caption: "Ivan Tumacay Group Trading — quantitative trading education built on data, maths and statistics." },
  { image: itaInvoice, title: "The invoice", caption: "₱134,000 paid to the market across every strategy he tried and automated. He calls it tuition." },
  { image: itaShift, title: "The shift", caption: "December 2025: the hunt for the perfect setup ends and the systems work begins." },
  { image: itaModel, title: "How a model learns", caption: "Guess, measure the error, adjust a little — a generic example of how machine learning trains." },
  { image: itaNumbers, title: "The numbers", caption: "Expectancy over win rate. If an idea can't be measured, it isn't an idea yet." },
  { image: itaLevels, title: "The ladder", caption: "Four levels, from manual to quantitative — pick where you actually stand today." },
  { image: itaDawn, title: "Dawn", caption: "06:02 in Cavite. The system kept running. Same room, different trader." },
];

const dossier = [
  { label: "Codename", value: "ITG-Q" },
  { label: "Status", value: "Live" },
  { label: "Format", value: "4 levels" },
  { label: "Income promises", value: "Zero" },
];

const receipt = [
  { when: "January 2025", title: "The start", body: "Introduced to the market by a friend and a mentor with twelve years of trading." },
  { when: "First week", title: "The hour", body: "A scalp that multiplied in about an hour — won without understanding anything." },
  { when: "Two weeks later", title: "Gone", body: "All of it. Back to the beginning." },
  { when: "Through 2025", title: "The search", body: "Price action, ICT, SMC, EMAs, RSI, Bollinger — every one automated with MQL bots on a VPS." },
  { when: "The invoice", title: "₱134,000", body: "The total paid to the market. The price of a lesson no course could sell." },
  { when: "December 2025", title: "The shift", body: "Back to what he's good at: building systems. Data, statistics and process." },
];

const levels = [
  { n: "01", icon: Hand, name: "Manual", tagline: "How price actually moves, and how not to get burned.", out: "A risk plan and written, testable rules." },
  { n: "02", icon: SlidersHorizontal, name: "Semi-automated", tagline: "Charting and indicators that help you read — and building your own.", out: "Alerts that call you, and a backtest you can defend." },
  { n: "03", icon: Server, name: "Fully automated", tagline: "A system that runs itself on a server while you sleep.", out: "A coded, deployed and monitored system." },
  { n: "04", icon: BrainCircuit, name: "Quantitative", tagline: "Machine learning models. A conversation before any of it.", out: "Your own research process — by application only." },
];

const sss = [
  { word: "System", body: "Rules you can write down and repeat." },
  { word: "Structure", body: "Every rule has its place, and its reason." },
  { word: "Sequence", body: "Foundations first. Nothing skipped." },
];

const pad = (n: number) => String(n).padStart(2, "0");

const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <section id="trading-academy" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 operation-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Operation / Trading Academy</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Ivan Tumacay Group <span className="text-gradient-red">Trading.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            Quantitative trading education built on data, mathematics and statistics — from complete beginner to a
            system you built yourself. No holy grail. No income promises. Just a plan you can repeat.
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
                    alt={`Ivan Tumacay Group Trading — ${scene.title}`}
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
                    <ExternalLink className="h-4 w-4" /> Open the academy
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

        {/* THE RECEIPT */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">The receipt</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">2025 · IN ORDER</span>
        </div>
        <ol className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {receipt.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className={`border bg-card/70 p-5 ${r.title.startsWith("₱") ? "border-primary/60 glow-red" : "border-border/70"}`}
            >
              <p className="font-mono text-xs font-bold uppercase text-primary">{r.when}</p>
              <p className={`mt-2 text-2xl font-black leading-tight sm:text-3xl ${r.title.startsWith("₱") ? "text-primary" : "text-foreground"}`}>
                {r.title}
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">{r.body}</p>
            </motion.li>
          ))}
        </ol>

        {/* THE PHASES */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">Four levels. One plan.</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">MANUAL → QUANT</span>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex h-full flex-col border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <l.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">PHASE {l.n}</span>
              </div>
              <h4 className="text-xl font-black leading-tight text-foreground">{l.name}</h4>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">{l.tagline}</p>
              <p className="mt-auto border-t border-border/60 pt-4 text-sm font-semibold text-secondary-foreground">
                <span className="mb-1 block font-mono text-xs font-bold text-accent">YOU WALK OUT WITH</span>
                {l.out}
              </p>
            </motion.article>
          ))}
        </div>

        {/* SSS */}
        <div className="mb-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="case-label mb-4">
              <Layers className="h-3.5 w-3.5" /> The philosophy
            </p>
            <h3 className="text-4xl font-black leading-tight sm:text-5xl">
              System. Structure. <span className="text-gradient-red">Sequence.</span>
            </h3>
            <p className="mt-4 max-w-md text-lg font-semibold leading-relaxed text-muted-foreground">
              Three words underneath everything Ivan builds — in business, in code and in trading. Expectancy, not
              win rate.
            </p>
          </div>
          <div className="blueprint-grid grid grid-cols-1 gap-3 border border-accent/30 bg-accent/10 p-3 sm:grid-cols-3">
            {sss.map((s) => (
              <div key={s.word} className="border border-border/60 bg-background/70 p-5">
                <p className="text-5xl font-black leading-none text-primary">{s.word[0]}</p>
                <p className="mt-3 text-lg font-black text-foreground">{s.word}</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ExternalLink className="h-5 w-5" /> Visit the academy
          </a>
          <a
            href={`${SITE_URL}#levels`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            See the four levels
          </a>
        </div>

        <p className="flex max-w-3xl items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
          anyone's behalf, and does not give financial or investment advice. He is not a licensed financial adviser.
          Trading carries risk — you can lose the entire capital you put in.
        </p>
      </div>
    </section>
  );
};

export default TradingAcademySection;
