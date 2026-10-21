import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Database, ExternalLink, FlaskConical, Radio, Scale, ShieldCheck } from "lucide-react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgModel from "@/assets/tumacay-group/tg-02-model.jpg";
import tgCounsel from "@/assets/tumacay-group/tg-03-counsel.jpg";
import tgBlindfold from "@/assets/tumacay-group/tg-04-blindfold.jpg";
import tgProcess from "@/assets/tumacay-group/tg-05-process.jpg";
import tgQuantguage from "@/assets/tumacay-group/tg-06-quantguage.jpg";
import tgQuestions from "@/assets/tumacay-group/tg-07-questions.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Scenes captured from the live site. Like the site, nothing here claims a
// return or a win rate, and nothing is investment advice.
const scenes = [
  { image: tgHero, title: "Quantitative trading", caption: "TUMACAY GROUP — 100% machine learning, no human intervention. It places every order itself." },
  { image: tgModel, title: "The model", caption: "Supervised learning, probability over prediction, statistical inference and the rest of what it is built out of." },
  { image: tgCounsel, title: "The researcher", caption: "Researched and developed by Ivan Tumacay. Judgment goes into the method and stops when the model goes live." },
  { image: tgBlindfold, title: "The blindfold", caption: "A gold Lady Justice you can drag to turn. The model never sees whose position it is closing." },
  { image: tgProcess, title: "How it is built", caption: "Data, training, validation, live. Nothing reaches live trading until the numbers allow it." },
  { image: tgQuantguage, title: "Quantguage", caption: "Flip cards for the words that decide the position, as they read in a risk report." },
  { image: tgQuestions, title: "Questions", caption: "Who makes the decisions, how it is validated, and what this site is not." },
];

const dossier = [
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
  const scene = scenes[active];

  return (
    <section id="tumacay-group" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 operation-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Operation / Tumacay Group</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Tumacay <span className="text-gradient-red">Group.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            A 100% machine learning trading model, researched and developed by Ivan. It reads the data, produces a
            probability, sizes the position inside its own risk constraints and places the order itself. No
            discretion, no override.
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
                    alt={`TUMACAY GROUP — ${scene.title}`}
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
                    <ExternalLink className="h-4 w-4" /> Open Tumacay Group
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

        {/* THE BLINDFOLD */}
        <div className="mb-20 grid grid-cols-1 items-center gap-8 border-y border-border/60 py-12 lg:grid-cols-[1.4fr_1fr]">
          <blockquote className="text-3xl font-black leading-tight sm:text-5xl">
            The model wears the <span className="text-gradient-red">blindfold.</span> It never sees whose position it
            is closing.
          </blockquote>
          <div>
            <p className="case-label mb-4">
              <Scale className="h-3.5 w-3.5" /> The principle
            </p>
            <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
              Mathematics, statistics and probability decide every trade. Judgment goes into what to measure, how to
              test it and which constraints to impose, and stops the moment the model goes live.
            </p>
          </div>
        </div>

        {/* HOW IT IS BUILT */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">How the model is built</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">DATA → LIVE</span>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex h-full flex-col border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">STAGE {s.n}</span>
              </div>
              <h4 className="text-xl font-black leading-tight text-foreground">{s.name}</h4>
              <p className="mt-1 font-mono text-xs font-bold uppercase text-accent">{s.tagline}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.article>
          ))}
        </div>

        {/* QUANTGUAGE */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">Quantguage</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">TAP A CARD TO TURN IT</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`min-h-[170px] border bg-card/70 p-5 text-left transition-colors hover:bg-surface-hover ${
                  isOpen ? "border-primary/60 glow-red" : "border-border/70"
                }`}
              >
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
                        <p className="font-mono text-xs font-bold uppercase text-primary">{t.word}</p>
                        <p className="mt-2 font-semibold leading-relaxed text-foreground">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">{t.say}</p>
                        <p className="mt-2 text-3xl font-black leading-tight text-foreground">{t.word}</p>
                        <p className="mt-4 font-mono text-xs font-bold uppercase text-primary">Turn the card →</p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ExternalLink className="h-5 w-5" /> Visit Tumacay Group
          </a>
          <a
            href={`${SITE_URL}#process`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            See how it is built
          </a>
        </div>

        <p className="flex max-w-3xl items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Nothing here is an offer to sell or a solicitation to buy any security, and nothing here is investment
          advice. Ivan is not a licensed financial adviser. Trading carries risk — you can lose the entire capital you
          put in.
        </p>
      </div>
    </section>
  );
};

export default TumacayGroupSection;
