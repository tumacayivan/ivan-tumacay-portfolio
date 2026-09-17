import { AnimatePresence, motion } from "framer-motion";
import { Contrast, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useIgnitionDone } from "./reaction/IgnitionSequence";

const SEEN_KEY = "controls-notice-seen";
const SHOW_DELAY_MS = 1400;
const AUTO_DISMISS_MS = 12000;

/**
 * A one-time briefing, shown after the opening: the site has two colour
 * grades and a soundtrack, and both are the visitor's to control. While it
 * is open, `html.controls-hint` makes the real buttons pulse (see
 * [data-control-hint] in index.css) so they are easy to find.
 */
const ControlsNotice = () => {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — the notice may show again next visit */
    }
  }, []);

  const ignitionDone = useIgnitionDone();

  useEffect(() => {
    if (!ignitionDone) return;
    try {
      if (localStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* storage blocked — still show it */
    }
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [ignitionDone]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("controls-hint");
    const timer = setTimeout(dismiss, AUTO_DISMISS_MS);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("controls-hint");
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="plate fixed bottom-20 right-5 left-5 sm:left-auto z-50 sm:w-[340px] shadow-[0_30px_60px_-20px_hsl(var(--shadow))]"
        >
          <div className="h-1 bg-ember" />
          <div className="flex items-center justify-between px-4 pt-3">
            <span className="slug">Two controls</span>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss notice"
              className="p-1 text-ink-dim hover:text-ember transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ul className="px-4 pt-2 pb-3 space-y-3">
            <li className="flex gap-3">
              <Contrast className="w-4 h-4 shrink-0 mt-1 text-ember" />
              <span>
                <strong className="font-doc text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                  Colour or black &amp; white
                </strong>
                <br />
                <span className="text-ink-dim">Change the grade with the split-frame button in the top bar.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Volume2 className="w-4 h-4 shrink-0 mt-1 text-ember" />
              <span>
                <strong className="font-doc text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                  Soundtrack
                </strong>
                <br />
                <span className="text-ink-dim">
                  Music starts once you scroll or tap. Mute or unmute with the speaker button below.
                </span>
              </span>
            </li>
          </ul>

          <div className="px-4 pb-4">
            <button type="button" onClick={dismiss} className="btn-primary w-full !py-2.5">
              <span>Understood</span>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default ControlsNotice;
