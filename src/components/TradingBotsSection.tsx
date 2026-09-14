import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Activity,
  LineChart,
  ShieldAlert,
  Wallet,
  PieChart,
  CloudDownload,
  Clock,
  Share2,
  Lock,
  KeyRound,
  ShieldCheck,
  FileWarning,
} from "lucide-react";
import ivanTradingBots from "@/assets/ivan-trading-bots-website.png";

const SITE_URL = "https://ivan-trading-bots.onrender.com/";
const CLEARANCE_KEY = "itb-clearance";

// Figures from a stored snapshot of the demo account shown in the screenshot.
const snapshotStats = [
  { label: "Net Profit", value: "$1,715.04", note: "Gross $1,734.23 · Loss −$19.19", up: true },
  { label: "Expectancy", value: "$142.92", note: "Average per closed trade", up: true },
  { label: "Closed Trades", value: "12", note: "3 active days" },
  { label: "Equity", value: "$2,715.04", note: "No margin in use" },
];

const capabilities = [
  { icon: Activity, title: "Live Account State", body: "Equity, balance, floating P&L, free margin and open exposure streamed live from the trading terminal." },
  { icon: LineChart, title: "Track Record", body: "Realised net, win rate, expectancy, profit factor, profitable days and a period-by-period breakdown." },
  { icon: ShieldAlert, title: "Risk Analytics", body: "Max drawdown, recovery factor, annualised Sharpe and average hold time behind every result." },
  { icon: Wallet, title: "Funding Ledger", body: "Deposits, withdrawals and index-CFD dividends split out so trading results are never inflated by cash moves." },
  { icon: PieChart, title: "Symbol Attribution", body: "Sources of profit and loss charted per instrument, filterable across every traded symbol." },
  { icon: CloudDownload, title: "Cloud Sync Snapshots", body: "When the terminal is offline, the last synced account is served from storage so the record stays viewable." },
  { icon: Clock, title: "Periods & Timezones", body: "1D to YTD presets, custom ranges, 13 market timezones and currency switching." },
  { icon: Share2, title: "Share & Report", body: "One-click share link, QR code and a generated PDF performance report." },
];

const stack = ["Algorithmic Execution", "Real-Time Analytics", "Cloud Sync", "PDF Reporting"];

const fileMarkings = [
  { label: "Classification", value: "TOP SECRET" },
  { label: "Clearance", value: "LEVEL 5" },
  { label: "Handling", value: "EYES ONLY" },
  { label: "File No.", value: "ITB-001" },
  { label: "Status", value: "ACTIVE OPERATION" },
];

type Clearance = "locked" | "verifying" | "cleared";

const readClearance = (): Clearance => {
  try {
    return sessionStorage.getItem(CLEARANCE_KEY) === "cleared" ? "cleared" : "locked";
  } catch {
    return "locked";
  }
};

const ClassificationBanner = () => (
  <div className="relative z-10">
    <div className="diag-stripes h-1.5" />
    <div className="bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] border-y border-[hsl(var(--accent-red-deep))] shadow-[0_0_28px_hsl(var(--accent-red)/0.45)]">
      <div className="px-4 py-1.5 flex items-center justify-center gap-3 font-blackops text-[13px] sm:text-[16px] tracking-[0.28em] sm:tracking-[0.4em] text-center">
        <Lock className="w-3.5 h-3.5 shrink-0" />
        <span>TOP SECRET // EYES ONLY<span className="hidden sm:inline"> // NO UNAUTHORISED DISCLOSURE</span></span>
        <Lock className="w-3.5 h-3.5 shrink-0" />
      </div>
    </div>
    <div className="diag-stripes h-1.5" />
  </div>
);

const Redactable = ({ cleared, children }: { cleared: boolean; children: ReactNode }) => (
  <span
    className={
      cleared
        ? "font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4 transition-colors duration-700"
        : "redacted transition-colors duration-700"
    }
  >
    {children}
  </span>
);

const TradingBotsSection = () => {
  const [clearance, setClearance] = useState<Clearance>(readClearance);
  const contentRef = useRef<HTMLDivElement>(null);
  const cleared = clearance === "cleared";

  useEffect(() => {
    if (clearance !== "verifying") return;
    const id = setTimeout(() => {
      setClearance("cleared");
      try {
        sessionStorage.setItem(CLEARANCE_KEY, "cleared");
      } catch {
        /* storage unavailable — clearance lasts for this view only */
      }
    }, 1600);
    return () => clearTimeout(id);
  }, [clearance]);

  // Keep the sealed file out of the tab order until it is declassified.
  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !cleared;
  }, [cleared]);

  const seal = () => {
    setClearance("locked");
    try {
      sessionStorage.removeItem(CLEARANCE_KEY);
    } catch {
      /* ignore */
    }
    document.getElementById("trading-bots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="trading-bots"
      className="dark relative overflow-hidden bg-[hsl(var(--paper))] text-[hsl(var(--ink-charcoal))]"
      style={{ backgroundImage: "var(--noise-body), var(--body-gradient)" }}
    >
      <ClassificationBanner />

      <div className="relative py-16 sm:py-24 paper-grain">
        <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_30%,var(--wash-red)_0%,transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-start overflow-hidden">
          <div className="watermark text-[17vw] leading-none rotate-[-6deg] -ml-10">TOP SECRET</div>
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 2.2, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="hidden lg:flex !absolute right-0 top-2 stamp !text-5xl !px-6 !py-3 z-10"
            >
              TOP SECRET
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="section-eyebrow">
                <FileWarning className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                CLASSIFIED FILE // CLEARANCE LEVEL 5
              </div>
              <span className="inline-flex items-center gap-1.5 bg-[hsl(var(--accent-red))] text-[hsl(var(--on-red))] font-blackops text-[12px] tracking-[0.3em] px-2.5 py-1 glow-red">
                <Lock className="w-3 h-3" /> HIGHLY CLASSIFIED
              </span>
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              Researched and developed by Ivan Tumacay
            </p>
            <h2 className="display-title text-6xl sm:text-8xl md:text-9xl uppercase">
              IVAN <span className="accent">TRADING</span> BOTS
            </h2>

            {/* File markings */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[hsl(var(--accent-red)/0.6)] max-w-5xl">
              {fileMarkings.map((m) => (
                <div
                  key={m.label}
                  className="px-3 py-2 border-b border-r border-[hsl(var(--accent-red)/0.3)] bg-[hsl(var(--surface-1)/0.8)]"
                >
                  <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">{m.label}</div>
                  <div className="font-blackops text-lg tracking-[0.14em] text-[hsl(var(--accent-red))] leading-tight">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 paper-card-cream p-5 max-w-3xl relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper))]">INTELLIGENCE BRIEF</div>
              <p className="font-typewriter text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-1">
                A proprietary <Redactable cleared={cleared}>algorithmic trading</Redactable> system with a live command
                terminal that audits every trade for <Redactable cleared={cleared}>performance and risk</Redactable>.
              </p>
            </div>
          </motion.div>

          {/* SEALED FILE */}
          <div className="relative">
            <div
              ref={contentRef}
              aria-hidden={!cleared}
              className={`transition-[filter,max-height] duration-700 ${
                cleared ? "" : "max-h-[620px] sm:max-h-[720px] overflow-hidden blur-[7px] grayscale select-none pointer-events-none"
              }`}
            >
              {/* EXHIBIT */}
              <div className="flex flex-col gap-10 mb-14">
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
                  <div className="tape w-20 h-5 -top-2.5 left-10 rotate-[-4deg] z-20" />
                  <div className="tape tape-clear w-14 h-4 -top-2 right-14 rotate-[5deg] z-20" />

                  <div className="relative bg-[hsl(0_0%_4%)] border-2 border-[hsl(var(--accent-red))] glow-red transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[hsl(var(--accent-red)/0.5)] bg-[hsl(0_0%_7%)]">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(358_79%_51%)]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(42_95%_52%)]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_70%_45%)]" />
                      </div>
                      <span className="font-courier text-[11px] tracking-[0.2em] text-[hsl(40_12%_70%)] truncate">
                        EXHIBIT A // SURVEILLANCE CAPTURE
                      </span>
                      <span className="hidden sm:flex items-center font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] shrink-0">
                        <span className="status-pulse" /> REC
                      </span>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={ivanTradingBots}
                        alt="Ivan Trading Bots analytics terminal showing account equity, net profit and expectancy"
                        className="w-full aspect-[1912/898] object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                      />
                      <div className="scan-bar" />

                      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
                      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
                      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

                      <div className="absolute inset-0 bg-[hsl(0_0%_3%/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                        <div className="w-16 h-16 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.18)] glow-red">
                          <ExternalLink className="w-6 h-6 text-[hsl(var(--accent-red))]" />
                        </div>
                        <span className="font-blackops text-base text-[hsl(40_22%_94%)] tracking-[0.28em] uppercase">
                          Open Live Terminal
                        </span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {cleared && (
                      <motion.div
                        initial={{ opacity: 0, scale: 2.4, rotate: -22 }}
                        animate={{ opacity: 1, scale: 1, rotate: -7 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                        className="!absolute -bottom-5 -right-2 sm:-right-4 stamp !text-[15px] sm:!text-[20px] !p-2 sm:!px-4 bg-[hsl(var(--paper))] z-20"
                      >
                        DECLASSIFIED · ACCESS GRANTED
                      </motion.div>
                    )}
                  </AnimatePresence>
                </a>

                {/* Dossier panel */}
                <div className="paper-card-cream p-5 sm:p-6 paper-grain relative">
                  <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-4">
                    <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">FILE · ITB-001</span>
                    <span className="font-blackops text-[12px] tracking-[0.3em] text-[hsl(var(--ink-charcoal))] flex items-center gap-1.5">
                      <span className="status-pulse" /> OPERATIONAL
                    </span>
                  </div>

                  <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mb-1">◉ INTERCEPTED RESULTS</div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                    {snapshotStats.map((s) => (
                      <div key={s.label} className="border border-[hsl(var(--line)/0.15)] bg-[hsl(var(--surface-1))] p-3">
                        <div className="font-courier text-[10px] tracking-[0.28em] text-[hsl(var(--ink-brown))] uppercase">{s.label}</div>
                        <div
                          className={`font-display text-3xl sm:text-4xl leading-tight ${
                            s.up ? "text-[hsl(142_70%_48%)]" : "text-[hsl(var(--accent-bone))]"
                          }`}
                        >
                          {s.up && <span className="text-lg align-middle mr-0.5">▲</span>}
                          {s.value}
                        </div>
                        <div className="font-courier text-[11px] text-[hsl(var(--ink-brown))] leading-snug">{s.note}</div>
                      </div>
                    ))}
                  </div>
                  <p className="font-courier text-[11px] tracking-[0.18em] text-[hsl(var(--ink-brown))] uppercase mb-5">
                    Demo account · stored snapshot · not a live feed
                  </p>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-t border-dashed-ink pt-4">
                    <div className="font-courier text-[12px] tracking-[0.22em] text-[hsl(var(--ink-brown))] uppercase leading-relaxed">
                      <span className="font-blackops text-[hsl(var(--accent-red))]">STACK ·</span> {stack.join(" · ")}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                      <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm flex-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>LAUNCH LIVE TERMINAL</span>
                      </a>
                      <a href="#contact" className="dossier-cta-ghost justify-center text-sm">
                        <span>REQUEST A BOT</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPABILITIES */}
              <div className="flex items-center gap-3 sm:gap-5 mb-6">
                <div className="diag-stripes-red h-2 w-12 sm:w-20" />
                <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] tracking-[0.06em] leading-none">
                  CLASSIFIED CAPABILITIES
                </h3>
                <div className="flex-1 border-t border-[hsl(var(--accent-red)/0.4)]" />
                <span className="hidden md:inline font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                  {capabilities.length} OPERATIONS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {capabilities.map((c, i) => (
                  <div
                    key={c.title}
                    className="paper-card-cream p-5 paper-grain relative group transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                      <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                        OP-{String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="p-1.5 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(var(--on-red))] transition-colors">
                        <c.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="font-blackops text-lg text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-tight mb-2 group-hover:text-[hsl(var(--accent-red))] transition-colors">
                      {c.title}
                    </h4>
                    <p className="font-courier text-[13px] text-[hsl(var(--ink-charcoal))] leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACCESS GATE */}
            <AnimatePresence>
              {!cleared && (
                <motion.div
                  key="gate"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-30 flex items-start justify-center pt-10 sm:pt-20 bg-gradient-to-b from-[hsl(var(--paper)/0.35)] via-[hsl(var(--paper)/0.6)] to-[hsl(var(--paper))]"
                >
                  <div className="paper-folder border-2 !border-[hsl(var(--accent-red))] glow-red w-full max-w-xl p-6 sm:p-8 text-center relative">
                    <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
                    <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

                    <div className="mx-auto mb-4 w-16 h-16 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.15)] glow-red">
                      {clearance === "verifying" ? (
                        <KeyRound className="w-7 h-7 text-[hsl(var(--accent-red))] animate-pulse" />
                      ) : (
                        <Lock className="w-7 h-7 text-[hsl(var(--accent-red))]" />
                      )}
                    </div>
                    <div className="font-courier text-[11px] tracking-[0.35em] text-[hsl(var(--accent-red))] uppercase mb-2">
                      Security notice · File ITB-001
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl text-[hsl(var(--accent-bone))] uppercase leading-none mb-3">
                      Access Restricted
                    </h3>
                    <p className="font-typewriter text-base sm:text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed mb-6">
                      This file contains highly classified information. Level 5 clearance is required to open the Ivan Trading Bots dossier.
                    </p>

                    {clearance === "verifying" ? (
                      <div aria-live="polite">
                        <div className="font-blackops text-sm tracking-[0.3em] text-[hsl(var(--accent-red))] mb-2">
                          VERIFYING CLEARANCE…
                        </div>
                        <div className="h-2 border border-[hsl(var(--accent-red)/0.6)] bg-[hsl(var(--surface-0))]">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-[hsl(var(--accent-red))] shadow-[0_0_12px_hsl(var(--accent-red)/0.8)]"
                          />
                        </div>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setClearance("verifying")} className="dossier-cta justify-center text-base w-full sm:w-auto">
                        <ShieldCheck className="w-4 h-4" />
                        <span>DECLASSIFY FILE</span>
                      </button>
                    )}

                    <div className="mt-5 font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                      All access is logged · Eyes only
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
            <span><span className="text-[hsl(var(--accent-red))]">◉</span> END OF CLASSIFIED FILE</span>
            <span>UNAUTHORISED DISCLOSURE IS PROHIBITED</span>
            {cleared ? (
              <button type="button" onClick={seal} className="inline-flex items-center gap-1.5 text-[hsl(var(--accent-red))] hover:underline underline-offset-4 tracking-[0.3em] uppercase">
                <Lock className="w-3 h-3" /> RE-SEAL FILE
              </button>
            ) : (
              <span>HANDLING · EYES ONLY</span>
            )}
          </div>
        </div>
      </div>

      <ClassificationBanner />
    </section>
  );
};

export default TradingBotsSection;
