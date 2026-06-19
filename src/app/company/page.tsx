import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, ChevronRight, Check, Info, Shield, Lock, MessageCircle, Zap, Users, Eye } from "lucide-react";

export const metadata = { title: "Company | Neptune Markets" };

const SUB_PAGES = [
  {
    icon: Info,          color: "#6c3be4",
    title: "About Us",
    desc: "Our story, global presence, and the mission that drives everything we build at Neptune Markets.",
    href: "/company/about",
    tag: "Our Story",
  },
  {
    icon: Shield,        color: "#059669",
    title: "Regulation",
    desc: "Operating under 5 regulatory licences across 3 continents — full transparency on our compliance framework.",
    href: "/company/regulation",
    tag: "Licences",
  },
  {
    icon: Lock,          color: "#0891b2",
    title: "Security of Funds",
    desc: "Client funds held in segregated Tier-1 bank accounts with 256-bit SSL, 2FA, and negative balance protection.",
    href: "/company/security",
    tag: "Client Protection",
  },
  {
    icon: MessageCircle, color: "#d97706",
    title: "Contact Us",
    desc: "24/7 multilingual support via live chat, email and phone. Average response time under 90 seconds.",
    href: "/company/contact",
    tag: "Support",
  },
];

const VALUES = [
  { icon: Eye,   color: "#6c3be4", title: "Transparency",  stat: "No hidden fees", desc: "We publish our regulatory licences, spreads, and fees openly. What you see is what you get." },
  { icon: Zap,   color: "#0891b2", title: "Performance",   stat: "Sub-12ms",       desc: "Sub-12ms execution via Equinix LD4 and NY4 data centres. We invest in speed because every millisecond matters." },
  { icon: Users, color: "#059669", title: "Client-First",  stat: "24/7 support",   desc: "24/7 multilingual support, free institutional-grade analysis, and accounts starting from $100." },
];

const NUMBERS = [
  { val: "500K+", label: "Active Traders"     },
  { val: "180+",  label: "Countries Served"   },
  { val: "5",     label: "Regulatory Licences"},
  { val: "10+",   label: "Years Operating"    },
];

export default function CompanyPage() {
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
                <span>Home</span><ChevronRight size={12} /><span className="text-purple-600">Company</span>
              </div>
              <h1 className="font-display leading-[1.0] tracking-[-0.04em] mb-6">
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text">Built on</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold" style={{ color: "#6c3be4" }}>Trust &</span>
                <span className="block text-[clamp(44px,5.5vw,80px)] font-extrabold text-text-muted">Transparency</span>
              </h1>
              <p className="text-base text-text-muted font-light leading-relaxed max-w-[480px] mb-7">
                Founded to give every trader — from Nairobi to London — access to the same institutional-grade tools, pricing, and protection as the world&apos;s largest funds.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/company/about" className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-xl btn-sheen"
                  style={{ background: "linear-gradient(135deg,#6c3be4,#7c4dff)", boxShadow: "0 6px 28px rgba(108,59,228,0.50)" }}>
                  Our Story <ArrowRight size={14} />
                </a>
                <a href="/company/regulation" className="inline-flex items-center gap-2 text-sm font-bold text-text px-7 py-3.5 rounded-xl border border-border-strong hover:bg-white transition-all">
                  View Regulation
                </a>
              </div>
            </div>

            {/* Right — numbers */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {NUMBERS.map(({ val, label }) => (
                <div key={label} className="rounded-2xl p-6 bg-white border border-border shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-purple-200 transition-all flex flex-col items-center text-center">
                  <div className="font-display text-4xl font-extrabold text-text tracking-tight mb-1">{val}</div>
                  <div className="text-xs text-text-faint font-medium">{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES (dark) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">What We Stand For</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Three principles that guide every product decision, every hire, and every client interaction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group relative rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${v.color}, ${v.color}66)` }} />
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${v.color}28`, border: `1.5px solid ${v.color}50` }}>
                    <Icon size={22} style={{ color: v.color }} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: v.color }}>{v.stat}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {NUMBERS.map(({ val, label }) => (
              <div key={label} className="rounded-2xl py-8 px-5 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="font-display text-4xl font-extrabold text-white tracking-tight mb-1">{val}</div>
                <div className="text-xs text-white/40 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-PAGE CARDS (white) ── */}
      <section className="py-8 px-4 md:py-14 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">Get to Know Neptune Markets</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">Explore our story, regulatory framework, security measures, and how to reach us.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUB_PAGES.map((p) => {
              const Icon = p.icon;
              return (
                <a key={p.title} href={p.href}
                  className="group relative rounded-2xl p-7 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.10)] transition-all duration-300 overflow-hidden block">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${p.color}18`, border: `1.5px solid ${p.color}30` }}>
                    <Icon size={20} style={{ color: p.color }} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.tag}</div>
                  <h3 className="font-display text-base font-bold text-text mb-2 group-hover:text-purple-700 transition-colors">{p.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{p.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: p.color }}>
                    Learn more <ArrowRight size={13} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl font-extrabold mb-5">Trade with a Broker You Can Trust</h2>
          <p className="text-white/60 text-lg mb-7">Join 500,000+ traders who trust Neptune Markets with their capital. Open a live account in minutes.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Live Account</a>
            <a href="/company/regulation" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">View Regulation</a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
