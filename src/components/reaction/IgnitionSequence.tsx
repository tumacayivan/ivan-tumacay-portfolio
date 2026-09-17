import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { detonate } from "./Detonation";

const SESSION_KEY = "ignition-played";
/** If the visitor does nothing, the count starts on its own. */
const AUTO_START_MS = 5000;
const TICK_MS = 620;

type Phase = "arm" | "count" | "fire" | "done";

export const IGNITION_FINISHED_EVENT = "ignition-finished";

const shouldPlay = () => {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return false;
  } catch {
    /* storage blocked — play it */
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/** Decided once per page load so every component agrees. */
export const IGNITION_WILL_PLAY = typeof window !== "undefined" && shouldPlay();

/** True once the opening is over (or was never going to play). */
export const useIgnitionDone = () => {
  const [done, setDone] = useState(() => !IGNITION_WILL_PLAY);
  useEffect(() => {
    if (done) return;
    const onDone = () => setDone(true);
    window.addEventListener(IGNITION_FINISHED_EVENT, onDone, { once: true });
    return () => window.removeEventListener(IGNITION_FINISHED_EVENT, onDone);
  }, [done]);
  return done;
};

const finish = () => {
  document.documentElement.classList.remove("igniting");
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(IGNITION_FINISHED_EVENT));
};

const R = 46;
const CIRC = 2 * Math.PI * R;

/**
 * The opening: a dark room, a name, and a count from three.
 *
 * "Start the count" is a real click, so BackgroundMusic's first-gesture
 * listener brings the soundtrack up exactly as the numbers begin. On the
 * last tick the screen is handed to <Detonation /> — the light is what
 * clears the title card away.
 *
 * Under four seconds, skippable, once per session, and never shown to
 * visitors who ask for reduced motion.
 */
const IgnitionSequence = () => {
  const play = IGNITION_WILL_PLAY;
  const [phase, setPhase] = useState<Phase>(play ? "arm" : "done");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (play) document.documentElement.classList.add("igniting");
    else window.dispatchEvent(new Event(IGNITION_FINISHED_EVENT));
  }, [play]);

  const start = useCallback(() => setPhase((p) => (p === "arm" ? "count" : p)), []);
  const skip = useCallback(() => setPhase("done"), []);

  useEffect(() => {
    if (phase !== "arm") return;
    const id = setTimeout(start, AUTO_START_MS);
    return () => clearTimeout(id);
  }, [phase, start]);

  useEffect(() => {
    if (phase !== "count") return;
    const timers = [2, 1].map((n, i) => setTimeout(() => setCount(n), (i + 1) * TICK_MS));
    timers.push(setTimeout(() => setPhase("fire"), 3 * TICK_MS));
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fire") return;
    detonate();
    const id = setTimeout(() => setPhase("done"), 420);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "done" && play) finish();
  }, [phase, play]);

  useEffect(() => {
    if (phase === "done") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, skip]);

  const counting = phase === "count" || phase === "fire";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="ignition"
          role="dialog"
          aria-label="Opening sequence"
          className="fixed inset-0 z-[200] overflow-hidden bg-[hsl(var(--void))] text-[hsl(var(--void-ink))]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          {/* Letterbox */}
          <motion.div className="absolute top-0 inset-x-0 bg-black z-10" initial={{ height: 0 }} animate={{ height: "10vh" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="absolute bottom-0 inset-x-0 bg-black z-10" initial={{ height: 0 }} animate={{ height: "10vh" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />

          {/* Graticule: the frame lines of an instrument looking at the dark */}
          <div aria-hidden className="absolute inset-0 opacity-[0.18]">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[hsl(var(--void-ink))]" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-[hsl(var(--void-ink))]" />
          </div>
          <div aria-hidden className="grain-layer absolute -inset-[12%]" />

          <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-doc text-[11px] sm:text-xs tracking-[0.42em] uppercase text-[hsl(var(--void-ember))] mb-6"
            >
              Test record · 001
            </motion.div>

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em", y: 14 }}
              animate={{ opacity: 1, letterSpacing: "0.02em", y: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="display text-[15vw] sm:text-[8.5vw] leading-none"
            >
              Ivan Tumacay
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-doc text-[11px] sm:text-sm tracking-[0.3em] uppercase text-[hsl(var(--void-ink)/0.6)] mt-4"
            >
              A chain reaction in four parts
            </motion.div>

            {/* The count */}
            <div className="mt-10 h-[124px] flex flex-col items-center justify-center">
              {counting ? (
                <div className="relative w-[120px] h-[120px]" aria-live="polite" aria-atomic>
                  <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
                    <circle cx="60" cy="60" r={R} fill="none" stroke="hsl(var(--void-ink) / 0.18)" strokeWidth="2" />
                    <motion.circle
                      key={count}
                      cx="60"
                      cy="60"
                      r={R}
                      fill="none"
                      stroke="hsl(var(--void-ember))"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeDasharray={CIRC}
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: CIRC }}
                      transition={{ duration: TICK_MS / 1000, ease: "linear" }}
                    />
                  </svg>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={count}
                      initial={{ opacity: 0, scale: 1.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center display text-7xl tabular-nums"
                    >
                      {phase === "fire" ? "" : count}
                    </motion.span>
                  </AnimatePresence>
                  <span className="sr-only">{phase === "fire" ? "Ignition" : `T minus ${count}`}</span>
                </div>
              ) : (
                <motion.button
                  type="button"
                  onClick={start}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="btn-primary"
                  autoFocus
                >
                  <span className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" /> Start the count
                  </span>
                </motion.button>
              )}
            </div>

            <button
              type="button"
              onClick={skip}
              className="absolute bottom-[calc(10vh+1.25rem)] right-6 font-doc text-[11px] tracking-[0.3em] uppercase text-[hsl(var(--void-ink)/0.5)] hover:text-[hsl(var(--void-ink))] transition-colors"
            >
              Skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IgnitionSequence;
