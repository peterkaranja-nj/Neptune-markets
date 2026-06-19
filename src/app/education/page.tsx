import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, ChevronRight, Check, BookOpen, Activity, Calendar, Hash, GraduationCap, BarChart2, Clock, Globe } from "lucide-react";

export const metadata = { title: "Education | Neptune Markets" };

const RESOURCES = [
  {
    icon: BookOpen, color: "#6c3be4",
    tag: "Free Courses",
    title: "Neptune Academy",
    desc: "Structured curriculum from beginner to advanced — risk management, technical analysis, trading psychology and more.",
    href: "/education/academy",
    cta: "Explore Courses",
    highlights: ["40+ structured courses", "300+ video lessons", "Certification on completion"],
  },
  {
    icon: Activity, color: "#0891b2",
    tag: "Daily Analysis",
    title: "Market Analysis",
    desc: "Actionable daily briefings from our research desk covering Forex, Gold, Indices and Crypto — published every morning.",
    href: "/education/analysis",
    cta: "Read Today's Briefing",
    highlights: ["Published every morning", "5+ asset classes covered", "100% independent view"],
  },
  {
    icon: Calendar, color: "#059669",
    tag: "Economic Events",
    title: "Economic Calendar",
    desc: "Live countdown to NFP, FOMC, CPI and 200+ other market-moving data releases with forecast vs. actual tracking.",
    href: "/education/calendar",
    cta: "View Calendar",
    highlights: ["200+ tracked events", "Live countdown timers", "Impact ratings"],
  },
  {
    icon: Hash, color: "#d97706",
    tag: "Reference",
    title: "Trading Glossary",
    desc: "500+ trading terms explained in plain English — from 'bid-ask spread' to 'Fibonacci retracement'.",
    href: "/education/glossary",
    cta: "Browse Glossary",
    highlights: ["500+ definitions", "Examples & charts", "Searchable & filtered"],
  },
];

const WHY = [
  { icon: GraduationCap, color: "#6c3be4", title: "Structured Learning",   desc: "Step-by-step courses from beginner to pro, not just random articles." },
  { icon: BarChart2,     color: "#0891b2", title: "Real Market Insights",  desc: "Daily analysis from professional traders — not generic content." },
  { icon: Clock,         color: "#059669", title: "Learn at Your Pace",    desc: "All material available on demand, 24/7, on any device." },
  { icon: Globe,         color: "#d97706", title: "Free for All Clients",  desc: "Every resource completely free — no paywall, no upsell." },
];

export default function EducationPage() {
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
                <span>Home</span><ChevronRight size={12} /><span className="text-purple-600">Education</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Learn.</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>Analyse.</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Trade Better.</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Free education for every level — from your very first trade to advanced multi-asset strategies. Courses, daily analysis, and live market tools, all in one place.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/education/academy" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Start Learning <ArrowRight size={14} />
                </a>
                <a href="/education/analysis" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  Daily Analysis
                </a>
              </div>
            </div>

            {/* Right — stat bars */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { val: "40+",   label: "Structured courses",       color: "#6c3be4" },
                { val: "Daily", label: "Expert market briefings",  color: "#0891b2" },
                { val: "500+",  label: "Glossary definitions",     color: "#059669" },
                { val: "Free",  label: "For all Neptune clients",  color: "#d97706" },
              ].map(({ val, label, color }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl px-5 py-4 bg-white border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-purple-200 transition-all">
                  <div className="w-1.5 h-10 rounded-full flex-shrink-0" style={{ background: color }} />
                  <div>
                    <div className="font-display text-2xl font-extrabold text-text tracking-tight">{val}</div>
                    <div className="text-xs text-text-faint mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── RESOURCE CARDS (dark) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Everything You Need to Trade Smarter</h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">Four free tools covering education, analysis, events and reference — built for every stage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="group rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl hidden" />
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${r.color}28`, border: `1.5px solid ${r.color}50` }}>
                      <Icon size={22} style={{ color: r.color }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ color: r.color, background: `${r.color}20`, border: `1px solid ${r.color}40` }}>
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white mb-2 tracking-tight">{r.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{r.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-white/50">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${r.color}25`, border: `1px solid ${r.color}45` }}>
                          <Check size={9} style={{ color: r.color }} />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a href={r.href} className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all"
                    style={{ color: r.color }}>
                    {r.cta} <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY LEARN WITH NEPTUNE (white) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">
              Why Learn with Neptune Markets?
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Education built by traders, for traders — not a marketing afterthought.
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
          <h2 className="font-display text-4xl font-extrabold mb-5">Ready to Put Your Knowledge to Work?</h2>
          <p className="text-white/60 text-lg mb-7">Open a free demo account and practise everything you learn — zero risk, real market conditions.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Demo Account</a>
            <a href="/education/academy" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Browse Courses</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
