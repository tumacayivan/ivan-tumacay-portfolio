// YOUR REMOTE RIGHT HAND — one film, nine acts, one line running through all of it.
//
// `story` is the bridge between the page and the 3D world. GSAP ScrollTriggers on
// each act write `target` (act index + progress through that act); the world eases
// `p` toward it every frame and flies the camera along one continuous path.

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
import g1 from "@/assets/portfolio-graphic-1.jpg";
import g2 from "@/assets/portfolio-graphic-2.jpg";
import g3 from "@/assets/portfolio-graphic-3.jpg";
import g4 from "@/assets/portfolio-graphic-4.jpg";
import g5 from "@/assets/portfolio-graphic-5.jpg";
import g6 from "@/assets/portfolio-graphic-6.jpg";
import v1 from "@/assets/portfolio-video-1.jpg";
import v2 from "@/assets/portfolio-video-2.jpg";
import v3 from "@/assets/portfolio-video-3.jpg";
import v4 from "@/assets/portfolio-video-4.jpg";
import v5 from "@/assets/portfolio-video-5.jpg";

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
  { id: "cold-open", act: "Cold open", title: "03:14 AM", time: "03:14", where: "A home office in Cavite" },
  { id: "foundation", act: "Act I", title: "The Foundation", time: "2014", where: "Dasmariñas · Cavite" },
  { id: "systems", act: "Act II", title: "The Systems", time: "2019", where: "Enterprise floors" },
  { id: "craft", act: "Act III", title: "The Craft", time: "POST · CUT", where: "Design, video, social" },
  { id: "method", act: "Act IV", title: "The Method", time: "BRIEF → DONE", where: "How the work runs" },
  { id: "services", act: "Act V", title: "The Services", time: "15 LINES", where: "Everything you can hand off" },
  { id: "reel", act: "Act VI", title: "The Reel", time: "WORK", where: "Graphics & video samples" },
  { id: "range", act: "Act VII", title: "The Range", time: "18 SITES", where: "Web & technical support" },
  { id: "dawn", act: "Final cut", title: "Dawn", time: "06:02", where: "Your day, handled" },
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
  ["Hours", "Flexible · your time zone"],
  ["Works", "Remote, worldwide"],
] as const;

export const roles = [
  { years: "2019 – 2020", company: "VNR Construction", role: "Web application & API developer", note: "Internal business systems, databases and the data behind daily operations." },
  { years: "2019 – 2020", company: "St. Paul Technological Institute of Cavite", role: "Front-end & back-end developer", note: "Administrative and academic web apps across the full lifecycle." },
  { years: "2020 – 2021", company: "AltPayNet — Digital Payment Solutions", role: "Back-end developer", note: "Secure, compliant transaction workflows. Where precision stopped being optional.", key: true },
  { years: "2021 – 2022", company: "Payshare Pharmaceutical Trading Intl.", role: "Full-stack developer", note: "Inventory, operations and internal management tools." },
  { years: "2022 – 2023", company: "Bio Blooms Manufacturing", role: "Full-stack developer", note: "Workflow automation and data management for manufacturing operations." },
  { years: "Jul – Dec 2023", company: "Enprat Philippines Holdings · Enprat Learning School", role: "Full-stack developer", note: "Student management, admin functions and internal systems." },
];

export const creativeRoles = [
  { company: "Next Generation Church (Jesus Culture)", role: "Graphic designer, social media manager & video editor", note: "Worship and community content for audiences worldwide — designed, edited, scheduled and moderated." },
  { company: "Rovawork Philippines", role: "Graphic designer & video editor", note: "Corporate and marketing video with a creative team, cut to each client's brand." },
  { company: "Exoskill Creatives", role: "Web designer", note: "Client websites that look right and work right, true to each brand." },
  { company: "Freelance · multiple clients", role: "Graphic designer & video editor", note: "Content creators, small businesses, agencies and independent filmmakers." },
];

export const method = [
  { k: "Brief", v: "Your goals, tools, access and standards — written down, confirmed, no guessing." },
  { k: "Plan", v: "Tasks, owners and deadlines in your project tool, so you can see everything." },
  { k: "Execute", v: "The work itself: inbox, calendar, support, content, research, data." },
  { k: "Report", v: "End-of-day updates: what's done, what's pending, what needs your call." },
  { k: "Automate", v: "Repeatable work moved into Zapier, Make or n8n so it runs on its own." },
  { k: "Improve", v: "Weekly review of what slowed us down, and a fix for it." },
];

export type Service = { title: string; blurb: string; tasks: string[]; tools?: string };

export const vaServices: Service[] = [
  { title: "Administrative", blurb: "Daily operations and admin workflows, handled.", tasks: ["Email and inbox management", "Calendar management and scheduling", "Meeting coordination", "Data entry and database updates", "File organisation and document management", "Online research and data gathering", "Travel planning and booking", "Document preparation and formatting", "CRM data updates", "Spreadsheet organisation and reporting"] },
  { title: "Executive & personal", blurb: "High-level support for founders and busy professionals.", tasks: ["Executive calendar management", "Priority inbox management", "Confidential document handling", "Personal errand coordination", "Event planning and logistics", "Travel itinerary management", "Client relationship support"] },
  { title: "Customer support", blurb: "Customers answered fast, tickets closed clean.", tasks: ["Email customer support", "Live chat support", "Helpdesk and ticketing management", "Order tracking and follow-ups", "Refund and issue resolution", "Customer onboarding", "Feedback monitoring", "FAQ management"], tools: "Zendesk, Freshdesk, Intercom, HubSpot" },
  { title: "Social media", blurb: "Presence managed and growing across every platform.", tasks: ["Content scheduling", "Comment moderation", "Direct message responses", "Strategy assistance", "Hashtag research", "Analytics tracking", "Engagement monitoring", "Community management"], tools: "Facebook, Instagram, LinkedIn, TikTok, X, YouTube" },
  { title: "Graphic design", blurb: "Visuals for brand, marketing and social.", tasks: ["Social media graphics", "Marketing banners", "Promotional materials", "Business presentations", "Infographics", "Brand visual assets", "Thumbnails", "Website graphics"], tools: "Canva, Photoshop, Illustrator" },
  { title: "Video editing", blurb: "Long-form, short-form and everything in between.", tasks: ["YouTube and social video", "Reels, TikTok and Shorts", "Promotional video", "Captions and subtitles", "Basic motion graphics", "Trimming and enhancement", "Thumbnail design", "Audio sync and editing"], tools: "Premiere Pro, After Effects, CapCut" },
  { title: "Content & publishing", blurb: "Content produced, formatted and live on schedule.", tasks: ["Blog publishing and formatting", "Uploading and scheduling", "WordPress content management", "Article research and preparation", "Proofreading and editing", "SEO formatting", "Website content updates"] },
  { title: "Lead generation", blurb: "The right prospects, found and organised.", tasks: ["LinkedIn prospecting", "Lead database building", "Email list building", "Market research", "Contact information gathering", "CRM lead management", "Prospect qualification"] },
  { title: "E-commerce", blurb: "Online store operations kept moving.", tasks: ["Product listing creation", "Product research", "Inventory management", "Order processing", "Customer inquiries", "Product descriptions", "Shopify store management", "Amazon store support"] },
  { title: "Digital marketing", blurb: "Campaigns executed, tracked and tuned.", tasks: ["Email marketing campaigns", "Newsletter creation", "Funnel setup and management", "Campaign monitoring and analytics", "Marketing research", "Social ads assistance", "Marketing automation setup"] },
  { title: "Real estate", blurb: "Support for agents and property businesses.", tasks: ["Property listing updates", "MLS data entry", "Lead follow-ups", "Client communication", "Appointment scheduling", "CRM updates", "Property research"] },
  { title: "Bookkeeping", blurb: "Financial records organised and reported.", tasks: ["Invoice preparation", "Expense tracking", "Financial data entry", "Reconciliation support", "Financial reports", "Accounting software assistance"], tools: "QuickBooks, Xero, Spreadsheets" },
  { title: "Technical", blurb: "Websites, systems and automations that keep working.", tasks: ["Website updates and maintenance", "WordPress management", "CRM setup and configuration", "Automation setup", "System troubleshooting", "Technical documentation", "API integration assistance"], tools: "Zapier, Make, n8n" },
  { title: "Data & research", blurb: "Structured research you can act on.", tasks: ["Market research", "Competitor analysis", "Data collection and organisation", "Report preparation", "Industry trend research", "Data visualisation support"] },
  { title: "Project management", blurb: "Tasks, people and deadlines kept on track.", tasks: ["Task tracking and management", "Team coordination and follow-ups", "Project timelines", "Progress reporting", "Meeting notes and action items", "Resource allocation support", "Deadline monitoring"], tools: "Trello, Asana, Monday.com, ClickUp, Notion" },
];

/** Work samples hung on the machine's ring and around the desk in 3D. */
export const ringImages = [g1, g2, g3, g4, g5, g6, v1];
export const deskImages = [v2, v3, v4, v5, g3, g5];

export const toolbelt = [
  { k: "Project management", v: "Trello · Asana · Monday.com · ClickUp · Notion" },
  { k: "Support & CRM", v: "Zendesk · Freshdesk · Intercom · HubSpot" },
  { k: "Design", v: "Canva · Photoshop · Illustrator" },
  { k: "Video", v: "Premiere Pro · After Effects · CapCut" },
  { k: "Automation", v: "Zapier · Make · n8n" },
  { k: "Bookkeeping", v: "QuickBooks · Xero · Spreadsheets" },
  { k: "Commerce & web", v: "Shopify · Amazon · WordPress" },
  { k: "Social", v: "Facebook · Instagram · LinkedIn · TikTok · X · YouTube" },
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

export const contacts = [
  { label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { label: "WhatsApp · Viber", value: "+63 991 686 8942", href: "https://wa.me/639916868942" },
  { label: "Telegram", value: "t.me/tumacaygroup", href: "https://t.me/tumacaygroup" },
  { label: "LinkedIn", value: "in/tumacayivan", href: "https://www.linkedin.com/in/tumacayivan" },
  { label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];
