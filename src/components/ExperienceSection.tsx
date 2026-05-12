import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Clapperboard, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Web Designer",
    company: "Exoskill Creatives",
    period: "Creative systems",
    track: "Creative",
    description:
      "Created and developed websites that were visually engaging, user-friendly, and shaped around each client's brand identity and business goals.",
  },
  {
    role: "Graphic Designer & Video Editor",
    company: "Freelance - Multiple Clients",
    period: "Ongoing",
    track: "Creative",
    description:
      "Partnered with content creators, small businesses, marketing agencies, and independent filmmakers to produce polished visuals and emotionally resonant edits.",
  },
  {
    role: "Graphic Designer, Social Media Manager & Video Editor",
    company: "Next Generation Church - Jesus Culture",
    period: "Creative operations",
    track: "Creative",
    description:
      "Produced worship, fellowship, and community content across digital channels, aligning visual storytelling with the organization's mission and audience.",
  },
  {
    role: "Graphic Designer and Video Editor",
    company: "Rovawork Philippines",
    period: "Client production",
    track: "Creative",
    description:
      "Collaborated with a creative team to turn raw footage into branded video content for corporate clients, marketing campaigns, and digital platforms.",
  },
  {
    role: "Software Engineer - Full Stack Developer",
    company: "Enprat Learning School",
    period: "July 2023 - December 2023",
    track: "Systems",
    description:
      "Developed digital platforms and management systems supporting education programs, administration, and student management workflows.",
  },
  {
    role: "Software Engineer - Full Stack Developer",
    company: "Enprat Philippines Holdings",
    period: "July 2023 - December 2023",
    track: "Systems",
    description:
      "Worked on enterprise platforms supporting business operations and internal system management, from architecture to deployment coordination.",
  },
  {
    role: "Software Engineer - Full Stack Developer",
    company: "Bio Blooms Manufacturing Company",
    period: "June 2022 - 2023",
    track: "Systems",
    description:
      "Built enterprise-level systems that streamlined manufacturing operations, data management, and internal workflow automation.",
  },
  {
    role: "Software Engineer - Full Stack Developer",
    company: "Payshare Pharmaceutical Trading International Inc.",
    period: "October 2021 - 2022",
    track: "Systems",
    description:
      "Delivered full-stack enterprise applications for inventory, internal management, and business operations across frontend and backend services.",
  },
  {
    role: "Software Engineer - Back End Developer",
    company: "AltPayNet - Digital Payment Solutions",
    period: "October 2020 - 2021",
    track: "Systems",
    description:
      "Developed backend services and secure APIs supporting digital payment processing, authentication, and financial transaction workflows.",
  },
  {
    role: "Software Engineer - Front End & Back End Developer",
    company: "St. Paul Technological Institute of Cavite",
    period: "January 2019 - 2020",
    track: "Systems",
    description:
      "Designed and developed institutional web applications supporting administrative and academic processes across the software lifecycle.",
  },
  {
    role: "Software Engineer - Web Application & API Developer",
    company: "VNR Construction",
    period: "January 2019 - 2020",
    track: "Systems",
    description:
      "Developed and maintained web systems and APIs for internal operations, including backend services, database integration, and optimization.",
  },
];

const getTrackIcon = (track: string) => (track === "Creative" ? Clapperboard : Code2);

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-4xl"
        >
          <p className="case-label mb-4">Archive / Experience</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Missions executed across <span className="text-gradient-red">creative and technical fronts.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            A career record spanning enterprise systems, backend platforms, visual campaigns, social content, and client-facing operations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-border/70 md:block" />

          <div className="grid gap-4">
            {experiences.map((exp, i) => {
              const Icon = getTrackIcon(exp.track);

              return (
                <motion.article
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className="relative md:pl-14"
                >
                  <span className="absolute left-[14px] top-6 hidden h-3 w-3 border-2 border-background bg-primary md:block" />

                  <div className="border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover">
                    <div className="grid gap-4 lg:grid-cols-[1fr_180px]">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-xs font-bold text-muted-foreground">{exp.track.toUpperCase()} FILE</p>
                          <h3 className="mt-1 text-xl font-black leading-tight text-foreground">{exp.role}</h3>
                          <p className="mt-1 text-base font-bold text-foreground/80">{exp.company}</p>
                          <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">{exp.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 border border-border/60 bg-background/50 px-3 py-2 font-mono text-xs font-bold text-muted-foreground lg:justify-center">
                        {exp.period ? <CalendarDays className="h-4 w-4 text-primary" /> : <Briefcase className="h-4 w-4 text-primary" />}
                        {exp.period || "Active"}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
