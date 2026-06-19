"use client";
import { useEffect, useRef, useState } from "react";
import { useLivePrices } from "@/hooks/useLivePrices";
import { flagUrl } from "@/lib/flags";

export type LiveCategory =
  | "forex" | "crypto" | "commodities" | "indices"
  | "stocks" | "energies" | "etfs";

type IconCfg =
  | { t: "flags"; codes: string[] }
  | { t: "crypto"; src: string }
  | { t: "dot";   grad: string; label: string }
  | { t: "flag";  code: string }
  | { t: "fav";   domain: string };

type InstrCfg = {
  key: string; symbol: string; name: string;
  icon: IconCfg; dec: number; fb: number;
};

const CI = "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/color";

const CONFIGS: Record<LiveCategory, InstrCfg[]> = {
  forex: [
    { key:"EURUSD", symbol:"EUR/USD", name:"Euro / US Dollar",          icon:{t:"flags",codes:["eu","us"]}, dec:5, fb:1.08462 },
    { key:"GBPUSD", symbol:"GBP/USD", name:"British Pound / Dollar",    icon:{t:"flags",codes:["gb","us"]}, dec:5, fb:1.26530 },
    { key:"USDJPY", symbol:"USD/JPY", name:"Dollar / Japanese Yen",     icon:{t:"flags",codes:["us","jp"]}, dec:3, fb:154.770 },
    { key:"AUDUSD", symbol:"AUD/USD", name:"Aussie Dollar / Dollar",    icon:{t:"flags",codes:["au","us"]}, dec:5, fb:0.65410 },
    { key:"USDCAD", symbol:"USD/CAD", name:"Dollar / Canadian Dollar",  icon:{t:"flags",codes:["us","ca"]}, dec:5, fb:1.36540 },
  ],
  crypto: [
    { key:"BTCUSD", symbol:"BTC/USD", name:"Bitcoin",  icon:{t:"crypto",src:`${CI}/btc.png`}, dec:2, fb:68420 },
    { key:"ETHUSD", symbol:"ETH/USD", name:"Ethereum", icon:{t:"crypto",src:`${CI}/eth.png`}, dec:2, fb:3845  },
    { key:"XRPUSD", symbol:"XRP/USD", name:"Ripple",   icon:{t:"crypto",src:`${CI}/xrp.png`}, dec:4, fb:0.5241 },
    { key:"SOLUSD", symbol:"SOL/USD", name:"Solana",   icon:{t:"crypto",src:`${CI}/sol.png`}, dec:2, fb:172.30 },
    { key:"BNBUSD", symbol:"BNB/USD", name:"BNB",      icon:{t:"crypto",src:`${CI}/bnb.png`}, dec:2, fb:608.50 },
  ],
  commodities: [
    { key:"XAUUSD", symbol:"XAU/USD", name:"Gold",           icon:{t:"dot",grad:"linear-gradient(135deg,#b45309,#f59e0b)",label:"Au"}, dec:2, fb:2341 },
    { key:"XAGUSD", symbol:"XAG/USD", name:"Silver",         icon:{t:"dot",grad:"linear-gradient(135deg,#475569,#94a3b8)",label:"Ag"}, dec:3, fb:27.84 },
    { key:"BRENT",  symbol:"BRENT",   name:"Brent Crude",    icon:{t:"dot",grad:"linear-gradient(135deg,#1c1917,#57534e)",label:"OIL"},dec:2, fb:88.32 },
    { key:"WTI",    symbol:"WTI",     name:"WTI Crude",      icon:{t:"dot",grad:"linear-gradient(135deg,#44403c,#78716c)",label:"WTI"},dec:2, fb:83.75 },
    { key:"NGAS",   symbol:"NGAS",    name:"Natural Gas",    icon:{t:"dot",grad:"linear-gradient(135deg,#0c4a6e,#0369a1)",label:"GAS"},dec:3, fb:2.184 },
  ],
  indices: [
    { key:"US500",  symbol:"US500",  name:"S&P 500",    icon:{t:"flag",code:"us"}, dec:2, fb:5248  },
    { key:"NAS100", symbol:"NAS100", name:"NASDAQ 100", icon:{t:"flag",code:"us"}, dec:2, fb:18412 },
    { key:"US30",   symbol:"US30",   name:"Dow Jones",  icon:{t:"flag",code:"us"}, dec:2, fb:39120 },
    { key:"GER40",  symbol:"GER40",  name:"DAX 40",     icon:{t:"flag",code:"de"}, dec:2, fb:18650 },
    { key:"UK100",  symbol:"UK100",  name:"FTSE 100",   icon:{t:"flag",code:"gb"}, dec:2, fb:8240  },
  ],
  stocks: [
    { key:"AAPL", symbol:"AAPL", name:"Apple Inc.",      icon:{t:"fav",domain:"apple.com"},     dec:2, fb:189.84 },
    { key:"MSFT", symbol:"MSFT", name:"Microsoft Corp.", icon:{t:"fav",domain:"microsoft.com"}, dec:2, fb:415.32 },
    { key:"NVDA", symbol:"NVDA", name:"NVIDIA Corp.",    icon:{t:"fav",domain:"nvidia.com"},     dec:2, fb:880.08 },
    { key:"TSLA", symbol:"TSLA", name:"Tesla Inc.",      icon:{t:"fav",domain:"tesla.com"},      dec:2, fb:177.48 },
    { key:"META", symbol:"META", name:"Meta Platforms",  icon:{t:"fav",domain:"meta.com"},       dec:2, fb:526.14 },
  ],
  energies: [
    { key:"BRENT",    symbol:"BRENT",    name:"Brent Crude Oil", icon:{t:"dot",grad:"linear-gradient(135deg,#292524,#57534e)",label:"OIL"}, dec:2, fb:88.32 },
    { key:"WTI",      symbol:"WTI",      name:"WTI Crude Oil",   icon:{t:"dot",grad:"linear-gradient(135deg,#44403c,#78716c)",label:"WTI"}, dec:2, fb:83.75 },
    { key:"NGAS",     symbol:"NGAS",     name:"Natural Gas",     icon:{t:"dot",grad:"linear-gradient(135deg,#0c4a6e,#0369a1)",label:"GAS"}, dec:3, fb:2.184 },
    { key:"USOIL",    symbol:"USOIL",    name:"Heating Oil",     icon:{t:"dot",grad:"linear-gradient(135deg,#7c2d12,#b45309)",label:"HTO"}, dec:3, fb:2.612 },
    { key:"GASOLINE", symbol:"GASOLINE", name:"Gasoline RBOB",   icon:{t:"dot",grad:"linear-gradient(135deg,#713f12,#d97706)",label:"GAS"}, dec:3, fb:2.748 },
  ],
  etfs: [
    { key:"SPY", symbol:"SPY", name:"SPDR S&P 500 ETF",        icon:{t:"dot",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",label:"SPY"}, dec:2, fb:524.18 },
    { key:"QQQ", symbol:"QQQ", name:"Invesco QQQ Trust",        icon:{t:"dot",grad:"linear-gradient(135deg,#4c1d95,#7c3aed)",label:"QQQ"}, dec:2, fb:446.82 },
    { key:"GLD", symbol:"GLD", name:"SPDR Gold Shares",         icon:{t:"dot",grad:"linear-gradient(135deg,#b45309,#f59e0b)",label:"GLD"}, dec:2, fb:222.40 },
    { key:"TLT", symbol:"TLT", name:"iShares 20+ Yr Bond",      icon:{t:"dot",grad:"linear-gradient(135deg,#064e3b,#059669)",label:"TLT"}, dec:2, fb:93.50  },
    { key:"XLF", symbol:"XLF", name:"Financial Select Sector",  icon:{t:"dot",grad:"linear-gradient(135deg,#1e3a8a,#1d4ed8)",label:"XLF"}, dec:2, fb:42.36  },
  ],
};

function fmt(n: number, dec: number) {
  if (n >= 1000) return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return n.toFixed(dec);
}

/* Smooth count from prev value to next over 240ms */
function useSmoothNumber(target: number): number {
  const [cur, setCur] = useState(target);
  const fromRef = useRef(target);
  const rafRef  = useRef<number | null>(null);

  useEffect(() => {
    if (target === fromRef.current) return;
    const from = fromRef.current;
    const to   = target;
    const dur  = 240;
    const t0   = performance.now();

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const tick = (now: number) => {
      const p    = Math.min((now - t0) / dur, 1);
      const ease = 1 - (1 - p) ** 3;
      setCur(from + (to - from) * ease);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
        setCur(to);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [target]);

  return cur;
}

/* Simulates per-second micro-movement between real API updates */
function useSimulatedPrice(real: number, dec: number): number {
  const [sim, setSim] = useState(real);
  const realRef = useRef(real);

  useEffect(() => {
    realRef.current = real;
    setSim(real);
  }, [real]);

  useEffect(() => {
    const id = setInterval(() => {
      const r = realRef.current;
      if (r === 0) return;
      const pip =
        r >= 10000 ? r * 0.00006 :
        r >= 1000  ? r * 0.00010 :
        r >= 100   ? r * 0.00015 :
        r >= 10    ? r * 0.00020 :
        r >= 1     ? r * 0.00025 :
                     r * 0.00080;
      const delta = (Math.random() - 0.5) * 2 * pip;
      setSim(prev => {
        const next = prev + delta;
        const bound = pip * 4;
        return parseFloat(Math.max(r - bound, Math.min(r + bound, next)).toFixed(dec + 2));
      });
    }, 1000);
    return () => clearInterval(id);
  }, [dec]);

  return sim;
}

function InstrIcon({ cfg }: { cfg: IconCfg }) {
  if (cfg.t === "flags") return (
    <span className="flex -space-x-2 flex-shrink-0">
      {cfg.codes.map((c, i) => (
        <span key={i} className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 block"
          style={{ border: "2px solid rgba(255,255,255,0.18)", zIndex: cfg.codes.length - i }}>
          <img src={flagUrl(c, 40)} alt={c} width={36} height={36} style={{ objectFit:"cover",width:"100%",height:"100%" }} />
        </span>
      ))}
    </span>
  );
  if (cfg.t === "crypto") return (
    <span className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{ background:"rgba(255,255,255,0.12)", border:"1.5px solid rgba(255,255,255,0.16)" }}>
      <img src={cfg.src} alt="" width={28} height={28} />
    </span>
  );
  if (cfg.t === "dot") return (
    <span className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black"
      style={{ background: cfg.grad, fontSize: cfg.label.length > 2 ? 7 : 9 }}>{cfg.label}</span>
  );
  if (cfg.t === "flag") return (
    <span className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 block"
      style={{ border: "2px solid rgba(255,255,255,0.18)" }}>
      <img src={flagUrl(cfg.code, 40)} alt={cfg.code} width={36} height={36} style={{ objectFit:"cover",width:"100%",height:"100%" }} />
    </span>
  );
  if (cfg.t === "fav") return (
    <span className="w-9 h-9 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1.5 flex-shrink-0">
      <img src={`https://www.google.com/s2/favicons?domain=${cfg.domain}&sz=64`} alt="" width={22} height={22} />
    </span>
  );
  return null;
}

type FlashDir = "up" | "dn" | null;

function LiveRow({ inst, bid, change }: { inst: InstrCfg; bid?: number; change: number }) {
  const rawVal  = bid ?? inst.fb;
  const simVal  = useSimulatedPrice(rawVal, inst.dec);
  const smooth  = useSmoothNumber(simVal);

  const prevRef = useRef(rawVal);
  const [flash, setFlash] = useState<FlashDir>(null);

  // Flash only on real API price changes, not every simulated tick
  useEffect(() => {
    if (rawVal !== prevRef.current && prevRef.current > 0 && rawVal > 0) {
      setFlash(rawVal > prevRef.current ? "up" : "dn");
      prevRef.current = rawVal;
      const t = setTimeout(() => setFlash(null), 1600);
      return () => clearTimeout(t);
    }
    if (rawVal > 0) prevRef.current = rawVal;
  }, [rawVal]);

  const up = change >= 0;

  const rowBg = flash === "up"
    ? "rgba(0,255,120,0.08)"
    : flash === "dn"
    ? "rgba(255,55,80,0.08)"
    : "transparent";

  const priceColor = flash === "up"
    ? "#00f484"
    : flash === "dn"
    ? "#ff4060"
    : "rgba(255,255,255,0.96)";

  const priceShadow = flash === "up"
    ? "0 0 16px rgba(0,240,128,0.6)"
    : flash === "dn"
    ? "0 0 16px rgba(255,60,90,0.6)"
    : "none";

  return (
    <div
      className="flex items-center gap-4 px-5 py-4 border-b border-white/[0.07] last:border-b-0 cursor-default hover:bg-white/[0.06] transition-colors"
      style={{
        background: rowBg,
        transition: flash === null ? "background 1.0s ease" : "none",
      }}
    >
      <InstrIcon cfg={inst.icon} />

      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold text-white font-mono leading-none tracking-tight">{inst.symbol}</div>
        <div className="text-[11px] text-white/40 truncate mt-0.5 font-body">{inst.name}</div>
      </div>

      {/* Animated price */}
      <div className="text-right min-w-[90px]">
        <span
          className="font-mono font-bold tabular-nums text-[15px] leading-none"
          style={{
            color: priceColor,
            textShadow: priceShadow,
            transition: flash === null ? "color 0.7s ease, text-shadow 0.7s ease" : "none",
          }}
        >
          {fmt(smooth, inst.dec)}
        </span>
      </div>

      {/* 24h change */}
      <div
        className="min-w-[72px] text-right flex items-center justify-end gap-1"
        style={{
          color: up ? "#4ade80" : "#f87171",
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
        }}
      >
        <span style={{ fontSize: 9, lineHeight: 1 }}>{up ? "▲" : "▼"}</span>
        {up ? "+" : ""}{Math.abs(change).toFixed(2)}%
      </div>
    </div>
  );
}

export default function LivePricesCard({ category }: { category: LiveCategory }) {
  const { prices, loading } = useLivePrices();
  const items = CONFIGS[category];

  return (
    <div
      className="hidden lg:flex flex-col w-full rounded-2xl overflow-hidden"
      style={{
        background: "#0d0a1e",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 28px 72px rgba(13,10,30,0.22), 0 8px 24px rgba(13,10,30,0.14), 0 2px 6px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"
            style={{ boxShadow: "0 0 8px rgba(74,222,128,0.9)" }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 font-body">Live Feed</span>
        </div>
        {loading && (
          <span className="text-[11px] text-white/40 font-body">connecting…</span>
        )}
      </div>

      {/* Column labels */}
      <div
        className="grid px-5 py-2.5"
        style={{
          gridTemplateColumns: "1fr 90px 72px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 font-body">Instrument</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 text-right font-body">Bid</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 text-right font-body">24h</span>
      </div>

      {/* Rows */}
      {items.map((inst) => {
        const entry = prices[inst.key];
        return (
          <LiveRow
            key={inst.key}
            inst={inst}
            bid={entry?.bid}
            change={entry?.change ?? 0}
          />
        );
      })}
    </div>
  );
}
