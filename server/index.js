/**
 * Ivan Tumacay portfolio — backend service.
 *
 * Serves the built Vite site (dist/) and exposes POST /api/notify, which
 * forwards visitor + inquiry events to a Telegram channel. The bot token
 * lives ONLY in server-side env vars (never shipped to the browser).
 *
 * Required env:
 *   TELEGRAM_BOT_TOKEN   BotFather token
 *   TELEGRAM_CHANNEL     Channel the bot posts to, e.g. @tumacayivan
 *                        (the bot must be an admin of that channel)
 * Optional env:
 *   PORT                 Provided automatically by Render
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHANNEL = process.env.TELEGRAM_CHANNEL;

const app = express();
app.set("trust proxy", true); // Render sits behind a proxy; read real IP from XFF
app.use(express.json({ limit: "16kb" }));

/* ---------------- helpers ---------------- */

// naive in-memory rate limiter (fine for a single Render instance)
const hits = new Map();
function rateLimit(key, max, windowMs) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (arr.length >= max) {
    hits.set(key, arr);
    return false;
  }
  arr.push(now);
  hits.set(key, arr);
  return true;
}

// escape user-supplied text for Telegram HTML parse mode
function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getIp(req) {
  const xff = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return xff || req.socket?.remoteAddress || "";
}

function isPrivateIp(ip) {
  return (
    !ip ||
    ip === "::1" ||
    ip.startsWith("127.") ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip) ||
    ip.startsWith("fc") ||
    ip.startsWith("fd") ||
    ip.startsWith("fe80")
  );
}

async function geolocate(ip) {
  if (isPrivateIp(ip)) return null;
  try {
    const r = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: AbortSignal.timeout(4500),
    });
    const d = await r.json();
    if (!d || d.success === false) return null;
    return d;
  } catch {
    return null;
  }
}

async function sendTelegram(text) {
  if (!BOT_TOKEN || !CHANNEL) {
    throw new Error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHANNEL not configured");
  }
  const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHANNEL,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  const d = await r.json().catch(() => ({}));
  if (!d.ok) throw new Error(`Telegram API: ${d.description || r.status}`);
  return d;
}

function fmtGeo(geo, ip) {
  if (!geo) {
    return [
      `🌐 <b>IP:</b> <code>${esc(ip || "unknown")}</code>`,
      `📍 <b>Location:</b> Local / private network (no geo)`,
    ].join("\n");
  }
  const flag = geo.flag?.emoji ? ` ${geo.flag.emoji}` : "";
  const loc = [geo.city, geo.region, geo.country].filter(Boolean).join(", ");
  const lat = geo.latitude;
  const lon = geo.longitude;
  const conn = geo.connection || {};
  const lines = [
    `🌐 <b>IP:</b> <code>${esc(ip)}</code>`,
    `📍 <b>Location:</b> ${esc(loc || "?")}${flag}`,
    geo.postal ? `📮 <b>Postal:</b> ${esc(geo.postal)}` : null,
    conn.isp ? `📡 <b>ISP:</b> ${esc(conn.isp)}` : null,
    conn.org && conn.org !== conn.isp ? `🏢 <b>Org:</b> ${esc(conn.org)}` : null,
    conn.asn ? `🔢 <b>ASN:</b> ${esc(conn.asn)}` : null,
    geo.timezone?.id
      ? `🕰 <b>Timezone:</b> ${esc(geo.timezone.id)}${geo.timezone.utc ? ` (UTC ${esc(geo.timezone.utc)})` : ""}`
      : null,
    lat != null && lon != null
      ? `🧭 <b>Coords:</b> <a href="https://maps.google.com/?q=${lat},${lon}">${lat}, ${lon}</a>`
      : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function fmtClient(c = {}) {
  return [
    c.page ? `🔗 <b>Page:</b> ${esc(c.page)}` : null,
    c.referrer ? `↩️ <b>Referrer:</b> ${esc(c.referrer)}` : null,
    c.userAgent ? `💻 <b>Device:</b> ${esc(c.userAgent)}` : null,
    c.platform ? `🖥 <b>Platform:</b> ${esc(c.platform)}` : null,
    c.screen ? `📐 <b>Screen:</b> ${esc(c.screen)}${c.viewport ? ` · vp ${esc(c.viewport)}` : ""}` : null,
    c.language ? `🗣 <b>Language:</b> ${esc(c.language)}` : null,
    c.tz ? `🌍 <b>Browser TZ:</b> ${esc(c.tz)}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

/* ---------------- API ---------------- */

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, configured: Boolean(BOT_TOKEN && CHANNEL) });
});

app.post("/api/notify", async (req, res) => {
  try {
    const ip = getIp(req);
    const body = req.body || {};
    const type = body.type === "inquiry" ? "inquiry" : "visit";

    // honeypot — bots fill hidden fields; silently accept & drop
    if (body.hp) return res.json({ ok: true });

    if (type === "inquiry") {
      if (!rateLimit(`inq:${ip}`, 5, 15 * 60 * 1000)) {
        return res.status(429).json({ ok: false, error: "rate_limited" });
      }
    } else {
      // visits: at most one per IP / 30 min as a backstop against refresh floods
      if (!rateLimit(`vis:${ip}`, 1, 30 * 60 * 1000)) {
        return res.json({ ok: true, skipped: true });
      }
    }

    const geo = await geolocate(ip);
    const when = new Date().toUTCString();
    let text;

    if (type === "inquiry") {
      const name = esc(body.name).slice(0, 120);
      const email = esc(body.email).slice(0, 160);
      const company = esc(body.company).slice(0, 160);
      const kind = esc(body.inquiryType).slice(0, 60);
      const budget = esc(body.budget).slice(0, 80);
      const message = esc(body.message).slice(0, 3000);

      text = [
        `📨 <b>NEW INQUIRY</b>`,
        `━━━━━━━━━━━━━━`,
        `👤 <b>Name:</b> ${name || "—"}`,
        `✉️ <b>Email:</b> ${email || "—"}`,
        company ? `🏢 <b>Company:</b> ${company}` : null,
        kind ? `🏷 <b>Type:</b> ${kind}` : null,
        budget ? `💰 <b>Budget:</b> ${budget}` : null,
        ``,
        `📝 <b>Message:</b>`,
        message || "—",
        ``,
        `━━━ sender context ━━━`,
        fmtGeo(geo, ip),
        fmtClient(body.client),
        `🕒 <b>Time:</b> ${esc(when)}`,
      ]
        .filter((l) => l !== null)
        .join("\n");
    } else {
      const returning = Boolean(body.returning);
      const head = returning ? "🔵 <b>RETURNING VISITOR</b>" : "🟢 <b>NEW VISITOR</b>";
      text = [
        head,
        `━━━━━━━━━━━━━━`,
        fmtGeo(geo, ip),
        fmtClient(body.client),
        body.visitCount ? `🔁 <b>Visit #:</b> ${esc(body.visitCount)}` : null,
        body.firstSeen ? `📅 <b>First seen:</b> ${esc(body.firstSeen)}` : null,
        `🕒 <b>Time:</b> ${esc(when)}`,
      ]
        .filter((l) => l !== null)
        .join("\n");
    }

    await sendTelegram(text);
    res.json({ ok: true });
  } catch (err) {
    console.error("[notify]", err.message);
    res.status(500).json({ ok: false, error: "send_failed" });
  }
});

/* ---------------- static site ---------------- */

const distDir = path.join(__dirname, "..", "dist");
app.use(express.static(distDir));
// SPA fallback for any non-API GET
app.get(/^(?!\/api\/).*/, (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
  if (!BOT_TOKEN || !CHANNEL) {
    console.warn("⚠  TELEGRAM_BOT_TOKEN / TELEGRAM_CHANNEL not set — /api/notify will 500 until configured.");
  }
});
