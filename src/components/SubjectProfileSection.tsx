import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Fingerprint, Cake, Ruler, Globe } from "lucide-react";

const identifiers = [
  { icon: Flag,        label: "NATIONALITY",          value: "FILIPINO",            note: "Republic of the Philippines" },
  { icon: Cake,        label: "DATE OF BIRTH",        value: "1998 · 01 · 28",      note: "Born January 28, 1998" },
  { icon: MapPin,      label: "PLACE OF BIRTH",       value: "MANILA",              note: "National Capital Region, PH" },
  { icon: Radar,       label: "BASE OF OPERATIONS",   value: "CAVITE, PHILIPPINES", note: "Where the deals get done" },
  { icon: Ruler,       label: "HEIGHT",               value: "5' 11\" / 180.34 CM", note: "On the record" },
  { icon: Compass,     label: "TIME ZONE",            value: "UTC +08:00",          note: "Asia / Manila" },
  { icon: Languages,   label: "LANGUAGES",            value: "FIL · ENG",           note: "Bilingual closer" },
  { icon: Globe,       label: "MARKETS COVERED",      value: "SE ASIA / GLOBAL",    note: "Remote-capable" },
];

const SubjectProfileSection = () => {
  return (
    <section id="subject-profile" className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.6] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[18vw] leading-none rotate-[-3deg] whitespace-nowrap">
          THE PROFILE
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-end"
        >
          <div>
            <div className="section-eyebrow mb-4">
              <Fingerprint className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 01 // THE MAN BEHIND THE NUMBERS
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-2 uppercase">
              Personal Prospectus · Origin Story
            </p>
            <h2 className="display-title text-6xl sm:text-8xl md:text-9xl uppercase">
              THE <span className="accent">PROFILE</span>
            </h2>
          </div>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">ON THE RECORD</div>
            <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
              Filipino national. Born{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">28 January 1998</span> in{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">Manila</span>. Now operating from{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">Cavite, Philippines</span>. Standing{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">5'11" (180.34 cm)</span>.
            </p>
          </div>
        </motion.div>

        {/* Identifying intel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {identifiers.map(({ icon: Icon, label, value, note }, i) => {
            const rot = (i % 5) - 2;
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="paper-card-cream p-5 paper-grain relative transition-all duration-300 hover:!rotate-0 hover:-translate-y-0.5 group"
                style={{ transform: `rotate(${rot * 0.3}deg)` }}
              >
                <div className="tape w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />

                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                    ID—{String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-blackops text-[12px] tracking-[0.28em] text-[hsl(var(--ink-charcoal))] flex items-center gap-1">
                    <span className="status-pulse" /> VERIFIED
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))] shrink-0 group-hover:border-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                      {label}
                    </div>
                    <div className="font-blackops text-xl sm:text-2xl text-[hsl(var(--accent-bone))] uppercase tracking-tight leading-tight break-words">
                      {value}
                    </div>
                  </div>
                </div>

                <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 border-t border-dashed-ink pt-2">
                  <span className="font-blackops text-[11px] tracking-[0.25em] text-[hsl(var(--accent-red))]">NOTE //</span>{" "}
                  {note}
                </p>

                <div className="mt-3 flex items-center justify-between font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">
                  <span>◉ ON THE RECORD</span>
                  <span className="text-[hsl(var(--accent-red))]">OK</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coordinates + Surveillance strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-blue !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">COORDINATES</div>
            <div className="font-courier text-base text-[hsl(var(--ink-charcoal))] leading-relaxed">
              <div className="flex items-center justify-between border-b border-dashed-ink pb-1">
                <span className="text-[hsl(var(--ink-brown))]">LAT</span>
                <span className="font-bold text-[hsl(var(--accent-bone))]">14.2829° N</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[hsl(var(--ink-brown))]">LONG</span>
                <span className="font-bold text-[hsl(var(--accent-bone))]">120.8687° E</span>
              </div>
              <div className="flex items-center justify-between border-t border-dashed-ink mt-1 pt-1">
                <span className="text-[hsl(var(--ink-brown))]">REGION</span>
                <span className="font-bold uppercase text-[hsl(var(--accent-red))]">Cavite, Philippines</span>
              </div>
            </div>
          </div>

          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">CONTACT</div>
            <div className="font-courier text-base text-[hsl(var(--ink-charcoal))] leading-relaxed">
              <div className="flex items-center justify-between border-b border-dashed-ink pb-1">
                <span className="text-[hsl(var(--ink-brown))]">RESPONSE TIME</span>
                <span className="font-bold uppercase text-[hsl(var(--accent-bone))]">Within 24h</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[hsl(var(--ink-brown))]">CHANNEL</span>
                <span className="font-bold uppercase text-[hsl(var(--accent-bone))]">Email / GitHub</span>
              </div>
              <div className="flex items-center justify-between border-t border-dashed-ink mt-1 pt-1">
                <span className="text-[hsl(var(--ink-brown))]">STATUS</span>
                <span className="font-bold uppercase flex items-center gap-2 text-[hsl(var(--accent-red))]">
                  <span className="status-pulse" /> OPEN FOR BUSINESS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> PROFILE ON FILE</span>
          <span>FILED BY: STRATTON OAKMONT</span>
          <span>END OF SECTION 01</span>
        </div>
      </div>
    </section>
  );
};

export default SubjectProfileSection