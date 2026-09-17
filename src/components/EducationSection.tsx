import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./transit/SectionHeading";

const education = [
  {
    school: "Lyceum of the Philippines University – Cavite",
    degree: "Bachelor of Science in Information Technology",
    period: "2016 – 2020",
    from: 2016,
    to: 2020,
  },
  {
    school: "AMA Computer College – Cavite Campus",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2015 – 2016",
    from: 2015,
    to: 2016,
  },
  {
    school: "De La Salle University – Dasmariñas",
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    period: "2014 – 2015",
    from: 2014,
    to: 2015,
  },
];

const START = 2014;
const END = 2020;
const span = END - START;

/**
 * TRAINING — the years before the launch.
 *
 * A single scale carries all three programmes, so the overlap and the
 * hand-off from hardware to software is visible at a glance.
 */
const EducationSection = () => (
  <section
    id="education"
    data-scene="Training"
    data-coord="Stage 06 · Qualification"
    className="relative py-24 sm:py-32 overflow-hidden"
  >
    <div className="gutter relative">
      <SectionHeading stage="06" kicker="Training record" title="Where I" accent="trained" meta={`${span} years`}>
        Electronics and communications engineering first, then a degree in information technology — the
        hardware-to-software path behind the work.
      </SectionHeading>

      {/* The scale */}
      <div className="hidden md:block relative mb-12">
        <div className="relative h-14" aria-hidden>
          <div className="absolute inset-x-0 top-1/2 h-px bg-rule/15" />
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              className={`absolute top-1/2 -translate-y-1/2 h-[3px] ${i === 0 ? "bg-gold" : "bg-signal"}`}
              style={{
                left: `${((e.from - START) / span) * 100}%`,
                width: `${((e.to - e.from) / span) * 100}%`,
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2 + (2 - i) * 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
          {Array.from({ length: span + 1 }, (_, i) => (
            <span
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-rule/25"
              style={{ left: `${(i / span) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between font-tele text-xs tracking-[0.18em] text-ice-dim tabular-nums">
          {Array.from({ length: span + 1 }, (_, i) => START + i).map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...education].reverse().map((edu, i) => (
          <motion.article
            key={edu.school}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="panel panel-hover beam p-7 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-12">
              <GraduationCap className={`w-6 h-6 ${edu.to === END ? "text-gold" : "text-signal"}`} aria-hidden />
              <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">
                {edu.to === END ? "Graduated" : "Year completed"}
              </span>
            </div>
            <div className="plate text-5xl sm:text-6xl text-ice leading-none tabular-nums mb-7">
              {edu.from}
              <span className="text-gold">–</span>
              <span className="text-ice-dim">{String(edu.to).slice(2)}</span>
            </div>
            <h3 className="font-tele text-base font-medium uppercase tracking-[0.08em] text-ice leading-snug mb-3">
              {edu.school}
            </h3>
            <p className="text-ice-dim leading-relaxed mt-auto text-[0.95rem]">{edu.degree}</p>
            <span className="sr-only">{edu.period}</span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
