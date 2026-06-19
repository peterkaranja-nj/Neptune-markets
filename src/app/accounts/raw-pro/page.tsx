import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Activity, Zap, Monitor, Code, Headphones, BarChart2, ArrowRight } from "lucide-react";

export const metadata = { title: "Raw Pro Account | Neptune Markets — Raw Spreads From 0.0 Pips" };

const DIFFERENTIATORS = [
  { icon: Activity,   color: "#6c3be4", title: "0.0 Pip Raw Spreads",   desc: "True interbank pricing passed directly from Tier-1 liquidity providers — no markup, no desk intervention." },
  { icon: Zap,        color: "#0891b2", title: "STP/ECN Execution",     desc: "Straight-through processing with dedicated order routing. Your trades go direct to market." },
  { icon: Monitor,    color: "#059669", title: "Free VPS Hosting",      desc: "Always-on VPS included — keep your EAs and algorithmic strategies running 24/7 uninterrupted." },
  { icon: Code,       color: "#d97706", title: "Full API Access",       desc: "FIX API and MT5 API access for algorithmic and high-frequency trading strategies." },
  { icon: Headphones, color: "#6c3be4", title: "Priority Support Line", desc: "Dedicated 24/7 priority support with a senior account manager assigned to your account." },
  { icon: BarChart2,  color: "#059669", title: "Advanced Reporting",    desc: "Comprehensive trade analytics, statement exports, and performance reporting tools." },
];

const SPECS = [
  { label: "Minimum Deposit",      value: "$500" },
  { label: "Spreads From",         value: "0.0 pips" },
  { label: "Commission",           value: "$3.5 per lot/side" },
  { label: "Max Leverage (Forex)", value: "1:500" },
  { label: "Execution Type",       value: "STP/ECN" },
  { label: "VPS Hosting",          value: "Free, always-on" },
  { label: "API Access",           value: "FIX API, MT5 API" },
  { label: "Support",              value: "Priority 24/7 line" },
  { label: "Instruments",          value: "1,000+" },
  { label: "Swap-free Option",     value: "Available on request" },
];

const LIVE_SPREADS = [
  { pair: "EUR/USD", spread: "0.0", color: "#059669" },
  { pair: "GBP/USD", spread: "0.1", color: "#059669" },
  { pair: "USD/JPY", spread: "0.2", color: "#6c3be4" },
  { pair: "XAU/USD", spread: "0.4", color: "#d97706" },
];

export default function RawProPage() {
  return (
    <PageLayout>
      {/* ── HERO: Full-width centered with terminal aesthetic + live spreads ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* Giant background "0.0" */}
        <div className="absolute top-[60px] right-[5%] font-display font-extrabold select-none pointer-events-none z-0 hidden lg:block"
          style={{ fontSize: "clamp(160px,18vw,280px)", color: "rgba(108,59,228,0.05)", lineHeight: 1 }}>
          0.0
        </div>
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Raw Pro Account
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Raw Spreads Start at <span className="gradient-text">0.0 Pips.</span><br />No Desk. No Markup.
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Direct market access with true interbank pricing. STP/ECN execution, free VPS hosting, and priority support — engineered for professional and algorithmic traders.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Raw Pro Account
            </a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              Compare Accounts
            </a>
          </div>
          {/* Live spread ticker */}
          <div className="hero-fade-up-d4 inline-flex items-center gap-1 rounded-2xl border border-border bg-white shadow-purple-sm px-2 py-2 flex-wrap justify-center">
            <span className="text-xs text-text-faint font-medium px-3">Live Spreads</span>
            <div className="w-px h-5 bg-border" />
            {LIVE_SPREADS.map(({ pair, spread, color }) => (
              <div key={pair} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                style={{ background: `${color}10` }}>
                <span className="text-xs font-bold text-text font-mono">{pair}</span>
                <span className="font-display text-sm font-extrabold" style={{ color }}>{spread}</span>
              </div>
            ))}
            <div className="flex items-center gap-1 px-3">
              <span className="live-dot" />
              <span className="text-[10px] text-text-faint">Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">What Makes Raw Pro Different</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Six advantages engineered for professional and algorithmic traders.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Animate key={d.title} delay={i * 70} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${d.color}, ${d.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${d.color}28`, border: `1.5px solid ${d.color}50` }}>
                      <Icon size={20} style={{ color: d.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{d.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON + SPECS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-8">Standard vs Raw Pro</h2>
            <div className="bg-surface-bg border border-border rounded-2xl overflow-hidden shadow-purple-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50 border-b border-border">
                    <th className="text-left px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Feature</th>
                    <th className="text-center px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Standard</th>
                    <th className="text-center px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Raw Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Min. Deposit",     "$100",           "$500"               ],
                    ["Spreads",          "From 0.8 pips",  "From 0.0 pips"      ],
                    ["Commission",       "Zero",           "$3.5/lot/side"      ],
                    ["Execution",        "Market",         "STP/ECN"            ],
                    ["Free VPS",         "Volume-based",   "Included"           ],
                    ["Priority Support", "—",              "✓"                  ],
                    ["API Access",       "—",              "✓"                  ],
                    ["Best For",         "Retail traders", "Professionals, EAs" ],
                  ].map(([feature, std, raw], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                      <td className="px-6 py-4 font-medium text-text border-b border-border/50">{feature}</td>
                      <td className="px-6 py-4 text-center text-text-muted border-b border-border/50">{std}</td>
                      <td className="px-6 py-4 text-center font-semibold text-purple-700 border-b border-border/50">{raw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Animate>
          <Animate from="right">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-8">Account Specifications</h2>
            <div className="bg-surface-bg border border-border rounded-2xl overflow-hidden shadow-purple-sm">
              {SPECS.map((s, i) => (
                <div key={s.label} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-surface-bg/60"} border-b border-border last:border-0`}>
                  <span className="text-sm text-text-muted font-medium">{s.label}</span>
                  <span className="text-sm font-bold text-text text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Glassmorphism spread showcase ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(108,59,228,0.5), transparent)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Animate from="left">
              <h2 className="font-display text-4xl font-extrabold text-white mb-4">The Professional Edge You&apos;ve Been Waiting For</h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">Raw interbank pricing. Minimum $500 deposit. Your first priority support call is waiting.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
                  Open Raw Pro Account
                </a>
                <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">
                  Try Demo First
                </a>
              </div>
            </Animate>
            {/* Spread comparison card */}
            <Animate from="right">
              <div className="glass-dark rounded-2xl p-8">
                <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Spread Comparison</div>
                <div className="space-y-4">
                  {[
                    { label: "Raw Pro (ECN)", pips: "0.0", width: "8%",  color: "#059669" },
                    { label: "Industry Avg",  pips: "1.2", width: "60%", color: "#d97706" },
                    { label: "Market Maker",  pips: "2.0", width: "100%",color: "#ef4444" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-white/60">{item.label}</span>
                        <span className="text-xs font-bold font-mono" style={{ color: item.color }}>{item.pips} pips</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: item.width, background: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <ArrowRight size={14} style={{ color: "#059669" }} />
                  <span className="text-xs text-white/50">Lower spread = more profit retained per trade</span>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
