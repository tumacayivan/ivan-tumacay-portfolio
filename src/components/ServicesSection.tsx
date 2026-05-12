import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  Mail, Headphones, Share2, Palette, Video, FileText,
  Target, ShoppingCart, Megaphone, Building2, Calculator,
  Wrench, BarChart3, ClipboardList, GraduationCap,
} from "lucide-react";

const services = [
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

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[20.7vw] leading-none rotate-[-4deg] opacity-50">
          OPERATIONS
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-ink">
            <div className="flex items-center gap-3">
              <span className="status-pulse" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 03 // TACTICAL OPERATIONS BOARD
              </span>
            </div>
            <span className="font-courier text-[13px] text-ink-brown tracking-widest hidden sm:inline">
              {services.length} CAPABILITIES LOGGED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
                Expertise // OPERATIONAL CAPABILITIES
              </p>
              <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
                WHAT I <span className="text-ink">OFFER</span>
              </h2>
            </div>
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">FIELD BRIEFING</div>
              <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
                Comprehensive <span className="font-bold text-ink underline">virtual assistant</span>, <span className="font-bold text-ink underline">digital operations</span>, and <span className="font-bold text-ink underline">software engineering</span> services designed to help your business scale.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>BOARD UPDATED · ALL ASSETS VERIFIED</span>
          <span>OPERATIONS DIRECTORATE / IT</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
