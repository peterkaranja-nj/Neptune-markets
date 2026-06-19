import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { MessageCircle, Mail, BookOpen, HelpCircle } from "lucide-react";

export const metadata = { title: "Help Centre | Neptune Markets — Support & FAQ" };

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Getting Started",
    questions: [
      { q: "How do I open a live account?",              a: "Click 'Open Account' and complete our online registration. Verification typically takes 1–2 hours. You'll need a government-issued ID and proof of address." },
      { q: "What is the minimum deposit?",              a: "The minimum deposit is $100 for a Standard Account and $500 for a Raw Pro Account." },
      { q: "How do I open a demo account?",             a: "Select 'Try Free Demo' during registration or from your client portal. Demo accounts come pre-loaded with $10,000 in virtual funds." },
      { q: "Which countries are not accepted?",         a: "We do not accept clients from the United States, Belgium, Canada, Japan, and certain other jurisdictions. Contact support if you're unsure." },
    ],
  },
  {
    icon: HelpCircle,
    title: "Trading",
    questions: [
      { q: "What platforms are available?",             a: "We offer MetaTrader 4, MetaTrader 5, and MetaTrader WebTerminal. All accounts include full access to every platform." },
      { q: "What is the maximum leverage?",             a: "Up to 1:500 on major forex pairs. Leverage varies by instrument — see our Leverage & Margin page for full details." },
      { q: "Are EAs (Expert Advisors) allowed?",        a: "Yes. EAs are fully supported on MT4 and MT5. Raw Pro accounts include free VPS hosting." },
      { q: "What is the stop-out level?",               a: "Neptune Markets has a 50% margin call and 20% stop-out level. We will attempt to notify you via email and SMS before stop-out." },
    ],
  },
  {
    icon: MessageCircle,
    title: "Deposits & Withdrawals",
    questions: [
      { q: "How long do deposits take?",                a: "Card and e-wallet deposits are instant. M-Pesa/mobile money is instant. Bank wire takes 1–3 business days." },
      { q: "How do I withdraw funds?",                  a: "Log in to your client portal, navigate to Funds > Withdraw, select your method, and enter the amount. Most withdrawals are processed same day." },
      { q: "Are there any withdrawal fees?",            a: "Neptune Markets charges zero withdrawal fees. Third-party network fees (e.g. bank wire fees, crypto network fees) may apply." },
      { q: "Why was my withdrawal declined?",           a: "Common reasons: unverified account, withdrawal method differs from deposit method, or pending KYC documents. Contact support for assistance." },
    ],
  },
  {
    icon: BookOpen,
    title: "Account & Verification",
    questions: [
      { q: "What documents do I need to verify?",       a: "You need a valid government-issued ID (passport or national ID) and a proof of address document (utility bill or bank statement) dated within 3 months." },
      { q: "How long does verification take?",          a: "Most accounts are verified within 1–2 hours during business hours. Complex cases may take up to 24 hours." },
      { q: "Can I have multiple accounts?",             a: "You may hold one Standard Account and one Raw Pro Account simultaneously. Contact support for institutional or managed account arrangements." },
      { q: "How do I change my account currency?",      a: "Account base currency is set at registration. To change it, contact support — existing positions must be closed and funds converted first." },
    ],
  },
];

export default function SupportPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Help Centre"
        title="How Can We Help You?"
        subtitle="Find answers to common questions or reach our support team directly — available 24/7 via live chat, email, and phone."
        img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
      />

      {/* Contact bar */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: MessageCircle, label: "Live Chat",  desc: "Available 24/7 — avg. 90s response", href: "#" },
              { icon: Mail,          label: "Email",       desc: "support@neptunemarkets.com",          href: "mailto:support@neptunemarkets.com" },
            ].map((m) => (
              <a key={m.label} href={m.href} className="flex items-center gap-4 bg-surface-bg border border-border rounded-xl px-7 py-4 hover:border-purple-300 hover:shadow-purple transition-all group">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <m.icon size={18} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-text text-sm">{m.label}</div>
                  <div className="text-xs text-text-faint">{m.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-24 px-12 bg-surface-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-10">
            {CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <cat.icon size={17} className="text-purple-600" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-text">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.questions.map((item) => (
                    <div key={item.q} className="bg-white border border-border rounded-xl overflow-hidden">
                      <div className="px-6 py-4 font-semibold text-text text-sm border-b border-border">{item.q}</div>
                      <div className="px-6 py-4 text-text-muted text-sm leading-relaxed">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold mb-5">Still Need Help?</h2>
          <p className="text-white/60 text-lg mb-10">Our support team is available 24/7. We typically respond within 90 seconds via live chat.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all">Start Live Chat</a>
            <a href="/company/contact" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Send a Message</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
