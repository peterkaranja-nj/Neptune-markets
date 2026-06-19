import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, ChevronRight, Check, DollarSign, Users, Monitor, TrendingUp, BarChart2, Wallet } from "lucide-react";

export const metadata = { title: "Partner Program | Neptune Markets" };

const PROGRAMS = [
  {
    icon: Users,      color: "#6c3be4",
    title: "Introducing Broker",
    tag: "IB Program",
    desc: "Refer clients and earn per-lot commissions on every trade they make — paid weekly, no earning cap, multi-tier sub-IB structures.",
    highlights: ["Competitive per-lot rebates", "Multi-tier IB network", "Weekly payouts", "Dedicated IB portal"],
  },
  {
    icon: DollarSign, color: "#059669",
    title: "Affiliate Program",
    tag: "CPA & RevShare",
    desc: "Earn CPA bounties or lifetime revenue share for every client you bring. Ideal for content creators, signal providers and media.",
    highlights: ["CPA or RevShare models", "Real-time tracking links", "Marketing materials provided", "Monthly reporting"],
  },
  {
    icon: Monitor,    color: "#0891b2",
    title: "PAMM / MAM",
    tag: "Money Manager",
    desc: "Manage multiple client accounts from a single master account. Full PAMM and MAM solutions with transparent performance fees.",
    highlights: ["Single master login", "Custom fee structures", "Investor performance reports", "FIX API support"],
  },
];

const IB_STATS = [
  { label: "Total Clients",     value: "1,247",   color: "text-text"       },
  { label: "Active This Month", value: "842",     color: "text-purple-600" },
  { label: "Monthly Volume",    value: "$2.4B",   color: "text-text"       },
  { label: "Commission Earned", value: "$18,420", color: "text-green-600"  },
];

const WHY = [
  { icon: TrendingUp, color: "#6c3be4", title: "No Earning Cap",       desc: "The more you refer, the more you earn — no ceiling on your income potential." },
  { icon: BarChart2,  color: "#0891b2", title: "Real-Time Dashboard",  desc: "Track clients, volumes, commissions and performance live in your IB portal." },
  { icon: Wallet,     color: "#059669", title: "Weekly Payouts",       desc: "Commissions paid every week directly to your preferred payment method." },
  { icon: Users,      color: "#d97706", title: "Dedicated Manager",    desc: "Every partner gets a dedicated account manager and priority support line." },
];

export default function PartnersPage() {
  return (
    <PageLayout>

      {/* ── HERO (light) ── */}
      <section className="relative overflow-hidden bg-surface-bg pt-28 pb-14">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto px-8 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-text-faint text-xs font-medium">
                <span>Home</span><ChevronRight size={12} /><span className="text-purple-600">Partners</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Grow Your</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>Income</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">with Neptune</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Join IBs, affiliates and money managers worldwide earning consistent commissions. Weekly payouts, real-time tracking, no earning cap.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="#programs" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Become a Partner <ArrowRight size={14} />
                </a>
                <a href="/company/contact" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Right — mini IB preview card */}
            <div className="hidden lg:block">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-[0_8px_40px_rgba(108,59,228,0.10)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-text">IB Partner Dashboard</span>
                  <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">● Live</span>
                </div>
                <div className="text-xs text-text-faint mb-5">Real-time data</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {IB_STATS.map((s) => (
                    <div key={s.label} className="bg-surface-bg border border-border rounded-xl p-4">
                      <div className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-1">{s.label}</div>
                      <div className={`font-display text-xl font-extrabold tracking-tight ${s.color}`}>{s.value}</div>
                    </div>
                  ))}
                </div>
                {[
                  { label: "Monthly Target Progress", val: 84 },
                  { label: "Client Retention Rate",   val: 91 },
                ].map(({ label, val }) => (
                  <div key={label} className="mb-3">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-semibold text-text-muted">{label}</span>
                      <span className="text-xs font-bold text-purple-600">{val}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROGRAM CARDS (dark) ── */}
      <section id="programs" className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Choose Your Partnership Model</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Three distinct programs to match how you work — whether you refer, create content, or manage funds.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group relative rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}66)` }} />
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${p.color}28`, border: `1.5px solid ${p.color}50` }}>
                      <Icon size={22} style={{ color: p.color }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ color: p.color, background: `${p.color}20`, border: `1px solid ${p.color}40` }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-white/50">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${p.color}25`, border: `1px solid ${p.color}45` }}>
                          <Check size={9} style={{ color: p.color }} />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER (white) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">
              Why Partner with Neptune Markets?
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Everything you need to build a serious income stream — tools, support and transparent earnings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}
                  className="group relative rounded-2xl p-6 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.10)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}30` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display text-base font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-5">Start Earning with Neptune</h2>
          <p className="text-white/60 text-lg mb-7">Apply in minutes — our partner team will reach out to discuss commission structures and onboarding.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/company/contact" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Apply Now</a>
            <a href="/company/contact" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Contact Partner Team</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
