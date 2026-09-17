import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Jump {
  id: string;
  label: string;
  coord: string;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const COVER_MS = 520;

/**
 * WARP — the passage between places.
 *
 * Any in-page link (href="#…") is intercepted: an aperture opens out of
 * the centre of the frame, a throat of rings rushes past, a plate for the
 * destination holds for a beat, the page moves while it is covered, and
 * the aperture closes again.
 *
 * Sections opt in with data-scene and data-coord attributes.
 */
const Warp = () => {
  const [jump, setJump] = useState<Jump | null>(null);
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
      setJump({
        id,
        label: target.dataset.scene ?? link.textContent?.trim() ?? "",
        coord: target.dataset.coord ?? "",
      });

      window.setTimeout(() => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        target.scrollIntoView();
        html.style.scrollBehavior = prev;
        history.replaceState(null, "", id ? `#${id}` : location.pathname);
        target.focus?.({ preventScroll: true });
      }, COVER_MS + 140);

      window.setTimeout(() => {
        setJump(null);
        busy.current = false;
      }, COVER_MS + 420);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {jump && (
        <motion.div key={jump.id} aria-hidden className="fixed inset-0 z-[150] pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[hsl(var(--void))] flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(120% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)", transition: { duration: COVER_MS / 1000, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, ease: EASE }}
          >
            {/* the throat: rings rushing past the camera */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 0.09, 0.18, 0.27].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute rounded-full border"
                  style={{
                    width: "36vmin",
                    height: "36vmin",
                    borderColor: "hsl(var(--beam-signal) / 0.5)",
                  }}
                  initial={{ scale: 0.15, opacity: 0 }}
                  animate={{ scale: 5, opacity: [0, 0.8, 0] }}
                  transition={{ duration: 1.1, delay, ease: "easeOut" }}
                />
              ))}
              <motion.span
                className="absolute rounded-full"
                style={{
                  width: "22vmin",
                  height: "22vmin",
                  background:
                    "radial-gradient(circle, hsl(var(--beam-gold) / 0.35), hsl(var(--beam-gold) / 0) 70%)",
                }}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1.6, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>

            <motion.div
              className="relative text-center px-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {jump.coord && (
                <div className="font-tele text-xs sm:text-sm tracking-[0.4em] uppercase text-[hsl(var(--beam-signal))] mb-4">
                  {jump.coord}
                </div>
              )}
              <div className="plate text-4xl sm:text-7xl text-[hsl(var(--void-ink))]">{jump.label}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Warp;
