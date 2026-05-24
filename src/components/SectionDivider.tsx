interface SectionDividerProps {
  label?: string;
  code?: string;
}

/**
 * A short divider strip with a recurring scan-bar animation
 * to use BETWEEN sections — reinforces the "document being scanned" feel.
 */
const SectionDivider = ({
  label = "TRANSMISSION",
  code = "SEC-XX",
}: SectionDividerProps) => {
  return (
    <div
      aria-hidden
      className="relative w-full bg-paper-cream border-y border-ink/40 paper-grain overflow-hidden"
    >
      <div className="relative flex items-center justify-between w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-2.5">
        <div className="flex items-center gap-3 font-courier text-[11px] sm:text-[12px] tracking-[0.4em] text-ink-brown uppercase">
          <span className="w-2 h-2 bg-ink animate-pulse-classified" />
          <span>{label}</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span className="hidden sm:inline">DECLASSIFIED IN TRANSIT</span>
        </div>
        <div className="flex items-center gap-3 font-courier text-[11px] sm:text-[12px] tracking-[0.4em] text-ink-brown uppercase">
          <span className="hidden sm:inline">{code}</span>
          <span className="opacity-50">//</span>
          <span className="barcode h-3 w-16 sm:w-24" />
        </div>
      </div>

      {/* Animated scan bar across the divider */}
      <div className="absolute left-0 right-0 bottom-0">
        <div className="divider-scan-bar" />
      </div>
    </div>
  );
};

export default SectionDivider;
