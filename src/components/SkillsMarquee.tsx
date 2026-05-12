import {
  Bot,
  Building2,
  Calculator,
  Camera,
  ClipboardList,
  Database,
  FileText,
  Headphones,
  Laptop,
  Mail,
  Megaphone,
  Palette,
  PenTool,
  Server,
  Share2,
  ShoppingCart,
  Target,
  UserCheck,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  label: string;
}

const allSkills: Skill[] = [
  { icon: Server, label: "Full-stack engineering" },
  { icon: Bot, label: "AI automation" },
  { icon: Database, label: "Database systems" },
  { icon: Mail, label: "Inbox command" },
  { icon: Headphones, label: "Client support" },
  { icon: Share2, label: "Social operations" },
  { icon: Palette, label: "Graphic design" },
  { icon: Video, label: "Video editing" },
  { icon: FileText, label: "Content publishing" },
  { icon: Target, label: "Lead generation" },
  { icon: ShoppingCart, label: "E-commerce ops" },
  { icon: Megaphone, label: "Digital marketing" },
  { icon: Building2, label: "Real estate support" },
  { icon: Calculator, label: "Bookkeeping assist" },
  { icon: Wrench, label: "Technical support" },
  { icon: Laptop, label: "WordPress command" },
  { icon: PenTool, label: "Brand systems" },
  { icon: Camera, label: "Multimedia production" },
  { icon: Users, label: "Community management" },
  { icon: ClipboardList, label: "Project coordination" },
  { icon: UserCheck, label: "Executive support" },
];

const SkillPill = ({ icon: Icon, label }: Skill) => (
  <div className="flex shrink-0 items-center gap-3 border border-border/60 bg-card/60 px-5 py-3 transition-colors hover:border-primary/50 hover:bg-surface-hover">
    <Icon className="h-5 w-5 shrink-0 text-primary" />
    <span className="whitespace-nowrap text-sm font-black text-foreground">{label}</span>
  </div>
);

const SkillsMarquee = () => {
  const doubled = [...allSkills, ...allSkills];

  return (
    <section className="overflow-hidden border-y border-border/50 bg-background/90 py-5">
      <div className="mb-4 flex items-center gap-3 px-5 lg:px-8">
        <span className="h-px flex-1 bg-border/70" />
        <p className="font-mono text-xs font-bold text-muted-foreground">TACTICAL CAPABILITIES INDEX</p>
        <span className="h-px flex-1 bg-border/70" />
      </div>
      <div className="marquee-container">
        <div className="flex gap-3 animate-marquee-left" style={{ width: "max-content" }}>
          {doubled.map((skill, i) => (
            <SkillPill key={`${skill.label}-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
