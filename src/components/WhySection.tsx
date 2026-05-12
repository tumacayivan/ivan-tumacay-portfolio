import { motion } from "framer-motion";
import { Bot, CheckCircle2, Cloud, Code2, Headphones, Megaphone, Palette, Server, Share2, Shield, Video } from "lucide-react";

const reasons = [
  { icon: Code2, label: "Full-stack software development" },
  { icon: Server, label: "Enterprise system architecture" },
  { icon: Headphones, label: "Virtual assistant operations" },
  { icon: Share2, label: "Social media management" },
  { icon: Palette, label: "Graphics design and branding" },
  { icon: Video, label: "Video editing and multimedia" },
  { icon: Bot, label: "AI and automation engineering" },
  { icon: Cloud, label: "Cloud infrastructure and APIs" },
  { icon: Shield, label: "Security and scalability judgment" },
  { icon: Megaphone, label: "Digital marketing support" },
];

const WhySection = () => {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden border border-border/70 bg-card/70 p-6 sm:p-8 md:p-10">
          <div className="absolute inset-0 operation-grid opacity-20" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative z-10 grid gap-10 lg:grid-cols-[0.86fr_1.14fr]"
          >
            <div>
              <p className="case-label mb-4">Why Ivan Tumacay</p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                One operator for the <span className="text-gradient-red">whole plan.</span>
              </h2>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-muted-foreground">
                Ivan combines engineering depth with digital operations, support, creative production, and growth execution. That reduces handoff friction when a business needs both the system and the people-facing work around it.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="border border-border/70 bg-background/50 p-4">
                  <p className="text-3xl font-black text-primary">1</p>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">integrated operator</p>
                </div>
                <div className="border border-border/70 bg-background/50 p-4">
                  <p className="text-3xl font-black text-accent">4</p>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">execution fronts</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-center gap-3 border border-border/60 bg-background/50 p-4"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-black leading-snug text-foreground">{label}</span>
                  <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
