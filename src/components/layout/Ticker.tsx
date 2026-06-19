"use client";
import { flagUrl, PAIR_FLAG_CODES, CRYPTO_ICONS, COMMODITY_DOTS } from "@/lib/flags";
import { useLivePrices } from "@/hooks/useLivePrices";
import { useEffect, useRef, useState } from "react";

const TICKER_KEYS = [
  "EURUSD","XAUUSD","BTCUSD","US30","GBPUSD","USDJPY",
  "ETHUSD","BRENT","NAS100","AUDUSD","XAGUSD","USDCAD",
];

const DISPLAY_SYMBOL: Record<string, string> = {
  EURUSD:"EURUSD", XAUUSD:"XAUUSD", BTCUSD:"BTCUSD", US30:"US30",
  GBPUSD:"GBPUSD", USDJPY:"USDJPY", ETHUSD:"ETHUSD", BRENT:"BRENT",
  NAS100:"NAS100", AUDUSD:"AUDUSD", XAGUSD:"XAGUSD", USDCAD:"USDCAD",
};

const DECIMALS: Record<string, number> = {
  EURUSD:5, GBPUSD:5, AUDUSD:5, USDCAD:5, USDCHF:5,
  USDJPY:3, XAUUSD:2, XAGUSD:3, BTCUSD:2, ETHUSD:2,
  BRENT:2,  WTI:2,    NAS100:2, US500:2,  US30:2,
};

function fmtPrice(key: string, bid: number) {
  const dec = DECIMALS[key] ?? 2;
  if (bid >= 10000) return bid.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (bid >= 1000)  return bid.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return bid.toFixed(dec);
}

function useSmoothNumber(target: number): number {
  const [cur, setCur] = useState(target);
  const fromRef = useRef(target);
  const rafRef  = useRef<number | null>(null);
  useEffect(() => {
    if (target === fromRef.current) return;
    const from = fromRef.current, to = target, dur = 200, t0 = performance.now();
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCur(from + (to - from) * (1 - (1 - p) ** 3));
      if (p < 1) { rafRef.current = requestAnimationFrame(tick); }
      else { fromRef.current = to; setCur(to); rafRef.current = null; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [target]);
  return cur;
}

function useSimulatedPrice(real: number, dec: number): number {
  const [sim, setSim] = useState(real);
  const realRef = useRef(real);
  useEffect(() => { realRef.current = real; setSim(real); }, [real]);
  useEffect(() => {
    const id = setInterval(() => {
      const r = realRef.current;
      if (r === 0) return;
      const pip = r >= 10000 ? r * 0.00006 : r >= 1000 ? r * 0.00010 : r >= 100 ? r * 0.00015 : r >= 1 ? r * 0.00025 : r * 0.00080;
      const delta = (Math.random() - 0.5) * 2 * pip;
      setSim(prev => { const n = prev + delta; const b = pip * 4; return parseFloat(Math.max(r - b, Math.min(r + b, n)).toFixed(dec + 2)); });
    }, 1000);
    return () => clearInterval(id);
  }, [dec]);
  return sim;
}

function FlashPrice({ bid, prevBid, keyId, dec }: { bid: number; prevBid: number; keyId: string; dec: number }) {
  const sim    = useSimulatedPrice(bid, dec);
  const smooth = useSmoothNumber(sim);
  const [flash, setFlash] = useState<"up"|"dn"|null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    if (bid !== prevBid) {
      setFlash(bid > prevBid ? "up" : "dn");
      const t = setTimeout(() => setFlash(null), 1200);
      return () => clearTimeout(t);
    }
  }, [bid, prevBid, keyId]);

  return (
    <span
      className="font-mono text-xs tabular-nums"
      style={{
        color: flash === "up" ? "#00f484" : flash === "dn" ? "#ff4060" : "rgba(255,255,255,0.55)",
        textShadow: flash === "up" ? "0 0 10px rgba(0,240,128,0.5)" : flash === "dn" ? "0 0 10px rgba(255,60,90,0.5)" : "none",
        transition: flash === null ? "color 0.5s, text-shadow 0.5s" : "none",
      }}
    >
      {fmtPrice(keyId, smooth)}
    </span>
  );
}

export default function Ticker() {
  const { prices, loading } = useLivePrices();

  const items = TICKER_KEYS.map(k => {
    const e = prices[k];
    return {
      key: k,
      symbol: DISPLAY_SYMBOL[k] ?? k,
      bid: e?.bid ?? 0,
      prev: e?.prev ?? e?.bid ?? 0,
      change: e?.change ?? 0,
      up: (e?.change ?? 0) >= 0,
    };
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="py-3 overflow-hidden relative"
      style={{
        background: "linear-gradient(90deg, #0d0a1e 0%, #1a1035 50%, #0d0a1e 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.3)",
      }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0d0a1e, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0d0a1e, transparent)" }} />

      <div className={`ticker-animate flex items-center gap-10 whitespace-nowrap ${loading ? "opacity-60" : ""}`}>
        {doubled.map((item, i) => {
          const cryptoData   = CRYPTO_ICONS[item.key];
          const commodityDot = COMMODITY_DOTS[item.key];
          const flagCodes    = PAIR_FLAG_CODES[item.key] ?? [];

          return (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              {/* Icon */}
              {cryptoData ? (
                <span className="flex items-center gap-0.5 flex-shrink-0">
                  <img src={cryptoData.icon} alt={item.symbol} width={16} height={16} className="rounded-full" />
                  {cryptoData.pairedFlag && (
                    <img src={flagUrl(cryptoData.pairedFlag, 20)} alt="" width={16} height={11} className="rounded-[2px]" style={{ objectFit:"cover" }} />
                  )}
                </span>
              ) : commodityDot ? (
                <span className="flex items-center gap-0.5 flex-shrink-0">
                  <span className="rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ width:16, height:16, background:commodityDot.bg, fontSize:commodityDot.label.length>2?5:6, fontWeight:900, color:"#fff" }}>
                    {commodityDot.label}
                  </span>
                  {commodityDot.pairedFlag && (
                    <img src={flagUrl(commodityDot.pairedFlag, 20)} alt="" width={16} height={11} className="rounded-[2px]" style={{ objectFit:"cover" }} />
                  )}
                </span>
              ) : flagCodes.length > 0 ? (
                <span className="flex items-center gap-0.5 flex-shrink-0">
                  {flagCodes.map((code, fi) => (
                    <img key={fi} src={flagUrl(code, 20)} alt={code.toUpperCase()} width={16} height={11} className="rounded-[2px]" style={{ objectFit:"cover" }} />
                  ))}
                </span>
              ) : null}

              <span className="font-mono text-xs font-bold text-white/85 tracking-wider">{item.symbol}</span>
              {item.bid > 0
                ? <FlashPrice bid={item.bid} prevBid={item.prev} keyId={item.key} dec={DECIMALS[item.key] ?? 2} />
                : <span className="font-mono text-xs text-white/25">—</span>
              }
              <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                item.up
                  ? "text-green-400 bg-green-400/10 border border-green-400/20"
                  : "text-red-400 bg-red-400/10 border border-red-400/20"
              }`}>
                {item.up ? "+" : ""}{Math.abs(item.change).toFixed(2)}%
              </span>
              {i < doubled.length - 1 && <div className="w-px h-3.5 bg-white/[0.08] ml-3" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
