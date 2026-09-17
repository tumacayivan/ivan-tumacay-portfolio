import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "The apparatus", href: "#trading-bots", code: "03" },
  { label: "Exposure sheets", href: "#portfolio", code: "04" },
  { label: "Programme", href: "#services", code: "05" },
  { label: "Test log", href: "#experience", code: "07" },
  { label: "Field records", href: "#software-portfolio", code: "08" },
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
          ? "bg-[hsl(var(--base)/0.82)] backdrop-blur-xl border-line/15"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="gutter flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Ivan Tumacay — back to the start">
          {/* Clearance badge */}
          <span className="flex items-center border border-line/40 group-hover:border-ember transition-colors">
            <span className="font-display text-lg leading-none px-2 py-1.5 text-ink">IT</span>
            <span className="font-doc text-[10px] font-semibold tracking-[0.1em] px-1.5 py-2 leading-none bg-ember text-on-ember">
              01
            </span>
          </span>
          <span className="hidden sm:flex lg:hidden xl:flex flex-col leading-none whitespace-nowrap">
            <span className="font-display text-xl tracking-tight text-ink uppercase">Ivan Tumacay</span>
            <span className="font-doc text-[10px] tracking-[0.2em] text-ink-dim uppercase mt-1">
              Engineer · Operator
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap px-2.5 xl:px-3.5 py-2 font-doc text-[12px] font-medium uppercase tracking-[0.14em] text-ink/80 hover:text-ink transition-colors"
            >
              <span className="text-ember/70 mr-1.5 group-hover:text-ember transition-colors">{item.code}</span>
              {item.label}
              <span className="absolute left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 bottom-1 h-px bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
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
            <span className="hidden xl:inline font-doc text-[11px] font-semibold tracking-[0.18em] uppercase">
              Resume
            </span>
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 !text-[11px]">
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

      {/* How far through the record you are */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 -bottom-px h-[2px] origin-left bg-ember"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden bg-[hsl(var(--base)/0.98)] backdrop-blur-xl border-b border-line/15"
          >
            <div className="gutter py-6 flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-line/15 font-display text-2xl uppercase text-ink hover:text-ember transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="font-doc text-xs tracking-[0.2em] text-ember">{item.code}</span>
                </motion.a>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                  <span>Contact</span>
                </a>
                <a
                  href="/Ivan-Tumacay-Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quiet"
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
