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

const SITE_URL = "https://ataya.com.au/";

// Scenes captured from the live store. Everything said here comes from the
// site itself, so it stays a description of the store and not a results claim.
const exhibits = [
  { image: ataHero, title: "The Store", caption: "Ataya Swimwear — beautiful swimwear should feel incredible to wear." },
  { image: ataStory, title: "The Story", caption: "After more than 30 years designing swimwear, Natalie Hawkins created Ataya to put real expertise back at the centre." },
  { image: ataCollection, title: "The Lustrea Collection", caption: "A featured collection with prices and colourways readable at a glance." },
  { image: ataCategories, title: "Shop By Category", caption: "One piece, bikini tops and bikini bottoms, each one a full-bleed shot from the campaign." },
  { image: ataLook, title: "Shop The Look", caption: "For anyone looking for more coverage: tap a hotspot on the photo to see the piece." },
  { image: ataFounder, title: "30 Years", caption: "Natalie Hawkins designs every Ataya piece around one idea: a perfect fit." },
  { image: ataMagazine, title: "The Magazine", caption: "The full shoot, styled like a Vogue magazine from the late 90s." },
  { image: ataService, title: "The Service", caption: "Instagram, fast shipping, free returns, sustainability and support, closing out the page." },
];

const clientTags = [
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

const underline = "font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4";

const SubHeading = ({ icon: Icon, title, note }: { icon: typeof ShoppingBag; title: string; note: string }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="w-5 h-5 text-[hsl(var(--accent-red))] shrink-0" />
    <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] uppercase tracking-[0.14em]">
      {title}
    </h3>
    <span className="flex-1 h-px bg-[hsl(var(--accent-red)/0.5)]" />
    <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] whitespace-nowrap uppercase hidden sm:inline">
      {note}
    </span>
  </div>
);

const AtayaSection = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const exhibit = exhibits[active];
  const sceneNo = String(active + 1).padStart(2, "0");

  return (
    <section
      id="ataya"
      className="relative py-20 sm:py-28 overflow-hidden bg-[hsl(var(--paper-beige))] border-y border-[hsl(var(--accent-red)/0.25)] paper-grain"
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
        <div className="watermark text-[17vw] leading-none rotate-[4deg] -mr-6 mt-16 whitespace-nowrap">
          ATAYA
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 relative"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[hsl(var(--accent-red)/0.4)]">
            <div className="section-eyebrow">
              <Scissors className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 08-B // WEBSITE CLIENT
            </div>
            <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] hidden sm:inline">
              LUXURY SWIMWEAR · AVALON BEACH, AUSTRALIA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-end">
            <div>
              <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
                Website client · Shopify store
              </p>
              <h2 className="display-title text-5xl sm:text-7xl md:text-8xl uppercase">
                ATAYA <span className="accent">SWIMWEAR</span>
              </h2>
            </div>
            <div className="paper-card-cream p-5 relative">
              <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">CLIENT FILE</div>
              <p className="font-typewriter text-lg sm:text-xl text-[hsl(var(--ink-charcoal))] leading-relaxed mt-2">
                The online store for Ataya, a <span className={underline}>luxury women's swimwear</span> label from
                Avalon Beach, Australia. Designed by Natalie Hawkins after 30 years of hands-on swimwear design, and made
                for a <span className={underline}>perfect fit</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Model tags */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-3xl">
          {clientTags.map((t) => (
            <div key={t.label} className="paper-card-cream px-4 py-3">
              <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">{t.label}</div>
              <div className="font-blackops text-xl tracking-[0.12em] text-[hsl(var(--accent-bone))]">{t.value}</div>
            </div>
          ))}
        </div>

        {/* Exhibit viewer */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 mb-16">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block relative">
            <div className="paper-card-cream p-2 sm:p-3 surveillance-frame">
              <span className="sv-tl" />
              <span className="sv-tr" />
              <div className="flex items-center justify-between gap-3 px-2 pb-2 mb-2 border-b border-dashed-ink">
                <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] shrink-0">
                  EXHIBIT—{sceneNo}
                </span>
                <span className="font-blackops text-[13px] tracking-[0.22em] uppercase text-[hsl(var(--ink-charcoal))] truncate">
                  {exhibit.title}
                </span>
                <span className="hidden sm:flex items-center gap-2 font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">
                  <span className="status-pulse" /> SITE LIVE
                </span>
              </div>
              <div className="relative overflow-hidden aspect-[2.09/1] bg-[hsl(var(--ink-charcoal))] scanline-overlay">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={exhibit.image}
                    alt={`Ataya Swimwear — ${exhibit.title}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[hsl(var(--paper-cream)/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="dossier-cta text-sm">
                    <ExternalLink className="w-4 h-4" /> OPEN ATAYA
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="paper-card-cream p-5 relative">
              <div className="tape w-12 h-3 -top-1.5 left-6 rotate-[-4deg]" />
              <div className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] mb-2">
                EXHIBIT {sceneNo} / {String(exhibits.length).padStart(2, "0")}
              </div>
              <p className="font-typewriter text-base text-[hsl(var(--ink-charcoal))] leading-relaxed">{exhibit.caption}</p>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
              {exhibits.map((ex, i) => (
                <button
                  key={ex.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show exhibit ${i + 1}: ${ex.title}`}
                  className={`relative overflow-hidden border-2 transition-all ${
                    i === active
                      ? "border-[hsl(var(--accent-red))]"
                      : "border-[hsl(40_18%_32%/0.15)] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ex.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                  <span className="absolute top-0 left-0 bg-[hsl(var(--accent-red))] text-[hsl(40_45%_10%)] font-courier text-[10px] font-bold px-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hard rules */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center mb-16">
          <div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-3 uppercase">
              The Label
            </p>
            <h3 className="display-title text-3xl sm:text-5xl uppercase leading-[1.05]">
              BEAUTIFUL SWIMWEAR SHOULD FEEL <span className="accent">INCREDIBLE</span> TO WEAR.
            </h3>
          </div>
          <div className="paper-card-cream p-5">
            <p className="font-typewriter text-lg text-[hsl(var(--ink-charcoal))] leading-relaxed">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European summer
              season.
            </p>
          </div>
        </div>

        {/* Our approach */}
        <SubHeading icon={ShoppingBag} title="Inside the Store" note="Browse → Bag" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card-cream p-5 relative group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 border border-[hsl(var(--accent-red)/0.5)] bg-[hsl(45_36%_97%)] text-[hsl(var(--accent-red))] group-hover:bg-[hsl(var(--accent-red))] group-hover:text-[hsl(40_45%_10%)] transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="font-blackops text-4xl text-[hsl(var(--accent-red)/0.35)] leading-none">{s.n}</span>
              </div>
              <h4 className="font-blackops text-xl uppercase tracking-[0.12em] text-[hsl(var(--accent-bone))] mb-1">{s.name}</h4>
              <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase mb-2">{s.tagline}</div>
              <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))]/85 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Risk management */}
        <SubHeading icon={BookOpen} title="The Promise" note="Tap a card to turn it" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className="paper-card-cream p-5 relative text-left min-h-[170px] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between border-b border-dashed-ink pb-2 mb-3">
                  <span className="font-courier text-[11px] tracking-[0.3em] text-[hsl(var(--accent-red))] uppercase">{t.say}</span>
                  <span className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--ink-brown))]">{isOpen ? "TURNED" : "FACE UP"}</span>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "back" : "front"}
                    initial={{ opacity: 0, rotateX: -70 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: 70 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <p className="font-typewriter text-sm text-[hsl(var(--ink-charcoal))] leading-relaxed">{t.meaning}</p>
                    ) : (
                      <>
                        <div className="font-blackops text-3xl uppercase tracking-[0.08em] text-[hsl(var(--accent-bone))] leading-tight">{t.word}</div>
                        <div className="font-courier text-[10px] tracking-[0.3em] text-[hsl(var(--accent-red))] mt-3">TURN THE CARD //</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="dossier-cta justify-center text-sm">
            <ExternalLink className="w-4 h-4" /> VISIT ATAYA
          </a>
          <a href={`${SITE_URL}pages/about-us`} target="_blank" rel="noopener noreferrer" className="dossier-cta-ghost justify-center text-sm">
            THE ATAYA STORY
          </a>
        </div>

        {/* Disclaimer */}
        <div className="paper-card-cream p-5 relative max-w-3xl">
          <div className="absolute -top-3 left-4 stamp stamp-black !text-[12px] !p-1 !rotate-0 bg-[hsl(var(--paper-beige))]">CLIENT NOTE</div>
          <p className="flex items-start gap-2 font-courier text-xs text-[hsl(var(--ink-brown))] leading-relaxed mt-1">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-[hsl(var(--accent-red))]" />
            Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here
            as they appear on the live store.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] border-t border-[hsl(var(--accent-red)/0.3)] pt-3 uppercase">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> WEBSITE CLIENT</span>
          <span>LUXURY SWIMWEAR · AVALON BEACH, AUSTRALIA</span>
          <span>END OF SECTION 08-B</span>
        </div>
      </div>
    </section>
  );
};

export default AtayaSection;
