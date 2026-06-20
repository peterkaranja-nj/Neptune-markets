const TEXT = (
  <>
    <span className="text-white/95 font-semibold">Risk Warning:</span>{" "}
    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.{" "}
    <span className="text-white/95 font-semibold">74% of retail investor accounts lose money</span>{" "}
    when trading CFDs. Ensure you understand the risks involved.
    <span className="mx-12 text-white/20">|</span>
  </>
);

export default function RiskBanner() {
  return (
    <div
      className="relative z-[100] overflow-hidden"
      style={{
        height: 37,
        background: "#0d0a1e",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0d0a1e, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0d0a1e, transparent)" }} />

      {/* Scrolling text — same loop technique as ticker */}
      <div
        className="ticker-animate flex items-center h-full whitespace-nowrap text-white/65 text-[10.5px] md:text-[11px] tracking-wide"
        style={{ animationDuration: "38s" }}
      >
        <span className="flex-shrink-0 pr-0">{TEXT}</span>
        <span className="flex-shrink-0 pr-0">{TEXT}</span>
      </div>
    </div>
  );
}
