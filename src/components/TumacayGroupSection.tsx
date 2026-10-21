import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, BrainCircuit, Database, ExternalLink, FlaskConical, Layers, Radio, Scale, ShieldCheck } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgModel from "@/assets/tumacay-group/tg-02-model.jpg";
import tgCounsel from "@/assets/tumacay-group/tg-03-counsel.jpg";
import tgBlindfold from "@/assets/tumacay-group/tg-04-blindfold.jpg";
import tgProcess from "@/assets/tumacay-group/tg-05-process.jpg";
import tgQuantguage from "@/assets/tumacay-group/tg-06-quantguage.jpg";
import tgQuestions from "@/assets/tumacay-group/tg-07-questions.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Exhibits captured from the live site. Like the site, nothing here claims a
// return or a win rate, and nothing is investment advice.
const exhibits = [
  { image: tgHero, title: "Quantitative trading", caption: "TUMACAY GROUP — 100% machine learning, no human intervention. It places every order itself." },
  { image: tgModel, title: "The model", caption: "Supervised learning, probability over prediction, statistical inference and the rest of what it is built out of." },
  { image: tgCounsel, title: "The researcher", caption: "Researched and developed by Ivan Tumacay. Judgment goes into the method and stops when the model goes live." },
  { image: tgBlindfold, title: "The blindfold", caption: "A gold Lady Justice you can drag to turn. The model never sees whose position it is closing." },
  { image: tgProcess, title: "How it is built", caption: "Data, training, validation, live. Nothing reaches live trading until the numbers allow it." },
  { image: tgQuantguage, title: "Quantguage", caption: "Flip cards for the words that decide the position, as they read in a risk report." },
  { image: tgQuestions, title: "Questions", caption: "Who makes the decisions, how it is validated, and what this site is not." },
];

const fileTags = [
  { label: "Model", value: "100% ML" },
  { label: "Human override", value: "None" },
  { label: "Pipeline", value: "4 stages" },
  { label: "Investment advice", value: "None" },
];

const stages = [
  { n: "01", icon: Database, name: "Data", tagline: "Everything begins as a number", body: "Captured, timestamped and reconciled before the model is allowed near it." },
  { n: "02", icon: BrainCircuit, name: "Training", tagline: "Nobody tells it what to think", body: "Fitted from labelled history under regularisation and cross-validation." },
  { n: "03", icon: FlaskConical, name: "Validation", tagline: "Tested where it was never trained", body: "Held-out data, walk-forward windows and full costs. Most candidates end here." },
  { n: "04", icon: Radio, name: "Live", tagline: "No hand on it", body: "Goes live at a fraction of target size and places its own orders." },
];

const terms = [
  { word: "Feature", say: "fea · ture", meaning: "A measurable quantity derived from raw data that a model takes as input. Price alone is not a feature until it is turned into one." },
  { word: "Overfitting", say: "o · ver · fit · ting", meaning: "A model that has learned the noise in its training sample instead of the structure underneath it." },
  { word: "Out-of-sample", say: "out · of · sam · ple", meaning: "Data withheld from training so the model can be judged on something it has never seen." },
  { word: "Posterior", say: "pos · te · ri · or", meaning: "The probability of something being true after the evidence has been taken into account, rather than before." },
  { word: "Alpha", say: "al · pha", meaning: "Return that cannot be explained by exposure to the market or to any known risk factor." },
  { word: "Drawdown", say: "draw · down", meaning: "The decline from a peak in equity to the trough that follows, measured before any recovery." },
];

const pad = (n: number) => String(n).padStart(2, "0");

const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="tumacay-group" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[16vw] leading-none -rotate-6 -mr-10 mt-10">MODEL</div>
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
                SPECIAL FILE // ANNEX M
              </span>
            </div>
            <span className="font-courier text-[10px] text-ink-brown tracking-widest hidden sm:inline">
              MACHINE LEARNING · RESEARCHED &amp; DEVELOPED BY SUBJECT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
                Quantitative trading // model file
              </p>
              <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
                TUMACAY <span className="text-stamp-red">GROUP</span>
              </h2>
            </div>
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1">FIELD BRIEFING</div>
              <p className="font-typewriter text-base sm:text-lg text-ink leading-relaxed mt-2">
                A <span className="font-bold text-stamp-red underline decoration-wavy">100% machine learning</span> trading
                model. It reads the data, produces a probability, sizes the position inside its own risk constraints and
                places the order itself. No discretion. No override.
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
                  EXHIBIT M-{pad(active + 1)} — {exhibit.title}
                </span>
                <span className="hidden sm:inline text-stamp-red font-blackops">LIVE FEED</span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] border-2 border-ink bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`TUMACAY GROUP — ${exhibit.title}`}
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
                  NO HUMAN OVERRIDE
                </div>

                <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4 z-20">
                  <div className="w-12 h-12 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[hsl(var(--paper))]" />
                  </div>
                  <span className="font-blackops text-sm text-[hsl(var(--paper))] text-center tracking-widest uppercase">
                    OPEN TUMACAY GROUP
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="sticky-note rotate-[-1deg]">
              <div className="font-courier text-[10px] tracking-widest text-ink-brown mb-1">EXHIBIT M-{pad(active + 1)}</div>
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
                    M-{pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE BLINDFOLD */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <blockquote className="font-blackops text-3xl sm:text-5xl text-ink leading-[0.95] uppercase">
            The model wears the <span className="text-stamp-red">blindfold.</span> It never sees whose position it is
            closing.
          </blockquote>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 flex items-center gap-1">
              <Scale className="w-3 h-3" /> DOCTRINE
            </div>
            <p className="font-typewriter text-base text-ink leading-relaxed mt-2">
              Mathematics, statistics and probability decide every trade. Judgment goes into what to measure, how to
              test it and which constraints to impose, and stops the moment the model goes live.
            </p>
          </div>
        </div>

        {/* HOW IT IS BUILT */}
        <div className="mb-6 flex items-center gap-3">
          <Layers className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">How the model is built</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">DATA → LIVE</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 h-full flex flex-col relative paper-grain"
            >
              <div className="tape tape-yellow w-12 h-3 -top-1.5 left-4 rotate-[-3deg]" />
              <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                STAGE {s.n}
              </span>
              <div className="flex items-start gap-3 mb-4 border-b-2 border-dashed-ink pb-3 mt-3">
                <div className="p-2 border-2 border-ink bg-paper text-stamp-red shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="font-blackops text-lg text-ink uppercase tracking-[0.05em] leading-tight">{s.name}</h4>
              </div>
              <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red mb-2">◉ {s.tagline.toUpperCase()}</div>
              <p className="font-typewriter text-sm text-ink/80 leading-snug flex-1">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* QUANTGUAGE */}
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">Quantguage</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">TAP A CARD TO DECLASSIFY</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`paper-card-cream p-5 min-h-[170px] text-left relative transition-shadow ${
                  isOpen ? "ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : ""
                }`}
                style={{ transform: `rotate(${((i % 3) - 1) * 0.4}deg)` }}
              >
                <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                  TERM-{String(i + 1).padStart(3, "0")}
                </span>
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
                        <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red">▣ {t.word.toUpperCase()}</div>
                        <p className="font-typewriter text-sm text-ink leading-snug mt-2">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-courier text-[10px] tracking-widest text-ink-brown">{t.say}</div>
                        <div className="font-blackops text-2xl sm:text-3xl uppercase leading-tight mt-2 text-ink">{t.word}</div>
                        <div className="mt-3 stamp stamp-blue text-[10px] !p-1 inline-block">CLASSIFIED · TAP TO OPEN</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-sm tracking-[0.18em] uppercase hover:bg-[hsl(var(--paper))] hover:text-stamp-red transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Visit Tumacay Group
          </a>
          <a
            href={`${SITE_URL}#process`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-ink bg-paper text-ink font-blackops text-sm tracking-[0.18em] uppercase hover:text-stamp-red transition-colors"
          >
            See how it is built
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="paper-card-cream p-4 relative max-w-3xl mt-8">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 !rotate-0">NOTICE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-ink leading-relaxed mt-1">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-stamp-red" />
            Nothing here is an offer to sell or a solicitation to buy any security, and nothing here is investment
            advice. Ivan is not a licensed financial adviser. Trading carries risk — you can lose the entire capital
            you put in.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>FILE OPEN · NO PERFORMANCE CLAIMS ON RECORD</span>
          <span>ANNEX M / MODEL DIRECTORATE</span>
        </div>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
