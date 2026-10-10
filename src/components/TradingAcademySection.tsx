import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ExternalLink, FileSearch, Hand, Layers, Server, ShieldCheck, SlidersHorizontal } from "lucide-react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

// Exhibits captured from the live site. Like the site itself, nothing here
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

const fileTags = [
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
  const exhibit = exhibits[active];

  return (
    <section id="trading-academy" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[16vw] leading-none -rotate-6 -mr-10 mt-10">TRADING</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-ink">
            <div className="flex items-center gap-3">
              <span className="status-pulse" />
              <span className="font-blackops text-sm tracking-[0.3em] text-stamp-red">
                SPECIAL FILE // ANNEX T
              </span>
            </div>
            <span className="font-courier text-[10px] text-ink-brown tracking-widest hidden sm:inline">
              EDUCATION PROGRAMME · BUILT &amp; TAUGHT BY SUBJECT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
                Quantitative trading // education file
              </p>
              <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
                IVAN TUMACAY GROUP <span className="text-stamp-red">TRADING</span>
              </h2>
            </div>
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1">FIELD BRIEFING</div>
              <p className="font-typewriter text-base sm:text-lg text-ink leading-relaxed mt-2">
                Quantitative trading education built on <span className="font-bold text-stamp-red underline decoration-wavy">data</span>,{" "}
                <span className="font-bold text-stamp-red underline decoration-wavy">mathematics</span> and{" "}
                <span className="font-bold text-stamp-red underline decoration-wavy">statistics</span> — from complete beginner to a
                system you built yourself. No holy grail. No income promises. Just a process you can repeat.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {fileTags.map((t) => (
              <div key={t.label} className="paper-card px-4 py-3">
                <div className="font-courier text-[10px] tracking-widest text-ink-brown uppercase">{t.label}</div>
                <div className="font-blackops text-lg text-ink uppercase tracking-[0.08em]">{t.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EXHIBIT VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="paper-folder p-3 sm:p-4 relative">
              <div className="tape tape-yellow w-16 h-4 -top-2 left-8 rotate-[-4deg] z-10" />
              <div className="tape tape-yellow w-16 h-4 -top-2 right-8 rotate-[3deg] z-10" />
              <div className="flex items-center justify-between gap-3 mb-3 font-courier text-[10px] sm:text-xs tracking-widest text-ink">
                <span className="truncate uppercase">
                  EXHIBIT T-{pad(active + 1)} — {exhibit.title}
                </span>
                <span className="hidden sm:inline text-stamp-red font-blackops">LIVE FEED</span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] border-2 border-ink bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[hsl(var(--paper))]" />

                <div className="absolute bottom-4 right-6 stamp text-xs sm:text-sm !p-1.5 z-10 bg-[hsl(var(--paper)/0.85)]">
                  EDUCATION ONLY
                </div>

                <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4 z-20">
                  <div className="w-12 h-12 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[hsl(var(--paper))]" />
                  </div>
                  <span className="font-blackops text-sm text-[hsl(var(--paper))] text-center tracking-widest uppercase">
                    OPEN THE ACADEMY
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="sticky-note rotate-[-1deg]">
              <div className="font-courier text-[10px] tracking-widest text-ink-brown mb-1">EXHIBIT T-{pad(active + 1)}</div>
              <p className="leading-relaxed">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border-2 bg-paper transition-all ${
                    i === active ? "border-stamp ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : "border-ink opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top photocopy" />
                  <span className="absolute top-0 left-0 bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-[10px] px-1.5">
                    T-{pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE RECEIPT */}
        <div className="mb-6 flex items-center gap-3">
          <FileSearch className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">The receipt</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">2025 · CHRONOLOGICAL</span>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {receipt.map((r, i) => {
            const isInvoice = r.title.startsWith("₱");
            return (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="paper-card-cream p-5 relative"
                style={{ transform: `rotate(${((i % 3) - 1) * 0.4}deg)` }}
              >
                <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                  ENTRY-{String(i + 1).padStart(3, "0")}
                </span>
                <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red">▣ {r.when.toUpperCase()}</div>
                <div className={`font-blackops text-2xl sm:text-3xl uppercase leading-tight mt-2 ${isInvoice ? "text-stamp-red" : "text-ink"}`}>
                  {r.title}
                </div>
                <p className="font-typewriter text-sm text-ink/80 leading-snug mt-2">{r.body}</p>
                {isInvoice && <div className="mt-3 stamp stamp-blue text-[10px] !p-1">PAID AS TUITION</div>}
              </motion.li>
            );
          })}
        </ol>

        {/* CLEARANCE LEVELS */}
        <div className="mb-6 flex items-center gap-3">
          <Layers className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">Four levels. One ladder.</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">MANUAL → QUANT</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 h-full flex flex-col relative paper-grain"
            >
              <div className="tape tape-yellow w-12 h-3 -top-1.5 left-4 rotate-[-3deg]" />
              <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                LEVEL {l.n}
              </span>
              <div className="flex items-start gap-3 mb-4 border-b-2 border-dashed-ink pb-3 mt-3">
                <div className="p-2 border-2 border-ink bg-paper text-stamp-red shrink-0">
                  <l.icon className="w-5 h-5" />
                </div>
                <h4 className="font-blackops text-lg text-ink uppercase tracking-[0.05em] leading-tight">{l.name}</h4>
              </div>
              <p className="font-typewriter text-sm text-ink/80 leading-snug flex-1">{l.tagline}</p>
              <div className="mt-4 pt-3 border-t border-dashed-ink">
                <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red mb-1">◉ YOU WALK OUT WITH</div>
                <p className="font-courier text-sm text-ink leading-snug">{l.out}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SSS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start mb-14">
          <div>
            <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">Operating doctrine</p>
            <h3 className="font-blackops text-4xl sm:text-5xl text-ink leading-[0.95] uppercase">
              System. Structure. <span className="text-stamp-red">Sequence.</span>
            </h3>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-4 max-w-md">
              Three words underneath everything Ivan builds — in business, in code and in trading.{" "}
              <span className="handwritten-red">Expectancy, not win rate.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sss.map((s) => (
              <div key={s.word} className="paper-card p-5 relative">
                <div className="font-blackops text-5xl text-stamp-red leading-none">{s.word[0]}</div>
                <div className="font-blackops text-lg text-ink uppercase tracking-[0.08em] mt-3">{s.word}</div>
                <p className="font-courier text-sm text-ink mt-1 leading-snug">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-sm tracking-[0.18em] uppercase hover:bg-[hsl(var(--paper))] hover:text-stamp-red transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Visit the academy
          </a>
          <a
            href={`${SITE_URL}#levels`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-ink bg-paper text-ink font-blackops text-sm tracking-[0.18em] uppercase hover:text-stamp-red transition-colors"
          >
            See the four levels
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="paper-card-cream p-4 relative max-w-3xl mt-8">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 !rotate-0">NOTICE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-ink leading-relaxed mt-1">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-stamp-red" />
            Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
            anyone's behalf, and does not give financial or investment advice. He is not a licensed financial adviser.
            Trading carries risk — you can lose the entire capital you put in.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>FILE OPEN · NO PERFORMANCE CLAIMS ON RECORD</span>
          <span>ANNEX T / EDUCATION DIRECTORATE</span>
        </div>
      </div>
    </section>
  );
};

export default TradingAcademySection;
