import { TrendingUp, ArrowRight, ChevronRight, Diamond, Globe, Shield, Layers } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "Commodities Trading | Neptune Markets — Gold, Silver, Oil & More" };

import LivePricesCard from "@/components/ui/LivePricesCard";

const INSTRUMENTS = [
  { name: "Gold",            symbol: "XAU/USD", spread: "0.25",  leverage: "1:200", category: "Metals", color: "linear-gradient(135deg,#b45309,#f59e0b)" },
  { name: "Silver",          symbol: "XAG/USD", spread: "0.03",  leverage: "1:200", category: "Metals", color: "linear-gradient(135deg,#475569,#94a3b8)" },
  { name: "Platinum",        symbol: "XPT/USD", spread: "0.50",  leverage: "1:100", category: "Metals", color: "linear-gradient(135deg,#6b7280,#d1d5db)" },
  { name: "Palladium",       symbol: "XPD/USD", spread: "1.00",  leverage: "1:100", category: "Metals", color: "linear-gradient(135deg,#374151,#9ca3af)" },
  { name: "Brent Crude Oil", symbol: "BRENT",   spread: "0.02",  leverage: "1:100", category: "Energy", color: "linear-gradient(135deg,#1c1917,#57534e)" },
  { name: "WTI Crude Oil",   symbol: "WTI",     spread: "0.02",  leverage: "1:100", category: "Energy", color: "linear-gradient(135deg,#1c1917,#78716c)" },
  { name: "Natural Gas",     symbol: "NGAS",    spread: "0.003", leverage: "1:100", category: "Energy", color: "linear-gradient(135deg,#0c4a6e,#0369a1)" },
  { name: "Coffee",          symbol: "COFFEE",  spread: "0.10",  leverage: "1:50",  category: "Soft",   color: "linear-gradient(135deg,#78350f,#b45309)"  },
];

const WHY = [
  { icon: Globe,      color: "#6c3be4", title: "Inflation Hedge",     stat: "Safe Haven",  desc: "Gold and silver historically preserve value during currency devaluation and inflation." },
  { icon: Layers,     color: "#0891b2", title: "Portfolio Diversity",  stat: "30+ Markets", desc: "Adding commodities reduces correlation and smooths overall portfolio performance." },
  { icon: Shield,     color: "#059669", title: "Safe Haven Assets",   stat: "Low Risk",    desc: "In market downturns, traders flock to gold and precious metals creating strong directional trends." },
  { icon: TrendingUp, color: "#d97706", title: "Global Event Plays",  stat: "High Impact", desc: "Oil, gas and agricultural commodities react sharply to geopolitical events and supply disruptions." },
];

export default function CommoditiesPage() {
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
                <span>Markets</span><ChevronRight size={12} /><span className="text-purple-600">Commodities</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Trade</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>
                  Commodities
                </span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Markets</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Gold, silver, crude oil and agricultural products — 30+ commodity instruments with spreads from 0.02 and leverage up to 1:200.
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

            <LivePricesCard category="commodities" />
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
                  <Diamond size={14} color="#fff" />
                </div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.12em]">All Instruments</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight leading-tight">
                Commodity<br />
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
                <span>Instrument</span>
                <span>Symbol</span>
                <span className="text-center">Spread</span>
                <span className="text-center">Leverage</span>
                <span className="text-center">Category</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {INSTRUMENTS.map((row) => (
                  <div key={row.symbol}
                    className="grid items-center rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-150"
                    style={{ gridTemplateColumns: "44px 1.6fr 0.9fr 0.9fr 0.9fr 1fr", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", padding: "13px 20px" }}>
                    <div className="w-7 h-7 rounded-full" style={{ background: row.color }} />
                    <span className="font-semibold text-white text-[13px]">{row.name}</span>
                    <span className="font-mono text-[13px] text-white/65">{row.symbol}</span>
                    <span className="text-center font-mono font-semibold text-[13px] text-white/70">{row.spread}</span>
                    <span className="text-center font-mono font-bold text-[13px] text-white/65">{row.leverage}</span>
                    <span className="text-center text-[13px] text-white/65 font-body">{row.category}</span>
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
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-4">Why Trade Commodities with Neptune Markets?</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">Timeless assets that move on global macro themes — inflation, geopolitics, and supply.</p>
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
          <h2 className="font-display text-4xl font-extrabold mb-5">Trade Gold & More Today</h2>
          <p className="text-white/60 text-lg mb-7">Precious metals, oil and soft commodities — all on one account, from $100.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo First</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
