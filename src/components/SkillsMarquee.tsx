import { 
  Mail, Headphones, Share2, Palette, Video, FileText, Target,
  ShoppingCart, Megaphone, Building2, Calculator, Wrench,
  PenTool, Camera, Users, Laptop, ClipboardList, UserCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  label: string;
}

const allSkills: Skill[] = [
  { icon: Mail, label: "Email Management" },
  { icon: Headphones, label: "Customer Support" },
  { icon: Share2, label: "Social Media" },
  { icon: Palette, label: "Graphics Design" },
  { icon: Video, label: "Video Editing" },
  { icon: FileText, label: "Content Management" },
  { icon: Target, label: "Lead Generation" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Building2, label: "Real Estate VA" },
  { icon: Calculator, label: "Bookkeeping" },
  { icon: Wrench, label: "Technical Support" },
  { icon: Laptop, label: "WordPress Management" },
  { icon: PenTool, label: "Brand Design" },
  { icon: Camera, label: "Multimedia Production" },
  { icon: Users, label: "Community Management" },
  { icon: ClipboardList, label: "Project Management" },
  { icon: UserCheck, label: "Executive Assistant" },
];

const SkillPill = ({ icon: Icon, label }: Skill) => (
  <div className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm shrink-0 hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
    <Icon className="w-5 h-5 text-primary shrink-0" />
    <span className="text-base font-bold text-foreground whitespace-nowrap uppercase tracking-wide">{label}</span>
  </div>
);

const SkillsMarquee = () => {
  const doubled = [...allSkills, ...allSkills];

  return (
    <section className="py-12 sm:py-16 overflow-hidden border-y border-border/30">
      <div className="marquee-container">
        <div className="flex gap-4 animate-marquee-left" style={{ width: "max-content" }}>
          {doubled.map((skill, i) => (
            <SkillPill key={`${skill.label}-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
