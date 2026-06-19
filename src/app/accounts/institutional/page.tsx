import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Building2, Users, BarChart2, Zap, Shield, Globe, Phone, Mail } from "lucide-react";

export const metadata = { title: "Institutional Account | Neptune Markets — Custom Pricing & Dedicated Infrastructure" };

const SOLUTIONS = [
  { icon: Building2, color: "#6c3be4", title: "Dedicated Account Manager",  desc: "A senior relationship manager assigned exclusively to your institution. Direct line, proactive reporting, and white-glove service." },
  { icon: BarChart2, color: "#0891b2", title: "Custom Liquidity Bridge",    desc: "Tailored liquidity aggregation to match your flow and volume profile. Deep market depth on all major instruments." },
  { icon: Zap,       color: "#059669", title: "Priority STP Execution",     desc: "Straight-through processing with dedicated infrastructure. Your orders never compete with retail flow." },
  { icon: Users,     color: "#d97706", title: "PAMM & MAM Solutions",       desc: "Manage multiple sub-accounts from a single master. Full allocation flexibility for fund and portfolio managers." },
  { icon: Globe,     color: "#0891b2", title: "Multi-Entity Support",       desc: "Multi-currency, multi-jurisdiction structures. Suitable for funds, IBs, family offices, and asset managers." },
  { icon: Shield,    color: "#059669", title: "Regulatory Compliance",      desc: "Full KYC/AML documentation, FATCA/CRS reporting, and transparent fund segregation with our compliance team." },
];

const CLIENT_TYPES = ["Hedge Funds", "Family Offices", "Asset Managers", "Prop Trading Firms", "Introducing Brokers", "Fund Administrators"];

export default function InstitutionalPage() {
  return (
    <PageLayout>
      {/* ── HERO: Elegant centered + client-type ticker ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* Geometric lines decoration */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
          <div className="absolute top-24 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(108,59,228,0.08) 30%, rgba(108,59,228,0.08) 70%, transparent 100%)" }} />
          <div className="absolute top-32 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(108,59,228,0.04) 20%, rgba(108,59,228,0.04) 80%, transparent 100%)" }} />
        </div>
        <div className="max-w-8xl mx-auto relative z-10">
          {/* Elite badge top-right */}
          <div className="hero-fade-up flex justify-end mb-6">
            <span className="hidden lg:inline-flex items-center gap-2 text-xs font-bold text-text-faint border border-border-strong rounded-full px-4 py-2 bg-white shadow-purple-sm">
              <Shield size={12} className="text-purple-600" /> Institutional Grade
            </span>
          </div>
          <div className="text-center">
            <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
              Institutional Account
            </span>
            <h1 className="hero-fade-up-d1 font-display text-[clamp(32px,4vw,58px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-4xl mx-auto">
              Purpose-Built Infrastructure<br />for Institutions That <span className="gradient-text">Move Markets.</span>
            </h1>
            <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              Custom pricing, dedicated liquidity pools, PAMM/MAM infrastructure, and a relationship team that treats your business as a genuine priority.
            </p>
            <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
              <a href="/company/contact" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                Contact Institutional Desk
              </a>
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
                Compare All Accounts
              </a>
            </div>
            {/* Client type pills */}
            <div className="hero-fade-up-d4 flex flex-wrap gap-2 justify-center">
              {CLIENT_TYPES.map((type) => (
                <span key={type} className="text-xs font-semibold text-text-muted bg-white border border-border px-4 py-2 rounded-full shadow-purple-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">What We Offer Institutional Clients</h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">Our institutional desk works directly with funds, asset managers, proprietary trading firms, and introducing brokers.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Animate key={s.title} delay={i * 70} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${s.color}28`, border: `1.5px solid ${s.color}50` }}>
                      <Icon size={20} style={{ color: s.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Speak With Our Institutional Desk</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">Tell us about your business and volume requirements. We&apos;ll provide a tailored pricing proposal within 24 hours.</p>
          </Animate>
          <Animate delay={100} from="scale">
            <div className="bg-surface-bg border border-border rounded-2xl p-8 shadow-purple-sm">
              <div className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Full Name</label>
                    <input type="text" placeholder="John Smith" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 transition-colors bg-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Company</label>
                    <input type="text" placeholder="Hedge Fund / Family Office" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 transition-colors bg-white" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Email Address</label>
                    <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 transition-colors bg-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Monthly Volume</label>
                    <select className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 transition-colors bg-white">
                      <option>Under $1M</option>
                      <option>$1M–$10M</option>
                      <option>$10M–$50M</option>
                      <option>$50M+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your trading needs..." className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none bg-white" />
                </div>
                <button className="w-full font-semibold text-base text-white py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                  Submit Enquiry
                </button>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Split contact details ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">Ready to Discuss Your Requirements?</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">Our institutional desk responds within 24 hours with a tailored pricing and infrastructure proposal. All enquiries are treated with strict confidentiality.</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(108,59,228,0.3)", border: "1px solid rgba(108,59,228,0.5)" }}>
                <Mail size={14} className="text-purple-300" />
              </div>
              <span className="text-sm text-white/70 font-mono">institutional@neptunemarkets.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(108,59,228,0.3)", border: "1px solid rgba(108,59,228,0.5)" }}>
                <Phone size={14} className="text-purple-300" />
              </div>
              <span className="text-sm text-white/70">+1 (888) 000-0001 — Institutional Line</span>
            </div>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl p-8 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>Response Commitment</div>
              {[
                { label: "Initial response",          time: "< 24 hours" },
                { label: "Pricing proposal",           time: "< 48 hours" },
                { label: "Account activation",         time: "Same day" },
                { label: "Dedicated manager assigned", time: "On opening" },
              ].map(({ label, time }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <span className="text-sm text-white/55">{label}</span>
                  <span className="text-sm font-bold text-purple-300">{time}</span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
