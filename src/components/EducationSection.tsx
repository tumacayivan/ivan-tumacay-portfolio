import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./drift/SectionHeading";

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

const EducationSection = () => (
  <section id="education" data-scene="Education" data-kanji="学歴" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="gutter relative">
      <SectionHeading kanji="学歴" kicker="Education" title="Where I" accent="trained">
        Electronics and communications engineering first, then a degree in information technology — the
        hardware-to-software path behind the work.
      </SectionHeading>

      {/* Timeline track: each school is a lap segment on the same road */}
      <div className="hidden md:block relative mb-10" aria-hidden>
        <div className="relative h-10">
          <div className="absolute inset-x-0 top-1/2 h-px bg-line/15" />
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              className={`absolute top-1/2 -translate-y-1/2 h-2 -skew-x-12 ${i === 0 ? "bg-drift" : "bg-hud"}`}
              style={{ left: `${((e.from - START) / span) * 100}%`, width: `${((e.to - e.from) / span) * 100}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + (2 - i) * 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="flex justify-between font-hud text-xs tracking-[0.2em] text-ink-dim">
          {Array.from({ length: span + 1 }, (_, i) => START + i).map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...education].reverse().map((edu, i) => (
          <motion.article
            key={edu.school}
            initial={{ opacity: 0, y: 40, rotateY: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="panel panel-hover edge-light p-7 flex flex-col [transform-style:preserve-3d]"
          >
            <div className="flex items-start justify-between mb-10">
              <GraduationCap className={`w-7 h-7 ${edu.to === END ? "text-drift" : "text-hud"}`} />
              {/* Licence seal — the year it was signed off */}
              <motion.span
                aria-hidden
                initial={{ opacity: 0, scale: 2.2, rotate: -25 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.12, ease: [0.2, 1.6, 0.4, 1] }}
                className={`grid place-items-center w-16 h-16 rounded-full border-2 border-dashed font-hud text-[11px] font-bold tracking-[0.12em] uppercase text-center leading-tight ${
                  edu.to === END ? "border-drift text-drift" : "border-hud/60 text-hud"
                }`}
              >
                {edu.to === END ? "Full licence" : `Stage ${3 - i}`}
              </motion.span>
            </div>
            <div className="font-display text-5xl sm:text-6xl text-ink leading-none tabular-nums mb-6">
              {edu.from}
              <span className="text-drift">–</span>
              <span className="text-ink-dim">{String(edu.to).slice(2)}</span>
            </div>
            <h3 className="font-hud text-xl font-bold uppercase tracking-[0.02em] text-ink leading-snug mb-2">
              {edu.school}
            </h3>
            <p className="text-ink-dim leading-relaxed mt-auto">{edu.degree}</p>
          </motion.article>
        ))}
      </div>

      {/* Chequered flag: training over, the run starts */}
      <div className="mt-12 flex items-center gap-5">
        <span
          aria-hidden
          className="h-8 flex-1"
          style={{
            backgroundImage:
              "conic-gradient(hsl(var(--ink)) 25%, transparent 0 50%, hsl(var(--ink)) 0 75%, transparent 0)",
            backgroundSize: "16px 16px",
            opacity: 0.85,
          }}
        />
        <span className="hud-label !text-ink-dim shrink-0">Training complete · on to the road</span>
      </div>
    </div>
  </section>
);

export default EducationSection;
