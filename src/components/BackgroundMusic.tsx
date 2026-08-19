import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import soundtrack3 from "@/assets/soundtrack3.mp3";

/**
 * BackgroundMusic
 *
 * Modern browsers block audio with sound from auto-playing on page load
 * unless the user has interacted with the page first. They DO, however,
 * allow muted autoplay.
 *
 * Strategy:
 *  1. On mount, start the audio MUTED and immediately call play(). Browsers
 *     allow this — so the audio element is already running on page load.
 *  2. On the first user gesture (scroll, click, tap, key, mouse wheel),
 *     unmute the audio. The sound starts the instant the user interacts.
 *  3. A floating toggle button lets the user pause/resume at any time.
 *     A manual pause is remembered so we don't override the user's choice.
 */
const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Tracks whether the user has manually paused. When true we no longer
  // auto-resume on user gestures.
  const userPausedRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Create the audio element programmatically so it lives outside the
    // render tree and is not affected by re-renders.
    const audio = new Audio(soundtrack3);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5; // moderate background volume
    audio.muted = true; // start muted so autoplay is allowed
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Kick off autoplay (muted) immediately. Browsers permit this.
    const tryAutoplay = () => {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Even muted autoplay can be blocked in rare cases — the
          // gesture handler below will start it instead.
        });
      }
    };
    tryAutoplay();

    const onFirstGesture = () => {
      // Respect a manual pause if it somehow happened before this fired.
      if (userPausedRef.current) {
        removeListeners();
        return;
      }

      // Unmute and ensure playback is actually running.
      audio.muted = false;
      setIsMuted(false);
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise.then(() => removeListeners()).catch(() => {
            // Leave listeners attached so a subsequent gesture can retry.
          });
          return;
        }
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", onFirstGesture);
      window.removeEventListener("wheel", onFirstGesture);
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      window.removeEventListener("pointerdown", onFirstGesture);
    };

    // Listen for any user gesture so we can unmute and ensure playback.
    window.addEventListener("scroll", onFirstGesture, { passive: true });
    window.addEventListener("wheel", onFirstGesture, { passive: true });
    window.addEventListener("click", onFirstGesture);
    window.addEventListener("touchstart", onFirstGesture, { passive: true });
    window.addEventListener("keydown", onFirstGesture);
    window.addEventListener("pointerdown", onFirstGesture);

    return () => {
      removeListeners();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // User explicitly resumed — clear the manual-pause flag.
      userPausedRef.current = false;
      audio.muted = false;
      setIsMuted(false);
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // ignore — user can click again
        });
      }
    } else if (audio.muted) {
      // It's playing but muted — clicking should unmute.
      audio.muted = false;
      setIsMuted(false);
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  const showAsOn = isPlaying && !isMuted;

  return (
    <button
      onClick={toggle}
      aria-label={showAsOn ? "Pause background music" : "Play background music"}
      title={showAsOn ? "Pause music" : "Play music"}
      className="fixed bottom-4 right-4 z-50 p-2.5 border border-[hsl(var(--accent-red))] bg-[hsl(var(--surface-1))] text-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(var(--on-red))] transition-colors glow-red"
    >
      {showAsOn ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </button>
  );
};

export default BackgroundMusic;
