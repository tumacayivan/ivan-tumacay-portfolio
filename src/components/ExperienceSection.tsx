import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";
import SectionHeading from "./transit/SectionHeading";
import Craft from "./transit/Craft";

const experiences = [
  {
    role: "Web Designer",
    company: "Exoskill Creatives",
    period: "",
    description: "Created and developed websites that were both visually engaging and user-friendly, customized to meet each client's needs. Focused on blending creativity with functionality, ensuring every site offered a smooth user experience while staying true to the client's brand identity.",
  },
  {
    role: "Graphic Designer & Video Editor",
    company: "Freelance (Handled Multiple Clients)",
    period: "",
    description: "Partnered with a wide range of clients including content creators, small businesses, marketing agencies, and independent filmmakers. Work centers on producing visually captivating and emotionally resonant videos that align with each client's specific objectives.",
  },
  {
    role: "Graphic Designer, Social Media Manager & Video Editor",
    company: "Next Generation Church (Jesus Culture)",
    period: "",
    description: "Inspired believers worldwide by uniting in faith through powerful and engaging worship experiences. Produced content providing opportunities for worship, fellowship, and authentic connection, touching the lives of people from diverse backgrounds.",
  },
  {
    role: "Graphic Designer and Video Editor",
    company: "Rovawork Philippines",
    period: "",
    description: "Collaborated with a dynamic creative team to produce engaging video content for corporate clients, marketing initiatives, and digital platforms. Transformed raw footage into polished, high-quality visual narratives that reflected client branding and strategic goals.",
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "Enprat Learning School",
    period: "July 2023 – December 2023",
    description: "Developed digital platforms and management systems supporting educational programs, administrative functions, and student management processes.",
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "Enprat Philippines Holdings",
    period: "July 2023 – December 2023",
    description: "Worked on enterprise platforms supporting business operations and internal system management. Responsible for system architecture design, application development, and deployment processes.",
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "Bio Blooms Manufacturing Company",
    period: "June 2022 – 2023",
    description: "Developed enterprise-level systems to streamline manufacturing operations and data management. Designed scalable web applications that improved internal workflow automation.",
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "Payshare Pharmaceutical Trading International Inc.",
    period: "October 2021 – 2022",
    description: "Built full stack enterprise applications supporting business operations, inventory systems, and internal management tools. Worked on both frontend interfaces and backend services.",
  },
  {
    role: "Software Engineer – Back End Developer",
    company: "AltPayNet – Digital Payment Solutions",
    period: "October 2020 – 2021",
    description: "Developed backend services and secure APIs supporting digital payment processing platforms. Implemented scalable systems and integrated secure authentication and financial transaction workflows.",
  },
  {
    role: "Software Engineer – Front End & Back End Developer",
    company: "St. Paul Technological Institute of Cavite",
    period: "January 2019 – 2020",
    description: "Designed and developed institutional web applications supporting administrative and academic processes. Worked across the full software development lifecycle.",
  },
  {
    role: "Software Engineer – Web Application & API Developer",
    company: "VNR Construction",
    period: "January 2019 – 2020",
    description: "Developed and maintained web-based systems and APIs supporting internal business operations. Responsibilities included back end development, database integration, and system optimization.",
  },
];

const SEG = 100;

/** The trajectory: one long, shallow correction per entry in the log. */
const buildPath = (n: number) => {
  let d = `M 50 0`;
  for (let i = 0; i < n; i++) {
    const y0 = i * SEG;
    const side = i % 2 === 0 ? 68 : 32;
    d += ` C ${side} ${y0 + 26}, ${side} ${y0 + 74}, 50 ${y0 + SEG}`;
  }
  return d;
};

/**
 * MISSION LOG — eleven entries, in the order they were filed.
 *
 * The ship rides the plotted trajectory as the visitor scrolls; the line
 * behind it is drawn, the line ahead is still dashed. Entry stamps are the
 * log index; a period is shown only where one is actually on record.
 */
const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const craftRef = useRef<HTMLDivElement>(null);
  const d = useMemo(() => buildPath(experiences.length), []);
  const height = experiences.length * SEG;

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 26, mass: 0.6 });

  useMotionValueEvent(progress, "change", (p) => {
    const path = pathRef.current;
    const craft = craftRef.current;
    if (!path || !craft) return;
    const len = path.getTotalLength();
    const at = Math.max(0, Math.min(1, p)) * len;
    const a = path.getPointAtLength(at);
    const b = path.getPointAtLength(Math.min(len, at + 1));
    const box = craft.parentElement!.getBoundingClientRect();
    const sx = box.width / 100;
    const sy = box.height / height;
    const angle = (Math.atan2((b.y - a.y) * sy, (b.x - a.x) * sx) * 180) / Math.PI;
    craft.style.transform = `translate(${a.x * sx}px, ${a.y * sy}px) translate(-50%, -50%) rotate(${angle}deg)`;
  });

  return (
    <section
      id="experience"
      data-scene="Mission log"
      data-coord="Stage 07 · Record"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep-2"
    >
      <div className="gutter relative">
        <SectionHeading
          stage="07"
          kicker="Work experience"
          title="The mission"
          accent="log"
          meta={`${experiences.length} entries`}
        >
          Creative design, video production, social media and enterprise software engineering across many
          industries — filed in the order the work was logged.
        </SectionHeading>

        <div ref={trackRef} className="relative grid grid-cols-[56px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] gap-x-4 md:gap-x-10">
          {/* TRAJECTORY */}
          <div
            className="col-start-1 md:col-start-2 relative"
            style={{ gridRow: `1 / ${experiences.length + 1}` }}
            aria-hidden
          >
            <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              <path d={d} fill="none" stroke="hsl(var(--rule) / 0.2)" strokeWidth="1" strokeDasharray="4 7" vectorEffect="non-scaling-stroke" />
              <motion.path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="url(#mission-log-trajectory)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: progress }}
              />
              <defs>
                <linearGradient id="mission-log-trajectory" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--signal))" />
                  <stop offset="100%" stopColor="hsl(var(--gold))" />
                </linearGradient>
              </defs>
            </svg>
            <div ref={craftRef} className="absolute left-0 top-0 z-10 will-change-transform">
              <Craft className="w-12 h-6 sm:w-16 sm:h-8 drop-shadow-[0_0_14px_hsl(var(--gold)/0.6)]" />
            </div>
          </div>

          {experiences.map((exp, i) => {
            const left = i % 2 === 1;
            return (
              <motion.article
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ gridRowStart: i + 1 }}
                className={`col-start-2 ${left ? "md:col-start-1" : "md:col-start-3"} py-6 md:py-10`}
              >
                <div className="panel panel-hover beam p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span className="font-tele text-xs tracking-[0.24em] uppercase text-gold tabular-nums">
                      Entry {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="h-px w-6 bg-rule/20" />
                    <span className="tele-label">{exp.company}</span>
                  </div>
                  <h3 className="plate text-2xl sm:text-3xl text-ice leading-tight mb-4">{exp.role}</h3>
                  {exp.period && (
                    <div className="mb-4">
                      <span className="inline-block font-tele text-xs tracking-[0.16em] uppercase text-ice-dim border border-rule/15 px-2.5 py-1">
                        {exp.period}
                      </span>
                    </div>
                  )}
                  <p className="text-ice-dim leading-relaxed text-[0.95rem]">{exp.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 text-center font-tele text-xs tracking-[0.3em] uppercase text-ice-dim">
          End of log · {experiences.length} entries filed
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
