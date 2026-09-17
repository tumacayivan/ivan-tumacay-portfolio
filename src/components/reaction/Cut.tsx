import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Slate {
  id: string;
  label: string;
  code: string;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const COVER_MS = 400;

/**
 * The cut between scenes. Any in-page link (href="#…") is intercepted: a
 * camera shutter closes from the top and bottom, a slate names the
 * destination, the page jumps while the frame is dark, and the shutter
 * opens again.
 *
 * Sections opt in with data-scene and data-code attributes. Visitors who
 * ask for reduced motion simply jump.
 */
const Cut = () => {
  const [slate, setSlate] = useState<Slate | null>(null);
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
      setSlate({
        id,
        label: target.dataset.scene ?? link.textContent?.trim() ?? "",
        code: target.dataset.code ?? "",
      });

      window.setTimeout(() => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        target.scrollIntoView();
        html.style.scrollBehavior = prev;
        history.replaceState(null, "", id ? `#${id}` : location.pathname);
        target.focus?.({ preventScroll: true });
      }, COVER_MS + 110);

      window.setTimeout(() => {
        setSlate(null);
        busy.current = false;
      }, COVER_MS + 340);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {slate && (
        <motion.div key={slate.id} aria-hidden className="fixed inset-0 z-[150] pointer-events-none overflow-hidden">
          {/* The blades of the shutter */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-[hsl(var(--void))]"
            initial={{ height: "0%" }}
            animate={{ height: "50.5%" }}
            exit={{ height: "0%", transition: { duration: COVER_MS / 1000, delay: 0.16, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-[hsl(var(--void))]"
            initial={{ height: "0%" }}
            animate={{ height: "50.5%" }}
            exit={{ height: "0%", transition: { duration: COVER_MS / 1000, delay: 0.16, ease: EASE } }}
            transition={{ duration: COVER_MS / 1000, ease: EASE }}
          />

          {/* One frame of light at the splice */}
          <motion.div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px]"
            style={{ background: "hsl(var(--ember-hot))", boxShadow: "0 0 40px hsl(var(--ember))" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0.25] }}
            exit={{ opacity: 0 }}
            transition={{ duration: COVER_MS / 1000, ease: EASE }}
          />

          {/* The slate */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-[hsl(var(--void-ink))] px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: COVER_MS / 1000 - 0.12 }}
          >
            {slate.code && (
              <div className="font-doc text-[11px] sm:text-sm tracking-[0.4em] uppercase text-[hsl(var(--void-ember))] mb-3">
                {slate.code}
              </div>
            )}
            <div className="display text-4xl sm:text-7xl">{slate.label}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cut;
