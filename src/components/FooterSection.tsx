import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Github, Send, MessageCircle, FileText, ArrowUp } from "lucide-react";
import { useRef } from "react";
import { MaskLine } from "./drift/Reveal";

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
  { role: "Inspired by", name: "Tokyo street racing & mountain-pass downhill culture" },
];

const FooterSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bigX = useTransform(scrollYProgress, [0, 1], ["12%", "-8%"]);

  return (
    <footer
      id="contact"
      ref={ref}
      data-scene="Contact"
      data-kanji="連絡"
      className="relative pt-24 sm:pt-32 overflow-hidden bg-asphalt-2"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 livery" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(var(--drift) / calc(0.18 * var(--glow-strength))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="neon-kanji text-xl" aria-hidden>連絡</span>
          <span className="hud-label">Contact · open for new projects</span>
        </div>

        <h2 className="display-xl text-[15vw] sm:text-[11vw] lg:text-[8.5vw] text-ink mb-10">
          <MaskLine>Let's build</MaskLine>
          <MaskLine delay={0.12} className="pl-[0.35em] -ml-[0.35em]">
            <span className="lean speed-trail">something fast</span>
          </MaskLine>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-end mb-24">
          <div>
            <p className="text-xl sm:text-2xl leading-relaxed text-ink-dim max-w-xl mb-8">
              Need a software engineer, a virtual assistant or someone to run your digital operations? Send a
              message — replies usually land within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:tumacayivan@gmail.com" className="btn-drift !py-4 !px-8 !text-base">
                <span className="flex items-center gap-2">
                  Email Ivan <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
              <a href="/Ivan-Tumacay-Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-4 !px-8 !text-base">
                <span className="flex items-center gap-2">
                  <FileText className="w-5 h-5" /> View resume
                </span>
              </a>
            </div>
          </div>

          <ul className="border-t border-line/10">
            {channels.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <Icon className="w-5 h-5 text-hud shrink-0" />
                  <span className="hud-label !text-ink-dim w-36 shrink-0 hidden sm:block">{label}</span>
                  <span className="font-hud text-lg font-semibold text-ink truncate">{value}</span>
                  {href && (
                    <ArrowUpRight className="w-5 h-5 ml-auto shrink-0 text-ink-dim group-hover:text-drift group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  )}
                </>
              );
              return (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line/10"
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label}: ${value}`}
                      className="group flex items-center gap-4 py-4 hover:pl-3 transition-all"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{inner}</div>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* End credits */}
        <div className="border-t border-line/10 pt-12 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {credits.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hud-label !text-ink-dim mb-2">{c.role}</div>
              <div className="font-hud text-lg font-bold uppercase tracking-[0.04em] text-ink">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing title rolls past */}
      <div aria-hidden className="relative select-none pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: bigX }}
          className="display-xl whitespace-nowrap text-[22vw] leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_hsl(var(--line)/0.18)] translate-y-[12%]"
        >
          Ivan Tumacay 東京
        </motion.div>
      </div>

      <div className="relative gutter py-5 border-t border-line/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-asphalt-2">
        <p className="font-hud text-xs tracking-[0.18em] uppercase text-ink-dim">
          © {new Date().getFullYear()} Ivan Tumacay · Software engineer &amp; digital operations specialist
        </p>
        <a href="#top" className="flex items-center gap-2 font-hud text-xs font-bold tracking-[0.2em] uppercase text-ink hover:text-drift transition-colors">
          Back to the start line <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
