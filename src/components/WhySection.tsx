import { motion } from "framer-motion";
import {
  Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video,
  Bot, Megaphone, FileCheck, Stamp,
} from "lucide-react";

const reasons = [
  { icon: Code2, label: "Full-stack software development" },
  { icon: Server, label: "Enterprise system architecture" },
  { icon: Headphones, label: "Virtual assistant services" },
  { icon: Share2, label: "Social media management" },
  { icon: Palette, label: "Graphics design & branding" },
  { icon: Video, label: "Video editing & multimedia" },
  { icon: Bot, label: "AI & automation engineering" },
  { icon: Cloud, label: "Cloud infrastructure & DevOps" },
  { icon: Shield, label: "Security & scalability expertise" },
  { icon: Megaphone, label: "Digital marketing support" },
];

const WhySection = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper))] border-t border-[hsl(var(--accent-red)/0.25)]">
      <div className="absolute inset-0 tactical-grid opacity-[0.45] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(358 60% 30% / 0.18) 0%, transparent 60%)" }} />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[18vw] leading-none rotate-[-3deg]">
          VERIFIED
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <div className="paper-card-cream p-6 sm:p-10 md:p-14 relative paper-grain overflow-hidden">
          {/* Reinforced corner brackets */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

          {/* Steel paperclip */}
          <div className="paperclip top-[-12px] left-10 z-10" />

          {/* Headline stamp */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 stamp text-4xl sm:text-6xl !p-3 sm:!p-4 z-10">
            VERIFIED
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="section-eyebrow mb-3">
              <FileCheck className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 06 // VERIFIED INTELLIGENCE REPORT
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-2 uppercase">
              Why Ivan Tumacay · The Final Assessment
            </p>
            <h2 className="display-title text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.86] mb-6">
              BEYOND <span className="accent">EXPECTATIONS</span>
            </h2>

            <div className="border-y border-[hsl(var(--accent-red)/0.5)] py-5 my-6 max-w-4xl relative bg-[hsl(0_0%_5%/0.4)] backdrop-blur-sm px-5">
              <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--accent-red))]" />
              <p className="font-typewriter text-lg sm:text-xl md:text-2xl text-[hsl(var(--ink-charcoal))] leading-relaxed">
                <span className="font-blackops text-[hsl(var(--accent-red))] text-sm tracking-[0.3em]">ASSESSMENT //</span>{" "}
                Ivan Tumacay combines{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">technical engineering expertise</span> with comprehensive{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">virtual assistant &amp; digital operations services</span> — from{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">enterprise software development</span> to{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">social media management</span>,{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">graphics design</span>, and{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">digital marketing</span> — allowing businesses to scale with a single, versatile professional.
              </p>
            </div>

            <div className="font-blackops text-sm sm:text-base tracking-[0.3em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              ▣ Authenticated Operator Competencies
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {reasons.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 bg-[hsl(0_0%_5%)] border border-[hsl(var(--accent-red)/0.45)] relative hover:border-[hsl(var(--accent-red))] hover:bg-[hsl(0_0%_7%)] transition-colors group"
                >
                  <span className="absolute -top-2 -left-2 w-4 h-4 bg-[hsl(0_0%_5%)] border border-[hsl(var(--accent-red))] flex items-center justify-center font-courier text-[10px] text-[hsl(var(--accent-red))]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-5 h-5 text-[hsl(var(--accent-red))] shrink-0 group-hover:text-[hsl(var(--accent-red-bright))]" />
                  <span className="font-typewriter text-[15px] text-[hsl(var(--accent-bone))] font-bold">{label}</span>
                  <span className="ml-auto font-blackops text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">OK</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[hsl(var(--accent-red)/0.4)] pt-4">
              <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                <div className="text-[hsl(var(--ink-brown))]">AUTHORIZED BY</div>
                <div className="text-[hsl(var(--accent-red))] font-bold mt-1">REVIEW BOARD / IT</div>
              </div>
              <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                <div>DATE OF ISSUE</div>
                <div className="text-[hsl(var(--accent-bone))] font-bold mt-1">{new Date().toISOString().slice(0, 10)}</div>
              </div>
              <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] flex items-end justify-end gap-2 uppercase">
                <Stamp className="w-4 h-4 text-[hsl(var(--accent-red))]" />
                <span className="text-[hsl(var(--accent-red))]">SEAL APPLIED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
