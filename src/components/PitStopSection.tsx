import { motion } from "framer-motion";
import { MessageSquare, Hammer, Gauge, KeyRound } from "lucide-react";
import SectionHeading from "./drift/SectionHeading";

/**
 * How working together goes, as a pit stop: four stops, in order. Each is
 * what actually happens on a job — no promises about timings that are not
 * mine to make.
 */
const steps = [
  {
    icon: MessageSquare,
    label: "Brief",
    title: "You tell me what needs to exist",
    body: "A call or a message. What the thing has to do, who it is for, what already exists, and what would count as done.",
  },
  {
    icon: Hammer,
    label: "Build",
    title: "I build it where you can watch",
    body: "You get a link that updates as the work lands, so you are never waiting on a reveal and can redirect early.",
  },
  {
    icon: Gauge,
    label: "Test",
    title: "We run it before anyone else does",
    body: "Real content, real devices, real edge cases. Anything that breaks gets fixed before it reaches your customers.",
  },
  {
    icon: KeyRound,
    label: "Handover",
    title: "You get the keys",
    body: "Deployed, with the accounts, the code and a walkthrough of how to run it — yours to keep, whoever maintains it next.",
  },
];

const PitStopSection = () => (
  <section id="process" data-scene="Pit stop" data-kanji="整備" className="relative py-24 sm:py-32 overflow-hidden bg-asphalt-2">
    <div aria-hidden className="absolute inset-x-0 top-0 h-1 livery opacity-70" />

    <div className="gutter relative">
      <SectionHeading kanji="整備" kicker="How it works" title="Four stops in the" accent="pit lane" meta="Brief to handover">
        Every job runs the same way, whether it is a landing page or an enterprise system. You always know which
        stop we are on.
      </SectionHeading>

      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-line/10 border border-line/10">
        {steps.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-asphalt-2 p-7 sm:p-8 overflow-hidden"
          >
            {/* The crew light comes on as each stop lands */}
            <motion.span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-hud via-drift to-sign origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="flex items-center justify-between mb-8">
              <step.icon className="w-6 h-6 text-hud group-hover:text-drift transition-colors" />
              <span className="font-display text-5xl leading-none text-line/15 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="hud-label mb-2">{step.label}</div>
            <h3 className="font-hud text-xl font-bold uppercase leading-tight text-ink mb-3">{step.title}</h3>
            <p className="text-ink-dim leading-relaxed">{step.body}</p>
          </motion.li>
        ))}
      </ol>

      <p className="mt-8 text-ink-dim">
        Based in Cavite, Philippines (UTC+8) and working with teams anywhere.{" "}
        <a href="#contact" className="text-drift underline underline-offset-4 decoration-drift/50 hover:decoration-drift">
          Start with a message
        </a>{" "}
        — replies usually land within 24 hours.
      </p>
    </div>
  </section>
);

export default PitStopSection;
