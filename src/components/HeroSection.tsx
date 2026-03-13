import { motion } from "framer-motion";
import { ArrowDown, Code2, Headphones, Globe, Palette, Bot, Megaphone } from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch h-full min-h-screen">
          {/* Left - Info */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-gold" />
                <span className="text-base font-semibold text-muted-foreground uppercase tracking-wider">Available for new projects</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-heading font-black tracking-tighter leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              IVAN{" "}
              <span className="text-gradient-gold">TUMACAY</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-foreground max-w-xl mb-5 font-bold tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Software Engineer &{" "}
              <span className="text-gradient-gold">Digital Operations Specialist</span>
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Combining <span className="text-foreground font-bold">full-stack development</span>, <span className="text-foreground font-bold">enterprise systems</span>, <span className="text-foreground font-bold">AI & automation</span>, and comprehensive <span className="text-foreground font-bold">digital operations services</span> with nearly 10 years of experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Code2, label: "Full Stack Dev" },
                { icon: Headphones, label: "Virtual Assistant" },
                { icon: Bot, label: "AI & Automation" },
                { icon: Palette, label: "Graphics & Video" },
                { icon: Megaphone, label: "Digital Marketing" },
                { icon: Globe, label: "Cloud & APIs" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full glass-card text-base font-bold text-foreground uppercase tracking-wide"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#experience"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-base">View Experience</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.a>
          </div>

          {/* Right - Image */}
          <motion.div
            className="order-1 lg:order-2 h-full w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative w-full h-full min-h-[400px] lg:min-h-screen flex items-center justify-center lg:justify-end">
              <div className="absolute inset-0 lg:inset-4 rounded-3xl bg-primary/10 blur-[60px] animate-float" />
              <img
                src={johnDoeAvatar}
                alt="Ivan Tumacay - Software Engineer & Digital Operations Specialist"
                className="relative w-full h-full min-h-[400px] lg:min-h-screen object-cover lg:object-cover lg:object-center rounded-2xl border-2 border-border/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
