import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { CreditCard, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata = { title: "Deposits & Withdrawals | Neptune Markets — 20+ Payment Methods" };

const METHODS = [
  { method: "Visa / Mastercard",   type: "Cards",        deposit: "Instant",   withdraw: "1–3 days",  fee: "Free",    min: "$10",     max: "$50,000"   },
  { method: "M-Pesa (KES)",        type: "Mobile Money", deposit: "Instant",   withdraw: "Instant",   fee: "Free",    min: "KES 500", max: "KES 300K"  },
  { method: "Airtel Money",        type: "Mobile Money", deposit: "Instant",   withdraw: "Instant",   fee: "Free",    min: "KES 500", max: "KES 150K"  },
  { method: "MTN Mobile Money",    type: "Mobile Money", deposit: "Instant",   withdraw: "Same day",  fee: "Free",    min: "$10",     max: "$10,000"   },
  { method: "Skrill",              type: "E-Wallet",     deposit: "Instant",   withdraw: "Same day",  fee: "Free",    min: "$10",     max: "$50,000"   },
  { method: "Neteller",            type: "E-Wallet",     deposit: "Instant",   withdraw: "Same day",  fee: "Free",    min: "$10",     max: "$50,000"   },
  { method: "USDT (TRC20/ERC20)",  type: "Crypto",       deposit: "~10 min",   withdraw: "~10 min",   fee: "Network", min: "$20",     max: "Unlimited" },
  { method: "Bitcoin (BTC)",       type: "Crypto",       deposit: "~30 min",   withdraw: "~30 min",   fee: "Network", min: "$50",     max: "Unlimited" },
  { method: "Bank Wire Transfer",  type: "Bank",         deposit: "1–3 days",  withdraw: "2–5 days",  fee: "Free",    min: "$200",    max: "Unlimited" },
];

const GUARANTEES = [
  { icon: Clock,       title: "92%+ Same-Day Withdrawals", desc: "The vast majority of withdrawal requests are processed within the same business day they are submitted." },
  { icon: Shield,      title: "Segregated Accounts",       desc: "Your funds are held in segregated Tier-1 bank accounts and are never commingled with company funds." },
  { icon: CreditCard,  title: "No Hidden Fees",            desc: "Neptune Markets charges zero fees on deposits and withdrawals. Any applicable network fees (e.g. crypto) are third-party." },
  { icon: CheckCircle, title: "Verified Payments Only",    desc: "For security, withdrawals are processed to the same method used for deposit. New methods require verification." },
];

export default function DepositsPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Deposits & Withdrawals"
        title="20+ Payment Methods. Fast. Free. Secure."
        subtitle="Deposit and withdraw using your preferred method — cards, mobile money, e-wallets, crypto, or bank wire. Zero fees from Neptune Markets."
        cta={{ label: "Open Account", href: "/accounts" }}
      />

      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
            {[
              { val: "20+",     label: "Payment methods" },
              { val: "Instant", label: "Most deposit times" },
              { val: "Free",    label: "Neptune fees" },
              { val: "92%+",    label: "Same-day withdrawals" },
            ].map(({ val, label }) => (
              <div key={label} className="py-12 px-6 text-center bg-navy">
                <div className="font-display text-4xl xl:text-5xl font-extrabold text-white mb-2 tracking-tight">{val}</div>
                <div className="text-sm text-white/50 font-medium tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-surface-bg">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-10">Payment Methods</h2>
          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-purple-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-bg border-b border-border">
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Method</th>
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Type</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Deposit</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Withdrawal</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Fee</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Min</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Max</th>
                </tr>
              </thead>
              <tbody>
                {METHODS.map((row, i) => (
                  <tr key={row.method} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                    <td className="px-6 py-4 font-semibold text-text">{row.method}</td>
                    <td className="px-6 py-4 text-text-muted">{row.type}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">{row.deposit}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-text-muted text-xs">{row.withdraw}</td>
                    <td className="px-6 py-4 text-center text-text-muted">{row.fee}</td>
                    <td className="px-6 py-4 text-center font-mono text-text-muted text-xs">{row.min}</td>
                    <td className="px-6 py-4 text-center font-mono text-text-muted text-xs">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-faint mt-4">Processing times shown are estimates under normal conditions. Maximum limits may vary based on account verification level. Crypto network fees are charged by the blockchain, not Neptune Markets.</p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-12 text-center">Our Payment Guarantees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="bg-surface-bg border border-border rounded-2xl p-7 hover:border-purple-200 hover:shadow-purple-md transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-purple-gradient flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(108,59,228,0.3)]">
                  <g.icon size={22} color="#fff" />
                </div>
                <h3 className="font-display text-sm font-bold text-text mb-3">{g.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold mb-5">Fund Your Account in Minutes</h2>
          <p className="text-white/60 text-lg mb-10">20+ payment methods, zero fees from Neptune Markets, instant access to live markets.</p>
          <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Account</a>
        </div>
      </section>
    </PageLayout>
  );
}
