import { motion } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Calculator,
  Cloud,
  Code2,
  Database,
  FileText,
  Headphones,
  Mail,
  Megaphone,
  Palette,
  RadioTower,
  Server,
  Share2,
  ShoppingCart,
  Target,
  Video,
  Workflow,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

type CategoryId = "all" | "systems" | "operations" | "creative" | "growth";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  category: Exclude<CategoryId, "all">;
  services: string[];
  tools?: string;
}

const categories: { id: CategoryId; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "All", icon: RadioTower },
  { id: "systems", label: "Systems", icon: Server },
  { id: "operations", label: "Operations", icon: BriefcaseBusiness },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "growth", label: "Growth", icon: Megaphone },
];

const services: Service[] = [
  {
    title: "Full-Stack Engineering",
    description: "Frontends, backends, databases, and deployment paths for production-ready web systems.",
    icon: Code2,
    category: "systems",
    services: ["React and TypeScript interfaces", "REST API and server logic", "Database modeling and reporting", "Deployment and maintenance support"],
    tools: "React, TypeScript, Node, Laravel, Firebase",
  },
  {
    title: "Enterprise Systems",
    description: "Internal tools and operational platforms for teams that need structure, security, and scale.",
    icon: Database,
    category: "systems",
    services: ["Inventory and monitoring systems", "Admin dashboards", "Workflow and role design", "Data integrity checks"],
    tools: "PostgreSQL, MySQL, MongoDB, Firebase",
  },
  {
    title: "AI Automation",
    description: "Automated workflows that remove repetitive work and connect scattered business tools.",
    icon: Bot,
    category: "systems",
    services: ["AI agent workflows", "Zapier, Make, and n8n automations", "CRM and inbox routing", "API integration plans"],
    tools: "OpenAI, n8n, Zapier, Make",
  },
  {
    title: "Cloud and API Support",
    description: "Integration, hosting, monitoring, and operational support for digital products.",
    icon: Cloud,
    category: "systems",
    services: ["Cloud deployment coordination", "Webhook integrations", "Authentication flows", "Technical documentation"],
    tools: "Vercel, Render, GitHub, REST APIs",
  },
  {
    title: "Administrative Command",
    description: "High-trust administrative support for founders, executives, and growing teams.",
    icon: Mail,
    category: "operations",
    services: ["Inbox and calendar management", "Meeting coordination", "Document preparation", "Spreadsheet reporting"],
    tools: "Google Workspace, Microsoft 365, Notion",
  },
  {
    title: "Customer Support Ops",
    description: "Responsive client communication and issue handling across support channels.",
    icon: Headphones,
    category: "operations",
    services: ["Email and chat support", "Ticket queue management", "Order and refund follow-up", "FAQ and helpdesk upkeep"],
    tools: "Zendesk, Freshdesk, Intercom, HubSpot",
  },
  {
    title: "Project Coordination",
    description: "Task tracking, reporting, and follow-through for multi-step business work.",
    icon: Workflow,
    category: "operations",
    services: ["Timeline tracking", "Team follow-ups", "Progress reporting", "Meeting notes and action items"],
    tools: "ClickUp, Asana, Trello, Monday",
  },
  {
    title: "Bookkeeping Assistance",
    description: "Basic financial organization for operators who need clean records and repeatable reports.",
    icon: Calculator,
    category: "operations",
    services: ["Invoice preparation", "Expense tracking", "Account reconciliation support", "Financial data entry"],
    tools: "QuickBooks, Xero, Sheets",
  },
  {
    title: "Graphic Design Support",
    description: "Brand-aligned visuals for campaigns, presentations, thumbnails, and social channels.",
    icon: Palette,
    category: "creative",
    services: ["Social graphics", "Marketing banners", "Presentation assets", "Infographics and thumbnails"],
    tools: "Canva, Photoshop, Illustrator",
  },
  {
    title: "Video Editing",
    description: "Short-form and long-form editing built for clarity, pacing, and platform fit.",
    icon: Video,
    category: "creative",
    services: ["Reels, TikTok, and Shorts", "Promotional edits", "Captions and subtitles", "Basic motion graphics"],
    tools: "Premiere Pro, After Effects, CapCut",
  },
  {
    title: "Content Publishing",
    description: "Content formatting, scheduling, and upkeep across websites and social platforms.",
    icon: FileText,
    category: "creative",
    services: ["Blog publishing", "Website content updates", "SEO formatting", "Proofreading and upload checks"],
    tools: "WordPress, CMS, Google Docs",
  },
  {
    title: "Lead and Market Intel",
    description: "Prospecting, research, and list-building for teams preparing their next move.",
    icon: Target,
    category: "growth",
    services: ["LinkedIn prospecting", "Lead database building", "Competitor research", "Contact verification"],
    tools: "LinkedIn, Apollo, Sheets, CRM tools",
  },
  {
    title: "Social Media Management",
    description: "Channel management and engagement systems for a consistent digital presence.",
    icon: Share2,
    category: "growth",
    services: ["Scheduling and publishing", "Comment and DM handling", "Hashtag research", "Analytics snapshots"],
    tools: "Meta, LinkedIn, TikTok, YouTube",
  },
  {
    title: "E-Commerce Ops",
    description: "Store support for product setup, customer flow, and day-to-day commerce tasks.",
    icon: ShoppingCart,
    category: "growth",
    services: ["Product listings", "Order processing", "Inventory updates", "Customer inquiry support"],
    tools: "Shopify, Amazon, WooCommerce",
  },
  {
    title: "Digital Marketing Support",
    description: "Campaign execution support for launches, newsletters, funnels, and reporting.",
    icon: Megaphone,
    category: "growth",
    services: ["Email campaigns", "Newsletter builds", "Campaign monitoring", "Marketing automation setup"],
    tools: "Mailchimp, HubSpot, Meta Ads",
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredServices = useMemo(
    () => (activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)),
    [activeCategory],
  );

  return (
    <section id="services" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Arsenal / Services</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            A full command stack for <span className="text-gradient-red">complex operations.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            Engineering, automation, creative production, and business support organized as one execution system.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(({ id, label, icon: Icon }) => {
            const active = activeCategory === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-black transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/70 text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
