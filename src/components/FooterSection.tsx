import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Globe, Github, Radio, Lock } from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Philippines" },
  { icon: Mail, label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
];

const FooterSection = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-t-2 border-double border-ink">
      <div className="absolute inset-0 tactical-grid opacity-[0.18] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[23.0vw] leading-none rotate-[-6deg]">
          SECURE LINE
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <div className="bg-ink text-paper font-blackops text-[13px] sm:text-sm tracking-[0.3em] py-2 px-3 sm:px-4 flex items-center justify-between mb-0">
          <span className="flex items-center gap-2">
            <Lock className="w-3 h-3" /> ENCRYPTED CHANNEL // AUTHORIZED PERSONNEL ONLY
          </span>
          <span className="flex items-center gap-2">
            <Radio className="w-3 h-3 animate-pulse-classified" /> SIGNAL ACQUIRED
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
            <p className="font-courier text-sm tracking-[0.4em] text-ink-brown uppercase mb-3">
              ANNEX 07 // SECURE TRANSMISSION CHANNEL
            </p>
            <h2 className="font-blackops text-6xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight mb-5">
              LET'S <span className="text-ink">CONNECT</span>
            </h2>

            <p className="font-typewriter text-lg sm:text-xl max-w-2xl mx-auto text-ink leading-relaxed mb-8">
              <span className="font-blackops text-ink text-sm tracking-widest">DISPATCH //</span>{" "}
              Need a <span className="font-bold underline">software engineer</span>, <span className="font-bold underline">virtual assistant</span>, or <span className="font-bold underline">digital operations specialist</span>? Let's talk.
            </p>

            <a
              href="mailto:tumacayivan@gmail.com"
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-ink text-paper border-2 border-ink font-blackops text-base sm:text-lg tracking-[0.2em] uppercase hover:bg-paper hover:text-ink transition-colors relative"
            >
              <span className="status-pulse" />
              <span>INITIATE SECURE CONTACT</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-3 font-courier text-[13px] text-ink-brown tracking-widest">
              · TRANSMISSION ENCRYPTED · ETA: IMMEDIATE
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
                className="bg-paper border-2 border-ink p-4 flex items-center gap-3 relative"
              >
                <span className="absolute -top-2 left-3 bg-paper px-2 font-courier text-[13px] tracking-widest text-ink-brown">
                  CH-{String(i + 1).padStart(2, "0")}
                </span>
                <div className="p-2 border-2 border-ink bg-paper-cream text-ink shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-blackops text-[13px] tracking-widest text-ink-brown uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-typewriter text-base text-ink hover:text-ink transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-typewriter text-base text-ink">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="max-w-4xl mx-auto border-2 border-ink bg-paper p-4 font-courier text-[14px] sm:text-sm text-ink leading-relaxed">
            <div className="flex items-center justify-between border-b border-dashed-ink pb-1 mb-2">
              <span className="font-blackops text-ink tracking-widest">LIVE TERMINAL</span>
              <span className="text-ink-brown">SESSION_ID 0xIT-001</span>
            </div>
            <div><span className="text-ink">$</span> establishing-handshake.exe ........ <span className="text-ink">[ OK ]</span></div>
            <div><span className="text-ink">$</span> encrypting-channel ............... <span className="text-ink">[ OK ]</span></div>
            <div><span className="text-ink">$</span> verifying-clearance .............. <span className="text-ink">[ GRANTED ]</span></div>
            <div><span className="text-ink">$</span> awaiting-operator-input
              <span className="inline-block w-2 h-3 bg-ink ml-1 animate-pulse-classified align-middle" />
            </div>
          </div>

          <div className="mt-10 pt-4 border-t-2 border-double border-ink flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-courier text-sm text-ink-brown tracking-widest">
              © {new Date().getFullYear()} IVAN TUMACAY · ALL RECORDS RESERVED
            </p>
            <p className="font-blackops text-sm text-ink tracking-[0.2em] uppercase">
              SOFTWARE ENGINEER &amp; DIGITAL OPERATIONS SPECIALIST
            </p>
          </div>
        </div>

        <div className="diag-stripes h-2 mt-0" />
        <div className="bg-ink text-paper font-blackops text-[13px] sm:text-sm tracking-[0.3em] py-1 px-4 text-center">
          END OF DOSSIER · TOP SECRET // EYES ONLY
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
