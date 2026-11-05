import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ExternalLink, Layers, ShoppingBag, Ruler, Globe, Scissors, Info } from "lucide-react";
import ataHero from "@/assets/ataya/ataya-01-hero.jpg";
import ataStory from "@/assets/ataya/ataya-02-story.jpg";
import ataCollection from "@/assets/ataya/ataya-03-collection.jpg";
import ataCategories from "@/assets/ataya/ataya-04-categories.jpg";
import ataLook from "@/assets/ataya/ataya-05-look.jpg";
import ataFounder from "@/assets/ataya/ataya-06-founder.jpg";
import ataMagazine from "@/assets/ataya/ataya-07-magazine.jpg";
import ataService from "@/assets/ataya/ataya-08-service.jpg";

const SITE_URL = "https://ataya.com.au/";

// Exhibits captured from the live store. Everything said here comes from the
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
  { label: "Client", value: "Ataya Swimwear" },
  { label: "Platform", value: "Shopify" },
  { label: "Home", value: "Avalon Beach" },
  { label: "Designer", value: "Natalie Hawkins" },
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

const pad = (n: number) => String(n).padStart(2, "0");

const AtayaSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section id="ataya" className="relative py-20 sm:py-28 bg-paper-beige border-y-2 border-double border-ink overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[16vw] leading-none -rotate-6 -mr-10 mt-10">ATAYA</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-ink">
            <div className="flex items-center gap-3">
              <span className="status-pulse" />
              <span className="font-blackops text-sm tracking-[0.3em] text-stamp-red">
                CLIENT FILE // 09-B
              </span>
            </div>
            <span className="font-courier text-[10px] text-ink-brown tracking-widest hidden sm:inline">
              LUXURY SWIMWEAR · AVALON BEACH, AUSTRALIA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-xs tracking-[0.35em] text-ink-brown mb-2 uppercase">
                Website client // store file
              </p>
              <h2 className="font-blackops text-5xl sm:text-7xl md:text-8xl text-ink leading-[0.9] tracking-tight">
                ATAYA <span className="text-stamp-red">SWIMWEAR</span>
              </h2>
            </div>
            <div className="paper-card-cream p-4 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1">CLIENT BRIEF</div>
              <p className="font-typewriter text-base sm:text-lg text-ink leading-relaxed mt-2">
                The online store for Ataya, a <span className="font-bold text-stamp-red underline decoration-wavy">luxury women's swimwear</span> label
                from Avalon Beach, Australia. Designed by Natalie Hawkins after 30 years of hands-on swimwear design,
                and made for a perfect fit.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {fileTags.map((t) => (
              <div key={t.label} className="paper-card px-4 py-3">
                <div className="font-courier text-[10px] tracking-widest text-ink-brown uppercase">{t.label}</div>
                <div className="font-blackops text-lg text-ink uppercase tracking-[0.08em]">{t.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EXHIBIT VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="paper-folder p-3 sm:p-4 relative">
              <div className="tape tape-yellow w-16 h-4 -top-2 left-8 rotate-[-4deg] z-10" />
              <div className="tape tape-yellow w-16 h-4 -top-2 right-8 rotate-[3deg] z-10" />
              <div className="flex items-center justify-between gap-3 mb-3 font-courier text-[10px] sm:text-xs tracking-widest text-ink">
                <span className="truncate uppercase">
                  EXHIBIT A-{pad(active + 1)} — {exhibit.title}
                </span>
                <span className="hidden sm:inline text-stamp-red font-blackops">LIVE FEED</span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] border-2 border-ink bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`Ataya Swimwear — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[hsl(var(--paper))]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[hsl(var(--paper))]" />

                <div className="absolute bottom-4 right-6 stamp text-xs sm:text-sm !p-1.5 z-10 bg-[hsl(var(--paper)/0.85)]">
                  LUXURY SWIMWEAR
                </div>

                <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4 z-20">
                  <div className="w-12 h-12 border-2 border-[hsl(var(--paper))] flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[hsl(var(--paper))]" />
                  </div>
                  <span className="font-blackops text-sm text-[hsl(var(--paper))] text-center tracking-widest uppercase">
                    OPEN ATAYA
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="sticky-note rotate-[-1deg]">
              <div className="font-courier text-[10px] tracking-widest text-ink-brown mb-1">EXHIBIT A-{pad(active + 1)}</div>
              <p className="leading-relaxed">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border-2 bg-paper transition-all ${
                    i === active ? "border-stamp ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : "border-ink opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top photocopy" />
                  <span className="absolute top-0 left-0 bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-[10px] px-1.5">
                    A-{pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* HARD RULES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y-2 border-dashed-ink py-10">
          <blockquote className="font-blackops text-3xl sm:text-5xl text-ink leading-[0.95] uppercase">
            Beautiful swimwear should feel <span className="text-stamp-red">incredible</span> to wear.
          </blockquote>
          <div className="paper-card-cream p-5 relative">
            <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 flex items-center gap-1">
              <Scissors className="w-3 h-3" /> THE LABEL
            </div>
            <p className="font-typewriter text-base text-ink leading-relaxed mt-2">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European
              summer season.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mb-6 flex items-center gap-3">
          <Layers className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">Inside the store</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">BROWSE → BAG</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 h-full flex flex-col relative paper-grain"
            >
              <div className="tape tape-yellow w-12 h-3 -top-1.5 left-4 rotate-[-3deg]" />
              <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                STAGE {s.n}
              </span>
              <div className="flex items-start gap-3 mb-4 border-b-2 border-dashed-ink pb-3 mt-3">
                <div className="p-2 border-2 border-ink bg-paper text-stamp-red shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="font-blackops text-lg text-ink uppercase tracking-[0.05em] leading-tight">{s.name}</h4>
              </div>
              <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red mb-2">◉ {s.tagline.toUpperCase()}</div>
              <p className="font-typewriter text-sm text-ink/80 leading-snug flex-1">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-2xl sm:text-3xl text-ink uppercase tracking-[0.1em]">The promise</h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[10px] text-ink-brown tracking-widest">TAP A CARD TO TURN IT</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {terms.map((t, i) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`paper-card-cream p-5 min-h-[170px] text-left relative transition-shadow ${
                  isOpen ? "ring-2 ring-[hsl(var(--stamp-red)/0.4)]" : ""
                }`}
                style={{ transform: `rotate(${((i % 3) - 1) * 0.4}deg)` }}
              >
                <span className="absolute top-2 right-3 font-courier text-[10px] tracking-widest text-ink-brown">
                  NOTE-{String(i + 1).padStart(3, "0")}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <>
                        <div className="font-blackops text-[10px] tracking-[0.25em] text-stamp-red">▣ {t.word.toUpperCase()}</div>
                        <p className="font-typewriter text-sm text-ink leading-snug mt-2">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-courier text-[10px] tracking-widest text-ink-brown">{t.say}</div>
                        <div className="font-blackops text-2xl sm:text-3xl uppercase leading-tight mt-2 text-ink">{t.word}</div>
                        <div className="mt-3 stamp stamp-blue text-[10px] !p-1 inline-block">CLIENT NOTE · TAP TO OPEN</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[hsl(var(--stamp-red))] bg-[hsl(var(--stamp-red))] text-[hsl(var(--paper))] font-blackops text-sm tracking-[0.18em] uppercase hover:bg-[hsl(var(--paper))] hover:text-stamp-red transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Visit Ataya
          </a>
          <a
            href={`${SITE_URL}pages/about-us`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-ink bg-paper text-ink font-blackops text-sm tracking-[0.18em] uppercase hover:text-stamp-red transition-colors"
          >
            The Ataya story
          </a>
        </div>

        {/* DISCLAIMER */}
        <div className="paper-card-cream p-4 relative max-w-3xl mt-8">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[10px] !p-1 !rotate-0">CLIENT NOTE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-ink leading-relaxed mt-1">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-stamp-red" />
            Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
            they appear on the live store.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[10px] text-ink-brown tracking-widest border-t-2 border-double border-ink pt-3">
          <span>FILE OPEN · WEBSITE CLIENT</span>
          <span>CLIENT FILE / 09-B</span>
        </div>
      </div>
    </section>
  );
};

export default AtayaSection;
