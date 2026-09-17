import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Phase = "title" | "countdown" | "go" | "done";

export const INTRO_FINISHED_EVENT = "intro-finished";

/**
 * The opening runs on every load — it is the start line, and the press of
 * its button is what lets the browser play the soundtrack at all.
 */
export const INTRO_WILL_PLAY = typeof window !== "undefined";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  window.dispatchEvent(new Event(INTRO_FINISHED_EVENT));
};

/**
 * Opening titles on every load: letterbox bars, a title card, three start
 * lights, GO, then the frame tears open diagonally onto the hero.
 *
 * It waits for the press — nothing starts on a timer — because that press
 * is the gesture BackgroundMusic needs before a browser will let the
 * soundtrack play. Escape still gets past it.
 */
const IntroSequence = () => {
  const play = INTRO_WILL_PLAY;
  const [phase, setPhase] = useState<Phase>(play ? "title" : "done");
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (play) document.documentElement.classList.add("intro-playing");
    else window.dispatchEvent(new Event(INTRO_FINISHED_EVENT));
  }, [play]);

  const start = useCallback(
    () => setPhase((p) => (p !== "title" ? p : prefersReducedMotion() ? "done" : "countdown")),
    [],
  );
  const skip = useCallback(() => setPhase("done"), []);

  useEffect(() => {
    if (phase !== "countdown") return;
    const timers = [1, 2, 3].map((n) => setTimeout(() => setLit(n), n * 480));
    timers.push(setTimeout(() => setPhase("go"), 4 * 480));
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "go") return;
    const id = setTimeout(() => setPhase("done"), 650);
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
          {/* Two halves of the frame tear apart on a diagonal */}
          <motion.div
            className="absolute inset-0 bg-[hsl(var(--void))]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 38%, 0 62%)" }}
            exit={{ y: "-70%", x: "-6%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-[hsl(var(--void))]"
            style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
            exit={{ y: "70%", x: "6%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* The tear line glows orange as it opens */}
          <motion.div
            aria-hidden
            className="absolute left-[-10%] right-[-10%] top-1/2 h-[3px] origin-center"
            style={{
              rotate: "-12deg",
              background: "linear-gradient(90deg, transparent, hsl(var(--neon-drift)), hsl(var(--neon-sign)), transparent)",
              boxShadow: "0 0 30px hsl(var(--neon-drift))",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase === "go" ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="relative h-full flex flex-col items-center justify-center text-[hsl(var(--void-ink))] px-6"
            exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Letterbox bars */}
            <motion.div className="absolute top-0 inset-x-0 bg-black" initial={{ height: 0 }} animate={{ height: "11vh" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
            <motion.div className="absolute bottom-0 inset-x-0 bg-black" initial={{ height: 0 }} animate={{ height: "11vh" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />

            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.9em" }}
              animate={{ opacity: 1, letterSpacing: "0.42em" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-hud text-[11px] sm:text-xs uppercase text-[hsl(var(--neon-hud))] mb-5 text-center"
            >
              A portfolio in motion
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30, skewX: 0 }}
              animate={{ opacity: 1, y: 0, skewX: -12 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl text-[15vw] sm:text-[9vw] text-center speed-trail"
            >
              Ivan <span className="text-[hsl(var(--neon-drift))]">Tumacay</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="neon-kanji text-2xl sm:text-3xl mt-3 tracking-[0.3em]"
              aria-hidden
            >
              東京 · 峠
            </motion.div>

            {/* Start lights */}
            <div className="mt-10 flex items-center gap-4 sm:gap-6" aria-hidden>
              {[1, 2, 3].map((n) => {
                const green = phase === "go";
                const on = green || lit >= n;
                return (
                  <motion.span
                    key={n}
                    className={`block w-8 h-8 sm:w-11 sm:h-11 rounded-full border-2 border-white/15 transition-[background-color,box-shadow] duration-200 ${
                      green
                        ? "bg-[hsl(140_90%_50%)] shadow-[0_0_26px_hsl(140_90%_50%)]"
                        : on
                          ? "bg-[hsl(var(--neon-drift))] shadow-[0_0_26px_hsl(var(--neon-drift))]"
                          : "bg-[hsl(var(--card-ink))]"
                    }`}
                    animate={{ scale: on ? [1.25, 1] : 1 }}
                    transition={{ duration: 0.25 }}
                  />
                );
              })}
            </div>

            <div className="h-24 mt-8 flex flex-col items-center justify-start">
              {phase === "title" && (
                <motion.button
                  type="button"
                  onClick={start}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="btn-drift"
                  autoFocus
                >
                  <span className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" /> Start engine
                  </span>
                </motion.button>
              )}
              {phase === "go" && (
                <motion.div
                  initial={{ scale: 2.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="display-xl text-6xl sm:text-7xl text-[hsl(140_90%_55%)]"
                >
                  GO
                </motion.div>
              )}
            </div>

            <button
              type="button"
              onClick={skip}
              className="absolute bottom-[calc(11vh+1rem)] right-6 font-hud text-[11px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors"
            >
              Skip intro
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
