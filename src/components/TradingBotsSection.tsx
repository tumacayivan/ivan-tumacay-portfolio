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
  Power,
} from "lucide-react";
import itbAnalytics from "@/assets/ivan-trading-bots/itb-01-analytics.png";
import itbTrackRecord from "@/assets/ivan-trading-bots/itb-02-track-record.png";
import itbServerConsole from "@/assets/ivan-trading-bots/itb-03-server-console.png";
import itbLinkTiming from "@/assets/ivan-trading-bots/itb-04-link-timing.png";
import itbBridgeHost from "@/assets/ivan-trading-bots/itb-05-bridge-host.png";
import itbTelemetry from "@/assets/ivan-trading-bots/itb-06-telemetry.png";
import itbProcessorNetwork from "@/assets/ivan-trading-bots/itb-07-processor-network.png";
import SectionHeading from "./drift/SectionHeading";

const SITE_URL = "https://ivan-trading-bots.onrender.com/";
const CLEARANCE_KEY = "itb-clearance";

// Screenshots of the live terminal; account, broker and host details are redacted in the image files.
const exhibits = [
  { image: itbAnalytics, title: "Analytics · Result", caption: "Net profit, expectancy and trade count over the selected period." },
  { image: itbTrackRecord, title: "Track Record", caption: "Win rate, profit factor, profitable days and time-weighted gain." },
  { image: itbServerConsole, title: "Server Console", caption: "Rack view of the account and bot units read from the synced snapshot." },
  { image: itbLinkTiming, title: "Link & Timing", caption: "Broker round trip, bridge uptime, tick flow and per-port link status." },
  { image: itbBridgeHost, title: "Bridge Host", caption: "Host CPU and memory, bridge load, network and a 60-second activity matrix." },
  { image: itbTelemetry, title: "Telemetry", caption: "Latency and tick-flow charts sampled once per second." },
  { image: itbProcessorNetwork, title: "Processor & Network", caption: "Machine and bridge CPU, network in and out, and the live console." },
];

// Figures from the demo account's track record shown in the screenshots.
const snapshotStats = [
  { label: "Net profit", value: "$1,715.04", note: "12 closed trades" },
  { label: "Win rate", value: "91.7%", note: "11 wins · 1 loss" },
  { label: "Profit factor", value: "90.37", note: "Gross win ÷ gross loss" },
  { label: "Expectancy", value: "$142.92", note: "Average per closed trade" },
];

const capabilities = [
  { icon: Activity, title: "Live account state", body: "Equity, balance, floating P&L, free margin and open exposure streamed live from the trading terminal." },
  { icon: LineChart, title: "Track record", body: "Realised net, win rate, expectancy, profit factor, profitable days and a period-by-period breakdown." },
  { icon: ShieldAlert, title: "Risk analytics", body: "Max drawdown, recovery factor, annualised Sharpe and average hold time behind every result." },
  { icon: Wallet, title: "Funding ledger", body: "Deposits, withdrawals and index-CFD dividends split out so trading results are never inflated by cash moves." },
  { icon: PieChart, title: "Symbol attribution", body: "Sources of profit and loss charted per instrument, filterable across every traded symbol." },
  { icon: CloudDownload, title: "Cloud sync snapshots", body: "When the terminal is offline, the last synced account is served from storage so the record stays viewable." },
  { icon: Clock, title: "Server telemetry", body: "Rack-style system console with link timing, port status, host load and per-second latency and tick-flow charts." },
  { icon: Share2, title: "Share & report", body: "One-click share link, QR code and a generated PDF performance report." },
];

const buildTags = [
  { label: "Build", value: "ITB-001" },
  { label: "Status", value: "Live" },
  { label: "Engine", value: "Algorithmic" },
  { label: "Access", value: "By request" },
];

type Ignition = "locked" | "starting" | "running";

const readIgnition = (): Ignition => {
  try {
    return sessionStorage.getItem(CLEARANCE_KEY) === "cleared" ? "running" : "locked";
  } catch {
    return "locked";
  }
};

const Hidden = ({ shown, children }: { shown: boolean; children: ReactNode }) => (
  <span
    className={`transition-colors duration-700 ${
      shown ? "text-ink font-semibold" : "bg-ink/80 text-transparent select-none rounded-[2px]"
    }`}
  >
    {children}
  </span>
);

const TradingBotsSection = () => {
  const [ignition, setIgnition] = useState<Ignition>(readIgnition);
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const running = ignition === "running";
  const exhibit = exhibits[active];

  useEffect(() => {
    if (ignition !== "starting") return;
    const id = setTimeout(() => {
      setIgnition("running");
      try {
        sessionStorage.setItem(CLEARANCE_KEY, "cleared");
      } catch {
        /* storage unavailable — unlock lasts for this view only */
      }
    }, 1700);
    return () => clearTimeout(id);
  }, [ignition]);

  // Keep the locked garage out of the tab order until the engine is running.
  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !running;
  }, [running]);

  const lock = () => {
    setIgnition("locked");
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
      data-scene="Trading bots"
      data-kanji="自動売買"
      className="relative py-24 sm:py-32 overflow-hidden bg-asphalt-2"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 livery" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 0%, hsl(var(--hud) / calc(0.12 * var(--glow-strength))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          kanji="自動売買"
          kicker="Private build · Researched & developed by Ivan"
          title="Ivan Trading"
          accent="Bots"
        >
          A proprietary <Hidden shown={running}>algorithmic trading</Hidden> system with a live command terminal
          that audits every trade for <Hidden shown={running}>performance and risk</Hidden>.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/10 border border-line/10 mb-10 max-w-3xl">
          {buildTags.map((t) => (
            <div key={t.label} className="bg-asphalt-2 px-4 py-3">
              <div className="hud-label !text-ink-dim !text-[10px]">{t.label}</div>
              <div className="font-hud text-lg font-bold uppercase text-ink flex items-center gap-2">
                {t.label === "Status" && <span className="w-2 h-2 rounded-full bg-hud animate-pulse" />}
                {t.value}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            ref={contentRef}
            aria-hidden={!running}
            className={`transition-[filter,opacity] duration-1000 ${
              running ? "" : "max-h-[640px] sm:max-h-[760px] overflow-hidden blur-md saturate-0 opacity-60 select-none pointer-events-none"
            }`}
          >
            {/* WINDSCREEN VIEWER */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-16">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="panel !border-line/15 overflow-hidden shadow-[0_40px_90px_-40px_hsl(var(--hud)/0.5)]">
                  <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line/10 bg-asphalt">
                    <span className="flex gap-1.5 shrink-0" aria-hidden>
                      <span className="w-2.5 h-2.5 rounded-full bg-sign" />
                      <span className="w-2.5 h-2.5 rounded-full bg-drift" />
                      <span className="w-2.5 h-2.5 rounded-full bg-hud" />
                    </span>
                    <span className="font-hud text-[11px] tracking-[0.2em] uppercase text-ink-dim truncate">
                      Exhibit {String.fromCharCode(65 + active)} — {exhibit.title}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 font-hud text-[10px] tracking-[0.24em] text-sign uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-sign animate-pulse" /> Live
                    </span>
                  </div>
                  <div className="relative overflow-hidden aspect-[2.08/1] bg-[hsl(var(--void))]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.img
                        key={active}
                        src={exhibit.image}
                        alt={`Ivan Trading Bots terminal — ${exhibit.title}`}
                        initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 bg-[hsl(var(--void)/0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="btn-drift">
                        <span className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Open live terminal
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-4">
                <p className="text-ink-dim leading-relaxed">
                  <span className="hud-label block mb-1">Exhibit {String.fromCharCode(65 + active)}</span>
                  {exhibit.caption}
                </p>
                <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
                  {exhibits.map((ex, i) => (
                    <button
                      key={ex.title}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      aria-label={`Show exhibit ${String.fromCharCode(65 + i)}: ${ex.title}`}
                      className={`relative overflow-hidden border transition-all ${
                        i === active ? "border-drift ring-1 ring-drift" : "border-line/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                      <span className="absolute top-0 left-0 bg-drift text-on-drift font-hud text-[10px] font-bold px-1.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* TELEMETRY */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line/10 border border-line/10 mb-3">
              {snapshotStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-asphalt-2 p-5 sm:p-6"
                >
                  <div className="hud-label !text-ink-dim">{s.label}</div>
                  <div className="font-display text-3xl sm:text-5xl text-hud leading-tight mt-2 tabular-nums">
                    <span className="text-lg align-middle mr-1 text-drift">▲</span>
                    {s.value}
                  </div>
                  <div className="text-sm text-ink-dim mt-1">{s.note}</div>
                </motion.div>
              ))}
            </div>
            <p className="font-hud text-[11px] tracking-[0.2em] uppercase text-ink-dim mb-10">
              Demo account · all-time track record · 3 active days
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-drift">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Launch live terminal
                </span>
              </a>
              <a href="#contact" className="btn-ghost">
                <span>Request a bot</span>
              </a>
            </div>

            {/* CAPABILITIES */}
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">Under the hood</h3>
              <span className="flex-1 h-px bg-line/15" />
              <span className="hud-label !text-ink-dim">{capabilities.length} systems</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="panel panel-hover edge-light p-6 group"
                >
                  <c.icon className="w-6 h-6 text-hud mb-5 group-hover:text-drift transition-colors" />
                  <h4 className="font-hud text-lg font-bold uppercase tracking-[0.04em] text-ink mb-2">{c.title}</h4>
                  <p className="text-ink-dim leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IGNITION GATE */}
          <AnimatePresence>
            {!running && (
              <motion.div
                key="gate"
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-30 flex items-start justify-center pt-12 sm:pt-24 bg-gradient-to-b from-asphalt-2/30 via-asphalt-2/60 to-asphalt-2"
              >
                <div className="panel !border-line/20 w-full max-w-lg p-7 sm:p-10 text-center shadow-[0_40px_100px_-30px_hsl(var(--shadow))]">
                  <div className="absolute inset-x-0 top-0 h-1.5 livery" />

                  <motion.div
                    className="mx-auto mb-6 w-20 h-20 rounded-full border-2 flex items-center justify-center"
                    animate={
                      ignition === "starting"
                        ? { borderColor: "hsl(var(--drift))", rotate: [0, -35, 0], boxShadow: "0 0 40px hsl(var(--drift) / 0.6)" }
                        : { borderColor: "hsl(var(--line) / 0.2)", rotate: 0 }
                    }
                    transition={{ duration: 0.6 }}
                  >
                    {ignition === "starting" ? (
                      <KeyRound className="w-8 h-8 text-drift" />
                    ) : (
                      <Lock className="w-8 h-8 text-ink" />
                    )}
                  </motion.div>

                  <div className="hud-label mb-3">Private garage · Build ITB-001</div>
                  <h3 className="font-display text-4xl sm:text-5xl uppercase text-ink leading-none mb-4">
                    Engine <span className="lean">off</span>
                  </h3>
                  <p className="text-ink-dim text-lg leading-relaxed mb-8">
                    The Ivan Trading Bots showcase is parked. Turn the key to open the live terminal screenshots and
                    results.
                  </p>

                  {ignition === "starting" ? (
                    <div aria-live="polite">
                      <div className="font-hud text-sm font-bold tracking-[0.24em] uppercase text-drift mb-3">
                        Starting engine…
                      </div>
                      <div className="h-2 bg-line/10 overflow-hidden -skew-x-12">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: ["0%", "85%", "60%", "100%"] }}
                          transition={{ duration: 1.6, times: [0, 0.45, 0.6, 1], ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-hud via-drift to-sign"
                        />
                      </div>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setIgnition("starting")} className="btn-drift w-full sm:w-auto">
                      <span className="flex items-center gap-2">
                        <Power className="w-4 h-4" /> Turn the key
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {running && (
          <div className="mt-12 flex justify-end">
            <button
              type="button"
              onClick={lock}
              className="inline-flex items-center gap-2 font-hud text-xs tracking-[0.24em] uppercase text-ink-dim hover:text-drift transition-colors"
            >
              <Lock className="w-3.5 h-3.5" /> Park it again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TradingBotsSection;
