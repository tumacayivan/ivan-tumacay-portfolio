// THE BEDROOM QUANT — one film, nine acts, one line running through all of it.
//
// `story` is the bridge between the page and the 3D world. GSAP ScrollTriggers on
// each act write `target` (act index + progress through that act); the world eases
// `p` toward it every frame and flies the camera along one continuous path.

import groupTrading from "@/assets/quant/ivan-tumacay-group-trading.jpg";
import marketHacker from "@/assets/quant/market-hacker-website1.jpg";
import marketHackers from "@/assets/quant/market-hacker-website2.jpg";
import quantModel from "@/assets/quant/ivan-quant-model-website.jpg";
import swarmAi from "@/assets/quant/ivan-swarm-ai-website.jpg";
import supercomputer from "@/assets/quant/supercomputer.jpg";
import group from "@/assets/quant/ivan-tumacay-group-website.jpg";
import pearl from "@/assets/quant/golden-south-sea-pearl-website.jpg";
import motors from "@/assets/quant/tumacay-general-motors-website.jpg";
import surf from "@/assets/quant/ivan-glenn-surfing-school-website.jpg";
import rdr from "@/assets/quant/rdr-global-system-website.jpg";
import jenny from "@/assets/quant/jenny-barzaga-website.jpg";
import tasmania from "@/assets/quant/vision-tasmania-website.jpg";
import covenant from "@/assets/quant/covenant-builders-global-website.jpg";
import bigboss from "@/assets/quant/bigboss-global-website.jpg";
import bioblooms from "@/assets/quant/bioblooms-health-wellness-website.jpg";
import winerman from "@/assets/quant/winerman-construction-website.jpg";
import jmm from "@/assets/quant/jmm-supply-construction-website.jpg";
import futx from "@/assets/quant/futxperform-website.jpg";
import cove from "@/assets/quant/cove-cafe-website.jpg";
import kalabuyo from "@/assets/quant/kalabuyo-specialty-breads-website.jpg";
import tumacayGroup from "@/assets/quant/tumacay-group-website.jpg";
import itb1 from "@/assets/quant/itb-01-analytics.jpg";
import itb2 from "@/assets/quant/itb-02-track-record.jpg";
import itb3 from "@/assets/quant/itb-03-server-console.jpg";
import itb4 from "@/assets/quant/itb-04-link-timing.jpg";
import itb5 from "@/assets/quant/itb-05-bridge-host.jpg";
import itb6 from "@/assets/quant/itb-06-telemetry.jpg";
import itb7 from "@/assets/quant/itb-07-processor-network.jpg";

/* ------------------------------------------------------------------ */
/* Shared scroll state                                                 */
/* ------------------------------------------------------------------ */

export const story = {
  /** Where the scroll says the film should be: act index + progress. */
  target: 0.5,
  /** Where the camera actually is (eased toward target). */
  p: 0.5,
  /** Pointer, -1..1, for parallax. */
  mx: 0,
  my: 0,
  /** 0..1 while the lens passes through a monitor. */
  flash: 0,
};

export const LAST_P = 8.5;

/* ------------------------------------------------------------------ */
/* The acts                                                            */
/* ------------------------------------------------------------------ */

export const acts = [
  { id: "cold-open", act: "Cold open", title: "03:14 AM", time: "03:14", where: "A bedroom in Cavite" },
  { id: "origin", act: "Act I", title: "The Signal", time: "2014", where: "Dasmariñas · Cavite" },
  { id: "stack", act: "Act II", title: "The Stack", time: "2019", where: "Enterprise floors" },
  { id: "after-hours", act: "Act III", title: "After Hours", time: "23:00", where: "Back in the bedroom" },
  { id: "model", act: "Act IV", title: "The Model", time: "∂L/∂w", where: "Inside the network" },
  { id: "machine", act: "Act V", title: "The Machine", time: "ITB-001", where: "The private build" },
  { id: "desk", act: "Act VI", title: "The Desk", time: "LIVE", where: "Ivan Tumacay Group" },
  { id: "range", act: "Act VII", title: "The Range", time: "18 SITES", where: "Everything else he ships" },
  { id: "dawn", act: "Final cut", title: "Dawn", time: "06:02", where: "Same bedroom. Different man." },
] as const;

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

export const education = [
  { years: "2014 – 2015", school: "De La Salle University – Dasmariñas", degree: "BS Electronics & Communications Engineering" },
  { years: "2015 – 2016", school: "AMA Computer College – Cavite", degree: "BS Electronics & Communications Engineering" },
  { years: "2016 – 2020", school: "Lyceum of the Philippines University – Cavite", degree: "BS Information Technology" },
];

export const dossier = [
  ["Born", "28 Jan 1998 · Manila"],
  ["Based", "Cavite, Philippines"],
  ["Time zone", "UTC +08:00"],
  ["Languages", "Filipino · English"],
  ["Height", "5'11\" · 180 cm"],
  ["Works", "Remote, worldwide"],
] as const;

export const roles = [
  { years: "2019 – 2020", company: "VNR Construction", role: "Web application & API developer", note: "Internal systems, databases, APIs." },
  { years: "2019 – 2020", company: "St. Paul Technological Institute of Cavite", role: "Front-end & back-end developer", note: "Institutional web apps across the full lifecycle." },
  { years: "2020 – 2021", company: "AltPayNet — Digital Payment Solutions", role: "Back-end developer", note: "Secure APIs, authentication and financial transaction workflows. Where money first became data.", key: true },
  { years: "2021 – 2022", company: "Payshare Pharmaceutical Trading Intl.", role: "Full-stack developer", note: "Inventory, operations and internal management tools." },
  { years: "2022 – 2023", company: "Bio Blooms Manufacturing", role: "Full-stack developer", note: "Enterprise systems and workflow automation." },
  { years: "Jul – Dec 2023", company: "Enprat Philippines Holdings · Enprat Learning School", role: "Full-stack developer", note: "System architecture, development and deployment." },
];

export const creativeRoles = [
  "Web designer · Exoskill Creatives",
  "Graphic designer & video editor · Rovawork Philippines",
  "Designer, social & video · Next Generation Church",
  "Freelance designer & editor · multiple clients",
];

export const modelStack = [
  { k: "Data", v: "Tick & bar feeds, cleaning, resampling, feature pipelines" },
  { k: "Signals", v: "Systematic signal generation and regime filters" },
  { k: "Learning", v: "Machine learning and neural networks for pattern recognition" },
  { k: "Testing", v: "Back-tested strategies before a single live order" },
  { k: "Risk", v: "Drawdown, expectancy, profit factor, Sharpe — the numbers that keep you alive" },
  { k: "Execution", v: "Automated bots wired to the broker terminal, monitored every second" },
];

export const itbFeatures = [
  { title: "Live account state", body: "Equity, balance, floating P&L, free margin and exposure streamed from the terminal." },
  { title: "Track record", body: "Realised net, win rate, expectancy, profit factor and profitable days, period by period." },
  { title: "Risk analytics", body: "Max drawdown, recovery factor, annualised Sharpe and average hold time." },
  { title: "Funding ledger", body: "Deposits, withdrawals and dividends split out so cash moves never inflate results." },
  { title: "Symbol attribution", body: "Where profit and loss actually came from, per instrument." },
  { title: "Cloud snapshots", body: "When the terminal sleeps, the last synced account stays viewable." },
  { title: "Server telemetry", body: "Rack console, link timing, host load, per-second latency and tick flow." },
  { title: "Share & report", body: "Share link, QR code and a generated PDF performance report." },
];

export const itbExhibits = [
  { image: itb1, title: "Analytics" },
  { image: itb2, title: "Track record" },
  { image: itb3, title: "Server console" },
  { image: itb4, title: "Link & timing" },
  { image: itb5, title: "Bridge host" },
  { image: itb6, title: "Telemetry" },
  { image: itb7, title: "Processor & network" },
];

export const ITB_URL = "https://ivan-trading-bots.onrender.com/";

export const deskBuilds = [
  { name: "Ivan Tumacay Group Trading", tag: "Proprietary trading & market operations", image: groupTrading, url: "https://ivan-tumacay-group-trading.onrender.com/" },
  { name: "Ivan Quant Model Engine", tag: "Systematic signals & back-tested strategies", image: quantModel, url: "https://ivan-quant-model-engine-1.onrender.com/" },
  { name: "Market Hacker", tag: "Real-time analytics & signal monitoring", image: marketHacker, url: "https://market-hacker.onrender.com/" },
  { name: "Market Hackers", tag: "Trader community & shared strategies", image: marketHackers, url: "https://market-hackers.onrender.com/" },
  { name: "Ivan Swarm AI", tag: "Multi-agent AI orchestration", image: swarmAi, url: "https://ivan-swarm-ai.onrender.com/" },
  { name: "ITG Supercomputer", tag: "Parallel compute for simulation & AI", image: supercomputer, url: "https://ivan-tumacay-group-supercomputer.onrender.com/" },
];

export const rangeBuilds = [
  { name: "Ivan Tumacay Group", tag: "Corporate holdings", image: group, url: "https://ivan-tumacay-group.onrender.com/" },
  { name: "Golden South Sea Pearl", tag: "Luxury e-commerce", image: pearl, url: "https://golden-south-sea-pearl.onrender.com/" },
  { name: "Tumacay General Motors", tag: "Auto trading corp.", image: motors, url: "https://tumacay-general-motors.onrender.com/" },
  { name: "Ivan & Glenn Surf School", tag: "Siargao bookings", image: surf, url: "https://ivan-glenn-surfing-school.onrender.com/" },
  { name: "RDR Global System", tag: "Affiliate operations", image: rdr, url: "https://rdrglobalsystem.onrender.com/" },
  { name: "Jenny Barzaga", tag: "Campaign platform", image: jenny, url: "https://jenny-barzaga.onrender.com/" },
  { name: "Vision Tasmania", tag: "Workforce group", image: tasmania, url: "https://vision-tasmania.onrender.com/" },
  { name: "Covenant Builders Global", tag: "Community network", image: covenant, url: "https://covenant-builders-global.onrender.com/" },
  { name: "BigBoss Global", tag: "Private digital wallet", image: bigboss, url: "https://bigbossglobal.onrender.com/" },
  { name: "BioBlooms Health", tag: "Naturopathic hub", image: bioblooms, url: "https://bioblooms-health-wellness.onrender.com/" },
  { name: "Winerman Construction", tag: "Infrastructure", image: winerman, url: "https://winerman-construction.onrender.com/" },
  { name: "JMM Supply", tag: "Earthworks & supply", image: jmm, url: "https://jmm-supply-construction.onrender.com/" },
  { name: "FUTXPERFORM", tag: "Football careers", image: futx, url: "https://futxperform.onrender.com/" },
  { name: "Cové Café", tag: "Pre-launch brand film", image: cove, url: "https://cove-cafe.onrender.com/" },
  { name: "Kalabuyo Breads", tag: "Small-batch bakery", image: kalabuyo, url: "https://kalabuyo-specialty-breads-dma.onrender.com/" },
  { name: "TUMACAY GROUP", tag: "Machine learning quant trading", image: tumacayGroup, url: "https://tumacay-group.onrender.com/" },
];

export const services = [
  "Full-stack software",
  "Trading systems & dashboards",
  "AI agents & automation",
  "APIs & integrations",
  "Cloud & DevOps",
  "Virtual assistance",
  "Graphics & video",
  "Digital marketing",
];

export const contacts = [
  { label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { label: "WhatsApp · Viber", value: "+63 991 686 8942", href: "https://wa.me/639916868942" },
  { label: "Telegram", value: "t.me/tumacaygroup", href: "https://t.me/tumacaygroup" },
  { label: "LinkedIn", value: "in/tumacayivan", href: "https://www.linkedin.com/in/tumacayivan" },
  { label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];
