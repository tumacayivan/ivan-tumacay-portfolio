import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Zap } from "lucide-react";

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

const getCategoryColor = (category: Project["category"]) => {
  switch (category) {
    case "Web":
      return "text-blue-500 bg-blue-500/10";
    case "Automation":
      return "text-purple-500 bg-purple-500/10";
    case "API":
      return "text-green-500 bg-green-500/10";
    case "Mobile":
      return "text-orange-500 bg-orange-500/10";
    default:
      return "text-primary bg-primary/10";
  }
};

const SoftwarePortfolioSection = () => {
  return (
    <section id="software-portfolio" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">
            Software Development Portfolio
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
            PROJECT <span className="text-gradient-gold">SHOWCASE</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-xl sm:text-2xl font-semibold">
            A curated selection of projects delivered for <span className="text-foreground font-bold">clients</span> and <span className="text-foreground font-bold">enterprise organizations</span>, showcasing expertise across industries and technologies.
          </p>
        </motion.div>

        <div className="space-y-16">
          {portfolioData.map((yearGroup, groupIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="flex items-center gap-4">
                  <h3 className="text-4xl sm:text-5xl font-heading font-black text-foreground tracking-tighter">
                    {yearGroup.year}
                  </h3>
                  <span className="text-lg font-bold text-muted-foreground uppercase tracking-wider">
                    {yearGroup.count} {yearGroup.count === 1 ? "project" : "projects"}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearGroup.projects.map((project, projectIndex) => {
                  const Icon = getCategoryIcon(project.category);
                  const colorClass = getCategoryColor(project.category);

                  return (
                    <motion.div
                      key={`${yearGroup.year}-${project.name}-${projectIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: projectIndex * 0.05 }}
                      className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:glow-gold group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${colorClass} shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-black uppercase tracking-wider px-2 py-1 rounded ${colorClass}`}>
                              {project.category}
                            </span>
                          </div>
                          <h4 className="font-heading font-extrabold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
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
