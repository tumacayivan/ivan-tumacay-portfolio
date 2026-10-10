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
import SectionHeading from "./reaction/SectionHeading";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

// Plates captured from the live site. Like the site itself, nothing here
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

const plate = (i: number) => String.fromCharCode(65 + i);

const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const exhibit = exhibits[active];

  return (
    <section
      id="trading-academy"
      data-scene="The curriculum"
      data-code="Part II · 03A"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line/20" />
      <div aria-hidden className="absolute inset-0 chalkboard pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 15% 0%, hsl(var(--ember) / calc(0.08 * var(--bloom))), transparent 60%)",
        }}
      />

      <div className="gutter relative">
        <SectionHeading
          code="Doc · 03A"
          kicker="Education programme · built & taught by Ivan"
          title="Ivan Tumacay Group"
          accent="Trading"
        >
          Quantitative trading education built on data, mathematics and statistics — from complete beginner to a
          system you built yourself. No holy grail. No income promises. Just a process you can repeat.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-10 max-w-3xl">
          {programmeTags.map((t) => (
            <div key={t.label} className="bg-base px-4 py-3">
              <div className="slug slug-dim !text-[10px]">{t.label}</div>
              <div className="font-doc text-base font-semibold uppercase text-ink flex items-center gap-2 mt-1">
                {t.label === "Status" && <span className="w-1.5 h-1.5 bg-ember tick-pulse" aria-hidden />}
                {t.value}
              </div>
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
                    alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
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
                      <ExternalLink className="w-4 h-4" /> Open the programme
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

        {/* THE RECEIPT */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">The receipt</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">2025 · in order</span>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line/15 border border-line/15 mb-20">
          {receipt.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-base p-6"
            >
              <div className="slug">
                <span className="slug-dim mr-2">{String(i + 1).padStart(2, "0")}</span>
                {r.when}
              </div>
              <div
                className={`display text-3xl sm:text-4xl mt-3 ${r.title.startsWith("₱") ? "ignited tabular-nums" : "text-ink"}`}
              >
                {r.title}
              </div>
              <p className="text-ink-dim leading-relaxed mt-3">{r.body}</p>
            </motion.li>
          ))}
        </ol>

        {/* THE LADDER */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="display text-3xl sm:text-4xl text-ink">Four levels. One ladder.</h3>
          <span className="flex-1 h-px bg-line/20" />
          <span className="slug slug-dim">Manual → quant</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="plate plate-hover filament ticks p-6 group"
            >
              <div className="flex items-center justify-between mb-5">
                <l.icon className="w-6 h-6 text-ember" />
                <span className="display text-4xl text-line/25 group-hover:text-ember transition-colors">{l.n}</span>
              </div>
              <h4 className="font-doc text-base font-semibold uppercase tracking-[0.06em] text-ink mb-2">{l.name}</h4>
              <p className="text-ink-dim leading-relaxed">{l.tagline}</p>
              <p className="mt-4 pt-4 border-t border-line/15 text-sm text-ink">
                <span className="slug slug-dim block mb-1 !text-[10px]">You walk out with</span>
                {l.out}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SYSTEM · STRUCTURE · SEQUENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start mb-14">
          <div>
            <div className="slug mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> The method
            </div>
            <h3 className="display text-4xl sm:text-6xl text-ink">
              System. Structure. <span className="ignited">Sequence.</span>
            </h3>
            <p className="text-ink-dim text-lg leading-relaxed mt-4 max-w-md">
              Three words underneath everything Ivan builds — in business, in code and in trading. Expectancy, not
              win rate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line/15 border border-line/15">
            {sss.map((s) => (
              <div key={s.word} className="bg-base p-6">
                <div className="display text-6xl ignited">{s.word[0]}</div>
                <div className="font-doc text-base font-semibold uppercase tracking-[0.06em] text-ink mt-3">{s.word}</div>
                <p className="text-ink-dim mt-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Visit the programme
            </span>
          </a>
          <a href={`${SITE_URL}#levels`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>See the four levels</span>
          </a>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-dim leading-relaxed max-w-3xl">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-ember" />
          <span>
            <span className="slug !text-[10px] mr-2">Note for the record</span>
            Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
            anyone's behalf, and does not give financial or investment advice. He is not a licensed financial
            adviser. Trading carries risk — you can lose the entire capital you put in.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TradingAcademySection;
