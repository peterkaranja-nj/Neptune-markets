import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Shield, Lock, CreditCard, Eye, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = { title: "Regulation & Compliance | Neptune Markets — 5 Global Licences" };

const REGS = [
  { code: "CySEC", flag: "🇨🇾", name: "Cyprus Securities and Exchange Commission",  since: "2014", desc: "Our primary regulator. Operates under MiFID II, the European framework providing the highest standard of investor protection across the EEA.", color: "#6c3be4" },
  { code: "FCA",   flag: "🇬🇧", name: "Financial Conduct Authority (UK)",          since: "2016", desc: "Authorised and regulated by the FCA under reference number 000000. UK clients are protected under FSCS up to £85,000.", color: "#0891b2" },
  { code: "ASIC",  flag: "🇦🇺", name: "Australian Securities & Investments Commission", since: "2022", desc: "ASIC-licensed for Australian clients. Operates under the Corporations Act 2001 with strict client money segregation rules.", color: "#059669" },
  { code: "FSA",   flag: "🇸🇨", name: "Financial Services Authority (Seychelles)", since: "2022", desc: "Licenced by the FSA for global clients. Provides access to full leverage while maintaining robust client protection standards.", color: "#d97706" },
  { code: "FSC",   flag: "🇲🇺", name: "Financial Services Commission (Mauritius)", since: "2023", desc: "African and Middle Eastern client regulatory coverage, ensuring local jurisdiction compliance and client fund protection.", color: "#6c3be4" },
];

const PROTECTIONS = [
  { icon: Lock,       color: "#6c3be4", title: "Segregated Client Funds",        desc: "Your deposits are held in segregated accounts at Tier-1 banks — completely separate from Neptune's operational funds. We cannot access your capital." },
  { icon: CreditCard, color: "#059669", title: "Negative Balance Protection",     desc: "Your account can never go below zero. If extreme market volatility causes losses beyond your deposit, Neptune absorbs the deficit." },
  { icon: Shield,     color: "#0891b2", title: "FSCS / CySEC Investor Compensation", desc: "UK clients are covered by FSCS up to £85,000. EEA clients are covered by the Cypriot Investor Compensation Fund (ICF) up to €20,000." },
  { icon: Eye,        color: "#d97706", title: "MiFID II Transparency",           desc: "Under MiFID II, we are required to publish best execution data, report all trades to regulators, and provide clear costs and charges disclosures." },
];

export default function RegulationPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center with 5 licence badge pills below title ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(108,59,228,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Regulation &amp; Compliance
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            5 Licences.<br />Zero Compromise on <span className="gradient-text">Your Safety.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Neptune Markets is regulated by five of the world&apos;s most respected financial authorities. Your funds are protected, segregated, and covered by investor compensation schemes.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Regulated Account
            </a>
            <a href="/company/security" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              Security Details
            </a>
          </div>
          {/* 5 Licence badge pills */}
          <div className="hero-fade-up-d4 flex flex-wrap gap-3 justify-center">
            {REGS.map(({ code, flag, name, color }, i) => (
              <div key={code} className="badge-stagger flex items-center gap-2 rounded-xl px-4 py-2.5 border border-border bg-white shadow-purple-sm hover:-translate-y-0.5 transition-all"
                style={{ animationDelay: `${i * 0.12 + 0.4}s` }}>
                <span className="text-lg">{flag}</span>
                <div className="text-left">
                  <div className="text-xs font-extrabold" style={{ color }}>{code}</div>
                  <div className="text-[10px] text-text-faint max-w-[140px] truncate">{name.split(" (")[0]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LICENCE DETAILS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Our 5 Regulatory Licences</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Neptune Markets is regulated across four continents, ensuring local-jurisdiction client protections wherever you trade.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGS.map((r, i) => (
              <Animate key={r.code} delay={i * 80} from="up">
                <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color}66)` }} />
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{r.flag}</span>
                    <div>
                      <div className="font-display text-base font-extrabold" style={{ color: r.color }}>{r.code}</div>
                      <div className="text-[10px] text-white/35 font-medium">Since {r.since}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white mb-2">{r.name}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{r.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTECTIONS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">How Your Funds Are Protected</h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">Every Neptune account benefits from multiple layers of financial protection built into our regulatory framework.</p>
          </Animate>
          <div className="grid md:grid-cols-2 gap-6">
            {PROTECTIONS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Animate key={p.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-8 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.10)] transition-all duration-300 overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }} />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${p.color}18`, border: `1.5px solid ${p.color}30` }}>
                        <Icon size={22} style={{ color: p.color }} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-text mb-2">{p.title}</h3>
                        <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UNIQUE CTA: 5 licence horizontal badges ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Animate from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">Trade with Full Regulatory Protection</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-10">Five licences, segregated funds, and investor compensation coverage — your capital is protected at every layer.</p>
          </Animate>
          <Animate delay={100} from="scale">
            <div className="glass-dark rounded-2xl p-8 mb-10">
              <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>Active Regulatory Licences</div>
              <div className="flex flex-wrap gap-4 justify-center">
                {REGS.map(({ code, flag, since, color }) => (
                  <div key={code} className="flex flex-col items-center gap-1.5 rounded-xl px-5 py-4 hover:-translate-y-0.5 transition-all"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <span className="text-2xl">{flag}</span>
                    <span className="font-display font-extrabold text-sm" style={{ color }}>{code}</span>
                    <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>Since {since}</span>
                    <CheckCircle size={12} style={{ color }} />
                  </div>
                ))}
              </div>
            </div>
          </Animate>
          <Animate delay={200} from="up">
            <a href="/accounts" className="inline-flex items-center gap-3 font-semibold text-base text-white px-10 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open a Regulated Account <ArrowRight size={16} />
            </a>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
