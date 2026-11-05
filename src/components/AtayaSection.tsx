import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Shirt, Layers, ShoppingBag, Ruler, BookOpen, Globe, Info } from "lucide-react";
import ataHero from "@/assets/ataya/ataya-01-hero.jpg";
import ataStory from "@/assets/ataya/ataya-02-story.jpg";
import ataCollection from "@/assets/ataya/ataya-03-collection.jpg";
import ataCategories from "@/assets/ataya/ataya-04-categories.jpg";
import ataLook from "@/assets/ataya/ataya-05-look.jpg";
import ataFounder from "@/assets/ataya/ataya-06-founder.jpg";
import ataMagazine from "@/assets/ataya/ataya-07-magazine.jpg";
import ataService from "@/assets/ataya/ataya-08-service.jpg";
import ScrollReveal from "./ScrollReveal";

const SITE_URL = "https://ataya.com.au/";

// Scenes captured from the live store. Everything said here comes from the
// site itself, so it stays a description of the store and not a results claim.
const exhibits = [
  { image: ataHero, title: "The store", caption: "Ataya Swimwear — beautiful swimwear should feel incredible to wear." },
  { image: ataStory, title: "The story", caption: "After more than 30 years designing swimwear, Natalie Hawkins created Ataya to put real expertise back at the centre." },
  { image: ataCollection, title: "The Lustrea collection", caption: "A featured collection with prices and colourways readable at a glance." },
  { image: ataCategories, title: "Shop by category", caption: "One piece, bikini tops and bikini bottoms, each one a full-bleed shot from the campaign." },
  { image: ataLook, title: "Shop the look", caption: "For anyone looking for more coverage: tap a hotspot on the photo to see the piece." },
  { image: ataFounder, title: "30 years", caption: "Natalie Hawkins designs every Ataya piece around one idea: a perfect fit." },
  { image: ataMagazine, title: "The magazine", caption: "The full shoot, styled like a Vogue magazine from the late 90s." },
  { image: ataService, title: "The service", caption: "Instagram, fast shipping, free returns, sustainability and support, closing out the page." },
];

const fileTags = [
  { label: "CLIENT", value: "ATAYA SWIMWEAR" },
  { label: "PLATFORM", value: "SHOPIFY" },
  { label: "HOME", value: "AVALON BEACH" },
  { label: "DESIGNER", value: "NATALIE HAWKINS" },
];

const stages = [
  { n: "01", icon: ShoppingBag, name: "Shop", tagline: "Six collections", body: "Classico, Cordette, Corte Bleu, Lustrea, Palm Springs and Pool Side 84, plus one pieces, bikini tops and bottoms." },
  { n: "02", icon: Ruler, name: "Fit", tagline: "Sizing up front", body: "A size chart and a Let's Talk Sizing page, one click from the main menu." },
  { n: "03", icon: BookOpen, name: "Story", tagline: "The brand behind it", body: "The Ataya Story and a full magazine shoot sit beside the products, not behind them." },
  { n: "04", icon: Globe, name: "Delivery", tagline: "Made to travel", body: "A delivery destination picker with local currencies, shipping to the US, UK, Europe and Asia." },
];

const terms = [
  { word: "Fit", say: "the one idea", meaning: "Natalie Hawkins designs every Ataya piece around a perfect fit." },
  { word: "Shipping", say: "fast", meaning: "All orders ship within 24 hours with express two-day shipping." },
  { word: "Returns", say: "free", meaning: "Not happy with the purchase? Free returns for 14 days." },
  { word: "Coverage", say: "if you want more", meaning: "A shop-the-look section with pieces like the reversible tie side pant and the V wired flared tankini." },
  { word: "Care", say: "& sustainability", meaning: "A dedicated page on caring for each piece and how Ataya actively contributes to sustainability." },
  { word: "Support", say: "world-class", meaning: "Fast, friendly support by email." },
];

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

const Corners = ({ size = "w-4 h-4" }: { size?: string }) => (
  <>
    <div className={`absolute -top-1 -left-1 ${size} border-l-2 border-t-2 border-ink`} />
    <div className={`absolute -top-1 -right-1 ${size} border-r-2 border-t-2 border-ink`} />
    <div className={`absolute -bottom-1 -left-1 ${size} border-l-2 border-b-2 border-ink`} />
    <div className={`absolute -bottom-1 -right-1 ${size} border-r-2 border-b-2 border-ink`} />
  </>
);

const SubHeading = ({ icon: Icon, title, meta }: { icon: typeof Layers; title: string; meta: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-ink" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">{title}</h3>
    <span className="flex-1 h-px border-t border-dashed-ink" />
    <span className="font-courier text-[13px] text-ink-brown tracking-widest uppercase">{meta}</span>
  </div>
);

const AtayaSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="ataya" className="relative py-20 sm:py-28 overflow-hidden bg-paper border-y-2 border-double border-ink paper-grain">
      <div className="absolute inset-0 tactical-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none flex items-start justify-end overflow-hidden">
        <div className="watermark text-[16.1vw] leading-none rotate-[4deg] -mr-6 mt-16">ATAYA</div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shirt className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                CLIENT FILE // ATAYA SWIMWEAR
              </span>
              <span className="hidden sm:inline font-courier text-[13px] text-ink-brown tracking-widest">
                AVALON BEACH, AUSTRALIA
              </span>
            </div>
            <p className="font-courier text-sm tracking-[0.35em] text-ink-brown mb-2 uppercase">
              Luxury Swimwear · Website Client
            </p>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight relative">
              ATAYA <span className="text-ink">SWIMWEAR</span>
              <span
                className="absolute -top-4 -right-2 sm:top-2 sm:right-8 stamp stamp-drop-hard font-blackops text-xl sm:text-3xl !p-2 !rotate-[8deg] hidden sm:inline-flex"
                style={{ animationDelay: "0.4s" }}
              >
                WEBSITE CLIENT
              </span>
            </h2>
          </div>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[13px] !p-1">CLIENT BRIEF</div>
            <p className="font-typewriter text-lg sm:text-xl text-ink leading-relaxed mt-2">
              The online store for Ataya, a luxury women's swimwear label from Avalon Beach, Australia. Designed by Natalie
              Hawkins after 30 years of hands-on swimwear design, and made for a perfect fit.
            </p>
          </div>
        </motion.div>

        {/* FILE TAGS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl">
          {fileTags.map((t, i) => (
            <div key={t.label} className="paper-card-cream px-4 py-3 relative">
              <div className="font-courier text-[12px] tracking-widest text-ink-brown">
                TAG-{pad(i + 1, 3)} · {t.label}
              </div>
              <div className="font-blackops text-xl sm:text-2xl text-ink tracking-tight">{t.value}</div>
            </div>
          ))}
        </div>

        {/* SCENE VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 mb-20">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-hot
            data-spy-label="OPEN ATAYA"
            className="group block relative paper-card-cream p-3 sm:p-4 card-lift"
          >
            <Corners />
            <div className="tape tape-yellow w-16 h-4 -top-2 left-10 rotate-[-4deg] z-10" />
            <div className="flex items-center justify-between gap-3 border-b-2 border-dashed-ink pb-2 mb-3">
              <span className="font-blackops text-[13px] sm:text-sm tracking-[0.25em] text-ink truncate">
                SCENE {pad(active + 1, 3)} / {pad(exhibits.length, 3)} · {exhibit.title.toUpperCase()}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 font-blackops text-[12px] tracking-widest text-ink shrink-0">
                <span className="status-pulse" /> LIVE SITE
              </span>
            </div>
            <div
              className="relative overflow-hidden border-2 border-ink aspect-[2.09/1] bg-paper-gray spotlight-paper"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={active}
                  src={exhibit.image}
                  alt={`Ataya Swimwear — ${exhibit.title}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 w-full h-full object-cover object-top photocopy group-hover:scale-[1.02] transition-transform duration-500"
                />
              </AnimatePresence>
              <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
              <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-[hsl(var(--paper))]" />
              <div className="absolute top-3 right-6 stamp !text-[11px] !p-1.5 !rotate-[-6deg] bg-[hsl(var(--paper)/0.7)]">
                LIVE STORE
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-14 h-14 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-[hsl(var(--paper))]" />
                </div>
                <span className="font-blackops text-base text-[hsl(var(--paper))] tracking-widest uppercase">OPEN ATAYA</span>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">
                FIELD NOTE {pad(active + 1)}
              </div>
              <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-3">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${ex.title}`}
                  data-spy-label={`SCENE ${pad(i + 1, 3)}`}
                  className={`relative overflow-hidden border-2 border-ink bg-paper p-1 transition-all ${
                    i === active ? "ring-2 ring-[hsl(var(--ink-charcoal))] ring-offset-2 ring-offset-[hsl(var(--paper))]" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top photocopy" />
                  <span className="absolute top-0 left-0 bg-ink text-[hsl(var(--paper))] font-courier text-[11px] font-bold tracking-widest px-1.5">
                    {pad(i + 1, 3)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <ScrollReveal as="h3" effect="ink-bleed" className="font-blackops text-3xl sm:text-5xl text-ink uppercase leading-[1] tracking-tight">
            Beautiful swimwear should feel <span className="underline decoration-2 underline-offset-4">incredible</span> to wear.
          </ScrollReveal>
          <div className="paper-card-cream p-4 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">THE LABEL</div>
            <p className="font-typewriter text-lg text-ink leading-relaxed mt-2">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European summer
              season.
            </p>
          </div>
        </div>

        {/* THE STORE */}
        <SubHeading icon={Layers} title="Inside the store" meta="Browse → bag" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="paper-card-cream p-5 paper-grain relative card-lift h-full">
                <div className="tape tape-yellow w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />
                <div className="flex items-center justify-between border-b-2 border-dashed-ink pb-2 mb-4">
                  <span className="font-courier text-[13px] tracking-widest text-ink-brown">STAGE {s.n}</span>
                  <span className="font-blackops text-4xl text-[hsl(var(--ink-charcoal)/0.2)] leading-none">{s.n}</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-blackops text-xl sm:text-2xl text-ink uppercase tracking-tight leading-tight">{s.name}</h4>
                </div>
                <p className="font-courier text-[12px] tracking-widest text-ink-brown uppercase">{s.tagline}</p>
                <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal)/0.85)] leading-relaxed mt-2">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE PROMISE */}
        <SubHeading icon={BookOpen} title="The promise" meta="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                data-spy-label={`CARD ${pad(i + 1, 3)}`}
                className="paper-card-cream p-5 relative card-lift text-left min-h-[170px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-courier text-[12px] tracking-widest text-ink-brown border-b-2 border-dashed-ink pb-2 mb-3">
                      CARD-{pad(i + 1, 3)} · {isOpen ? t.word.toUpperCase() : t.say}
                    </div>
                    {isOpen ? (
                      <p className="font-typewriter text-base text-ink leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-tight leading-tight">{t.word}</div>
                        <div className="font-blackops text-[12px] tracking-widest text-ink mt-3">TURN THE CARD //</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="VISIT ATAYA"
            className="px-5 py-2.5 bg-ink text-[hsl(var(--paper))] border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-2"
          >
            VISIT ATAYA <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={`${SITE_URL}pages/about-us`}
            target="_blank"
            rel="noopener noreferrer"
            data-spy-label="THE ATAYA STORY"
            className="px-5 py-2.5 bg-paper text-ink border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-ink hover:text-[hsl(var(--paper))] transition-colors flex items-center justify-center gap-2"
          >
            THE ATAYA STORY
          </a>
        </div>

        {/* DISCLAIMER */}
        <ScrollReveal effect="page-turn" className="paper-card-cream p-4 sm:p-5 relative max-w-4xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1">CLIENT NOTE</div>
          <p className="flex items-start gap-3 font-typewriter text-sm sm:text-base text-ink leading-relaxed mt-2">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-ink" />
            <span>
              Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
              they appear on the live store.
            </span>
          </p>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>◉ CLIENT FILE OPEN</span>
          <span>LUXURY SWIMWEAR · AVALON BEACH</span>
          <span>END OF CLIENT FILE</span>
        </div>
      </div>
    </section>
  );
};

export default AtayaSection;
