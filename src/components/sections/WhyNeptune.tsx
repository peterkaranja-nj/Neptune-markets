"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, TrendingDown, Shield, Headphones, CreditCard, BarChart2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  { icon: Zap,          title: "Fast Execution",   desc: "Orders filled in under 12ms via Tier-1 data centres. Zero requotes.",              color: "#6c3be4" },
  { icon: TrendingDown, title: "Raw Spreads",       desc: "Direct market access from 0.0 pips, no markup on Raw Pro accounts.",               color: "#0891b2" },
  { icon: Shield,       title: "Regulated",         desc: "5 jurisdictional licences. Funds in segregated Tier-1 bank accounts.",             color: "#059669" },
  { icon: Headphones,   title: "24/7 Support",      desc: "Multilingual team, average response under 90 seconds.",                            color: "#d97706" },
  { icon: CreditCard,   title: "Instant Deposits",  desc: "20+ methods including M-Pesa, Airtel, cards and crypto. Same-day withdrawals.",    color: "#dc2626" },
  { icon: BarChart2,    title: "Pro Analysis",      desc: "Trading Central, Autochartist and daily analyst briefings — all free.",            color: "#7c3aed" },
];

// Orbit geometry: 540×540, center=(270,270), r=210, cardSize=110, half=55
const ORBIT_ITEMS = FEATURES.map((f, i) => {
  const deg = 90 - i * 60;
  const rad = (deg * Math.PI) / 180;
  const r = 210, half = 55, cx = 270, cy = 270;
  return {
    ...f,
    left: Math.round(cx + r * Math.cos(rad) - half),
    top:  Math.round(cy - r * Math.sin(rad) - half),
  };
});

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function WhyNeptune() {
  const { ref, inView } = useInView();
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (inView) setSpinning(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-10 px-5 md:px-8 lg:px-12 overflow-hidden relative bg-navy"
    >
      {/* Blobs */}
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="max-w-8xl mx-auto relative z-10">

        {/* ── Desktop: two-column — text left, orbit right ── */}
        <div className="hidden lg:block">

          <div className="grid lg:grid-cols-[48%_52%] gap-8 items-center">

          {/* Left — title + feature list + CTAs */}
          <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
            <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Built for Serious Traders
            </h2>
            <p className="text-base font-light leading-relaxed mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Every feature engineered to give you an edge — from execution speed to world-class support.
            </p>
            <div className="mb-10 ml-10">
              {/* Tab label */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl text-[10px] font-bold uppercase tracking-[0.13em]"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)", borderBottom: "none", color: "rgba(255,255,255,0.45)", marginLeft: 14 }}>
                Platform Highlights
              </div>
              {/* Tab panel card */}
              <div className="rounded-2xl rounded-tl-sm p-5 space-y-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className={cn("flex items-start gap-4 transition-all duration-500", inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4")}
                      style={{ transitionDelay: `${200 + i * 80}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: f.color, boxShadow: `0 4px 14px ${f.color}55` }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-none mb-1">{f.title}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{f.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3">
              <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-purple-gradient px-6 py-2.5 rounded-xl shadow-[0_4px_18px_rgba(108,59,228,0.35)] hover:shadow-[0_6px_24px_rgba(108,59,228,0.50)] hover:-translate-y-0.5 transition-all btn-sheen">
                Open Account <ArrowRight size={13} />
              </a>
              <a href="/accounts" className="inline-flex items-center text-sm font-bold px-6 py-2.5 rounded-xl border hover:-translate-y-0.5 transition-all" style={{ color: "rgba(255,255,255,0.80)", borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}>
                Try Free Demo
              </a>
            </div>
          </div>

          {/* Right — orbit */}
          <div className="flex justify-center items-center">
            <div style={{ position: "relative", width: 540, height: 540 }}>

              {/* Orbit path */}
              <div style={{
                position: "absolute", left: 60, top: 60, width: 420, height: 420,
                borderRadius: "50%", border: "1.5px dashed rgba(255,255,255,0.12)",
                pointerEvents: "none",
              }} />

              {/* Center glow */}
              <div style={{
                position: "absolute", left: "50%", top: "50%",
                transform: "translate(-50%,-50%)",
                width: 300, height: 300, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(108,59,228,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Laptop */}
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 280 }}>
                <div
                  className={cn("transition-all duration-1000", inView ? "opacity-100 scale-100" : "opacity-0 scale-90")}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div style={{
                    borderRadius: 18, padding: 7,
                    background: "rgba(255,255,255,0.45)",
                    backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
                    border: "1.5px solid rgba(255,255,255,0.80)",
                    boxShadow: "0 20px 60px rgba(108,59,228,0.18), inset 0 2px 0 rgba(255,255,255,1.0)",
                  }}>
                    <img src="/laptop.jpg" alt="Neptune Markets Trading Platform" className="w-full block rounded-2xl" />
                  </div>
                </div>
              </div>

              {/* Spinning ring + cards */}
              <div style={{
                position: "absolute", inset: 0,
                animation: spinning ? "orbit-ring-spin 22s linear infinite" : "none",
              }}>
                {ORBIT_ITEMS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      style={{
                        position: "absolute", left: card.left, top: card.top, width: 110, height: 110,
                        animation: spinning ? "orbit-card-counter 22s linear infinite" : "none",
                      }}
                    >
                      {/* Solid colored circle */}
                      <div className="rounded-full w-full h-full flex flex-col items-center justify-center gap-1.5 cursor-default"
                        style={{
                          background: card.color,
                          boxShadow: `0 6px 24px ${card.color}60, inset 0 1.5px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.12)`,
                          border: `2px solid ${card.color}`,
                        }}
                      >
                        {/* Icon */}
                        <div style={{
                          width: 36, height: 36, borderRadius: "50%",
                          background: "rgba(255,255,255,0.20)",
                          border: "1px solid rgba(255,255,255,0.30)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <Icon size={16} color="#fff" />
                        </div>
                        {/* Label */}
                        <span style={{
                          fontSize: 10.5, fontWeight: 700, color: "#fff",
                          textAlign: "center", lineHeight: 1.2,
                          maxWidth: 82, padding: "0 6px",
                          textShadow: "0 1px 3px rgba(0,0,0,0.25)",
                        }}>
                          {card.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          </div>{/* end two-column grid */}
        </div>{/* end desktop block */}

        {/* ── Mobile: laptop + grid ── */}
        <div className="lg:hidden">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-extrabold text-white leading-tight mb-3">
              Built for Serious Traders
            </h2>
            <p className="text-base font-light max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Every feature engineered to give you an edge.
            </p>
          </div>
          <div
            className={cn("transition-all duration-700 mb-8", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
            style={{ transitionDelay: "200ms" }}
          >
            <div style={{
              borderRadius: 20, padding: 8, maxWidth: 360, margin: "0 auto",
              background: "rgba(255,255,255,0.40)",
              backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
              border: "1.5px solid rgba(255,255,255,0.75)",
              boxShadow: "0 16px 48px rgba(108,59,228,0.14)",
            }}>
              <img src="/laptop.jpg" alt="Neptune Markets Trading Platform" className="w-full block rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={cn("rounded-2xl p-4 transition-all duration-500", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
                  style={{
                    transitionDelay: `${300 + i * 60}ms`,
                    background: f.color,
                    boxShadow: `0 4px 16px ${f.color}50`,
                  }}
                >
                  <div style={{
                    width: 30, height: 30, borderRadius: 8, marginBottom: 8,
                    background: "rgba(255,255,255,0.20)",
                    border: "1px solid rgba(255,255,255,0.30)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={14} color="#fff" />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 3, lineHeight: 1.3 }}>{f.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", lineHeight: 1.45 }}>{f.desc}</div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 justify-center">
            <a href="/accounts" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-purple-gradient px-6 py-2.5 rounded-xl shadow-[0_4px_18px_rgba(108,59,228,0.35)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Account <ArrowRight size={13} />
            </a>
            <a href="/accounts" className="inline-flex items-center text-sm font-bold px-6 py-2.5 rounded-xl border hover:-translate-y-0.5 transition-all" style={{ color: "rgba(255,255,255,0.80)", borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}>
              Try Free Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
