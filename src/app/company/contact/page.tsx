"use client";
import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const METHODS = [
  { icon: MessageCircle, color: "#6c3be4", title: "Live Chat",      meta: "Under 90 seconds",  desc: "Connect with a support agent instantly through our in-platform live chat. Available 24/7, with real people — not bots." },
  { icon: Mail,          color: "#0891b2", title: "Email Support",  meta: "Under 4 hours",     desc: "For account enquiries, documentation, or detailed questions. Responses guaranteed within 4 business hours." },
  { icon: Phone,         color: "#059669", title: "Phone Support",  meta: "Mon–Fri 24hrs",     desc: "Speak directly with a senior support agent or account manager. Institutional and Raw Pro clients get a dedicated number." },
];

const DEPARTMENTS = [
  { name: "General Support",      contact: "support@neptunemarkets.com",       icon: "💬" },
  { name: "Deposits & Withdrawals", contact: "payments@neptunemarkets.com",    icon: "💳" },
  { name: "Institutional Desk",   contact: "institutional@neptunemarkets.com", icon: "🏛️" },
  { name: "Compliance / Legal",   contact: "compliance@neptunemarkets.com",    icon: "⚖️" },
  { name: "Introducing Brokers",  contact: "ib@neptunemarkets.com",            icon: "🤝" },
  { name: "Media & Press",        contact: "press@neptunemarkets.com",         icon: "📰" },
];

const OFFICES = [
  { city: "Limassol",  country: "Cyprus (HQ)",   address: "Arch. Makarios III, 195, Neocleous House, Limassol 3030, Cyprus", regulator: "CySEC" },
  { city: "London",    country: "United Kingdom", address: "One Canada Square, Canary Wharf, London, E14 5AA, UK",            regulator: "FCA"   },
  { city: "Sydney",    country: "Australia",      address: "Level 13, 95 Pitt Street, Sydney NSW 2000, Australia",            regulator: "ASIC"  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", dept: "General Support" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout>
      {/* ── HERO: Split — text left, live support status card right ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="max-w-8xl mx-auto relative z-10 grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">
          <div>
            <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="hero-fade-up-d1 font-display text-[clamp(32px,4vw,58px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5">
              Real People.<br />Real Answers.<br /><span className="gradient-text">Under 90 Seconds.</span>
            </h1>
            <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-xl mb-8">
              Neptune support is staffed 24/7 by experienced traders and account specialists — not scripted bots. Whether you have a quick question or a complex account issue, we&apos;re ready.
            </p>
            <div className="hero-fade-up-d3 flex gap-4 flex-wrap">
              <a href="#contact-form" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                Send Us a Message
              </a>
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
                Open Account
              </a>
            </div>
          </div>
          {/* Live support status card */}
          <div className="hero-fade-right hidden lg:block">
            <div className="glass-card rounded-2xl p-6 shadow-purple-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-text-faint uppercase tracking-widest">Support Status</span>
                <div className="flex items-center gap-1.5">
                  <span className="live-dot" />
                  <span className="text-[10px] font-bold text-green-600">ONLINE</span>
                </div>
              </div>
              {[
                { label: "Live Chat",     status: "Available", agents: "12 agents", color: "#059669" },
                { label: "Phone Support", status: "Available", agents: "8 agents",  color: "#059669" },
                { label: "Email",         status: "Available", agents: "~2hr reply",color: "#0891b2" },
              ].map(({ label, status, agents, color }) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm font-medium text-text">{label}</span>
                  <div className="text-right">
                    <span className="text-xs font-bold block" style={{ color }}>{status}</span>
                    <span className="text-[10px] text-text-faint">{agents}</span>
                  </div>
                </div>
              ))}
              <a href="#contact-form" className="mt-5 w-full inline-flex items-center justify-center gap-2 font-semibold text-sm text-white py-3 rounded-xl bg-purple-gradient btn-sheen shadow-purple-md hover:-translate-y-0.5 transition-all">
                Start Live Chat <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">How to Reach Us</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Three channels, all staffed around the clock by real Neptune support specialists.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5">
            {METHODS.map((m, i) => {
              const Icon = m.icon;
              return (
                <Animate key={m.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${m.color}28`, border: `1.5px solid ${m.color}50` }}>
                      <Icon size={20} style={{ color: m.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-1">{m.title}</h3>
                    <div className="text-xs font-bold text-green-400 mb-3">{m.meta}</div>
                    <p className="text-sm text-white/55 leading-relaxed">{m.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact-form" className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Animate from="left">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">Send a Message</h2>
            <p className="text-text-muted leading-relaxed mb-8">We respond to all enquiries within 4 hours during business hours. Urgency? Use live chat instead.</p>
            {submitted ? (
              <div className="rounded-2xl p-8 text-center border border-green-200 bg-green-50">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-bold text-text mb-2">Message Received</div>
                <div className="text-sm text-text-muted">We&apos;ll get back to you within 4 hours at {form.email}.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 bg-white" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Email Address</label>
                    <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@email.com" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Department</label>
                  <select value={form.dept} onChange={e => setForm(f => ({ ...f, dept: e.target.value }))} className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 bg-white">
                    {DEPARTMENTS.map(d => <option key={d.name}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Subject</label>
                  <input type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="Brief subject line" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 bg-white" />
                </div>
                <div>
                  <label className="text-xs font-bold text-text-faint uppercase tracking-widest block mb-2">Message</label>
                  <textarea rows={5} required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="How can we help?" className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-purple-400 resize-none bg-white" />
                </div>
                <button type="submit" className="w-full font-semibold text-base text-white py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
                  Send Message
                </button>
              </form>
            )}
          </Animate>
          <Animate from="right">
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-4">Departments &amp; Offices</h2>
            <div className="space-y-2 mb-10">
              {DEPARTMENTS.map((d) => (
                <div key={d.name} className="flex items-center gap-4 bg-surface-bg border border-border rounded-xl px-5 py-3.5 hover:border-purple-200 transition-all">
                  <span className="text-base">{d.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-text">{d.name}</div>
                    <div className="text-xs text-text-faint font-mono">{d.contact}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {OFFICES.map((o) => (
                <div key={o.city} className="flex gap-4 bg-surface-bg border border-border rounded-xl p-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-50 border border-purple-100">
                    <MapPin size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text">{o.city}, {o.country}</div>
                    <div className="text-xs text-text-faint mb-1">{o.address}</div>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded">{o.regulator}</span>
                  </div>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── UNIQUE CTA: Live chat widget ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">Need Instant Help?</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">Our live chat team typically responds in under 90 seconds — 24 hours a day, every day of the year.</p>
            <div className="flex gap-3 items-center mb-4">
              <span className="live-dot" />
              <span className="text-sm text-white/60">12 support agents online now</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={14} className="text-purple-400" />
              <span className="text-sm text-white/60">+1 (888) 000-0000 — Main support line</span>
            </div>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="w-8 h-8 rounded-full bg-purple-gradient flex items-center justify-center">
                  <MessageCircle size={14} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Neptune Support</div>
                  <div className="flex items-center gap-1">
                    <span className="live-dot scale-75" />
                    <span className="text-[10px] text-green-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5 space-y-3">
                <div className="rounded-xl rounded-tl-none py-2.5 px-4 text-xs max-w-[80%]" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <span className="text-white/70">👋 Hey! How can I help you today?</span>
                </div>
                <div className="rounded-xl rounded-tr-none py-2.5 px-4 text-xs max-w-[80%] ml-auto bg-purple-gradient">
                  <span className="text-white/90">I have a question about withdrawals</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  <span>Neptune agent is typing...</span>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a href="#contact-form" className="w-full flex items-center justify-center gap-2 font-semibold text-sm text-white py-3 rounded-xl bg-purple-gradient btn-sheen hover:-translate-y-0.5 transition-all shadow-purple-md">
                  Start Live Chat <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
