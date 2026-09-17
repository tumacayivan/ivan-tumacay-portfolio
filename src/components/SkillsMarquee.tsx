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

const half = Math.ceil(allSkills.length / 2);
const rows = [allSkills.slice(0, half), allSkills.slice(half)];

/**
 * Two counter-rotating LED boards, tilted like highway gantry signs seen
 * from a car in a slide. Hover or focus pauses them.
 */
const SkillsMarquee = () => (
  <section aria-label="Skills" className="relative py-16 sm:py-20 overflow-hidden">
    <div className="relative -rotate-2 scale-[1.04] marquee-container">
      {rows.map((row, r) => (
        <div
          key={r}
          className={`relative overflow-hidden border-y ${
            r === 0 ? "bg-drift text-on-drift border-drift" : "bg-panel text-ink border-line/10 -mt-px"
          }`}
        >
          <div
            className={`flex w-max ${r === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}
          >
            {[...row, ...row, ...row, ...row].map(({ icon: Icon, label }, i) => (
              <span
                key={`${label}-${i}`}
                aria-hidden={i >= row.length}
                className="flex items-center gap-4 px-6 sm:px-8 py-4 sm:py-5 shrink-0"
              >
                <Icon className={`w-5 h-5 ${r === 0 ? "" : "text-drift"}`} />
                <span className="font-display text-xl sm:text-3xl uppercase whitespace-nowrap">{label}</span>
                <span className={`ml-4 sm:ml-6 text-lg ${r === 0 ? "opacity-60" : "text-sign"}`} aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsMarquee;
