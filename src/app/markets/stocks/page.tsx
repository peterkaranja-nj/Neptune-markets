import { TrendingUp, ArrowRight, ChevronRight, Briefcase, Globe, Layers, Shield } from "lucide-react";
import LivePricesCard from "@/components/ui/LivePricesCard";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "Stocks Trading | Neptune Markets — 1,000+ Global Share CFDs" };


const STOCKS = [
  { name: "Apple Inc.",      symbol: "AAPL",  spread: "0.06", leverage: "1:20", exchange: "NASDAQ", color: "#1d1d1f", domain: "apple.com"     },
  { name: "Microsoft Corp.", symbol: "MSFT",  spread: "0.14", leverage: "1:20", exchange: "NASDAQ", color: "#00a4ef", domain: "microsoft.com"  },
  { name: "NVIDIA Corp.",    symbol: "NVDA",  spread: "0.18", leverage: "1:20", exchange: "NASDAQ", color: "#76b900", domain: "nvidia.com"     },
  { name: "Alphabet Inc.",   symbol: "GOOGL", spread: "0.15", leverage: "1:20", exchange: "NASDAQ", color: "#4285f4", domain: "google.com"     },
  { name: "Amazon.com Inc.", symbol: "AMZN",  spread: "0.12", leverage: "1:20", exchange: "NASDAQ", color: "#ff9900", domain: "amazon.com"     },
  { name: "Tesla Inc.",      symbol: "TSLA",  spread: "0.12", leverage: "1:20", exchange: "NASDAQ", color: "#cc0000", domain: "tesla.com"      },
  { name: "Meta Platforms",  symbol: "META",  spread: "0.16", leverage: "1:20", exchange: "NASDAQ", color: "#0082fb", domain: "meta.com"       },
  { name: "JP Morgan Chase", symbol: "JPM",   spread: "0.10", leverage: "1:20", exchange: "NYSE",   color: "#005792", domain: "jpmorgan.com"   },
];

const WHY = [
  { icon: TrendingUp, color: "#6c3be4", title: "Long & Short",        stat: "Both Ways",     desc: "CFDs let you profit from both rising and falling stock prices — go long when bullish, short when bearish." },
  { icon: Globe,      color: "#0891b2", title: "No Ownership Needed", stat: "Lower Capital", desc: "Access Apple or Tesla price movements without owning shares, with reduced capital requirements." },
  { icon: Layers,     color: "#059669", title: "Leverage Available",  stat: "Up to 1:20",    desc: "Trade up to 1:20 leverage on major equities, giving you bigger exposure with a fraction of the capital." },
  { icon: Shield,     color: "#d97706", title: "Diversify Globally",  stat: "1,000+ Stocks", desc: "Access US, UK, European and Asian blue chips all on one account, without multiple brokers." },
];

export default function StocksPage() {
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
                <span>Markets</span><ChevronRight size={12} /><span className="text-purple-600">Stocks</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Trade</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>
                  Stocks
                </span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Markets</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                1,000+ global share CFDs — US, UK, European and Asian blue chips, long or short, no share ownership required.
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

            <LivePricesCard category="stocks" />
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
                  <Briefcase size={14} color="#fff" />
                </div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.12em]">Popular Stocks</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight leading-tight">
                Global Stock<br />
                <span style={{ color: "#b8a0ff" }}>Instruments</span>
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-xs text-right hidden md:block">Spreads shown are typical and may vary with market conditions.</p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[520px]">
              <div className="grid px-5 pb-2 text-2xs font-bold uppercase tracking-widest font-body"
                style={{ gridTemplateColumns: "44px 1.6fr 0.9fr 0.9fr 0.9fr 1fr", color: "rgba(255,255,255,0.28)" }}>
                <span />
                <span>Company</span>
                <span>Symbol</span>
                <span className="text-center">Spread</span>
                <span className="text-center">Leverage</span>
                <span>Exchange</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {STOCKS.map((row) => (
                  <div key={row.symbol}
                    className="grid items-center rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-150"
                    style={{ gridTemplateColumns: "44px 1.6fr 0.9fr 0.9fr 0.9fr 1fr", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", padding: "13px 20px" }}>
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 flex-shrink-0">
                      <img src={`https://www.google.com/s2/favicons?domain=${row.domain}&sz=128`} alt={row.symbol} width={28} height={28} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold text-white text-[13px]">{row.name}</span>
                    <span className="font-mono text-[13px] text-white/65">{row.symbol}</span>
                    <span className="text-center font-mono font-semibold text-[13px] text-white/70">${row.spread}</span>
                    <span className="text-center font-mono font-bold text-[13px] text-white/65">{row.leverage}</span>
                    <span className="text-[13px] text-white/65 font-body">{row.exchange}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-8 px-4 md:py-12 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-4">Why Trade Stocks with Neptune Markets?</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">Access the world&apos;s most recognisable companies — long or short, with leverage.</p>
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
          <h2 className="font-display text-4xl font-extrabold mb-5">Start Trading Stocks Today</h2>
          <p className="text-white/60 text-lg mb-7">1,000+ global equities on one account. Go long or short with no share ownership.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo First</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
