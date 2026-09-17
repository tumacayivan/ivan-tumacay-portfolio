import { useCallback, useEffect, useState } from "react";

/**
 * The lens change.
 *
 * COLOUR is the default grade: carbon black with the one warm source of
 * light. MONO drains it — the same film, printed in black and white.
 *
 * The initial class is applied by the boot script in index.html so the
 * page never flashes the wrong grade; every toggle instance stays in sync
 * by watching the <html> class instead of keeping its own copy.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [colour, setColour] = useState(
    () => typeof document === "undefined" || document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setColour(root.classList.contains("dark")));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("grade", next ? "colour" : "mono");
    } catch {
      /* private mode — the grade just won't persist */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      data-control-hint
      aria-checked={!colour}
      aria-label={colour ? "Switch to the black and white grade" : "Switch to the colour grade"}
      title={colour ? "Black and white" : "Colour"}
      className={`icon-btn !gap-2 ${className}`}
    >
      {/* Two halves of the same frame: one graded, one bare */}
      <span aria-hidden className="flex h-4 w-4 border border-current">
        <span className={`w-1/2 ${colour ? "bg-ember" : "bg-current"}`} />
        <span className="w-1/2" />
      </span>
      <span className="hidden xl:inline font-doc text-[11px] font-semibold tracking-[0.18em] uppercase">
        {colour ? "B/W" : "Colour"}
      </span>
    </button>
  );
};

export default ThemeToggle;
