import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

import graphic1 from "@/assets/portfolio-graphic-1.jpg";
import graphic2 from "@/assets/portfolio-graphic-2.jpg";
import graphic3 from "@/assets/portfolio-graphic-3.jpg";
import graphic4 from "@/assets/portfolio-graphic-4.jpg";
import graphic5 from "@/assets/portfolio-graphic-5.jpg";
import graphic6 from "@/assets/portfolio-graphic-6.jpg";

import video1 from "@/assets/portfolio-video-1.jpg";
import video2 from "@/assets/portfolio-video-2.jpg";
import video3 from "@/assets/portfolio-video-3.jpg";
import video4 from "@/assets/portfolio-video-4.jpg";
import video5 from "@/assets/portfolio-video-5.jpg";

const graphicItems = [
  { src: graphic1, title: "Social Media Campaign" },
  { src: graphic2, title: "Brand Identity Design" },
  { src: graphic3, title: "Business Infographic" },
  { src: graphic4, title: "Website UI Design" },
  { src: graphic5, title: "Event Promo Flyer" },
  { src: graphic6, title: "Newsletter Template" },
];

const videoItems = [
  { src: video1, title: "Video Editing & Post-Production" },
  { src: video2, title: "Cinematic Travel Content" },
  { src: video3, title: "Product Commercial" },
  { src: video4, title: "Short-Form Social Content" },
  { src: video5, title: "Corporate Interview" },
];

const allItems = [...graphicItems, ...videoItems];

/* ── Fullscreen Lightbox ── */
const Lightbox = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: { src: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const item = items[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          key={item.src}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={item.src}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain rounded-xl border border-border/30 shadow-2xl"
        />
        <p className="text-lg font-heading font-bold text-foreground uppercase tracking-wide">
          {item.title}
        </p>
        <p className="text-sm font-semibold text-muted-foreground">
          {currentIndex + 1} / {items.length}
        </p>
      </div>
    </motion.div>
  );
};

/* ── Marquee Row ── */
const MarqueeRow = ({
  items,
  direction = "left",
  type,
  onItemClick,
}: {
  items: { src: string; title: string }[];
  direction?: "left" | "right";
  type: "graphic" | "video";
  onItemClick: (item: { src: string; title: string }) => void;
}) => {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-container overflow-hidden py-3">
      <div className={`flex gap-5 ${animClass}`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="group relative shrink-0 overflow-hidden rounded-xl border border-border/40 bg-card/40 cursor-pointer"
            style={{ width: type === "graphic" ? 420 : 520, height: type === "graphic" ? 320 : 300 }}
            onClick={() => onItemClick(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              {type === "video" ? (
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
              <span className="text-sm font-bold font-heading text-foreground text-center px-4 uppercase tracking-wide">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Portfolio Section ── */
const PortfolioSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((item: { src: string; title: string }) => {
    const idx = allItems.findIndex((i) => i.src === item.src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allItems.length) % allItems.length : null));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allItems.length : null));
  }, []);

  return (
    <>
      <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
              FEATURED <span className="text-gradient-gold">WORK</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl text-xl sm:text-2xl font-semibold">
              A selection of <span className="text-foreground font-bold">graphics design</span>, <span className="text-foreground font-bold">video editing</span>, and multimedia projects delivered for clients. <span className="text-foreground font-bold">Click any item</span> to view full screen.
            </p>
          </motion.div>
        </div>

        {/* Graphics Marquee */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <ImageIcon className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-extrabold text-2xl text-foreground uppercase tracking-tight">Graphics Design</h3>
            </motion.div>
          </div>
          <MarqueeRow items={graphicItems} direction="left" type="graphic" onItemClick={openLightbox} />
        </div>

        {/* Video Marquee */}
        <div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <Play className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-extrabold text-2xl text-foreground uppercase tracking-tight">Video Editing & Multimedia</h3>
            </motion.div>
          </div>
          <MarqueeRow items={videoItems} direction="right" type="video" onItemClick={openLightbox} />
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={allItems}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
