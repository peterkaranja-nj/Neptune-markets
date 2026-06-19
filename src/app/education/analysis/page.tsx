import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Activity, BarChart2, Globe, ArrowRight, Mail } from "lucide-react";

export const metadata = { title: "Market Analysis | Neptune Markets — Daily Forecasts & Expert Commentary" };

const ANALYSIS_ITEMS = [
  {
    type: "Daily Briefing",   date: "Jun 8, 2026",
    title: "USD Strengthens on Strong NFP Expectations; Gold Tests Key Resistance",
    excerpt: "The US Dollar gained broadly in Monday's session as markets positioned for Friday's Non-Farm Payrolls report. Gold (XAU/USD) pulled back to test the $2,290 support level after touching resistance near $2,320.",
    tags: ["USD", "Gold", "NFP"],
  },
  {
    type: "Technical Setup",  date: "Jun 7, 2026",
    title: "EUR/USD: Head & Shoulders Pattern Forming Below 1.0900",
    excerpt: "EUR/USD has spent the past three sessions building what appears to be a head-and-shoulders reversal pattern just below the key 1.0900 resistance. A break below the neckline at 1.0820 would confirm the pattern.",
    tags: ["EUR/USD", "Technical"],
  },
  {
    type: "Fundamental View", date: "Jun 6, 2026",
    title: "Oil Prices Under Pressure as OPEC+ Supply Cut Doubts Mount",
    excerpt: "Brent Crude fell 1.4% on reports that Saudi Arabia may allow increased production to defend market share. The next OPEC+ meeting on June 20 will be critical. Key support sits at $80.50.",
    tags: ["Oil", "OPEC", "Commodities"],
  },
  {
    type: "Week Ahead",       date: "Jun 5, 2026",
    title: "Week Ahead: US CPI, ECB Rate Decision, and UK GDP in Focus",
    excerpt: "A busy week for macro traders. US CPI on Wednesday is the headline event, with consensus expecting a year-on-year print of 3.1%. The ECB is widely expected to hold rates at Thursday's meeting.",
    tags: ["CPI", "ECB", "Macro"],
  },
  {
    type: "Sector Outlook",   date: "Jun 4, 2026",
    title: "Tech Stocks Face Headwinds as Yield Curve Steepens",
    excerpt: "Rising long-end yields have historically created headwinds for high-multiple technology stocks. NVIDIA, after a 40% run in Q1, faces its first meaningful correction since October. NASDAQ support is at 17,800.",
    tags: ["NAS100", "Stocks", "Rates"],
  },
  {
    type: "Daily Briefing",   date: "Jun 3, 2026",
    title: "Bitcoin Holds $65,000 Despite Equity Weakness; ETF Outflows Stabilise",
    excerpt: "Bitcoin maintained the $65,000 support level on Monday despite broad equity selling. ETF outflow data for the week showed stabilisation, suggesting institutional demand remains intact at current levels.",
    tags: ["BTC", "Crypto"],
  },
];

const TYPE_DARK: Record<string, { cls: string; bg: string }> = {
  "Daily Briefing":   { cls: "text-blue-400 border-blue-400/30",     bg: "rgba(96,165,250,0.12)"  },
  "Technical Setup":  { cls: "text-purple-300 border-purple-300/30", bg: "rgba(196,181,253,0.12)" },
  "Fundamental View": { cls: "text-amber-400 border-amber-400/30",   bg: "rgba(251,191,36,0.12)"  },
  "Week Ahead":       { cls: "text-green-400 border-green-400/30",   bg: "rgba(74,222,128,0.12)"  },
  "Sector Outlook":   { cls: "text-rose-400 border-rose-400/30",     bg: "rgba(251,113,133,0.12)" },
};

const TOOLS = [
  { icon: Activity,  color: "#6c3be4", title: "Trading Central Signals",  desc: "Automated technical signals covering 1,000+ instruments with entry, stop-loss, and target levels." },
  { icon: BarChart2, color: "#0891b2", title: "Autochartist Patterns",    desc: "Real-time chart pattern recognition alerting you to emerging setups — directly in your trading platform." },
  { icon: Globe,     color: "#059669", title: "Economic Calendar",        desc: "Live calendar with consensus forecasts, actual data, and historical comparisons for all major global events." },
];

export default function AnalysisPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center with SVG sparkline background + analysis type pills ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* SVG sparkline background */}
        <div className="absolute inset-x-0 bottom-0 h-48 z-0 pointer-events-none opacity-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" fill="none">
            <path className="sparkline-path" d="M0,90 C100,90 120,60 200,55 C280,50 300,80 380,70 C460,60 480,30 560,25 C640,20 660,50 740,40 C820,30 840,10 920,8 C1000,6 1020,30 1100,20 L1200,15 L1200,120 L0,120 Z"
              fill="url(#sparkGrad)" stroke="none" />
            <path className="sparkline-path" d="M0,90 C100,90 120,60 200,55 C280,50 300,80 380,70 C460,60 480,30 560,25 C640,20 660,50 740,40 C820,30 840,10 920,8 C1000,6 1020,30 1100,20 L1200,15"
              fill="none" stroke="rgba(108,59,228,0.4)" strokeWidth="2" />
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(108,59,228,0.12)" />
                <stop offset="100%" stopColor="rgba(108,59,228,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Market Analysis
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Expert Market Intelligence,<br /><span className="gradient-text">Every Single Day.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Neptune Research publishes daily technical and fundamental analysis across all major asset classes — helping you make informed, confident trading decisions.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Get Daily Analysis Free
            </a>
            <a href="/education/calendar" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              View Calendar
            </a>
          </div>
          {/* Analysis type pills */}
          <div className="hero-fade-up-d4 flex flex-wrap gap-2 justify-center">
            {["Daily Briefing", "Technical Setup", "Fundamental View", "Week Ahead", "Sector Outlook"].map((t, i) => {
              const style = TYPE_DARK[t];
              return (
                <span key={t} className={`text-xs font-bold px-3 py-1.5 rounded-full border badge-stagger ${style?.cls}`}
                  style={{ background: style?.bg, animationDelay: `${i * 0.12 + 0.4}s` }}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-10 items-center justify-between">
            <Animate from="left"><h2 className="font-display text-3xl font-extrabold text-white tracking-tight">Latest Analysis</h2></Animate>
            <Animate from="right">
              <div className="flex gap-2 flex-wrap">
                {["All", "Daily Briefing", "Technical Setup", "Fundamental View"].map((t) => (
                  <button key={t} className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${t === "All" ? "bg-purple-600 text-white border-purple-600" : "border-white/20 text-white/50 hover:border-white/40 hover:text-white/80"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </Animate>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ANALYSIS_ITEMS.map((item, i) => {
              const style = TYPE_DARK[item.type] ?? { cls: "text-white/50 border-white/20", bg: "rgba(255,255,255,0.05)" };
              return (
                <Animate key={item.title} delay={i * 70} from="up">
                  <article className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${style.cls}`} style={{ background: style.bg }}>{item.type}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{item.date}</span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed mb-4">{item.excerpt}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                          style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Institutional-Grade Tools, Free</h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">Every Neptune Markets account holder gets access to professional-level research and analysis tools at no cost.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-6">
            {TOOLS.map((f, i) => {
              const Icon = f.icon;
              return (
                <Animate key={f.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-8 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.10)] transition-all duration-300 overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${f.color}, ${f.color}88)` }} />
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${f.color}18`, border: `1.5px solid ${f.color}30` }}>
                      <Icon size={22} style={{ color: f.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-text mb-3">{f.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UNIQUE CTA: Daily briefing newsletter-style ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">Get Daily Analysis Delivered</h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">Open a Neptune Markets account to get access to daily briefings, technical setups, and expert market commentary — delivered fresh every morning.</p>
            <div className="flex gap-3 items-center mb-4">
              <div className="live-dot" />
              <span className="text-sm text-white/60">Published daily at 07:00 ET</span>
            </div>
            <div className="flex gap-3 items-center">
              <Activity size={14} className="text-purple-400" />
              <span className="text-sm text-white/60">6 analysis types · 20+ daily reports</span>
            </div>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-5">
                <Mail size={16} className="text-purple-400" />
                <span className="text-sm font-bold text-white">Open an Account for Free Access</span>
              </div>
              <a href="/accounts" className="w-full flex items-center justify-center gap-2 font-semibold text-base text-white py-4 rounded-xl bg-purple-gradient btn-sheen shadow-purple-md hover:-translate-y-0.5 transition-all mb-4">
                Open Account — Free <ArrowRight size={16} />
              </a>
              <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Instant access · No credit card · Demo available</p>
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
