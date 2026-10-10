import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAST_P, story } from "./story";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires the whole page to ScrollTrigger:
 *  - every [data-act] section drives the 3D camera (story.target)
 *  - [data-split] headlines rise word by word
 *  - [data-reveal] blocks fade up, [data-stagger] children cascade
 *  - [data-parallax] drifts against the scroll
 *  - the cold open scrubs its copy away and hands over to the line
 */
export const useFilm = (root: RefObject<HTMLElement>, onAct: (i: number) => void) => {
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const acts = gsap.utils.toArray<HTMLElement>("[data-act]");
      acts.forEach((sec, i) => {
        const first = i === 0;
        const last = i === acts.length - 1;
        ScrollTrigger.create({
          trigger: sec,
          start: first ? "top top" : "top center",
          end: last ? "bottom bottom" : "bottom center",
          onUpdate: (self) => {
            story.target = last ? Math.min(LAST_P, i + self.progress * 0.5) : i + self.progress;
          },
          onToggle: (self) => self.isActive && onAct(i),
        });
      });

      if (reduced) return;

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((h) => {
        gsap.fromTo(
          h.querySelectorAll(".q-word > span"),
          { yPercent: 115, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.3,
            ease: "expo.out",
            stagger: 0.06,
            scrollTrigger: { trigger: h, start: "top 85%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((b) => {
        gsap.fromTo(
          b,
          { y: 50, autoAlpha: 0, filter: "blur(8px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "expo.out",
            delay: Number(b.dataset.reveal || 0),
            scrollTrigger: { trigger: b, start: "top 88%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((g) => {
        gsap.fromTo(
          g.children,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: { trigger: g, start: "top 85%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((p) => {
        gsap.to(p, {
          yPercent: Number(p.dataset.parallax) || -20,
          ease: "none",
          scrollTrigger: { trigger: p, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Act cards: the title tracks out wide as it leaves, like an end-of-scene slate
      gsap.utils.toArray<HTMLElement>("[data-slate]").forEach((s) => {
        gsap.to(s, {
          letterSpacing: "0.04em",
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: { trigger: s, start: "top 20%", end: "bottom -20%", scrub: true },
        });
      });

      // Cold open: copy dissolves, "follow the line" holds, then the dive
      const hero = el.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        gsap.to("[data-hero-copy]", {
          autoAlpha: 0,
          y: -90,
          filter: "blur(10px)",
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "30% top", scrub: true },
        });
        gsap
          .timeline({ scrollTrigger: { trigger: hero, start: "22% top", end: "62% top", scrub: true } })
          .fromTo("[data-hero-cue]", { autoAlpha: 0, scale: 0.92, letterSpacing: "0.1em" }, { autoAlpha: 1, scale: 1, letterSpacing: "0.32em", ease: "none" })
          .to("[data-hero-cue]", { autoAlpha: 0, scale: 1.4, ease: "none" });
      }
    }, el);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      story.mx = (e.clientX / window.innerWidth) * 2 - 1;
      story.my = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      ctx.revert();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("load", refresh);
    };
  }, [root, onAct]);
};
