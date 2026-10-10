import { useState } from "react";
import itaColdOpen from "@/assets/ivan-trading-academy/ita-01-cold-open.jpg";
import itaInvoice from "@/assets/ivan-trading-academy/ita-02-the-invoice.jpg";
import itaShift from "@/assets/ivan-trading-academy/ita-03-the-shift.jpg";
import itaModel from "@/assets/ivan-trading-academy/ita-04-model.jpg";
import itaNumbers from "@/assets/ivan-trading-academy/ita-05-numbers.jpg";
import itaLevels from "@/assets/ivan-trading-academy/ita-06-levels.jpg";
import itaDawn from "@/assets/ivan-trading-academy/ita-07-dawn.jpg";

const SITE_URL = "https://ivan-tumacay-trading.onrender.com/";

// Scenes from the live site. Like the site, this block makes no performance
// claims: it is an education programme, and the only money figure is tuition.
const scenes = [
  { image: itaColdOpen, title: "Cold open", caption: "Quantitative trading education built on data, maths and statistics." },
  { image: itaInvoice, title: "The invoice", caption: "₱134,000 paid to the market across every strategy he tried. He calls it tuition." },
  { image: itaShift, title: "The shift", caption: "December 2025: the hunt for the perfect setup ends and the systems work begins." },
  { image: itaModel, title: "How a model learns", caption: "Guess, measure the error, adjust a little — a generic example, not his model." },
  { image: itaNumbers, title: "The numbers", caption: "Expectancy over win rate. If it can't be measured, it's still a hunch." },
  { image: itaLevels, title: "The ladder", caption: "Four levels, manual to quantitative. Start where you actually stand." },
  { image: itaDawn, title: "Dawn", caption: "06:02. The system kept running. Same room, different trader." },
];

const levels = [
  { n: "01", name: "Manual", line: "How price moves, and how not to get burned." },
  { n: "02", name: "Semi-automated", line: "Indicators that help you read — and building your own." },
  { n: "03", name: "Fully automated", line: "A system that runs itself on a server." },
  { n: "04", name: "Quantitative", line: "Machine learning. A conversation first." },
];

/**
 * Ivan Tumacay Group Trading — the education programme, as a block inside an
 * act: a scene viewer, the four-level ladder and the disclaimer.
 */
const Academy = ({ kicker = "The academy" }: { kicker?: string }) => {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <div id="trading-academy" className="mt-20 scroll-mt-24">
      <div className="max-w-[44rem] mb-10" data-reveal>
        <div className="q-label flex items-center gap-3 mb-4">
          <span className="text-[var(--q-bull)]">{kicker}</span>
          <span className="h-px w-10 bg-[var(--q-line)]" />
          <span>Education only · zero income promises</span>
        </div>
        <h3 className="q-serif text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.95]">
          Ivan Tumacay Group <em className="italic text-[var(--q-amber)]">Trading.</em>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-[var(--q-dim)]">
          The lesson, turned into a programme. Quantitative trading built on data, mathematics and statistics — from
          complete beginner to a system you built yourself. No holy grail. Just a process you can repeat.
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
            <img key={active} src={scene.image} alt={`Ivan Tumacay Group Trading — ${scene.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
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

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8" data-stagger>
        {levels.map((l) => (
          <li key={l.n} className="bg-[rgba(3,6,10,0.9)] p-5">
            <div className="q-mono text-[11px] text-[var(--q-bull)]">LEVEL {l.n}</div>
            <div className="q-serif text-2xl mt-2 leading-tight">{l.name}</div>
            <p className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{l.line}</p>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap gap-3 mb-6" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="q-btn">
          Visit the academy ↗
        </a>
        <a href={`${SITE_URL}#levels`} target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost">
          See the four levels
        </a>
      </div>
      <p className="q-card p-4 q-mono text-[10px] leading-relaxed text-[var(--q-dim)] max-w-3xl uppercase tracking-[0.1em]">
        Education only. Ivan does not sell or offer investments, does not accept money to trade or manage on anyone's
        behalf, and does not give financial or investment advice. He is not a licensed financial adviser. Trading carries
        risk — you can lose the entire capital you put in.
      </p>
    </div>
  );
};

export default Academy;
