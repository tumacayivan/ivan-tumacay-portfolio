import { motion } from "framer-motion";
import { GraduationCap, Landmark, MapPin } from "lucide-react";

const education = [
  {
    school: "Lyceum of the Philippines University - Cavite",
    degree: "Bachelor of Science in Information Technology",
    period: "2016 - 2020",
    note: "Primary technical formation",
  },
  {
    school: "AMA Computer College - Cavite Campus",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2015 - 2016",
    note: "Engineering foundation",
  },
  {
    school: "De La Salle University - Dasmarinas",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2014 - 2015",
    note: "Early systems discipline",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-4xl"
        >
          <p className="case-label mb-4">Training / Education</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Technical discipline with <span className="text-gradient-red">operator instincts.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex h-full flex-col border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold text-primary">{edu.period}</span>
              </div>
              <p className="mb-3 flex items-center gap-2 font-mono text-xs font-bold text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                CAVITE, PH
              </p>
              <h3 className="text-xl font-black leading-tight text-foreground">{edu.school}</h3>
              <p className="mt-3 flex-1 text-sm font-semibold leading-relaxed text-muted-foreground">{edu.degree}</p>
              <p className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4 font-mono text-xs font-bold text-muted-foreground">
                <Landmark className="h-3.5 w-3.5 text-primary" />
                {edu.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
