import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

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

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-start justify-start overflow-hidden">
        <div className="watermark text-[14vw] leading-none rotate-[-3deg] ml-[-2vw] mt-12">
          FIELD OPS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-stamp-red" />
              <span className="font-blackops text-sm tracking-[0.3em] text-stamp-red">
                SECTION 05 // FIELD OPERATIONS TIMELINE
              </span>
            </div>
            <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Career // Operational History
            </p>
            <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
              WORK <span className="text-stamp-red">EXPERIENCE</span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-blue text-[10px] p-1">SUMMARY BRIEFING</div>
            <p className="font-typewriter text-base text-ink leading-relaxed mt-1">
              Extensive experience in <span className="font-bold text-stamp-red underline decoration-wavy">creative design</span>, <span className="font-bold text-stamp-red underline decoration-wavy">video production</span>, <span className="font-bold text-stamp-red underline decoration-wavy">social media management</span>, and <span className="font-bold text-stamp-red underline decoration-wavy">enterprise software engineering</span> across multiple industries.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-[hsl(var(--stamp-red))] opacity-70" />
          <div className="absolute left-[7px] sm:left-[15px] top-0 w-5 h-5 border-2 border-stamp-red bg-paper rotate-45" />
          <div className="absolute left-[7px] sm:left-[15px] bottom-0 w-5 h-5 border-2 border-stamp-red bg-paper rotate-45" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const rot = (i % 5) - 2;
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="relative pl-12 sm:pl-20"
                >
                  <div className="absolute left-2 sm:left-4 top-6 w-6 h-6 rounded-full bg-stamp-red border-2 border-paper shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-paper" />
                  </div>

                  <div className="absolute left-8 sm:left-10 top-9 w-4 sm:w-10 h-px border-t border-dashed-ink" />

                  <div
                    className="paper-card-cream p-5 sm:p-6 relative paper-grain transition-transform duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                    style={{ transform: `rotate(${rot * 0.3}deg)` }}
                  >
                    <div className="tape tape-clear w-10 h-3 -top-1.5 right-6 rotate-[3deg]" />

                    <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-3">
                      <span className="font-courier text-[10px] tracking-widest text-ink-brown">
                        OP-FILE-{String(i + 1).padStart(3, "0")}
                      </span>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-stamp-red" />
                        <span className="font-blackops text-[10px] tracking-widest text-stamp-red">FIELD REPORT</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="font-blackops text-base sm:text-lg text-ink uppercase tracking-[0.04em] leading-tight">
                        {exp.role}
                      </h3>
                      {exp.period && (
                        <span className="font-courier text-xs text-stamp-red tracking-widest border border-stamp-red px-2 py-0.5 whitespace-nowrap">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <p className="font-typewriter text-base text-ink mb-3 underline decoration-stamp-red/60 underline-offset-2">
                      · {exp.company}
                    </p>

                    <p className="font-courier text-sm text-ink/85 leading-relaxed">
                      <span className="font-blackops text-[10px] tracking-widest text-stamp-blue">DEBRIEF //</span>{" "}
                      {exp.description}
                    </p>

                    <div className="mt-4 pt-2 border-t border-dashed-ink flex items-center justify-between font-courier text-[10px] tracking-widest text-ink-brown">
                      <span>OPERATIVE: IT-X</span>
                      <span>SIGNED</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>TIMELINE ARCHIVED · INVESTIGATIVE WALL COMPLETE</span>
          <span>{experiences.length} DOCUMENTED ENGAGEMENTS</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
