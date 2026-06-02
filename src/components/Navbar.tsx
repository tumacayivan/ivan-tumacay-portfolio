import { motion } from "framer-motion";
import { Menu, X, TrendingUp, Phone, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Services", href: "#services", code: "SEC 03" },
  { label: "Experience", href: "#experience", code: "SEC 05" },
  { label: "Portfolio", href: "#portfolio", code: "SEC 04" },
  { label: "Education", href: "#education", code: "SEC 02" },
  { label: "Why Me", href: "#why", code: "SEC 06" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = d.getUTCHours().toString().padStart(2, "0");
      const mm = d.getUTCMinutes().toString().padStart(2, "0");
      const ss = d.getUTCSeconds().toString().padStart(2, "0");
      setNow(`${hh}:${mm}:${ss}Z`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Red/black warning stripe — classified signature */}
      <div className="diag-stripes h-1.5" />

      {/* Top classified bar — red live indicator + system time */}
      <div className="bg-[hsl(45_36%_97%)] text-[hsl(var(--ink-charcoal))] font-courier text-[11px] sm:text-[12px] tracking-[0.35em] py-1.5 px-4 sm:px-6 flex items-center justify-between border-b border-[hsl(var(--accent-red)/0.35)]">
        <span className="flex items-center gap-2">
          <span className="relative inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
          <span className="hidden sm:inline">NYSE // MEMBER FINRA // TRADING FLOOR OPEN</span>
          <span className="sm:hidden">MARKETS // OPEN</span>
        </span>
        <span className="hidden md:flex items-center gap-3">
          <TrendingUp className="w-3 h-3 text-[hsl(var(--accent-red))]" />
          <span>S&amp;P ▲ 1.2%</span>
          <span className="text-[hsl(var(--accent-red))]">|</span>
          <span>MKT-TIME {now}</span>
        </span>
      </div>

      {/* Main bar — concrete black with red brand mark */}
      <div className="bg-[hsl(45_28%_94%)] border-b border-[hsl(40_18%_32%/0.10)] relative">
        {/* Subtle blueprint grid in nav */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
             style={{
               backgroundImage:
                 "linear-gradient(hsl(40 18% 32% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(40 18% 32% / 0.6) 1px, transparent 1px)",
               backgroundSize: "32px 32px",
             }} />
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between h-16 sm:h-[72px] relative">
          <a href="#" className="flex items-center gap-3 group">
            {/* Gold mark — the firm's emblem */}
            <div className="relative shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(45_36%_97%)] glow-red">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--accent-red))]" />
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-start leading-none pr-3 border-r border-[hsl(40_18%_32%/0.15)]">
              <span className="font-courier text-[10px] tracking-[0.32em] text-[hsl(var(--ink-brown))]">TICKER</span>
              <span className="font-blackops text-[15px] text-[hsl(var(--accent-red))] tracking-[0.18em]">IVT</span>
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-blackops text-[22px] sm:text-[28px] tracking-[0.14em] text-[hsl(var(--ink-charcoal))] uppercase leading-none">
                IVAN <span className="text-[hsl(var(--accent-red))]">TUMACAY</span>
              </span>
              <span className="hidden md:inline font-courier text-[10px] tracking-[0.32em] text-[hsl(var(--ink-brown))] mt-0.5">
                THE WOLF · CLOSER OF DEALS
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-3 lg:px-4 py-2 font-blackops text-[15px] text-[hsl(var(--ink-charcoal))] uppercase tracking-[0.22em] hover:text-[hsl(var(--accent-red))] transition-colors"
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 font-courier text-[9px] tracking-[0.2em] text-[hsl(var(--accent-red))] opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.code}
                </span>
                {item.label}
                <span className="absolute left-3 right-3 bottom-1.5 h-px bg-[hsl(var(--accent-red))] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="dossier-cta ml-3 text-[13px] !py-2.5 !px-4"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>RING THE BELL</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              className="text-[hsl(var(--ink-charcoal))] border border-[hsl(var(--accent-red))] p-2 hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(40_45%_10%)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-[hsl(var(--accent-red)/0.35)] bg-[hsl(45_36%_97%)]"
          >
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between font-blackops text-base tracking-[0.22em] text-[hsl(var(--ink-charcoal))] uppercase hover:text-[hsl(var(--accent-red))] transition-colors border-b border-dashed-ink pb-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="font-courier text-[10px] tracking-[0.25em] text-[hsl(var(--accent-red))]">{item.code}</span>
                </a>
              ))}
              <a
                href="#contact"
                className="dossier-cta mt-2 justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-3.5 h-3.5" />
                RING THE BELL
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
