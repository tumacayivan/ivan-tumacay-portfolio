import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Layers, Hand, SlidersHorizontal, Server, BrainCircuit, ShieldCheck } from "lucide-react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";
import SectionHeading from "./transit/SectionHeading";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

// Frames captured from the live site. Like the site itself, nothing here
// claims a return, a win rate or an income: it is an education programme.
const exhibits = [
  { image: itaColdOpen, title: "Cold open", caption: "Ivan Tumacay Group Trading — quantitative trading education built on data, maths and statistics." },
  { image: itaInvoice, title: "The invoice", caption: "₱134,000 paid to the market across every strategy he tried and automated. He calls it tuition." },
  { image: itaShift, title: "The shift", caption: "December 2025: the hunt for the perfect setup ends and the systems work begins." },
  { image: itaModel, title: "How a model learns", caption: "Guess, measure the error, adjust a little — a generic example of how machine learning trains." },
  { image: itaNumbers, title: "The numbers", caption: "Expectancy over win rate. If an idea can't be measured, it isn't an idea yet." },
  { image: itaLevels, title: "The ladder", caption: "Four levels, from manual to quantitative — pick where you actually stand today." },
  { image: itaDawn, title: "Dawn", caption: "06:02 in Cavite. The system kept running. Same room, different trader." },
];

const programmeTags = [
  { label: "Programme", value: "ITG-Q" },
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

const ease = [0.16, 1, 0.3, 1] as const;
const frameLetter = (i: number) => String.fromCharCode(65 + i);

/**
 * ACADEMY DECK — the instrument bay's open neighbour.
 *
 * Where the bay holds a private build behind a power switch, this deck
 * is open to anyone: the education programme Ivan teaches, logged as a
 * sequence of received frames, a flight record and four stages of ascent.
 */
const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const exhibit = exhibits[active];

  return (
    <section
      id="trading-academy"
      data-scene="Academy deck"
      data-coord="Stage 03B · Open channel"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 15% 0%, hsl(var(--gold) / calc(0.09 * var(--glow))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          stage="03B"
          kicker="Education programme · built & taught by Ivan"
          title="Ivan Tumacay Group"
          accent="Trading"
        >
          Quantitative trading education built on data, mathematics and statistics — from complete beginner to a
          system you built yourself. No holy grail. No income promises. Just a process you can repeat.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-12 max-w-3xl">
          {programmeTags.map((t) => (
            <div key={t.label} className="bg-deep px-4 py-4">
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.label}</div>
              <div className="font-tele text-base font-medium uppercase text-ice flex items-center gap-2 mt-1.5">
                {t.label === "Status" && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon" aria-hidden />}
                {t.value}
              </div>
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
                    alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
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
                      <ExternalLink className="w-4 h-4" aria-hidden /> Open the academy
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

        {/* THE RECEIPT */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">The receipt</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">2025 · flight record</span>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/10 border border-rule/10 mb-20">
          {receipt.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.09, ease }}
              className="bg-deep p-6 sm:p-7"
            >
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">
                <span aria-hidden className="text-gold mr-2">T{String(i + 1).padStart(2, "0")}</span>
                {r.when}
              </div>
              <div
                className={`plate text-2xl sm:text-3xl leading-tight mt-3 ${
                  r.title.startsWith("₱") ? "lit tabular-nums" : "text-ice"
                }`}
              >
                {r.title}
              </div>
              <p className="text-ice-dim leading-relaxed mt-2">{r.body}</p>
            </motion.li>
          ))}
        </ol>

        {/* STAGES OF ASCENT */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">Four levels. One ascent.</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Manual → quant</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.09, ease }}
              className="panel panel-hover beam p-6 group"
            >
              <div className="flex items-center justify-between mb-6">
                <l.icon className="w-5 h-5 text-signal group-hover:text-gold transition-colors duration-500" aria-hidden />
                <span aria-hidden className="font-tele text-sm tracking-[0.2em] text-gold">
                  L{l.n}
                </span>
              </div>
              <h4 className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mb-2.5">{l.name}</h4>
              <p className="text-ice-dim leading-relaxed text-[0.95rem]">{l.tagline}</p>
              <p className="mt-5 pt-4 border-t border-rule/10 text-sm text-ice">
                <span className="tele-label block mb-1.5">You walk out with</span>
                {l.out}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SYSTEM · STRUCTURE · SEQUENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 items-start mb-14">
          <div>
            <div className="tele-label mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" aria-hidden /> The philosophy
            </div>
            <h3 className="plate text-4xl sm:text-5xl text-ice leading-none">
              System. Structure. <span className="lit">Sequence.</span>
            </h3>
            <p className="text-ice-dim text-lg leading-relaxed mt-5 max-w-md">
              Three words underneath everything Ivan builds — in business, in code and in trading. Expectancy, not
              win rate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-rule/10 border border-rule/10">
            {sss.map((s) => (
              <div key={s.word} className="bg-deep p-6">
                <div className="plate text-5xl text-gold leading-none">{s.word[0]}</div>
                <div className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mt-4">{s.word}</div>
                <p className="text-ice-dim mt-1.5">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" aria-hidden /> Visit the academy
            </span>
          </a>
          <a href={`${SITE_URL}#levels`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>See the four levels</span>
          </a>
        </div>

        <p className="flex items-start gap-2.5 text-sm text-ice-dim leading-relaxed max-w-3xl">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-signal" aria-hidden />
          <span>
            Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
            anyone's behalf, and does not give financial or investment advice. He is not a licensed financial adviser.
            Trading carries risk — you can lose the entire capital you put in.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TradingAcademySection;
