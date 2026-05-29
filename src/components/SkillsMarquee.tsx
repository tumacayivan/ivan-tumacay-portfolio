import {
  Mail, Headphones, Share2, Palette, Video, FileText, Target,
  ShoppingCart, Megaphone, Building2, Calculator, Wrench,
  PenTool, Camera, Users, Laptop, ClipboardList, UserCheck, Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  icon: LucideIcon;
  label: string;
}

const allSkills: Skill[] = [
  { icon: Mail, label: "Communications" },
  { icon: Headphones, label: "Client Relations" },
  { icon: Share2, label: "Social Media" },
  { icon: Palette, label: "Creative Design" },
  { icon: Video, label: "Media Production" },
  { icon: FileText, label: "Content Strategy" },
  { icon: Target, label: "Business Development" },
  { icon: ShoppingCart, label: "Digital Commerce" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Building2, label: "Industry Solutions" },
  { icon: Calculator, label: "Financial Operations" },
  { icon: Wrench, label: "Technical Operations" },
  { icon: Laptop, label: "Platform Management" },
  { icon: PenTool, label: "Brand Strategy" },
  { icon: Camera, label: "Visual Production" },
  { icon: Users, label: "Team Coordination" },
  { icon: ClipboardList, label: "Project Management" },
  { icon: UserCheck, label: "Executive Support" },
];

const SkillPill = ({ icon: Icon, label, idx }: Skill & { idx: number }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(0_0%_6%)] border border-[hsl(var(--accent-red)/0.45)] shrink-0 relative hover:border-[hsl(var(--accent-red))] hover:bg-[hsl(0_0%_8%)] transition-colors group">
    <span className="font-courier text-[10px] tracking-[0.25em] text-[hsl(var(--accent-red))] border-r border-[hsl(var(--accent-red)/0.4)] pr-2">
      {String(idx).padStart(3, "0")}
    </span>
    <Icon className="w-4 h-4 text-[hsl(var(--accent-red))] shrink-0 group-hover:text-[hsl(var(--accent-red-bright))] transition-colors" />
    <span className="font-blackops text-[14px] sm:text-[15px] text-[hsl(var(--ink-charcoal))] whitespace-nowrap uppercase tracking-[0.16em]">
      {label}
    </span>
  </div>
);

const SkillsMarquee = () => {
  const doubled = [...allSkills, ...allSkills];

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden border-y border-[hsl(var(--accent-red)/0.3)] bg-[hsl(0_0%_5%)] paper-grain">
      {/* Subtle scan grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent-red)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent-red)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between mb-6 relative">
        <div className="flex items-center gap-3">
          <span className="status-pulse" />
          <span className="font-blackops text-base sm:text-lg tracking-[0.28em] text-[hsl(var(--ink-charcoal))] uppercase">
            INTEL TICKER · OPERATIONAL CAPABILITIES STREAM
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.28em]">
          <Radio className="w-3.5 h-3.5 animate-pulse-classified" />
          <span>FREQ 19.875 MHz</span>
          <span className="diag-stripes-red w-12 h-2 inline-block" />
          <span>LIVE</span>
        </div>
      </div>

      <div className="marquee-container relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[hsl(0_0%_5%)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[hsl(0_0%_5%)] to-transparent" />

        <div className="flex gap-3 animate-marquee-left" style={{ width: "max-content" }}>
          {doubled.map((skill, i) => (
            <SkillPill key={`${skill.label}-${i}`} {...skill} idx={(i % allSkills.length) + 1} />
          ))}
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mt-6 flex items-center justify-between font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.32em] uppercase relative">
        <span>◉ TRANSMISSION OPEN</span>
        <span className="text-[hsl(var(--accent-red))]">SIGNAL VERIFIED · NO BREAK</span>
      </div>
    </section>
  );
};

export default SkillsMarquee;
