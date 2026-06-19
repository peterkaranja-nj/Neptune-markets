import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Users, TrendingUp, Shield, BarChart2, CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata = { title: "Copy Trading | Neptune Markets — Follow Top Traders or Get Copied" };

const HOW_IT_WORKS = [
  { step: "01", title: "Open a Copy Account",   desc: "Register and fund a Neptune Copy Trading account. Minimum $100. Verification takes under 5 minutes." },
  { step: "02", title: "Browse Top Traders",    desc: "Explore our strategy marketplace. Filter by return, drawdown, instruments, risk level, and trading style." },
  { step: "03", title: "Allocate Capital",       desc: "Choose how much to allocate to each strategy. You can follow multiple traders simultaneously." },
  { step: "04", title: "Trades Copy Instantly", desc: "When your followed trader opens a position, it is replicated proportionally in your account in real time." },
];

const BECOME_TRADER = [
  { icon: TrendingUp, color: "#6c3be4", title: "Earn Performance Fees",  desc: "Set a performance fee (up to 30%) on the profits you generate for your followers." },
  { icon: Users,      color: "#0891b2", title: "Build a Following",      desc: "Your verified track record is visible to 500K+ Neptune Markets traders. Top strategies attract significant capital." },
  { icon: Shield,     color: "#059669", title: "Full Control",           desc: "You trade your own account as normal. Copy trades execute for followers without affecting your order flow." },
  { icon: BarChart2,  color: "#d97706", title: "Analytics Dashboard",   desc: "Real-time data on followers, AUM, drawdown metrics, and performance attribution." },
];

const FEATURES_FOLLOWER = [
  "Copy trades from $100 minimum",
  "Follow multiple traders simultaneously",
  "Set maximum drawdown limits per strategy",
  "Pause or stop copying at any time",
  "Full transparency — see all open positions",
  "No lock-up periods — withdraw anytime",
  "Risk-adjusted copying (proportional sizing)",
  "24/7 live monitoring and trade history",
];

export default function CopyTradingPage() {
  return (
    <PageLayout>
      {/* ── HERO: Leader card → connection → Follower visual ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(108,59,228,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Copy Trading
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,58px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Follow Top Traders.<br />Or <span className="gradient-text">Become One.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Automate your exposure to proven strategies — or publish your track record and earn performance fees as others follow your trades.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-12">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Start Copy Trading
            </a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              Become a Provider
            </a>
          </div>
          {/* Leader → Follower visual */}
          <div className="hero-fade-up-d4 hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4 max-w-2xl mx-auto">
            {/* Leader card */}
            <div className="glass-card rounded-2xl p-5 text-left shadow-purple-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-gradient flex items-center justify-center font-display font-extrabold text-white text-sm">JK</div>
                <div>
                  <div className="text-sm font-bold text-text">J. Kamau</div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-faint">12-month return</span>
                <span className="font-bold text-up">+38.4%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-faint">Max drawdown</span>
                <span className="font-bold text-text">8.2%</span>
              </div>
              <div className="mt-3 text-[10px] text-text-faint">📌 Strategy Provider</div>
            </div>
            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-purple-gradient flex items-center justify-center shadow-[0_4px_16px_rgba(108,59,228,0.35)]">
                <ArrowRight size={18} color="#fff" />
              </div>
              <span className="text-[10px] text-text-faint text-center">Auto-copy</span>
            </div>
            {/* Follower card */}
            <div className="glass-card rounded-2xl p-5 text-left shadow-purple-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-surface-dim border border-border flex items-center justify-center font-display font-extrabold text-purple-600 text-sm">YOU</div>
                <div>
                  <div className="text-sm font-bold text-text">Your Account</div>
                  <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded">Following</span>
                </div>
              </div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-faint">Copied return</span>
                <span className="font-bold text-up">+38.4%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-faint">Allocated</span>
                <span className="font-bold text-text">$500</span>
              </div>
              <div className="mt-3 text-[10px] text-text-faint">📌 Follower Account</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">How Copy Trading Works</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Four steps from sign-up to live, automated copying of a proven strategy.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step, i) => (
              <Animate key={step.step} delay={i * 80} from="up">
                <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 h-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="font-display text-5xl font-extrabold mb-5 leading-none" style={{ color: "rgba(255,255,255,0.12)" }}>{step.step}</div>
                  <h3 className="font-display text-base font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOLLOWERS / PROVIDERS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">For Followers</h2>
            <p className="text-text-muted leading-relaxed mb-8">No trading experience? No time to watch charts? Copy the strategies of verified, profitable traders — automatically, in your own account.</p>
            <div className="space-y-3">
              {FEATURES_FOLLOWER.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={13} className="text-purple-600" />
                  </div>
                  <span className="text-text-muted text-sm">{f}</span>
                </div>
              ))}
            </div>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 mt-8 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Start Following Traders
            </a>
          </Animate>
          <Animate from="right">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">For Strategy Providers</h2>
            <p className="text-text-muted leading-relaxed mb-8">Turn your trading edge into passive income. Set your fee, publish your track record, and earn performance fees as followers replicate your trades.</p>
            <div className="grid gap-4">
              {BECOME_TRADER.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 bg-surface-bg border border-border rounded-2xl p-5 hover:border-purple-200 hover:shadow-purple-sm transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}30` }}>
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-text text-sm mb-1">{item.title}</div>
                      <div className="text-text-muted text-sm">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Two-card choice ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center mb-12">
          <Animate from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">Choose Your Role</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto">Whether you want to follow a strategy or publish your own — Neptune Copy Trading has you covered.</p>
          </Animate>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">
          <Animate from="left" delay={100}>
            <div className="rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: "rgba(108,59,228,0.3)", border: "2px solid rgba(108,59,228,0.6)" }}>
                <Users size={24} className="text-purple-300" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Follow</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">I Want to Follow a Strategy</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">Copy verified traders automatically. Start from $100, pause or stop anytime.</p>
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-sm text-white px-6 py-3 rounded-xl bg-purple-gradient btn-sheen shadow-purple-md hover:-translate-y-0.5 transition-all">
                Open Follower Account <ArrowRight size={14} />
              </a>
            </div>
          </Animate>
          <Animate from="right" delay={100}>
            <div className="rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: "rgba(5,150,105,0.3)", border: "2px solid rgba(5,150,105,0.6)" }}>
                <TrendingUp size={24} style={{ color: "#6ee7b7" }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Provide</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">I Want to Get Copied</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">Publish your track record, earn up to 30% performance fee from your followers.</p>
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-sm text-white px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all"
                style={{ background: "rgba(5,150,105,0.35)", border: "1px solid rgba(5,150,105,0.6)" }}>
                Become a Provider <ArrowRight size={14} />
              </a>
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
