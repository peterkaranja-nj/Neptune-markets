import { ArrowRight } from "lucide-react";

export default function CTABottom() {
  return (
    <section className="py-10 px-4 md:py-14 md:px-8 lg:px-12 bg-navy text-white text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display text-4xl font-extrabold mb-5">Start Trading with Neptune Markets</h2>
        <p className="text-white/60 text-lg mb-7">Join over 500,000 traders. Open a live or demo account in under 5 minutes — no hidden fees.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/accounts"
            className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
            Open Live Account <ArrowRight size={14} />
          </a>
          <a href="/accounts"
            className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">
            Try Demo First
          </a>
        </div>
      </div>
    </section>
  );
}
