import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { AlertTriangle } from "lucide-react";

export const metadata = { title: "Leverage & Margin | Neptune Markets — Up to 1:500 Leverage" };

const LEVERAGE_TABLE = [
  { asset: "Forex — Majors",       maxLev: "1:500", margin: "0.20%", example: "$200 controls $100,000"  },
  { asset: "Forex — Minors",       maxLev: "1:200", margin: "0.50%", example: "$500 controls $100,000"  },
  { asset: "Forex — Exotics",      maxLev: "1:100", margin: "1.00%", example: "$1,000 controls $100,000" },
  { asset: "Gold (XAU/USD)",        maxLev: "1:200", margin: "0.50%", example: "$11.59 controls $2,318"  },
  { asset: "Silver (XAG/USD)",      maxLev: "1:200", margin: "0.50%", example: "$0.14 controls $27.21"   },
  { asset: "Crude Oil (Brent/WTI)", maxLev: "1:100", margin: "1.00%", example: "$0.83 controls $83.24"   },
  { asset: "Major Indices",         maxLev: "1:200", margin: "0.50%", example: "$26.10 controls $5,220"  },
  { asset: "Minor Indices",         maxLev: "1:100", margin: "1.00%", example: "$18.72 controls $1,872"  },
  { asset: "US Stocks",             maxLev: "1:20",  margin: "5.00%", example: "$9.47 controls $189.42"  },
  { asset: "Cryptocurrencies",      maxLev: "1:20",  margin: "5.00%", example: "$3,422 controls $68,430" },
  { asset: "ETFs",                  maxLev: "1:20",  margin: "5.00%", example: "$23.50 controls $470.00" },
];

export default function LeveragePage() {
  return (
    <PageLayout>
      <PageHero
        tag="Leverage & Margin"
        title="Up to 1:500 Leverage — Amplify Your Market Exposure"
        subtitle="Neptune Markets offers some of the highest leverage in the industry on regulated accounts. Understand the requirements before you trade."
        cta={{ label: "Open Account", href: "/accounts" }}
      />

      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="max-w-8xl mx-auto px-5 md:px-12">
          <div className="flex items-start gap-4">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Leverage Risk Warning:</strong> Leverage amplifies both profits and losses. Trading with 1:500 leverage means a 0.2% move against your position will wipe your margin. Ensure you fully understand margin trading and apply appropriate risk management before using high leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-5">What Is Leverage?</h2>
            <p className="text-text-muted leading-relaxed mb-5">Leverage lets you control a large market position using a small amount of your own capital — called margin. The ratio expresses how much the broker multiplies your deposit.</p>
            <p className="text-text-muted leading-relaxed mb-5">For example, with 1:100 leverage you can open a $10,000 position with only $100 of margin. Your profits and losses are calculated on the full $10,000 — making leverage a powerful but double-edged tool.</p>
            <p className="text-text-muted leading-relaxed">Neptune Markets calculates margin requirements per instrument and displays required margin before you submit each order.</p>
          </div>
          <div className="bg-surface-bg border border-border rounded-2xl p-7">
            <div className="font-display text-xs font-bold text-text-faint uppercase tracking-widest mb-4">Worked Example</div>
            {[
              { label: "Leverage",         value: "1:200"     },
              { label: "Trade Size",        value: "$10,000"   },
              { label: "Margin Required",   value: "$50 (0.5%)"},
              { label: "+1% Move (profit)", value: "+$100"     },
              { label: "-1% Move (loss)",   value: "-$100"     },
              { label: "Return on margin",  value: "+200% / -200%" },
            ].map((row, i) => (
              <div key={row.label} className={`flex justify-between py-3 ${i < 5 ? "border-b border-border" : ""}`}>
                <span className="text-sm text-text-muted">{row.label}</span>
                <span className="text-sm font-bold text-text font-mono">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-surface-bg">
        <div className="max-w-8xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-text tracking-tight mb-10">Leverage & Margin by Asset Class</h2>
          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-purple-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-bg border-b border-border">
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Asset Class</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Max Leverage</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Min Margin %</th>
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Example</th>
                </tr>
              </thead>
              <tbody>
                {LEVERAGE_TABLE.map((row, i) => (
                  <tr key={row.asset} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                    <td className="px-6 py-4 font-medium text-text">{row.asset}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-purple-50 text-purple-700 font-extrabold px-3 py-1 rounded-full text-xs">{row.maxLev}</span>
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-text-muted">{row.margin}</td>
                    <td className="px-6 py-4 text-text-muted text-xs">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-faint mt-4">Maximum leverage shown applies to Standard and Raw Pro accounts. Leverage may be reduced for large position sizes or during volatile market conditions.</p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold mb-5">Trade with the Leverage You Need</h2>
          <p className="text-white/60 text-lg mb-10">Open an account and access up to 1:500 leverage on major forex pairs from day one.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Account</a>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">Try Demo First</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
