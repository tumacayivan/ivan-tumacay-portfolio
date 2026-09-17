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
} from "lucide-react";
import itbAnalytics from "@/assets/ivan-trading-bots/itb-01-analytics.png";
import itbTrackRecord from "@/assets/ivan-trading-bots/itb-02-track-record.png";
import itbServerConsole from "@/assets/ivan-trading-bots/itb-03-server-console.png";
import itbLinkTiming from "@/assets/ivan-trading-bots/itb-04-link-timing.png";
import itbBridgeHost from "@/assets/ivan-trading-bots/itb-05-bridge-host.png";
import itbTelemetry from "@/assets/ivan-trading-bots/itb-06-telemetry.png";
import itbProcessorNetwork from "@/assets/ivan-trading-bots/itb-07-processor-network.png";
import SectionHeading from "./reaction/SectionHeading";

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

type Clearance = "sealed" | "opening" | "open";

const readClearance = (): Clearance => {
  try {
    return sessionStorage.getItem(CLEARANCE_KEY) === "cleared" ? "open" : "sealed";
  } catch {
    return "sealed";
  }
};

/** Words struck out of the abstract until clearance is granted. */
const Hidden = ({ shown, children }: { shown: boolean; children: ReactNode }) => (
  <span className={`transition-colors duration-700 ${shown ? "text-ink font-semibold" : "redact"}`}>{children}</span>
);

const TradingBotsSection = () => {
  const [clearance, setClearance] = useState<Clearance>(readClearance);
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const open = clearance === "open";
  const exhibit = exhibits[active];

  useEffect(() => {
    if (clearance !== "opening") return;
    const id = setTimeout(() => {
      setClearance("open");
      try {
        sessionStorage.setItem(CLEARANCE_KEY, "cleared");
      } catch {
        /* storage unavailable — clearance lasts for this view only */
      }
    }, 1600);
    return () => clearTimeout(id);
  }, [clearance]);

  // Keep the sealed file out of the tab order until it is open.
  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !open;
  }, [open]);

  const reseal = () => {
    setClearance("sealed");
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
      data-scene="The apparatus"
      data-code="Part II · 03"
      className="relative py-24 sm:py-32 overflow-hidden bg-base-2"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-ember" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 0%, hsl(var(--ember) / calc(0.1 * var(--bloom))), transparent 62%)",
        }}
      />

      <div className="gutter relative">
        <SectionHeading
          code="Doc · 03"
          kicker="Private build · researched & developed by Ivan"
          title="Ivan Trading"
          accent="Bots"
        >
          A proprietary <Hidden shown={open}>algorithmic trading</Hidden> system with a live command terminal that
          audits every trade for <Hidden shown={open}>performance and risk</Hidden>.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-10 max-w-3xl">
          {buildTags.map((t) => (
            <div key={t.label} className="bg-base-2 px-4 py-3">
              <div className="slug slug-dim !text-[10px]">{t.label}</div>
              <div className="font-doc text-base font-semibold uppercase text-ink flex items-center gap-2 mt-1">
                {t.label === "Status" && <span className="w-1.5 h-1.5 bg-ember tick-pulse" aria-hidden />}
                {t.value}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            ref={contentRef}
            aria-hidden={!open}
            className={`transition-[filter,opacity] duration-1000 ${
              open ? "" : "max-h-[640px] sm:max-h-[760px] overflow-hidden blur-md saturate-0 opacity-50 select-none pointer-events-none"
            }`}
          >
            {/* PLATE VIEWER */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-16">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="plate !border-line/20 overflow-hidden shadow-[0_40px_90px_-40px_hsl(var(--shadow))]">
                  <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line/15 bg-base">
                    <span className="font-doc text-[11px] tracking-[0.2em] uppercase text-ember shrink-0">
                      Plate {String.fromCharCode(65 + active)}
                    </span>
                    <span className="font-doc text-[11px] tracking-[0.16em] uppercase text-ink-dim truncate">
                      {exhibit.title}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 font-doc text-[10px] tracking-[0.24em] text-ink-dim uppercase">
                      <span className="w-1.5 h-1.5 bg-ember tick-pulse" /> Live
                    </span>
                  </div>
                  <div className="relative overflow-hidden aspect-[2.08/1] bg-[hsl(var(--void))]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.img
                        key={active}
                        src={exhibit.image}
                        alt={`Ivan Trading Bots terminal — ${exhibit.title}`}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </AnimatePresence>
                    <div aria-hidden className="absolute -inset-[12%] grain-layer" />
                    <div className="absolute inset-0 bg-[hsl(var(--void)/0.82)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="btn-primary">
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
                  <span className="slug block mb-1.5">Plate {String.fromCharCode(65 + active)}</span>
                  {exhibit.caption}
                </p>
                <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
                  {exhibits.map((ex, i) => (
                    <button
                      key={ex.title}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      aria-label={`Show plate ${String.fromCharCode(65 + i)}: ${ex.title}`}
                      className={`relative overflow-hidden border transition-all ${
                        i === active ? "border-ember ring-1 ring-ember" : "border-line/15 opacity-55 hover:opacity-100"
                      }`}
                    >
                      <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top grayscale" />
                      <span className="absolute top-0 left-0 bg-ember text-on-ember font-doc text-[10px] font-bold px-1.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RECORDED RESULTS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line/15 border border-line/15 mb-3">
              {snapshotStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-base-2 p-5 sm:p-6"
                >
                  <div className="slug slug-dim">{s.label}</div>
                  <div className="font-display text-[1.6rem] sm:text-4xl lg:text-5xl text-ink leading-none mt-2.5 tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-sm text-ink-dim mt-1.5">{s.note}</div>
                </motion.div>
              ))}
            </div>
            <p className="font-doc text-[11px] tracking-[0.2em] uppercase text-ink-dim mb-10">
              Demo account · all-time track record · 3 active days
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-20">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Launch live terminal
                </span>
              </a>
              <a href="#contact" className="btn-quiet">
                <span>Request a bot</span>
              </a>
            </div>

            {/* INSTRUMENTATION */}
            <div className="flex items-center gap-4 mb-8">
              <h3 className="display text-3xl sm:text-4xl text-ink">Instrumentation</h3>
              <span className="flex-1 h-px bg-line/20" />
              <span className="slug slug-dim">{capabilities.length} systems</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="plate plate-hover filament ticks p-6 group"
                >
                  <c.icon className="w-6 h-6 text-ember mb-5" />
                  <h4 className="font-doc text-base font-semibold uppercase tracking-[0.06em] text-ink mb-2">
                    {c.title}
                  </h4>
                  <p className="text-ink-dim leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CLEARANCE GATE */}
          <AnimatePresence>
            {!open && (
              <motion.div
                key="gate"
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-30 flex items-start justify-center pt-12 sm:pt-24 bg-gradient-to-b from-base-2/40 via-base-2/70 to-base-2"
              >
                <div className="plate !border-line/25 w-full max-w-lg p-7 sm:p-10 text-center shadow-[0_40px_100px_-30px_hsl(var(--shadow))]">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-ember" />

                  <motion.div
                    className="mx-auto mb-6 w-20 h-20 border flex items-center justify-center"
                    animate={
                      clearance === "opening"
                        ? { borderColor: "hsl(var(--ember))", rotate: [0, -30, 0] }
                        : { borderColor: "hsl(var(--line) / 0.25)", rotate: 0 }
                    }
                    transition={{ duration: 0.6 }}
                  >
                    {clearance === "opening" ? (
                      <KeyRound className="w-8 h-8 text-ember" />
                    ) : (
                      <Lock className="w-8 h-8 text-ink" />
                    )}
                  </motion.div>

                  <div className="slug mb-3">Restricted · build ITB-001</div>
                  <h3 className="display text-4xl sm:text-5xl text-ink leading-none mb-4">
                    Sealed <span className="ignited">file</span>
                  </h3>
                  <p className="text-ink-dim text-lg leading-relaxed mb-8">
                    The Ivan Trading Bots record is closed. Grant yourself clearance to read the live terminal
                    plates and the results behind them.
                  </p>

                  {clearance === "opening" ? (
                    <div aria-live="polite">
                      <div className="font-doc text-sm font-semibold tracking-[0.24em] uppercase text-ember mb-3">
                        Verifying…
                      </div>
                      <div className="h-1.5 bg-line/15 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: ["0%", "70%", "58%", "100%"] }}
                          transition={{ duration: 1.5, times: [0, 0.45, 0.62, 1], ease: "easeInOut" }}
                          className="h-full bg-ember"
                        />
                      </div>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setClearance("opening")} className="btn-primary w-full sm:w-auto">
                      <span className="flex items-center gap-2">
                        <KeyRound className="w-4 h-4" /> Grant clearance
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {open && (
          <div className="mt-12 flex justify-end">
            <button
              type="button"
              onClick={reseal}
              className="inline-flex items-center gap-2 font-doc text-xs tracking-[0.24em] uppercase text-ink-dim hover:text-ember transition-colors"
            >
              <Lock className="w-3.5 h-3.5" /> Seal it again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TradingBotsSection;
