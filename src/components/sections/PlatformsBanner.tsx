import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PlatformsBanner() {
  return (
    <section className="py-12 md:py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f7ff 100%)" }}>
      <div className="max-w-8xl mx-auto px-5 md:px-12">

        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-10 items-center">

          {/* Left — copy */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-text leading-[1.1] tracking-tight mb-5">
              Trade on Any Device,<br />Anywhere
            </h2>
            <p className="text-base text-text-muted font-light leading-relaxed mb-8 max-w-md">
              Desktop and browser trading on powerful, secure global platforms — MT5, MT4, and WebTerminal — with free built-in research tools.
            </p>
            <a href="/platforms" className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:gap-3 transition-all group">
              Explore all platforms
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — device mockups */}
          <div className="relative h-72 md:h-[320px] select-none">

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl pointer-events-none rounded-full"
              style={{ background: "rgba(108,59,228,0.10)" }} />

            {/* Main device — desktop/landscape */}
            <div className="absolute" style={{ left: "0%", top: "0%", width: "70%", zIndex: 2 }}>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border: "7px solid #1c1a2e",
                  boxShadow: "0 28px 72px rgba(0,0,0,0.22), 0 4px 16px rgba(108,59,228,0.08)",
                  transform: "perspective(1000px) rotateY(-7deg) rotateX(1.5deg)",
                }}
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5" style={{ background: "#0d0d1a" }}>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[8px] font-mono text-white/35 flex-1 text-center tracking-wide">
                    Neptune Markets — MetaTrader 5
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[7px] text-green-400/70 font-bold uppercase tracking-wide">Live</span>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=72&fm=webp"
                  alt=""
                  aria-hidden={true}
                  width={700}
                  height={188}
                  className="block w-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Phone frame */}
            <div className="absolute" style={{ right: "0%", top: "6%", width: "27%", zIndex: 3 }}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "5px solid #1c1a2e",
                  boxShadow: "0 24px 56px rgba(0,0,0,0.26), 0 4px 12px rgba(108,59,228,0.10)",
                  transform: "perspective(600px) rotateY(7deg) rotateX(-1deg)",
                }}
              >
                <div className="flex justify-center py-1.5" style={{ background: "#0d0d1a" }}>
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&q=72&fm=webp"
                  alt=""
                  aria-hidden={true}
                  width={300}
                  height={220}
                  className="block w-full"
                  style={{ objectFit: "cover", objectPosition: "65% center" }}
                />
                <div className="px-3 py-2 flex items-center justify-between" style={{ background: "#0d0d1a" }}>
                  <span className="font-mono text-[9px] text-white/45 tracking-wide">EUR/USD</span>
                  <span className="font-mono text-[9px] font-bold text-green-400">1.0847</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
