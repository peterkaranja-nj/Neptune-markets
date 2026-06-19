import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { Lock, Shield, Eye, Server, Fingerprint, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = { title: "Security | Neptune Markets — Bank-Grade Protection for Your Account" };

const PILLARS = [
  { icon: Lock,        color: "#6c3be4", title: "256-bit SSL/TLS Encryption",       desc: "All data exchanged between your device and Neptune's servers is protected by AES-256 encryption — the same standard used by major banks worldwide." },
  { icon: Fingerprint, color: "#0891b2", title: "Two-Factor Authentication (2FA)",  desc: "Enable TOTP-based 2FA on your account. Every login and withdrawal requires a one-time code from your authenticator app." },
  { icon: Shield,      color: "#059669", title: "Segregated Client Funds",          desc: "Client deposits are held in segregated accounts at Tier-1 partner banks. Neptune's operating funds are entirely separate." },
  { icon: Server,      color: "#d97706", title: "Tier-4 Data Centre Infrastructure", desc: "Servers hosted in ISO 27001 certified Tier-4 data centres with 99.999% uptime guarantee, N+1 redundancy, and 24/7 physical security." },
  { icon: Eye,         color: "#6c3be4", title: "24/7 Transaction Monitoring",      desc: "Automated AML screening on all deposits and withdrawals. Every transaction is monitored in real time for suspicious activity." },
  { icon: RefreshCw,   color: "#059669", title: "Daily Backups & Disaster Recovery", desc: "Full account snapshots and data backups every 24 hours with offsite replication. RTO of under 4 hours for all client-facing systems." },
];

const REGULATORS = [
  { code: "CySEC", flag: "🇨🇾", obligation: "Segregated client funds, ICF coverage up to €20,000, regular financial audits." },
  { code: "FCA",   flag: "🇬🇧", obligation: "FSCS protection up to £85,000, CASS client money rules, mandatory reporting." },
  { code: "ASIC",  flag: "🇦🇺", obligation: "Client money segregation, breach notification within 10 business days." },
  { code: "FSA",   flag: "🇸🇨", obligation: "Capital adequacy requirements, annual independent audit." },
  { code: "FSC",   flag: "🇲🇺", obligation: "Local currency client protection, AML/CFT compliance framework." },
];

const CHECKLIST = [
  "256-bit AES data encryption in transit and at rest",
  "TOTP two-factor authentication on all accounts",
  "Biometric login via mobile app (Face ID / fingerprint)",
  "Segregated funds at Tier-1 partner banks",
  "ISO 27001 data centre certification",
  "24/7 automated fraud and AML monitoring",
  "PCI DSS Level 1 compliant payment processing",
  "Anti-phishing training and email authentication (DMARC)",
  "Regular third-party penetration testing",
  "Bug bounty programme for responsible disclosure",
];

export default function SecurityPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center with nested shield layers ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* Concentric shield glow rings */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 pointer-events-none z-0 hidden lg:block" aria-hidden="true">
          {[400, 280, 180].map((size, i) => (
            <div key={size} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ width: size, height: size, borderColor: `rgba(108,59,228,${[0.05, 0.08, 0.12][i]})` }} />
          ))}
        </div>
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Security
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Bank-Grade Security,<br />Built Into <span className="gradient-text">Every Layer.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            From your login to your withdrawals — every interaction with Neptune Markets is protected by multiple independent security layers. Your account and capital are never left exposed.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Secure Account
            </a>
            <a href="/company/regulation" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              View Regulation
            </a>
          </div>
          {/* Shield icon + certification badges */}
          <div className="hero-fade-up-d4 flex flex-wrap gap-3 justify-center items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-gradient flex items-center justify-center shadow-[0_4px_20px_rgba(108,59,228,0.4)]">
              <Shield size={28} color="white" />
            </div>
            {["256-bit TLS", "2FA Ready", "ISO 27001", "PCI DSS L1", "Segregated Funds"].map((badge) => (
              <span key={badge} className="text-xs font-bold border border-border bg-white text-text-muted px-3.5 py-2 rounded-full shadow-purple-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Six Security Pillars</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Six independent systems working together to protect your account and capital.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Animate key={p.title} delay={i * 70} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${p.color}28`, border: `1.5px solid ${p.color}50` }}>
                      <Icon size={20} style={{ color: p.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REGULATORS TABLE ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Regulatory Security Obligations</h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">Each of our five regulators imposes specific security and fund protection obligations that Neptune complies with in full.</p>
          </Animate>
          <Animate delay={100} from="scale">
            <div className="bg-surface-bg border border-border rounded-2xl overflow-hidden shadow-purple-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50 border-b border-border">
                    <th className="text-left px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Regulator</th>
                    <th className="text-left px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Key Security Obligations</th>
                  </tr>
                </thead>
                <tbody>
                  {REGULATORS.map((r, i) => (
                    <tr key={r.code} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                      <td className="px-6 py-4 border-b border-border/50">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{r.flag}</span>
                          <span className="font-display font-bold text-purple-700 text-sm">{r.code}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-text-muted text-xs border-b border-border/50 leading-relaxed">{r.obligation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Security checklist ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">The Neptune Security Guarantee</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">Every account is protected by every item on this checklist from the moment you register.</p>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Secure Account <ArrowRight size={16} />
            </a>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Full Security Checklist</div>
              <div className="space-y-2.5">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-white/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
