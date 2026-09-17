import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";
import SectionHeading from "./drift/SectionHeading";

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

/** A mountain-pass road: one hairpin per job, swinging left and right. */
const buildPath = (n: number) => {
  let d = `M 50 0`;
  for (let i = 0; i < n; i++) {
    const y0 = i * SEG;
    const side = i % 2 === 0 ? 92 : 8;
    d += ` C ${side} ${y0 + 20}, ${side} ${y0 + 80}, 50 ${y0 + SEG}`;
  }
  return d;
};

const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const d = useMemo(() => buildPath(experiences.length), []);
  const height = experiences.length * SEG;

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // The car follows the drawn line through every hairpin
  useMotionValueEvent(progress, "change", (p) => {
    const path = pathRef.current;
    const car = carRef.current;
    if (!path || !car) return;
    const len = path.getTotalLength();
    const at = Math.max(0, Math.min(1, p)) * len;
    const a = path.getPointAtLength(at);
    const b = path.getPointAtLength(Math.min(len, at + 1));
    const box = car.parentElement!.getBoundingClientRect();
    const sx = box.width / 100;
    const sy = box.height / height;
    const angle = (Math.atan2((b.y - a.y) * sy, (b.x - a.x) * sx) * 180) / Math.PI;
    car.style.transform = `translate(${a.x * sx}px, ${a.y * sy}px) translate(-50%, -50%) rotate(${angle}deg)`;
  });

  return (
    <section id="experience" data-scene="Race log" data-kanji="経歴" className="relative py-24 sm:py-32 overflow-hidden bg-asphalt-2">
      <div className="gutter relative">
        <SectionHeading kanji="経歴" kicker="Work experience · downhill run" title="The race" accent="log" meta={`${experiences.length} roles`}>
          Creative design, video production, social media and enterprise software engineering across many
          industries. Scroll down the pass — every hairpin is a role.
        </SectionHeading>

        <div ref={trackRef} className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_120px_1fr] gap-x-4 md:gap-x-8">
          {/* THE PASS */}
          <div
            className="col-start-1 md:col-start-2 relative"
            style={{ gridRow: `1 / ${experiences.length + 1}` }}
            aria-hidden
          >
            <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              {/* guardrail glow */}
              <path d={d} fill="none" stroke="hsl(var(--line) / 0.10)" strokeWidth="16" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
              <path d={d} fill="none" stroke="hsl(var(--line) / 0.25)" strokeWidth="1" strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
              <motion.path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="url(#pass-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: progress }}
              />
              <defs>
                <linearGradient id="pass-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--hud))" />
                  <stop offset="60%" stopColor="hsl(var(--drift))" />
                  <stop offset="100%" stopColor="hsl(var(--sign))" />
                </linearGradient>
              </defs>
            </svg>
            {/* The car: white body, black bonnet — a two-tone hatch heading downhill */}
            <div ref={carRef} className="absolute left-0 top-0 will-change-transform">
              <div className="relative w-7 h-4 rounded-[3px] overflow-hidden shadow-[0_0_18px_hsl(var(--drift)/0.9)]">
                <div className="absolute inset-0 bg-[hsl(0_0%_96%)]" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-[hsl(246_30%_8%)]" />
                <div className="absolute right-0 top-0.5 w-[3px] h-[3px] bg-[hsl(50_100%_70%)] rounded-full" />
                <div className="absolute right-0 bottom-0.5 w-[3px] h-[3px] bg-[hsl(50_100%_70%)] rounded-full" />
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 neon-kanji text-lg whitespace-nowrap">峠</div>
          </div>

          {experiences.map((exp, i) => {
            const left = i % 2 === 1;
            return (
              <motion.article
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: left ? -60 : 60, skewX: left ? 4 : -4 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ gridRowStart: i + 1 }}
                className={`col-start-2 ${left ? "md:col-start-1 md:text-right" : "md:col-start-3"} py-6 md:py-10`}
              >
                <div className="panel panel-hover edge-light p-6 sm:p-7 text-left">
                  <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 ${left ? "md:justify-end" : ""}`}>
                    <span className="hud-label">{exp.company}</span>
                  </div>
                  <h3 className={`font-hud text-xl sm:text-2xl font-bold uppercase leading-tight text-ink mb-3 ${left ? "md:text-right" : ""}`}>
                    {exp.role}
                  </h3>
                  {exp.period && (
                    <div className={`mb-3 ${left ? "md:text-right" : ""}`}>
                      <span className="inline-block font-hud text-xs font-bold tracking-[0.14em] uppercase bg-drift text-on-drift px-2.5 py-1 -skew-x-12">
                        {exp.period}
                      </span>
                    </div>
                  )}
                  <p className={`text-ink-dim leading-relaxed ${left ? "md:text-right" : ""}`}>{exp.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center hud-label !text-ink-dim">Finish line · {experiences.length} corners cleared</div>
      </div>
    </section>
  );
};

export default ExperienceSection;
