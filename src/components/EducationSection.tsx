import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">Background</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
            <span className="text-gradient-gold">EDUCATION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-300 hover:glow-gold h-full flex flex-col"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 w-fit mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-foreground tracking-tight mb-2">{edu.school}</h3>
              <p className="text-base font-bold text-muted-foreground mb-4 flex-1">{edu.degree}</p>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
