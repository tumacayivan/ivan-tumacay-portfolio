import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/**
 * LIGHT is the default: the dossier read on the desk.
 * DARK is the same file read in the vault.
 *
 * The initial class is applied by the boot script in index.html so the
 * page never flashes the wrong theme; we just read back what it decided.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* private mode — theme just won't persist */
    }
  }, [dark]);

  const toggle = useCallback(() => setDark((d) => !d), []);

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "VAULT LIGHTING — ON" : "VAULT LIGHTING — OFF"}
      className={`group relative inline-flex items-center gap-2 border border-[hsl(var(--accent-red)/0.55)] bg-[hsl(var(--surface-1))] px-2.5 py-2 text-[hsl(var(--ink-charcoal))] transition-colors hover:border-[hsl(var(--accent-red))] hover:text-[hsl(var(--accent-red))] ${className}`}
    >
      {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
      <span className="hidden lg:inline font-courier text-[10px] tracking-[0.28em] uppercase leading-none">
        {dark ? "Lights on" : "Lights out"}
      </span>
    </button>
  );
};

export default ThemeToggle;
