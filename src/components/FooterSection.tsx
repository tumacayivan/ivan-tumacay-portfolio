import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Github, Radio, Lock, FileText } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1N3YPZIZz6KYbY59ud0P5x2tHqC1TKQbW/view?usp=sharing";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Philippines" },
  { icon: Mail, label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];

const FooterSection = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper))] border-t border-[hsl(var(--accent-red)/0.3)]">
      <div className="absolute inset-0 tactical-grid opacity-[0.55] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(43 72% 32% / 0.28) 0%, transparent 60%)" }} />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[24vw] leading-none rotate-[-6deg]">
          CLOSE THE DEAL
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* Top classified bar */}
        <div className="bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red))] text-[hsl(var(--accent-red))] font-blackops text-[12px] sm:text-sm tracking-[0.3em] py-2.5 px-3 sm:px-4 flex items-center justify-between mb-0 shadow-[0_0_22px_hsl(var(--accent-red)/0.2)]">
          <span className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" /> DIRECT LINE // SERIOUS INQUIRIES ONLY
          </span>
          <span className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 animate-pulse-classified" /> LINE OPEN
          </span>
        </div>

        <div className="paper-card-cream p-6 sm:p-10 md:p-14 border-t-0 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="section-eyebrow justify-center mb-4 mx-auto" style={{ display: "inline-flex" }}>
              THE CLOSE · LET'S MAKE MONEY
            </p>
            <h2 className="display-title text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.86] mb-5">
              LET'S <span className="accent">CONNECT</span>
            </h2>

            <p className="font-typewriter text-lg sm:text-xl max-w-2xl mx-auto text-[hsl(var(--ink-charcoal))] leading-relaxed mb-8">
              <span className="font-blackops text-[hsl(var(--accent-red))] text-sm tracking-[0.3em]">THE ASK //</span>{" "}
              Need a{" "}
              <span className="font-bold underline decoration-[hsl(var(--accent-red))] underline-offset-4">software engineer</span>,{" "}
              <span className="font-bold underline decoration-[hsl(var(--accent-red))] underline-offset-4">virtual assistant</span>, or{" "}
              <span className="font-bold underline decoration-[hsl(var(--accent-red))] underline-offset-4">digital operations specialist</span>?
              Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:tumacayivan@gmail.com"
                className="dossier-cta inline-flex group text-base sm:text-lg !py-4 !px-7"
              >
                <span className="status-pulse" />
                <span>PICK UP THE PHONE</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-[hsl(var(--accent-red))] bg-[hsl(45_36%_97%)] font-blackops text-base sm:text-lg uppercase tracking-[0.18em] text-[hsl(var(--ink-charcoal))] !py-4 !px-7 hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(40_45%_10%)] transition-colors"
              >
                <FileText className="w-5 h-5 text-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)]" />
                <span>VIEW RÉSUMÉ</span>
              </a>
            </div>
            <div className="mt-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.32em] uppercase">
              · DIRECT LINE · REPLY IMMEDIATE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto"
          >
            {personalInfo.map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={label}
                className="bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red)/0.45)] p-4 flex items-center gap-3 relative hover:border-[hsl(var(--accent-red))] transition-colors group"
              >
                <span className="absolute -top-2 left-3 bg-[hsl(45_36%_97%)] px-2 font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                  CH-{String(i + 1).padStart(2, "0")}
                </span>
                <div className="p-2 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(40_30%_16%)] text-[hsl(var(--accent-red))] shrink-0 group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-blackops text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-typewriter text-base text-[hsl(var(--accent-bone))] hover:text-[hsl(var(--accent-red))] transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-typewriter text-base text-[hsl(var(--accent-bone))]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Terminal */}
          <div className="max-w-4xl mx-auto border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(40_30%_16%)] p-4 font-courier text-[14px] sm:text-sm leading-relaxed relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                 style={{
                   backgroundImage:
                     "repeating-linear-gradient(0deg, hsl(var(--accent-red)) 0 1px, transparent 1px 3px)",
                 }} />
            <div className="flex items-center justify-between border-b border-dashed-ink pb-1.5 mb-2 relative">
              <span className="font-blackops text-[hsl(var(--accent-red))] tracking-[0.3em] flex items-center gap-2">
                <span className="status-pulse" /> LIVE DESK
              </span>
              <span className="text-[hsl(45_20%_72%)]">DESK_ID 0xIVT-001</span>
            </div>
            <div className="text-[hsl(45_30%_88%)] relative">
              <div><span className="text-[hsl(var(--accent-red))]">$</span> opening-the-line.exe ............. <span className="text-[hsl(var(--accent-red-bright))]">[ OK ]</span></div>
              <div><span className="text-[hsl(var(--accent-red))]">$</span> warming-up-the-pitch ............ <span className="text-[hsl(var(--accent-red-bright))]">[ OK ]</span></div>
              <div><span className="text-[hsl(var(--accent-red))]">$</span> qualifying-the-lead ............. <span className="text-[hsl(var(--accent-red-bright))]">[ QUALIFIED ]</span></div>
              <div><span className="text-[hsl(var(--accent-red))]">$</span> awaiting-your-call
                <span className="inline-block w-2 h-3.5 bg-[hsl(var(--accent-red))] ml-1 animate-pulse-classified align-middle" />
              </div>
            </div>
          </div>

          <div className="mt-10 pt-4 border-t border-[hsl(var(--accent-red)/0.3)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-courier text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} IVAN TUMACAY · ALL RIGHTS RESERVED
            </p>
            <p className="font-blackops text-sm text-[hsl(var(--accent-red))] tracking-[0.22em] uppercase">
              Software Engineer &amp; Digital Operations Specialist
            </p>
          </div>
        </div>

        <div className="diag-stripes h-2 mt-0" />
        <div className="bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))] font-blackops text-[12px] sm:text-sm tracking-[0.32em] py-2 px-4 text-center border-t border-[hsl(var(--accent-red)/0.3)]">
          END OF PROSPECTUS · THE CLOSER OF THE PHILIPPINES
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
