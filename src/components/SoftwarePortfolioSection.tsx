import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
