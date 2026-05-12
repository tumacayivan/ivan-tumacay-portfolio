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
        <div className="watermark text-[20vw] leading-none rotate-[-6deg]">
          SECURE LINE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="bg-ink text-paper font-blackops text-[10px] sm:text-xs tracking-[0.3em] py-2 px-3 sm:px-4 flex items-center justify-between mb-0">
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
            <p className="font-courier text-xs tracking-[0.4em] text-ink-brown uppercase mb-3">
              ANNEX 07 // SECURE TRANSMISSION CHANNEL
            </p>
            <h2 className="font-blackops text-5xl sm:text-6xl md:text-7xl text-ink leading-[0.9] tracking-tight mb-5">
              LET'S <span className="text-stamp-red">CONNECT</span>
            </h2>

            <p className="font-typewriter text-base sm:text-lg max-w-2xl mx-auto text-ink leading-relaxed mb-8">
              <span className="font-blackops text-stamp-red text-xs tracking-widest">DISPATCH //</span>{" "}
              Need a <span className="font-bold underline decoration-stamp-red/60">software engineer</span>, <span className="font-bold underline decoration-stamp-red/60">virtual assistant</span>, or <span className="font-bold underline decoration-stamp-red/60">digital operations specialist</span>? Let's talk.
            </p>

            <a
              href="mailto:tumacayivan@gmail.com"
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-stamp-red text-paper border-2 border-stamp-red font-blackops text-sm sm:text-base tracking-[0.2em] uppercase hover:bg-paper hover:text-stamp-red transition-colors relative"
            >
              <span className="status-pulse" />
              <span>INITIATE SECURE CONTACT</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-3 font-courier text-[10px] text-ink-brown tracking-widest">
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
                <span className="absolute -top-2 left-3 bg-paper px-2 font-courier text-[10px] tracking-widest text-ink-brown">
                  CH-{String(i + 1).padStart(2, "0")}
                </span>
                <div className="p-2 border-2 border-ink bg-paper-cream text-stamp-red shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-blackops text-[10px] tracking-widest text-ink-brown uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-typewriter text-sm text-ink hover:text-stamp-red transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-typewriter text-sm text-ink">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="max-w-4xl mx-auto border-2 border-ink bg-paper p-4 font-courier text-[11px] sm:text-xs text-ink leading-relaxed">
            <div className="flex items-center justify-between border-b border-dashed-ink pb-1 mb-2">
              <span className="font-blackops text-stamp-red tracking-widest">LIVE TERMINAL</span>
              <span className="text-ink-brown">SESSION_ID 0xIT-001</span>
            </div>
            <div><span className="text-stamp-red">$</span> establishing-handshake.exe ........ <span className="text-stamp-blue">[ OK ]</span></div>
            <div><span className="text-stamp-red">$</span> encrypting-channel ............... <span className="text-stamp-blue">[ OK ]</span></div>
            <div><span className="text-stamp-red">$</span> verifying-clearance .............. <span className="text-stamp-blue">[ GRANTED ]</span></div>
            <div><span className="text-stamp-red">$</span> awaiting-operator-input
              <span className="inline-block w-2 h-3 bg-ink ml-1 animate-pulse-classified align-middle" />
            </div>
          </div>

          <div className="mt-10 pt-4 border-t-2 border-double border-ink flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-courier text-xs text-ink-brown tracking-widest">
              © {new Date().getFullYear()} IVAN TUMACAY · ALL RECORDS RESERVED
            </p>
            <p className="font-blackops text-xs text-ink tracking-[0.2em] uppercase">
              SOFTWARE ENGINEER &amp; DIGITAL OPERATIONS SPECIALIST
            </p>
          </div>
        </div>

        <div className="diag-stripes h-2 mt-0" />
        <div className="bg-ink text-paper font-blackops text-[10px] sm:text-xs tracking-[0.3em] py-1 px-4 text-center">
          END OF DOSSIER · TOP SECRET // EYES ONLY
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
