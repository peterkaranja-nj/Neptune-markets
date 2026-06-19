import PageLayout from "@/components/layout/PageLayout";
import PlatformSwitcher from "@/components/ui/PlatformSwitcher";
import { BarChart2, Zap, Shield, Globe, Users, Code2, ArrowRight, Check, ChevronRight } from "lucide-react";

export const metadata = { title: "MetaTrader 4 | Neptune Markets — The World's Most Popular Trading Platform" };

const FEATURES = [
  { icon: BarChart2, color: "#6c3be4", title: "30 Indicators",     desc: "A complete suite of analytical tools including trend, oscillator, and volume indicators. Attach custom indicators too." },
  { icon: Zap,       color: "#0891b2", title: "Expert Advisors",   desc: "Build or use pre-built trading robots that execute your strategy automatically 24/5, even while you sleep." },
  { icon: Code2,     color: "#059669", title: "Custom Indicators", desc: "Import any MQL4 custom indicator or build your own. Thousands of free and commercial tools in the marketplace." },
  { icon: Shield,    color: "#d97706", title: "Battle-Tested",     desc: "MetaTrader 4 has been the industry standard for over 20 years. Backed by a vast community and resource base." },
  { icon: Globe,     color: "#dc2626", title: "100+ Forex Pairs",  desc: "All our forex instruments are available on MT4. Trade majors, minors and exotics from one terminal." },
  { icon: Users,     color: "#7c3aed", title: "MQL4 Community",    desc: "Access the MQL4 marketplace with thousands of free and commercial indicators, scripts, and EAs." },
];

const HIGHLIGHTS = [
  "30+ built-in technical indicators",
  "Expert Advisors & automated trading",
  "MQL4 custom indicator marketplace",
  "20+ years of industry reliability",
  "All major, minor & exotic forex pairs",
  "Free VPS hosting for 24/5 EA uptime",
];

const FAQS = [
  { q: "Can I use EAs on Neptune Markets MT4?",    a: "Yes. All Expert Advisors are fully supported. Use our free VPS service to run EAs 24/5 without interruption." },
  { q: "What accounts support MT4?",               a: "Both Standard and Raw Pro accounts are available on MetaTrader 4." },
  { q: "Can I switch between MT4 and MT5?",        a: "Yes — contact support to migrate. Your history and balance carry over seamlessly." },
];

export default function MT4Page() {
  return (
    <PageLayout>

      {/* ── HERO (light) ── */}
      <section className="relative overflow-hidden bg-surface-bg pt-28 pb-6">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <PlatformSwitcher active="mt4" light />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-5 text-text-faint text-xs font-medium">
                <span>Platforms</span><ChevronRight size={12} /><span className="text-purple-600">MetaTrader 4</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Trade with</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#0891b2" }}>
                  MetaTrader 4
                </span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-5">
                The world&apos;s most trusted forex trading platform — battle-tested for 20 years, trusted by millions, and fully supported across all Neptune Markets accounts.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Open MT4 Account <ArrowRight size={14} />
                </a>
                <a href="/accounts" className="inline-flex items-center text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Try MT4 Demo
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl p-6 bg-navy" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
                <div className="text-xs font-bold text-white/45 uppercase tracking-widest mb-4">Key Capabilities</div>
                <div className="space-y-3 mb-5">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(8,145,178,0.28)", border: "1px solid rgba(8,145,178,0.50)" }}>
                        <Check size={11} style={{ color: "#38bdf8" }} />
                      </div>
                      <span className="text-sm text-white/75">{h}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/10">
                  <div className="text-[10px] font-bold text-white/35 uppercase tracking-widest mb-3">Also available to download</div>
                  <div className="flex gap-2.5">
                    <a href="https://www.metatrader4.com/en/download" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 flex-1 rounded-xl px-4 py-3.5 bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all">
                      <svg width="22" height="22" viewBox="0 0 23 23" className="flex-shrink-0">
                        <path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#7fba00" d="M12 1h10v10H12z"/>
                        <path fill="#00a4ef" d="M1 12h10v10H1z"/><path fill="#ffb900" d="M12 12h10v10H12z"/>
                      </svg>
                      <div>
                        <div className="text-[9px] text-white/35 font-semibold uppercase tracking-wide">Download for</div>
                        <div className="text-sm font-bold text-white/75 group-hover:text-white transition-colors">Windows</div>
                      </div>
                    </a>
                    <a href="https://www.metatrader4.com/en/download" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 flex-1 rounded-xl px-4 py-3.5 bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all">
                      <svg width="18" height="22" viewBox="0 0 814 1000" fill="rgba(255,255,255,0.75)" className="flex-shrink-0">
                        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.8-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 268.5-317.3 64.4 0 117.9 42.8 158.1 42.8 38.4 0 98.7-45.3 172.4-45.3 30.9 0 85.8 3.9 127.6 29.2zm-183.2-116.4c-27.5 33.3-77.8 57.8-115 57.8-2.6 0-5.1-.2-7.7-.5 0-34.5 14.7-67.2 43.5-94.1 32.5-30.2 86.2-56.4 128.1-58.1.5 2.9.7 5.8.7 8.7 0 32-12.4 66.5-49.6 86.2z"/>
                      </svg>
                      <div>
                        <div className="text-[9px] text-white/35 font-semibold uppercase tracking-wide">Download for</div>
                        <div className="text-sm font-bold text-white/75 group-hover:text-white transition-colors">macOS</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES (dark) ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#0891b2,#38bdf8)", boxShadow: "0 4px 14px rgba(8,145,178,0.35)" }}>
              <BarChart2 size={14} color="#fff" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#38bdf8" }}>MetaTrader 4</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight mb-8">
            Everything in{" "}
            <span style={{ color: "#7dd3fc" }}>MT4</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group relative rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg,${f.color},${f.color}66)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${f.color}22`, border: `1.5px solid ${f.color}40` }}>
                    <Icon size={20} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MT4 vs MT5 + FAQ ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">MT4 or MT5?</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                If you primarily trade forex and already know MT4, there&apos;s no reason to switch. MT4 remains the most stable, most supported, and most familiar platform for currency traders.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                If you want multi-asset trading (stocks, indices, crypto), faster backtesting, and deeper market analysis, consider upgrading to MetaTrader 5.
              </p>
              <a href="/platforms/mt5" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 border border-purple-300 px-5 py-3 rounded-xl hover:bg-purple-50 transition-all">
                Compare on MT5 <ArrowRight size={13} />
              </a>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-bold text-text-faint uppercase tracking-widest mb-4">Common Questions</div>
              {FAQS.map((item) => (
                <div key={item.q} className="bg-surface-bg border border-border rounded-2xl p-5">
                  <div className="font-semibold text-text text-sm mb-2">{item.q}</div>
                  <div className="text-text-muted text-sm leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-4">Trade on MT4 with Neptune Markets</h2>
          <p className="text-white/60 text-lg mb-7">Open an account and download MT4 in under 5 minutes. Live or demo — your choice.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Open Demo Account</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
