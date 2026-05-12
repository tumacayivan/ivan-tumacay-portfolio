import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import soundtrack3 from "@/assets/soundtrack3.mp3";

/**
 * BackgroundMusic
 *
 * Plays soundtrack3.mp3 on loop in the background. Because most browsers
 * block autoplay of audio until the user interacts with the page, we wait
 * for the first user gesture (scroll, mouse wheel, click, key press, or
 * touch on mobile devices) before starting playback.
 *
 * A small floating toggle button in the bottom-right lets the user pause
 * or resume the music at any time. Once the user pauses manually, the
 * gesture auto-start is disabled so we don't override their preference.
 */
const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Tracks whether the user has manually paused. When true we no longer
  // auto-resume on user gestures.
  const userPausedRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create the audio element programmatically so it lives outside the
    // render tree and is not affected by re-renders.
    const audio = new Audio(soundtrack3);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5; // moderate background volume
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    const startPlayback = () => {
      // If the user has manually paused, respect that and don't auto-resume.
      if (userPausedRef.current) {
        removeListeners();
        return;
      }
      if (!audio.paused) {
        removeListeners();
        return;
      }

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => {
            removeListeners();
          })
          .catch(() => {
            // Autoplay was blocked — allow another gesture to try again.
          });
      } else {
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", startPlayback);
      window.removeEventListener("wheel", startPlayback);
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("keydown", startPlayback);
    };

    // Listen for any of the user gestures that should start the music.
    // `passive: true` keeps scroll/touch performance smooth.
    window.addEventListener("scroll", startPlayback, { passive: true });
    window.addEventListener("wheel", startPlayback, { passive: true });
    window.addEventListener("click", startPlayback);
    window.addEventListener("touchstart", startPlayback, { passive: true });
    window.addEventListener("keydown", startPlayback);

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
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // ignore — user can click again
        });
      }
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-4 right-4 z-50 p-2 border-2 border-ink bg-paper text-ink hover:bg-ink hover:text-paper transition-colors shadow-md"
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </button>
  );
};

export default BackgroundMusic;
