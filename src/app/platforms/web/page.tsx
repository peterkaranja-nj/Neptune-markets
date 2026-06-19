import PageLayout from "@/components/layout/PageLayout";
import PlatformSwitcher from "@/components/ui/PlatformSwitcher";
import { Globe, Zap, BarChart2, Shield, Monitor, Lock, ArrowRight, Check, ChevronRight } from "lucide-react";

export const metadata = { title: "MetaTrader WebTerminal | Neptune Markets — Trade Instantly in Your Browser" };

const FEATURES = [
  { icon: Globe,    color: "#6c3be4", title: "Zero Download",     desc: "Launch instantly in any modern browser. No installation, no updates — just open and trade in seconds." },
  { icon: Zap,      color: "#0891b2", title: "Full Parity",       desc: "Every market, every order type, every chart tool available on desktop — all accessible via browser." },
  { icon: BarChart2,color: "#059669", title: "Advanced Charting", desc: "Multi-timeframe charts with 50+ indicators, drawing tools, and one-click trading directly from charts." },
  { icon: Shield,   color: "#d97706", title: "Segregated Funds",  desc: "Your funds are held in segregated Tier-1 bank accounts — same security standard as all platforms." },
  { icon: Monitor,  color: "#dc2626", title: "Any Device",        desc: "Compatible with any laptop, tablet, or desktop. Responsive layout that adapts to your screen size." },
  { icon: Lock,     color: "#7c3aed", title: "SSL + 2FA",         desc: "All sessions protected with bank-grade 256-bit SSL encryption and two-factor authentication." },
];

const HIGHLIGHTS = [
  "Zero download or installation required",
  "Works on any modern browser",
  "Full feature parity with desktop platforms",
  "50+ indicators and drawing tools",
  "256-bit SSL + two-factor authentication",
  "Instant account access, no setup delay",
];

const BROWSERS = [
  { name: "Chrome",  icon: "🌐", note: "Recommended" },
  { name: "Firefox", icon: "🦊", note: "Supported"   },
  { name: "Safari",  icon: "🧭", note: "Supported"   },
  { name: "Edge",    icon: "🔷", note: "Supported"   },
];

export default function WebTerminalPage() {
  return (
    <PageLayout>

      {/* ── HERO (light) ── */}
      <section className="relative overflow-hidden bg-surface-bg pt-28 pb-6">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <PlatformSwitcher active="web" light />

          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="flex items-center gap-2 mb-5 text-text-faint text-xs font-medium">
                <span>Platforms</span><ChevronRight size={12} /><span className="text-purple-600">WebTerminal</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">MetaTrader</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#059669" }}>
                  WebTerminal
                </span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-5">
                Full platform access from any modern browser. No installation, no updates — open positions, analyse charts, and manage your account in seconds.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Launch WebTerminal <ArrowRight size={14} />
                </a>
                <a href="/accounts" className="inline-flex items-center text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Open Account
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl p-6 bg-navy" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
                <div className="text-xs font-bold text-white/45 uppercase tracking-widest mb-4">Key Capabilities</div>
                <div className="space-y-3 mb-6">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(5,150,105,0.28)", border: "1px solid rgba(52,211,153,0.50)" }}>
                        <Check size={11} style={{ color: "#34d399" }} />
                      </div>
                      <span className="text-sm text-white/75">{h}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/10 flex items-center gap-3" style={{ color: "#34d399" }}>
                  <Globe size={16} />
                  <span className="text-sm font-semibold">No download — launch directly in your browser</span>
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
              style={{ background: "linear-gradient(135deg,#059669,#34d399)", boxShadow: "0 4px 14px rgba(5,150,105,0.35)" }}>
              <Globe size={14} color="#fff" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#34d399" }}>MetaTrader WebTerminal</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight mb-8">
            All the Features.{" "}
            <span style={{ color: "#34d399" }}>No Install.</span>
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

      {/* ── BROWSER COMPATIBILITY ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-3">Works in Every Major Browser</h2>
          <p className="text-text-muted mb-10 max-w-xl mx-auto">Open the WebTerminal directly from your Neptune Markets client portal — no plugins, no extensions, no setup.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {BROWSERS.map((b) => (
              <div key={b.name} className="flex flex-col items-center gap-3 bg-surface-bg border border-border rounded-2xl p-6 hover:border-purple-200 hover:shadow-[0_8px_28px_rgba(108,59,228,0.10)] transition-all">
                <span className="text-4xl">{b.icon}</span>
                <div>
                  <div className="text-sm font-bold text-text">{b.name}</div>
                  <div className="text-xs text-text-faint mt-0.5">{b.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-sm font-semibold text-green-700">
            <Check size={15} />
            Login with your Neptune Markets credentials after opening the terminal
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-4">Launch WebTerminal Now</h2>
          <p className="text-white/60 text-lg mb-7">Open a Neptune Markets account and access the WebTerminal instantly — no download, no delay.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
