import { ArrowRight, ChevronRight, Layers, Globe, BarChart2, Shield } from "lucide-react";
import LivePricesCard from "@/components/ui/LivePricesCard";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "ETFs Trading | Neptune Markets — Trade Major ETFs as CFDs" };


const SECTOR_COLORS: Record<string, string> = {
  "Broad Market":    "#6c3be4",
  "Technology":      "#0891b2",
  "Precious Metals": "#b45309",
  "Fixed Income":    "#059669",
  "Financials":      "#1d4ed8",
  "Energy":          "#7c2d12",
  "Healthcare":      "#be185d",
  "Emerging Markets":"#0f766e",
};

const ETFS = [
  { name: "SPDR S&P 500 ETF",       symbol: "SPY", spread: "0.06", leverage: "1:20", sector: "Broad Market"     },
  { name: "Invesco QQQ Trust",       symbol: "QQQ", spread: "0.08", leverage: "1:20", sector: "Technology"       },
  { name: "SPDR Gold Shares",        symbol: "GLD", spread: "0.06", leverage: "1:20", sector: "Precious Metals"  },
  { name: "iShares 20+ Yr Bond ETF", symbol: "TLT", spread: "0.08", leverage: "1:20", sector: "Fixed Income"     },
  { name: "Financial Select Sector", symbol: "XLF", spread: "0.05", leverage: "1:20", sector: "Financials"       },
  { name: "Energy Select Sector",    symbol: "XLE", spread: "0.06", leverage: "1:20", sector: "Energy"           },
  { name: "Health Care Select",      symbol: "XLV", spread: "0.07", leverage: "1:20", sector: "Healthcare"       },
  { name: "iShares MSCI Emerging",   symbol: "EEM", spread: "0.04", leverage: "1:20", sector: "Emerging Markets" },
];

const WHY = [
  { icon: Layers,    color: "#6c3be4", title: "Instant Diversification",  stat: "100+ ETFs",       desc: "ETFs hold dozens or hundreds of assets in a single instrument, spreading risk across a sector." },
  { icon: Shield,    color: "#0891b2", title: "Lower Risk Profile",       stat: "Reduced Risk",    desc: "By design, ETFs smooth out individual company risk — suitable for broad exposure without concentration." },
  { icon: BarChart2, color: "#059669", title: "Sector Rotation",          stat: "All Sectors",     desc: "Shift exposure between technology, energy, healthcare and financials with simple liquid instruments." },
  { icon: Globe,     color: "#d97706", title: "Long & Short Flexibility", stat: "Both Directions", desc: "Go long on sectors you expect to outperform, or short those you think will underperform." },
];

export default function EtfsPage() {
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
                <span>Markets</span><ChevronRight size={12} /><span className="text-purple-600">ETFs</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Trade</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>
                  ETF
                </span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Markets</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Sector ETFs, broad market funds, bond and commodity ETFs — 100+ instruments as leveraged CFDs with tight spreads.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Start Trading <ArrowRight size={14} />
                </a>
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Try Demo Account
                </a>
              </div>
            </div>

            <LivePricesCard category="etfs" />
          </div>
        </div>
      </section>

      {/* ── Instruments (dark) ── */}
      <section className="py-8 px-4 md:py-12 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 4px 14px rgba(108,59,228,0.35)" }}>
                  <Layers size={14} color="#fff" />
                </div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.12em]">ETF CFDs</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight leading-tight">
                Popular ETF<br />
                <span style={{ color: "#b8a0ff" }}>Instruments</span>
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-xs text-right hidden md:block">Spreads shown are typical and may vary with market conditions.</p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[520px]">
              <div className="grid px-5 pb-2 text-2xs font-bold uppercase tracking-widest font-body"
                style={{ gridTemplateColumns: "44px 1.6fr 0.9fr 0.9fr 0.9fr 1.2fr", color: "rgba(255,255,255,0.28)" }}>
                <span />
                <span>ETF Name</span>
                <span>Symbol</span>
                <span className="text-center">Spread</span>
                <span className="text-center">Leverage</span>
                <span>Sector</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {ETFS.map((row) => {
                  const col = SECTOR_COLORS[row.sector] ?? "#6c3be4";
                  return (
                    <div key={row.symbol}
                      className="grid items-center rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-150"
                      style={{ gridTemplateColumns: "44px 1.6fr 0.9fr 0.9fr 0.9fr 1.2fr", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", padding: "13px 20px" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black"
                        style={{ background: col, fontSize: 9 }}>
                        {row.symbol.slice(0, 3)}
                      </div>
                      <span className="font-semibold text-white text-[13px]">{row.name}</span>
                      <span className="font-mono text-[13px] text-white/65">{row.symbol}</span>
                      <span className="text-center font-mono font-semibold text-[13px] text-white/70">${row.spread}</span>
                      <span className="text-center font-mono font-bold text-[13px] text-white/65">{row.leverage}</span>
                      <span className="text-[13px] text-white/65 font-body">{row.sector}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-8 px-4 md:py-12 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-4">Why Trade ETFs with Neptune Markets?</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">Diversified exposure across entire sectors — in a single trade, with leverage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group relative rounded-2xl p-6 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.12)] transition-all duration-300 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: `linear-gradient(90deg,${item.color},${item.color}88)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}30` }}>
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
          <h2 className="font-display text-4xl font-extrabold mb-5">Trade Sector ETFs Today</h2>
          <p className="text-white/60 text-lg mb-7">SPY, QQQ, GLD and 100+ more — diversified exposure in a single instrument.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo First</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
