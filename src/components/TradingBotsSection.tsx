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
import SectionHeading from "./transit/SectionHeading";

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

type BayPower = "sealed" | "powering" | "live";

const readPower = (): BayPower => {
  try {
    return sessionStorage.getItem(CLEARANCE_KEY) === "cleared" ? "live" : "sealed";
  } catch {
    return "sealed";
  }
};

const Hidden = ({ shown, children }: { shown: boolean; children: ReactNode }) => (
  <span
    className={`transition-colors duration-1000 ${
      shown ? "text-ice font-medium" : "bg-ice/80 text-transparent select-none rounded-[2px]"
    }`}
  >
    {children}
  </span>
);

/**
 * INSTRUMENT BAY — the one system on board that is not for hire.
 *
 * The bay is unpowered until the visitor throws the switch; the exhibits
 * and the record stay sealed behind it, out of the tab order.
 */
const TradingBotsSection = () => {
  const [power, setPower] = useState<BayPower>(readPower);
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const live = power === "live";
  const exhibit = exhibits[active];

  useEffect(() => {
    if (power !== "powering") return;
    const id = setTimeout(() => {
      setPower("live");
      try {
        sessionStorage.setItem(CLEARANCE_KEY, "cleared");
      } catch {
        /* storage unavailable — the bay stays open for this view only */
      }
    }, 1700);
    return () => clearTimeout(id);
  }, [power]);

  // Keep the sealed bay out of the tab order until it is powered.
  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !live;
  }, [live]);

  const seal = () => {
    setPower("sealed");
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
      data-scene="Instrument bay"
      data-coord="Stage 03 · Restricted"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep-2"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 82% 0%, hsl(var(--signal) / calc(0.1 * var(--glow))), transparent 62%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          stage="03"
          kicker="Private build · researched & developed by Ivan"
          title="Ivan Trading"
          accent="Bots"
        >
          A proprietary <Hidden shown={live}>algorithmic trading</Hidden> system with a live command terminal
          that audits every trade for <Hidden shown={live}>performance and risk</Hidden>.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-12 max-w-3xl">
          {buildTags.map((t) => (
            <div key={t.label} className="bg-deep-2 px-4 py-4">
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.label}</div>
              <div className="font-tele text-base font-medium uppercase text-ice flex items-center gap-2 mt-1.5">
                {t.label === "Status" && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon" aria-hidden />}
                {t.value}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            ref={contentRef}
            aria-hidden={!live}
            className={`transition-[filter,opacity] duration-1000 ${
              live ? "" : "max-h-[640px] sm:max-h-[760px] overflow-hidden blur-md saturate-0 opacity-50 select-none pointer-events-none"
            }`}
          >
            {/* EXHIBIT VIEWPORT */}
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 mb-20">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="panel overflow-hidden shadow-[0_50px_110px_-60px_hsl(var(--shade))]">
                  <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-rule/10 bg-deep">
                    <span className="flex gap-2 shrink-0" aria-hidden>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                      <span className="w-1.5 h-1.5 rounded-full bg-rule/25" />
                    </span>
                    <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim truncate">
                      Exhibit {String.fromCharCode(65 + active)} — {exhibit.title}
                    </span>
                    <span className="hidden sm:flex items-center gap-2 font-tele text-xs tracking-[0.24em] text-gold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon" aria-hidden /> Live
                    </span>
                  </div>
                  <div className="relative overflow-hidden aspect-[2.08/1] bg-[hsl(var(--void))]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.img
                        key={active}
                        src={exhibit.image}
                        alt={`Ivan Trading Bots terminal — ${exhibit.title}`}
                        initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-transit group-hover:scale-[1.02]"
                      />
                    </AnimatePresence>
                    <div aria-hidden className="absolute inset-0 noise opacity-25 pointer-events-none" />
                    <div className="absolute inset-0 bg-[hsl(var(--void)/0.82)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="btn-primary">
                        <span className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" aria-hidden /> Open live terminal
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-5">
                <p className="text-ice-dim leading-relaxed">
                  <span className="tele-label block mb-2">Exhibit {String.fromCharCode(65 + active)}</span>
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
                      className={`relative overflow-hidden border transition-all duration-500 ${
                        i === active ? "border-gold" : "border-rule/10 opacity-55 hover:opacity-100"
                      }`}
                    >
                      <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                      <span className="absolute top-0 left-0 bg-gold text-on-gold font-tele text-xs font-semibold px-1.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* THE RECORD */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-4">
              {snapshotStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-deep-2 p-5 sm:p-7"
                >
                  <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{s.label}</div>
                  <div className="plate text-3xl sm:text-5xl text-ice leading-tight mt-3 tabular-nums">
                    <span aria-hidden className="text-sm align-middle mr-2 text-gold">
                      ▲
                    </span>
                    {s.value}
                  </div>
                  <div className="text-sm text-ice-dim mt-2">{s.note}</div>
                </motion.div>
              ))}
            </div>
            <p className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim mb-12">
              Demo account · all-time track record · 3 active days
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-24">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" aria-hidden /> Launch live terminal
                </span>
              </a>
              <a href="#contact" className="btn-quiet">
                <span>Request a bot</span>
              </a>
            </div>

            {/* SUBSYSTEMS */}
            <div className="flex items-center gap-5 mb-10">
              <h3 className="plate text-3xl sm:text-4xl text-ice">Subsystems</h3>
              <span aria-hidden className="flex-1 h-px bg-rule/12" />
              <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">
                {capabilities.length} online
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: (i % 4) * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="panel panel-hover beam p-6 group"
                >
                  <c.icon className="w-5 h-5 text-signal mb-6 group-hover:text-gold transition-colors duration-500" aria-hidden />
                  <h4 className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mb-2.5">{c.title}</h4>
                  <p className="text-ice-dim leading-relaxed text-[0.95rem]">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* POWER GATE */}
          <AnimatePresence>
            {!live && (
              <motion.div
                key="gate"
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-30 flex items-start justify-center pt-12 sm:pt-24 bg-gradient-to-b from-deep-2/20 via-deep-2/70 to-deep-2"
              >
                <div className="panel w-full max-w-lg p-7 sm:p-10 text-center shadow-[0_50px_120px_-50px_hsl(var(--shade))]">
                  <motion.div
                    className="mx-auto mb-7 w-20 h-20 rounded-full border flex items-center justify-center"
                    animate={
                      power === "powering"
                        ? { borderColor: "hsl(var(--gold))", boxShadow: "0 0 50px hsl(var(--gold) / 0.55)" }
                        : { borderColor: "hsl(var(--rule) / 0.2)", boxShadow: "0 0 0 hsl(var(--gold) / 0)" }
                    }
                    transition={{ duration: 0.9 }}
                  >
                    {power === "powering" ? (
                      <KeyRound className="w-7 h-7 text-gold" aria-hidden />
                    ) : (
                      <Lock className="w-7 h-7 text-ice" aria-hidden />
                    )}
                  </motion.div>

                  <div className="tele-label mb-4">Restricted bay · build ITB-001</div>
                  <h3 className="plate text-4xl sm:text-5xl text-ice leading-none mb-5">
                    Systems <span className="lit">cold</span>
                  </h3>
                  <p className="text-ice-dim text-lg leading-relaxed mb-9">
                    The Ivan Trading Bots showcase is unpowered. Bring the bay online to see the live terminal
                    screenshots and the record behind them.
                  </p>

                  {power === "powering" ? (
                    <div aria-live="polite">
                      <div className="font-tele text-sm font-medium tracking-[0.28em] uppercase text-gold mb-4">
                        Powering up…
                      </div>
                      <div className="h-1 bg-rule/10 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: ["0%", "78%", "62%", "100%"] }}
                          transition={{ duration: 1.6, times: [0, 0.45, 0.62, 1], ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-signal to-gold"
                        />
                      </div>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setPower("powering")} className="btn-primary w-full sm:w-auto">
                      <span className="flex items-center gap-2">
                        <Power className="w-4 h-4" aria-hidden /> Bring the bay online
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {live && (
          <div className="mt-14 flex justify-end">
            <button
              type="button"
              onClick={seal}
              className="inline-flex items-center gap-2 font-tele text-xs tracking-[0.24em] uppercase text-ice-dim hover:text-gold transition-colors"
            >
              <Lock className="w-3.5 h-3.5" aria-hidden /> Seal the bay again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TradingBotsSection;
