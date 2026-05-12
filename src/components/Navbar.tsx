import { motion } from "framer-motion";
import { BriefcaseBusiness, FileText, Menu, RadioTower, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Evidence", href: "#portfolio" },
  { label: "Arsenal", href: "#services" },
  { label: "Archive", href: "#experience" },
  { label: "Field Log", href: "#software-portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Ivan Tumacay home">
          <span className="flex h-9 w-9 items-center justify-center border border-primary/60 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black uppercase">Ivan Tumacay</span>
            <span className="block font-mono text-[11px] font-semibold text-muted-foreground">COMMAND PORTFOLIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="mailto:tumacayivan@gmail.com"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2 text-sm font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <RadioTower className="h-4 w-4" />
            Start Briefing
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="border border-border bg-card/70 p-2 text-foreground"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/70 bg-background/95 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between border border-border/60 bg-card/60 px-4 py-3 text-base font-bold text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                <FileText className="h-4 w-4 text-primary" />
              </a>
            ))}
            <a
              href="mailto:tumacayivan@gmail.com"
              className="mt-2 inline-flex items-center justify-center gap-2 border border-primary bg-primary px-4 py-3 font-black text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Start Briefing
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
