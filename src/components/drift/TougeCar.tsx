/**
 * Top-down two-tone hatchback for the downhill run: white body, black
 * bonnet and hatch, pop-up headlights throwing beams up the road, glowing
 * tail lights and a rear spoiler. Forward is +x; the parent rotates it to
 * follow the road.
 */
type Variant = "lead" | "rivalA" | "rivalB";

/** Liveries: the lead car is the two-tone panda; the rivals run their own paint. */
const LIVERY: Record<Variant, { body: [string, string]; trim: string; stripe: string }> = {
  lead: { body: ["hsl(0 0% 100%)", "hsl(220 10% 90%)"], trim: "hsl(246 30% 8%)", stripe: "hsl(var(--neon-drift))" },
  rivalA: { body: ["hsl(354 72% 46%)", "hsl(354 65% 34%)"], trim: "hsl(350 40% 10%)", stripe: "hsl(0 0% 96%)" },
  rivalB: { body: ["hsl(212 55% 42%)", "hsl(214 60% 28%)"], trim: "hsl(214 45% 9%)", stripe: "hsl(var(--neon-hud))" },
};

const TougeCar = ({ className = "", variant = "lead" }: { className?: string; variant?: Variant }) => {
  const paint = LIVERY[variant];
  const uid = variant;
  return (
  <svg viewBox="0 0 64 32" className={`overflow-visible ${className}`} aria-hidden>
    <defs>
      <linearGradient id={`car-beam-${uid}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(50 100% 85%)" stopOpacity="0.75" />
        <stop offset="100%" stopColor="hsl(50 100% 85%)" stopOpacity="0" />
      </linearGradient>
      <radialGradient id={`car-tail-${uid}`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="hsl(0 100% 60%)" stopOpacity="0.9" />
        <stop offset="100%" stopColor="hsl(0 100% 50%)" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`car-body-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={paint.body[0]} />
        <stop offset="50%" stopColor={paint.body[1]} />
        <stop offset="100%" stopColor={paint.body[0]} />
      </linearGradient>
      <linearGradient id={`car-glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(200 40% 30%)" />
        <stop offset="60%" stopColor="hsl(246 40% 8%)" />
      </linearGradient>
    </defs>

    {/* Headlight beams lighting the road ahead */}
    <g style={{ mixBlendMode: "screen" }} className="animate-pulse [animation-duration:3s]">
      <polygon points="58,6 140,-14 140,14" fill={`url(#car-beam-${uid})`} />
      <polygon points="58,26 140,18 140,46" fill={`url(#car-beam-${uid})`} />
    </g>

    {/* Tail-light glow */}
    <ellipse cx="3" cy="8" rx="9" ry="6" fill={`url(#car-tail-${uid})`} />
    <ellipse cx="3" cy="24" rx="9" ry="6" fill={`url(#car-tail-${uid})`} />

    {/* Ground shadow */}
    <rect x="3" y="4" width="58" height="27" rx="7" fill="black" opacity="0.45" transform="translate(1.5 1.5)" />

    {/* Tyres */}
    {[
      [11, 1],
      [11, 27],
      [45, 1],
      [45, 27],
    ].map(([x, y]) => (
      <rect key={`${x}-${y}`} x={x} y={y} width="10" height="4" rx="1.5" fill="hsl(0 0% 6%)" />
    ))}

    {/* Body */}
    <rect x="3" y="3" width="58" height="26" rx="7" fill={`url(#car-body-${uid})`} stroke="hsl(var(--card-ink))" strokeWidth="0.8" />

    {/* Black bonnet and hatch (panda two-tone) */}
    <path d="M 44 4 L 54 4 Q 61 4 61 10 L 61 22 Q 61 28 54 28 L 44 28 Q 46 16 44 4 Z" fill={paint.trim} />
    <path d="M 3 10 Q 3 4 9 4 L 12 4 Q 10 16 12 28 L 9 28 Q 3 28 3 22 Z" fill={paint.trim} />

    {/* Bonnet vent line */}
    <path d="M 50 11 L 55 11 M 50 21 L 55 21" stroke="hsl(0 0% 30%)" strokeWidth="0.8" />

    {/* Windscreen, roof, rear glass */}
    <path d="M 33 6.5 L 41 5.5 Q 44 16 41 26.5 L 33 25.5 Q 35 16 33 6.5 Z" fill={`url(#car-glass-${uid})`} />
    <rect x="20" y="7" width="13" height="18" rx="2" fill={paint.body[0]} stroke="hsl(220 10% 80%)" strokeWidth="0.5" />
    <path d="M 20 7.5 L 14 8.5 Q 12.5 16 14 23.5 L 20 24.5 Q 18.5 16 20 7.5 Z" fill={`url(#car-glass-${uid})`} />
    {/* Roof highlight */}
    <rect x="22" y="9" width="8" height="2" rx="1" fill="white" opacity="0.9" />

    {/* Side mirrors */}
    <rect x="38" y="1.2" width="3" height="2.4" rx="0.8" fill={paint.trim} />
    <rect x="38" y="28.4" width="3" height="2.4" rx="0.8" fill={paint.trim} />

    {/* Pop-up headlights */}
    <rect x="56.5" y="5.5" width="4" height="5" rx="1" fill="hsl(50 100% 80%)" />
    <rect x="56.5" y="21.5" width="4" height="5" rx="1" fill="hsl(50 100% 80%)" />

    {/* Tail lights */}
    <rect x="2.5" y="5.5" width="2.5" height="5.5" rx="0.8" fill="hsl(0 100% 55%)" />
    <rect x="2.5" y="21" width="2.5" height="5.5" rx="0.8" fill="hsl(0 100% 55%)" />

    {/* Rear spoiler */}
    <rect x="6" y="3.5" width="2.2" height="25" rx="1" fill={paint.trim} />

    {/* Orange livery stripe */}
    <path d="M 13 15 L 44 15 L 44 17 L 13 17 Z" fill={paint.stripe} opacity="0.9" />
  </svg>
  );
};

export default TougeCar;
