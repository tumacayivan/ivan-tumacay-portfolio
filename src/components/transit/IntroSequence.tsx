import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "intro-played";
/** If the visitor does nothing, the burn starts on its own. */
const AUTO_START_MS = 5000;

type Phase = "hold" | "ignition" | "burn" | "done";

export const INTRO_FINISHED_EVENT = "intro-finished";

const shouldPlay = () => {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return false;
  } catch {
    /* storage blocked — play it */
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/** Decided once per page load so every component agrees. */
export const INTRO_WILL_PLAY = typeof window !== "undefined" && shouldPlay();

/** True once the opening sequence is over (or was never going to play). */
export const useIntroDone = () => {
  const [done, setDone] = useState(() => !INTRO_WILL_PLAY);
  useEffect(() => {
    if (done) return;
    const onDone = () => setDone(true);
    window.addEventListener(INTRO_FINISHED_EVENT, onDone, { once: true });
    return () => window.removeEventListener(INTRO_FINISHED_EVENT, onDone);
  }, [done]);
  return done;
};

const finish = () => {
  document.documentElement.classList.remove("intro-playing");
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(INTRO_FINISHED_EVENT));
};

const EASE = [0.16, 1, 0.3, 1] as const;
const HEAVY = [0.76, 0, 0.24, 1] as const;

/**
 * DEPARTURE — the opening.
 *
 * Out of absolute black: a horizon line, a mission plate, then a three
 * count and main engine start. The frame parts along that line and the
 * page is underneath. Under four seconds from the press, skippable at any
 * point, and shown once per session.
 *
 * "Begin transit" is a real click, so BackgroundMusic's first-gesture
 * listener unmutes the soundtrack on ignition.
 */
const IntroSequence = () => {
  const play = INTRO_WILL_PLAY;
  const [phase, setPhase] = useState<Phase>(play ? "hold" : "done");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (play) document.documentElement.classList.add("intro-playing");
    else window.dispatchEvent(new Event(INTRO_FINISHED_EVENT));
  }, [play]);

  const start = useCallback(() => setPhase((p) => (p === "hold" ? "ignition" : p)), []);
  const skip = useCallback(() => setPhase("done"), []);

  useEffect(() => {
    if (phase !== "hold") return;
    const id = setTimeout(start, AUTO_START_MS);
    return () => clearTimeout(id);
  }, [phase, start]);

  useEffect(() => {
    if (phase !== "ignition") return;
    const timers = [2, 1].map((n, i) => setTimeout(() => setCount(n), (i + 1) * 380));
    timers.push(setTimeout(() => setPhase("burn"), 3 * 380));
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "burn") return;
    const id = setTimeout(() => setPhase("done"), 620);
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

  const burning = phase === "burn";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="Opening sequence"
          className="fixed inset-0 z-[200] overflow-hidden"
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* The frame parts along the horizon line */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[hsl(var(--void))]"
            exit={{ y: "-101%" }}
            transition={{ duration: 1, ease: HEAVY }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[hsl(var(--void))]"
            exit={{ y: "101%" }}
            transition={{ duration: 1, ease: HEAVY }}
          />

          {/* The horizon itself: a hairline that becomes main engine light */}
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-px origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--beam-signal) / 0.7) 30%, hsl(var(--beam-gold)) 50%, hsl(var(--beam-signal) / 0.7) 70%, transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: burning ? 1 : 0.5,
              boxShadow: burning
                ? "0 0 90px 18px hsl(var(--beam-gold) / 0.85)"
                : "0 0 24px 0px hsl(var(--beam-gold) / 0.25)",
            }}
            transition={{ duration: burning ? 0.5 : 1.6, ease: EASE }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          />

          <motion.div
            className="relative h-full flex flex-col items-center justify-center px-6 text-[hsl(var(--void-ink))]"
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.45 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
              className="font-tele text-xs sm:text-sm tracking-[0.42em] uppercase text-[hsl(var(--beam-signal))] text-center"
            >
              Mission 001 · Departure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em", filter: "blur(6px)" }}
              animate={{ opacity: 1, letterSpacing: "0.06em", filter: "blur(0px)" }}
              transition={{ duration: 2.2, delay: 0.2, ease: EASE }}
              className="plate text-[13vw] sm:text-[8vw] lg:text-[6.4vw] mt-6 mb-8 text-center"
            >
              Ivan Tumacay
            </motion.h1>

            <div className="h-28 flex flex-col items-center justify-start">
              {phase === "hold" && (
                <motion.button
                  type="button"
                  onClick={start}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
                  className="btn-primary"
                  autoFocus
                >
                  <span className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" aria-hidden /> Begin transit
                  </span>
                </motion.button>
              )}

              {phase === "ignition" && (
                <div className="flex flex-col items-center" aria-live="polite">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="font-tele text-6xl sm:text-7xl font-medium tabular-nums text-[hsl(var(--beam-gold))]"
                  >
                    {String(count).padStart(2, "0")}
                  </motion.span>
                  <span className="font-tele text-xs tracking-[0.34em] uppercase text-[hsl(var(--void-ink))]/60 mt-3">
                    Ignition sequence
                  </span>
                </div>
              )}

              {burning && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-tele text-sm sm:text-base tracking-[0.34em] uppercase text-[hsl(var(--beam-gold))]"
                >
                  Main engine start
                </motion.span>
              )}
            </div>

            <button
              type="button"
              onClick={skip}
              className="absolute bottom-8 right-6 sm:right-10 font-tele text-xs tracking-[0.3em] uppercase text-[hsl(var(--void-ink))]/50 hover:text-[hsl(var(--beam-gold))] transition-colors"
            >
              Skip
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
