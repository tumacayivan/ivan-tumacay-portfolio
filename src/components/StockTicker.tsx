interface Tick {
  sym: string;
  price: string;
  chg: string;
  up: boolean;
}

/* Illustrative ticker tape — not live market data. IVT is the headliner. */
const ticks: Tick[] = [
  { sym: "IVT", price: "1,024.80", chg: "+12.4%", up: true },
  { sym: "CLSR", price: "88.50", chg: "+6.9%", up: true },
  { sym: "SPX", price: "5,815.20", chg: "+1.2%", up: true },
  { sym: "AAPL", price: "229.35", chg: "+1.8%", up: true },
  { sym: "NVDA", price: "132.40", chg: "+3.4%", up: true },
  { sym: "TSLA", price: "412.60", chg: "-2.1%", up: false },
  { sym: "MSFT", price: "438.21", chg: "+0.9%", up: true },
  { sym: "AMZN", price: "201.15", chg: "+1.2%", up: true },
  { sym: "GOOGL", price: "178.92", chg: "-0.6%", up: false },
  { sym: "META", price: "564.30", chg: "+2.7%", up: true },
  { sym: "JPM", price: "242.18", chg: "+0.4%", up: true },
  { sym: "GS", price: "512.77", chg: "+1.1%", up: true },
  { sym: "DJI", price: "43,210", chg: "+0.8%", up: true },
  { sym: "BTC", price: "67,940", chg: "+4.2%", up: true },
  { sym: "ETH", price: "3,512", chg: "-1.3%", up: false },
  { sym: "GOLD", price: "2,648", chg: "+0.5%", up: true },
];

const TickItem = ({ t }: { t: Tick }) => (
  <div className="flex items-center gap-2.5 px-7 border-r border-[hsl(40_18%_30%/0.14)] shrink-0">
    <span className="font-blackops text-[20px] sm:text-[23px] tracking-[0.12em] text-[hsl(var(--ink-charcoal))]">
      {t.sym}
    </span>
    <span className="font-courier text-[16px] sm:text-[17px] text-[hsl(var(--ink-brown))]">{t.price}</span>
    <span
      className={`font-courier text-[15px] sm:text-[16px] font-bold flex items-center gap-1 ${
        t.up ? "text-[hsl(145_60%_32%)]" : "text-[hsl(2_72%_46%)]"
      }`}
    >
      {t.up ? "▲" : "▼"} {t.chg.replace(/^[+-]/, "")}
    </span>
  </div>
);

const StockTicker = () => {
  const doubled = [...ticks, ...ticks];

  return (
    <section className="relative flex items-center h-[64px] sm:h-[72px] overflow-hidden bg-[hsl(45_36%_97%)] border-y-2 border-[hsl(var(--accent-red))]">
      <div className="marquee-container relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[hsl(45_36%_97%)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[hsl(45_36%_97%)] to-transparent" />

        <div className="flex items-center animate-marquee-left" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <TickItem key={`${t.sym}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockTicker;
