export default function RiskBanner() {
  return (
    <div className="bg-navy text-white/70 text-center py-2.5 px-4 md:px-6 text-[10.5px] md:text-[11.5px] tracking-wide relative z-[100] whitespace-nowrap overflow-hidden">
      {/* Mobile — short */}
      <span className="md:hidden">
        <span className="text-white/95 font-semibold">Risk Warning:</span>{" "}
        CFDs carry high risk. 74% of retail accounts lose money. Trade responsibly.
      </span>
      {/* Desktop — full */}
      <span className="hidden md:inline">
        <span className="text-white/95 font-semibold">Risk Warning:</span>{" "}
        CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.{" "}
        <span className="text-white/95 font-semibold">74% of retail investor accounts lose money</span>{" "}
        when trading CFDs. Ensure you understand the risks involved.
      </span>
    </div>
  );
}
