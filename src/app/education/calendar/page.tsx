import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { AlertTriangle, TrendingUp, Filter, ArrowRight, Calendar } from "lucide-react";

export const metadata = { title: "Economic Calendar | Neptune Markets — High-Impact Market Events" };

const EVENTS = [
  { date: "Mon Jun 9",  time: "08:30 ET", currency: "USD", impact: "High",   event: "US Non-Farm Payrolls (May)",        forecast: "180K",  previous: "175K"  },
  { date: "Mon Jun 9",  time: "10:00 ET", currency: "USD", impact: "Medium", event: "ISM Services PMI (May)",             forecast: "52.5",  previous: "51.3"  },
  { date: "Tue Jun 10", time: "04:30 ET", currency: "GBP", impact: "Medium", event: "UK GDP (MoM, Apr)",                  forecast: "0.1%",  previous: "0.4%"  },
  { date: "Wed Jun 11", time: "08:30 ET", currency: "USD", impact: "High",   event: "US CPI (YoY, May)",                  forecast: "3.1%",  previous: "3.4%"  },
  { date: "Wed Jun 11", time: "08:30 ET", currency: "USD", impact: "High",   event: "US CPI (MoM, May)",                  forecast: "0.2%",  previous: "0.3%"  },
  { date: "Thu Jun 12", time: "07:45 ET", currency: "EUR", impact: "High",   event: "ECB Interest Rate Decision",         forecast: "4.25%", previous: "4.50%" },
  { date: "Thu Jun 12", time: "08:30 ET", currency: "USD", impact: "High",   event: "US Initial Jobless Claims",          forecast: "222K",  previous: "229K"  },
  { date: "Thu Jun 12", time: "08:30 ET", currency: "EUR", impact: "High",   event: "ECB Press Conference",               forecast: "—",     previous: "—"     },
  { date: "Fri Jun 13", time: "08:30 ET", currency: "USD", impact: "Medium", event: "US Producer Price Index (MoM, May)", forecast: "0.2%",  previous: "0.5%"  },
  { date: "Fri Jun 13", time: "10:00 ET", currency: "USD", impact: "Medium", event: "University of Michigan Sentiment",   forecast: "69.0",  previous: "67.4"  },
];

const IMPACT_STYLE: Record<string, string> = {
  "High":   "bg-red-50 text-red-600 border-red-200",
  "Medium": "bg-amber-50 text-amber-600 border-amber-200",
  "Low":    "bg-green-50 text-green-600 border-green-200",
};

const CURRENCY_FLAG: Record<string, string> = {
  USD: "🇺🇸", EUR: "🇪🇺", GBP: "🇬🇧", JPY: "🇯🇵", AUD: "🇦🇺", CAD: "🇨🇦", CHF: "🇨🇭", NZD: "🇳🇿",
};

const IMPACT_CARDS = [
  { icon: AlertTriangle, color: "#ef4444", title: "High Impact Events",   desc: "Central bank decisions, NFP, CPI, and GDP releases that historically cause significant price moves across multiple markets." },
  { icon: TrendingUp,    color: "#f59e0b", title: "Medium Impact Events", desc: "PMI data, retail sales, trade balance reports — important for confirming trends and short-term directional moves." },
  { icon: Filter,        color: "#6c3be4", title: "Filters & Alerts",     desc: "Filter by currency, impact level, or date range. Forecast vs. actual tracking to measure economic surprise effects." },
];

const THIS_WEEK_TOP = [
  { day: "Wed", date: "Jun 11", event: "US CPI (YoY)", currency: "USD", impact: "High" },
  { day: "Thu", date: "Jun 12", event: "ECB Rate Decision", currency: "EUR", impact: "High" },
  { day: "Mon", date: "Jun 9",  event: "Non-Farm Payrolls", currency: "USD", impact: "High" },
];

export default function CalendarPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center + upcoming event preview card ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        <div className="absolute top-[-100px] right-[-60px] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(108,59,228,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Economic Calendar
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Know What Moves Markets<br /><span className="gradient-text">Before It Happens.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Stay ahead of major market events — central bank decisions, jobs reports, inflation data, and more. Updated in real time with consensus forecasts and previous results.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Free Account
            </a>
            <a href="/education/analysis" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              View Analysis
            </a>
          </div>
          {/* Next event preview card */}
          <div className="hero-fade-up-d4 inline-block">
            <div className="glass-card rounded-2xl px-6 py-4 shadow-purple-lg text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-red-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-faint mb-0.5">Next High-Impact Event</div>
                <div className="font-bold text-text text-sm">US Non-Farm Payrolls (May)</div>
                <div className="text-xs text-text-muted">Monday Jun 9 · 08:30 ET · USD</div>
              </div>
              <div className="pl-4 border-l border-border">
                <div className="text-[10px] text-text-faint mb-0.5">Forecast</div>
                <div className="font-display font-bold text-purple-700 text-lg">180K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT CARDS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">What the Calendar Covers</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">200+ tracked global events across all major currency pairs and asset classes.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5">
            {IMPACT_CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Animate key={c.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}66)` }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${c.color}28`, border: `1.5px solid ${c.color}50` }}>
                      <Icon size={20} style={{ color: c.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            {["All", "High Impact", "USD", "EUR", "GBP", "JPY", "This Week"].map((f) => (
              <button key={f} className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${f === "All" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-border text-text-muted hover:border-purple-300 hover:text-purple-600"}`}>
                {f}
              </button>
            ))}
          </div>
          <Animate from="scale" delay={100}>
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-purple-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-bg border-b border-border">
                    <th className="text-left px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Date & Time</th>
                    <th className="text-center px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Currency</th>
                    <th className="text-center px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Impact</th>
                    <th className="text-left px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Event</th>
                    <th className="text-center px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Forecast</th>
                    <th className="text-center px-5 py-4 text-2xs font-bold text-text-faint uppercase tracking-widest">Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {EVENTS.map((e, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-surface-bg/50"} hover:bg-purple-50 transition-colors cursor-pointer`}>
                      <td className="px-5 py-4">
                        <div className="font-medium text-text text-xs">{e.date}</div>
                        <div className="text-text-faint text-xs font-mono mt-0.5">{e.time}</div>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="font-bold text-text text-xs">{CURRENCY_FLAG[e.currency] ?? ""} {e.currency}</span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${IMPACT_STYLE[e.impact]}`}>{e.impact}</span>
                      </td>
                      <td className="px-5 py-4 font-medium text-text text-xs">{e.event}</td>
                      <td className="px-5 py-4 text-center font-mono text-xs text-purple-700 font-bold">{e.forecast}</td>
                      <td className="px-5 py-4 text-center font-mono text-xs text-text-muted">{e.previous}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Animate>
          <p className="text-xs text-text-faint mt-4">Data shown is indicative. Times in Eastern Time. All events and forecasts subject to change.</p>
        </div>
      </section>

      {/* ── UNIQUE CTA: This week's top events ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <Animate from="left">
            <h2 className="font-display text-4xl font-extrabold text-white mb-4">Trade the News with Confidence</h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">Full calendar access, live data updates, and daily expert briefings — included with every Neptune Markets account.</p>
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Free Account <ArrowRight size={16} />
            </a>
          </Animate>
          <Animate from="right">
            <div className="glass-dark rounded-2xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>This Week&apos;s Top Events</div>
              <div className="space-y-3">
                {THIS_WEEK_TOP.map(({ day, date, event, currency, impact }) => (
                  <div key={event} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="text-center w-10 flex-shrink-0">
                      <div className="text-[10px] text-white/40 uppercase">{day}</div>
                      <div className="text-xs font-bold text-white">{date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white truncate">{event}</div>
                      <div className="text-[10px] text-white/40">{currency}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${impact === "High" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>{impact}</span>
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
