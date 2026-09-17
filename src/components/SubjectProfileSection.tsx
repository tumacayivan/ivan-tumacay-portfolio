import { motion } from "framer-motion";
import { MapPin, Flag, Compass, Radar, Languages, Cake, Ruler, Globe, Clock } from "lucide-react";
import johnDoeAvatar from "@/assets/john-doe-avatar.png";
import { useEffect, useState } from "react";
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

const clock = (timeZone?: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

/** Live clocks for Cavite and the visitor, plus how far apart they are. */
const useClocks = () => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(id);
  }, []);
  const manilaOffset = 8 * 60;
  const visitorOffset = -new Date(now).getTimezoneOffset();
  const diff = (manilaOffset - visitorOffset) / 60;
  const offsetLabel =
    diff === 0
      ? "Same time zone as you"
      : `Cavite is ${Math.abs(diff)} ${Math.abs(diff) === 1 ? "hour" : "hours"} ${diff > 0 ? "ahead of" : "behind"} you`;
  return { time: clock("Asia/Manila"), visitorTime: clock(), offsetLabel };
};

const SubjectProfileSection = () => {
  const { time, visitorTime, offsetLabel } = useClocks();

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

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6">
          {/* Spec table */}
          <div className="panel overflow-hidden">
            <LiverySweep />
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-line/10">
              <span className="hud-label">Spec sheet</span>
              <span className="font-hud text-xs tracking-[0.2em] text-ink-dim uppercase">IT-26 · Driver 01</span>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              {identifiers.map(({ icon: Icon, label, value, note }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex items-start gap-4 px-5 sm:px-7 py-5 border-b border-line/10 sm:[&:nth-child(odd)]:border-r hover:bg-drift/[0.06] transition-colors"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-drift scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <Icon className="w-5 h-5 mt-1 text-hud shrink-0" />
                  <div className="min-w-0 flex flex-col-reverse">
                    <dd>
                      <span className="block font-display text-xl sm:text-2xl uppercase text-ink leading-tight">{value}</span>
                      <span className="block text-sm text-ink-dim mt-1">{note}</span>
                    </dd>
                    <dt className="hud-label !text-ink-dim mb-1.5">{label}</dt>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>

          {/* Driver's licence + time zone */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, rotateY: -25, rotateZ: -3, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, rotateZ: -1.5, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotateZ: 0, scale: 1.02 }}
              className="relative [perspective:1200px]"
            >
              <div className="relative overflow-hidden rounded-xl p-5 sm:p-6 text-[hsl(246_30%_12%)] shadow-[0_40px_80px_-30px_hsl(var(--shadow))] bg-[linear-gradient(135deg,hsl(160_40%_92%),hsl(45_60%_90%)_55%,hsl(200_50%_90%))]">
                {/* Holographic sheen */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 mix-blend-overlay animate-[sheen_6s_ease-in-out_infinite]"
                  style={{ background: "linear-gradient(115deg, transparent 30%, hsl(184 90% 70%) 45%, hsl(336 90% 75%) 55%, transparent 70%)", backgroundSize: "250% 100%" }}
                />
                <div className="relative flex items-center justify-between border-b border-[hsl(246_30%_12%/0.2)] pb-2 mb-4">
                  <span className="font-display text-lg sm:text-xl tracking-[0.2em]">運転免許証</span>
                  <span className="font-hud text-[10px] font-bold tracking-[0.2em] uppercase">Driver licence · PH</span>
                </div>

                <div className="relative grid grid-cols-[96px_1fr] sm:grid-cols-[112px_1fr] gap-4 sm:gap-5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-[hsl(246_30%_12%/0.25)] bg-white">
                    <img src={johnDoeAvatar} alt="" className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-110" />
                  </div>
                  <dl className="font-hud text-sm leading-tight space-y-2 min-w-0">
                    <div>
                      <dt className="text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">Name</dt>
                      <dd className="font-display text-xl sm:text-2xl uppercase">Tumacay, Ivan</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <dt className="text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">Born</dt>
                        <dd className="font-bold">1998·01·28</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">Class</dt>
                        <dd className="font-bold">All-rounder</dd>
                      </div>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">Address</dt>
                      <dd className="font-bold truncate">Cavite, Philippines · 14.28°N 120.87°E</dd>
                    </div>
                  </dl>
                </div>

                <div className="relative mt-4 flex items-end justify-between gap-3">
                  <span className="font-hud text-[11px] font-bold tracking-[0.14em] uppercase px-2 py-1 bg-[hsl(20_90%_46%)] text-white -skew-x-12">
                    Licensed to build
                  </span>
                  <span className="font-hud text-xs font-bold tracking-[0.2em] tabular-nums opacity-70">No. IT-2026-0001</span>
                </div>
              </div>
            </motion.div>

            {/* Time zone strip: when can a client reach him? */}
            <div className="panel p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="hud-label">Time zones</span>
                <span className="flex items-center gap-2 font-hud text-xs tracking-[0.18em] uppercase text-ink">
                  <span className="w-2 h-2 rounded-full bg-hud animate-pulse" /> Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="hud-label !text-ink-dim flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Cavite, PH
                  </div>
                  <div className="font-display text-3xl sm:text-4xl text-drift tabular-nums leading-none mt-2">{time}</div>
                </div>
                <div>
                  <div className="hud-label !text-ink-dim">Your time</div>
                  <div className="font-display text-3xl sm:text-4xl text-ink tabular-nums leading-none mt-2">{visitorTime}</div>
                </div>
              </div>
              <p className="mt-4 pt-4 border-t border-line/10 text-sm text-ink-dim">
                {offsetLabel} · replies within 24h via email or GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectProfileSection;
