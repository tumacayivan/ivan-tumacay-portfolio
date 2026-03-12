import { motion } from "framer-motion";
import { Code2, Server, Headphones, Share2, Shield, Cloud, Palette, Video, Bot, Megaphone } from "lucide-react";

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
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="glass-card rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">
              WHY IVAN TUMACAY
            </p>
            <h2 className="text-5xl sm:text-6xl font-heading font-black tracking-tighter mb-6">
              BEYOND <span className="text-gradient-gold">EXPECTATIONS</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl text-xl sm:text-2xl font-semibold mb-12 leading-relaxed">
              Ivan Tumacay combines <span className="text-foreground font-bold">technical engineering expertise</span> with comprehensive{" "}
              <span className="text-foreground font-bold">virtual assistant & digital operations services</span> — from{" "}
              <span className="text-foreground font-bold">enterprise software development</span> to{" "}
              <span className="text-foreground font-bold">social media management</span>,{" "}
              <span className="text-foreground font-bold">graphics design</span>, and{" "}
              <span className="text-foreground font-bold">digital marketing</span> — allowing businesses to scale with a single, versatile professional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-5 rounded-xl bg-background/50 border border-border/40"
                >
                  <Icon className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-base font-bold text-foreground">{label}</span>
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
