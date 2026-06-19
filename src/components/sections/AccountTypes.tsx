"use client";
import { Check, Star } from "lucide-react";
import { ACCOUNT_TYPES } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AccountTypes() {
  return (
    <section className="py-12 px-5 md:py-28 md:px-12 bg-surface-bg">
      <div className="max-w-8xl mx-auto">
        <SectionHeader
          tag="Account Types"
          title="Choose Your Trading Account"
          subtitle="From first-time traders to institutional desks — we have an account built for you."
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {ACCOUNT_TYPES.map((acc, i) => (
            <div
              key={acc.name}
              className={cn(
                "rounded-2xl border-[1.5px] transition-all duration-300 relative overflow-hidden",
                acc.featured
                  ? "border-purple-400 shadow-[0_24px_80px_rgba(108,59,228,0.22)] scale-[1.02] z-10"
                  : "bg-white border-border hover:border-purple-300/70 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(108,59,228,0.08)]"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {acc.featured ? (
                <>
                  {/* Featured — dark gradient header */}
                  <div className="relative px-5 pt-6 pb-6 md:px-9 md:pt-8 md:pb-8" style={{ background: "linear-gradient(145deg, #1c0f3f 0%, #2d1460 60%, #3a1a7a 100%)" }}>
                    {/* Most Popular badge */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <Star size={10} className="fill-amber-400 text-amber-400" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-400">Most Popular</span>
                    </div>
                    <div className="text-[10px] font-bold text-purple-300/70 uppercase tracking-widest mb-2">{acc.tier}</div>
                    <div className="font-display text-3xl font-extrabold mb-2 tracking-tight text-white">{acc.name}</div>
                    <p className="text-sm text-white/55 mb-7 leading-relaxed">{acc.desc}</p>

                    <div className="mb-0 pb-0">
                      <div className="font-display font-extrabold leading-none mb-1.5 tracking-tight text-white text-5xl">
                        {acc.price}
                        <span className="text-sm font-normal text-white/45 ml-2">
                          {acc.price !== "Custom" ? (acc.name === "Standard" ? "Commission" : "per lot") : ""}
                        </span>
                      </div>
                      <div className="text-xs text-white/40 mt-1.5">{acc.deposit}</div>
                    </div>

                    {/* Decorative glow orb */}
                  </div>

                  {/* Feature list */}
                  <div className="bg-white px-5 py-6 md:px-9 md:py-8">
                    <ul className="space-y-3.5 mb-8">
                      {acc.features.map((feat) => (
                        <li key={feat.text} className={cn("flex items-center gap-3 text-sm", feat.accent ? "text-text font-semibold" : "text-text-muted")}>
                          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-purple-600" />
                          </div>
                          {feat.text}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3.5 text-sm font-bold rounded-xl transition-all bg-purple-gradient text-white shadow-[0_4px_16px_rgba(108,59,228,0.35)] hover:shadow-[0_8px_28px_rgba(108,59,228,0.45)] hover:-translate-y-0.5 active:translate-y-0">
                      {acc.cta}
                    </button>
                  </div>
                </>
              ) : (
                <div className="px-5 py-6 md:px-9 md:py-9">
                  <div className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-2">{acc.tier}</div>
                  <div className="font-display text-3xl font-extrabold mb-2 tracking-tight text-text">{acc.name}</div>
                  <p className="text-sm text-text-muted mb-7 leading-relaxed">{acc.desc}</p>

                  <div className="mb-7 pb-7 border-b border-border">
                    <div className="font-display font-extrabold leading-none mb-1.5 tracking-tight text-text text-5xl">
                      {acc.price}
                      {acc.price !== "Custom" && (
                        <span className="text-sm font-normal text-text-faint ml-2">
                          {acc.name === "Standard" ? "Commission" : "per lot"}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-text-faint mt-1.5">{acc.deposit}</div>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {acc.features.map((feat) => (
                      <li key={feat.text} className={cn("flex items-center gap-3 text-sm", feat.accent ? "text-text font-semibold" : "text-text-muted")}>
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-green-600" />
                        </div>
                        {feat.text}
                      </li>
                    ))}
                  </ul>

                  <button className={cn(
                    "w-full py-3.5 text-sm font-bold rounded-xl transition-all",
                    acc.ctaStyle === "dark"
                      ? "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-white text-purple-700 border-[1.5px] border-purple-300 hover:bg-purple-50 hover:border-purple-500 hover:-translate-y-0.5 active:translate-y-0"
                  )}>
                    {acc.cta}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
