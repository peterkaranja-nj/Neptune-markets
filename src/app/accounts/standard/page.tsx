import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { TrendingUp, Zap, Shield, Lock, CreditCard, Headphones, ArrowRight } from "lucide-react";

export const metadata = { title: "Standard Account | Neptune Markets — Commission-Free Trading From $100" };

const FEATURES = [
  { icon: TrendingUp, color: "#6c3be4", title: "Zero Commission",             desc: "Trade all 1,000+ instruments with absolutely no commission charges, ever." },
  { icon: Zap,        color: "#0891b2", title: "Spreads From 0.8 Pips",       desc: "Tight spreads on major forex pairs starting from just 0.8 pips." },
  { icon: Shield,     color: "#059669", title: "Up to 1:500 Leverage",        desc: "Maximum leverage of 1:500 on major forex pairs for capital efficiency." },
  { icon: Lock,       color: "#d97706", title: "Negative Balance Protection", desc: "Your balance can never fall below zero — Neptune absorbs any deficit." },
  { icon: CreditCard, color: "#6c3be4", title: "Instant Deposits",            desc: "20+ methods: M-Pesa, Airtel, cards, crypto, Skrill, and bank wire." },
  { icon: Headphones, color: "#059669", title: "24/7 Multilingual Support",   desc: "Real people available around the clock — under 90 seconds response." },
];

const SPECS = [
  { label: "Minimum Deposit",       value: "$100" },
  { label: "Commission",            value: "Zero" },
  { label: "Spreads From",          value: "0.8 pips" },
  { label: "Max Leverage (Forex)",  value: "1:500" },
  { label: "Max Leverage (Crypto)", value: "1:20" },
  { label: "Instruments",           value: "1,000+" },
  { label: "Platforms",             value: "MT4, MT5, App, Web" },
  { label: "Execution Type",        value: "Market" },
  { label: "Account Currencies",    value: "USD, EUR, GBP, KES, ZAR" },
  { label: "Free VPS",              value: "Available (volume conditions apply)" },
];

const CARD_STATS = [
  { label: "Min. Deposit",  value: "$100",    color: "#6c3be4" },
  { label: "Commission",    value: "Free",    color: "#059669" },
  { label: "Spreads From",  value: "0.8 pip", color: "#0891b2" },
  { label: "Max Leverage",  value: "1:500",   color: "#d97706" },
  { label: "Instruments",   value: "1,000+",  color: "#6c3be4" },
];

const STEPS = [
  { step: "1", title: "Register Free",   desc: "Complete KYC verification in under 5 minutes. No documents needed to start a demo." },
  { step: "2", title: "Deposit $100",    desc: "Fund via M-Pesa, card, crypto, Skrill, or bank wire. Funds arrive instantly." },
  { step: "3", title: "Trade Markets",   desc: "Access 1,000+ instruments — forex, indices, crypto, commodities — immediately." },
];

export default function StandardAccountPage() {
  return (
    <PageLayout>
      {/* ── HERO: Split layout with floating account card ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute top-[-120px] right-[-80px] w-[700px] h-[700px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(108,59,228,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-center">
          <div>
            <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
              Standard Account
            </span>
            <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5">
              Commission-Free Trading.<br />The Full Market,<br /><span className="gradient-text">From $100.</span>
            </h1>
            <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-lg mb-8">
              No commissions. No hidden fees. Access to 1,000+ instruments with spreads from 0.8 pips and leverage up to 1:500 — the ideal starting point for every trader.
            </p>
            <div className="hero-fade-up-d3 flex gap-4 flex-wrap">
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                Open Standard Account
              </a>
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
                Compare All Accounts
              </a>
            </div>
          </div>
          {/* Floating account preview card */}
          <div className="hero-fade-right hidden lg:block">
            <div className="glass-card rounded-2xl p-7 shadow-purple-xl">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-text-faint uppercase tracking-widest">Neptune Standard</span>
                <span className="text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-100 px-2 py-1 rounded-full">LIVE</span>
              </div>
              {CARD_STATS.map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm text-text-muted">{label}</span>
                  <span className="font-display font-bold text-base" style={{ color }}>{value}</span>
                </div>
              ))}
              <a href="/accounts" className="mt-6 w-full inline-flex items-center justify-center gap-2 font-semibold text-sm text-white py-3 rounded-xl bg-purple-gradient btn-sheen shadow-purple-md hover:-translate-y-0.5 transition-all">
                Open Account — Free <ArrowRight size={14} />
              </a>
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
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Everything in the Standard Account</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">A full-featured trading account with no hidden costs — starting at just $100.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Animate key={f.title} delay={i * 70} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${f.color}, ${f.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${f.color}28`, border: `1.5px solid ${f.color}50` }}>
                      <Icon size={20} style={{ color: f.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Account Specifications</h2>
            <p className="text-text-muted text-base max-w-lg mx-auto">Full technical details for the Neptune Standard Account.</p>
          </Animate>
          <Animate delay={100} from="scale">
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

      {/* ── UNIQUE CTA: 3-step process ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(108,59,228,0.15) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Animate from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">Start Trading in 3 Simple Steps</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-12">From registration to live trading in under 10 minutes.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {STEPS.map((s, i) => (
              <Animate key={s.step} delay={i * 100} from="up">
                <div className="relative rounded-2xl p-7 text-center"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="w-12 h-12 rounded-full bg-purple-gradient flex items-center justify-center mx-auto mb-4 shadow-[0_4px_16px_rgba(108,59,228,0.4)] font-display font-extrabold text-white text-lg">
                    {s.step}
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-10 -right-3 z-10">
                      <ArrowRight size={20} style={{ color: "rgba(255,255,255,0.2)" }} />
                    </div>
                  )}
                  <h3 className="font-display text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
          <Animate delay={300} from="scale">
            <a href="/accounts" className="inline-flex items-center gap-3 font-semibold text-base text-white px-10 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Account Now — Free <ArrowRight size={16} />
            </a>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
