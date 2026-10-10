import * as THREE from "three";

export const C = {
  void: "#03060a",
  bull: "#35f0a0",
  bear: "#ff4d6a",
  amber: "#ffb547",
  ice: "#7fd8ff",
  dawn: "#ff9a5a",
};

/** Seeded PRNG so every visit sees the same market. */
export const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

type Bar = { o: number; h: number; l: number; c: number };

const nextBar = (prev: number, r: () => number, vol: number): Bar => {
  const o = prev;
  const c = o + (r() - 0.48) * vol;
  return { o, c, h: Math.max(o, c) + r() * vol * 0.6, l: Math.min(o, c) - r() * vol * 0.6 };
};

export type ScreenKind = "candles" | "equity" | "book";

/**
 * A monitor that keeps trading: a canvas chart that ticks on its own.
 * Returns the texture and a `tick()` to call a few times a second.
 */
export const makeScreen = (kind: ScreenKind, seed: number, ticker: string) => {
  const W = 640;
  const H = 360;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext("2d")!;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const r = rng(seed);

  const bars: Bar[] = [];
  let last = 100;
  for (let i = 0; i < 64; i++) {
    const b = nextBar(last, r, 1.6);
    bars.push(b);
    last = b.c;
  }
  let live = { ...bars[bars.length - 1] };
  let equity: number[] = [];
  let e = 0;
  for (let i = 0; i < 120; i++) {
    e += (r() - 0.42) * 1.2;
    equity.push(e);
  }

  const draw = () => {
    g.fillStyle = "#04080d";
    g.fillRect(0, 0, W, H);
    // grid
    g.strokeStyle = "rgba(127,216,255,0.07)";
    g.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x, H);
      g.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      g.beginPath();
      g.moveTo(0, y);
      g.lineTo(W, y);
      g.stroke();
    }
    g.font = "bold 20px 'JetBrains Mono', monospace";
    g.fillStyle = "rgba(220,240,255,0.85)";
    g.fillText(ticker, 18, 32);

    if (kind === "candles") {
      const all = [...bars.slice(1), live];
      const hi = Math.max(...all.map((b) => b.h));
      const lo = Math.min(...all.map((b) => b.l));
      const y = (v: number) => 56 + ((hi - v) / (hi - lo || 1)) * (H - 80);
      const bw = (W - 40) / all.length;
      all.forEach((b, i) => {
        const x = 20 + i * bw + bw / 2;
        const up = b.c >= b.o;
        g.strokeStyle = g.fillStyle = up ? C.bull : C.bear;
        g.beginPath();
        g.moveTo(x, y(b.h));
        g.lineTo(x, y(b.l));
        g.stroke();
        const top = y(Math.max(b.o, b.c));
        g.fillRect(x - bw * 0.32, top, bw * 0.64, Math.max(2, y(Math.min(b.o, b.c)) - top));
      });
      const ly = y(live.c);
      g.setLineDash([4, 4]);
      g.strokeStyle = C.amber;
      g.beginPath();
      g.moveTo(0, ly);
      g.lineTo(W, ly);
      g.stroke();
      g.setLineDash([]);
      g.fillStyle = C.amber;
      g.fillRect(W - 96, ly - 13, 96, 26);
      g.fillStyle = "#04080d";
      g.fillText(live.c.toFixed(2), W - 88, ly + 7);
    } else if (kind === "equity") {
      const hi = Math.max(...equity);
      const lo = Math.min(...equity);
      const y = (v: number) => 60 + ((hi - v) / (hi - lo || 1)) * (H - 90);
      const grad = g.createLinearGradient(0, 60, 0, H);
      grad.addColorStop(0, "rgba(53,240,160,0.35)");
      grad.addColorStop(1, "rgba(53,240,160,0)");
      g.beginPath();
      equity.forEach((v, i) => {
        const x = (i / (equity.length - 1)) * W;
        if (i) g.lineTo(x, y(v));
        else g.moveTo(x, y(v));
      });
      g.lineTo(W, H);
      g.lineTo(0, H);
      g.fillStyle = grad;
      g.fill();
      g.beginPath();
      equity.forEach((v, i) => {
        const x = (i / (equity.length - 1)) * W;
        if (i) g.lineTo(x, y(v));
        else g.moveTo(x, y(v));
      });
      g.strokeStyle = C.bull;
      g.lineWidth = 3;
      g.stroke();
      g.lineWidth = 1;
      g.fillStyle = "rgba(220,240,255,0.55)";
      g.font = "14px 'JetBrains Mono', monospace";
      g.fillText("EQUITY · SIMULATED", 18, 54);
    } else {
      // order book ladder
      g.font = "15px 'JetBrains Mono', monospace";
      const mid = live.c;
      for (let i = 0; i < 9; i++) {
        const size = 40 + r() * 220;
        const py = 60 + i * 15;
        g.fillStyle = "rgba(255,77,106,0.25)";
        g.fillRect(W - size - 20, py - 11, size, 13);
        g.fillStyle = C.bear;
        g.fillText((mid + (9 - i) * 0.05).toFixed(2), 20, py);
      }
      for (let i = 0; i < 9; i++) {
        const size = 40 + r() * 220;
        const py = 210 + i * 15;
        g.fillStyle = "rgba(53,240,160,0.25)";
        g.fillRect(W - size - 20, py - 11, size, 13);
        g.fillStyle = C.bull;
        g.fillText((mid - i * 0.05).toFixed(2), 20, py);
      }
      g.fillStyle = C.amber;
      g.font = "bold 22px 'JetBrains Mono', monospace";
      g.fillText(mid.toFixed(2), 20, 198);
    }
    tex.needsUpdate = true;
  };

  let n = 0;
  const tick = () => {
    n++;
    live.c += (r() - 0.49) * 0.5;
    live.h = Math.max(live.h, live.c);
    live.l = Math.min(live.l, live.c);
    if (n % 8 === 0) {
      bars.push(live);
      bars.shift();
      live = { o: live.c, h: live.c, l: live.c, c: live.c };
      e += (r() - 0.4) * 1.4;
      equity = [...equity.slice(1), e];
    }
    draw();
  };
  draw();
  return { tex, tick };
};

/** The bedroom window: Cavite at night, or the same view at dawn. */
export const makeWindow = (dawn: boolean) => {
  const W = 512;
  const H = 512;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext("2d")!;
  const r = rng(dawn ? 7 : 3);
  const sky = g.createLinearGradient(0, 0, 0, H);
  if (dawn) {
    sky.addColorStop(0, "#1b2a4a");
    sky.addColorStop(0.45, "#c85a5a");
    sky.addColorStop(0.7, "#ffb066");
    sky.addColorStop(1, "#ffd9a0");
  } else {
    sky.addColorStop(0, "#02040a");
    sky.addColorStop(0.7, "#0a1426");
    sky.addColorStop(1, "#1a2440");
  }
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  if (dawn) {
    const sun = g.createRadialGradient(W * 0.62, H * 0.74, 4, W * 0.62, H * 0.74, 160);
    sun.addColorStop(0, "rgba(255,240,200,1)");
    sun.addColorStop(0.15, "rgba(255,200,120,0.9)");
    sun.addColorStop(1, "rgba(255,160,90,0)");
    g.fillStyle = sun;
    g.fillRect(0, 0, W, H);
  } else {
    g.fillStyle = "#e8eef8";
    g.beginPath();
    g.arc(W * 0.72, H * 0.2, 18, 0, Math.PI * 2);
    g.fill();
    for (let i = 0; i < 90; i++) {
      g.fillStyle = `rgba(255,255,255,${r() * 0.6})`;
      g.fillRect(r() * W, r() * H * 0.6, 1.5, 1.5);
    }
  }
  // skyline
  let x = 0;
  while (x < W) {
    const w = 18 + r() * 40;
    const h = 40 + r() * 140;
    g.fillStyle = dawn ? "#2a2030" : "#05070d";
    g.fillRect(x, H - h, w, h);
    for (let wy = H - h + 8; wy < H - 6; wy += 10) {
      for (let wx = x + 4; wx < x + w - 4; wx += 8) {
        if (r() < (dawn ? 0.08 : 0.3)) {
          g.fillStyle = r() < 0.8 ? "rgba(255,200,120,0.85)" : "rgba(127,216,255,0.85)";
          g.fillRect(wx, wy, 3, 4);
        }
      }
    }
    x += w + 2;
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};
