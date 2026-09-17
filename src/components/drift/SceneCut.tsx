import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Cut {
  id: string;
  label: string;
  kanji: string;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const COVER_MS = 420;

/**
 * Director's cut between scenes. Any in-page link (href="#…") is
 * intercepted: a livery panel sweeps across the screen, a title card for
 * the destination flashes, the page jumps while covered, and the panel
 * sweeps off the other side.
 *
 * Sections opt in with data-scene and data-kanji attributes.
 */
const SceneCut = () => {
  const [cut, setCut] = useState<Cut | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      const target = id ? document.getElementById(id) : document.getElementById("top");
      if (!target) return;

      e.preventDefault();
      if (busy.current) return;

      if (reduce.matches) {
        target.scrollIntoView();
        history.replaceState(null, "", `#${id}`);
        return;
      }

      busy.current = true;
      setCut({
        id,
        label: target.dataset.scene ?? link.textContent?.trim() ?? "",
        kanji: target.dataset.kanji ?? "",
      });

      window.setTimeout(() => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        target.scrollIntoView();
        html.style.scrollBehavior = prev;
        history.replaceState(null, "", id ? `#${id}` : location.pathname);
        target.focus?.({ preventScroll: true });
      }, COVER_MS + 120);

      window.setTimeout(() => {
        setCut(null);
        busy.current = false;
      }, COVER_MS + 360);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {cut && (
        <motion.div key={cut.id} aria-hidden className="fixed inset-0 z-[150] pointer-events-none overflow-hidden">
          {/* magenta leading edge */}
          <motion.div
            className="absolute inset-y-0 -left-[20%] w-[140%] bg-sign"
            style={{ skewX: -14 }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%", transition: { duration: COVER_MS / 1000, delay: 0.1, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, ease: EASE }}
          />
          {/* orange livery body */}
          <motion.div
            className="absolute inset-y-0 -left-[20%] w-[140%] bg-drift"
            style={{ skewX: -14 }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%", transition: { duration: COVER_MS / 1000, delay: 0.05, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, delay: 0.05, ease: EASE }}
          />
          {/* night panel carrying the title card */}
          <motion.div
            className="absolute inset-y-0 -left-[20%] w-[140%] bg-[hsl(246_44%_5%)] flex items-center justify-center"
            style={{ skewX: -14 }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%", transition: { duration: COVER_MS / 1000, delay: 0, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, delay: 0.1, ease: EASE }}
          >
            <div style={{ transform: "skewX(14deg)" }} className="text-center">
              {cut.kanji && <div className="neon-kanji text-3xl sm:text-5xl mb-3">{cut.kanji}</div>}
              <div className="display-xl text-4xl sm:text-7xl text-[hsl(250_40%_97%)]">
                <span className="lean">{cut.label}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SceneCut;
