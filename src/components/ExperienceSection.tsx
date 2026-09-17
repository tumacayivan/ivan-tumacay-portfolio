import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useMemo, useRef } from "react";
import SectionHeading from "./reaction/SectionHeading";

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

/** The decay chain: one step down for each test, drifting off the centre. */
const buildPath = (n: number) => {
  let d = `M 50 0`;
  for (let i = 0; i < n; i++) {
    const y0 = i * SEG;
    const side = i % 2 === 0 ? 64 : 36;
    d += ` C ${side} ${y0 + 28}, ${side} ${y0 + 72}, 50 ${y0 + SEG}`;
  }
  return d;
};

/**
 * The test log.
 *
 * Every role is one event in a chain, recorded in order. A single particle
 * travels the line as you scroll, and the line behind it stays lit — the
 * reaction has already happened there.
 */
const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const d = useMemo(() => buildPath(experiences.length), []);
  const height = experiences.length * SEG;

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // The particle rides the drawn line. Written straight to the DOM.
  useMotionValueEvent(progress, "change", (p) => {
    const path = pathRef.current;
    const marker = markerRef.current;
    if (!path || !marker) return;
    const len = path.getTotalLength();
    const at = Math.max(0, Math.min(1, p)) * len;
    const a = path.getPointAtLength(at);
    const box = marker.parentElement!.getBoundingClientRect();
    const sx = box.width / 100;
    const sy = box.height / height;
    marker.style.transform = `translate(${a.x * sx}px, ${a.y * sy}px) translate(-50%, -50%)`;
  });

  return (
    <section
      id="experience"
      data-scene="Test log"
      data-code="Part III · 07"
      className="relative py-24 sm:py-32 overflow-hidden bg-base-2"
    >
      <div className="gutter relative">
        <SectionHeading
          code="Doc · 07"
          kicker="Work experience · in order"
          title="The test"
          accent="log"
          meta={`${experiences.length} records`}
        >
          Creative design, video production, social media and enterprise software engineering across many
          industries. Every entry is one event in the chain.
        </SectionHeading>

        <div ref={trackRef} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_110px_1fr] gap-x-4 md:gap-x-8">
          {/* THE CHAIN */}
          <div
            className="col-start-1 md:col-start-2 relative"
            style={{ gridRow: `1 / ${experiences.length + 1}` }}
            aria-hidden
          >
            <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              <path d={d} fill="none" stroke="hsl(var(--line) / 0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray="4 7" />
              <motion.path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="hsl(var(--ember))"
                strokeWidth="2"
                strokeLinecap="square"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: progress }}
              />
            </svg>
            {/* The particle itself */}
            <div ref={markerRef} className="absolute left-0 top-0 z-10 will-change-transform">
              <span className="block w-2.5 h-2.5 bg-ember-hot shadow-[0_0_18px_4px_hsl(var(--ember)/0.75)]" />
            </div>
          </div>

          {experiences.map((exp, i) => {
            const left = i % 2 === 1;
            return (
              <motion.article
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ gridRowStart: i + 1 }}
                className={`col-start-2 ${left ? "md:col-start-1 md:text-right" : "md:col-start-3"} py-6 md:py-10`}
              >
                <div className="plate plate-hover filament ticks p-6 sm:p-7 text-left">
                  <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 ${left ? "md:justify-end" : ""}`}>
                    <span className="font-doc text-xs text-ember tabular-nums">
                      {String(experiences.length - i).padStart(2, "0")}
                    </span>
                    <span className="slug slug-dim">{exp.company}</span>
                  </div>
                  <h3 className={`font-doc text-lg sm:text-xl font-semibold uppercase tracking-[0.02em] leading-tight text-ink mb-3 ${left ? "md:text-right" : ""}`}>
                    {exp.role}
                  </h3>
                  {exp.period && (
                    <div className={`mb-3 ${left ? "md:text-right" : ""}`}>
                      <span className="inline-block font-doc text-[11px] font-semibold tracking-[0.14em] uppercase bg-ember text-on-ember px-2.5 py-1">
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

        <div className="mt-12 text-center slug slug-dim">
          End of log · {experiences.length} records held
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
