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
import SectionHeading from "./transit/SectionHeading";

const SITE_URL = "https://ataya.com.au/";

// Frames captured from the live store. Everything said here comes from the
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

const ease = [0.16, 1, 0.3, 1] as const;
const frameLetter = (i: number) => String.fromCharCode(65 + i);

/**
 * CLIENT DECK — a website client sitting beside the model deck.
 *
 * Frames received from the live Ataya Swimwear store, the one idea behind the
 * label, the four things the store does, and the promise cards.
 */
const AtayaSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];

  return (
    <section
      id="ataya"
      data-scene="Client deck"
      data-coord="Stage 03D · Client channel"
      className="relative py-24 sm:py-32 overflow-hidden bg-deep"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 85% 0%, hsl(var(--gold) / calc(0.09 * var(--glow))), transparent 60%)" }}
      />

      <div className="gutter relative">
        <SectionHeading
          stage="03D"
          kicker="Website client · Luxury swimwear"
          title="Ataya"
          accent="Swimwear"
        >
          The online store for Ataya, a luxury women's swimwear label from Avalon Beach, Australia. Designed by Natalie
          Hawkins after 30 years of hands-on swimwear design, and made for a perfect fit.
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule/10 border border-rule/10 mb-12 max-w-3xl">
          {clientTags.map((t) => (
            <div key={t.label} className="bg-deep px-4 py-4">
              <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.label}</div>
              <div className="font-tele text-base font-medium uppercase text-ice mt-1.5">{t.value}</div>
            </div>
          ))}
        </div>

        {/* FRAME VIEWPORT */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6 mb-20">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="panel overflow-hidden shadow-[0_50px_110px_-60px_hsl(var(--shade))]">
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-rule/10 bg-deep-2">
                <span className="flex gap-2 shrink-0" aria-hidden>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rule/25" />
                </span>
                <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim truncate">
                  Frame {frameLetter(active)} — {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-2 font-tele text-xs tracking-[0.24em] text-gold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-beacon" aria-hidden /> Live
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--void))]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`Ataya Swimwear — ${exhibit.title}`}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.9, ease }}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-transit group-hover:scale-[1.02]"
                  />
                </AnimatePresence>
                <div aria-hidden className="absolute inset-0 noise opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-[hsl(var(--void)/0.82)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="btn-primary">
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" aria-hidden /> Open Ataya
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            <p className="text-ice-dim leading-relaxed">
              <span className="tele-label block mb-2">Frame {frameLetter(active)}</span>
              {exhibit.caption}
            </p>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show frame ${frameLetter(i)}: ${ex.title}`}
                  className={`relative overflow-hidden border transition-all duration-500 ${
                    i === active ? "border-gold" : "border-rule/10 opacity-55 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-gold text-on-gold font-tele text-xs font-semibold px-1.5">
                    {frameLetter(i)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* THE LINE */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center mb-20 border-y border-rule/10 py-12">
          <blockquote className="plate text-3xl sm:text-5xl text-ice leading-tight">
            Beautiful swimwear should feel <span className="lit">incredible</span> to wear.
          </blockquote>
          <div>
            <div className="tele-label mb-4 flex items-center gap-2">
              <Scissors className="w-4 h-4" aria-hidden /> The label
            </div>
            <p className="text-ice-dim text-lg leading-relaxed">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European summer
              season.
            </p>
          </div>
        </div>

        {/* INSIDE THE STORE */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">Inside the store</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Browse → bag</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.09, ease }}
              className="panel panel-hover beam p-6 group"
            >
              <div className="flex items-center justify-between mb-6">
                <s.icon className="w-5 h-5 text-signal group-hover:text-gold transition-colors duration-500" aria-hidden />
                <span aria-hidden className="font-tele text-sm tracking-[0.2em] text-gold">
                  S{s.n}
                </span>
              </div>
              <h4 className="font-tele text-base font-medium uppercase tracking-[0.1em] text-ice mb-1.5">{s.name}</h4>
              <div className="tele-label mb-3">{s.tagline}</div>
              <p className="text-ice-dim leading-relaxed text-[0.95rem]">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* THE PROMISE */}
        <div className="flex items-center gap-5 mb-10">
          <h3 className="plate text-3xl sm:text-4xl text-ice">The promise</h3>
          <span aria-hidden className="flex-1 h-px bg-rule/12" />
          <span className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">Tap a card to turn it</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/10 border border-rule/10 mb-14">
          {promises.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="bg-deep p-6 sm:p-7 text-left min-h-[180px] hover:bg-deep-2 transition-colors duration-500"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {isOpen ? (
                      <>
                        <div className="tele-label">{t.word}</div>
                        <p className="text-ice leading-relaxed mt-3">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-ice-dim">{t.say}</div>
                        <div className="plate text-3xl sm:text-4xl text-ice leading-tight mt-3">{t.word}</div>
                        <div className="font-tele text-xs tracking-[0.2em] uppercase text-gold mt-4">Turn the card →</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" aria-hidden /> Visit Ataya
            </span>
          </a>
          <a href={`${SITE_URL}pages/about-us`} target="_blank" rel="noopener noreferrer" className="btn-quiet">
            <span>The Ataya story</span>
          </a>
        </div>

        <p className="flex items-start gap-2.5 text-sm text-ice-dim leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-signal" aria-hidden />
          <span>
            Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
            they appear on the live store.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AtayaSection;
