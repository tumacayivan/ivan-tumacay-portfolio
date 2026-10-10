import { AnimatePresence, motion } from "framer-motion";
import { Sun, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useIntroDone } from "./drift/IntroSequence";

const SEEN_KEY = "controls-notice-seen";
const SHOW_DELAY_MS = 1200;
const AUTO_DISMISS_MS = 12000;

/**
 * ControlsNotice
 *
 * A one-time briefing shown after the opening sequence, telling the
 * visitor that the site has a day/night toggle and a music mute button.
 * While it is open, `html.controls-hint` makes the real controls pulse
 * (see [data-control-hint] in index.css) so the visitor can find them.
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
          initial={{ opacity: 0, x: 40, skewX: -8 }}
          animate={{ opacity: 1, x: 0, skewX: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="panel fixed bottom-20 right-5 left-5 sm:left-auto z-50 sm:w-[340px] shadow-[0_30px_60px_-20px_hsl(var(--shadow))]"
        >
          <div className="livery h-1.5" />
          <div className="flex items-center justify-between px-4 pt-3">
            <span className="hud-label">Before you roll</span>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss notice"
              className="p-1 text-ink-dim hover:text-drift transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ul className="px-4 pt-2 pb-3 space-y-3">
            <li className="flex gap-3">
              <Sun className="w-4 h-4 shrink-0 mt-1 text-drift" />
              <span>
                <strong className="font-hud font-bold uppercase tracking-[0.08em] text-ink">Day / night mode</strong>
                <br />
                <span className="text-ink-dim">Switch with the sun and moon button in the top bar.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Volume2 className="w-4 h-4 shrink-0 mt-1 text-drift" />
              <span>
                <strong className="font-hud font-bold uppercase tracking-[0.08em] text-ink">Soundtrack</strong>
                <br />
                <span className="text-ink-dim">Music plays once you scroll or tap. Mute or unmute with the speaker button below.</span>
              </span>
            </li>
          </ul>

          <div className="px-4 pb-4">
            <button type="button" onClick={dismiss} className="btn-drift w-full !py-2.5">
              <span>Got it</span>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default ControlsNotice;
