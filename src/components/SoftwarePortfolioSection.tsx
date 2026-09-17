import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap, ArrowUpRight } from "lucide-react";
import SectionHeading from "./drift/SectionHeading";
import ivanTumacayGroup from "@/assets/ivan-tumacay-group-website.png";
import ivanTumacayGroupTrading from "@/assets/ivan-tumacay-group-trading.png";
import marketHacker1 from "@/assets/market-hacker-website1.png";
import marketHacker2 from "@/assets/market-hacker-website2.png";
import ivanSwarmAi from "@/assets/ivan-swarm-ai-website.png";
import ivanQuantModel from "@/assets/ivan-quant-model-website.png";
import goldenPearl from "@/assets/golden-south-sea-pearl-website.png";
import tumacayMotors from "@/assets/tumacay-general-motors-website.png";
import supercomputer from "@/assets/supercomputer.png";
import ivanGlennSurfing from "@/assets/ivan-glenn-surfing-school-website.png";
import rdrGlobal from "@/assets/rdr-global-system-website.png";
import jennyBarzaga from "@/assets/jenny-barzaga-website.png";
import visionTasmania from "@/assets/vision-tasmania-website.png";
import covenantBuilders from "@/assets/covenant-builders-global-website.png";
import bigBossGlobal from "@/assets/bigboss-global-website.png";
import bioBlooms from "@/assets/bioblooms-health-wellness-website.png";
import winermanConstruction from "@/assets/winerman-construction-website.png";
import jmmSupply from "@/assets/jmm-supply-construction-website.png";

interface Project {
  name: string;
  category: "Web" | "Automation" | "API" | "Mobile";
  description: string;
}

interface YearGroup {
  year: number;
  count: number;
  projects: Project[];
}

interface LiveSite {
  name: string;
  tagline: string;
  description: string;
  image: string;
  url: string;
  stack: string;
}

const liveSites: LiveSite[] = [
  {
    name: "Ivan Tumacay Group",
    tagline: "Corporate Holdings & Ventures",
    description: "Flagship corporate site for the Ivan Tumacay Group, presenting the holdings portfolio, ventures, and strategic initiatives across software, AI, and enterprise.",
    image: ivanTumacayGroup,
    url: "https://ivan-tumacay-group.onrender.com/",
    stack: "React · Web · Corporate",
  },
  {
    name: "Ivan Tumacay Group Trading",
    tagline: "Proprietary Trading & Market Operations",
    description: "Trading arm of the Ivan Tumacay Group, presenting market operations, strategy desks, and the firm's systematic approach to proprietary trading.",
    image: ivanTumacayGroupTrading,
    url: "https://ivan-tumacay-group-trading.onrender.com/",
    stack: "React · Web · Trading",
  },
  {
    name: "Market Hacker",
    tagline: "Trading Intelligence Platform",
    description: "Real-time market analytics dashboard with strategy automation and signal monitoring for active traders.",
    image: marketHacker1,
    url: "https://market-hacker.onrender.com/",
    stack: "React · Node · Real-Time Data",
  },
  {
    name: "Market Hackers",
    tagline: "Trader Community & Strategy Hub",
    description: "Community-focused trading platform extending Market Hacker with collaborative strategies, shared signals, and group analytics.",
    image: marketHacker2,
    url: "https://market-hackers.onrender.com/",
    stack: "React · Node · Community",
  },
  {
    name: "Ivan Swarm AI",
    tagline: "Multi-Agent AI Orchestration",
    description: "AI swarm orchestration platform coordinating multiple intelligent agents for automation, research, and execution workflows.",
    image: ivanSwarmAi,
    url: "https://ivan-swarm-ai.onrender.com/",
    stack: "AI Agents · LangChain · Automation",
  },
  {
    name: "Ivan Quant Model",
    tagline: "Quantitative Trading Model",
    description: "Quantitative analysis and model-driven trading platform delivering systematic signal generation and back-tested strategies.",
    image: ivanQuantModel,
    url: "https://ivan-quant-model-engine-1.onrender.com/",
    stack: "Python · Quant · Modelling",
  },
  {
    name: "Golden South Sea Pearl",
    tagline: "Luxury Pearl E-Commerce",
    description: "High-end e-commerce storefront showcasing fine pearl jewellery with curated collections and secure checkout.",
    image: goldenPearl,
    url: "https://golden-south-sea-pearl.onrender.com/",
    stack: "Web · Catalog · Checkout",
  },
  {
    name: "Tumacay General Motors",
    tagline: "Auto Trading & Merchandise Corp.",
    description: "Corporate website and operational platform for the automotive trading and merchandise enterprise.",
    image: tumacayMotors,
    url: "https://tumacay-general-motors.onrender.com/",
    stack: "Web App · Firebase · Inventory",
  },
  {
    name: "Supercomputer",
    tagline: "High-Performance Computing Platform",
    description: "Advanced supercomputing platform delivering massive parallel processing power for complex simulations, AI workloads, and enterprise-scale computation.",
    image: supercomputer,
    url: "https://ivan-tumacay-group-supercomputer.onrender.com/",
    stack: "HPC · Parallel Computing · AI",
  },
  {
    name: "Ivan & Glenn Surfing School",
    tagline: "Surf Lessons · Siargao Island",
    description: "Bilingual booking site for a two-coach surf school in General Luna, Siargao, covering lesson tiers, wave conditions, island guides, and instructor profiles.",
    image: ivanGlennSurfing,
    url: "https://ivan-glenn-surfing-school.onrender.com/",
    stack: "React · Booking · Multilingual",
  },
  {
    name: "RDR Global System",
    tagline: "Brand & Promotion Agent Network",
    description: "Affiliate operations platform connecting vetted brands with a managed community of promotion agents, tracking every lead and commission from first click to final payout.",
    image: rdrGlobal,
    url: "https://rdrglobalsystem.onrender.com/",
    stack: "Web App · Affiliate · Analytics",
  },
  {
    name: "Jenny Barzaga",
    tagline: "Congressional Campaign Platform",
    description: "Filipino-language campaign site for the 4th District of Cavite, featuring the platform, service record, event countdown, and volunteer sign-up.",
    image: jennyBarzaga,
    url: "https://jenny-barzaga.onrender.com/",
    stack: "React · Campaign · Multilingual",
  },
  {
    name: "Vision Tasmania",
    tagline: "Workforce & Leadership Group",
    description: "Editorial corporate site for the Hobart-based group, presenting its mission, virtues, leadership, partners, and culture with a refined light/dark experience.",
    image: visionTasmania,
    url: "https://vision-tasmania.onrender.com/",
    stack: "React · Corporate · Editorial",
  },
  {
    name: "Covenant Builders Global",
    tagline: "Faith, Family & Enterprise Network",
    description: "Organisational site for CBG, presenting its vision, community-building work, global reach, and gathering schedule with visit planning.",
    image: covenantBuilders,
    url: "https://covenant-builders-global.onrender.com/",
    stack: "React · Community · Web",
  },
  {
    name: "BigBoss Global",
    tagline: "Private Digital Wallet",
    description: "Members-only digital wallet platform for holding, sending, and receiving funds with bank-grade protection and second-level transfers.",
    image: bigBossGlobal,
    url: "https://bigbossglobal.onrender.com/",
    stack: "Web App · Fintech · Security",
  },
  {
    name: "BioBlooms Health & Wellness",
    tagline: "Holistic Naturopathic Hub",
    description: "Consultation and wellness platform for a licensed naturopathic practice, covering treatment approach, conditions handled, patient stories, and pricing.",
    image: bioBlooms,
    url: "https://bioblooms-health-wellness.onrender.com/",
    stack: "React · Healthcare · Booking",
  },
  {
    name: "Winerman Construction",
    tagline: "Infrastructure & General Building",
    description: "Contractor site for a Philippine builder delivering bridges, roads, reclamation works, and bored piles, with a project gallery and permit records.",
    image: winermanConstruction,
    url: "https://winerman-construction.onrender.com/",
    stack: "React · Construction · Portfolio",
  },
  {
    name: "JMM Supply & Construction",
    tagline: "Hauling, Earthworks & Supply",
    description: "Corporate site for a Cavite-based supplier of heavy equipment, filling materials, and construction supplies serving land development and road projects.",
    image: jmmSupply,
    url: "https://jmm-supply-construction.onrender.com/",
    stack: "React · Construction · Equipment",
  },
];

const portfolioData: YearGroup[] = [
  { year: 2025, count: 4, projects: [
    { name: "AimTech AI", category: "Automation", description: "Automation Platform" },
    { name: "Kingston Properties", category: "Web", description: "Website & Web Application" },
    { name: "Melk Property Management", category: "Web", description: "Website & Web Application" },
    { name: "Steal My Agency AI Agents", category: "Automation", description: "Automation - n8n, Zapier, Make.com" },
  ]},
  { year: 2024, count: 2, projects: [
    { name: "Malogica Solutions", category: "Automation", description: "Web Application & Automations" },
    { name: "Malogica Systems", category: "Automation", description: "Web Application & Automations" },
  ]},
  { year: 2023, count: 4, projects: [
    { name: "BioBlooms Manufacturing Company", category: "Web", description: "Website & Web Application - Firebase" },
    { name: "Enprat Learning School", category: "Web", description: "Website & Web Application - Firebase" },
    { name: "Enprat Philippine Holdings", category: "Web", description: "Website & Web Application - Firebase" },
    { name: "Tumacay General Motors Auto Trading & Merchandise Corp.", category: "Web", description: "Website & Web Application - Firebase" },
  ]},
  { year: 2021, count: 6, projects: [
    { name: "AltPayNet E-Wallet Solutions", category: "API", description: "Spring Boot API" },
    { name: "G12 Cavite Cell Group Monitoring System", category: "Web", description: "Web Application - Firebase" },
    { name: "IFUEL Inventory & Monitoring System", category: "Web", description: "Web Application - Firebase" },
    { name: "LifeGroup Monitoring System", category: "Web", description: "Web Application - Firebase" },
    { name: "Nationlink E-Wallet Mobile App", category: "API", description: "Spring Boot API" },
    { name: "Payshare Pharmaceutical Trading International", category: "Web", description: "Website & Web Application" },
  ]},
  { year: 2020, count: 2, projects: [
    { name: "Geographic Information System - NCRDEC", category: "Web", description: "Web Application - MongoDB" },
    { name: "LPU Scholar Thesis Repository", category: "Web", description: "Web Application - Firebase" },
  ]},
  { year: 2019, count: 7, projects: [
    { name: "BijouxBadge E-Commerce", category: "Web", description: "Website & Web Application - PostgreSQL" },
    { name: "INCAMS Inventory System", category: "Web", description: "Web Application - PostgreSQL" },
    { name: "LYKEIO Faculty Roster & Load Designation", category: "Web", description: "Web Application - Firebase" },
    { name: "Rafael's Restaurant System", category: "Web", description: "Web Application - Firebase" },
    { name: "Saint Paul Technological Institute of Cavite", category: "Web", description: "Website & Web Application" },
    { name: "Smart Classroom Door Lock", category: "Web", description: "Web Application & IoT/Microcontroller" },
    { name: "Tumacay Builders Construction", category: "Web", description: "Website & Web Application - Firebase" },
  ]},
  { year: 2018, count: 8, projects: [
    { name: "ATIMS Employee Management System", category: "Web", description: "Web Application - Oracle" },
    { name: "CILMS Virtual Classroom", category: "Web", description: "Web Application - PostgreSQL" },
    { name: "Crafting 101 E-Commerce", category: "Web", description: "Web Application - Firebase" },
    { name: "DIT School Bulletin Board", category: "Web", description: "Web Application - Firebase" },
    { name: "Philippine Tourist Spot Navigation", category: "Mobile", description: "Mobile Application" },
    { name: "Project-IB Internet Cafe Management", category: "Web", description: "Web Application - Firebase" },
    { name: "QR Real-Time Attendance Checker", category: "Mobile", description: "Mobile Application" },
    { name: "Smart Luggage", category: "Web", description: "Web Application & IoT/Microcontroller" },
  ]},
  { year: 2017, count: 7, projects: [
    { name: "BRG Air Conditioning & Refrigeration", category: "Web", description: "Website" },
    { name: "E-Bulletin School Board", category: "Web", description: "Web Application - Firebase" },
    { name: "Maharlikan Transport Services", category: "Web", description: "Website & Web Application - MongoDB" },
    { name: "Optical Shop Inventory System", category: "Web", description: "Web Application - MySQL" },
    { name: "Quiz Up Real-Time Game", category: "Mobile", description: "Mobile Application" },
    { name: "RM Cabal Realty", category: "Web", description: "Website" },
    { name: "Spartan Intelligent Inquiry Assistant", category: "Web", description: "Web Application & Mobile Application" },
  ]},
  { year: 2016, count: 2, projects: [
    { name: "AISAT Enrollment & Payment System", category: "Web", description: ".NET Web Application - MySQL" },
    { name: "Brunei School Management System", category: "Web", description: "Web Application - AngularJS & PostgreSQL" },
  ]},
];

const getCategoryIcon = (category: Project["category"]) => {
  switch (category) {
    case "Web": return Globe;
    case "Automation": return Zap;
    case "API": return Code2;
    case "Mobile": return Smartphone;
    default: return Code2;
  }
};

const siteHost = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const LiveSiteCard = ({ site, index }: { site: LiveSite; index: number }) => (
  <motion.a
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group panel edge-light block overflow-hidden hover:!border-drift/60 transition-colors"
  >
    {/* Browser chrome + screenshot that scrolls on hover */}
    <div className="flex items-center gap-2 px-3 py-2 border-b border-line/10 bg-asphalt">
      <span className="flex gap-1" aria-hidden>
        <span className="w-2 h-2 rounded-full bg-line/20" />
        <span className="w-2 h-2 rounded-full bg-line/20" />
        <span className="w-2 h-2 rounded-full bg-line/20" />
      </span>
      <span className="flex-1 truncate font-hud text-[11px] tracking-[0.06em] text-ink-dim">{siteHost(site.url)}</span>
      <span className="flex items-center gap-1 font-hud text-[10px] font-bold tracking-[0.16em] uppercase text-hud">
        <span className="w-1.5 h-1.5 rounded-full bg-hud animate-pulse" /> Live
      </span>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden bg-asphalt">
      <img
        src={site.image}
        alt={`${site.name} — live website screenshot`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top transition-[object-position,transform] duration-[2600ms] ease-in-out group-hover:object-bottom group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--void)/0.7)] via-transparent to-transparent" />
      <span className="plate absolute left-3 bottom-3 w-[72px] h-[40px]">
        <span className="text-[8px] tracking-[0.06em]">東京 500</span>
        <span className="text-[15px]">{String(index + 1).padStart(2, "0")}-{String(index * 7 + 13).slice(-2)}</span>
      </span>
      <span className="absolute right-3 bottom-3 w-10 h-10 rounded-full bg-drift text-on-drift flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5" />
      </span>
    </div>

    <div className="p-5 sm:p-6">
      <div className="hud-label mb-2">{site.tagline}</div>
      <h4 className="font-display text-2xl uppercase text-ink leading-tight mb-2 group-hover:text-drift transition-colors">
        {site.name}
      </h4>
      <p className="text-ink-dim leading-relaxed mb-4">{site.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {site.stack.split("·").map((t) => (
          <span key={t} className="font-hud text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-dim border border-line/15 px-2 py-0.5">
            {t.trim()}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const SoftwarePortfolioSection = () => {
  const totalProjects = portfolioData.reduce((acc, g) => acc + g.count, 0);

  return (
    <section
      id="software-portfolio"
      data-scene="Garage"
      data-kanji="車庫"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-floor opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_40%)]" />
      <div className="gutter relative">
        <SectionHeading kanji="車庫" kicker="Software portfolio" title="The" accent="Garage" meta={`${liveSites.length} live · ${totalProjects} built`}>
          Projects delivered for clients and enterprise organisations across industries and stacks. Every car
          on the floor is running — hover to scroll the page, click to take it for a drive.
        </SectionHeading>

        <div className="relative mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 [perspective:1600px]">
            {liveSites.map((site, i) => (
              <LiveSiteCard key={site.url} site={site} index={i} />
            ))}
          </div>

          {/* The shutter rolls up the first time you reach the garage */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-none absolute inset-0 origin-top z-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, hsl(var(--asphalt-2)) 0 12px, hsl(var(--asphalt)) 12px 14px, hsl(var(--panel)) 14px 26px)",
            }}
          >
            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-drift shadow-[0_0_24px_hsl(var(--drift))]" />
          </motion.div>
        </div>

        {/* BUILD HISTORY */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="hud-label mb-2">Build history · 2016 – 2025</div>
            <h3 className="font-display text-4xl sm:text-5xl uppercase text-ink">
              Every <span className="lean">lap</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 font-hud text-xs tracking-[0.14em] uppercase text-ink-dim">
            {(["Web", "Automation", "API", "Mobile"] as const).map((c) => {
              const Icon = getCategoryIcon(c);
              return (
                <span key={c} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-hud" /> {c}
                </span>
              );
            })}
          </div>
        </div>

        <div className="border-t border-line/10">
          {portfolioData.map((group) => (
            <motion.div
              key={group.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8 border-b border-line/10"
            >
              <div className="flex md:flex-col items-baseline md:items-start gap-3">
                <motion.span
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-6xl leading-none text-ink group-hover:text-drift transition-colors tabular-nums"
                >
                  {group.year}
                </motion.span>
                <span className="hud-label !text-ink-dim">
                  {group.count} {group.count === 1 ? "project" : "projects"}
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.projects.map((project, i) => {
                  const Icon = getCategoryIcon(project.category);
                  return (
                    <motion.li
                      key={`${group.year}-${project.name}`}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 p-4 bg-panel/60 border border-line/10 hover:border-hud/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 mt-1 text-hud shrink-0" aria-label={project.category} />
                      <div className="min-w-0">
                        <div className="font-hud font-bold uppercase tracking-[0.02em] text-ink leading-snug">{project.name}</div>
                        <div className="text-sm text-ink-dim mt-0.5">{project.description}</div>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwarePortfolioSection;
