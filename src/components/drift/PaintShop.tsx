import { AnimatePresence, motion } from "framer-motion";
import { Paintbrush, Check } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const KEY = "drift-paint";

/** The four liveries. `null` is the factory colour. */
const PAINTS: { id: string | null; name: string; swatch: string }[] = [
  { id: null, name: "Veilside orange", swatch: "linear-gradient(135deg, hsl(22 100% 54%), hsl(336 100% 60%))" },
  { id: "neon", name: "Shibuya magenta", swatch: "linear-gradient(135deg, hsl(322 100% 60%), hsl(186 100% 55%))" },
  { id: "lime", name: "Garage lime", swatch: "linear-gradient(135deg, hsl(24 100% 54%), hsl(88 90% 55%))" },
  { id: "red", name: "Rising sun red", swatch: "linear-gradient(135deg, hsl(356 92% 52%), hsl(0 0% 90%))" },
];

const readPaint = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

/**
 * Paint shop: the same car in four liveries. Choosing one swaps the three
 * accent roles on <html>, so every section, gauge and neon sign follows.
 */
const PaintShop = ({ className = "" }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [paint, setPaint] = useState<string | null>(readPaint);
  const boxRef = useRef<HTMLDivElement>(null);

  const apply = useCallback((id: string | null) => {
    const root = document.documentElement;
    PAINTS.forEach((p) => p.id && root.classList.remove(`paint-${p.id}`));
    if (id) root.classList.add(`paint-${id}`);
    try {
      if (id) localStorage.setItem(KEY, id);
      else localStorage.removeItem(KEY);
    } catch {
      /* private mode — the paint lasts for this visit only */
    }
    setPaint(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = PAINTS.find((p) => p.id === paint) ?? PAINTS[0];

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Paint: ${current.name}. Change the site's colours`}
        title="Paint shop"
        className="icon-btn"
      >
        <Paintbrush className="w-4 h-4" />
        <span aria-hidden className="w-3.5 h-3.5 rounded-full border border-line/20" style={{ background: current.swatch }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="panel absolute right-0 top-[calc(100%+0.5rem)] w-60 p-2 z-50 shadow-[0_30px_60px_-24px_hsl(var(--shadow))]"
          >
            <div className="hud-label px-2 py-2">Paint shop</div>
            {PAINTS.map((p) => {
              const active = p.id === paint;
              return (
                <button
                  key={p.name}
                  role="menuitemradio"
                  aria-checked={active}
                  type="button"
                  onClick={() => {
                    apply(p.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-2 py-2.5 text-left transition-colors ${
                    active ? "text-drift" : "text-ink hover:text-drift"
                  }`}
                >
                  <span aria-hidden className="w-6 h-6 rounded-full border border-line/20 shrink-0" style={{ background: p.swatch }} />
                  <span className="font-hud text-sm font-semibold uppercase tracking-[0.06em] flex-1">{p.name}</span>
                  {active && <Check className="w-4 h-4" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaintShop;
