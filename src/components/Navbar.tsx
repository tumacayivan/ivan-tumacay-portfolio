import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Trading Bots", href: "#trading-bots", kanji: "自動売買" },
  { label: "Showreel", href: "#portfolio", kanji: "作品" },
  { label: "Services", href: "#services", kanji: "サービス" },
  { label: "Experience", href: "#experience", kanji: "経歴" },
  { label: "Garage", href: "#software-portfolio", kanji: "車庫" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 border-b ${
        scrolled
          ? "bg-[hsl(var(--asphalt)/0.78)] backdrop-blur-xl border-line/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="gutter flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Ivan Tumacay — back to top">
          <span className="plate w-[62px] h-[36px] text-[9px] group-hover:-rotate-3 transition-transform">
            <span className="tracking-[0.08em]">東京 26</span>
            <span className="text-[15px] tracking-[0.04em]">IT·01</span>
          </span>
          <span className="hidden sm:flex lg:hidden xl:flex flex-col leading-none whitespace-nowrap">
            <span className="font-display text-lg tracking-tight text-ink uppercase">
              Ivan <span className="text-drift">Tumacay</span>
            </span>
            <span className="font-hud text-[10px] tracking-[0.22em] text-ink-dim uppercase mt-1">Engineer · Operator</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap px-2.5 xl:px-4 py-2 font-hud text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/80 hover:text-ink transition-colors"
            >
              <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 text-[9px] tracking-[0.1em] text-sign opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all">
                {item.kanji}
              </span>
              {item.label}
              <span className="absolute left-3 right-3 xl:left-4 xl:right-4 bottom-1 h-[2px] bg-drift scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 skew-x-[-20deg]" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Ivan-Tumacay-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn hidden md:inline-flex"
            aria-label="Resume (PDF)"
            title="Resume (PDF)"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden xl:inline font-hud text-[11px] font-semibold tracking-[0.18em] uppercase">Resume</span>
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-drift hidden sm:inline-flex !py-2.5 !px-5 !text-[12px]">
            <span className="flex items-center gap-1.5">
              Contact <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <button
            className="icon-btn lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Scroll progress — the rev bar */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 -bottom-px h-[2px] origin-left bg-gradient-to-r from-hud via-drift to-sign"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden bg-[hsl(var(--asphalt)/0.97)] backdrop-blur-xl border-b border-line/10"
          >
            <div className="gutter py-6 flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between py-3 border-b border-line/10 font-display text-2xl uppercase text-ink hover:text-drift transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="neon-kanji text-sm">{item.kanji}</span>
                </motion.a>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a href="#contact" className="btn-drift" onClick={() => setMobileOpen(false)}>
                  <span>Contact</span>
                </a>
                <a
                  href="/Ivan-Tumacay-Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
