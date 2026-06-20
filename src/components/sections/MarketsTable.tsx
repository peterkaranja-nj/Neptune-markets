"use client";
import { useEffect, useRef, useState } from "react";
import { useLivePrices, type PriceEntry } from "@/hooks/useLivePrices";
import { flagUrl } from "@/lib/flags";

const CI = "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/color";

type Cat = "all" | "forex" | "crypto" | "commodities" | "indices";

type Row = {
  key: string; display: string; name: string; cat: Cat;
  spread: number; leverage: string; decimals: number; fallback: number;
  icon:
    | { t: "flags"; codes: string[] }
    | { t: "crypto"; src: string }
    | { t: "dot"; grad: string; label: string }
    | { t: "flag"; code: string };
};

const ROWS: Row[] = [
  { key:"EURUSD",  display:"EUR/USD",  name:"Euro / US Dollar",    cat:"forex",        spread:0.1,  leverage:"1:500", decimals:5, fallback:1.08462, icon:{t:"flags",codes:["eu","us"]} },
  { key:"GBPUSD",  display:"GBP/USD",  name:"Pound / US Dollar",   cat:"forex",        spread:0.1,  leverage:"1:500", decimals:5, fallback:1.26530, icon:{t:"flags",codes:["gb","us"]} },
  { key:"USDJPY",  display:"USD/JPY",  name:"Dollar / Yen",        cat:"forex",        spread:0.2,  leverage:"1:500", decimals:3, fallback:154.770, icon:{t:"flags",codes:["us","jp"]} },
  { key:"AUDUSD",  display:"AUD/USD",  name:"Aussie / US Dollar",  cat:"forex",        spread:0.1,  leverage:"1:500", decimals:5, fallback:0.65410, icon:{t:"flags",codes:["au","us"]} },
  { key:"USDCAD",  display:"USD/CAD",  name:"Dollar / CAD",        cat:"forex",        spread:0.2,  leverage:"1:500", decimals:5, fallback:1.36540, icon:{t:"flags",codes:["us","ca"]} },
  { key:"USDCHF",  display:"USD/CHF",  name:"Dollar / Swiss Franc",cat:"forex",        spread:0.1,  leverage:"1:500", decimals:5, fallback:0.90120, icon:{t:"flags",codes:["us","ch"]} },
  { key:"BTCUSD",  display:"BTC/USD",  name:"Bitcoin",             cat:"crypto",       spread:11.6, leverage:"1:20",  decimals:2, fallback:68420,   icon:{t:"crypto",src:`${CI}/btc.png`} },
  { key:"ETHUSD",  display:"ETH/USD",  name:"Ethereum",            cat:"crypto",       spread:1.4,  leverage:"1:20",  decimals:2, fallback:3845.8,  icon:{t:"crypto",src:`${CI}/eth.png`} },
  { key:"XRPUSD",  display:"XRP/USD",  name:"Ripple",              cat:"crypto",       spread:0.002,leverage:"1:10",  decimals:4, fallback:0.5241,  icon:{t:"crypto",src:`${CI}/xrp.png`} },
  { key:"SOLUSD",  display:"SOL/USD",  name:"Solana",              cat:"crypto",       spread:0.10, leverage:"1:10",  decimals:2, fallback:172.30,  icon:{t:"crypto",src:`${CI}/sol.png`} },
  { key:"XAUUSD",  display:"XAU/USD",  name:"Gold",                cat:"commodities",  spread:0.25, leverage:"1:200", decimals:2, fallback:2341.5,  icon:{t:"dot",grad:"linear-gradient(135deg,#b45309,#f59e0b)",label:"Au"} },
  { key:"XAGUSD",  display:"XAG/USD",  name:"Silver",              cat:"commodities",  spread:0.03, leverage:"1:200", decimals:3, fallback:27.84,   icon:{t:"dot",grad:"linear-gradient(135deg,#475569,#94a3b8)",label:"Ag"} },
  { key:"BRENT",   display:"BRENT",    name:"Brent Crude Oil",     cat:"commodities",  spread:0.02, leverage:"1:100", decimals:2, fallback:88.32,   icon:{t:"dot",grad:"linear-gradient(135deg,#1c1917,#57534e)",label:"OIL"} },
  { key:"US500",   display:"US500",    name:"S&P 500 Index",       cat:"indices",      spread:0.5,  leverage:"1:200", decimals:2, fallback:5248.8,  icon:{t:"flag",code:"us"} },
  { key:"NAS100",  display:"NAS100",   name:"NASDAQ 100 Index",    cat:"indices",      spread:0.5,  leverage:"1:200", decimals:2, fallback:18412.5, icon:{t:"flag",code:"us"} },
  { key:"GER40",   display:"GER40",    name:"DAX 40 Index",        cat:"indices",      spread:0.9,  leverage:"1:200", decimals:2, fallback:18650.2, icon:{t:"flag",code:"de"} },
];

const ALL_SAMPLE = ["EURUSD","GBPUSD","BTCUSD","ETHUSD","XAUUSD","BRENT","US500","NAS100"];

const TABS: { id: Cat; label: string }[] = [
  { id:"all",         label:"All"         },
  { id:"forex",       label:"Forex"       },
  { id:"crypto",      label:"Crypto"      },
  { id:"commodities", label:"Commodities" },
  { id:"indices",     label:"Indices"     },
];

function fmt(n: number, dec: number) {
  if (n >= 10000) return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 1000)  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return n.toFixed(dec);
}

/* Simulates per-second micro-movement between real API updates */
function useSimulatedPrice(real: number, dec: number): number {
  const [sim, setSim] = useState(real);
  const realRef = useRef(real);

  useEffect(() => { realRef.current = real; setSim(real); }, [real]);

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

/* Counts smoothly from prev to next price over 240ms */
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

function RowIcon({ icon }: { icon: Row["icon"] }) {
  if (icon.t === "flags") return (
    <span className="flex -space-x-2.5 flex-shrink-0">
      {icon.codes.map((c,i) => (
        <span key={i} className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 block"
          style={{ boxShadow:"0 0 0 2.5px #fff", zIndex: icon.codes.length - i }}>
          <img src={flagUrl(c, 40)} alt={c} width={36} height={36} style={{ objectFit:"cover",width:"100%",height:"100%" }} />
        </span>
      ))}
    </span>
  );
  if (icon.t === "crypto") return (
    <span className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-[#f1f5f9]"
      style={{ boxShadow:"0 0 0 2px #e2e8f0" }}>
      <img src={icon.src} alt="" width={28} height={28} />
    </span>
  );
  if (icon.t === "dot") return (
    <span className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black shadow-sm"
      style={{ background: icon.grad, fontSize: icon.label.length > 2 ? 8 : 10 }}>{icon.label}</span>
  );
  if (icon.t === "flag") return (
    <span className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 block"
      style={{ boxShadow:"0 0 0 2px #e2e8f0" }}>
      <img src={flagUrl(icon.code, 40)} alt={icon.code} width={36} height={36} style={{ objectFit:"cover",width:"100%",height:"100%" }} />
    </span>
  );
  return null;
}

type FlashDir = "up" | "dn" | null;

function InstrumentRow({ row, entry }: { row: Row; entry?: PriceEntry }) {
  const rawBid = entry?.bid ?? row.fallback;
  const simBid = useSimulatedPrice(rawBid, row.decimals);
  const bid    = useSmoothNumber(simBid);
  const ask    = +(simBid + row.spread).toFixed(row.decimals);
  const chg    = entry?.change ?? 0;
  const up     = chg >= 0;

  const prevRef = useRef(rawBid);
  const [flash, setFlash] = useState<FlashDir>(null);

  // Flash only on real API updates, not every simulated tick
  useEffect(() => {
    if (rawBid !== prevRef.current && prevRef.current > 0 && rawBid > 0) {
      setFlash(rawBid > prevRef.current ? "up" : "dn");
      prevRef.current = rawBid;
      const t = setTimeout(() => setFlash(null), 1200);
      return () => clearTimeout(t);
    }
    if (rawBid > 0) prevRef.current = rawBid;
  }, [rawBid]);

  const rowBg = flash === "up"
    ? "rgba(16,185,129,0.065)"
    : flash === "dn"
    ? "rgba(239,68,68,0.065)"
    : "";

  const bidColor = flash === "up" ? "#059669" : flash === "dn" ? "#dc2626" : "#0f172a";

  const GRID = "1.4fr 0.9fr 0.9fr 0.6fr 1fr 120px";
  const rowStyle = {
    background: rowBg || "white",
    transition: flash === null
      ? "background 0.8s ease, box-shadow 0.2s, border-color 0.2s"
      : "box-shadow 0.2s, border-color 0.2s",
  };

  return (
    <div
      className="group rounded-2xl border border-slate-200/80 hover:border-purple-200 hover:shadow-[0_4px_20px_rgba(108,59,228,0.09)] transition-all duration-200"
      style={rowStyle}
    >
      {/* ── Mobile layout (< md) ── */}
      <div className="flex items-center justify-between md:hidden px-4 py-3">
        <div className="flex items-center gap-3">
          <RowIcon icon={row.icon} />
          <div>
            <div className="text-sm font-bold text-slate-800 font-mono leading-none tracking-tight">{row.display}</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-body">{row.name}</div>
          </div>
        </div>
        <div className="text-right">
          <div
            className="font-mono font-semibold tabular-nums text-[13px] leading-none"
            style={{ color: bidColor, transition: flash === null ? "color 0.5s ease" : "none" }}
          >
            {fmt(bid, row.decimals)}
          </div>
          <span className={`text-[11px] font-bold font-mono ${up ? "text-emerald-600" : "text-red-600"}`}>
            {up ? "▲" : "▼"} {Math.abs(chg).toFixed(2)}%
          </span>
        </div>
      </div>

      {/* ── Desktop layout (md+) ── */}
      <div
        className="hidden md:grid items-center"
        style={{ gridTemplateColumns: GRID, padding: "13px 18px" }}
      >
        {/* Instrument */}
        <div className="flex items-center gap-3">
          <RowIcon icon={row.icon} />
          <div>
            <div className="text-sm font-bold text-slate-800 font-mono leading-none tracking-tight">{row.display}</div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-body">{row.name}</div>
          </div>
        </div>

        {/* Sell / Bid */}
        <div className="text-right">
          <div
            className="font-mono font-semibold tabular-nums text-[13.5px] leading-none"
            style={{ color: bidColor, transition: flash === null ? "color 0.5s ease" : "none" }}
          >
            {fmt(bid, row.decimals)}
          </div>
          <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 font-body">Sell</div>
        </div>

        {/* Buy / Ask */}
        <div className="text-right">
          <div className="font-mono font-semibold tabular-nums text-[13.5px] leading-none text-slate-500">
            {fmt(ask, row.decimals)}
          </div>
          <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 font-body">Buy</div>
        </div>

        {/* Spread */}
        <div className="text-right">
          <span className="font-mono font-semibold tabular-nums text-[13px] text-slate-500">
            {row.spread}
          </span>
        </div>

        {/* 24h Change */}
        <div className="flex items-center justify-end">
          <span
            className="inline-flex items-center gap-1 text-[12px] font-bold font-mono px-2.5 py-1 rounded-lg tabular-nums"
            style={{
              color: up ? "#059669" : "#dc2626",
              background: up ? "rgba(5,150,105,0.08)" : "rgba(220,38,38,0.08)",
              border: `1px solid ${up ? "rgba(5,150,105,0.15)" : "rgba(220,38,38,0.15)"}`,
            }}
          >
            <span style={{ fontSize: 8, lineHeight: 1 }}>{up ? "▲" : "▼"}</span>
            {up ? "+" : ""}{Math.abs(chg).toFixed(2)}%
          </span>
        </div>

        {/* Action */}
        <div className="flex justify-end gap-2">
          <a
            href="/accounts"
            className="text-[11px] font-bold text-white bg-purple-600 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-purple-700 active:scale-95 transition-all whitespace-nowrap shadow-sm"
          >
            Trade Now
          </a>
        </div>
      </div>
    </div>
  );
}

const COL_GRID = "1.4fr 0.9fr 0.9fr 0.6fr 1fr 120px";

export default function MarketsTable() {
  const { prices } = useLivePrices();
  const [tab, setTab] = useState<Cat>("all");

  const visible = tab === "all"
    ? ROWS.filter(r => ALL_SAMPLE.includes(r.key))
    : ROWS.filter(r => r.cat === tab);

  return (
    <section className="pt-10 pb-20 px-4 md:px-8 lg:px-12 bg-surface-bg">
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="flex items-end mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" style={{ boxShadow:"0 0 8px rgba(74,222,128,0.8)" }} />
              <span className="text-xs font-bold text-text-faint uppercase tracking-widest font-body">Live Prices</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text leading-[1.1] tracking-tight">
              Live Markets
            </h2>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all font-body ${
                tab === t.id
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-text-muted border border-slate-200 hover:border-purple-300 hover:text-text"
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Column headers */}
        <div
          className="hidden md:grid items-center mb-1 px-[18px]"
          style={{ gridTemplateColumns: COL_GRID }}
        >
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest font-body">Instrument</span>
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-right font-body">Sell</span>
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-right font-body">Buy</span>
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-right font-body">Spread</span>
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-right font-body">24h</span>
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-right font-body">Action</span>
        </div>

        {/* Rows — each is its own card */}
        <div className="flex flex-col gap-2">
          {visible.map((row) => (
            <InstrumentRow key={row.key} row={row} entry={prices[row.key]} />
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-400 font-body px-1">
          Prices indicative only. Spreads may widen during low liquidity.
        </p>
      </div>
    </section>
  );
}
