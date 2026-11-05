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
const scenes = [
  { image: ataHero, title: "The store", caption: "Ataya Swimwear — beautiful swimwear should feel incredible to wear." },
  { image: ataStory, title: "The story", caption: "After more than 30 years designing swimwear, Natalie Hawkins created Ataya to put real expertise back at the centre." },
  { image: ataCollection, title: "The Lustrea collection", caption: "A featured collection with prices and colourways readable at a glance." },
  { image: ataCategories, title: "Shop by category", caption: "One piece, bikini tops and bikini bottoms, each one a full-bleed shot from the campaign." },
  { image: ataLook, title: "Shop the look", caption: "For anyone looking for more coverage: tap a hotspot on the photo to see the piece." },
  { image: ataFounder, title: "30 years", caption: "Natalie Hawkins designs every Ataya piece around one idea: a perfect fit." },
  { image: ataMagazine, title: "The magazine", caption: "The full shoot, styled like a Vogue magazine from the late 90s." },
  { image: ataService, title: "The service", caption: "Instagram, fast shipping, free returns, sustainability and support, closing out the page." },
];

const dossier = [
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
  const scene = scenes[active];

  return (
    <section id="ataya" className="relative overflow-hidden border-y border-border/40 py-24 sm:py-28">
      <div className="absolute inset-0 operation-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="case-label mb-4">Client file / Ataya</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Ataya <span className="text-gradient-red">Swimwear.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl">
            The online store for Ataya, a luxury women's swimwear label from Avalon Beach, Australia. Designed by
            Natalie Hawkins after 30 years of hands-on swimwear design, and made for a perfect fit.
          </p>
        </motion.div>

        <div className="mb-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {dossier.map((d) => (
            <div key={d.label} className="border border-border/70 bg-card/70 px-4 py-3">
              <p className="font-mono text-[11px] font-bold uppercase text-muted-foreground">{d.label}</p>
              <p className="mt-1 text-lg font-black uppercase text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        {/* PLANNING BOARD */}
        <div className="mb-20 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="evidence-frame glass-card glow-red p-3">
              <div className="flex items-center justify-between gap-3 border border-border/60 bg-background/60 px-4 py-2.5">
                <span className="truncate font-mono text-xs font-bold uppercase text-muted-foreground">
                  Scene {pad(active + 1)} — {scene.title}
                </span>
                <span className="hidden items-center gap-2 font-mono text-[11px] font-bold uppercase text-primary sm:flex">
                  <span className="h-1.5 w-1.5 bg-primary animate-pulse-gold" /> Live
                </span>
              </div>
              <div className="relative mt-3 aspect-[2.09/1] overflow-hidden border border-border/60 bg-black">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={active}
                    src={scene.image}
                    alt={`Ataya Swimwear — ${scene.title}`}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 film-lines opacity-25" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground">
                    <ExternalLink className="h-4 w-4" /> Open Ataya
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            <div className="border border-border/70 bg-card/70 p-4">
              <p className="font-mono text-xs font-bold text-primary">SCENE {pad(active + 1)}</p>
              <p className="mt-2 font-semibold leading-relaxed text-muted-foreground">{scene.caption}</p>
            </div>
            <div className="grid grid-cols-4 gap-2 xl:grid-cols-2">
              {scenes.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`Show scene ${i + 1}: ${s.title}`}
                  className={`relative overflow-hidden border transition-all ${
                    i === active ? "border-primary ring-1 ring-primary" : "border-border/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={s.image} alt="" loading="lazy" className="aspect-video w-full object-cover object-top" />
                  <span className="absolute left-0 top-0 bg-primary px-1.5 font-mono text-[10px] font-bold text-primary-foreground">
                    {pad(i + 1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* HARD RULES */}
        <div className="mb-20 grid grid-cols-1 items-center gap-8 border-y border-border/60 py-12 lg:grid-cols-[1.4fr_1fr]">
          <blockquote className="text-3xl font-black leading-tight sm:text-5xl">
            Beautiful swimwear should feel <span className="text-gradient-red">incredible</span> to wear.
          </blockquote>
          <div>
            <p className="case-label mb-4">
              <Scissors className="h-3.5 w-3.5" /> The label
            </p>
            <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
              After more than 30 years designing swimwear, Natalie Hawkins created Ataya to bring genuine swimwear
              expertise back to the centre of the product. Designed for coastal living, travel and the European summer
              season.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">Inside the store</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">BROWSE → BAG</span>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex h-full flex-col border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">STAGE {s.n}</span>
              </div>
              <h4 className="text-xl font-black leading-tight text-foreground">{s.name}</h4>
              <p className="mt-1 font-mono text-xs font-bold uppercase text-accent">{s.tagline}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.article>
          ))}
        </div>

        {/* RISK MANAGEMENT */}
        <div className="mb-8 flex items-center gap-4">
          <h3 className="text-3xl font-black sm:text-4xl">The promise</h3>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-xs font-bold text-muted-foreground">TAP A CARD TO TURN IT</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => {
            const isOpen = flipped === t.word;
            return (
              <button
                key={t.word}
                type="button"
                onClick={() => setFlipped(isOpen ? null : t.word)}
                aria-expanded={isOpen}
                className={`min-h-[170px] border bg-card/70 p-5 text-left transition-colors hover:bg-surface-hover ${
                  isOpen ? "border-primary/60 glow-red" : "border-border/70"
                }`}
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
                        <p className="font-mono text-xs font-bold uppercase text-primary">{t.word}</p>
                        <p className="mt-2 font-semibold leading-relaxed text-foreground">{t.meaning}</p>
                      </>
                    ) : (
                      <>
                        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">{t.say}</p>
                        <p className="mt-2 text-3xl font-black leading-tight text-foreground">{t.word}</p>
                        <p className="mt-4 font-mono text-xs font-bold uppercase text-primary">Turn the card →</p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-black text-primary-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <ExternalLink className="h-5 w-5" /> Visit Ataya
          </a>
          <a
            href={`${SITE_URL}pages/about-us`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 px-5 py-3 font-black text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            The Ataya story
          </a>
        </div>

        <p className="flex max-w-3xl items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
          they appear on the live store.
        </p>
      </div>
    </section>
  );
};

export default AtayaSection;
