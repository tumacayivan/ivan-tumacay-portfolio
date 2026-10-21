import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Database, BrainCircuit, FlaskConical, Radio, Scale, ShieldCheck } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgModel from "@/assets/tumacay-group/tg-02-model.jpg";
import tgCounsel from "@/assets/tumacay-group/tg-03-counsel.jpg";
import tgBlindfold from "@/assets/tumacay-group/tg-04-blindfold.jpg";
import tgProcess from "@/assets/tumacay-group/tg-05-process.jpg";
import tgQuantguage from "@/assets/tumacay-group/tg-06-quantguage.jpg";
import tgQuestions from "@/assets/tumacay-group/tg-07-questions.jpg";
import SectionHeading from "./transit/SectionHeading";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Frames captured from the live site. Like the site, nothing here claims a
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

const modelTags = [
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

const ease = [0.16, 1, 0.3, 1] as const;
const frameLetter = (i: number) => String.fromCharCode(65 + i);

/**
 * MODEL DECK — the academy deck's autonomous neighbour.
 *
 * Where the academy teaches people to trade, this deck logs a model that
 * trades with no one at the controls: received frames from the live site,
 * the blindfold principle, four stages from data to live, and a glossary.
 */
const TumacayGroupSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="tumacay-group"
      data-scene="Model deck"
      data-coord="Stage 03C · Autonomous channel"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 85% 0%, hsl(var(--gold) / calc(0.09 * var(--glow))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          stage="03C"
          kicker="Machine learning · researched & developed by Ivan"
          title="Tumacay"
          accent="Group"
        >
          A 100% machine learning trading model. It reads the data, produces a probability, sizes the position inside
          its own risk constraints and places the order itself. No discretion, no override, no hand to stay it.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-12 max-w-3xl">
          {modelTags.map((t) => (
            <div key={t.label} className="bg-deep px-4 py-4">
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.label}</div>
              <div className="font-tele text-base font-medium uppercase text-ice mt-1.5">{t.value}</div>
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
                    alt={`TUMACAY GROUP — ${exhibit.title}`}
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
                      <ExternalLink className="w-4 h-4" aria-hidden /> Open Tumacay Group
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

        {/* THE BLINDFOLD */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center mb-20 border-y border-rule/10 py-12">
          <blockquote className="plate text-3xl sm:text-5xl text-ice leading-tight">
            The model wears the <span className="lit">blindfold.</span> It never sees whose position it is closing.
          </blockquote>
          <div>
            <div className="tele-label mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4" aria-hidden /> The principle
            </div>
            <p className="text-ice-dim text-lg leading-relaxed">
              Mathematics, statistics and probability decide every trade. Judgment goes into what to measure, how to
              test it and which constraints to impose, and stops the moment the model goes live.
            </p>
          </div>
        </div>

        {/* FOUR STAGES */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">How the model is built</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Data → live</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.09, ease }}
              className="panel panel-hover beam p-6 group"
            >
              <div className="flex items-center justify-between mb-6">
                <s.icon className="w-5 h-5 text-signal group-hover:text-gold transition-colors duration-500" aria-hidden />
                <span aria-hidden className="font-tele text-sm tracking-[0.2em] text-gold">
                  S{s.n}
                </span>
              </div>
              <h4 className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mb-1.5">{s.name}</h4>
              <div className="tele-label mb-3">{s.tagline}</div>
              <p className="text-ice-dim leading-relaxed text-[0.95rem]">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* QUANTGUAGE */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">Quantguage</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/10 border border-rule/10 mb-14">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-deep p-6 sm:p-7 text-left min-h-[180px] hover:bg-deep-2 transition-colors duration-500"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {isOpen ? (
                      <>
                        <div className="tele-label">{t.word}</div>
                        <p className="text-ice leading-relaxed mt-3">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.say}</div>
                        <div className="plate text-3xl sm:text-4xl text-ice leading-tight mt-3">{t.word}</div>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-gold mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" aria-hidden /> Visit Tumacay Group
            </span>
          </a>
          <a href={`${SITE_URL}#process`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>See how it is built</span>
          </a>
        </div>

        <p className="flex items-start gap-2.5 text-sm text-ice-dim leading-relaxed max-w-3xl">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-signal" aria-hidden />
          <span>
            Nothing here is an offer to sell or a solicitation to buy any security, and nothing here is investment
            advice. Ivan is not a licensed financial adviser. Trading carries risk — you can lose the entire capital
            you put in.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
