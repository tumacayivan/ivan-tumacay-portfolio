import { motion } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Services", href: "#services", code: "SEC-03" },
  { label: "Experience", href: "#experience", code: "SEC-05" },
  { label: "Portfolio", href: "#portfolio", code: "SEC-04" },
  { label: "Education", href: "#education", code: "SEC-02" },
  { label: "Why Me", href: "#why", code: "SEC-06" },
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
      <div className="diag-stripes h-2" />
      <div className="bg-[hsl(var(--ink-charcoal))] text-[hsl(var(--paper))] font-blackops text-[10px] sm:text-xs tracking-[0.3em] py-1 px-4 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Lock className="w-3 h-3" /> TOP SECRET // EYES ONLY // DOSSIER ACCESS
        </span>
        <span className="hidden sm:inline">SYS-TIME {now}</span>
      </div>

      <div className="bg-paper-cream border-b-2 border-[hsl(var(--ink-charcoal))] paper-grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14 sm:h-16 relative">
          <a href="#" className="flex items-center gap-3 group">
            <div className="hidden sm:flex flex-col items-end leading-none border-r-2 border-[hsl(var(--ink-charcoal))] pr-3">
              <span className="font-courier text-[10px] tracking-widest text-ink-brown">FILE NO.</span>
              <span className="font-blackops text-sm text-stamp-red">IT-2026</span>
            </div>
            <span className="font-blackops text-lg sm:text-2xl tracking-[0.15em] text-ink uppercase">
              IVAN TUMACAY
            </span>
            <span className="hidden md:inline font-courier text-[10px] tracking-widest text-ink-brown border border-dashed-ink px-2 py-0.5">
              SUBJECT
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-3 py-2 font-stencil text-xs lg:text-sm text-ink uppercase tracking-[0.18em] hover:text-stamp-red transition-colors"
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 font-courier text-[8px] text-ink-brown opacity-60">
                  {item.code}
                </span>
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="ml-2 px-4 py-2 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-xs tracking-[0.18em] uppercase hover:bg-[hsl(var(--paper))] hover:text-stamp-red transition-colors"
            >
              INITIATE CONTACT
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-ink border border-ink p-1.5"
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
            className="md:hidden border-t-2 border-[hsl(var(--ink-charcoal))] bg-paper-cream"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between font-stencil text-sm tracking-[0.18em] text-ink uppercase hover:text-stamp-red transition-colors border-b border-dashed-ink pb-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="font-courier text-[10px] text-ink-brown">{item.code}</span>
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-4 py-2.5 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-xs tracking-[0.18em] uppercase text-center"
                onClick={() => setMobileOpen(false)}
              >
                INITIATE CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
