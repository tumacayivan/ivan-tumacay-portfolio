import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Mail, Headphones, Share2, Palette, Video, FileText,
  Target, ShoppingCart, Megaphone, Building2, Calculator,
  Wrench, BarChart3, ClipboardList, GraduationCap, Check, ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./transit/SectionHeading";

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

const EASE = [0.16, 1, 0.3, 1] as const;

/** One face of the monolith: the system that is currently turned toward us. */
const Face = ({ service, index }: { service: Service; index: number }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, rotateX: -14, y: 24 }}
    animate={{ opacity: 1, rotateX: 0, y: 0 }}
    exit={{ opacity: 0, rotateX: 10, y: -18 }}
    transition={{ duration: 0.8, ease: EASE }}
    className="origin-top"
  >
    <div className="flex items-center justify-between gap-4 mb-7">
      <service.icon className="w-8 h-8 text-[hsl(var(--beam-gold))]" aria-hidden />
      <span className="font-tele text-xs tracking-[0.3em] uppercase text-[hsl(var(--void-ink))]/45 tabular-nums">
        System {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
      </span>
    </div>

    <h3 className="plate text-3xl sm:text-4xl leading-[1.04] mb-4">{service.title}</h3>
    <p className="text-lg leading-relaxed text-[hsl(var(--void-ink))]/70 mb-9">{service.description}</p>

    <div className="font-tele text-xs tracking-[0.26em] uppercase text-[hsl(var(--beam-signal))] mb-5">
      What's included
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3 mb-9">
      {service.services.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 + i * 0.045, duration: 0.6, ease: EASE }}
          className="flex items-start gap-3 text-[hsl(var(--void-ink))]/90 text-[0.95rem] leading-relaxed"
        >
          <Check className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--beam-gold))]" aria-hidden />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>

    {service.tools && (
      <>
        <div className="font-tele text-xs tracking-[0.26em] uppercase text-[hsl(var(--beam-signal))] mb-4">Tools</div>
        <div className="flex flex-wrap gap-2 mb-9">
          {service.tools.split(",").map((t) => (
            <span
              key={t}
              className="font-tele text-xs tracking-[0.1em] uppercase px-2.5 py-1.5 border border-[hsl(var(--beam-gold)/0.3)] text-[hsl(var(--void-ink))]/80"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </>
    )}

    <a href="#contact" className="btn-primary">
      <span className="flex items-center gap-2">
        Request this system <ArrowUpRight className="w-4 h-4" aria-hidden />
      </span>
    </a>
  </motion.div>
);

/**
 * THE MONOLITH — every capability, on one black slab.
 *
 * The list is the index; the slab is the object. Choosing a system turns
 * that face toward the visitor. Segment seams run the height of it, so it
 * reads as one machined thing rather than a stack of cards.
 */
const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      data-scene="The monolith"
      data-coord="Stage 05 · Capability"
      className="relative py-24 sm:py-32 bg-deep-2 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rule/20 to-transparent" />
      <div className="gutter relative">
        <SectionHeading
          stage="05"
          kicker="Capability"
          title="The"
          accent="monolith"
          meta={`${services.length} systems`}
        >
          Virtual assistant, digital operations and software engineering services to take work off your plate
          and help your business scale. Turn a face toward you to see exactly what is inside it.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-start">
          <ul className="border-t border-rule/10" role="tablist" aria-label="Services" aria-orientation="vertical">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.title} className="border-b border-rule/10">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group relative w-full flex items-center gap-4 py-4 sm:py-5 text-left transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-ice/70 hover:text-ice"
                    }`}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-2 bottom-2 w-px bg-gold origin-top"
                      initial={false}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <span className="font-tele text-xs tabular-nums text-ice-dim shrink-0 w-7">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.span
                      className="flex items-center gap-3.5 min-w-0"
                      animate={{ x: isActive ? 10 : 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                    >
                      <s.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-gold" : "text-signal"}`} aria-hidden />
                      <span className="font-tele text-sm sm:text-[0.95rem] uppercase tracking-[0.08em] leading-tight">
                        {s.title}
                      </span>
                    </motion.span>
                    <span className={`ml-auto font-tele text-xs tabular-nums ${isActive ? "text-gold" : "text-ice-dim"}`}>
                      {s.services.length}
                    </span>
                  </button>

                  {/* Small screens: the face opens under the system it belongs to */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="lg:hidden overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                      >
                        <div className="slab slab-seams p-6 sm:p-8 my-5">
                          <Face service={s} index={i} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block sticky top-28">
            <div className="slab slab-seams relative p-9 xl:p-12 min-h-[620px] overflow-hidden [perspective:1600px]">
              <span
                aria-hidden
                className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[hsl(var(--beam-gold)/0.4)] to-transparent"
              />
              <AnimatePresence mode="wait">
                <Face key={active} service={services[active]} index={active} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
