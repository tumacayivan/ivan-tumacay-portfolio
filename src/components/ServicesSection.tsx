import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Mail, Headphones, Share2, Palette, Video, FileText,
  Target, ShoppingCart, Megaphone, Building2, Calculator,
  Wrench, BarChart3, ClipboardList, GraduationCap, Check, ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./drift/SectionHeading";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
  tools?: string;
}

const services: Service[] = [
  { title: "Administrative Virtual Assistant", description: "Professional support for daily business operations and administrative workflows.", icon: Mail, services: ["Email and inbox management", "Calendar management and scheduling", "Meeting coordination", "Data entry and database updates", "File organization and document management", "Online research and data gathering", "Travel planning and booking", "Document preparation and formatting", "CRM data updates", "Spreadsheet organization and reporting"] },
  { title: "Customer Support Virtual Assistant", description: "Helping businesses maintain excellent customer relationships and support systems.", icon: Headphones, services: ["Email customer support", "Live chat support", "Helpdesk and ticketing system management", "Order tracking and follow ups", "Refund and issue resolution", "Customer onboarding support", "Customer feedback monitoring", "FAQ management"], tools: "Zendesk, Freshdesk, Intercom, HubSpot" },
  { title: "Social Media Management", description: "Managing and growing social media presence across multiple platforms.", icon: Share2, services: ["Social media content scheduling", "Comment moderation", "Direct message responses", "Social media strategy assistance", "Hashtag research", "Social media analytics tracking", "Engagement monitoring", "Community management"], tools: "Facebook, Instagram, LinkedIn, TikTok, Twitter/X, YouTube" },
  { title: "Graphics Design Support", description: "Visual content creation for branding, marketing, and social media.", icon: Palette, services: ["Social media graphics", "Marketing banners", "Promotional materials", "Business presentations", "Infographics", "Brand visual assets", "Thumbnail designs", "Website graphics"], tools: "Canva, Adobe Photoshop, Adobe Illustrator" },
  { title: "Video Editing & Multimedia", description: "Professional video editing for marketing, social media, and online content.", icon: Video, services: ["Video editing for YouTube and social media", "Short form video editing (Reels, TikTok, Shorts)", "Promotional video editing", "Captioning and subtitles", "Basic motion graphics", "Video trimming and enhancement", "Thumbnail design", "Audio synchronization and editing"], tools: "Adobe Premiere Pro, After Effects, CapCut" },
  { title: "Content Management & Publishing", description: "Supporting businesses with content production and digital publishing workflows.", icon: FileText, services: ["Blog publishing and formatting", "Content uploading and scheduling", "WordPress content management", "Article research and preparation", "Proofreading and editing", "SEO content formatting", "Website content updates"] },
  { title: "Lead Generation & Prospecting", description: "Helping businesses identify and connect with potential customers or clients.", icon: Target, services: ["LinkedIn prospecting", "Lead database building", "Email list building", "Market research", "Contact information gathering", "CRM lead management", "Prospect qualification"] },
  { title: "E-Commerce Virtual Assistant", description: "Supporting online stores and digital commerce operations.", icon: ShoppingCart, services: ["Product listing creation", "Product research", "Inventory management", "Order processing", "Customer inquiry handling", "Product description writing", "Shopify store management", "Amazon store support"] },
  { title: "Digital Marketing Support", description: "Helping businesses execute and manage marketing strategies.", icon: Megaphone, services: ["Email marketing campaigns", "Newsletter creation", "Funnel setup and management", "Campaign monitoring and analytics", "Marketing research", "Social media advertising assistance", "Marketing automation setup"] },
  { title: "Real Estate Virtual Assistant", description: "Supporting real estate professionals and property businesses.", icon: Building2, services: ["Property listing updates", "MLS data entry", "Lead follow ups", "Client communication", "Appointment scheduling", "CRM updates", "Property research"] },
  { title: "Bookkeeping Assistance", description: "Basic financial organization and reporting support.", icon: Calculator, services: ["Invoice preparation", "Expense tracking", "Financial data entry", "Account reconciliation support", "Financial report preparation", "Accounting software assistance"], tools: "QuickBooks, Xero, Spreadsheets" },
  { title: "Technical Virtual Assistant", description: "Technical support for websites, systems, and digital platforms.", icon: Wrench, services: ["Website updates and maintenance", "WordPress management", "CRM setup and configuration", "Automation setup (Zapier, Make, n8n)", "System troubleshooting", "Technical documentation", "API integration assistance"] },
  { title: "Data & Research Virtual Assistant", description: "Supporting businesses with structured research and data analysis.", icon: BarChart3, services: ["Market research", "Competitor analysis", "Data collection and organization", "Report preparation", "Industry trend research", "Data visualization support"] },
  { title: "Project Management Assistant", description: "Coordinating projects and ensuring timely delivery of tasks and milestones.", icon: ClipboardList, services: ["Task tracking and management", "Team coordination and follow-ups", "Project timeline management", "Progress reporting and updates", "Meeting notes and action items", "Resource allocation support", "Deadline monitoring"], tools: "Trello, Asana, Monday.com, ClickUp, Notion" },
  { title: "Executive & Personal Assistant", description: "High-level support for executives, entrepreneurs, and busy professionals.", icon: GraduationCap, services: ["Executive calendar management", "Priority inbox management", "Confidential document handling", "Personal errand coordination", "Event planning and logistics", "Travel itinerary management", "Client relationship support"] },
];

const Detail = ({ service }: { service: Service }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, x: 40, skewX: -4 }}
    animate={{ opacity: 1, x: 0, skewX: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
  >
    <service.icon className="w-10 h-10 text-drift mb-6" />
    <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink leading-[1.05] mb-3">{service.title}</h3>
    <p className="text-lg text-ink-dim leading-relaxed mb-8">{service.description}</p>

    <div className="hud-label mb-4">What's included</div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
      {service.services.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.03 }}
          className="flex items-start gap-2.5 text-ink"
        >
          <Check className="w-4 h-4 mt-1 shrink-0 text-hud" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>

    {service.tools && (
      <>
        <div className="hud-label mb-3">Tools</div>
        <div className="flex flex-wrap gap-2 mb-8">
          {service.tools.split(",").map((t) => (
            <span key={t} className="chip">{t.trim()}</span>
          ))}
        </div>
      </>
    )}

    <a href="#contact" className="btn-drift">
      <span className="flex items-center gap-2">
        Book this service <ArrowUpRight className="w-4 h-4" />
      </span>
    </a>
  </motion.div>
);

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" data-scene="Services" data-kanji="サービス" className="relative py-24 sm:py-32 bg-asphalt-2 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-drift to-transparent" />
      <div className="gutter relative">
        <SectionHeading kanji="サービス" kicker="Pit menu" title="What I" accent="offer" meta={`${services.length} services`}>
          Virtual assistant, digital operations and software engineering services to take work off your plate
          and help your business scale. Pick one to see exactly what's included.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-14 items-start">
          <ul className="border-t border-line/10" role="tablist" aria-label="Services" aria-orientation="vertical">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.title} className="border-b border-line/10">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group relative w-full flex items-center gap-4 py-4 sm:py-5 text-left transition-colors ${
                      isActive ? "text-drift" : "text-ink/75 hover:text-ink"
                    }`}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-2 bottom-2 w-[3px] bg-drift origin-top"
                      initial={false}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                    />
                    <motion.span
                      className="flex items-center gap-4 min-w-0"
                      animate={{ x: isActive ? 18 : 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <s.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-drift" : "text-hud"}`} />
                      <span className="font-hud text-base sm:text-lg font-bold uppercase tracking-[0.04em] leading-tight">
                        {s.title}
                      </span>
                    </motion.span>
                    <span className={`ml-auto font-hud text-xs tabular-nums ${isActive ? "text-drift" : "text-ink-dim"}`}>
                      {s.services.length}
                    </span>
                  </button>

                  {/* Mobile: details open under the chosen service */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="lg:hidden overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-8 pt-2">
                          <Detail service={s} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block sticky top-28">
            <div className="panel p-8 xl:p-10 min-h-[560px] overflow-hidden">
              <div aria-hidden className="absolute right-6 top-6 neon-kanji vertical text-2xl opacity-80">整備</div>
              <AnimatePresence mode="wait">
                <Detail key={active} service={services[active]} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
