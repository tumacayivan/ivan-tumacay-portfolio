import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Trading Bots", href: "#trading-bots", stage: "03" },
  { label: "Archive", href: "#portfolio", stage: "04" },
  { label: "Systems", href: "#services", stage: "05" },
  { label: "Mission Log", href: "#experience", stage: "07" },
  { label: "Worlds", href: "#software-portfolio", stage: "08" },
];

/** Mission patch: a ring, a trajectory and the singularity it bends around. */
const Patch = () => (
  <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden>
    <circle cx="20" cy="20" r="18.5" fill="none" stroke="hsl(var(--rule) / 0.25)" strokeWidth="1" />
    <circle cx="20" cy="20" r="5" fill="hsl(var(--ice))" />
    <circle cx="20" cy="20" r="8.5" fill="none" stroke="hsl(var(--gold))" strokeWidth="1.25" />
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="4.5"
      fill="none"
      stroke="hsl(var(--gold) / 0.75)"
      strokeWidth="1.25"
      transform="rotate(-18 20 20)"
    />
    <circle cx="33.5" cy="15.8" r="1.6" fill="hsl(var(--signal))" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });

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
      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,border-color,backdrop-filter] duration-700 border-b ${
        scrolled ? "bg-[hsl(var(--deep)/0.8)] backdrop-blur-xl border-rule/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="gutter flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Ivan Tumacay — back to departure">
          <span className="transition-transform duration-700 ease-transit group-hover:rotate-45">
            <Patch />
          </span>
          <span className="hidden sm:flex lg:hidden xl:flex flex-col leading-none whitespace-nowrap">
            <span className="plate text-lg text-ice">
              Ivan <span className="text-gold">Tumacay</span>
            </span>
            <span className="font-tele text-xs tracking-[0.2em] text-ice-dim uppercase mt-1.5">Mission 001</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap px-3 xl:px-4 py-2 font-tele text-xs font-medium uppercase tracking-[0.18em] text-ice/75 hover:text-ice transition-colors"
            >
              <span
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 -top-1.5 text-[0.75rem] tracking-[0.1em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {item.stage}
              </span>
              {item.label}
              <span
                aria-hidden
                className="absolute left-3 right-3 xl:left-4 xl:right-4 bottom-1 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-transit"
              />
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
            <FileText className="w-4 h-4" aria-hidden />
            <span className="hidden xl:inline font-tele text-xs font-medium tracking-[0.18em] uppercase">Resume</span>
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 !text-xs">
            <span className="flex items-center gap-1.5">
              Contact <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
            </span>
          </a>
          <button
            className="icon-btn lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" aria-hidden /> : <Menu className="w-4 h-4" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Traverse bar */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 -bottom-px h-px origin-left bg-gradient-to-r from-signal via-gold to-gold"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden bg-[hsl(var(--deep)/0.97)] backdrop-blur-xl border-b border-rule/10"
          >
            <div className="gutter py-6 flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between gap-4 py-3.5 border-b border-rule/10 plate text-2xl text-ice hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden className="font-tele text-xs tracking-[0.2em] text-gold">
                    {item.stage}
                  </span>
                </motion.a>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-7">
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
