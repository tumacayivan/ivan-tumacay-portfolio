import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap, Folder, FileText } from "lucide-react";

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
