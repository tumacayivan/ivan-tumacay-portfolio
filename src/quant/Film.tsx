import { lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import avatar from "@/assets/quant/avatar.jpg";
import {
  acts,
  contacts,
  creativeRoles,
  deskBuilds,
  dossier,
  education,
  itbExhibits,
  itbFeatures,
  ITB_URL,
  modelStack,
  rangeBuilds,
  roles,
  services,
} from "./story";
import { useFilm } from "./useFilm";
import Hud from "./Hud";
import Academy from "./Academy";
import TumacayGroup from "./TumacayGroup";
import "./quant.css";

const World = lazy(() => import("./world/World"));

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

/** A headline that rises word by word. */
const Split = ({ text, className = "" }: { text: string; className?: string }) => (
  <span data-split className={className}>
    <span className="sr-only">{text}</span>
    <span aria-hidden>
      {text.split(" ").map((w, i) => (
        <span key={i} className="q-word">
          <span>{w}&nbsp;</span>
        </span>
      ))}
    </span>
  </span>
);

const Slate = ({ i }: { i: number }) => {
  const a = acts[i];
  return (
    <header className="mb-14 sm:mb-20">
      <div className="q-label flex items-center gap-3 mb-5" data-reveal>
        <span className="text-[var(--q-bull)]">{a.act}</span>
        <span className="h-px w-10 bg-[var(--q-line)]" />
        <span>{a.time}</span>
        <span className="hidden sm:inline">· {a.where}</span>
      </div>
      <h2 className="q-title" data-slate>
        <Split text={a.title} />
      </h2>
    </header>
  );
};

/** Narration: big serif lines, revealed one at a time. */
const Lines = ({ lines }: { lines: ReactNode[] }) => (
  <div className="space-y-7 sm:space-y-9 mb-16">
    {lines.map((c, i) => (
      <p key={i} className="q-line-text text-[var(--q-ink)]" data-reveal>
        {c}
      </p>
    ))}
  </div>
);

const Em = ({ children, c = "bull" }: { children: ReactNode; c?: "bull" | "amber" | "ice" | "dawn" }) => (
  <em className="italic" style={{ color: `var(--q-${c})` }}>
    {children}
  </em>
);

const Act = ({
  i,
  side = "left",
  wide = false,
  children,
  className = "",
}: {
  i: number;
  side?: "left" | "right";
  wide?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <section id={acts[i].id} data-act={i} className={`q-act ${className}`} aria-label={`${acts[i].act}: ${acts[i].title}`}>
    <div aria-hidden className={`absolute inset-0 pointer-events-none ${side === "left" ? "q-scrim-left" : "q-scrim-right"}`} />
    <div className="q-gutter relative">
      <div className={wide ? "max-w-7xl mx-auto" : `max-w-[44rem] ${side === "right" ? "lg:ml-auto lg:mr-[6vw]" : "lg:ml-[2vw]"}`}>{children}</div>
    </div>
  </section>
);

const Shot = ({ src, alt, ratio = "aspect-[2.09/1]" }: { src: string; alt: string; ratio?: string }) => (
  <div className={`q-shot ${ratio}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
  </div>
);

/* ------------------------------------------------------------------ */
/* The film                                                            */
/* ------------------------------------------------------------------ */

const Film = () => {
  const root = useRef<HTMLDivElement>(null);
  const [act, setAct] = useState(0);
  const onAct = useCallback((i: number) => setAct(i), []);
  useFilm(root, onAct);

  // Defer WebGL until the page has painted, so the copy is never waiting on it
  const [world, setWorld] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setWorld(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={root} className="q-root">
      {world && (
        <Suspense fallback={null}>
          <World />
        </Suspense>
      )}
      <Hud act={act} />

      <main>
        {/* ============ COLD OPEN ============ */}
        <section id="cold-open" data-act={0} data-hero className="relative z-10 h-[260vh]" aria-label="Cold open">
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            <div aria-hidden className="absolute inset-0 q-scrim-left pointer-events-none" />
            <div data-hero-copy className="q-gutter relative h-full flex flex-col justify-center pt-[var(--q-bar)] pb-[var(--q-bar)]">
              <div className="q-label mb-6 flex flex-wrap items-center gap-3">
                <span className="text-[var(--q-bull)]">03:14 AM</span>
                <span className="h-px w-8 bg-[var(--q-line)]" />
                <span>A bedroom in Cavite, Philippines</span>
              </div>
              <h1 className="q-title !text-[clamp(4rem,14vw,13rem)]">
                <Split text="Ivan" />
                <br />
                <Split text="Tumacay" className="italic" />
              </h1>
              <p className="q-serif mt-6 text-[clamp(1.6rem,3.4vw,3rem)] leading-tight">
                The <Em>Bedroom Quant.</Em>
              </p>
              <p className="mt-5 max-w-xl text-lg sm:text-xl leading-relaxed text-[var(--q-dim)]">
                Software engineer by day. Quantitative trader by night. He built the machine that keeps trading
                while he sleeps — and this is how.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#origin" className="q-btn">
                  Roll the film ↓
                </a>
                <a href="#machine" className="q-btn q-btn--ghost">
                  Skip to the machine
                </a>
              </div>
            </div>
            <div
              data-hero-cue
              className="absolute inset-x-0 top-[58%] text-center q-mono text-xs sm:text-sm uppercase text-[var(--q-bull)] pointer-events-none opacity-0"
            >
              Follow the line
            </div>
          </div>
        </section>

        {/* ============ ACT I — THE SIGNAL ============ */}
        <Act i={1}>
          <Slate i={1} />
          <Lines
              lines={[
              <>Before markets, there were <Em c="ice">signals.</Em></>,
              <>Electronics and communications engineering: sine waves, noise, filters — the maths of pulling what matters out of what doesn't.</>,
              <>Two schools of ECE, then a turn to information technology. <Em c="ice">Hardware to software. Signal to code.</Em></>,
              <>He didn't know it yet, but a price chart is just <Em>another noisy signal.</Em></>,
            ]}
            />

          <div className="q-card p-6 sm:p-8" data-reveal>
            <div className="flex items-start gap-5 mb-7">
              <div className="q-shot w-20 h-24 shrink-0">
                <img src={avatar} alt="Ivan Tumacay" className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125" />
              </div>
              <div>
                <div className="q-label mb-1">Subject</div>
                <div className="q-serif text-3xl leading-none">Mac Neil Ivan Tumacay</div>
                <div className="q-mono text-xs text-[var(--q-dim)] mt-2">Filipino · Engineer · Trader</div>
              </div>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 mb-8" data-stagger>
              {dossier.map(([k, v]) => (
                <div key={k}>
                  <dt className="q-label !text-[10px]">{k}</dt>
                  <dd className="q-mono text-sm mt-1">{v}</dd>
                </div>
              ))}
            </dl>
            <ol className="relative border-l border-[var(--q-line)] ml-1" data-stagger>
              {education.map((e) => (
                <li key={e.school} className="pl-6 pb-6 last:pb-0 relative">
                  <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[var(--q-ice)]" />
                  <div className="q-mono text-xs text-[var(--q-ice)]">{e.years}</div>
                  <div className="text-base mt-1">{e.school}</div>
                  <div className="text-sm text-[var(--q-dim)]">{e.degree}</div>
                </li>
              ))}
            </ol>
          </div>
        </Act>

        {/* ============ ACT II — THE STACK ============ */}
        <Act i={2} side="right">
          <Slate i={2} />
          <Lines
              lines={[
              <>2019. The first <Em c="ice">production systems.</Em></>,
              <>Construction, education, pharmaceuticals, manufacturing, holdings. APIs, databases, deployments — the plumbing businesses run on.</>,
              <>Then digital payments. Secure APIs moving real money. <Em c="amber">That's where money first became data.</Em></>,
            ]}
            />

          <div className="grid grid-cols-3 gap-px bg-[var(--q-line)] mb-10" data-stagger>
            {[
              ["10+", "years freelance"],
              ["5", "years corporate"],
              ["42", "projects shipped"],
            ].map(([n, l]) => (
              <div key={l} className="bg-[var(--q-void)] p-4 sm:p-6">
                <div className="q-serif text-5xl sm:text-6xl leading-none">{n}</div>
                <div className="q-label !text-[10px] mt-2">{l}</div>
              </div>
            ))}
          </div>

          <ol className="space-y-px" data-stagger>
            {roles.map((r) => (
              <li
                key={r.company}
                className={`q-card p-5 grid sm:grid-cols-[120px_1fr] gap-x-6 gap-y-1 ${r.key ? "!border-[var(--q-amber)]/50" : ""}`}
              >
                <div className={`q-mono text-xs pt-1 ${r.key ? "text-[var(--q-amber)]" : "text-[var(--q-ice)]"}`}>{r.years}</div>
                <div>
                  <div className="text-lg leading-snug">{r.company}</div>
                  <div className="q-mono text-xs text-[var(--q-dim)] mt-1">{r.role}</div>
                  <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{r.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10" data-reveal>
            <div className="q-label mb-3">Before the code, the craft</div>
            <ul className="flex flex-wrap gap-2">
              {creativeRoles.map((c) => (
                <li key={c} className="q-mono text-xs px-3 py-2 border border-[var(--q-line)] text-[var(--q-dim)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Act>

        {/* ============ ACT III — AFTER HOURS ============ */}
        <Act i={3}>
          <Slate i={3} />
          <Lines
              lines={[
              <>The day job ended at six. <Em>The second shift started at eleven.</Em></>,
              <>A bedroom. A desk. Screens with charts that never close.</>,
              <>Bar after bar after bar — until the candles stopped looking like noise and started looking like <Em c="amber">data he could test.</Em></>,
            ]}
            />
          <div className="q-card p-6 sm:p-8" data-reveal>
            <div className="q-label mb-5">House rules · taped to the monitor</div>
            <ol className="space-y-4" data-stagger>
              {[
                ["No edge, no trade.", "If it can't be measured, it doesn't get capital."],
                ["Risk first.", "Size the loss before you dream about the win."],
                ["Test it or forget it.", "Every idea earns its way through the back-test."],
                ["Automate the discipline.", "Code doesn't get tired at 3am. People do."],
              ].map(([h, b], i) => (
                <li key={h} className="grid grid-cols-[36px_1fr] gap-3">
                  <span className="q-mono text-sm text-[var(--q-bull)]">0{i + 1}</span>
                  <div>
                    <div className="q-serif text-2xl leading-tight">{h}</div>
                    <div className="text-sm text-[var(--q-dim)] mt-1">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Act>

        {/* ============ ACT IV — THE MODEL ============ */}
        <Act i={4} side="right">
          <Slate i={4} />
          <Lines
              lines={[
              <>Discretion doesn't scale. <Em>Models do.</Em></>,
              <>So the engineer and the trader merged into one seat: data pipelines, features, <Em c="ice">machine learning and neural networks</Em> hunting for structure in the noise.</>,
              <>Nothing touches real money until it survives the back-test.</>,
            ]}
            />

          {/* The pipeline, left to right */}
          <div className="q-card p-5 sm:p-6 mb-6" data-reveal>
            <div className="q-label mb-4">Pipeline</div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-[var(--q-line)]" />
              <span className="q-pipeline-dot absolute top-[4px] w-[7px] h-[7px] rounded-full bg-[var(--q-amber)] shadow-[0_0_12px_var(--q-amber)]" />
              <ol className="relative grid grid-cols-3 sm:grid-cols-6 gap-y-5">
                {modelStack.map((m) => (
                  <li key={m.k} className="pr-2">
                    <span className="block w-[15px] h-[15px] border border-[var(--q-bull)] bg-[var(--q-void)] rotate-45 mb-3" />
                    <span className="q-mono text-[11px] uppercase tracking-[0.14em]">{m.k}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <dl className="grid sm:grid-cols-2 gap-px bg-[var(--q-line)]" data-stagger>
            {modelStack.map((m) => (
              <div key={m.k} className="bg-[rgba(3,6,10,0.9)] p-5">
                <dt className="q-mono text-xs text-[var(--q-bull)] uppercase tracking-[0.16em]">{m.k}</dt>
                <dd className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{m.v}</dd>
              </div>
            ))}
          </dl>
          <a href="https://ivan-quant-model-engine-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost mt-8" data-reveal>
            Open the Quant Model Engine ↗
          </a>
        </Act>

        {/* ============ ACT V — THE MACHINE ============ */}
        <Act i={5} wide>
          <div className="max-w-[44rem]">
            <Slate i={5} />
            <Lines
              lines={[
                <><Em c="amber">ITB-001.</Em> Ivan Trading Bots.</>,
                <>A proprietary algorithmic trading system with a live command terminal that audits every trade for <Em>performance and risk.</Em></>,
                <>Researched, engineered and run from that bedroom desk.</>,
              ]}
            />
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-12" data-stagger>
            {itbFeatures.map((f, i) => (
              <li key={f.title} className="bg-[rgba(3,6,10,0.88)] backdrop-blur p-5 sm:p-6">
                <div className="q-mono text-[11px] text-[var(--q-faint)]">0{i + 1}</div>
                <div className="q-serif text-2xl mt-3 leading-tight">{f.title}</div>
                <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{f.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between gap-4 mb-4" data-reveal>
            <div className="q-label">Terminal footage · 7 screens</div>
            <div className="q-label !text-[10px] hidden sm:block">Account, broker & host details redacted</div>
          </div>
          <div className="q-scroller flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-[var(--q-gutter)] px-[var(--q-gutter)]" data-stagger>
            {itbExhibits.map((e) => (
              <figure key={e.title} className="snap-start shrink-0 w-[82vw] sm:w-[520px]">
                <Shot src={e.image} alt={`Ivan Trading Bots terminal — ${e.title}`} />
                <figcaption className="q-mono text-xs text-[var(--q-dim)] mt-2 uppercase tracking-[0.14em]">{e.title}</figcaption>
              </figure>
            ))}
          </div>
          <a href={ITB_URL} target="_blank" rel="noopener noreferrer" className="q-btn mt-8" data-reveal>
            Open the terminal ↗
          </a>
        </Act>

        {/* ============ ACT VI — THE DESK ============ */}
        <Act i={6} wide>
          <div className="max-w-[44rem]">
            <Slate i={6} />
            <Lines
              lines={[
                <>One bot became <Em>a desk.</Em></>,
                <>A trading arm for the Ivan Tumacay Group. A quant model engine. Market analytics for traders and a community around it. A swarm of AI agents — and the compute to run them.</>,
              ]}
            />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
            {deskBuilds.map((b) => (
              <li key={b.name}>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className="group block q-card p-3">
                  <Shot src={b.image} alt={`${b.name} website`} />
                  <div className="flex items-start justify-between gap-3 px-2 pt-4 pb-2">
                    <div>
                      <div className="q-serif text-2xl leading-tight">{b.name}</div>
                      <div className="text-sm text-[var(--q-dim)] mt-1">{b.tag}</div>
                    </div>
                    <span className="q-mono text-[var(--q-amber)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <Academy />
          <TumacayGroup />
        </Act>

        {/* ============ ACT VII — THE RANGE ============ */}
        <Act i={7} wide>
          <div className="max-w-[44rem]">
            <Slate i={7} />
            <Lines
              lines={[
                <>The same hands ship <Em c="dawn">everything else.</Em></>,
                <>Pearls and pickup trucks. Surf schools and campaigns. Builders, wallets, cafés. Full-stack, end to end, live.</>,
              ]}
            />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mb-14" data-stagger>
            {rangeBuilds.map((b) => (
              <li key={b.name}>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <Shot src={b.image} alt={`${b.name} website`} ratio="aspect-[16/10]" />
                  <div className="mt-2 text-sm leading-tight group-hover:text-[var(--q-amber)] transition-colors">{b.name}</div>
                  <div className="q-mono text-[10px] uppercase tracking-[0.12em] text-[var(--q-faint)] mt-0.5">{b.tag}</div>
                </a>
              </li>
            ))}
          </ul>
          <div className="q-card p-6 sm:p-8 max-w-4xl" data-reveal>
            <div className="q-label mb-4">What he can run for you</div>
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s} className="q-serif text-xl sm:text-2xl px-4 py-1.5 border border-[var(--q-line)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Act>

        {/* ============ FINAL CUT — DAWN ============ */}
        <section id="dawn" data-act={8} className="q-act relative min-h-[170vh]" aria-label="Final cut: Dawn">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(3,6,10,0) 0%, rgba(3,6,10,0.25) 45%, rgba(3,6,10,0.7) 90%)" }}
          />
          <div className="q-gutter relative">
            <div className="max-w-[44rem] lg:ml-[2vw]">
              <Slate i={8} />
              <Lines
              lines={[
                  <>06:02. The sun's coming up over Cavite.</>,
                  <>The bot never closed its eyes. <Em c="dawn">Same bedroom. Different man.</Em></>,
                  <>Your move.</>,
                ]}
            />
            </div>

            <div className="mt-[30vh] max-w-6xl mx-auto">
              <h2 className="q-title text-center mb-12">
                <Split text="Open a" />
                <br />
                <Split text="conversation." className="italic text-[var(--q-dawn)]" />
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--q-line)] mb-16" data-stagger>
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block bg-[rgba(3,6,10,0.92)] p-5 h-full hover:bg-[rgba(255,154,90,0.08)] transition-colors"
                    >
                      <div className="q-label !text-[10px]">{c.label}</div>
                      <div className="q-mono text-sm mt-2 break-all">{c.value}</div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* End credits */}
              <div className="text-center space-y-8 pb-[calc(var(--q-bar)+40px)]" data-stagger>
                {[
                  ["Written & directed by", "Ivan Tumacay"],
                  ["Research, engineering & execution", "Ivan Tumacay"],
                  ["Stack", "React · TypeScript · Node.js · Laravel · Vue · Angular · Python · Django · Flask · Spring Boot · Firebase · n8n · Make.com · Zapier"],
                  ["Filmed on location", "Cavite, Philippines · UTC+8 · remote worldwide"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="q-label !text-[10px]">{k}</div>
                    <div className="q-serif text-2xl sm:text-3xl mt-2 max-w-3xl mx-auto">{v}</div>
                  </div>
                ))}
                <p className="q-mono text-[10px] leading-relaxed text-[var(--q-faint)] max-w-xl mx-auto uppercase tracking-[0.12em]">
                  Charts and figures in the scenes are simulated. Trading involves substantial risk of loss. Nothing on
                  this site is financial advice. © {new Date().getFullYear()} Ivan Tumacay.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Film;
