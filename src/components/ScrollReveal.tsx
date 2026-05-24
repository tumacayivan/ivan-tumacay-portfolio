import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Effect kind */
  effect?: "ink-bleed" | "page-turn" | "stamp-drop" | "redaction-lift";
  className?: string;
  /** Delay in ms before the effect plays */
  delay?: number;
  /** Whether to re-trigger every time the element re-enters viewport */
  once?: boolean;
  /** Wrap element type */
  as?: "div" | "span" | "section" | "p" | "h1" | "h2" | "h3" | "h4";
  /** Distance from viewport (px) when reveal triggers */
  rootMargin?: string;
}

/**
 * ScrollReveal wraps content so it animates in when scrolled into view.
 * Built on IntersectionObserver — no framer-motion overhead per element.
 */
const ScrollReveal = ({
  children,
  effect = "ink-bleed",
  className = "",
  delay = 0,
  once = true,
  as = "div",
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  const Tag = as as keyof JSX.IntrinsicElements;

  const effectClass = visible
    ? {
        "ink-bleed": "ink-bleed-reveal",
        "page-turn": "page-turn-in",
        "stamp-drop": "stamp-drop-hard",
        "redaction-lift": "redacted-reveal lift",
      }[effect]
    : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} ${effectClass}`.trim()}
      style={
        visible
          ? { animationDelay: `${delay}ms`, opacity: undefined }
          : { opacity: 0 }
      }
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
