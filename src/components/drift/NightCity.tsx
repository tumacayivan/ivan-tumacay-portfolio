import { motion, type MotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";

/** Small deterministic PRNG so the skyline is identical on every render. */
const rng = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

interface Building {
  x: number;
  w: number;
  h: number;
  windows: { x: number; y: number; o: number; twinkle: boolean }[];
  sign?: { text: string; tone: "sign" | "hud" | "drift" };
}

const SIGNS: Building["sign"][] = [
  { text: "ドリフト", tone: "sign" },
  { text: "東京", tone: "hud" },
  { text: "走り屋", tone: "sign" },
  { text: "夜", tone: "drift" },
  { text: "湾岸", tone: "hud" },
  { text: "車", tone: "sign" },
];

const makeSkyline = (seed: number, width: number, minH: number, maxH: number, signEvery: number, withWindows: boolean) => {
  const r = rng(seed);
  const out: Building[] = [];
  let x = -20;
  let n = 0;
  while (x < width) {
    const w = 40 + Math.floor(r() * 90);
    const h = minH + Math.floor(r() * (maxH - minH));
    const windows: Building["windows"] = [];
    if (withWindows) {
      for (let wy = 14; wy < h - 10; wy += 14) {
        for (let wx = 8; wx < w - 8; wx += 12) {
          if (r() > 0.62) windows.push({ x: x + wx, y: wy, o: 0.35 + r() * 0.65, twinkle: r() > 0.94 });
        }
      }
    }
    out.push({ x, w, h, windows, sign: signEvery && n % signEvery === 2 ? SIGNS[n % SIGNS.length] : undefined });
    x += w + Math.floor(r() * 6);
    n++;
  }
  return out;
};

const VIEW_W = 1600;
const VIEW_H = 420;

/**
 * The hero's night city: sky, a far and a near skyline with lit windows
 * and vertical neon signs, and a road rushing toward the camera.
 * Each layer takes its own parallax rate from the hero's scroll progress.
 */
const NightCity = ({ progress }: { progress: MotionValue<number> }) => {
  const far = useMemo(() => makeSkyline(7, VIEW_W, 120, 300, 0, false), []);
  const near = useMemo(() => makeSkyline(42, VIEW_W, 90, 260, 4, true), []);

  const ridgeY = useTransform(progress, [0, 1], ["0%", "10%"]);
  const farY = useTransform(progress, [0, 1], ["0%", "18%"]);
  const nearY = useTransform(progress, [0, 1], ["0%", "34%"]);
  const moonY = useTransform(progress, [0, 1], ["0%", "60%"]);
  const roadScale = useTransform(progress, [0, 1], [1, 1.25]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, hsl(var(--sky-top)) 0%, hsl(var(--sky-bottom)) 62%, hsl(var(--asphalt)) 100%)" }}
      />
      {/* Moon / sun */}
      <motion.div
        style={{ y: moonY }}
        className="absolute right-[12%] top-[14%] w-40 h-40 sm:w-56 sm:h-56 rounded-full"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, hsl(var(--drift) / 0.95), hsl(var(--sign) / 0.55) 55%, transparent 72%)",
            filter: "blur(2px)",
            opacity: "calc(0.35 + 0.45 * var(--glow-strength))",
          }}
        />
      </motion.div>

      {/* The mountain pass behind the city, with a car's headlights winding downhill */}
      <motion.svg
        style={{ y: ridgeY }}
        viewBox="0 0 1600 420"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-[30%] w-full h-[46%]"
      >
        <path
          d="M0 420 L0 300 C 120 280 200 210 300 190 C 380 175 430 120 520 90 C 600 60 650 70 720 40 C 780 20 830 35 880 60 C 960 100 1010 90 1080 140 C 1160 195 1240 180 1320 230 C 1420 290 1500 270 1600 300 L1600 420 Z"
          fill="hsl(var(--city-far))"
          opacity="0.7"
        />
        <path
          id="touge-road"
          d="M 700 58 C 640 80 760 110 690 130 C 610 152 780 170 700 200 C 620 228 800 250 720 280 C 650 305 820 330 760 360 C 720 380 800 400 780 420"
          fill="none"
          stroke="hsl(var(--hud) / calc(0.14 * var(--glow-strength)))"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {[0, 3.5].map((begin) => (
          <circle key={begin} r="3.5" fill="hsl(var(--window))" style={{ filter: "drop-shadow(0 0 6px hsl(var(--window)))" }}>
            <animateMotion dur="7s" begin={`${begin}s`} repeatCount="indefinite" rotate="auto">
              <mpath href="#touge-road" />
            </animateMotion>
          </circle>
        ))}
      </motion.svg>

      {/* Far skyline */}
      <motion.svg
        style={{ y: farY }}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-[22%] w-full h-[48%]"
      >
        {far.map((b, i) => (
          <rect key={i} x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} fill="hsl(var(--city-far))" />
        ))}
      </motion.svg>

      {/* Near skyline */}
      <motion.svg
        style={{ y: nearY }}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-[18%] w-full h-[40%]"
      >
        {near.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} fill="hsl(var(--city))" />
            {b.windows.map((w, j) => (
              <rect
                key={j}
                x={w.x}
                y={VIEW_H - b.h + w.y}
                width="5"
                height="7"
                fill="hsl(var(--window))"
                opacity={w.o * 0.8}
                className={w.twinkle ? "animate-blink" : undefined}
                style={w.twinkle ? { animationDuration: `${2 + (j % 5)}s` } : undefined}
              />
            ))}
            {b.sign && (
              <g
                className="neon-sign"
                style={{ filter: `drop-shadow(0 0 6px hsl(var(--${b.sign.tone}) / var(--glow-strength)))` }}
              >
                <rect
                  x={b.x + b.w / 2 - 13}
                  y={VIEW_H - b.h + 18}
                  width="26"
                  height={b.sign.text.length * 26 + 12}
                  fill="hsl(var(--asphalt) / 0.6)"
                  stroke={`hsl(var(--${b.sign.tone}))`}
                  strokeWidth="1.5"
                />
                {[...b.sign.text].map((ch, k) => (
                  <text
                    key={k}
                    x={b.x + b.w / 2}
                    y={VIEW_H - b.h + 42 + k * 26}
                    textAnchor="middle"
                    fontSize="20"
                    fontFamily="Dela Gothic One, sans-serif"
                    fill={`hsl(var(--${b.sign.tone}))`}
                  >
                    {ch}
                  </text>
                ))}
              </g>
            )}
          </g>
        ))}
      </motion.svg>

      {/* Horizon haze */}
      <div
        className="absolute inset-x-0 bottom-[16%] h-[18%]"
        style={{ background: "linear-gradient(180deg, transparent, hsl(var(--sign) / calc(0.25 * var(--glow-strength))) 60%, transparent)" }}
      />

      {/* Road rushing toward the camera */}
      <motion.div
        style={{ scale: roadScale }}
        className="absolute inset-x-0 bottom-0 h-[22%] origin-bottom [perspective:420px]"
      >
        <div
          className="road-plane absolute left-1/2 bottom-0 w-[260%] h-[260%] -translate-x-1/2 origin-bottom"
          style={{ transform: "translateX(-50%) rotateX(72deg)" }}
        />
      </motion.div>

      {/* Scanlines + bottom fade into the page */}
      <div className="absolute inset-0 scanlines opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-asphalt" />
    </div>
  );
};

export default NightCity;
