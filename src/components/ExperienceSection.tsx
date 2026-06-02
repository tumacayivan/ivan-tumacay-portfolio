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
    <section id="experience" className="relative py-20 sm:py-28 bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-start justify-start overflow-hidden">
        <div className="watermark text-[18vw] leading-none rotate-[-3deg] ml-[-2vw] mt-12">
          DEAL FLOW
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-end"
        >
          <div>
            <div className="section-eyebrow mb-3">
              <MapPin className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 05 // THE TRACK RECORD
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-2 uppercase">
              Career · Deal History
            </p>
            <h2 className="display-title text-6xl sm:text-8xl md:text-9xl uppercase">
              WORK <span className="accent">EXPERIENCE</span>
            </h2>
          </div>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-blue !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">THE RUNDOWN</div>
            <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed mt-1">
              Extensive experience in{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">creative design</span>,{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">video production</span>,{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">social media management</span>, and{" "}
              <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">enterprise software engineering</span> across multiple industries.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Red thread connecting all missions */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[hsl(var(--accent-red))] via-[hsl(var(--accent-red-bright))] to-[hsl(var(--accent-red-deep))] shadow-[0_0_8px_hsl(var(--accent-red)/0.5)]" />
          <div className="absolute left-[7px] sm:left-[15px] top-0 w-5 h-5 border-2 border-[hsl(var(--accent-red))] bg-[hsl(45_36%_97%)] rotate-45 shadow-[0_0_12px_hsl(var(--accent-red)/0.5)]" />
          <div className="absolute left-[7px] sm:left-[15px] bottom-0 w-5 h-5 border-2 border-[hsl(var(--accent-red))] bg-[hsl(45_36%_97%)] rotate-45 shadow-[0_0_12px_hsl(var(--accent-red)/0.5)]" />

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
                  {/* Red node */}
                  <div className="absolute left-2 sm:left-4 top-6 w-6 h-6 rounded-full bg-[hsl(var(--accent-red))] border-2 border-[hsl(45_36%_97%)] shadow-[0_0_18px_hsl(var(--accent-red)/0.6)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(40_45%_10%)] animate-pulse-classified" />
                  </div>
                  <div className="absolute left-8 sm:left-10 top-9 w-4 sm:w-10 h-px bg-[hsl(var(--accent-red))]" />

                  <div
                    className="paper-card-cream p-5 sm:p-6 relative paper-grain transition-all duration-300 hover:!rotate-0 hover:-translate-y-0.5"
                    style={{ transform: `rotate(${rot * 0.3}deg)` }}
                  >
                    <div className="tape tape-clear w-10 h-3 -top-1.5 right-6 rotate-[3deg]" />

                    <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                      <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))]">
                        DEAL·{String(i + 1).padStart(3, "0")}
                      </span>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-[hsl(var(--accent-red))]" />
                        <span className="font-blackops text-[12px] tracking-[0.3em] text-[hsl(var(--ink-charcoal))]">DEAL TICKET</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="font-blackops text-lg sm:text-xl text-[hsl(var(--accent-bone))] uppercase tracking-[0.06em] leading-tight">
                        {exp.role}
                      </h3>
                      {exp.period && (
                        <span className="font-courier text-[13px] text-[hsl(var(--accent-red))] tracking-[0.2em] border border-[hsl(var(--accent-red)/0.5)] px-2 py-0.5 whitespace-nowrap bg-[hsl(45_36%_97%)]">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] mb-3 underline decoration-[hsl(var(--accent-red))] underline-offset-4 decoration-1">
                      · {exp.company}
                    </p>

                    <p className="font-courier text-[14px] text-[hsl(var(--ink-charcoal))]/90 leading-relaxed">
                      <span className="font-blackops text-[12px] tracking-[0.3em] text-[hsl(var(--accent-red))]">THE PLAY //</span>{" "}
                      {exp.description}
                    </p>

                    <div className="mt-4 pt-2 border-t border-dashed-ink flex items-center justify-between font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--ink-brown))] uppercase">
                      <span>BROKER: <span className="text-[hsl(var(--accent-red))]">IVT</span></span>
                      <span>CLOSED</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> TRACK RECORD LOGGED · EVERY DEAL ON THE BOARD</span>
          <span>{experiences.length} DEALS CLOSED</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
