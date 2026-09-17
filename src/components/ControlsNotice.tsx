import { AnimatePresence, motion } from "framer-motion";
import { Moon, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SEEN_KEY = "controls-notice-seen";
const SHOW_DELAY_MS = 1500;
const AUTO_DISMISS_MS = 12000;

/**
 * ControlsNotice
 *
 * A one-time field briefing shown shortly after the page loads, telling the
 * visitor that the site has a light/dark toggle and a music mute button.
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

  useEffect(() => {
    try {
      if (localStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* storage blocked — still show it */
    }
    const id = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-16 right-4 left-4 sm:left-auto z-50 sm:w-[340px] border border-[hsl(var(--accent-red))] bg-[hsl(var(--surface-2))] text-[hsl(var(--ink-charcoal))] shadow-[0_24px_48px_-20px_var(--shadow-3)]"
        >
          <div className="diag-stripes h-1" />
          <div className="flex items-center justify-between px-4 pt-3">
            <span className="flex items-center gap-2 font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-red))] animate-pulse-classified" />
              FIELD BRIEFING
            </span>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss notice"
              className="p-1 text-[hsl(var(--ink-brown))] hover:text-[hsl(var(--accent-red))] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <ul className="px-4 pt-2 pb-3 space-y-2.5 font-courier text-[12px] leading-snug">
            <li className="flex gap-3">
              <Moon className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
              <span>
                <strong className="font-blackops text-[14px] tracking-[0.14em] uppercase">Light / dark mode</strong>
                <br />
                <span className="text-[hsl(var(--ink-brown))]">Switch with the lights button in the top bar.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Volume2 className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
              <span>
                <strong className="font-blackops text-[14px] tracking-[0.14em] uppercase">Soundtrack on</strong>
                <br />
                <span className="text-[hsl(var(--ink-brown))]">Music plays once you scroll. Mute or unmute with the speaker button below.</span>
              </span>
            </li>
          </ul>

          <div className="px-4 pb-4">
            <button type="button" onClick={dismiss} className="dossier-cta w-full justify-center text-[13px] !py-2">
              Got it
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default ControlsNotice;
