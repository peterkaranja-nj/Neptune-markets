"use client";
import { Gift, Users, Trophy, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROMOTIONS } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  gift: Gift, users: Users, trophy: Trophy,
};

export default function Promotions() {
  return (
    <section className="py-10 px-5 md:py-14 md:px-12 bg-navy relative overflow-hidden">
      {/* Ambient blobs */}

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xs font-bold text-purple-300 uppercase tracking-[0.1em]">Promotions</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Exclusive Trading Offers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROMOTIONS.map((promo, i) => {
            const Icon = ICON_MAP[promo.icon];
            return (
              <div
                key={promo.title}
                className={cn(
                  "glass-dark rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer group relative overflow-hidden",
                  "hover:border-purple-400/30 hover:-translate-y-1.5",
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Hover tint */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                {/* Specular rim on hover */}
                <div className="absolute top-0 left-4 right-4 h-px bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div className="relative z-10">
                  {/* Skeuomorphic icon container */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(124,77,255,0.18)",
                      border: "1px solid rgba(155,114,255,0.28)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.15)"
                    }}
                  >
                    {Icon && <Icon size={20} className="text-purple-300" />}
                  </div>
                  <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">{promo.tag}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{promo.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">{promo.desc}</p>
                  <a href={promo.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-300 hover:gap-3 transition-all group-hover:text-purple-200">
                    Claim Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
