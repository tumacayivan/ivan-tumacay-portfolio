import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MapPin, RadioTower } from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Philippines" },
  { icon: Mail, label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];

const FooterSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/50 py-24 sm:py-28">
      <div className="absolute inset-0 film-lines opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-4xl"
        >
          <p className="case-label mb-4">Contact / Briefing</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Ready to map the next <span className="text-gradient-red">operation?</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            Bring the system, automation, creative, or support mission. I will help convert it into a clean execution path.
          </p>
          <a
            href="mailto:tumacayivan@gmail.com"
            className="mt-8 inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Send Mission Brief
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {personalInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="border border-border/70 bg-card/70 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-mono text-xs font-bold text-muted-foreground">{label}</p>
              </div>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="break-words text-base font-black text-foreground transition-colors hover:text-primary">
                  {value}
                </a>
              ) : (
                <p className="text-base font-black text-foreground">{value}</p>
              )}
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col gap-4 border-t border-border/50 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-muted-foreground">
            Copyright {new Date().getFullYear()} Ivan Tumacay. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs font-bold text-muted-foreground">
            <RadioTower className="h-4 w-4 text-primary" />
            Software Engineer and Digital Operations Specialist
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
