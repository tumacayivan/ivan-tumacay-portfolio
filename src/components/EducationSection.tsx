import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    school: "Lyceum of the Philippines University – Cavite",
    degree: "Bachelor of Science in Information Technology",
    period: "2016 – 2020",
  },
  {
    school: "AMA Computer College – Cavite Campus",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2015 – 2016",
  },
  {
    school: "De La Salle University – Dasmariñas",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2014 – 2015",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden paper-grain bg-[hsl(var(--paper-beige))]">
      <div className="absolute inset-0 tactical-grid opacity-[0.35] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="watermark watermark-dark text-[19vw] leading-none rotate-[6deg]">
          PEDIGREE
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-eyebrow mb-3">
            <BookOpen className="w-4 h-4 text-[hsl(var(--accent-red))]" />
            SECTION 02 // THE CREDENTIALS
          </div>
          <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-2 uppercase">
            Academic Records · Where the Closer was trained
          </p>
          <h2 className="display-title text-6xl sm:text-8xl md:text-9xl uppercase">
            <span className="accent">EDUCATION</span>
          </h2>
          <p className="mt-4 font-typewriter text-xl text-[hsl(var(--ink-charcoal))] max-w-2xl">
            <span className="font-blackops text-[hsl(var(--accent-red))] text-sm tracking-[0.3em]">VERIFIED ACADEMIC HISTORY //</span>{" "}
            Documented training, formal instruction, and academic credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => {
            const rot = i === 0 ? -1.5 : i === 1 ? 1.2 : -0.8;
            return (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="paper-card-cream p-6 relative paper-grain h-full flex flex-col transition-all duration-300 hover:!rotate-0 hover:-translate-y-1"
                style={{ transform: `rotate(${rot}deg)` }}
              >
                <div className="tape w-16 h-4 -top-2 left-1/2 -translate-x-1/2 rotate-[2deg]" />

                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                    RECORD #{String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-blackops text-[12px] tracking-[0.3em] text-[hsl(var(--ink-charcoal))] flex items-center gap-1.5">
                    <span className="status-pulse" /> VERIFIED
                  </span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="stamp stamp-blue text-[12px] !p-1 rotate-[4deg]">ACCREDITED</div>
                </div>

                <div className="mb-3">
                  <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">Institution</div>
                  <h3 className="font-blackops text-lg text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-snug">
                    {edu.school}
                  </h3>
                </div>

                <div className="mb-3 flex-1">
                  <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">Discipline</div>
                  <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal))] leading-snug">
                    {edu.degree}
                  </p>
                </div>

                <div className="mt-auto border-t border-[hsl(var(--accent-red)/0.4)] pt-3 flex items-center justify-between">
                  <div>
                    <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">Tenure</div>
                    <div className="font-blackops text-base text-[hsl(var(--accent-red))] tracking-[0.2em]">
                      {edu.period}
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-[hsl(var(--accent-red))] opacity-80" />
                </div>

                <div className="mt-3 barcode h-4 w-full opacity-60" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] uppercase border-t border-[hsl(var(--accent-red)/0.3)] pt-3">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> REGISTRAR'S DESK · CREDENTIALS ON FILE</span>
          <span>END OF ACADEMIC FILE</span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
