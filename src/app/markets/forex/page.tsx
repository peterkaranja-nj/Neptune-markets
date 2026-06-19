import { TrendingUp, ArrowRight, ChevronRight, Layers, Globe, BarChart2, Shield } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { flagUrl } from "@/lib/flags";
import LivePricesCard from "@/components/ui/LivePricesCard";

const MAJORS = [
  { pair: "EUR/USD", spread: "0.1", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "GBP/USD", spread: "0.1", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "USD/JPY", spread: "0.2", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "USD/CHF", spread: "0.1", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "AUD/USD", spread: "0.1", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "USD/CAD", spread: "0.2", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "NZD/USD", spread: "0.2", leverage: "1:500", minLot: "0.01", hours: "24/5" },
  { pair: "EUR/GBP", spread: "0.3", leverage: "1:500", minLot: "0.01", hours: "24/5" },
];

const PAIR_CODES: Record<string, string[]> = {
  "EUR/USD": ["eu", "us"], "GBP/USD": ["gb", "us"], "USD/JPY": ["us", "jp"],
  "USD/CHF": ["us", "ch"], "AUD/USD": ["au", "us"], "USD/CAD": ["us", "ca"],
  "NZD/USD": ["nz", "us"], "EUR/GBP": ["eu", "gb"],
};

const WHY = [
  { icon: Globe,    color: "#6c3be4", title: "Deepest Liquidity",      stat: "$6.6T/day",   desc: "The most liquid market on earth. Tight spreads, minimal slippage, and always-available pricing even in volatile conditions." },
  { icon: BarChart2,color: "#0891b2", title: "Round-the-Clock Access", stat: "24/5",         desc: "Trade 24 hours a day, 5 days a week — from the Sydney open to the New York close." },
  { icon: Layers,   color: "#059669", title: "High Leverage",          stat: "Up to 1:500",  desc: "Access up to 1:500 leverage on major pairs. Leverage amplifies both profits and losses." },
  { icon: Shield,   color: "#d97706", title: "Portfolio Hedging",      stat: "70+ Pairs",    desc: "Use currency pairs to hedge exposure in other asset classes or international business activity." },
];

export default function ForexPage() {
  return (
    <PageLayout>

      {/* ── HERO (light) ── */}
      <section className="relative overflow-hidden bg-surface-bg pt-28 pb-14">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="max-w-8xl mx-auto px-8 md:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5 text-text-faint text-xs font-medium">
                <span>Markets</span>
                <ChevronRight size={12} />
                <span className="text-purple-600">Forex</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Trade</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>
                  Forex
                </span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Markets</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Trade 70+ currency pairs — majors, minors and exotics — with spreads from 0.0 pips and leverage up to 1:500.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Start Trading Forex <ArrowRight size={14} />
                </a>
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Try Demo Account
                </a>
              </div>
            </div>

            <LivePricesCard category="forex" />
          </div>
        </div>
      </section>

      {/* ── Pair table (dark) ── */}
      <section className="py-8 px-4 md:py-12 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 4px 14px rgba(108,59,228,0.35)" }}>
                  <TrendingUp size={14} color="#fff" />
                </div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.12em]">Major Pairs</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight leading-tight">
                Popular Forex<br />
                <span style={{ color: "#b8a0ff" }}>Instruments</span>
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-xs text-right hidden md:block">Spreads shown are typical and may vary with market conditions.</p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[560px]">
              <div className="grid px-5 pb-2 text-2xs font-bold uppercase tracking-widest font-body"
                style={{ gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1fr", color: "rgba(255,255,255,0.28)" }}>
                <span>Pair</span>
                <span className="text-center">Spread</span>
                <span className="text-center">Leverage</span>
                <span className="text-center">Min Lot</span>
                <span className="text-center">Hours</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {MAJORS.map((row) => {
                  const codes = PAIR_CODES[row.pair] ?? [];
                  return (
                    <div key={row.pair}
                      className="grid items-center rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-150"
                      style={{ gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1fr", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", padding: "13px 20px" }}>
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 flex-shrink-0">
                          {codes.map((code, fi) => (
                            <div key={fi} className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                              style={{ border: "2px solid rgba(255,255,255,0.15)", zIndex: codes.length - fi }}>
                              <img src={flagUrl(code, 20)} alt={code.toUpperCase()} width={28} height={28}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                            </div>
                          ))}
                        </div>
                        <span className="font-bold text-white font-mono text-[13px]">{row.pair}</span>
                      </div>
                      <span className="text-center font-mono font-semibold text-[13px] text-white/70">{row.spread}</span>
                      <span className="text-center font-mono font-bold text-[13px] text-white/65">{row.leverage}</span>
                      <span className="text-center font-mono font-semibold text-[13px] text-white/70">{row.minLot}</span>
                      <span className="text-center font-semibold text-[13px] text-white/70 font-body">{row.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Forex ── */}
      <section className="py-8 px-4 md:py-12 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-4">
              Why Trade Forex with Neptune Markets?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The world&apos;s largest financial market, accessible with the best conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}
                  className="group relative rounded-2xl p-6 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.12)] transition-all duration-300 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}30` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.stat}</div>
                  <h3 className="font-display text-base font-bold text-text mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-5">Ready to Trade Forex?</h2>
          <p className="text-white/60 text-lg mb-7">Open a live or demo account in minutes. No hidden fees. Full access to all 70+ pairs.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo First</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
