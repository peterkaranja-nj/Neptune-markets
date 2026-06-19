import Image from "next/image";

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  img?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}
export default function PageHero({ tag, title, subtitle, img, cta, ctaSecondary }: PageHeroProps) {
  return (
    <section className="relative pt-[180px] pb-24 px-12 overflow-hidden">
      {img && (
        <div className="absolute inset-0 z-0">
          <Image src={img} alt="" aria-hidden={true} fill sizes="100vw" className="object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-bg/97 via-purple-50/90 to-surface-bg/88"/>
        </div>
      )}
      <div className="absolute inset-0 bg-hero-mesh z-0" />
      <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(155,114,255,0.1)_0%,transparent_70%)]"/>
      <div className="max-w-8xl mx-auto relative z-10 text-center">
        <h1 className="font-display text-[clamp(36px,4.5vw,64px)] font-extrabold text-text leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto mb-10">{subtitle}</p>
        )}
        {(cta || ctaSecondary) && (
          <div className="flex gap-4 justify-center flex-wrap">
            {cta && (
              <a href={cta.href} className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all">
                {cta.label}
              </a>
            )}
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 hover:-translate-y-0.5 transition-all shadow-purple-sm">
                {ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
