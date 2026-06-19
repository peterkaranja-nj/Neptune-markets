"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.classList.add("opacity-100", "translate-y-0");
  }, []);

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
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

      {/* Background radial glow */}

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-5 md:px-12 pt-[100px] md:pt-[140px] pb-14 md:pb-24 flex items-center justify-center">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center flex flex-col items-center"
          style={{ transitionDelay: "80ms" }}
        >
          {/* Headline */}
          <h1 className="font-display text-[clamp(48px,6vw,86px)] font-extrabold leading-[1.02] tracking-[-0.03em] mb-5" style={{ color: "#0d0a1e" }}>
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

          <p className="text-[15px] font-semibold leading-relaxed mb-8 max-w-[480px]" style={{ color: "rgba(13,10,30,0.90)" }}>
            {t.heroBody}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
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
