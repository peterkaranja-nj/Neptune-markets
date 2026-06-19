import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { BookOpen, Search, Tag, ArrowRight } from "lucide-react";

export const metadata = { title: "Trading Glossary | Neptune Markets — 500+ Trading Terms Explained" };

const GLOSSARY: { term: string; def: string; cat: string }[] = [
  { term: "Ask Price",              cat: "Pricing",    def: "The lowest price a seller is willing to accept. When you buy, you buy at the ask price." },
  { term: "Bid Price",              cat: "Pricing",    def: "The highest price a buyer is willing to pay. When you sell, you sell at the bid price." },
  { term: "Spread",                 cat: "Pricing",    def: "The difference between the bid and ask price. This is the broker's primary cost for commission-free accounts." },
  { term: "Pip",                    cat: "Pricing",    def: "The smallest standard price move in a currency pair. For EUR/USD, one pip equals 0.0001." },
  { term: "Lot",                    cat: "Trading",    def: "A standardised contract size. One standard lot = 100,000 units. One mini lot = 10,000. One micro lot = 1,000." },
  { term: "Leverage",               cat: "Risk",       def: "Borrowed capital that allows you to control a position larger than your deposit. 1:100 leverage means $1,000 controls $100,000." },
  { term: "Margin",                 cat: "Risk",       def: "The deposit required to open and maintain a leveraged position. Expressed as a percentage of the full trade value." },
  { term: "Stop-Loss",              cat: "Risk",       def: "An instruction to close a trade at a specified price to limit losses. Essential for protecting capital." },
  { term: "Take-Profit",            cat: "Risk",       def: "An instruction to close a trade when a target profit is reached. Locks in gains automatically." },
  { term: "CFD",                    cat: "Products",   def: "Contract for Difference. An agreement to exchange the difference in price of an asset between opening and closing a position." },
  { term: "Long",                   cat: "Trading",    def: "A buy position. You profit if the price rises above your entry." },
  { term: "Short",                  cat: "Trading",    def: "A sell position. You profit if the price falls below your entry." },
  { term: "Liquidity",              cat: "Market",     def: "How easily an asset can be bought or sold without significantly affecting its price. High liquidity = tight spreads." },
  { term: "Slippage",               cat: "Execution",  def: "The difference between the expected fill price and the actual price executed, typically during high volatility." },
  { term: "Swap / Rollover",        cat: "Costs",      def: "Interest charged or earned for holding a position overnight. Based on the interest rate differential between the two currencies." },
  { term: "RSI",                    cat: "Indicators", def: "Relative Strength Index. A momentum oscillator measuring the speed and magnitude of price movements. Values above 70 indicate overbought, below 30 oversold." },
  { term: "MACD",                   cat: "Indicators", def: "Moving Average Convergence Divergence. Shows the relationship between two moving averages, used to spot trend changes and momentum." },
  { term: "Support Level",          cat: "Technical",  def: "A price zone where buying pressure is expected to prevent further decline. Traders watch for bounces at support." },
  { term: "Resistance Level",       cat: "Technical",  def: "A price zone where selling pressure is expected to prevent further advance. Breakouts above resistance can signal new uptrends." },
  { term: "Drawdown",               cat: "Risk",       def: "The peak-to-trough decline in an account's equity during a losing period. A key measure of strategy risk." },
  { term: "Hedging",                cat: "Strategy",   def: "Opening a position that offsets the risk of another existing position. Used to reduce net market exposure." },
  { term: "Expert Advisor (EA)",    cat: "Technology", def: "An automated trading program built on MT4/MT5. Executes trades based on pre-defined rules without manual intervention." },
  { term: "Fibonacci Retracement",  cat: "Technical",  def: "A technical tool using horizontal lines at key Fibonacci ratios (23.6%, 38.2%, 61.8%) to identify potential support and resistance." },
  { term: "Volatility",             cat: "Market",     def: "The degree of price variation over time. High volatility means large price swings; low volatility means stable, narrow ranges." },
];

const CATEGORIES = ["All", "Pricing", "Trading", "Risk", "Products", "Market", "Execution", "Costs", "Indicators", "Technical", "Strategy", "Technology"];

const HOW_TO_USE = [
  { icon: Search,   color: "#6c3be4", title: "Search & Filter",  desc: "Filter by category to find exactly what you need — from pricing terminology to technical indicators." },
  { icon: BookOpen, color: "#0891b2", title: "Plain Language",   desc: "Every definition is written by traders, for traders. No academic jargon — just clear, practical explanations." },
  { icon: Tag,      color: "#059669", title: "500+ Definitions", desc: "From the basics to advanced algorithmic trading terms — the most comprehensive free glossary in CFD trading." },
];

const BG_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function GlossaryPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center with floating A-Z letters in background ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* Floating letter tiles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {BG_LETTERS.map((l, i) => (
            <span key={l} className="letter-tile absolute font-display font-extrabold select-none"
              style={{
                fontSize: `${80 + i * 15}px`,
                color: "rgba(108,59,228,0.06)",
                top: `${[15, 35, 55, 20, 65, 40, 25, 50][i]}%`,
                left: `${[5, 15, 75, 88, 60, 3, 45, 92][i]}%`,
              }}>
              {l}
            </span>
          ))}
        </div>
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Trading Glossary
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Every Trading Term,<br /><span className="gradient-text">Explained in Plain English.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            From &apos;ask price&apos; to &apos;volatility&apos; — over 500 trading terms, defined clearly and practically by traders who use them every day.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/education/academy" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Start Learning Free
            </a>
            <a href="/education/academy" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              Explore Academy
            </a>
          </div>
          {/* Stats row */}
          <div className="hero-fade-up-d4 flex flex-wrap gap-6 justify-center">
            {[["500+", "Trading terms"], ["12", "Categories"], ["Free", "For everyone"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-extrabold text-purple-600">{val}</div>
                <div className="text-xs text-text-faint">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO USE ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">Your Trading Dictionary</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Everything from basic pricing terms to advanced strategy concepts — explained in plain language.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5">
            {HOW_TO_USE.map((h, i) => {
              const Icon = h.icon;
              return (
                <Animate key={h.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${h.color}, ${h.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${h.color}28`, border: `1.5px solid ${h.color}50` }}>
                      <Icon size={20} style={{ color: h.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{h.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{h.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GLOSSARY GRID ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button key={cat} className={`text-xs font-bold px-3.5 py-2 rounded-full border transition-all ${cat === "All" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-border text-text-muted hover:border-purple-300 hover:text-purple-600"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOSSARY.map((item, i) => (
              <Animate key={item.term} delay={Math.floor(i / 3) * 60} from="up">
                <div className="bg-surface-bg border border-border rounded-xl p-5 hover:border-purple-200 hover:shadow-purple-sm transition-all h-full">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-sm font-bold text-text">{item.term}</h3>
                    <span className="text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-100 px-2 py-0.5 rounded-full flex-shrink-0">{item.cat}</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{item.def}</p>
                </div>
              </Animate>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-text-faint text-sm">Showing 24 of 500+ terms. Open an account for full glossary access.</p>
          </div>
        </div>
      </section>

      {/* ── UNIQUE CTA: "Test Your Knowledge" quiz card ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">Ready to Put Your Knowledge to Work?</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">Open a free demo account and practise everything you&apos;ve learned — with $10,000 in virtual funds, zero risk.</p>
            <div className="flex gap-4 flex-wrap">
              <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
                Open Demo Account
              </a>
              <a href="/education/academy" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">
                Explore Academy
              </a>
            </div>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Quick Knowledge Check</div>
              <div className="text-sm font-bold text-white mb-4">What does &quot;going long&quot; on a currency pair mean?</div>
              <div className="space-y-3">
                {[
                  { text: "Selling the base currency",    correct: false },
                  { text: "Buying the base currency",     correct: true  },
                  { text: "Holding a position overnight", correct: false },
                ].map((opt) => (
                  <div key={opt.text} className="flex items-center gap-3 py-2.5 px-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5"
                    style={{ background: opt.correct ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${opt.correct ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.08)"}` }}>
                    <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: opt.correct ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)", border: `1.5px solid ${opt.correct ? "rgba(74,222,128,0.6)" : "rgba(255,255,255,0.2)"}` }} />
                    <span className="text-xs" style={{ color: opt.correct ? "#4ade80" : "rgba(255,255,255,0.6)" }}>{opt.text}</span>
                    {opt.correct && <span className="ml-auto text-[10px] text-green-400 font-bold">Correct</span>}
                  </div>
                ))}
              </div>
              <a href="/education/academy" className="mt-6 w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}>
                More Questions in Academy <ArrowRight size={13} />
              </a>
            </div>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
