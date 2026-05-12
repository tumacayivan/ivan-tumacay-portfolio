import { motion } from "framer-motion";
import { Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video, Bot, Megaphone, FileCheck, Stamp } from "lucide-react";

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
    <section className="relative py-20 sm:py-28 overflow-hidden bg-paper-beige border-t-2 border-double border-ink">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[17.2vw] leading-none rotate-[-3deg] opacity-60">
          VERIFIED
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <div className="paper-card-cream p-6 sm:p-10 md:p-14 relative paper-grain">
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-ink" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-ink" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-ink" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-ink" />

          <div className="paperclip top-[-12px] left-10 z-10" />

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
            <div className="flex items-center gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 06 // VERIFIED INTELLIGENCE REPORT
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              WHY IVAN TUMACAY
            </p>
            <h2 className="font-blackops text-6xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight mb-6">
              BEYOND <span className="text-ink">EXPECTATIONS</span>
            </h2>

            <div className="border-y-2 border-double border-ink py-4 my-6 max-w-4xl">
              <p className="font-typewriter text-lg sm:text-xl md:text-2xl text-ink leading-relaxed">
                <span className="font-blackops text-ink text-sm tracking-widest">ASSESSMENT //</span>{" "}
                Ivan Tumacay combines <span className="font-bold text-ink underline">technical engineering expertise</span> with comprehensive{" "}
                <span className="font-bold text-ink underline">virtual assistant &amp; digital operations services</span> — from{" "}
                <span className="font-bold text-ink underline">enterprise software development</span> to{" "}
                <span className="font-bold text-ink underline">social media management</span>,{" "}
                <span className="font-bold text-ink underline">graphics design</span>, and{" "}
                <span className="font-bold text-ink underline">digital marketing</span> — allowing businesses to scale with a single, versatile professional.
              </p>
            </div>

            <div className="font-blackops text-sm sm:text-base tracking-[0.25em] text-ink mb-3">
              AUTHENTICATED OPERATOR COMPETENCIES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {reasons.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 bg-paper border-2 border-ink relative"
                >
                  <span className="absolute -top-2 -left-2 w-4 h-4 bg-paper border border-ink flex items-center justify-center font-courier text-[10px] text-ink-brown">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="w-5 h-5 text-ink shrink-0" />
                  <span className="font-typewriter text-base text-ink font-bold">{label}</span>
                  <span className="ml-auto font-blackops text-[11px] tracking-widest text-ink">OK</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t-2 border-double border-ink pt-4">
              <div className="font-courier text-[13px] tracking-widest text-ink-brown">
                <div className="text-ink-brown">AUTHORIZED BY</div>
                <div className="text-ink font-bold mt-1">REVIEW BOARD / IT</div>
              </div>
              <div className="font-courier text-[13px] tracking-widest text-ink-brown">
                <div>DATE OF ISSUE</div>
                <div className="text-ink font-bold mt-1">{new Date().toISOString().slice(0, 10)}</div>
              </div>
              <div className="font-courier text-[13px] tracking-widest text-ink-brown flex items-end justify-end gap-2">
                <Stamp className="w-4 h-4 text-ink" />
                <span>SEAL APPLIED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
