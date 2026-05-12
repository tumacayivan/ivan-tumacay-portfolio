import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap, Folder, FileText, ExternalLink, MonitorPlay } from "lucide-react";
import marketHacker1 from "@/assets/market-hacker-website1.png";
import marketHacker2 from "@/assets/market-hacker-website2.png";
import ivanSwarmAi from "@/assets/ivan-swarm-ai-website.png";
import ivanQuantModel from "@/assets/ivan-quant-model-website.png";
import goldenPearl from "@/assets/golden-south-sea-pearl-website.png";
import tumacayMotors from "@/assets/tumacay-general-motors-website.png";

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

const SoftwarePortfolioSection = () => {
  const totalProjects = portfolioData.reduce((acc, g) => acc + g.count, 0);

  return (
    <section id="software-portfolio" className="relative py-20 sm:py-28 overflow-hidden paper-grain">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-end overflow-hidden">
        <div className="watermark text-[16.1vw] leading-none rotate-[4deg] -mr-10">
          MISSIONS
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Folder className="w-5 h-5 text-ink" />
            <span className="font-blackops text-base tracking-[0.3em] text-ink">
              ANNEX 01 // SOFTWARE DEVELOPMENT PORTFOLIO
            </span>
            <span className="font-courier text-[13px] text-ink-brown tracking-widest hidden sm:inline">
              · {totalProjects} OPERATIONS LOGGED
            </span>
          </div>
          <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
            Software Development Portfolio
          </p>
          <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
            PROJECT <span className="text-ink">SHOWCASE</span>
          </h2>
          <div className="mt-4 paper-card-cream p-4 max-w-3xl relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">MISSION SUMMARY</div>
            <p className="font-typewriter text-xl text-ink leading-relaxed mt-1">
              A curated selection of projects delivered for <span className="font-bold text-ink underline">clients</span> and <span className="font-bold text-ink underline">enterprise organizations</span>, showcasing expertise across industries and technologies.
            </p>
          </div>
        </motion.div>

        {/* LIVE DEPLOYMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-5 mb-6">
            <div className="diag-stripes-red h-2 w-12 sm:w-20" />
            <div className="paper-card-cream px-4 py-2 flex items-center gap-3 relative">
              <div className="absolute -top-2 -left-2 w-3 h-3 border-l-2 border-t-2 border-ink" />
              <div className="absolute -top-2 -right-2 w-3 h-3 border-r-2 border-t-2 border-ink" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 border-l-2 border-b-2 border-ink" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border-r-2 border-b-2 border-ink" />
              <MonitorPlay className="w-5 h-5 text-ink" />
              <span className="font-courier text-[13px] tracking-widest text-ink-brown">FEATURED</span>
              <h3 className="font-blackops text-3xl sm:text-4xl text-ink tracking-tight leading-none">
                LIVE DEPLOYMENTS
              </h3>
              <span className="font-courier text-[13px] tracking-widest text-ink">
                {liveSites.length} SITES
              </span>
            </div>
            <div className="flex-1 border-t-2 border-double border-ink" />
            <span className="hidden md:inline font-courier text-[13px] tracking-widest text-ink-brown">
              DEPLOYED · IN PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveSites.map((site, i) => {
              const rot = ((i * 23) % 5) - 2;
              return (
                <motion.a
                  key={site.name + i}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="paper-card-cream p-4 sm:p-5 paper-grain relative group block transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
                  style={{ transform: `rotate(${rot * 0.3}deg)` }}
                >
                  <div className="tape tape-yellow w-16 h-4 -top-2 left-8 rotate-[-4deg] z-10" />
                  <div className="tape tape-clear w-12 h-3 -top-1.5 right-10 rotate-[5deg] z-10" />

                  <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                    <span className="font-courier text-[13px] tracking-widest text-ink-brown">
                      LIVE-{String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="font-blackops text-[12px] tracking-widest text-ink flex items-center gap-1.5">
                      <span className="status-pulse" /> DEPLOYED
                    </span>
                  </div>

                  <div className="relative overflow-hidden border-2 border-ink mb-4">
                    <div className="absolute -top-1 left-3 z-10 bg-paper border border-ink px-2 py-0.5 font-courier text-[11px] tracking-widest text-ink rotate-[-2deg]">
                      EXHIBIT-{String(i + 1).padStart(3, "0")}
                    </div>

                    <img
                      src={site.image}
                      alt={`${site.name} - live website screenshot`}
                      className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] object-cover object-top photocopy-strong group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-paper" />
                    <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-paper" />
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-paper" />
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-paper" />

                    <div className="absolute top-3 right-6 stamp !text-[11px] !p-1.5 !rotate-[-6deg]">
                      DEPLOYED
                    </div>

                    <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                      <div className="w-14 h-14 border-2 border-paper flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-paper" />
                      </div>
                      <span className="font-blackops text-base text-paper tracking-widest uppercase">
                        VISIT LIVE SITE
                      </span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="font-courier text-[12px] tracking-widest text-ink-brown uppercase mb-1">
                      ◉ SUBJECT SITE
                    </div>
                    <h4 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-tight leading-tight">
                      {site.name}
                    </h4>
                    <p className="font-typewriter text-base text-ink underline decoration-1 underline-offset-2 mt-1">
                      {site.tagline}
                    </p>
                  </div>

                  <p className="font-courier text-base text-ink leading-relaxed border-t border-dashed-ink pt-2 mb-3">
                    <span className="font-blackops text-[12px] tracking-widest text-ink">DOSSIER //</span>{" "}
                    {site.description}
                  </p>

                  <div className="font-courier text-[12px] tracking-widest text-ink-brown border-t border-dashed-ink pt-2 mb-3">
                    <span className="font-blackops text-ink">STACK ·</span> {site.stack}
                  </div>

                  <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 bg-ink text-paper border-2 border-ink font-blackops text-sm sm:text-base tracking-[0.18em] uppercase group-hover:bg-paper group-hover:text-ink transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>VISIT LIVE SITE</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between font-courier text-[11px] tracking-widest text-ink-brown">
                    <span>OPEN-IN-NEW-TAB · ENCRYPTED</span>
                    <span className="text-ink">VERIFIED</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-courier text-[12px] text-ink-brown tracking-widest">
            <span>◉ ALL SITES PUBLICLY ACCESSIBLE · CLEARANCE PUBLIC</span>
            <span>END OF LIVE DEPLOYMENTS SECTION</span>
          </div>
        </motion.div>

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
                  <div className="absolute -top-2 -left-2 w-3 h-3 border-l-2 border-t-2 border-ink" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 border-r-2 border-t-2 border-ink" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 border-l-2 border-b-2 border-ink" />
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border-r-2 border-b-2 border-ink" />
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">YEAR</span>
                  <h3 className="font-blackops text-5xl sm:text-6xl text-ink tracking-tight leading-none">
                    {yearGroup.year}
                  </h3>
                  <span className="font-courier text-[13px] tracking-widest text-ink">
                    {yearGroup.count} {yearGroup.count === 1 ? "MISSION" : "MISSIONS"}
                  </span>
                </div>
                <div className="flex-1 border-t-2 border-double border-ink" />
                <span className="hidden md:inline font-courier text-[13px] tracking-widest text-ink-brown">
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
                        <span className="font-courier text-[13px] tracking-widest text-ink-brown">
                          M-{yearGroup.year}-{String(projectIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="font-blackops text-[13px] tracking-widest text-ink">{project.category.toUpperCase()}</span>
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-blackops text-base sm:text-lg text-ink uppercase tracking-[0.04em] leading-tight group-hover:text-ink transition-colors">
                            {project.name}
                          </h4>
                        </div>
                      </div>

                      <p className="font-courier text-base text-ink leading-relaxed border-t border-dashed-ink pt-2">
                        <span className="font-blackops text-[13px] tracking-widest text-ink">SYS //</span>{" "}
                        {project.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between font-courier text-[11px] tracking-widest text-ink-brown">
                        <span><FileText className="w-3 h-3 inline mr-1 -mt-0.5" />MISSION RECORD</span>
                        <span className="text-ink">VERIFIED</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>END OF MISSIONS ANNEX</span>
          <span>TOTAL ENGAGEMENTS: {totalProjects}</span>
          <span>FILED BY OPERATIONS DIRECTORATE</span>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePortfolioSection;
