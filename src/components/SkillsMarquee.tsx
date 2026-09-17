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
 * PAYLOAD — what is in the hold.
 *
 * Two counter-drifting manifest lines, set in the telemetry face, running
 * at walking pace. Hover or focus holds them still.
 */
const SkillsMarquee = () => (
  <section aria-label="Skills" className="relative py-10 sm:py-14 overflow-hidden">
    <div className="gutter mb-5 flex items-center gap-4">
      <span className="tele-label">Payload manifest</span>
      <span aria-hidden className="h-px flex-1 bg-rule/10" />
      <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{allSkills.length} items</span>
    </div>

    <div className="marquee-container border-y border-rule/10">
      {rows.map((row, r) => (
        <div
          key={r}
          className={`relative overflow-hidden ${r === 1 ? "border-t border-rule/10 bg-hull/40" : ""}`}
        >
          <div className={`flex w-max ${r === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}>
            {[...row, ...row, ...row, ...row].map(({ icon: Icon, label }, i) => (
              <span
                key={`${label}-${i}`}
                aria-hidden={i >= row.length}
                className="flex items-center gap-3.5 px-6 sm:px-9 py-4 shrink-0"
              >
                <Icon className={`w-4 h-4 shrink-0 ${r === 0 ? "text-gold" : "text-signal"}`} aria-hidden />
                <span
                  className={`font-tele text-sm sm:text-base tracking-[0.16em] uppercase whitespace-nowrap ${
                    r === 0 ? "text-ice" : "text-ice-dim"
                  }`}
                >
                  {label}
                </span>
                <span aria-hidden className="ml-3 sm:ml-5 text-xs text-rule/30">
                  +
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
