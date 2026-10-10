import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Layers, Hand, SlidersHorizontal, Server, BrainCircuit, ShieldCheck, GraduationCap, Receipt } from "lucide-react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

/* Scenes captured from the live site. Like the site itself, nothing here
   claims a return, a win rate or an income: it is an education programme. */
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

const underline = "font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4";

const SubHeading = ({ icon: Icon, title, note }: { icon: typeof Receipt; title: string; note: string }) => (
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

const TradingAcademySection = () => {
  const [active, setActive] = useState(0);
  const exhibit = exhibits[active];
  const sceneNo = String(active + 1).padStart(2, "0");

  return (
    <section
      id="trading-academy"
      className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] paper-grain"
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-start">
        <div className="watermark text-[17vw] leading-none rotate-[-4deg] -ml-6 mt-16 whitespace-nowrap">
          THE SCHOOL
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
              <GraduationCap className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 07 // THE SCHOOL OF HARD TRADES
            </div>
            <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] hidden sm:inline">
              EDUCATION ONLY · NO PITCH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
                Education Programme · Built &amp; Taught by Ivan
              </p>
              <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
                IVAN TUMACAY GROUP <span className="accent">TRADING</span>
              </h2>
            </div>
            <div className="paper-card-cream p-5 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">THE PROSPECTUS</div>
              <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
                Quantitative trading education built on{" "}
                <span className={underline}>data</span>, <span className={underline}>mathematics</span> and{" "}
                <span className={underline}>statistics</span> — from complete beginner to a system you built yourself.
                No holy grail. No income promises. Just a process you can repeat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Programme tags */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-3xl">
          {programmeTags.map((t) => (
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
                    alt={`Ivan Tumacay Group Trading — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[hsl(var(--paper-cream)/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="dossier-cta text-sm">
                    <ExternalLink className="w-4 h-4" /> OPEN THE ACADEMY
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

        {/* The receipt */}
        <SubHeading icon={Receipt} title="The Receipt" note="2025 · In order" />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {receipt.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="paper-card-cream p-5 relative"
            >
              <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase">{r.when}</span>
                <span className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">
                  LINE {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                className={`font-blackops text-2xl sm:text-3xl uppercase tracking-[0.08em] leading-tight ${
                  r.title.startsWith("₱") ? "text-[hsl(var(--accent-red))]" : "text-[hsl(var(--accent-bone))]"
                }`}
              >
                {r.title}
              </div>
              <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 leading-relaxed mt-2">{r.body}</p>
            </motion.li>
          ))}
        </ol>

        {/* The ladder */}
        <SubHeading icon={Layers} title="Four Levels. One Ladder." note="Manual → Quant" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 relative group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)] transition-colors">
                  <l.icon className="w-5 h-5" />
                </div>
                <span className="font-blackops text-4xl text-[hsl(var(--accent-red)/0.35)] leading-none">{l.n}</span>
              </div>
              <h4 className="font-blackops text-xl uppercase tracking-[0.12em] text-[hsl(var(--accent-bone))] mb-2">{l.name}</h4>
              <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 leading-relaxed">{l.tagline}</p>
              <p className="mt-4 pt-3 border-t border-dashed-ink font-typewriter text-sm text-[hsl(var(--ink-charcoal))]">
                <span className="block font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] mb-1">YOU WALK OUT WITH //</span>
                {l.out}
              </p>
            </motion.div>
          ))}
        </div>

        {/* System · Structure · Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start mb-12">
          <div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              The Philosophy
            </p>
            <h3 className="display-title text-4xl sm:text-6xl uppercase leading-none">
              SYSTEM. STRUCTURE. <span className="accent">SEQUENCE.</span>
            </h3>
            <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed mt-4 max-w-md">
              Three words underneath everything Ivan builds — in business, in code and in trading.{" "}
              <span className={underline}>Expectancy, not win rate.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sss.map((s) => (
              <div key={s.word} className="paper-card-cream p-5">
                <div className="font-blackops text-5xl text-[hsl(var(--accent-red))] leading-none">{s.word[0]}</div>
                <div className="font-blackops text-lg uppercase tracking-[0.14em] text-[hsl(var(--accent-bone))] mt-3">{s.word}</div>
                <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 mt-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm">
            <ExternalLink className="w-4 h-4" /> VISIT THE ACADEMY
          </a>
          <a href={`${SITE_URL}#levels`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
            SEE THE FOUR LEVELS
          </a>
        </div>

        {/* Disclaimer */}
        <div className="paper-card-cream p-5 relative max-w-3xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">FINE PRINT</div>
          <p className="flex items-start gap-2 font-courier text-xs text-[hsl(var(--ink-brown))] leading-relaxed mt-1">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
            Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on
            anyone's behalf, and does not give financial or investment advice. He is not a licensed financial adviser.
            Trading carries risk — you can lose the entire capital you put in.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> CLASS IS IN SESSION</span>
          <span>NO TIPS · NO SIGNALS · NO MANAGED MONEY</span>
          <span>END OF SECTION 07</span>
        </div>
      </div>
    </section>
  );
};

export default TradingAcademySection;
