import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Spreads & Costs | Neptune Markets — Transparent Pricing, No Hidden Fees" };

const SPREADS = [
  { cat: "Forex — Majors", instrument: "EUR/USD",  std: "0.8",  raw: "0.0",  unit: "pips"  },
  { cat: "Forex — Majors", instrument: "GBP/USD",  std: "1.0",  raw: "0.1",  unit: "pips"  },
  { cat: "Forex — Majors", instrument: "USD/JPY",  std: "0.8",  raw: "0.0",  unit: "pips"  },
  { cat: "Forex — Majors", instrument: "AUD/USD",  std: "0.8",  raw: "0.0",  unit: "pips"  },
  { cat: "Forex — Majors", instrument: "USD/CHF",  std: "0.9",  raw: "0.1",  unit: "pips"  },
  { cat: "Commodities",    instrument: "XAU/USD",  std: "0.35", raw: "0.25", unit: "$/oz"  },
  { cat: "Commodities",    instrument: "XAG/USD",  std: "0.05", raw: "0.03", unit: "$/oz"  },
  { cat: "Commodities",    instrument: "Brent Oil",std: "0.05", raw: "0.02", unit: "$/bbl" },
  { cat: "Indices",        instrument: "US500",    std: "0.8",  raw: "0.5",  unit: "pts"   },
  { cat: "Indices",        instrument: "NAS100",   std: "0.8",  raw: "0.5",  unit: "pts"   },
  { cat: "Indices",        instrument: "GER40",    std: "1.5",  raw: "0.9",  unit: "pts"   },
  { cat: "Stocks",         instrument: "AAPL",     std: "0.10", raw: "0.06", unit: "$"     },
  { cat: "Stocks",         instrument: "TSLA",     std: "0.20", raw: "0.12", unit: "$"     },
  { cat: "Crypto",         instrument: "BTC/USD",  std: "15.0", raw: "11.6", unit: "$"     },
  { cat: "Crypto",         instrument: "ETH/USD",  std: "2.0",  raw: "1.4",  unit: "$"     },
];

const CATS = ["All", "Forex — Majors", "Commodities", "Indices", "Stocks", "Crypto"];

export default function SpreadsPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Spreads & Costs"
        title="Transparent Pricing with No Hidden Fees"
        subtitle="Neptune Markets publishes live-typical spreads for all instruments. Standard accounts are commission-free. Raw Pro accounts get raw spreads with $3.5/lot commission."
        cta={{ label: "Open Standard Account", href: "/accounts/standard" }}
        ctaSecondary={{ label: "Open Raw Pro Account", href: "/accounts/raw-pro" }}
      />

      <section className="py-16 px-5 md:px-12 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-bg border border-border rounded-2xl p-7">
              <div className="font-display text-lg font-extrabold text-text mb-2">Standard Account</div>
              <div className="text-4xl font-extrabold text-purple-600 font-display mb-1">Zero</div>
              <div className="text-sm text-text-faint mb-4">Commission on all trades</div>
              <p className="text-sm text-text-muted leading-relaxed">Spreads widen slightly to cover cost. Typical EUR/USD spread: 0.8 pips. Suitable for retail traders who prefer simplicity.</p>
              <a href="/accounts/standard" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700">
                Open Standard Account &rarr;
              </a>
            </div>
            <div className="bg-purple-gradient rounded-2xl p-7 text-white">
              <div className="font-display text-lg font-extrabold mb-2">Raw Pro Account</div>
              <div className="text-4xl font-extrabold font-display mb-1">$3.5</div>
              <div className="text-sm text-white/60 mb-4">Per lot per side commission</div>
              <p className="text-sm text-white/80 leading-relaxed">True interbank spreads from 0.0 pips. Lowest all-in cost for high-volume traders, scalpers, and algorithmic strategies.</p>
              <a href="/accounts/raw-pro" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white/80 hover:text-white">
                Open Raw Pro Account &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-surface-bg">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((cat) => (
              <button key={cat} className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${cat === "All" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-border text-text-muted hover:border-purple-300 hover:text-purple-600"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-purple-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-bg border-b border-border">
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Instrument</th>
                  <th className="text-left px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Category</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Standard Spread</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-purple-700 uppercase tracking-widest">Raw Spread</th>
                  <th className="text-center px-6 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Unit</th>
                </tr>
              </thead>
              <tbody>
                {SPREADS.map((row, i) => (
                  <tr key={row.instrument + i} className={i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"}>
                    <td className="px-6 py-4 font-bold text-text font-mono">{row.instrument}</td>
                    <td className="px-6 py-4 text-text-muted">{row.cat}</td>
                    <td className="px-6 py-4 text-center font-mono text-text-muted">{row.std}</td>
                    <td className="px-6 py-4 text-center font-mono font-extrabold text-purple-700">{row.raw}</td>
                    <td className="px-6 py-4 text-center text-text-faint text-xs">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-faint mt-4">Spreads shown are typical during normal market hours and may widen during low-liquidity periods, major economic releases, or market open/close. Raw Pro spreads may reach 0.0 during peak liquidity.</p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold mb-5">Start Trading at the Best Prices</h2>
          <p className="text-white/60 text-lg mb-10">Standard or Raw Pro — we offer the best spreads for your trading style.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Account</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
