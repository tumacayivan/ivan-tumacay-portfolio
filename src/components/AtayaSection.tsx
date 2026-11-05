import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ShoppingBag, Ruler, BookOpen, Globe, Scissors, Info } from "lucide-react";
import ataHero from "@/assets/ataya/ataya-01-hero.jpg";
import ataStory from "@/assets/ataya/ataya-02-story.jpg";
import ataCollection from "@/assets/ataya/ataya-03-collection.jpg";
import ataCategories from "@/assets/ataya/ataya-04-categories.jpg";
import ataLook from "@/assets/ataya/ataya-05-look.jpg";
import ataFounder from "@/assets/ataya/ataya-06-founder.jpg";
import ataMagazine from "@/assets/ataya/ataya-07-magazine.jpg";
import ataService from "@/assets/ataya/ataya-08-service.jpg";
import SectionHeading from "./drift/SectionHeading";

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

const clientTags = [
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

const promises = [
  { word: "Fit", say: "the one idea", meaning: "Natalie Hawkins designs every Ataya piece around a perfect fit." },
  { word: "Shipping", say: "fast", meaning: "All orders ship within 24 hours with express two-day shipping." },
  { word: "Returns", say: "free", meaning: "Not happy with the purchase? Free returns for 14 days." },
  { word: "Coverage", say: "if you want more", meaning: "A shop-the-look section with pieces like the reversible tie side pant and the V wired flared tankini." },
  { word: "Care", say: "& sustainability", meaning: "A dedicated page on caring for each piece and how Ataya actively contributes to sustainability." },
  { word: "Support", say: "world-class", meaning: "Fast, friendly support by email." },
];

const AtayaSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="ataya"
      data-scene="Ataya"
      data-kanji="水着"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 livery" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 15% 0%, hsl(var(--drift) / calc(0.12 * var(--glow-strength))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading kanji="水着" kicker="Website client · Luxury swimwear" title="Ataya" accent="Swimwear">
          The online store for Ataya, a luxury women's swimwear label from Avalon Beach, Australia. Designed by Natalie
          Hawkins after 30 years of hands-on swimwear design, and made for a perfect fit.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line/10 border border-line/10 mb-10 max-w-3xl">
          {clientTags.map((t) => (
            <div key={t.label} className="bg-asphalt px-4 py-3">
              <div className="hud-label !text-ink-dim !text-[10px]">{t.label}</div>
              <div className="font-hud text-lg font-bold uppercase text-ink">{t.value}</div>
            </div>
          ))}
        </div>

        {/* WINDSCREEN VIEWER */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="panel !border-line/15 overflow-hidden shadow-[0_40px_90px_-40px_hsl(var(--drift)/0.5)]">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line/10 bg-asphalt-2">
                <span className="flex gap-1.5 shrink-0" aria-hidden>
                  <span className="w-2.5 h-2.5 rounded-full bg-sign" />
                  <span className="w-2.5 h-2.5 rounded-full bg-drift" />
                  <span className="w-2.5 h-2.5 rounded-full bg-hud" />
                </span>
                <span className="font-hud text-[11px] tracking-[0.2em] uppercase text-ink-dim truncate">
                  Scene {String(active + 1).padStart(2, "0")} — {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 font-hud text-[10px] tracking-[0.24em] text-sign uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-sign animate-pulse" /> Live
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--void))]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`Ataya Swimwear — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-[hsl(var(--void)/0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-drift">
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Open Ataya
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <p className="text-ink-dim leading-relaxed">
              <span className="hud-label block mb-1">Scene {String(active + 1).padStart(2, "0")}</span>
              {exhibit.caption}
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border transition-all ${
                    i === active ? "border-drift ring-1 ring-drift" : "border-line/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-drift text-on-drift font-hud text-[10px] font-bold px-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-20 border-y border-line/10 py-12">
          <blockquote className="font-display text-3xl sm:text-5xl uppercase text-ink leading-tight">
            Beautiful swimwear should feel <span className="text-drift lean">incredible</span> to wear.
          </blockquote>
          <div>
            <div className="hud-label mb-3 flex items-center gap-2">
              <Scissors className="w-4 h-4" /> The label
            </div>
            <p className="text-ink-dim text-lg leading-relaxed">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European summer
              season.
            </p>
          </div>
        </div>

        {/* THE STORE */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">Inside the store</h3>
          <span className="flex-1 h-px bg-line/15" />
          <span className="hud-label !text-ink-dim">Browse → bag</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="panel panel-hover edge-light p-6 group relative"
            >
              <div className="flex items-center justify-between mb-5">
                <s.icon className="w-6 h-6 text-hud group-hover:text-drift transition-colors" />
                <span className="font-display text-4xl text-line/20 leading-none">{s.n}</span>
              </div>
              <h4 className="font-hud text-lg font-bold uppercase tracking-[0.04em] text-ink mb-1">{s.name}</h4>
              <div className="hud-label !text-[10px] mb-3">{s.tagline}</div>
              <p className="text-ink-dim leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* THE PROMISE */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">The promise</h3>
          <span className="flex-1 h-px bg-line/15" />
          <span className="hud-label !text-ink-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line/10 border border-line/10 mb-14">
          {promises.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-asphalt p-6 text-left min-h-[180px] hover:bg-asphalt-2 transition-colors"
              >
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
                        <div className="hud-label !text-[10px]">{t.word}</div>
                        <p className="text-ink leading-relaxed mt-2">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="hud-label !text-ink-dim !text-[10px]">{t.say}</div>
                        <div className="font-display text-3xl sm:text-4xl uppercase text-ink leading-tight mt-2">{t.word}</div>
                        <div className="hud-label !text-drift !text-[10px] mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-drift">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Visit Ataya
            </span>
          </a>
          <a href={`${SITE_URL}pages/about-us`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <span>The Ataya story</span>
          </a>
        </div>

        <p className="flex items-start gap-2 text-xs text-ink-dim leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-hud" />
          Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
          they appear on the live store.
        </p>
      </div>
    </section>
  );
};

export default AtayaSection;
