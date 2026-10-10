import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  GraduationCap,
  Layers,
  Hand,
  SlidersHorizontal,
  Server,
  BrainCircuit,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";
import ScrollReveal from "./ScrollReveal";

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
  { label: "PROGRAMME", value: "ITG-Q" },
  { label: "STATUS", value: "LIVE" },
  { label: "FORMAT", value: "4 LEVELS" },
  { label: "INCOME PROMISES", value: "ZERO" },
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

const SubHeading = ({ icon: Icon, title, meta }: { icon: typeof Receipt; title: string; meta: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-ink" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">{title}</h3>
    <span className="flex-1 h-px border-t border-dashed-ink" />
    <span className="font-courier text-[13px] text-ink-brown tracking-widest uppercase">{meta}</span>
  </div>
);

const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const exhibit = exhibits[active];

  return (
    <section id="trading-academy" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-y-2 border-double border-ink paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-start justify-start overflow-hidden">
        <div className="watermark text-[16.1vw] leading-none rotate-[-4deg] -ml-6 mt-16">TUITION</div>
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
              <GraduationCap className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 08 // EDUCATION PROGRAMME
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                BUILT &amp; TAUGHT BY SUBJECT
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Ivan Tumacay Group · Quantitative Trading Education
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight relative">
              GROUP <span className="text-ink">TRADING</span>
              <span
                className="absolute -top-4 -right-2 sm:top-2 sm:right-8 stamp stamp-drop-hard font-blackops text-xl sm:text-3xl !p-2 !rotate-[8deg] hidden sm:inline-flex"
                style={{ animationDelay: "0.4s" }}
              >
                TUITION PAID
              </span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">PROGRAMME BRIEF</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              Quantitative trading education built on <span className="font-bold underline">data</span>,{" "}
              <span className="font-bold underline">mathematics</span> and <span className="font-bold underline">statistics</span> —
              from complete beginner to a system you built yourself. No holy grail. No income promises. Just a process
              you can repeat.
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
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-hot
            data-spy-label="OPEN ACADEMY"
            className="group block relative paper-card-cream p-3 sm:p-4 card-lift"
          >
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
            <div
              className="relative overflow-hidden border-2 border-ink aspect-[2.09/1] bg-paper-gray spotlight-paper"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active}
                  src={exhibit.image}
                  alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
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
                EDUCATION ONLY
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-14 h-14 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-[hsl(var(--paper))]" />
                </div>
                <span className="font-blackops text-base text-[hsl(var(--paper))] tracking-widest uppercase">OPEN THE ACADEMY</span>
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
                  data-spy-label={`EXHIBIT ${pad(i + 1, 3)}`}
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

        {/* THE RECEIPT */}
        <SubHeading icon={Receipt} title="The receipt" meta="2025 · in order" />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {receipt.map((r, i) => {
            const isInvoice = r.title.startsWith("₱");
            return (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="paper-card-cream p-5 relative transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                style={{ transform: `rotate(${(((i * 3) % 5) - 2) * 0.3}deg)` }}
              >
                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">ENTRY-{pad(i + 1, 3)}</span>
                  <span className="font-blackops text-[12px] tracking-widest text-ink uppercase">{r.when}</span>
                </div>
                <div className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-tight leading-tight">
                  {isInvoice ? (
                    <ScrollReveal as="span" effect="redaction-lift" delay={200}>
                      {r.title}
                    </ScrollReveal>
                  ) : (
                    r.title
                  )}
                </div>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed mt-2">{r.body}</p>
                {isInvoice && (
                  <div className="absolute -top-3 right-4 stamp !text-[12px] !p-1 bg-paper">PAID IN FULL · TUITION</div>
                )}
              </motion.li>
            );
          })}
        </ol>

        {/* THE LADDER */}
        <SubHeading icon={Layers} title="Four levels. One ladder." meta="Manual → quant" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="paper-card-cream p-5 paper-grain relative card-lift h-full">
                <div className="tape tape-yellow w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />
                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-4">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">LEVEL {l.n}</span>
                  <span className="font-blackops text-4xl text-[hsl(var(--ink-charcoal)/0.2)] leading-none">{l.n}</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
                    <l.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-blackops text-xl sm:text-2xl text-ink uppercase tracking-tight leading-tight">{l.name}</h4>
                </div>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed">{l.tagline}</p>
                <p className="font-typewriter text-sm text-ink border-t border-dashed-ink pt-2 mt-4">
                  <span className="font-blackops text-[12px] tracking-widest text-ink">YOU WALK OUT WITH //</span> {l.out}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SSS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">OPERATING DOCTRINE</span>
            </div>
            <ScrollReveal as="h3" effect="ink-bleed" className="font-blackops text-4xl sm:text-5xl text-ink uppercase leading-[0.95] tracking-tight">
              System. Structure. <span className="underline decoration-2 underline-offset-4">Sequence.</span>
            </ScrollReveal>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-4 max-w-md">
              Three words underneath everything Ivan builds — in business, in code and in trading. Expectancy, not
              win rate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sss.map((s, i) => (
              <div key={s.word} className="paper-card-cream p-5 relative card-lift">
                <div className="font-courier text-[12px] tracking-widest text-ink-brown">ARTICLE {pad(i + 1)}</div>
                <div className="font-blackops text-6xl text-ink leading-none mt-2">{s.word[0]}</div>
                <div className="font-blackops text-xl text-ink uppercase mt-3">{s.word}</div>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] mt-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="ACCESS ACADEMY"
            className="px-5 py-2.5 bg-ink text-[hsl(var(--paper))] border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-2"
          >
            ACCESS THE ACADEMY <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`${SITE_URL}#levels`}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="REVIEW LEVELS"
            className="px-5 py-2.5 bg-paper text-ink border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-ink hover:text-[hsl(var(--paper))] transition-colors flex items-center justify-center gap-2"
          >
            REVIEW THE FOUR LEVELS
          </a>
        </div>

        {/* DISCLAIMER */}
        <ScrollReveal effect="page-turn" className="paper-card-cream p-4 sm:p-5 relative max-w-4xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">LEGAL NOTICE</div>
          <p className="flex items-start gap-3 font-typewriter text-sm sm:text-base text-ink leading-relaxed mt-2">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-ink" />
            <span>
              Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
              anyone's behalf, and does not give financial or investment advice. He is not a licensed financial
              adviser. Trading carries risk — you can lose the entire capital you put in.
            </span>
          </p>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ PROGRAMME FILE SEALED</span>
          <span>NO PERFORMANCE CLAIMS ON RECORD</span>
          <span>END OF SECTION 08</span>
        </div>
      </div>
    </section>
  );
};

export default TradingAcademySection;
