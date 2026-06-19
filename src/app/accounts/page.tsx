import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, ChevronRight, Check, Star, Zap, Shield, CreditCard, Headphones } from "lucide-react";
import { ACCOUNT_TYPES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = { title: "Account Types | Neptune Markets" };

const PERKS = [
  { icon: Zap,        color: "#6c3be4", title: "Sub-12ms execution",  desc: "Tier-1 data centres, zero requotes"  },
  { icon: Shield,     color: "#059669", title: "Funds segregated",     desc: "Held at Tier-1 banks, always safe"   },
  { icon: CreditCard, color: "#0891b2", title: "20+ payment methods",  desc: "M-Pesa, Airtel, cards, crypto"       },
  { icon: Headphones, color: "#d97706", title: "24/7 support",         desc: "Under 90s avg. response time"        },
];

const COMPARE_ROWS = [
  { label: "Minimum deposit",   standard: "$100",    rawpro: "$500",     institutional: "Custom"  },
  { label: "Commission",        standard: "$0",       rawpro: "$3.5/lot", institutional: "Custom"  },
  { label: "Min. spread",       standard: "0.8 pip",  rawpro: "0.0 pip",  institutional: "0.0 pip" },
  { label: "Max leverage",      standard: "1:500",    rawpro: "1:500",    institutional: "Custom"  },
  { label: "Free VPS",          standard: "—",        rawpro: "✓",        institutional: "✓"       },
  { label: "Dedicated manager", standard: "—",        rawpro: "—",        institutional: "✓"       },
  { label: "API access",        standard: "—",        rawpro: "✓",        institutional: "✓"       },
];

export default function AccountsPage() {
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
                <span>Home</span><ChevronRight size={12} /><span className="text-purple-600">Accounts</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Choose Your</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>Trading</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Account</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Commission-free Standard, raw ECN pricing on Raw Pro, or fully custom institutional solutions — open in minutes, upgrade any time.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="#accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Open Live Account <ArrowRight size={14} />
                </a>
                <a href="#accounts" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Try Demo Account
                </a>
              </div>
            </div>

            {/* Right — perks */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {PERKS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-2xl p-5 bg-white border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-purple-200 hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${p.color}15`, border: `1.5px solid ${p.color}30` }}>
                      <Icon size={18} style={{ color: p.color }} />
                    </div>
                    <div className="text-sm font-bold text-text mb-1">{p.title}</div>
                    <div className="text-xs text-text-faint leading-relaxed">{p.desc}</div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── ACCOUNT CARDS (dark) ── */}
      <section id="accounts" className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">All Account Types</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">From first-time traders to institutional desks — we have an account built for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {ACCOUNT_TYPES.map((acc, i) => (
              <div key={acc.name}
                className={cn(
                  "rounded-2xl border-[1.5px] transition-all duration-300 relative overflow-hidden",
                  acc.featured
                    ? "border-purple-400 shadow-[0_24px_80px_rgba(108,59,228,0.35)] scale-[1.02] z-10"
                    : "border-white/[0.10] hover:border-white/25 hover:-translate-y-1.5 transition-all"
                )}
                style={{ transitionDelay: `${i * 80}ms`, background: acc.featured ? undefined : "rgba(255,255,255,0.04)" }}
              >
                {acc.featured ? (
                  <>
                    <div className="relative px-5 pt-6 pb-6 md:px-9 md:pt-8 md:pb-8"
                      style={{ background: "linear-gradient(145deg, #1c0f3f 0%, #2d1460 60%, #3a1a7a 100%)" }}>
                      <div className="flex items-center gap-1.5 mb-5">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-400">Most Popular</span>
                      </div>
                      <div className="text-[10px] font-bold text-purple-300/70 uppercase tracking-widest mb-2">{acc.tier}</div>
                      <div className="font-display text-3xl font-extrabold mb-2 tracking-tight text-white">{acc.name}</div>
                      <p className="text-sm text-white/55 mb-7 leading-relaxed">{acc.desc}</p>
                      <div className="font-display font-extrabold leading-none mb-1.5 tracking-tight text-white text-5xl">
                        {acc.price}
                        <span className="text-sm font-normal text-white/45 ml-2">
                          {acc.price !== "Custom" ? (acc.name === "Standard" ? "Commission" : "per lot") : ""}
                        </span>
                      </div>
                      <div className="text-xs text-white/40 mt-1.5">{acc.deposit}</div>
                    </div>
                    <div className="bg-white px-5 py-6 md:px-9 md:py-8">
                      <ul className="space-y-3.5 mb-8">
                        {acc.features.map((feat) => (
                          <li key={feat.text} className={cn("flex items-center gap-3 text-sm", feat.accent ? "text-text font-semibold" : "text-text-muted")}>
                            <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                              <Check size={12} className="text-purple-600" />
                            </div>
                            {feat.text}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-3.5 text-sm font-bold rounded-xl bg-purple-gradient text-white shadow-[0_4px_16px_rgba(108,59,228,0.35)] hover:shadow-[0_8px_28px_rgba(108,59,228,0.45)] hover:-translate-y-0.5 transition-all">
                        {acc.cta}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="px-5 py-6 md:px-9 md:py-9">
                    <div className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-2">{acc.tier}</div>
                    <div className="font-display text-3xl font-extrabold mb-2 tracking-tight text-white">{acc.name}</div>
                    <p className="text-sm text-white/55 mb-7 leading-relaxed">{acc.desc}</p>
                    <div className="mb-7 pb-7 border-b border-white/[0.08]">
                      <div className="font-display font-extrabold leading-none mb-1.5 tracking-tight text-white text-5xl">
                        {acc.price}
                        {acc.price !== "Custom" && (
                          <span className="text-sm font-normal text-white/40 ml-2">
                            {acc.name === "Standard" ? "Commission" : "per lot"}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-white/35 mt-1.5">{acc.deposit}</div>
                    </div>
                    <ul className="space-y-3.5 mb-8">
                      {acc.features.map((feat) => (
                        <li key={feat.text} className="flex items-center gap-3 text-sm text-white/60">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(108,59,228,0.25)", border: "1px solid rgba(108,59,228,0.45)" }}>
                            <Check size={12} className="text-purple-400" />
                          </div>
                          {feat.text}
                        </li>
                      ))}
                    </ul>
                    <button className={cn(
                      "w-full py-3.5 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5",
                      acc.ctaStyle === "dark"
                        ? "bg-white/[0.08] text-white border border-white/15 hover:bg-white/[0.14]"
                        : "bg-white/[0.08] text-white/80 border border-white/15 hover:bg-white/[0.14]"
                    )}>
                      {acc.cta}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE (white) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Compare Accounts</h2>
            <p className="text-text-muted text-base max-w-lg mx-auto">Side-by-side breakdown of every account tier so you can pick with confidence.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-purple-50 border-b border-border">
                  <th className="text-left px-6 py-4 text-[10px] font-bold text-text-faint uppercase tracking-widest">Feature</th>
                  <th className="text-center px-6 py-4 text-[10px] font-bold text-text-faint uppercase tracking-widest">Standard</th>
                  <th className="text-center px-6 py-4 text-[10px] font-bold text-purple-700 uppercase tracking-widest">Raw Pro ✓</th>
                  <th className="text-center px-6 py-4 text-[10px] font-bold text-text-faint uppercase tracking-widest">Institutional</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                    <td className="px-6 py-3.5 font-medium text-text border-b border-border/50">{row.label}</td>
                    <td className="px-6 py-3.5 text-center text-text-muted border-b border-border/50">{row.standard}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-purple-700 border-b border-border/50">{row.rawpro}</td>
                    <td className="px-6 py-3.5 text-center text-text-muted border-b border-border/50">{row.institutional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-5">Start Trading in Minutes</h2>
          <p className="text-white/60 text-lg mb-7">Not sure which account? Start with Standard — zero commission, no commitment. Upgrade any time.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts/standard" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Standard Account</a>
            <a href="/accounts/raw-pro" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">View Raw Pro</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
