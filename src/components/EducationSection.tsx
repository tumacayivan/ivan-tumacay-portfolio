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
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden paper-grain">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="watermark watermark-dark text-[18.4vw] leading-none rotate-[6deg]">
          TRAINING
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
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-ink" />
            <span className="font-blackops text-base tracking-[0.3em] text-ink">
              SECTION 02 // TRAINING RECORDS
            </span>
          </div>
          <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
            <span className="text-ink">EDUCATION</span>
          </h2>
          <p className="mt-4 font-typewriter text-xl text-ink/80 max-w-2xl">
            <span className="font-blackops text-ink text-sm tracking-widest">CERTIFIED ACADEMIC HISTORY //</span>{" "}
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
                className="paper-card-cream p-6 relative paper-grain h-full flex flex-col"
                style={{ transform: `rotate(${rot}deg)` }}
              >
                <div className="tape tape-yellow w-16 h-4 -top-2 left-1/2 -translate-x-1/2 rotate-[2deg]" />

                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">
                    RECORD #{String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-blackops text-[13px] tracking-widest text-ink">VERIFIED</span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 border-2 border-ink bg-paper text-ink">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="stamp stamp-blue text-[11px] p-1 rotate-[4deg]">CERTIFIED</div>
                </div>

                <div className="mb-3">
                  <div className="font-courier text-[13px] tracking-widest text-ink-brown uppercase">Institution</div>
                  <h3 className="font-blackops text-lg text-ink uppercase tracking-[0.04em] leading-snug">
                    {edu.school}
                  </h3>
                </div>

                <div className="mb-3 flex-1">
                  <div className="font-courier text-[13px] tracking-widest text-ink-brown uppercase">Discipline</div>
                  <p className="font-typewriter text-base text-ink leading-snug">
                    {edu.degree}
                  </p>
                </div>

                <div className="mt-auto border-t-2 border-double border-ink pt-3 flex items-center justify-between">
                  <div>
                    <div className="font-courier text-[13px] tracking-widest text-ink-brown uppercase">Tenure</div>
                    <div className="font-blackops text-base text-ink tracking-[0.15em]">
                      {edu.period}
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-ink opacity-70" />
                </div>

                <div className="mt-3 barcode h-4 w-full opacity-60" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest">
          <span>ARCHIVE BUREAU · CREDENTIALS DESK</span>
          <span>END OF ACADEMIC FILE</span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
