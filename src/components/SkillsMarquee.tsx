import {
  Mail, Headphones, Share2, Palette, Video, FileText, Target,
  ShoppingCart, Megaphone, Building2, Calculator, Wrench,
  PenTool, Camera, Users, Laptop, ClipboardList, UserCheck,
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

const SkillPill = ({ icon: Icon, label, idx }: Skill & { idx: number }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-paper border-2 border-ink shrink-0 relative">
    <span className="font-courier text-[11px] tracking-widest text-ink-brown border-r border-ink pr-2">
      {String(idx).padStart(3, "0")}
    </span>
    <Icon className="w-4 h-4 text-ink shrink-0" />
    <span className="font-blackops text-[14px] sm:text-sm text-ink whitespace-nowrap uppercase tracking-[0.12em]">
      {label}
    </span>
  </div>
);

const SkillsMarquee = () => {
  const doubled = [...allSkills, ...allSkills];

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden border-y-4 border-double border-ink bg-paper-beige paper-grain">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="status-pulse" />
          <span className="font-blackops text-sm sm:text-base tracking-[0.28em] text-ink uppercase">
            INTEL TICKER - OPERATIONAL CAPABILITIES STREAM
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 font-courier text-[13px] text-ink-brown tracking-widest">
          <span>FREQ 19.875 MHz</span>
          <span className="diag-stripes-red w-12 h-2 inline-block" />
        </div>
      </div>

      <div className="marquee-container">
        <div className="flex gap-3 animate-marquee-left" style={{ width: "max-content" }}>
          {doubled.map((skill, i) => (
            <SkillPill key={`${skill.label}-${i}`} {...skill} idx={(i % allSkills.length) + 1} />
          ))}
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mt-6 flex items-center justify-between font-courier text-[13px] text-ink-brown tracking-widest">
        <span>TRANSMISSION OPEN</span>
        <span>SIGNAL VERIFIED - NO BREAK</span>
      </div>
    </section>
  );
};

export default SkillsMarquee;
