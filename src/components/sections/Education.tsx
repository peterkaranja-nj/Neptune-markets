"use client";
import { ArrowRight } from "lucide-react";

const EDU_CARDS = [
  {
    tag: "Free Courses",
    title: "Learn at Your Own Pace",
    desc: "Structured curriculum from beginner to advanced. Get certified and trade with confidence.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    href: "/education/academy",
    cta: "Explore Courses",
  },
  {
    tag: "Daily Analysis",
    title: "Expert Market Briefings, Every Morning",
    desc: "Actionable daily analysis from our research desk covering Forex, Gold, Indices and Crypto.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    href: "/education/analysis",
    cta: "Read Today's Briefing",
  },
];

export default function Education() {
  return (
    <section className="py-10 px-5 md:py-16 md:px-12 bg-white">
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-text leading-[1.1] tracking-tight mb-3 md:mb-4">
            Learn. Analyse. Trade Better.
          </h2>
          <p className="text-lg text-text-muted font-light leading-relaxed max-w-xl">
            Free education for every skill level, from your first trade to advanced strategy development.
          </p>
        </div>

        {/* Image cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {EDU_CARDS.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[320px] flex flex-col justify-end cursor-pointer group"
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="relative z-10 p-8">
                <div className="text-[10px] font-bold text-purple-300 uppercase tracking-widest mb-2">{card.tag}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-white/55 mb-4 leading-relaxed">{card.desc}</p>
                <a href={card.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:gap-3 transition-all">
                  {card.cta} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
