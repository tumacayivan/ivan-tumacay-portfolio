import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/**
 * DEEP SPACE is the default: outside the hull.
 * DAYLIGHT is home — the dust bowl, low sun, dry warm light.
 *
 * The initial class is applied by the boot script in index.html so the
 * page never flashes the wrong theme; every toggle instance stays in sync
 * by watching the <html> class instead of keeping its own copy.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [deep, setDeep] = useState(
    () => typeof document === "undefined" || document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setDeep(root.classList.contains("dark")));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("transit-theme", next ? "dark" : "light");
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
      aria-checked={!deep}
      aria-label={deep ? "Switch to daylight" : "Switch to deep space"}
      title={deep ? "Daylight" : "Deep space"}
      className={`icon-btn ${className}`}
    >
      {deep ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
      <span className="hidden xl:inline font-tele text-xs font-medium tracking-[0.18em] uppercase">
        {deep ? "Day" : "Deep"}
      </span>
    </button>
  );
};

export default ThemeToggle;
