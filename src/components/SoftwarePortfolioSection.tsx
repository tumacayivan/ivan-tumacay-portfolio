import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
import futxperform from "@/assets/futxperform-website.png";
import coveCafe from "@/assets/cove-cafe-website.png";
import kalabuyo from "@/assets/kalabuyo-specialty-breads-website.png";
import tumacayGroup from "@/assets/tumacay-group-website.png";

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
  {
    name: "FUTXPERFORM",
    tagline: "Football Career Access Platform",
    description: "Concept build for a pro-player-run football network connecting serious footballers with clubs, scouts, and decision-makers, featuring player signings, video testimonials, and a profile assessment funnel.",
    image: futxperform,
    url: "https://futxperform.onrender.com/",
    stack: "React · Sports · Lead Funnel",
  },
  {
    name: "Cové Café",
    tagline: "Coffee Shop Pre-Launch Site",
    description: "Pre-launch site for a garden café at NextGen Farm in Dasmariñas, Cavite, with a scroll-driven brand film, space tours, an opening menu preview, and a guest-pass sign-up.",
    image: coveCafe,
    url: "https://cove-cafe.onrender.com/",
    stack: "React · Hospitality · Scroll Film",
  },
  {
    name: "Kalabuyo Specialty Breads",
    tagline: "Small-Batch Bakery Ordering Site",
    description: "Ordering site for a certified home baker in Dasmariñas, with a filterable bread board, a bestseller spotlight, a meet-the-baker story, and an order builder that copies the ticket straight into Messenger.",
    image: kalabuyo,
    url: "https://kalabuyo-specialty-breads-dma.onrender.com/",
    stack: "React · Food & Bakery · Order Builder",
  },
  {
    name: "TUMACAY GROUP",
    tagline: "Machine Learning Quantitative Trading",
    description: "Brand site for a fully autonomous machine learning trading model, with a rotating 3D Lady Justice statue, the model's building blocks, a data-to-live-trading pipeline with no human override, and a flip-card glossary of quant terms.",
    image: tumacayGroup,
    url: "https://tumacay-group.onrender.com/",
    stack: "React · Quant Finance · 3D Statue",
  },
];

const portfolioData: YearGroup[] = [
  {
    year: 2025,
    count: 4,
    projects: [
      { name: "AimTech AI", category: "Automation", description: "Automation Platform" },
      { name: "Kingston Properties", category: "Web", description: "Website & Web Application" },
      { name: "Melk Property Management", category: "Web", description: "Website & Web Application" },
      { name: "Steal My Agency AI Agents", category: "Automation", description: "Automation - n8n, Zapier, Make.com" },
    ],
  },
  {
    year: 2024,
    count: 2,
    projects: [
      { name: "Malogica Solutions", category: "Automation", description: "Web Application & Automations" },
      { name: "Malogica Systems", category: "Automation", description: "Web Application & Automations" },
    ],
  },
  {
    year: 2023,
    count: 4,
    projects: [
      { name: "BioBlooms Manufacturing Company", category: "Web", description: "Website & Web Application - Firebase" },
      { name: "Enprat Learning School", category: "Web", description: "Website & Web Application - Firebase" },
      { name: "Enprat Philippine Holdings", category: "Web", description: "Website & Web Application - Firebase" },
      { name: "Tumacay General Motors Auto Trading & Merchandise Corp.", category: "Web", description: "Website & Web Application - Firebase" },
    ],
  },
  {
    year: 2021,
    count: 6,
    projects: [
      { name: "AltPayNet E-Wallet Solutions", category: "API", description: "Spring Boot API" },
      { name: "G12 Cavite Cell Group Monitoring System", category: "Web", description: "Web Application - Firebase" },
      { name: "IFUEL Inventory & Monitoring System", category: "Web", description: "Web Application - Firebase" },
      { name: "LifeGroup Monitoring System", category: "Web", description: "Web Application - Firebase" },
      { name: "Nationlink E-Wallet Mobile App", category: "API", description: "Spring Boot API" },
      { name: "Payshare Pharmaceutical Trading International", category: "Web", description: "Website & Web Application" },
    ],
  },
  {
    year: 2020,
    count: 2,
    projects: [
      { name: "Geographic Information System - NCRDEC", category: "Web", description: "Web Application - MongoDB" },
      { name: "LPU Scholar Thesis Repository", category: "Web", description: "Web Application - Firebase" },
    ],
  },
  {
    year: 2019,
    count: 7,
    projects: [
      { name: "BijouxBadge E-Commerce", category: "Web", description: "Website & Web Application - PostgreSQL" },
      { name: "INCAMS Inventory System", category: "Web", description: "Web Application - PostgreSQL" },
      { name: "LYKEIO Faculty Roster & Load Designation", category: "Web", description: "Web Application - Firebase" },
      { name: "Rafael's Restaurant System", category: "Web", description: "Web Application - Firebase" },
      { name: "Saint Paul Technological Institute of Cavite", category: "Web", description: "Website & Web Application" },
      { name: "Smart Classroom Door Lock", category: "Web", description: "Web Application & IoT/Microcontroller" },
      { name: "Tumacay Builders Construction", category: "Web", description: "Website & Web Application - Firebase" },
    ],
  },
  {
    year: 2018,
    count: 8,
    projects: [
      { name: "ATIMS Employee Management System", category: "Web", description: "Web Application - Oracle" },
      { name: "CILMS Virtual Classroom", category: "Web", description: "Web Application - PostgreSQL" },
      { name: "Crafting 101 E-Commerce", category: "Web", description: "Web Application - Firebase" },
      { name: "DIT School Bulletin Board", category: "Web", description: "Web Application - Firebase" },
      { name: "Philippine Tourist Spot Navigation", category: "Mobile", description: "Mobile Application" },
      { name: "Project-IB Internet Cafe Management", category: "Web", description: "Web Application - Firebase" },
      { name: "QR Real-Time Attendance Checker", category: "Mobile", description: "Mobile Application" },
      { name: "Smart Luggage", category: "Web", description: "Web Application & IoT/Microcontroller" },
    ],
  },
  {
    year: 2017,
    count: 7,
    projects: [
      { name: "BRG Air Conditioning & Refrigeration", category: "Web", description: "Website" },
      { name: "E-Bulletin School Board", category: "Web", description: "Web Application - Firebase" },
      { name: "Maharlikan Transport Services", category: "Web", description: "Website & Web Application - MongoDB" },
      { name: "Optical Shop Inventory System", category: "Web", description: "Web Application - MySQL" },
      { name: "Quiz Up Real-Time Game", category: "Mobile", description: "Mobile Application" },
      { name: "RM Cabal Realty", category: "Web", description: "Website" },
      { name: "Spartan Intelligent Inquiry Assistant", category: "Web", description: "Web Application & Mobile Application" },
    ],
  },
  {
    year: 2016,
    count: 2,
    projects: [
      { name: "AISAT Enrollment & Payment System", category: "Web", description: ".NET Web Application - MySQL" },
      { name: "Brunei School Management System", category: "Web", description: "Web Application - AngularJS & PostgreSQL" },
    ],
  },
];

const categoryIcons: Record<Project["category"], LucideIcon> = {
  Web: Globe,
  Automation: Zap,
  API: Code2,
  Mobile: Smartphone,
};

const categoryStyles: Record<Project["category"], string> = {
  Web: "border-primary/40 bg-primary/10 text-primary",
  Automation: "border-accent/40 bg-accent/10 text-accent",
  API: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  Mobile: "border-amber-500/40 bg-amber-500/10 text-amber-300",
};

const SoftwarePortfolioSection = () => {
  return (
    <section id="software-portfolio" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-4xl"
        >
          <p className="case-label mb-4">Field Log / Software</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Systems delivered across <span className="text-gradient-red">nine years of builds.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            Client and enterprise projects grouped by year, from early web applications to AI automation and operational platforms.
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="case-label mb-3">Live Targets / {liveSites.length} Sites</p>
              <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                Sites running <span className="text-gradient-red">right now.</span>
              </h3>
            </div>
            <p className="font-mono text-xs font-bold text-muted-foreground">CLICK ANY CARD TO OPEN THE SITE</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {liveSites.map((site, siteIndex) => (
              <motion.a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (siteIndex % 3) * 0.06 }}
                className="group flex flex-col border border-border/70 bg-card/70 transition-colors hover:border-primary/60 hover:bg-surface-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70">
                  <img
                    src={site.image}
                    alt={`${site.name} website`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 border border-primary/60 bg-background/85 px-2 py-1 font-mono text-[10px] font-bold text-primary">
                    TARGET {String(siteIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-xs font-bold text-primary">{site.tagline}</p>
                  <h4 className="mt-2 flex items-start justify-between gap-3 text-lg font-black leading-tight text-foreground transition-colors group-hover:text-primary">
                    {site.name}
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h4>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{site.description}</p>
                  <p className="mt-auto pt-4 font-mono text-xs font-bold text-muted-foreground">{site.stack}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {portfolioData.map((yearGroup, groupIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.04 }}
              className="grid gap-5 lg:grid-cols-[180px_1fr]"
            >
              <div className="border border-border/70 bg-card/70 p-5 lg:sticky lg:top-24 lg:h-fit">
                <p className="font-mono text-xs font-bold text-muted-foreground">YEAR FILE</p>
                <h3 className="mt-2 text-5xl font-black text-foreground">{yearGroup.year}</h3>
                <p className="mt-2 font-mono text-xs font-bold text-primary">
                  {yearGroup.count} {yearGroup.count === 1 ? "project" : "projects"}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {yearGroup.projects.map((project, projectIndex) => {
                  const Icon = categoryIcons[project.category];
                  const colorClass = categoryStyles[project.category];

                  return (
                    <motion.article
                      key={`${yearGroup.year}-${project.name}-${projectIndex}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: projectIndex * 0.03 }}
                      className="group border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className={`inline-flex items-center gap-2 border px-2.5 py-1.5 font-mono text-xs font-bold ${colorClass}`}>
                          <Icon className="h-3.5 w-3.5" />
                          {project.category}
                        </span>
                        <span className="h-px flex-1 bg-border/70" />
                      </div>
                      <h4 className="text-lg font-black leading-tight text-foreground transition-colors group-hover:text-primary">{project.name}</h4>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{project.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwarePortfolioSection;
