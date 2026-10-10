import { lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from "@/assets/quant/avatar.jpg";
import { acts, contacts, creativeRoles, dossier, education, method, rangeBuilds, roles, toolbelt, vaServices } from "./story";
import { workCount, workReels } from "./work";
import { useFilm } from "./useFilm";
import Hud from "./Hud";
import Academy from "./Academy";
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

/** Graphics and video work, by category, linking out to Drive and YouTube. */
const Reel = () => {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const reel = workReels[tab];
  const items = all ? reel.items : reel.items.slice(0, 12);
  const pick = (i: number) => {
    setTab(i);
    setAll(false);
  };
  // The grid changes height: let every scroll trigger below re-measure
  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => window.clearTimeout(id);
  }, [tab, all]);

  return (
    <div data-reveal>
      <div role="tablist" aria-label="Work categories" className="q-scroller flex gap-2 overflow-x-auto pb-3 mb-6 -mx-[var(--q-gutter)] px-[var(--q-gutter)]">
        {workReels.map((r, i) => (
          <button
            key={r.title}
            role="tab"
            aria-selected={i === tab}
            onClick={() => pick(i)}
            className={`shrink-0 q-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors ${
              i === tab ? "bg-[var(--q-amber)] text-[var(--q-void)] border-[var(--q-amber)]" : "border-[var(--q-line)] text-[var(--q-dim)] hover:text-[var(--q-ink)]"
            }`}
          >
            {r.title} <span className="opacity-60">· {r.items.length}</span>
          </button>
        ))}
      </div>
      <ul role="tabpanel" aria-label={reel.title} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((it) => (
          <li key={it.fileId}>
            <a href={it.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="q-shot aspect-video">
                <img
                  src={it.thumbnail}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.failed) return;
                    img.dataset.failed = "1";
                    img.src = it.source === "youtube" ? `https://img.youtube.com/vi/${it.fileId}/mqdefault.jpg` : `https://drive.google.com/thumbnail?id=${it.fileId}&sz=w800`;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {it.type === "video" && (
                  <span className="absolute left-2 bottom-2 q-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 bg-[rgba(3,6,10,0.8)] text-[var(--q-ink)]">
                    ▶ Play
                  </span>
                )}
              </div>
              <div className="mt-2 text-sm leading-tight group-hover:text-[var(--q-amber)] transition-colors">{it.title}</div>
            </a>
          </li>
        ))}
      </ul>
      {reel.items.length > 12 && (
        <button onClick={() => setAll((v) => !v)} className="q-btn q-btn--ghost mt-6">
          {all ? "Show fewer" : `Show all ${reel.items.length}`}
        </button>
      )}
    </div>
  );
};

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
                <span className="text-[var(--q-bull)]">03:14 AM in Cavite</span>
                <span className="h-px w-8 bg-[var(--q-line)]" />
                <span>Mid-afternoon in New York</span>
              </div>
              <h1 className="q-title !text-[clamp(4rem,14vw,13rem)]">
                <Split text="Ivan" />
                <br />
                <Split text="Tumacay" className="italic" />
              </h1>
              <p className="q-serif mt-6 text-[clamp(1.6rem,3.4vw,3rem)] leading-tight">
                Your <Em>remote right hand.</Em>
              </p>
              <p className="mt-5 max-w-xl text-lg sm:text-xl leading-relaxed text-[var(--q-dim)]">
                Virtual assistant and digital operations specialist. Admin, support, social, design, video and
                automation — run from a home office in the Philippines, on your hours.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#foundation" className="q-btn">
                  Roll the film ↓
                </a>
                <a href="#services" className="q-btn q-btn--ghost">
                  Skip to services
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

        {/* ============ ACT I — THE FOUNDATION ============ */}
        <Act i={1}>
          <Slate i={1} />
          <Lines
            lines={[
              <>Every good assistant does one thing well: <Em c="ice">pulls the signal out of the noise.</Em></>,
              <>It started with electronics and communications engineering — systems, signals, filters. Then a degree in information technology.</>,
              <>Engineering taught me structure. <Em>Structure is what you're really hiring.</Em></>,
            ]}
          />

          <div className="q-card p-6 sm:p-8" data-reveal>
            <div className="flex items-start gap-5 mb-7">
              <div className="q-shot w-20 h-24 shrink-0">
                <img src={avatar} alt="Ivan Tumacay" className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125" />
              </div>
              <div>
                <div className="q-label mb-1">Your assistant</div>
                <div className="q-serif text-3xl leading-none">Mac Neil Ivan Tumacay</div>
                <div className="q-mono text-xs text-[var(--q-dim)] mt-2">Filipino · Virtual assistant · Engineer</div>
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

        {/* ============ ACT II — THE SYSTEMS ============ */}
        <Act i={2} side="right">
          <Slate i={2} />
          <Lines
            lines={[
              <>2019. Five years inside <Em c="ice">real business operations.</Em></>,
              <>Construction, education, pharmaceuticals, payments, manufacturing. CRMs, databases, inventory, the internal tools teams live in every day.</>,
              <>So when you hand me your systems, <Em c="amber">I already speak their language.</Em></>,
            ]}
          />

          <div className="grid grid-cols-3 gap-px bg-[var(--q-line)] mb-10" data-stagger>
            {[
              ["~10", "years experience"],
              ["15", "service lines"],
              [String(workCount), "work samples"],
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
        </Act>

        {/* ============ ACT III — THE CRAFT ============ */}
        <Act i={3}>
          <Slate i={3} />
          <Lines
            lines={[
              <>Post after post. <Em>Frame after frame.</Em></>,
              <>Designing, editing, scheduling and moderating for a church with a worldwide audience, a creative studio, agencies and independent creators.</>,
              <>Content that ships <Em c="amber">on time, on brand, every time.</Em></>,
            ]}
          />
          <ol className="space-y-px mb-10" data-stagger>
            {creativeRoles.map((r) => (
              <li key={r.company} className="q-card p-5">
                <div className="text-lg leading-snug">{r.company}</div>
                <div className="q-mono text-xs text-[var(--q-bull)] mt-1">{r.role}</div>
                <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{r.note}</p>
              </li>
            ))}
          </ol>
          <div className="q-card p-6 sm:p-8" data-reveal>
            <div className="q-label mb-5">House rules · taped to the monitor</div>
            <ol className="space-y-4" data-stagger>
              {[
                ["Your hours are my hours.", "I work in your time zone, not mine."],
                ["Over-communicate.", "You never have to ask where something is."],
                ["Document everything.", "Every process written down, so nothing lives in one head."],
                ["Automate the repeatable.", "If I do it three times, it becomes a workflow."],
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

        {/* ============ ACT IV — THE METHOD ============ */}
        <Act i={4} side="right">
          <Slate i={4} />
          <Lines
            lines={[
              <>Busy doesn't scale. <Em>Systems do.</Em></>,
              <>Every engagement runs on the same loop — brief, plan, execute, report — and anything repeatable gets <Em c="ice">automated with Zapier, Make, n8n and AI agents.</Em></>,
              <>You get your time back. And you can see exactly where it went.</>,
            ]}
          />

          {/* The method, left to right */}
          <div className="q-card p-5 sm:p-6 mb-6" data-reveal>
            <div className="q-label mb-4">How the work runs</div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-[var(--q-line)]" />
              <span className="q-pipeline-dot absolute top-[4px] w-[7px] h-[7px] rounded-full bg-[var(--q-amber)] shadow-[0_0_12px_var(--q-amber)]" />
              <ol className="relative grid grid-cols-3 sm:grid-cols-6 gap-y-5">
                {method.map((m) => (
                  <li key={m.k} className="pr-2">
                    <span className="block w-[15px] h-[15px] border border-[var(--q-bull)] bg-[var(--q-void)] rotate-45 mb-3" />
                    <span className="q-mono text-[11px] uppercase tracking-[0.14em]">{m.k}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <dl className="grid sm:grid-cols-2 gap-px bg-[var(--q-line)]" data-stagger>
            {method.map((m) => (
              <div key={m.k} className="bg-[rgba(3,6,10,0.9)] p-5">
                <dt className="q-mono text-xs text-[var(--q-bull)] uppercase tracking-[0.16em]">{m.k}</dt>
                <dd className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{m.v}</dd>
              </div>
            ))}
          </dl>
        </Act>

        {/* ============ ACT V — THE SERVICES ============ */}
        <Act i={5} wide>
          <div className="max-w-[44rem]">
            <Slate i={5} />
            <Lines
              lines={[
                <><Em c="amber">Fifteen</Em> things you can stop doing yourself.</>,
                <>From the inbox to the edit bay to the books — pick one, or hand over the whole back office.</>,
              ]}
            />
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--q-line)] mb-12" data-stagger>
            {vaServices.map((s, i) => (
              <li key={s.title} className="bg-[rgba(3,6,10,0.88)] backdrop-blur p-5 sm:p-6">
                <div className="q-mono text-[11px] text-[var(--q-faint)]">{String(i + 1).padStart(2, "0")}</div>
                <div className="q-serif text-2xl mt-3 leading-tight">{s.title}</div>
                <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{s.blurb}</p>
                <details className="mt-3 group">
                  <summary className="cursor-pointer list-none q-mono text-[11px] uppercase tracking-[0.14em] text-[var(--q-bull)] hover:text-[var(--q-amber)]">
                    <span className="group-open:hidden">+ {s.tasks.length} tasks</span>
                    <span className="hidden group-open:inline">− Hide tasks</span>
                  </summary>
                  <ul className="mt-3 space-y-1.5">
                    {s.tasks.map((t) => (
                      <li key={t} className="text-sm text-[var(--q-ink)] flex gap-2">
                        <span className="text-[var(--q-bull)]">›</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </details>
                {s.tools && <div className="q-mono text-[11px] text-[var(--q-faint)] mt-3">{s.tools}</div>}
              </li>
            ))}
          </ul>

          <div className="q-card p-6 sm:p-8" data-reveal>
            <div className="q-label mb-5">The toolbelt</div>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
              {toolbelt.map((t) => (
                <div key={t.k}>
                  <dt className="q-mono text-[11px] uppercase tracking-[0.14em] text-[var(--q-bull)]">{t.k}</dt>
                  <dd className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{t.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Act>

        {/* ============ ACT VI — THE REEL ============ */}
        <Act i={6} wide>
          <div className="max-w-[44rem]">
            <Slate i={6} />
            <Lines
              lines={[
                <>Don't take my word for it. <Em>Take the reel.</Em></>,
                <>{workCount} pieces of real client work — graphics, AI video, reels, documentary, DTC ads, motion graphics, captions and long-form podcasts.</>,
              ]}
            />
          </div>
          <Reel />
        </Act>

        {/* ============ ACT VII — THE RANGE ============ */}
        <Act i={7} wide>
          <div className="max-w-[44rem]">
            <Slate i={7} />
            <Lines
              lines={[
                <>And when the job needs <Em c="dawn">a website,</Em> you don't need a second hire.</>,
                <>Stores, corporate sites, booking systems, campaigns — built, updated and maintained. The technical VA, end to end.</>,
              ]}
            />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4" data-stagger>
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
          <Academy kicker="Also built by Ivan" />
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
                  <>06:02 in Cavite. The end of your business day.</>,
                  <>Inbox at zero. Posts scheduled. Tickets closed. Report sent. <Em c="dawn">You slept through all of it.</Em></>,
                  <>Your move.</>,
                ]}
              />
            </div>

            <div className="mt-[30vh] max-w-6xl mx-auto">
              <h2 className="q-title text-center mb-12">
                <Split text="Hand it" />
                <br />
                <Split text="off." className="italic text-[var(--q-dawn)]" />
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
                  ["Admin, support & operations", "Ivan Tumacay"],
                  ["Social, design & video", "Ivan Tumacay"],
                  ["Toolbelt", "Asana · ClickUp · Notion · Trello · Zendesk · HubSpot · Canva · Photoshop · Premiere Pro · After Effects · CapCut · Zapier · Make · n8n · QuickBooks · Xero · Shopify · WordPress"],
                  ["Filmed on location", "Cavite, Philippines · UTC+8 · working your time zone"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="q-label !text-[10px]">{k}</div>
                    <div className="q-serif text-2xl sm:text-3xl mt-2 max-w-3xl mx-auto">{v}</div>
                  </div>
                ))}
                <p className="q-mono text-[10px] leading-relaxed text-[var(--q-faint)] max-w-xl mx-auto uppercase tracking-[0.12em]">
                  Dashboards shown in the scenes are illustrative. © {new Date().getFullYear()} Ivan Tumacay.
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
