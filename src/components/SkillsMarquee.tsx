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
 * Two lengths of teletype tape running in opposite directions — the
 * capability index, printing itself out. Hover or focus stops the feed.
 */
const SkillsMarquee = () => (
  <section aria-label="Capability index" className="relative py-10 sm:py-14 overflow-hidden">
    <div className="relative ticker-track">
      {rows.map((row, r) => (
        <div
          key={r}
          className={`relative overflow-hidden border-y ${
            r === 0 ? "bg-ember text-on-ember border-ember" : "bg-panel text-ink border-line/15 -mt-px"
          }`}
        >
          {/* Sprocket holes down the edge of the tape */}
          <div aria-hidden className={`absolute inset-x-0 top-0 h-1 perforated ${r === 0 ? "opacity-40" : "opacity-70"}`} />
          <div className={`flex w-max ${r === 0 ? "ticker-left" : "ticker-right"}`}>
            {[...row, ...row, ...row, ...row].map(({ icon: Icon, label }, i) => (
              <span
                key={`${label}-${i}`}
                aria-hidden={i >= row.length}
                className="flex items-center gap-3 px-5 sm:px-7 py-3.5 sm:py-4 shrink-0"
              >
                <Icon className={`w-4 h-4 ${r === 0 ? "" : "text-ember"}`} />
                <span className="font-doc text-sm sm:text-lg font-medium uppercase tracking-[0.1em] whitespace-nowrap">
                  {label}
                </span>
                <span className={`ml-3 sm:ml-5 text-xs ${r === 0 ? "opacity-60" : "text-ember"}`} aria-hidden>
                  ///
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
