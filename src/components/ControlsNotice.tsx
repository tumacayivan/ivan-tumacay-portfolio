import { AnimatePresence, motion } from "framer-motion";
import { Sun, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useIntroDone } from "./transit/IntroSequence";

const SEEN_KEY = "controls-notice-seen";
const SHOW_DELAY_MS = 1200;
const AUTO_DISMISS_MS = 12000;

/**
 * ControlsNotice
 *
 * A one-time briefing shown after the opening sequence, telling the
 * visitor that the site has a daylight/deep-space toggle and a music mute
 * button. While it is open, `html.controls-hint` makes the real controls
 * pulse (see [data-control-hint] in index.css) so they can be found.
 */
const ControlsNotice = () => {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — notice may show again next visit */
    }
  }, []);

  const introDone = useIntroDone();

  useEffect(() => {
    if (!introDone) return;
    try {
      if (localStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* storage blocked — still show it */
    }
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [introDone]);

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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="panel fixed bottom-20 right-5 left-5 sm:left-auto z-50 sm:w-[344px] shadow-[0_40px_90px_-40px_hsl(var(--shade))]"
        >
          <div className="flex items-center justify-between px-4 pt-4">
            <span className="tele-label">Pre-flight</span>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss notice"
              className="p-1 text-ice-dim hover:text-gold transition-colors"
            >
              <X className="w-4 h-4" aria-hidden />
            </button>
          </div>

          <ul className="px-4 pt-3 pb-3 space-y-4">
            <li className="flex gap-3">
              <Sun className="w-4 h-4 shrink-0 mt-1 text-gold" aria-hidden />
              <span>
                <strong className="font-tele text-sm font-medium uppercase tracking-[0.14em] text-ice">
                  Daylight / deep space
                </strong>
                <br />
                <span className="text-ice-dim">Switch with the sun and moon button in the top bar.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Volume2 className="w-4 h-4 shrink-0 mt-1 text-gold" aria-hidden />
              <span>
                <strong className="font-tele text-sm font-medium uppercase tracking-[0.14em] text-ice">
                  Soundtrack
                </strong>
                <br />
                <span className="text-ice-dim">
                  Music plays once you scroll or tap. Mute or unmute with the speaker button below.
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
