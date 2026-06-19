import { ArrowRight } from "lucide-react";

export default function CTAStrip() {
  return (
    <div className="py-10 px-5 md:px-12 relative overflow-hidden bg-navy">
      {/* Purple blobs — same as feature section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="max-w-8xl mx-auto flex flex-col items-center text-center gap-5 relative z-10">

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1">
            Ready to trade these markets?
          </h3>
          <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.55)" }}>
            Start with a free demo or open a live account in minutes.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="/accounts"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-purple-gradient px-6 py-3 rounded-xl shadow-[0_4px_20px_rgba(108,59,228,0.35)] hover:shadow-[0_6px_28px_rgba(108,59,228,0.50)] hover:-translate-y-0.5 transition-all btn-sheen"
          >
            Open Live Account <ArrowRight size={13} />
          </a>
          <a
            href="/accounts"
            className="inline-flex items-center text-sm font-bold text-white px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            Try Demo
          </a>
        </div>

      </div>
    </div>
  );
}
