import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Cake, Ruler, Globe } from "lucide-react";
import ivanPortrait from "@/assets/john-doe-avatar.png";
import SectionHeading from "./reaction/SectionHeading";
import { LightSweep } from "./reaction/Reveal";

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
  const had =
    now.getMonth() > BIRTH.getMonth() || (now.getMonth() === BIRTH.getMonth() && now.getDate() >= BIRTH.getDate());
  return now.getFullYear() - BIRTH.getFullYear() - (had ? 0 : 1);
};

const cleared = [
  "Full-stack dev",
  "AI & automation",
  "Virtual assistant",
  "Graphics & video",
  "Digital marketing",
  "Cloud & APIs",
];

/** A typed field on the file: tiny label over the entry. */
const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <dt className="font-doc text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase opacity-55">
      {label}
    </dt>
    <dd className="font-doc text-sm sm:text-base font-semibold leading-tight mt-0.5 whitespace-nowrap">{value}</dd>
  </div>
);

const SubjectProfileSection = () => {
  const age = ageToday();

  return (
    <section
      id="subject-profile"
      data-scene="Personnel file"
      data-code="Part I · 02"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 graph-paper [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_72%)]"
      />

      <div className="gutter relative">
        <SectionHeading code="Doc · 02" kicker="Personnel file" title="The" accent="subject">
          Filipino engineer, born in Manila and now working from Cavite, Philippines — set up to work remotely
          with teams anywhere in the world.
        </SectionHeading>

        {/* THE FILE — paper under a lamp, the same in both grades */}
        <div className="relative mx-auto max-w-6xl mb-16 [perspective:1600px]">
          <div
            aria-hidden
            className="absolute -inset-6 sm:-inset-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--ember) / calc(0.3 * var(--bloom))), transparent 70%)",
            }}
          />

          <motion.article
            aria-label="Personnel file for Ivan Tumacay"
            initial={{ opacity: 0, rotateX: 22, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="paper relative flex flex-col xl:aspect-[1.7/1] overflow-hidden shadow-[0_50px_120px_-40px_hsl(var(--shadow))] ring-1 ring-black/20"
          >
            {/* Fibres in the paper */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(48deg, hsl(var(--doc-ink)) 0 1px, transparent 1px 7px), repeating-linear-gradient(-42deg, hsl(var(--doc-ink)) 0 1px, transparent 1px 11px)",
              }}
            />

            {/* Header band */}
            <header className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 sm:px-10 py-3.5 bg-[hsl(var(--doc-ink))] text-[hsl(var(--doc-paper))]">
              <div className="flex items-baseline gap-4 min-w-0">
                <span className="font-display text-2xl sm:text-3xl tracking-[0.06em] uppercase">
                  Personnel security file
                </span>
                <span className="hidden md:inline font-doc text-[11px] font-semibold tracking-[0.26em] uppercase opacity-60">
                  Category A
                </span>
              </div>
              <div className="text-right">
                <div className="font-doc text-[10px] font-semibold tracking-[0.24em] uppercase opacity-60">
                  File no.
                </div>
                <div className="font-doc text-lg sm:text-xl font-bold tracking-[0.12em] tabular-nums text-[hsl(var(--doc-accent))]">
                  IT-2026-0001
                </div>
              </div>
            </header>

            <div className="relative flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[210px_1fr] xl:grid-cols-[240px_1fr] gap-6 xl:gap-10 px-6 sm:px-10 py-6 xl:py-8">
              {/* Photograph */}
              <div className="flex flex-col items-center md:items-stretch min-h-0">
                <div className="relative w-full max-w-[220px] md:max-w-none aspect-[3/4] overflow-hidden border border-[hsl(var(--doc-ink)/0.45)] bg-white">
                  <img
                    src={ivanPortrait}
                    alt="Ivan Tumacay"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                  />
                  {/* Corner staple */}
                  <span
                    aria-hidden
                    className="absolute -left-px -top-px w-9 h-9 border-r border-b border-[hsl(var(--doc-ink)/0.5)] bg-[hsl(var(--doc-paper-2))]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  />
                </div>
                <div className="w-full max-w-[220px] md:max-w-none mt-3 border-b border-[hsl(var(--doc-ink)/0.45)]">
                  <span className="block font-body italic text-2xl tracking-tight leading-tight">Ivan Tumacay</span>
                </div>
                <span className="font-doc text-[10px] font-semibold tracking-[0.2em] uppercase opacity-55 mt-1 self-start">
                  Signature of subject
                </span>
              </div>

              {/* Particulars */}
              <div className="min-w-0 flex flex-col justify-between gap-5">
                <div>
                  <div className="font-doc text-[10px] font-semibold tracking-[0.2em] uppercase opacity-55">
                    Name of subject
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl xl:text-[3.6rem] uppercase leading-none mt-1 xl:whitespace-nowrap">
                    Tumacay, <span className="text-[hsl(var(--doc-accent))]">Ivan</span>
                  </h3>
                </div>

                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-3.5 py-4 border-y border-[hsl(var(--doc-ink)/0.2)]">
                  <Field label="Date of birth" value="28 Jan 1998" />
                  <Field label="Age" value={`${age} years`} />
                  <Field label="Sex" value="Male" />
                  <Field label="Height" value={`5'11" · 180 cm`} />
                  <Field label="Hair / Eyes" value="Black / Brown" />
                  <Field label="Nationality" value="Filipino" />
                  <Field label="Place of birth" value="Manila, PH" />
                  <Field label="Languages" value="FIL · ENG" />
                  <Field label="Address" value="Cavite, PH" />
                  <Field label="Time zone" value="UTC +08:00" />
                  <Field label="Experience" value="~10 years" />
                  <Field label="Category" value="All-rounder" />
                </dl>

                <div>
                  <div className="font-doc text-[10px] font-semibold tracking-[0.2em] uppercase opacity-55 mb-2">
                    Cleared for · conditions: remote, worldwide
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {cleared.map((e, i) => (
                      <motion.li
                        key={e}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.07 }}
                        className="font-doc text-xs sm:text-sm font-semibold uppercase tracking-[0.06em] px-2.5 py-1 border border-[hsl(var(--doc-ink)/0.8)]"
                      >
                        {e}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stamped and filed */}
            <footer className="relative flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 py-4 border-t border-[hsl(var(--doc-ink)/0.25)] bg-[hsl(var(--doc-paper-2))]">
              <span className="stamp text-[hsl(var(--doc-accent))]">Cleared · no restrictions</span>
              <span className="font-doc text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase opacity-70">
                Reviewed &amp; held current
              </span>
            </footer>
          </motion.article>
        </div>

        {/* Identifying particulars */}
        <div className="plate overflow-hidden">
          <LightSweep />
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-line/15">
            <span className="slug">Identifying particulars</span>
            <span className="font-doc text-xs tracking-[0.2em] text-ink-dim uppercase">IT-01 · sheet 2</span>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {identifiers.map(({ icon: Icon, label, value, note }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-start gap-4 px-5 sm:px-7 py-5 border-b border-r border-line/15 hover:bg-ember/[0.07] transition-colors"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-ember scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <Icon className="w-5 h-5 mt-1 text-ember shrink-0" />
                <div className="min-w-0 flex flex-col-reverse">
                  <dd>
                    <span className="block font-display text-2xl uppercase text-ink leading-tight">{value}</span>
                    <span className="block text-sm text-ink-dim mt-1">{note}</span>
                  </dd>
                  <dt className="slug slug-dim mb-1.5">{label}</dt>
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
