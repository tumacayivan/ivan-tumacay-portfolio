import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/**
 * NIGHT is the default: the car park at 2am.
 * DAY is the same garage with the shutters up.
 *
 * The initial class is applied by the boot script in index.html so the
 * page never flashes the wrong theme; every toggle instance stays in sync
 * by watching the <html> class instead of keeping its own copy.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [night, setNight] = useState(
    () => typeof document === "undefined" || document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setNight(root.classList.contains("dark")));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("drift-theme", next ? "dark" : "light");
    } catch {
      /* private mode — theme just won't persist */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      data-control-hint
      aria-checked={!night}
      aria-label={night ? "Switch to day mode" : "Switch to night mode"}
      title={night ? "Day mode" : "Night mode"}
      className={`icon-btn ${className}`}
    >
      {night ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="hidden xl:inline font-hud text-[11px] font-semibold tracking-[0.18em] uppercase">
        {night ? "Day" : "Night"}
      </span>
    </button>
  );
};

export default ThemeToggle;
