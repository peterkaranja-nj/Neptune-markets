"use client";
import { DollarSign, Users, Monitor, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const FEATURES = [
  { icon: DollarSign, title: "Per-Lot Rebates",           desc: "Earn competitive per-lot commissions on every trade your referred clients make â€” paid weekly, no cap on earnings." },
  { icon: Users,      title: "Multi-Tier IB Structure",   desc: "Build a network of sub-IBs and earn on their volumes too. Our multi-tier structure rewards growth at every level." },
  { icon: Monitor,    title: "Real-Time Partner Dashboard",desc: "Track clients, volumes, commissions and performance in real time from your dedicated IB portal." },
];

const IB_STATS = [
  { label: "Total Clients",     value: "1,247",  color: "text-text"       },
  { label: "Active This Month", value: "842",    color: "text-purple-600" },
  { label: "Monthly Volume",    value: "$2.4B",  color: "text-text"       },
  { label: "Commission Earned", value: "$18,420",color: "text-green-600"  },
];

const TOP_CLIENTS = [
  { id: "****4821", vol: "$3,240" },
  { id: "****7203", vol: "$2,810" },
  { id: "****9014", vol: "$1,994" },
];

export default function Partners() {
  return (
    <section className="py-28 px-12 bg-surface-bg">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              tag="Partnership Program"
              title="Earn More by Introducing Neptune"
              subtitle="Join hundreds of IBs, affiliates and money managers who earn consistent commissions partnering with Neptune Markets."
            />
            <div className="space-y-6 mb-10">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text mb-1">{title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 font-semibold text-sm text-white px-7 py-3.5 rounded-xl bg-purple-gradient shadow-[0_4px_20px_rgba(108,59,228,0.35)] hover:shadow-[0_8px_32px_rgba(108,59,228,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all ripple-wrap group">
                Become a Partner <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 font-semibold text-sm text-text px-7 py-3.5 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-purple-sm hover:shadow-purple">
                Learn More
              </button>
            </div>
          </div>

          {/* Right â€” IB Dashboard card */}
          <div className="bg-white border border-border rounded-xl p-8 shadow-purple-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-text">IB Partner Dashboard</span>
              <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">â— Live</span>
            </div>
            <div className="text-xs text-text-faint mb-6">June 2024 â€” Real-time data</div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {IB_STATS.map((s) => (
                <div key={s.label} className="bg-surface-bg border border-border rounded-md p-4">
                  <div className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-1.5">{s.label}</div>
                  <div className={`font-display text-2xl font-extrabold tracking-tight ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-3 mb-5">
              {[
                { label: "Monthly Target Progress", val: 84 },
                { label: "Client Retention Rate",   val: 91 },
              ].map(({ label, val }) => (
                <div key={label} className="bg-surface-bg border border-border rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-semibold text-text-muted">{label}</span>
                    <span className="text-xs font-bold text-purple-600">{val}%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Top clients */}
            <div>
              <div className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-3">Top Performing Clients</div>
              <div className="space-y-2">
                {TOP_CLIENTS.map(({ id, vol }) => (
                  <div key={id} className="flex items-center justify-between px-4 py-2.5 bg-surface-bg border border-border rounded-sm">
                    <span className="font-mono text-xs text-text">{id}</span>
                    <span className="font-mono text-xs font-bold text-green-600">{vol} vol.</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
