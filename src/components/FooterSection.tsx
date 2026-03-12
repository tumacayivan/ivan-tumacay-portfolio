import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Globe, Github } from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Philippines" },
  { icon: Mail, label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];

const FooterSection = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
            LET'S <span className="text-gradient-gold">CONNECT</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-xl sm:text-2xl font-semibold">
            Need a <span className="text-foreground font-bold">software engineer</span>, <span className="text-foreground font-bold">virtual assistant</span>, or <span className="text-foreground font-bold">digital operations specialist</span>? Let's talk.
          </p>
          <a
            href="mailto:tumacayivan@gmail.com"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-primary text-primary-foreground font-heading font-black text-lg uppercase tracking-wider hover:opacity-90 transition-opacity glow-gold"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {personalInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-card rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-foreground hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-bold text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-muted-foreground">
            © {new Date().getFullYear()} Ivan Tumacay. All rights reserved.
          </p>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
            Software Engineer & Digital Operations Specialist
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
