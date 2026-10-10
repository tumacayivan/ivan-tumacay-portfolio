import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Hand,
  SlidersHorizontal,
  Server,
  BrainCircuit,
  ShieldCheck,
  BookOpen,
  Layers,
  FileText,
} from "lucide-react";
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
const exhibits = [
  { image: itaColdOpen, title: "Cold Open", caption: "Ivan Tumacay Group Trading — quantitative trading education built on data, maths and statistics." },
  { image: itaInvoice, title: "The Invoice", caption: "₱134,000 paid to the market across every strategy he tried and automated. He calls it tuition." },
  { image: itaShift, title: "The Shift", caption: "December 2025: the hunt for the perfect setup ends and the systems work begins." },
  { image: itaModel, title: "How a Model Learns", caption: "Guess, measure the error, adjust a little — a generic example of how machine learning trains." },
  { image: itaNumbers, title: "The Numbers", caption: "Expectancy over win rate. If an idea can't be measured, it isn't an idea yet." },
  { image: itaLevels, title: "The Ladder", caption: "Four levels, from manual to quantitative — pick where you actually stand today." },
  { image: itaDawn, title: "Dawn", caption: "06:02 in Cavite. The system kept running. Same room, different trader." },
];

const letterOf = (i: number) => String.fromCharCode(65 + i);

const fileMarkings = [
  { label: "Classification", value: "TRAINING FILE" },
  { label: "File No.", value: "ITG-Q" },
  { label: "Status", value: "LIVE" },
  { label: "Format", value: "4 LEVELS" },
  { label: "Income Promises", value: "ZERO" },
];

const receipt = [
  { when: "January 2025", title: "The Start", body: "Introduced to the market by a friend and a mentor with twelve years of trading." },
  { when: "First week", title: "The Hour", body: "A scalp that multiplied in about an hour — won without understanding anything." },
  { when: "Two weeks later", title: "Gone", body: "All of it. Back to the beginning." },
  { when: "Through 2025", title: "The Search", body: "Price action, ICT, SMC, EMAs, RSI, Bollinger — every one automated with MQL bots on a VPS." },
  { when: "The invoice", title: "₱134,000", body: "The total paid to the market. The price of a lesson no course could sell." },
  { when: "December 2025", title: "The Shift", body: "Back to what he's good at: building systems. Data, statistics and process." },
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

const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const exhibit = exhibits[active];

  return (
    <section
      id="trading-academy"
      className="dark relative overflow-hidden bg-[hsl(var(--paper))] text-[hsl(var(--ink-charcoal))]"
      style={{ backgroundImage: "var(--noise-body), var(--body-gradient)" }}
    >
      <div className="diag-stripes h-1.5" />

      <div className="relative py-16 sm:py-24 paper-grain">
        <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_20%,var(--wash-red)_0%,transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-end overflow-hidden">
          <div className="watermark text-[15vw] leading-none rotate-[6deg] -mr-10">FIELD MANUAL</div>
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
              EDUCATION ONLY
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="section-eyebrow">
                <BookOpen className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                TRAINING FILE // EDUCATION PROGRAMME
              </div>
              <span className="inline-flex items-center gap-1.5 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[12px] tracking-[0.3em] px-2.5 py-1 glow-red">
                <FileText className="w-3 h-3" /> FIELD MANUAL
              </span>
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              Built and taught by Ivan Tumacay
            </p>
            <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
              IVAN TUMACAY GROUP <span className="accent">TRADING</span>
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
                Quantitative trading education built on data, mathematics and statistics — from complete beginner to a
                system you built yourself. No holy grail. No income promises. Just a process you can repeat.
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
                      alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
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
                      Open the Academy
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

          {/* THE RECEIPT */}
          <SubHeading title="The Receipt" note="2025 · in chronological order" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {receipt.map((r, i) => {
              const isInvoice = r.title.startsWith("₱");
              return (
                <motion.li
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="paper-card-cream p-5 paper-grain relative"
                >
                  <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase">{r.when}</span>
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">
                      LOG-{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className={`font-blackops text-2xl sm:text-3xl uppercase tracking-[0.04em] leading-tight ${
                      isInvoice ? "text-[hsl(var(--accent-red))]" : "text-[hsl(var(--accent-bone))]"
                    }`}
                  >
                    {r.title}
                  </div>
                  <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">{r.body}</p>
                  {isInvoice && (
                    <div className="!absolute -top-3 -right-2 stamp !text-[12px] !p-1 bg-[hsl(var(--paper))]">TUITION</div>
                  )}
                </motion.li>
              );
            })}
          </ol>

          {/* THE LADDER */}
          <SubHeading title="Four Levels. One Ladder." note="Manual → quant" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {levels.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="paper-card-cream p-5 paper-grain relative group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">LEVEL {l.n}</span>
                  <div className="p-1.5 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(var(--on-red))] transition-colors">
                    <l.icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-blackops text-lg text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-tight mb-2 group-hover:text-[hsl(var(--accent-red))] transition-colors">
                  {l.name}
                </h4>
                <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">{l.tagline}</p>
                <div className="mt-4 pt-3 border-t border-dashed-ink">
                  <div className="font-courier text-[10px] tracking-[0.28em] text-[hsl(var(--ink-brown))] uppercase mb-1">
                    You walk out with
                  </div>
                  <p className="font-courier text-[13px] text-[hsl(var(--accent-bone))] leading-relaxed">{l.out}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SYSTEM · STRUCTURE · SEQUENCE */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start mb-12">
            <div>
              <div className="section-eyebrow mb-3">
                <Layers className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                STANDING ORDERS
              </div>
              <h3 className="font-blackops text-4xl sm:text-5xl uppercase text-[hsl(var(--accent-bone))] tracking-[0.04em] leading-none">
                System. Structure. <span className="text-[hsl(var(--accent-red))]">Sequence.</span>
              </h3>
              <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed mt-4 max-w-md">
                Three words underneath everything Ivan builds — in business, in code and in trading. Expectancy, not win
                rate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sss.map((s, i) => (
                <div key={s.word} className="paper-card-cream p-5 paper-grain relative">
                  <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                      ORDER {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="font-display text-5xl text-[hsl(var(--accent-red))] leading-none">{s.word[0]}</div>
                  <div className="font-blackops text-lg uppercase tracking-[0.06em] text-[hsl(var(--accent-bone))] mt-3">{s.word}</div>
                  <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed mt-1">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA + DISCLAIMER */}
          <div className="paper-card-cream p-5 sm:p-6 paper-grain relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <p className="flex items-start gap-2 font-courier text-[12px] text-[hsl(var(--ink-brown))] leading-relaxed max-w-3xl">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
                <span>
                  <span className="font-blackops tracking-[0.2em] text-[hsl(var(--accent-red))]">NOTICE ·</span> Education
                  only. Ivan does not sell or offer investments, does not accept money to trade or manage on anyone's
                  behalf, and does not give financial or investment advice. He is not a licensed financial adviser.
                  Trading carries risk — you can lose the entire capital you put in.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm flex-1">
                  <ExternalLink className="w-4 h-4" />
                  <span>VISIT THE ACADEMY</span>
                </a>
                <a href={`${SITE_URL}#levels`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
                  <span>SEE THE FOUR LEVELS</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
            <span><span className="text-[hsl(var(--accent-red))]">◉</span> END OF TRAINING FILE</span>
            <span>NO INCOME PROMISES · NO HOLY GRAIL</span>
            <span>FILE · ITG-Q</span>
          </div>
        </div>
      </div>

      <div className="diag-stripes h-1.5" />
    </section>
  );
};

export default TradingAcademySection;
