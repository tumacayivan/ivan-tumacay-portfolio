/**
 * Client helpers that report visitor + inquiry events to the backend
 * (POST /api/notify), which forwards them to Telegram. No secrets here —
 * the bot token lives only on the server.
 *
 * API base:
 *  - Same-origin (backend serves the site): leave VITE_API_BASE unset → "/api/notify".
 *  - Separate backend service (static site + backend Web Service): set
 *    VITE_API_BASE=https://your-backend.onrender.com at build time.
 */

const env = import.meta.env as Record<string, string | undefined>;
const API_BASE = (env.VITE_API_BASE || "").replace(/\/+$/, "");
const ENDPOINT = `${API_BASE}/api/notify`;

function collectClient() {
  const scr = typeof window !== "undefined" ? window.screen : undefined;
  return {
    page: location.pathname + location.search + location.hash,
    referrer: document.referrer || "Direct / none",
    userAgent: navigator.userAgent,
    platform: (navigator as Navigator & { platform?: string }).platform || "",
    language: navigator.language,
    screen: scr ? `${scr.width}x${scr.height}` : "",
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  inquiryType?: string;
  budget?: string;
  message: string;
  /** honeypot — must stay empty */
  hp?: string;
};

/** Fire a visitor notification once per browser session (best-effort). */
export async function notifyVisit(): Promise<void> {
  try {
    if (sessionStorage.getItem("visit_pinged")) return;
    sessionStorage.setItem("visit_pinged", "1");

    const prev = Number(localStorage.getItem("visit_count") || "0");
    const visitCount = prev + 1;
    localStorage.setItem("visit_count", String(visitCount));

    let firstSeen = localStorage.getItem("visit_first");
    if (!firstSeen) {
      firstSeen = new Date().toISOString();
      localStorage.setItem("visit_first", firstSeen);
    }

    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "visit",
        returning: visitCount > 1,
        visitCount,
        firstSeen,
        client: collectClient(),
      }),
      keepalive: true,
    });
  } catch {
    /* best-effort: never disrupt the page if the backend is unreachable */
  }
}

/** Send a contact-form inquiry. Throws on failure so the UI can react. */
export async function notifyInquiry(data: InquiryPayload): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "inquiry", ...data, client: collectClient() }),
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error(detail?.error === "rate_limited" ? "rate_limited" : "send_failed");
  }
}
