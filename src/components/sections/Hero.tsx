"use client";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none hero-fade-up" style={{ animationDuration: "1.8s" }}>
        <img
          src="/neptune hero.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(1.05) saturate(0.85)" }}
          fetchPriority="high"
          decoding="sync"
        />
        {/* White wash overlay for light feel */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(255,255,255,0.42)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 md:px-12 pt-[100px] md:pt-[140px] pb-14 md:pb-24 flex items-center justify-center">
        <div className="text-center flex flex-col items-center">

          {/* Headline */}
          <h1 className="hero-fade-up font-display text-[clamp(48px,6vw,86px)] font-extrabold leading-[1.02] tracking-[-0.03em] mb-5" style={{ color: "#0d0a1e", animationDuration: "1.1s", animationDelay: "0.15s" }}>
            {t.heroTitle}<br />
            {t.heroWith}{" "}
            <span className="relative inline-block">
              <span className="gradient-text">{t.heroAccent}</span>
              <span
                className="absolute left-0 bottom-[-6px] w-full h-[3px] rounded-full"
                style={{ background: "linear-gradient(to right, #6c3be4, #b89eff)" }}
              />
            </span>
          </h1>

          <p className="hero-fade-up-d1 text-[15px] font-semibold leading-relaxed mb-8 max-w-[480px]" style={{ color: "rgba(13,10,30,0.90)", animationDuration: "1.1s", animationDelay: "0.4s" }}>
            {t.heroBody}
          </p>

          {/* CTAs */}
          <div className="hero-fade-up-d2 flex flex-wrap gap-4 justify-center" style={{ animationDuration: "1.1s", animationDelay: "0.65s" }}>
            <a
              href="/accounts"
              className="inline-flex items-center gap-2.5 font-semibold text-base text-white px-9 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.45)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.6)] hover:-translate-y-0.5 transition-all ripple-wrap btn-sheen group"
            >
              {t.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/accounts"
              className="inline-flex items-center gap-2.5 font-semibold text-base px-9 py-4 rounded-xl border hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 hover:-translate-y-0.5 transition-all shadow-sm"
              style={{ color: "#0d0a1e", borderColor: "rgba(13,10,30,0.20)", background: "rgba(255,255,255,0.60)" }}
            >
              <Play size={15} className="fill-current" />
              {t.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
