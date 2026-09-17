/**
 * The ship. Original artwork: a service module, a spine, two radiator
 * panels and an engine bell, drawn small enough to read at 40px.
 */
const Craft = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 32" className={className} aria-hidden>
    {/* radiator panels */}
    <rect x="22" y="3" width="17" height="6" fill="hsl(var(--signal) / 0.45)" />
    <rect x="22" y="23" width="17" height="6" fill="hsl(var(--signal) / 0.45)" />
    <line x1="30.5" y1="3" x2="30.5" y2="9" stroke="hsl(var(--deep))" strokeWidth="0.8" />
    <line x1="30.5" y1="23" x2="30.5" y2="29" stroke="hsl(var(--deep))" strokeWidth="0.8" />
    {/* spine */}
    <rect x="18" y="14" width="30" height="4" fill="hsl(var(--ice) / 0.85)" />
    {/* command module */}
    <path d="M48 12 L60 16 L48 20 Z" fill="hsl(var(--ice))" />
    {/* engine bell and plume */}
    <path d="M18 11 L10 16 L18 21 Z" fill="hsl(var(--ice) / 0.6)" />
    <path d="M10 16 L0 16" stroke="hsl(var(--gold))" strokeWidth="2.5" strokeLinecap="round" />
    {/* habitat ring */}
    <circle cx="33" cy="16" r="4.5" fill="none" stroke="hsl(var(--gold) / 0.9)" strokeWidth="1.4" />
  </svg>
);

export default Craft;
