import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Cake, Ruler, Globe } from "lucide-react";
import ivanPortrait from "@/assets/john-doe-avatar.png";
import SectionHeading from "./transit/SectionHeading";
import { ScanSweep } from "./transit/Reveal";

const identifiers = [
  { icon: Flag, label: "Nationality", value: "Filipino", note: "Republic of the Philippines" },
  { icon: Cake, label: "Date of birth", value: "28 Jan 1998", note: "Born January 28, 1998" },
  { icon: MapPin, label: "Place of birth", value: "Manila", note: "National Capital Region" },
  { icon: Radar, label: "Based in", value: "Cavite, PH", note: "Working remotely" },
  { icon: Ruler, label: "Height", value: "5'11\" · 180 cm", note: "180.34 cm" },
  { icon: Compass, label: "Time zone", value: "UTC +08:00", note: "Asia / Manila" },
  { icon: Languages, label: "Languages", value: "Filipino · English", note: "Bilingual" },
  { icon: Globe, label: "Works with", value: "SE Asia & global", note: "Remote-capable" },
];

const BIRTH = new Date(1998, 0, 28);

const ageToday = () => {
  const now = new Date();
  const had = now.getMonth() > BIRTH.getMonth() || (now.getMonth() === BIRTH.getMonth() && now.getDate() >= BIRTH.getDate());
  return now.getFullYear() - BIRTH.getFullYear() - (had ? 0 : 1);
};

const certifications = [
  "Full-stack dev",
  "AI & automation",
  "Virtual assistant",
  "Graphics & video",
  "Digital marketing",
  "Cloud & APIs",
];

/** A stamped field on the manifest: tiny label over a set value. */
const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <dt className="font-tele text-xs tracking-[0.16em] uppercase text-[hsl(var(--void-ink))]/45">{label}</dt>
    <dd className="font-tele text-sm sm:text-base font-medium leading-tight mt-1 whitespace-nowrap">{value}</dd>
  </div>
);

/**
 * CREW — who is on board.
 *
 * The manifest is a single machined plate: portrait behind a porthole,
 * name set in the mission face, every printed field, and the flight
 * certifications stamped along the base.
 */
const SubjectProfileSection = () => {
  const age = ageToday();

  return (
    <section
      id="subject-profile"
      data-scene="Crew"
      data-coord="Stage 02 · Manifest"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 survey-grid [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_72%)]"
      />

      <div className="gutter relative">
        <SectionHeading stage="02" kicker="Crew manifest" title="One name on the" accent="roster">
          Filipino engineer, born in Manila and now working from Cavite, Philippines — set up to work remotely
          with teams anywhere in the world.
        </SectionHeading>

        {/* THE MANIFEST PLATE */}
        <div className="relative mx-auto max-w-6xl mb-20">
          <div
            aria-hidden
            className="absolute -inset-8 sm:-inset-14 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, hsl(var(--gold) / calc(0.28 * var(--glow))), transparent 65%), radial-gradient(ellipse at 80% 70%, hsl(var(--signal) / calc(0.2 * var(--glow))), transparent 65%)",
            }}
          />

          <motion.article
            aria-label="Crew manifest for Ivan Tumacay"
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="slab slab-seams relative flex flex-col overflow-hidden"
          >
            {/* Header band */}
            <header className="relative z-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 sm:px-10 py-4 border-b border-[hsl(var(--beam-gold)/0.2)]">
              <div className="flex items-baseline gap-4 min-w-0">
                <span className="plate text-2xl sm:text-3xl tracking-[0.04em]">Crew manifest</span>
                <span className="hidden md:inline font-tele text-xs tracking-[0.3em] uppercase text-[hsl(var(--void-ink))]/50">
                  Mission 001
                </span>
              </div>
              <div className="text-right">
                <div className="font-tele text-xs tracking-[0.24em] uppercase text-[hsl(var(--void-ink))]/50">
                  Designation
                </div>
                <div className="font-tele text-lg sm:text-xl font-medium tracking-[0.14em] tabular-nums text-[hsl(var(--beam-gold))]">
                  IT-2026-0001
                </div>
              </div>
            </header>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)] gap-8 xl:gap-12 px-6 sm:px-10 py-8">
              {/* Porthole */}
              <div className="flex flex-col items-center md:items-stretch">
                <div className="relative w-full max-w-[240px] md:max-w-none aspect-[3/4] overflow-hidden border border-[hsl(var(--beam-gold)/0.3)]">
                  <img
                    src={ivanPortrait}
                    alt="Ivan Tumacay"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.15] brightness-90"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-color"
                    style={{
                      background:
                        "linear-gradient(160deg, hsl(var(--beam-signal) / 0.6) 0%, transparent 45%, hsl(var(--beam-gold) / 0.7) 100%)",
                    }}
                  />
                  <div aria-hidden className="absolute inset-0 noise opacity-40" />
                  {/* corner registration ticks */}
                  {[
                    "top-0 left-0 border-t border-l",
                    "top-0 right-0 border-t border-r",
                    "bottom-0 left-0 border-b border-l",
                    "bottom-0 right-0 border-b border-r",
                  ].map((pos) => (
                    <span
                      key={pos}
                      aria-hidden
                      className={`absolute w-5 h-5 border-[hsl(var(--beam-gold))] ${pos}`}
                    />
                  ))}
                </div>
                <div className="w-full max-w-[240px] md:max-w-none mt-4 pb-1 border-b border-[hsl(var(--beam-gold)/0.35)]">
                  <span className="block font-body italic text-2xl leading-tight">Ivan Tumacay</span>
                </div>
                <span className="font-tele text-xs tracking-[0.2em] uppercase text-[hsl(var(--void-ink))]/45 mt-2 self-start">
                  Signature of holder
                </span>
              </div>

              {/* Printed record */}
              <div className="min-w-0 flex flex-col justify-between gap-7">
                <div>
                  <div className="font-tele text-xs tracking-[0.24em] uppercase text-[hsl(var(--void-ink))]/45">
                    Name of crew member
                  </div>
                  <h3 className="plate text-4xl sm:text-5xl xl:text-6xl leading-none mt-2">
                    Tumacay, <span className="text-[hsl(var(--beam-gold))]">Ivan</span>
                  </h3>
                </div>

                <dl className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4 py-5 border-y border-[hsl(var(--beam-gold)/0.18)]">
                  <Field label="Date of birth" value="28 Jan 1998" />
                  <Field label="Age" value={`${age} years`} />
                  <Field label="Sex" value="Male" />
                  <Field label="Height" value={`5'11" · 180 cm`} />
                  <Field label="Hair / Eyes" value="Black / Brown" />
                  <Field label="Nationality" value="Filipino" />
                  <Field label="Place of birth" value="Manila, PH" />
                  <Field label="Languages" value="FIL · ENG" />
                  <Field label="Station" value="Cavite, PH" />
                  <Field label="Time zone" value="UTC +08:00" />
                  <Field label="Time in service" value="~10 years" />
                  <Field label="Rating" value="All-rounder" />
                </dl>

                <div>
                  <div className="font-tele text-xs tracking-[0.24em] uppercase text-[hsl(var(--void-ink))]/45 mb-3">
                    Certifications · conditions: remote, worldwide
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {certifications.map((c, i) => (
                      <motion.li
                        key={c}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
                        className="font-tele text-xs sm:text-sm uppercase tracking-[0.1em] px-3 py-1.5 border border-[hsl(var(--beam-gold)/0.45)] text-[hsl(var(--void-ink))]/90"
                      >
                        {c}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Clearance band */}
            <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 py-4 bg-[hsl(var(--beam-gold))] text-[hsl(var(--slab-ink))]">
              <span className="font-tele text-sm sm:text-base font-semibold tracking-[0.2em] uppercase">
                Flight status · cleared for launch
              </span>
              <span className="flex items-center gap-4">
                <span className="font-tele text-sm font-medium tracking-[0.16em] uppercase">Certified to build</span>
                <span
                  aria-hidden
                  className="hidden sm:block h-7 w-40 opacity-85"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, hsl(var(--slab-ink)) 0 2px, transparent 2px 4px, hsl(var(--slab-ink)) 4px 7px, transparent 7px 9px, hsl(var(--slab-ink)) 9px 10px, transparent 10px 13px)",
                  }}
                />
              </span>
            </footer>
          </motion.article>
        </div>

        {/* Station data */}
        <div className="panel overflow-hidden">
          <ScanSweep />
          <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-rule/10">
            <span className="tele-label">Station data</span>
            <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">IT-2026-0001</span>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {identifiers.map(({ icon: Icon, label, value, note }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-start gap-4 px-5 sm:px-7 py-6 border-b border-r border-rule/10 transition-colors hover:bg-gold/[0.05]"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-transit"
                />
                <Icon className="w-5 h-5 mt-1 text-gold shrink-0" aria-hidden />
                <div className="min-w-0 flex flex-col-reverse">
                  <dd>
                    <span className="block plate text-xl text-ice leading-tight">{value}</span>
                    <span className="block text-sm text-ice-dim mt-1.5">{note}</span>
                  </dd>
                  <dt className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim mb-2">{label}</dt>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default SubjectProfileSection;
