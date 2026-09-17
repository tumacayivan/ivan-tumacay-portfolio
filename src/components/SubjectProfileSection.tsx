import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Cake, Ruler, Globe } from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";
import SectionHeading from "./drift/SectionHeading";
import { LiverySweep } from "./drift/Reveal";

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

const endorsements = ["Full-stack dev", "AI & automation", "Virtual assistant", "Graphics & video", "Digital marketing", "Cloud & APIs"];

/** Printed field on the licence: tiny label over bold value. */
const Field = ({ label, value, className = "" }: { label: string; value: string; className?: string }) => (
  <div className={`min-w-0 ${className}`}>
    <dt className="font-hud text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase opacity-55">{label}</dt>
    <dd className="font-hud text-base sm:text-lg font-bold leading-tight mt-0.5 whitespace-nowrap">{value}</dd>
  </div>
);

const SubjectProfileSection = () => {
  const age = ageToday();

  return (
    <section
      id="subject-profile"
      data-scene="Driver"
      data-kanji="プロフィール"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-floor opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />

      <div className="gutter relative">
        <SectionHeading kanji="プロフィール" kicker="Driver profile" title="Behind the" accent="wheel">
          Filipino engineer, born in Manila and now working from Cavite, Philippines — set up to work remotely
          with teams anywhere in the world.
        </SectionHeading>

        {/* DRIVER'S LICENCE — the centrepiece */}
        <div className="relative mx-auto max-w-6xl mb-16 [perspective:1600px]">
          {/* Neon glow pooling under the card */}
          <div
            aria-hidden
            className="absolute -inset-6 sm:-inset-10 rounded-[40px] blur-3xl opacity-60"
            style={{ background: "linear-gradient(120deg, hsl(var(--hud) / calc(0.35 * var(--glow-strength))), hsl(var(--drift) / calc(0.3 * var(--glow-strength))), hsl(var(--sign) / calc(0.35 * var(--glow-strength))))" }}
          />

          <motion.article
            aria-label="Driver licence of Ivan Tumacay"
            initial={{ opacity: 0, rotateX: 28, rotateZ: -4, y: 80, scale: 0.92 }}
            whileInView={{ opacity: 1, rotateX: 0, rotateZ: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
            className="relative flex flex-col xl:aspect-[1.586/1] overflow-hidden rounded-2xl sm:rounded-3xl text-[hsl(var(--card-ink))] shadow-[0_50px_120px_-40px_hsl(var(--shadow))] ring-1 ring-black/10 bg-[linear-gradient(135deg,hsl(160_40%_92%),hsl(45_60%_91%)_50%,hsl(200_55%_90%))]"
          >
            {/* Security guilloche + holographic sheen */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "repeating-radial-gradient(circle at 70% 40%, hsl(var(--card-ink)) 0 1px, transparent 1px 9px)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-50 mix-blend-overlay animate-[sheen_6s_ease-in-out_infinite]"
              style={{ background: "linear-gradient(115deg, transparent 30%, hsl(184 90% 70%) 45%, hsl(336 90% 75%) 55%, transparent 70%)", backgroundSize: "250% 100%" }}
            />
            <div aria-hidden className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-[16rem] leading-none opacity-[0.05] select-none hidden lg:block">
              峠
            </div>

            {/* Header band */}
            <header className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 sm:px-10 py-3 sm:py-4 bg-[hsl(var(--card-ink))] text-[hsl(45_60%_92%)]">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl sm:text-4xl tracking-[0.12em]">運転免許証</span>
                <span className="hidden md:inline font-hud text-xs font-bold tracking-[0.28em] uppercase opacity-70">
                  Driver licence
                </span>
              </div>
              <div className="text-right">
                <div className="font-hud text-[11px] font-bold tracking-[0.24em] uppercase opacity-60">Licence no.</div>
                <div className="font-hud text-lg sm:text-2xl font-bold tracking-[0.14em] tabular-nums text-[hsl(var(--neon-drift))]">
                  IT-2026-0001
                </div>
              </div>
            </header>

            <div className="relative flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr] gap-6 xl:gap-10 px-6 sm:px-10 py-6 xl:py-7">
              {/* Photo column */}
              <div className="flex flex-col items-center md:items-stretch min-h-0">
                <div className="relative w-full max-w-[240px] md:max-w-none aspect-[3/4] overflow-hidden rounded-lg border-2 border-[hsl(var(--card-ink)/0.3)] bg-white shadow-[0_20px_40px_-20px_hsl(var(--card-ink)/0.6)]">
                  <img
                    src={johnDoeAvatar}
                    alt="Ivan Tumacay"
                    className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-110"
                  />
                  {/* Hologram seal over the photo corner */}
                  <div
                    aria-hidden
                    className="absolute -right-5 -bottom-5 w-20 h-20 rounded-full opacity-70 mix-blend-screen animate-[sheen_5s_ease-in-out_infinite]"
                    style={{ background: "conic-gradient(from 0deg, hsl(184 90% 65%), hsl(336 90% 70%), hsl(45 95% 65%), hsl(184 90% 65%))", backgroundSize: "200% 100%" }}
                  />
                </div>
                <div className="w-full max-w-[240px] md:max-w-none mt-3 border-b-2 border-[hsl(var(--card-ink)/0.35)]">
                  <span className="block font-body italic text-2xl -skew-x-12 tracking-tight leading-tight">Ivan Tumacay</span>
                </div>
                <span className="font-hud text-[10px] font-bold tracking-[0.2em] uppercase opacity-55 mt-1 self-start">
                  Holder's signature
                </span>
              </div>

              {/* Details column */}
              <div className="min-w-0 flex flex-col justify-between gap-5">
                <div>
                  <div className="font-hud text-[11px] font-bold tracking-[0.2em] uppercase opacity-55">Name · 氏名</div>
                  <h3 className="font-display text-4xl sm:text-5xl xl:text-[3.4rem] uppercase leading-none mt-1 xl:whitespace-nowrap">
                    Tumacay, <span className="text-[hsl(var(--licence-accent))]">Ivan</span>
                  </h3>
                  <div className="font-display text-lg tracking-[0.1em] opacity-70 mt-1.5">イバン・トゥマカイ</div>
                </div>

                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-3.5 py-4 border-y border-[hsl(var(--card-ink)/0.15)]">
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
                  <Field label="Class" value="All-rounder" />
                </dl>

                <div>
                  <div className="font-hud text-[11px] font-bold tracking-[0.2em] uppercase opacity-55 mb-2">
                    Endorsements · Conditions: remote, worldwide
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {endorsements.map((e, i) => (
                      <motion.li
                        key={e}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.07 }}
                        className="font-hud text-xs sm:text-sm font-bold uppercase tracking-[0.04em] px-2.5 py-1 border-2 border-[hsl(var(--card-ink)/0.8)] -skew-x-12"
                      >
                        <span className="inline-block skew-x-12">{e}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gold band — the "excellent driver" licence */}
            <footer className="relative flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 py-3 bg-[linear-gradient(90deg,hsl(43_85%_52%),hsl(48_95%_68%),hsl(40_80%_48%))] text-[hsl(var(--card-ink))]">
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl sm:text-3xl">優良</span>
                <span className="font-hud text-sm sm:text-base font-bold tracking-[0.16em] uppercase">Gold class · Excellent record</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-hud text-sm font-bold tracking-[0.14em] uppercase">Licensed to build</span>
                <span
                  aria-hidden
                  className="hidden sm:block h-8 w-40 opacity-80"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, hsl(var(--card-ink)) 0 2px, transparent 2px 4px, hsl(var(--card-ink)) 4px 7px, transparent 7px 9px, hsl(var(--card-ink)) 9px 10px, transparent 10px 13px)",
                  }}
                />
              </div>
            </footer>
          </motion.article>
        </div>

        {/* Spec sheet */}
        <div className="panel overflow-hidden">
          <LiverySweep />
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-line/10">
            <span className="hud-label">Spec sheet</span>
            <span className="font-hud text-xs tracking-[0.2em] text-ink-dim uppercase">IT-26 · Driver 01</span>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {identifiers.map(({ icon: Icon, label, value, note }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex items-start gap-4 px-5 sm:px-7 py-5 border-b border-r border-line/10 hover:bg-drift/[0.06] transition-colors"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-drift scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <Icon className="w-5 h-5 mt-1 text-hud shrink-0" />
                <div className="min-w-0 flex flex-col-reverse">
                  <dd>
                    <span className="block font-display text-xl uppercase text-ink leading-tight">{value}</span>
                    <span className="block text-sm text-ink-dim mt-1">{note}</span>
                  </dd>
                  <dt className="hud-label !text-ink-dim mb-1.5">{label}</dt>
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
