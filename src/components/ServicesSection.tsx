import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  Globe, Server, Database, Shield, Cloud, Smartphone,
  Code2, GitBranch, Layers, CreditCard, Bot, Workflow,
  Mail, Headphones, Share2, Palette, Video, FileText,
  Target, ShoppingCart, Megaphone, Building2, Calculator,
  Wrench, BarChart3, ClipboardList, GraduationCap,
} from "lucide-react";

const services = [
  // Virtual Assistant & Digital Operations
  {
    title: "Administrative Virtual Assistant",
    description: "Professional support for daily business operations and administrative workflows.",
    icon: Mail,
    services: [
      "Email and inbox management", "Calendar management and scheduling",
      "Meeting coordination", "Data entry and database updates",
      "File organization and document management", "Online research and data gathering",
      "Travel planning and booking", "Document preparation and formatting",
      "CRM data updates", "Spreadsheet organization and reporting",
    ],
  },
  {
    title: "Customer Support Virtual Assistant",
    description: "Helping businesses maintain excellent customer relationships and support systems.",
    icon: Headphones,
    services: [
      "Email customer support", "Live chat support",
      "Helpdesk and ticketing system management", "Order tracking and follow ups",
      "Refund and issue resolution", "Customer onboarding support",
      "Customer feedback monitoring", "FAQ management",
    ],
    tools: "Zendesk, Freshdesk, Intercom, HubSpot",
  },
  {
    title: "Social Media Management",
    description: "Managing and growing social media presence across multiple platforms.",
    icon: Share2,
    services: [
      "Social media content scheduling", "Comment moderation",
      "Direct message responses", "Social media strategy assistance",
      "Hashtag research", "Social media analytics tracking",
      "Engagement monitoring", "Community management",
    ],
    tools: "Facebook, Instagram, LinkedIn, TikTok, Twitter/X, YouTube",
  },
  {
    title: "Graphics Design Support",
    description: "Visual content creation for branding, marketing, and social media.",
    icon: Palette,
    services: [
      "Social media graphics", "Marketing banners",
      "Promotional materials", "Business presentations",
      "Infographics", "Brand visual assets",
      "Thumbnail designs", "Website graphics",
    ],
    tools: "Canva, Adobe Photoshop, Adobe Illustrator",
  },
  {
    title: "Video Editing & Multimedia",
    description: "Professional video editing for marketing, social media, and online content.",
    icon: Video,
    services: [
      "Video editing for YouTube and social media", "Short form video editing (Reels, TikTok, Shorts)",
      "Promotional video editing", "Captioning and subtitles",
      "Basic motion graphics", "Video trimming and enhancement",
      "Thumbnail design", "Audio synchronization and editing",
    ],
    tools: "Adobe Premiere Pro, After Effects, CapCut",
  },
  {
    title: "Content Management & Publishing",
    description: "Supporting businesses with content production and digital publishing workflows.",
    icon: FileText,
    services: [
      "Blog publishing and formatting", "Content uploading and scheduling",
      "WordPress content management", "Article research and preparation",
      "Proofreading and editing", "SEO content formatting",
      "Website content updates",
    ],
  },
  {
    title: "Lead Generation & Prospecting",
    description: "Helping businesses identify and connect with potential customers or clients.",
    icon: Target,
    services: [
      "LinkedIn prospecting", "Lead database building",
      "Email list building", "Market research",
      "Contact information gathering", "CRM lead management",
      "Prospect qualification",
    ],
  },
  {
    title: "E-Commerce Virtual Assistant",
    description: "Supporting online stores and digital commerce operations.",
    icon: ShoppingCart,
    services: [
      "Product listing creation", "Product research",
      "Inventory management", "Order processing",
      "Customer inquiry handling", "Product description writing",
      "Shopify store management", "Amazon store support",
    ],
  },
  {
    title: "Digital Marketing Support",
    description: "Helping businesses execute and manage marketing strategies.",
    icon: Megaphone,
    services: [
      "Email marketing campaigns", "Newsletter creation",
      "Funnel setup and management", "Campaign monitoring and analytics",
      "Marketing research", "Social media advertising assistance",
      "Marketing automation setup",
    ],
  },
  {
    title: "Real Estate Virtual Assistant",
    description: "Supporting real estate professionals and property businesses.",
    icon: Building2,
    services: [
      "Property listing updates", "MLS data entry",
      "Lead follow ups", "Client communication",
      "Appointment scheduling", "CRM updates",
      "Property research",
    ],
  },
  {
    title: "Bookkeeping Assistance",
    description: "Basic financial organization and reporting support.",
    icon: Calculator,
    services: [
      "Invoice preparation", "Expense tracking",
      "Financial data entry", "Account reconciliation support",
      "Financial report preparation", "Accounting software assistance",
    ],
    tools: "QuickBooks, Xero, Spreadsheets",
  },
  {
    title: "Technical Virtual Assistant",
    description: "Technical support for websites, systems, and digital platforms.",
    icon: Wrench,
    services: [
      "Website updates and maintenance", "WordPress management",
      "CRM setup and configuration", "Automation setup (Zapier, Make, n8n)",
      "System troubleshooting", "Technical documentation",
      "API integration assistance",
    ],
  },
  {
    title: "Data & Research Virtual Assistant",
    description: "Supporting businesses with structured research and data analysis.",
    icon: BarChart3,
    services: [
      "Market research", "Competitor analysis",
      "Data collection and organization", "Report preparation",
      "Industry trend research", "Data visualization support",
    ],
  },
  {
    title: "Project Management Assistant",
    description: "Coordinating projects and ensuring timely delivery of tasks and milestones.",
    icon: ClipboardList,
    services: [
      "Task tracking and management", "Team coordination and follow-ups",
      "Project timeline management", "Progress reporting and updates",
      "Meeting notes and action items", "Resource allocation support",
      "Deadline monitoring",
    ],
    tools: "Trello, Asana, Monday.com, ClickUp, Notion",
  },
  {
    title: "Executive & Personal Assistant",
    description: "High-level support for executives, entrepreneurs, and busy professionals.",
    icon: GraduationCap,
    services: [
      "Executive calendar management", "Priority inbox management",
      "Confidential document handling", "Personal errand coordination",
      "Event planning and logistics", "Travel itinerary management",
      "Client relationship support",
    ],
  },
  // Software Engineering
  // {
  //   title: "Front End Development",
  //   description: "Building responsive, performant, and visually polished user interfaces.",
  //   icon: Globe,
  //   services: [
  //     "React & Next.js applications", "TypeScript & JavaScript development",
  //     "Responsive & mobile-first design", "Component library development",
  //     "State management & optimization", "Progressive Web Applications",
  //     "Cross-browser compatibility", "UI/UX implementation",
  //   ],
  //   tools: "React, Next.js, TypeScript, Tailwind CSS, Vue.js",
  // },
  // {
  //   title: "Back End Development",
  //   description: "Designing and building robust server-side systems and APIs.",
  //   icon: Server,
  //   services: [
  //     "RESTful & GraphQL API development", "Microservices architecture",
  //     "Authentication & authorization systems", "Server-side logic & business rules",
  //     "Third-party API integrations", "Background job processing",
  //     "Real-time data with WebSockets", "Performance optimization",
  //   ],
  //   tools: "Node.js, Python, PHP, Laravel, Express.js",
  // },
  // {
  //   title: "Database & Data Management",
  //   description: "Designing scalable database architectures and data pipelines.",
  //   icon: Database,
  //   services: [
  //     "Database design & modeling", "SQL & NoSQL implementations",
  //     "Data migration & ETL processes", "Query optimization & indexing",
  //     "Database replication & backups", "Data integrity & validation",
  //   ],
  //   tools: "PostgreSQL, MySQL, MongoDB, Redis, Firebase",
  // },
  // {
  //   title: "Cloud Infrastructure",
  //   description: "Deploying and managing scalable cloud-based systems.",
  //   icon: Cloud,
  //   services: [
  //     "Cloud deployment & DevOps", "CI/CD pipeline setup",
  //     "Container orchestration (Docker)", "Serverless architecture",
  //     "Infrastructure as Code", "Load balancing & auto-scaling",
  //     "Monitoring & logging systems",
  //   ],
  //   tools: "AWS, GCP, Azure, Docker, Vercel, DigitalOcean",
  // },
  // {
  //   title: "Enterprise Software Systems",
  //   description: "Building large-scale enterprise applications for business operations.",
  //   icon: Layers,
  //   services: [
  //     "Enterprise web applications", "Business management systems",
  //     "Inventory & supply chain systems", "Internal tools & dashboards",
  //     "Workflow automation platforms", "ERP system development",
  //     "Multi-tenant architectures",
  //   ],
  // },
  // {
  //   title: "FinTech & Payment Systems",
  //   description: "Developing secure financial technology and payment processing solutions.",
  //   icon: CreditCard,
  //   services: [
  //     "Payment processing APIs", "Financial transaction workflows",
  //     "Secure authentication systems", "Digital payment platforms",
  //     "Financial reporting systems", "Compliance & security protocols",
  //   ],
  // },
  // {
  //   title: "Mobile Application Development",
  //   description: "Creating cross-platform and native mobile applications.",
  //   icon: Smartphone,
  //   services: [
  //     "React Native development", "Cross-platform mobile apps",
  //     "Mobile UI/UX implementation", "Push notifications & offline support",
  //     "App Store deployment", "Mobile API integration",
  //   ],
  //   tools: "React Native, Flutter, Expo",
  // },
  // {
  //   title: "API Development & Integration",
  //   description: "Building and integrating scalable APIs for modern applications.",
  //   icon: GitBranch,
  //   services: [
  //     "RESTful API design", "GraphQL implementation",
  //     "Webhook integrations", "OAuth & JWT authentication",
  //     "API documentation", "Rate limiting & security",
  //     "Third-party service integration",
  //   ],
  // },
  // {
  //   title: "Security & Architecture",
  //   description: "Implementing secure, scalable software architecture.",
  //   icon: Shield,
  //   services: [
  //     "Security audit & implementation", "Encryption & data protection",
  //     "Secure coding practices", "System architecture design",
  //     "Performance & scalability planning", "Code review & best practices",
  //   ],
  // },
  // {
  //   title: "Automation & AI Integration",
  //   description: "Building intelligent automation and AI-powered systems.",
  //   icon: Bot,
  //   services: [
  //     "Business process automation", "AI workflow integration",
  //     "Chatbot & AI agent development", "Data processing automation",
  //     "Machine learning pipelines", "AI-powered productivity tools",
  //   ],
  //   tools: "OpenAI, LangChain, Zapier, n8n, Make",
  // },
  // {
  //   title: "Full Stack Engineering",
  //   description: "End-to-end software development from concept to deployment.",
  //   icon: Code2,
  //   services: [
  //     "Full project lifecycle management", "System design & architecture",
  //     "Technical documentation", "Code optimization & refactoring",
  //     "Testing & quality assurance", "Deployment & maintenance",
  //   ],
  // },
  // {
  //   title: "DevOps & Workflow Optimization",
  //   description: "Streamlining development workflows and operations.",
  //   icon: Workflow,
  //   services: [
  //     "CI/CD pipeline automation", "Git workflow optimization",
  //     "Development environment setup", "Automated testing frameworks",
  //     "Performance monitoring", "Incident management processes",
  //   ],
  //   tools: "GitHub Actions, Jenkins, Docker, Kubernetes",
  // },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
            WHAT I <span className="text-gradient-gold">OFFER</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-xl sm:text-2xl font-semibold">
            Comprehensive <span className="text-foreground font-bold">virtual assistant</span>, <span className="text-foreground font-bold">digital operations</span>, and <span className="text-foreground font-bold">software engineering</span> services designed to help your business scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
