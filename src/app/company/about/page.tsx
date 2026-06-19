import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Heart, Zap, Globe, Users, ArrowRight } from "lucide-react";

export const metadata = { title: "About Neptune Markets | Built by Traders, for Traders" };

const VALUES = [
  { icon: Heart,  color: "#6c3be4", title: "Trader-First, Always",     desc: "Every product decision is evaluated against one question: does this make trading better, fairer, or more accessible for our clients?" },
  { icon: Zap,    color: "#0891b2", title: "Speed Without Compromise",  desc: "Fast execution must never come at the cost of reliability. We invest in infrastructure before marketing." },
  { icon: Globe,  color: "#059669", title: "Globally Accessible",       desc: "World-class trading infrastructure should not be reserved for those with connections or large capital. Anyone with $100 should have it." },
];

const NUMBERS = [
  { value: "500K+",  label: "Active Traders",     color: "#6c3be4" },
  { value: "180+",   label: "Countries Served",   color: "#0891b2" },
  { value: "5",      label: "Regulatory Licences",color: "#059669" },
  { value: "10+",    label: "Years in Markets",   color: "#d97706" },
  { value: "$2.4B",  label: "Daily Volume",       color: "#6c3be4" },
  { value: "24/7",   label: "Live Support",       color: "#059669" },
];

const TEAM_STATS = [
  { label: "Founded",         value: "2014" },
  { label: "Headquarters",    value: "Limassol, Cyprus" },
  { label: "Team Size",       value: "350+ professionals" },
  { label: "Support Languages", value: "18 languages" },
  { label: "Annual Volume",   value: "~$880B" },
  { label: "Regulators",      value: "CySEC, FCA, ASIC, FSA, FSC" },
];

const MILESTONES = [
  { year: "2014", title: "Neptune Founded",            desc: "Incorporated in Cyprus, CySEC licensed. Launched with forex and CFD trading." },
  { year: "2016", title: "FCA Authorisation",          desc: "Received FCA authorisation, marking our entry into the UK and EEA markets." },
  { year: "2018", title: "100,000 Traders",            desc: "Reached 100,000 active traders across 80 countries. Launched the Neptune mobile app." },
  { year: "2020", title: "Copy Trading Launched",      desc: "Neptune Copy Trading went live, opening professional strategies to retail investors." },
  { year: "2022", title: "ASIC + FSA Licences",        desc: "Expanded into Asia-Pacific and Seychelles with dual regulatory approvals." },
  { year: "2024", title: "500,000 Traders & $2.4B ADV", desc: "Half a million active traders, $2.4 billion in daily volume. Academy launched." },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* ── HERO: Split — text left, numbers grid right ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(108,59,228,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 grid lg:grid-cols-[1fr_420px] gap-14 xl:gap-20 items-center">
          <div>
            <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
              About Neptune Markets
            </span>
            <h1 className="hero-fade-up-d1 font-display text-[clamp(32px,4vw,58px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5">
              Built by Traders.<br />Regulated for Trust.<br /><span className="gradient-text">Serving 500K+.</span>
            </h1>
            <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-xl mb-8">
              Neptune Markets was founded in 2014 with a single conviction: that institutional-grade trading infrastructure should be available to everyone — from the first-time retail trader to the seasoned professional.
            </p>
            <div className="hero-fade-up-d3 flex gap-4 flex-wrap">
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                Open Your Account
              </a>
              <a href="/company/regulation" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
                View Regulation
              </a>
            </div>
          </div>
          {/* Numbers grid */}
          <div className="hero-fade-right hidden lg:grid grid-cols-2 gap-4">
            {NUMBERS.map(({ value, label, color }) => (
              <div key={label} className="glass-card rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-all">
                <div className="font-display text-3xl font-extrabold mb-1" style={{ color }}>{value}</div>
                <div className="text-xs text-text-muted font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Our Values</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Three principles that have guided every decision since 2014.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Animate key={v.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${v.color}, ${v.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${v.color}28`, border: `1.5px solid ${v.color}50` }}>
                      <Icon size={20} style={{ color: v.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NUMBERS + TEAM ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">Neptune by the Numbers</h2>
            <p className="text-text-muted leading-relaxed mb-8">A decade of growth — from a Cyprus-based startup to a globally regulated broker trusted by over half a million traders.</p>
            <div className="grid grid-cols-2 gap-4">
              {NUMBERS.map(({ value, label, color }) => (
                <div key={label} className="bg-surface-bg border border-border rounded-2xl p-5 hover:border-purple-200 hover:shadow-purple-sm transition-all">
                  <div className="font-display text-2xl font-extrabold mb-0.5" style={{ color }}>{value}</div>
                  <div className="text-xs text-text-muted">{label}</div>
                </div>
              ))}
            </div>
          </Animate>
          <Animate from="right">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-8">Company Details</h2>
            <div className="bg-surface-bg border border-border rounded-2xl overflow-hidden shadow-purple-sm">
              {TEAM_STATS.map((s, i) => (
                <div key={s.label} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-surface-bg/60"} border-b border-border last:border-0`}>
                  <span className="text-sm text-text-muted font-medium">{s.label}</span>
                  <span className="text-sm font-bold text-text text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Founded timeline ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Animate className="text-center mb-12" from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">A Decade of Growth</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto">From startup to global broker — ten years of building something traders can trust.</p>
          </Animate>
          <div className="relative">
            <div className="absolute left-[90px] md:left-1/2 top-0 bottom-0 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <Animate key={m.year} delay={i * 80} from="up">
                  <div className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-shrink-0 w-[80px] text-right md:w-[calc(50%-24px)] md:text-right">
                      <span className="font-display font-extrabold text-lg" style={{ color: i % 2 === 0 ? "#6c3be4" : "#0891b2" }}>{m.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5 hidden sm:block"
                      style={{ background: i % 2 === 0 ? "#6c3be4" : "#0891b2", boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(108,59,228,0.5)" : "rgba(8,145,178,0.5)"}` }} />
                    <div className="flex-1 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="font-bold text-sm text-white mb-1">{m.title}</div>
                      <div className="text-xs text-white/50">{m.desc}</div>
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
          <Animate delay={400} from="scale" className="text-center mt-14">
            <a href="/accounts" className="inline-flex items-center gap-3 font-semibold text-base text-white px-10 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              <Users size={18} /> Join 500,000 Traders — Open Free Account <ArrowRight size={16} />
            </a>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
