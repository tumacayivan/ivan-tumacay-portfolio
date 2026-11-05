import { useState } from "react";
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

const stages = [
  { n: "01", name: "Shop", line: "Six collections: Classico, Cordette, Corte Bleu, Lustrea, Palm Springs and Pool Side 84, plus one pieces, bikini tops and bottoms." },
  { n: "02", name: "Fit", line: "A size chart and a Let's Talk Sizing page, one click from the main menu." },
  { n: "03", name: "Story", line: "The Ataya Story and a full magazine shoot sit beside the products, not behind them." },
  { n: "04", name: "Delivery", line: "A delivery destination picker with local currencies, shipping to the US, UK, Europe and Asia." },
];

const promises = [
  { word: "Fit", meaning: "Natalie Hawkins designs every Ataya piece around a perfect fit." },
  { word: "Shipping", meaning: "All orders ship within 24 hours with express two-day shipping." },
  { word: "Returns", meaning: "Not happy with the purchase? Free returns for 14 days." },
  { word: "Coverage", meaning: "A shop-the-look section with pieces like the reversible tie side pant and the V wired flared tankini." },
  { word: "Care", meaning: "A dedicated page on caring for each piece and how Ataya actively contributes to sustainability." },
  { word: "Support", meaning: "Fast, friendly support by email." },
];

/**
 * Ataya Swimwear — a website client, shown as an aside inside an act: a scene
 * viewer, the four parts of the store, the promises and the client note. It
 * sits beside the story without changing it.
 */
const Ataya = ({ kicker = "Website client" }: { kicker?: string }) => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState<string | null>(null);
  const scene = scenes[active];

  return (
    <div id="ataya" className="mt-20 scroll-mt-24">
      <div className="max-w-[44rem] mb-10" data-reveal>
        <div className="q-label flex items-center gap-3 mb-4">
          <span className="text-[var(--q-bull)]">{kicker}</span>
          <span className="h-px w-10 bg-[var(--q-line)]" />
          <span>Luxury swimwear · Avalon Beach, Australia</span>
        </div>
        <h3 className="q-serif text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.95]">
          Ataya <em className="italic text-[var(--q-amber)]">Swimwear.</em>
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-[var(--q-dim)]">
          The online store for Ataya, a luxury women's swimwear label from Avalon Beach, Australia. Designed by Natalie
          Hawkins after 30 years of hands-on swimwear design, and made for a perfect fit.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 mb-10" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="group block q-card p-2">
          <div className="flex items-center justify-between px-2 pb-2 q-label !text-[10px]">
            <span>
              Scene {String(active + 1).padStart(2, "0")} — {scene.title}
            </span>
            <span className="text-[var(--q-amber)] group-hover:translate-x-0.5 transition-transform">Open ↗</span>
          </div>
          <div className="q-shot aspect-[2.09/1]">
            <img key={active} src={scene.image} alt={`Ataya Swimwear — ${scene.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </a>
        <div className="flex flex-col gap-4">
          <p className="text-[var(--q-dim)] leading-relaxed">{scene.caption}</p>
          <div className="grid grid-cols-4 xl:grid-cols-2 gap-2">
            {scenes.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`Show scene ${i + 1}: ${s.title}`}
                className={`relative overflow-hidden border transition-all ${
                  i === active ? "border-[var(--q-amber)]" : "border-[var(--q-line)] opacity-55 hover:opacity-100"
                }`}
              >
                <img src={s.image} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
                <span className="absolute top-0 left-0 q-mono text-[10px] px-1.5 bg-[var(--q-amber)] text-[var(--q-void)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="q-serif text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight max-w-[48rem] mb-10" data-reveal>
        Beautiful swimwear should feel <em className="italic text-[var(--q-amber)]">incredible</em> to wear.
      </blockquote>

      <div className="q-label mb-3">Inside the store · browse → bag</div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--q-line)] mb-8" data-stagger>
        {stages.map((s) => (
          <li key={s.n} className="bg-[rgba(3,6,10,0.9)] p-5">
            <div className="q-mono text-[11px] text-[var(--q-bull)]">PART {s.n}</div>
            <div className="q-serif text-2xl mt-2 leading-tight">{s.name}</div>
            <p className="text-sm text-[var(--q-dim)] mt-1.5 leading-relaxed">{s.line}</p>
          </li>
        ))}
      </ol>

      <div className="q-label mb-3">The promise · tap a card to turn it</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--q-line)] mb-8">
        {promises.map((t) => {
          const isOpen = flipped === t.word;
          return (
            <button
              key={t.word}
              type="button"
              onClick={() => setFlipped(isOpen ? null : t.word)}
              aria-expanded={isOpen}
              className="bg-[rgba(3,6,10,0.9)] p-5 text-left min-h-[120px] hover:bg-[rgba(3,6,10,0.75)] transition-colors"
            >
              {isOpen ? (
                <>
                  <div className="q-mono text-[11px] text-[var(--q-bull)] uppercase">{t.word}</div>
                  <p className="text-sm text-[var(--q-dim)] mt-2 leading-relaxed">{t.meaning}</p>
                </>
              ) : (
                <>
                  <div className="q-serif text-2xl leading-tight">{t.word}</div>
                  <div className="q-mono text-[10px] text-[var(--q-amber)] mt-3 uppercase">Turn the card →</div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 mb-6" data-reveal>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="q-btn">
          Visit Ataya ↗
        </a>
        <a href={`${SITE_URL}pages/about-us`} target="_blank" rel="noopener noreferrer" className="q-btn q-btn--ghost">
          The Ataya story
        </a>
      </div>
      <p className="q-card p-4 q-mono text-[10px] leading-relaxed text-[var(--q-dim)] max-w-3xl uppercase tracking-[0.1em]">
        Ataya is a client. The products, photography and brand on this page belong to Ataya Swimwear, shown here as
        they appear on the live store.
      </p>
    </div>
  );
};

export default Ataya;
