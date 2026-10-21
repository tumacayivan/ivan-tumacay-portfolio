import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Scale, Database, BrainCircuit, FlaskConical, Radio, ShieldCheck, Layers, BookOpen } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgModel from "@/assets/tumacay-group/tg-02-model.jpg";
import tgCounsel from "@/assets/tumacay-group/tg-03-counsel.jpg";
import tgBlindfold from "@/assets/tumacay-group/tg-04-blindfold.jpg";
import tgProcess from "@/assets/tumacay-group/tg-05-process.jpg";
import tgQuantguage from "@/assets/tumacay-group/tg-06-quantguage.jpg";
import tgQuestions from "@/assets/tumacay-group/tg-07-questions.jpg";
import ScrollReveal from "./ScrollReveal";

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
  { label: "MODEL", value: "100% ML" },
  { label: "HUMAN OVERRIDE", value: "NONE" },
  { label: "PIPELINE", value: "4 STAGES" },
  { label: "INVESTMENT ADVICE", value: "NONE" },
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

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

const Corners = ({ size = "w-4 h-4" }: { size?: string }) => (
  <>
    <div className={`absolute -top-1 -left-1 ${size} border-l-2 border-t-2 border-ink`} />
    <div className={`absolute -top-1 -right-1 ${size} border-r-2 border-t-2 border-ink`} />
    <div className={`absolute -bottom-1 -left-1 ${size} border-l-2 border-b-2 border-ink`} />
    <div className={`absolute -bottom-1 -right-1 ${size} border-r-2 border-b-2 border-ink`} />
  </>
);

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
        <div className="watermark text-[16.1vw] leading-none rotate-[4deg] -mr-6 mt-16">BLINDFOLD</div>
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
                SECTION 09 // MACHINE LEARNING MODEL
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                RESEARCHED &amp; DEVELOPED BY SUBJECT
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Tumacay Group · Machine Learning Quantitative Trading
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight relative">
              TUMACAY <span className="text-ink">GROUP</span>
              <span
                className="absolute -top-4 -right-2 sm:top-2 sm:right-8 stamp stamp-drop-hard font-blackops text-xl sm:text-3xl !p-2 !rotate-[8deg] hidden sm:inline-flex"
                style={{ animationDelay: "0.4s" }}
              >
                NO OVERRIDE
              </span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">MODEL BRIEF</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              A <span className="font-bold underline">100% machine learning</span> trading model. It reads the data,
              produces a <span className="font-bold underline">probability</span>, sizes the position inside its own
              risk constraints and places the order itself. No discretion, no override, no hand to stay it.
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
            data-spy-label="OPEN TUMACAY GROUP"
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
                NOT ADVICE
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

        {/* THE BLINDFOLD */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <ScrollReveal as="h3" effect="ink-bleed" className="font-blackops text-3xl sm:text-5xl text-ink uppercase leading-[1] tracking-tight">
            The model wears the <span className="underline decoration-2 underline-offset-4">blindfold.</span> It never
            sees whose position it is closing.
          </ScrollReveal>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">OPERATING DOCTRINE</div>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">
              Mathematics, statistics and probability decide every trade. Judgment goes into what to measure, how to
              test it and which constraints to impose, and stops the moment the model goes live.
            </p>
          </div>
        </div>

        {/* HOW IT IS BUILT */}
        <SubHeading icon={Layers} title="How the model is built" meta="Data → live" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="paper-card-cream p-5 paper-grain relative card-lift h-full">
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
                <p className="font-courier text-[12px] tracking-widest text-ink-brown uppercase">{s.tagline}</p>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed mt-2">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QUANTGUAGE */}
        <SubHeading icon={BookOpen} title="Quantguage" meta="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                data-spy-label={`TERM ${pad(i + 1, 3)}`}
                className="paper-card-cream p-5 relative card-lift text-left min-h-[170px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-courier text-[12px] tracking-widest text-ink-brown border-b-2 border-dashed-ink pb-2 mb-3">
                      TERM-{pad(i + 1, 3)} · {isOpen ? t.word.toUpperCase() : t.say}
                    </div>
                    {isOpen ? (
                      <p className="font-typewriter text-base text-ink leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-tight leading-tight">{t.word}</div>
                        <div className="font-blackops text-[12px] tracking-widest text-ink mt-3">TURN THE CARD //</div>
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
            data-spy-label="ACCESS TUMACAY GROUP"
            className="px-5 py-2.5 bg-ink text-[hsl(var(--paper))] border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-2"
          >
            VISIT TUMACAY GROUP <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`${SITE_URL}#process`}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="REVIEW THE BUILD"
            className="px-5 py-2.5 bg-paper text-ink border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-ink hover:text-[hsl(var(--paper))] transition-colors flex items-center justify-center gap-2"
          >
            SEE HOW IT IS BUILT
          </a>
        </div>

        {/* DISCLAIMER */}
        <ScrollReveal effect="page-turn" className="paper-card-cream p-4 sm:p-5 relative max-w-4xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">LEGAL NOTICE</div>
          <p className="flex items-start gap-3 font-typewriter text-sm sm:text-base text-ink leading-relaxed mt-2">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-ink" />
            <span>
              Nothing here is an offer to sell or a solicitation to buy any security, and nothing here is investment
              advice. Ivan is not a licensed financial adviser. Trading carries risk — you can lose the entire capital
              you put in.
            </span>
          </p>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ MODEL FILE SEALED</span>
          <span>NO PERFORMANCE CLAIMS ON RECORD</span>
          <span>END OF SECTION 09</span>
        </div>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
