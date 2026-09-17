import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Github, Send, MessageCircle, FileText, ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { MaskLine } from "./transit/Reveal";

const channels = [
  { icon: Mail, label: "Email", value: "tumacayivan@gmail.com", href: "mailto:tumacayivan@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp & Viber", value: "+63 991 686 8942", href: "https://wa.me/639916868942" },
  { icon: Send, label: "Telegram", value: "t.me/tumacaygroup", href: "https://t.me/tumacaygroup" },
  { icon: Github, label: "GitHub", value: "github.com/tumacayivan", href: "https://github.com/tumacayivan" },
  { icon: MapPin, label: "Location", value: "Cavite, Philippines" },
];

const credits = [
  { role: "Designed & engineered by", name: "Ivan Tumacay" },
  { role: "Filmed on location in", name: "Cavite, Philippines" },
  { role: "Soundtrack", name: "Six Days — DJ Shadow feat. Mos Def" },
  { role: "Inspired by", name: "Deep-space mission photography and orbital mechanics" },
];

/** Light time home, growing with the transit. A gauge, not a promise. */
const SignalDelay = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t0 = Date.now();
    const write = () => {
      const seconds = Math.min(5999, Math.floor((Date.now() - t0) / 4000) + 42);
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      if (el.current) el.current.textContent = `${m}:${s}`;
    };
    write();
    const id = setInterval(write, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span ref={el} className="font-tele text-2xl sm:text-3xl text-gold tabular-nums">
      00:42
    </span>
  );
};

/**
 * TRANSMISSION — the last thing the mission does is call home.
 *
 * A delay readout, then the real channels: every one of them goes
 * straight to Ivan.
 */
const FooterSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bigX = useTransform(scrollYProgress, [0, 1], ["8%", "-6%"]);

  return (
    <footer
      id="contact"
      ref={ref}
      data-scene="Transmission"
      data-coord="Stage 10 · Call home"
      className="relative pt-24 sm:pt-32 overflow-hidden bg-deep-2"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 110%, hsl(var(--gold) / calc(0.14 * var(--glow))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <div className="flex items-center gap-4 mb-7">
          <span className="tele-label">Transmission · open for new projects</span>
          <span aria-hidden className="h-px flex-1 max-w-24 bg-rule/15" />
        </div>

        <h2 className="plate text-[15vw] sm:text-[11vw] lg:text-[8vw] text-ice mb-12">
          <MaskLine>{"Send a "}</MaskLine>
          <MaskLine delay={0.16}>
            <span className="lit">message home</span>
          </MaskLine>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start mb-24">
          <div>
            <p className="text-xl sm:text-2xl leading-relaxed text-ice-dim max-w-xl mb-9">
              Need a software engineer, a virtual assistant or someone to run your digital operations? Send a
              message — replies usually land within 24 hours.
            </p>

            <div className="instrument inline-flex flex-wrap items-center gap-x-10 gap-y-4 px-6 py-5 mb-10">
              <div>
                <div className="font-tele text-xs tracking-[0.22em] uppercase text-ice-dim mb-2">
                  One-way light time
                </div>
                <SignalDelay />
              </div>
              <div>
                <div className="font-tele text-xs tracking-[0.22em] uppercase text-ice-dim mb-2">Reply window</div>
                <span className="font-tele text-2xl sm:text-3xl text-ice">24 h</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:tumacayivan@gmail.com" className="btn-primary !py-4 !px-8 !text-sm">
                <span className="flex items-center gap-2">
                  Email Ivan <ArrowUpRight className="w-5 h-5" aria-hidden />
                </span>
              </a>
              <a
                href="/Ivan-Tumacay-Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet !py-4 !px-8 !text-sm"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-5 h-5" aria-hidden /> View resume
                </span>
              </a>
            </div>
          </div>

          <ul className="border-t border-rule/10">
            {channels.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <Icon className="w-5 h-5 text-gold shrink-0" aria-hidden />
                  <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim w-40 shrink-0 hidden sm:block">
                    {label}
                  </span>
                  <span className="font-tele text-base sm:text-lg text-ice truncate">{value}</span>
                  {href && (
                    <ArrowUpRight className="w-5 h-5 ml-auto shrink-0 text-ice-dim group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" aria-hidden />
                  )}
                </>
              );
              return (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-rule/10"
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label}: ${value}`}
                      className="group flex items-center gap-4 py-5 hover:pl-3 transition-all duration-500 ease-transit"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-5">{inner}</div>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* End credits */}
        <div className="border-t border-rule/10 pt-14 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {credits.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-tele text-xs tracking-[0.22em] uppercase text-ice-dim mb-3">{c.role}</div>
              <div className="font-tele text-sm sm:text-base font-medium uppercase tracking-[0.06em] text-ice leading-snug">
                {c.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The name, carried past the window one last time */}
      <div aria-hidden className="relative select-none pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: bigX }}
          className="plate hollow whitespace-nowrap text-[22vw] leading-[0.82] translate-y-[10%]"
        >
          Ivan Tumacay
        </motion.div>
      </div>

      <div className="relative gutter py-6 border-t border-rule/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-deep-2">
        <p className="font-tele text-xs tracking-[0.16em] uppercase text-ice-dim text-center sm:text-left">
          © {new Date().getFullYear()} Ivan Tumacay · Software engineer &amp; digital operations specialist
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 font-tele text-xs font-medium tracking-[0.2em] uppercase text-ice hover:text-gold transition-colors"
        >
          Return to departure <ArrowUp className="w-4 h-4" aria-hidden />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
