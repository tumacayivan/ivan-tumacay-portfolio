import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Fingerprint, Cake, Ruler, Globe } from "lucide-react";

const identifiers = [
  { icon: Flag,        label: "NATIONALITY",          value: "FILIPINO",            note: "Republic of the Philippines" },
  { icon: Cake,        label: "DATE OF BIRTH",        value: "1998 · 01 · 28",      note: "Born January 28, 1998" },
  { icon: MapPin,      label: "PLACE OF BIRTH",       value: "MANILA",              note: "National Capital Region, PH" },
  { icon: Radar,       label: "LAST KNOWN LOCATION",  value: "CAVITE, PHILIPPINES", note: "Signal last triangulated" },
  { icon: Ruler,       label: "HEIGHT",               value: "5' 11\" / 180.34 CM", note: "Recorded at intake" },
  { icon: Compass,     label: "TIME ZONE",            value: "UTC +08:00",          note: "Asia / Manila" },
  { icon: Languages,   label: "LANGUAGES",            value: "FIL · ENG",           note: "Bilingual operator" },
  { icon: Globe,       label: "OPERATING REGION",     value: "SE ASIA / GLOBAL",    note: "Remote-capable" },
];

const SubjectProfileSection = () => {
  return (
    <section id="subject-profile" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-y-2 border-double border-ink paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="watermark text-[17.2vw] leading-none rotate-[-3deg] whitespace-nowrap">
          SUBJECT PROFILE
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
            <div className="flex items-center gap-3 mb-3">
              <Fingerprint className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 01 // SUBJECT PROFILE
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                IDENTIFYING INFORMATION
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Personal Identifiers · Operator Origin
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
              SUBJECT <span className="text-ink">DOSSIER</span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">LOCATION INTEL</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              Filipino national, born <span className="font-bold underline">28 January 1998</span> in <span className="font-bold underline">Manila</span>. Currently operating from <span className="font-bold underline">Cavite, Philippines</span>. Standing <span className="font-bold underline">5'11" (180.34 cm)</span>.
            </p>
          </div>
        </motion.div>

        {/* Identifying info grid - 12 fields */}
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
                className="paper-card-cream p-5 paper-grain relative transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                style={{ transform: `rotate(${rot * 0.3}deg)` }}
              >
                <div className="tape tape-yellow w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />

                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">
                    ID-{String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-blackops text-[12px] tracking-widest text-ink">VERIFIED</span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-courier text-[13px] tracking-widest text-ink-brown uppercase">
                      {label}
                    </div>
                    <div className="font-blackops text-xl sm:text-2xl text-ink uppercase tracking-tight leading-tight break-words">
                      {value}
                    </div>
                  </div>
                </div>

                <p className="font-typewriter text-sm text-ink/85 border-t border-dashed-ink pt-2">
                  <span className="font-blackops text-[12px] tracking-widest text-ink">NOTE //</span>{" "}
                  {note}
                </p>

                <div className="mt-3 flex items-center justify-between font-courier text-[11px] tracking-widest text-ink-brown">
                  <span>◉ INTEL VERIFIED</span>
                  <span className="text-ink">OK</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coordinates + Surveillance strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="paper-card-cream p-4 sm:p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-blue !text-[12px] !p-1">COORDINATES</div>
            <div className="font-courier text-base text-ink leading-relaxed">
              <div className="flex items-center justify-between border-b border-dashed-ink pb-1">
                <span className="text-ink-brown">LAT</span>
                <span className="font-bold">14.2829° N</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-ink-brown">LONG</span>
                <span className="font-bold">120.8687° E</span>
              </div>
              <div className="flex items-center justify-between border-t border-dashed-ink mt-1 pt-1">
                <span className="text-ink-brown">REGION</span>
                <span className="font-bold uppercase">Cavite, Philippines</span>
              </div>
            </div>
          </div>

          <div className="paper-card-cream p-4 sm:p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">SURVEILLANCE</div>
            <div className="font-courier text-base text-ink leading-relaxed">
              <div className="flex items-center justify-between border-b border-dashed-ink pb-1">
                <span className="text-ink-brown">LAST CONTACT</span>
                <span className="font-bold uppercase">Within 24h</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-ink-brown">CHANNEL</span>
                <span className="font-bold uppercase">Email / GitHub</span>
              </div>
              <div className="flex items-center justify-between border-t border-dashed-ink mt-1 pt-1">
                <span className="text-ink-brown">STATUS</span>
                <span className="font-bold uppercase flex items-center gap-2">
                  <span className="status-pulse" /> AT LARGE · ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ SUBJECT PROFILE SEALED</span>
          <span>FILED BY: BUREAU OF DIGITAL OPERATIONS</span>
          <span>END OF SECTION 01</span>
        </div>
      </div>
    </section>
  );
};

export default SubjectProfileSection;
