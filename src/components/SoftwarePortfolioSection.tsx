import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap, Folder, FileText, ArrowUpRight } from "lucide-react";
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
import jolaidaNiccolai from "@/assets/jolaida-niccolai-website.png";
import tumacayGroupTrading from "@/assets/tumacay-group-trading-website.png";

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
  {
    name: "Jolaida Niccolai Manila",
    tagline: "Couture Gown Rental House",
    description: "Site for a Quezon City maison renting bridal, evening and debut gowns, with an oversized serif hero, a signature looks reel, four collection chapters, a filterable 28-photo gallery, a reopening special and book-a-fitting links to Messenger and WhatsApp.",
    image: jolaidaNiccolai,
    url: "https://jolaidaniccolai.onrender.com/",
    stack: "React · Bridal & Fashion · Editorial Gallery",
  },
  {
    name: "TUMACAY GROUP Trading",
    tagline: "Gold & Oil Machine Learning Trading",
    description: "Site for a fully systematic machine learning model that swing trades gold and crude oil on higher timeframes, built on macro and fundamental data, statistics and probability, with a 3D hero, strategy overview, risk-first rules, a request-access flow and an FAQ.",
    image: tumacayGroupTrading,
    url: "https://tumacay-group-trading.onrender.com/",
    stack: "React · Machine Learning · Commodities",
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

const getCategoryIcon = (category: Project["category"]) => {
  switch (category) {
    case "Web":
      return Globe;
    case "Automation":
      return Zap;
    case "API":
      return Code2;
    case "Mobile":
      return Smartphone;
    default:
      return Code2;
  }
};

const SoftwarePortfolioSection = () => {
  const totalProjects = portfolioData.reduce((acc, g) => acc + g.count, 0);

  return (
    <section id="software-portfolio" className="relative py-20 sm:py-28 overflow-hidden paper-grain">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-end overflow-hidden">
        <div className="watermark text-[14vw] leading-none rotate-[4deg] -mr-10">
          MISSIONS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Folder className="w-5 h-5 text-stamp-red" />
            <span className="font-blackops text-sm tracking-[0.3em] text-stamp-red">
              ANNEX 01 // SOFTWARE DEVELOPMENT PORTFOLIO
            </span>
            <span className="font-courier text-[10px] text-ink-brown tracking-widest hidden sm:inline">
              · {totalProjects} OPERATIONS LOGGED
            </span>
          </div>
          <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
            Software Development Portfolio
          </p>
          <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
            PROJECT <span className="text-stamp-red">SHOWCASE</span>
          </h2>
          <div className="mt-4 paper-card-cream p-4 max-w-3xl relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1">MISSION SUMMARY</div>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-1">
              A curated selection of projects delivered for <span className="font-bold text-stamp-red underline decoration-wavy">clients</span> and <span className="font-bold text-stamp-red underline decoration-wavy">enterprise organizations</span>, showcasing expertise across industries and technologies.
            </p>
          </div>
        </motion.div>

        <div className="mb-20">
          <div className="flex items-center gap-3 sm:gap-5 mb-6">
            <div className="diag-stripes-red h-2 w-12 sm:w-20" />
            <h3 className="font-blackops text-3xl sm:text-4xl text-ink tracking-tight leading-none">
              LIVE <span className="text-stamp-red">SITES</span>
            </h3>
            <div className="flex-1 border-t-2 border-double border-ink" />
            <span className="font-courier text-[10px] tracking-widest text-stamp-red">
              {liveSites.length} ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveSites.map((site, siteIndex) => {
              const rot = ((siteIndex * 17) % 5) - 2;

              return (
                <motion.a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (siteIndex % 3) * 0.06 }}
                  className="paper-card-cream p-3 paper-grain relative group flex flex-col transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                  style={{ transform: `rotate(${rot * 0.3}deg)` }}
                >
                  <div className="tape tape-yellow w-12 h-3 -top-1.5 left-1/2 -translate-x-1/2 rotate-[-3deg] z-10" />

                  <div className="relative aspect-[16/9] overflow-hidden border-2 border-ink">
                    <img
                      src={site.image}
                      alt={`${site.name} website`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top sepia-[.25] transition duration-500 group-hover:sepia-0 group-hover:scale-[1.03]"
                    />
                    <div className="absolute bottom-2 right-2 stamp !text-[10px] !p-1 rotate-[-6deg] bg-paper/80">LIVE</div>
                  </div>

                  <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mt-3 mb-3 px-1">
                    <span className="font-courier text-[10px] tracking-widest text-ink-brown">
                      EXHIBIT W-{String(siteIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-blackops text-[10px] tracking-widest text-stamp-red">ONLINE</span>
                  </div>

                  <div className="px-1 flex flex-1 flex-col">
                    <h4 className="font-blackops text-base text-ink uppercase tracking-[0.04em] leading-tight group-hover:text-stamp-red transition-colors">
                      {site.name}
                    </h4>
                    <p className="font-courier text-xs tracking-wider text-stamp-blue mt-1 uppercase">{site.tagline}</p>
                    <p className="font-courier text-sm text-ink/80 leading-relaxed mt-3">{site.description}</p>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-dashed-ink font-courier text-[10px] tracking-widest text-ink-brown">
                      <span>{site.stack}</span>
                      <span className="flex items-center gap-1 text-stamp-red shrink-0">
                        OPEN <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="space-y-14">
          {portfolioData.map((yearGroup, groupIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.06 }}
            >
              <div className="flex items-center gap-3 sm:gap-5 mb-6">
                <div className="diag-stripes-red h-2 w-12 sm:w-20" />
                <div className="paper-card-cream px-4 py-2 flex items-center gap-3 relative">
                  <div className="absolute -top-2 -left-2 w-3 h-3 border-l-2 border-t-2 border-stamp-red" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 border-r-2 border-t-2 border-stamp-red" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 border-l-2 border-b-2 border-stamp-red" />
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border-r-2 border-b-2 border-stamp-red" />
                  <span className="font-courier text-[10px] tracking-widest text-ink-brown">YEAR</span>
                  <h3 className="font-blackops text-4xl sm:text-5xl text-ink tracking-tight leading-none">
                    {yearGroup.year}
                  </h3>
                  <span className="font-courier text-[10px] tracking-widest text-stamp-red">
                    {yearGroup.count} {yearGroup.count === 1 ? "MISSION" : "MISSIONS"}
                  </span>
                </div>
                <div className="flex-1 border-t-2 border-double border-ink" />
                <span className="hidden md:inline font-courier text-[10px] tracking-widest text-ink-brown">
                  ARCHIVE-Y{yearGroup.year}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {yearGroup.projects.map((project, projectIndex) => {
                  const Icon = getCategoryIcon(project.category);
                  const rot = ((projectIndex * 17) % 5) - 2;

                  return (
                    <motion.div
                      key={`${yearGroup.year}-${project.name}-${projectIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: projectIndex * 0.04 }}
                      className="paper-card-cream p-5 paper-grain relative group transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                      style={{ transform: `rotate(${rot * 0.3}deg)` }}
                    >
                      <div className="tape tape-yellow w-10 h-3 -top-1.5 left-6 rotate-[-4deg]" />

                      <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                        <span className="font-courier text-[10px] tracking-widest text-ink-brown">
                          M-{yearGroup.year}-{String(projectIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="font-blackops text-[10px] tracking-widest text-stamp-red">{project.category.toUpperCase()}</span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 border-2 border-ink bg-paper text-stamp-red shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-blackops text-sm sm:text-base text-ink uppercase tracking-[0.04em] leading-tight group-hover:text-stamp-red transition-colors">
                            {project.name}
                          </h4>
                        </div>
                      </div>

                      <p className="font-courier text-sm text-ink/80 leading-relaxed border-t border-dashed-ink pt-2">
                        <span className="font-blackops text-[10px] tracking-widest text-stamp-blue">SYS //</span>{" "}
                        {project.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between font-courier text-[9px] tracking-widest text-ink-brown">
                        <span><FileText className="w-3 h-3 inline mr-1 -mt-0.5" />MISSION RECORD</span>
                        <span className="text-stamp-red">VERIFIED</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>END OF MISSIONS ANNEX</span>
          <span>TOTAL ENGAGEMENTS: {totalProjects}</span>
          <span>FILED BY OPERATIONS DIRECTORATE</span>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePortfolioSection;
