import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { TrendingUp, Shield, Globe, Zap, Users, Award, ArrowRight, CheckCircle, X } from "lucide-react";

export const metadata = { title: "Why Neptune Markets | The Transparent Choice for Serious Traders" };

const DIFFERENTIATORS = [
  { icon: TrendingUp, color: "#6c3be4", stat: "0.8 pip", label: "Avg EUR/USD Spread", title: "Industry-Beating Spreads",  desc: "Our EUR/USD spreads average just 0.8 pips on the Standard account and 0.0 pips on Raw Pro — consistently tighter than most competing brokers." },
  { icon: Shield,     color: "#059669", stat: "5",        label: "Regulatory Licences", title: "Five-Regulator Coverage",  desc: "CySEC, FCA, ASIC, FSA, and FSC. Five independent regulators means five layers of audited compliance and fund protection." },
  { icon: Globe,      color: "#0891b2", stat: "1,000+",   label: "Instruments",          title: "Full Market Access",      desc: "Forex, indices, commodities, crypto, stocks — 1,000+ instruments across all major asset classes on a single account." },
  { icon: Zap,        color: "#d97706", stat: "<20ms",    label: "Avg Execution Speed",  title: "Ultra-Fast Execution",    desc: "Average execution speed under 20 milliseconds. STP/ECN order routing means your trade hits the market instantly." },
  { icon: Users,      color: "#6c3be4", stat: "500K+",    label: "Active Traders",       title: "Community of 500K+",      desc: "Over half a million active traders choose Neptune. Copy their strategies, learn from the community, or build your own following." },
  { icon: Award,      color: "#059669", stat: "24/7",     label: "Human Support",        title: "Always-On Human Support", desc: "24/7 live chat and phone support staffed exclusively by real, experienced support agents. Average response: 90 seconds." },
];

const AWARDS = [
  { year: "2025", award: "Best CFD Broker — African Markets",       org: "Africa Forex Awards" },
  { year: "2024", award: "Most Transparent Broker — East Africa",   org: "East Africa Finance Summit" },
  { year: "2024", award: "Best Trading Platform — Mobile",          org: "Forex Ratings Global" },
  { year: "2023", award: "Best Copy Trading Platform",              org: "Investment Trends" },
  { year: "2023", award: "Top Regulated Broker — Emerging Markets", org: "MENA Finance Forum" },
  { year: "2022", award: "Best Client Education — Africa",          org: "APTR Awards" },
];

const COMPARISON = [
  { feature: "Spreads from",         neptune: "0.0 pips (Raw Pro)",     others: "1.0–2.0 pips avg" },
  { feature: "Commission",           neptune: "Zero (Standard)",         others: "Per-trade fees on most" },
  { feature: "Regulatory Licences",  neptune: "5 licences",              others: "1–2 typical" },
  { feature: "Instruments",          neptune: "1,000+",                  others: "200–500 typical" },
  { feature: "Copy Trading",         neptune: "Fully integrated",        others: "Often third-party" },
  { feature: "Min. Deposit",         neptune: "$100",                    others: "$200–$500 typical" },
  { feature: "Execution Speed",      neptune: "<20ms",                   others: "50–200ms typical" },
  { feature: "Free Education",       neptune: "Full Academy",            others: "Basic or paid" },
  { feature: "Support",              neptune: "24/7 human chat + phone", others: "Bots or limited hours" },
  { feature: "Negative Balance",     neptune: "Guaranteed protection",   others: "Not always available" },
];

const STATS = [
  { value: "0.8",    unit: "pip",  label: "EUR/USD spread" },
  { value: "<20",    unit: "ms",   label: "Execution speed" },
  { value: "1,000+", unit: "",     label: "Instruments" },
  { value: "5",      unit: "x",    label: "Regulated" },
  { value: "500K",   unit: "+",    label: "Traders" },
  { value: "$2.4B",  unit: "",     label: "Daily volume" },
];

export default function WhyNeptunePage() {
  return (
    <PageLayout>
      {/* ── HERO: Center + horizontal 6-stat strip ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(108,59,228,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Why Neptune Markets
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-4xl mx-auto">
            Not All Brokers Are Equal.<br />Here&apos;s Why Traders<br /><span className="gradient-text">Choose Neptune.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Tighter spreads, more regulators, faster execution, and genuine 24/7 human support — Neptune Markets delivers on the details that matter most to serious traders.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-12">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Your Account Free
            </a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              Compare Accounts
            </a>
          </div>
          {/* 6-stat horizontal strip */}
          <div className="hero-fade-up-d4 grid grid-cols-3 md:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-purple-sm">
            {STATS.map(({ value, unit, label }) => (
              <div key={label} className="bg-white px-4 py-5 text-center">
                <div className="font-display font-extrabold text-2xl text-purple-700 leading-none mb-1">
                  {value}<span className="text-lg">{unit}</span>
                </div>
                <div className="text-xs text-text-faint">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Six Reasons Neptune Stands Out</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Where most brokers compromise on one or two dimensions, Neptune leads on all six.</p>
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
                    <div className="flex items-end gap-2 mb-5">
                      <div className="font-display text-2xl font-extrabold" style={{ color: d.color }}>{d.stat}</div>
                      <div className="text-xs text-white/35 mb-0.5">{d.label}</div>
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

      {/* ── AWARDS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">Industry Recognition</h2>
            <p className="text-text-muted leading-relaxed mb-8">Neptune has been independently recognised by finance industry bodies for transparency, platform quality, and client service.</p>
            <div className="space-y-3">
              {AWARDS.map((a, i) => (
                <div key={i} className="flex gap-4 bg-surface-bg border border-border rounded-2xl px-5 py-4 hover:border-purple-200 hover:shadow-purple-sm transition-all">
                  <div className="font-display font-extrabold text-purple-600 text-sm flex-shrink-0 w-10">{a.year}</div>
                  <div>
                    <div className="font-bold text-text text-sm mb-0.5">{a.award}</div>
                    <div className="text-xs text-text-faint">{a.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </Animate>
          <Animate from="right">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-text-muted leading-relaxed mb-8">Over 500,000 active traders trust Neptune Markets with their capital. Here is what they value most.</p>
            <div className="space-y-4">
              {[
                { quote: "The spreads are genuinely tighter than any other broker I've used. I switched from a major competitor and immediately saved on every trade.", name: "Michael O.", country: "🇰🇪 Kenya" },
                { quote: "Five regulators gives me real peace of mind. When I call support I always get through to someone knowledgeable within a minute.", name: "Sarah W.", country: "🇿🇦 South Africa" },
                { quote: "Copy trading with Neptune is seamless. I follow two strategies and the allocation controls give me complete flexibility.", name: "Ahmed K.", country: "🇪🇬 Egypt" },
              ].map((t) => (
                <div key={t.name} className="bg-surface-bg border border-border rounded-2xl p-5 hover:border-purple-200 hover:shadow-purple-sm transition-all">
                  <p className="text-sm text-text-muted leading-relaxed mb-3 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-gradient flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">{t.name[0]}</div>
                    <span className="text-xs font-bold text-text">{t.name}</span>
                    <span className="text-xs text-text-faint">{t.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Neptune vs "Other Brokers" comparison mini-table ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate className="text-center mb-12" from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">Neptune vs The Market</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto">A transparent side-by-side comparison based on industry averages and publicly available data.</p>
          </Animate>
          <Animate delay={100} from="scale">
            <div className="glass-dark rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <th className="text-left px-6 py-4 text-2xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>Feature</th>
                    <th className="text-center px-6 py-4 text-2xs font-bold uppercase tracking-widest text-purple-400">Neptune</th>
                    <th className="text-center px-6 py-4 text-2xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>Other Brokers</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(({ feature, neptune, others }, i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="px-6 py-3.5 text-xs text-white/50">{feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <CheckCircle size={11} className="text-green-400" />
                          <span className="text-xs font-semibold text-green-300">{neptune}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <X size={11} className="text-red-400" />
                          <span className="text-xs text-white/40">{others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Animate>
          <Animate delay={200} from="up" className="text-center mt-10">
            <a href="/accounts" className="inline-flex items-center gap-3 font-semibold text-base text-white px-10 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Experience the Difference — Open Free <ArrowRight size={16} />
            </a>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
