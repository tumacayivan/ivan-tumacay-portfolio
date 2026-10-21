import { useState } from "react";
import tgHero from "@/assets/tumacay-group/tg-01-hero.jpg";
import tgModel from "@/assets/tumacay-group/tg-02-model.jpg";
import tgCounsel from "@/assets/tumacay-group/tg-03-counsel.jpg";
import tgBlindfold from "@/assets/tumacay-group/tg-04-blindfold.jpg";
import tgProcess from "@/assets/tumacay-group/tg-05-process.jpg";
import tgQuantguage from "@/assets/tumacay-group/tg-06-quantguage.jpg";
import tgQuestions from "@/assets/tumacay-group/tg-07-questions.jpg";

const SITE_URL = "https://tumacay-group.onrender.com/";

// Scenes from the live site. Like the site, this block makes no performance
// claims, and nothing in it is investment advice.
const scenes = [
  { image: tgHero, title: "Quantitative trading", caption: "100% machine learning, no human intervention. It places every order itself." },
  { image: tgModel, title: "The model", caption: "Supervised learning, probability over prediction, statistical inference." },
  { image: tgCounsel, title: "The researcher", caption: "Researched and developed by Ivan. Judgment stops when the model goes live." },
  { image: tgBlindfold, title: "The blindfold", caption: "A gold Lady Justice you can drag to turn. It never sees whose position it is closing." },
  { image: tgProcess, title: "How it is built", caption: "Data, training, validation, live. Nothing goes live until the numbers allow it." },
  { image: tgQuantguage, title: "Quantguage", caption: "Flip cards for the words that decide the position." },
  { image: tgQuestions, title: "Questions", caption: "Who makes the decisions, how it is validated, and what the site is not." },
];

const stages = [
  { n: "01", name: "Data", line: "Captured, timestamped and reconciled before the model is allowed near it." },
  { n: "02", name: "Training", line: "Fitted from labelled history under regularisation and cross-validation." },
  { n: "03", name: "Validation", line: "Held-out data, walk-forward windows and full costs. Most candidates end here." },
  { n: "04", name: "Live", line: "Goes live at a fraction of target size and places its own orders." },
];

const terms = [
  { word: "Feature", meaning: "A measurable quantity derived from raw data that a model takes as input." },
  { word: "Overfitting", meaning: "A model that has learned the noise in its sample instead of the structure underneath it." },
  { word: "Out-of-sample", meaning: "Data withheld from training so the model is judged on something it has never seen." },
  { word: "Posterior", meaning: "The probability of something being true after the evidence is taken into account." },
  { word: "Alpha", meaning: "Return that cannot be explained by exposure to the market or any known risk factor." },
  { word: "Drawdown", meaning: "The decline from a peak in equity to the trough that follows, before any recovery." },
];

/**
 * TUMACAY GROUP — the machine learning trading model, as a block inside an
 * act: a scene viewer, the four stages, Quantguage cards and the disclaimer.
 */
const TumacayGroup = ({ kicker = "The model" }: { kicker?: string }) => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const scene = scenes[active];

  return (
    <div id="tumacay-group" className="mt-20 scroll-mt-24">
      <div className="max-w-[44rem] mb-10" data-reveal>
        <div className="q-label flex items-center gap-3 mb-4">
          <span className="text-[var(--q-bull)]">{kicker}</span>
          <span className="h-px w-10 bg-[var(--q-line)]" />
          <span>100% machine learning · no human override</span>
        </div>
        <h3 className="q-serif text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.95]">
          Tumacay <em className="italic text-[var(--q-amber)]">Group.</em>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-[var(--q-dim)]">
          A machine learning trading model researched and developed by Ivan. It reads the data, produces a probability,
          sizes the position inside its own risk constraints and places the order itself. No discretion, no override.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 mb-10" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block q-card p-2">
          <div className="flex items-center justify-between px-2 pb-2 q-label !text-[10px]">
            <span>
              Scene {String(active + 1).padStart(2, "0")} — {scene.title}
            </span>
            <span className="text-[var(--q-amber)] group-hover:translate-x-0.5 transition-transform">Open ↗</span>
          </div>
          <div className="q-shot aspect-[2.09/1]">
            <img key={active} src={scene.image} alt={`TUMACAY GROUP — ${scene.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </a>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--q-dim)] leading-relaxed">{scene.caption}</p>
          <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
            {scenes.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`Show scene ${i + 1}: ${s.title}`}
                className={`relative overflow-hidden border transition-all ${
                  i === active ? "border-[var(--q-amber)]" : "border-[var(--q-line)] opacity-55 hover:opacity-100"
                }`}
              >
                <img src={s.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                <span className="absolute top-0 left-0 q-mono text-[10px] px-1.5 bg-[var(--q-amber)] text-[var(--q-void)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="q-serif text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight max-w-[48rem] mb-10" data-reveal>
        The model wears the <em className="italic text-[var(--q-amber)]">blindfold.</em> It never sees whose position it
        is closing.
      </blockquote>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8" data-stagger>
        {stages.map((s) => (
          <li key={s.n} className="bg-[rgba(3,6,10,0.9)] p-5">
            <div className="q-mono text-[11px] text-[var(--q-bull)]">STAGE {s.n}</div>
            <div className="q-serif text-2xl mt-2 leading-tight">{s.name}</div>
            <p className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{s.line}</p>
          </li>
        ))}
      </ol>

      <div className="q-label mb-3">Quantguage · tap a card to turn it</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--q-line)] mb-8">
        {terms.map((t) => {
          const isOpen = flipped === t.word;
          return (
            <button
              key={t.word}
              type="button"
              onClick={() => setFlipped(isOpen ? null : t.word)}
              aria-expanded={isOpen}
              className="bg-[rgba(3,6,10,0.9)] p-5 text-left min-h-[120px] hover:bg-[rgba(3,6,10,0.75)] transition-colors"
            >
              {isOpen ? (
                <>
                  <div className="q-mono text-[11px] text-[var(--q-bull)] uppercase">{t.word}</div>
                  <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{t.meaning}</p>
                </>
              ) : (
                <>
                  <div className="q-serif text-2xl leading-tight">{t.word}</div>
                  <div className="q-mono text-[10px] text-[var(--q-amber)] mt-3 uppercase">Turn the card →</div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 mb-6" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="q-btn">
          Visit Tumacay Group ↗
        </a>
        <a href={`${SITE_URL}#process`} target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost">
          See how it is built
        </a>
      </div>
      <p className="q-card p-4 q-mono text-[10px] leading-relaxed text-[var(--q-dim)] max-w-3xl uppercase tracking-[0.1em]">
        Nothing here is an offer to sell or a solicitation to buy any security, and nothing here is investment advice.
        Ivan is not a licensed financial adviser. Trading carries risk — you can lose the entire capital you put in.
      </p>
    </div>
  );
};

export default TumacayGroup;
