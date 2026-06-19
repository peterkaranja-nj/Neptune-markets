import { NextResponse } from "next/server";

export const runtime = "nodejs";

type PriceEntry = { bid: number; change: number };
type PriceMap = Record<string, PriceEntry>;

// --- Fallback values (used when external APIs fail) ---
const FALLBACK: PriceMap = {
  EURUSD:  { bid: 1.08462, change: -0.12 }, GBPUSD:  { bid: 1.26530, change:  0.21 },
  USDJPY:  { bid: 154.770, change: -0.34 }, AUDUSD:  { bid: 0.65410, change: -0.15 },
  USDCAD:  { bid: 1.36540, change:  0.08 }, USDCHF:  { bid: 0.90120, change: -0.22 },
  BTCUSD:  { bid: 68420.5, change:  1.24 }, ETHUSD:  { bid: 3845.80, change:  2.18 },
  XRPUSD:  { bid: 0.52410, change:  0.87 }, SOLUSD:  { bid: 172.300, change:  3.42 },
  BNBUSD:  { bid: 608.500, change:  0.55 }, ADAUSD:  { bid: 0.45600, change: -0.23 },
  DOGEUSD: { bid: 0.17800, change:  0.78 }, DOTUSD:  { bid: 7.42000, change: -0.45 },
  XAUUSD:  { bid: 2341.50, change:  0.42 }, XAGUSD:  { bid: 27.8400, change: -0.18 },
  BRENT:   { bid: 88.3200, change:  0.65 }, WTI:     { bid: 83.7500, change:  0.31 },
  NGAS:    { bid: 2.18400, change: -1.22 }, USOIL:   { bid: 2.61200, change:  0.18 },
  GASOLINE:{ bid: 2.74800, change: -0.44 },
  US500:   { bid: 5248.80, change:  0.34 }, NAS100:  { bid: 18412.5, change:  0.62 },
  US30:    { bid: 39120.4, change: -0.11 }, GER40:   { bid: 18650.2, change:  0.28 },
  UK100:   { bid: 8240.60, change: -0.18 }, JP225:   { bid: 38920.0, change:  0.55 },
  AAPL:    { bid: 189.840, change:  0.54 }, TSLA:    { bid: 177.480, change: -1.32 },
  MSFT:    { bid: 415.320, change:  0.82 }, AMZN:    { bid: 185.200, change:  1.15 },
  GOOGL:   { bid: 172.800, change:  0.68 }, META:    { bid: 526.140, change:  1.07 },
  NVDA:    { bid: 880.080, change:  2.14 }, JPM:     { bid: 198.500, change:  0.44 },
  SPY:     { bid: 524.180, change:  0.34 }, QQQ:     { bid: 446.820, change:  0.61 },
  GLD:     { bid: 222.400, change:  0.28 }, TLT:     { bid: 93.5000, change: -0.22 },
  XLF:     { bid: 42.3600, change:  0.44 }, XLE:     { bid: 92.5000, change:  0.88 },
  XLV:     { bid: 143.200, change:  0.32 }, EEM:     { bid: 41.8000, change:  0.56 },
};

// Yahoo Finance symbol → internal key
const YF_MAP: Record<string, string> = {
  "EURUSD=X": "EURUSD", "GBPUSD=X": "GBPUSD", "USDJPY=X": "USDJPY",
  "AUDUSD=X": "AUDUSD", "USDCAD=X": "USDCAD", "USDCHF=X": "USDCHF",
  "BZ=F": "BRENT",  "CL=F": "WTI",   "NG=F": "NGAS",
  "HO=F": "USOIL",  "RB=F": "GASOLINE",
  "^GSPC": "US500", "^NDX": "NAS100", "^DJI": "US30",
  "^GDAXI": "GER40","^FTSE": "UK100", "^N225": "JP225",
  "AAPL": "AAPL",   "TSLA": "TSLA",   "MSFT": "MSFT",
  "AMZN": "AMZN",   "GOOGL": "GOOGL", "META": "META",
  "NVDA": "NVDA",   "JPM": "JPM",
  "SPY": "SPY",     "QQQ": "QQQ",     "GLD": "GLD",
  "TLT": "TLT",     "XLF": "XLF",     "XLE": "XLE",
  "XLV": "XLV",     "EEM": "EEM",
};

const YF_SYMBOLS = Object.keys(YF_MAP).join(",");

// CoinGecko id → internal key
const CG_MAP: Record<string, string> = {
  bitcoin: "BTCUSD", ethereum: "ETHUSD", ripple: "XRPUSD",
  solana: "SOLUSD", binancecoin: "BNBUSD", cardano: "ADAUSD",
  dogecoin: "DOGEUSD", polkadot: "DOTUSD",
};
const CG_IDS = Object.keys(CG_MAP).join(",");

// --- In-memory cache ---
let cache: { data: PriceMap; ts: number } | null = null;
const CACHE_TTL = 30_000;

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.ts < CACHE_TTL) {
    return NextResponse.json({ prices: cache.data, ts: cache.ts, cached: true });
  }

  const prices: PriceMap = { ...FALLBACK };

  // 1. Yahoo Finance (forex + indices + stocks + energy + ETFs)
  try {
    const res = await fetch(
      `https://query2.finance.yahoo.com/v7/finance/quote?lang=en-US&region=US&symbols=${encodeURIComponent(YF_SYMBOLS)}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://finance.yahoo.com/",
          "Origin": "https://finance.yahoo.com",
        },
        signal: AbortSignal.timeout(6000),
      }
    );
    if (res.ok) {
      const json = await res.json();
      const results: Array<{ symbol: string; regularMarketPrice: number; regularMarketChangePercent: number }> =
        json?.quoteResponse?.result ?? [];
      for (const q of results) {
        const key = YF_MAP[q.symbol];
        if (key && q.regularMarketPrice) {
          prices[key] = {
            bid: +q.regularMarketPrice.toFixed(key === "USDJPY" ? 3 : key.endsWith("USD") && prices[key]?.bid < 10 ? 5 : 2),
            change: +(q.regularMarketChangePercent ?? 0).toFixed(2),
          };
        }
      }
    }
  } catch { /* fall through to fallback */ }

  // 2. CoinGecko (crypto — real-time, generous free tier)
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${CG_IDS}&vs_currencies=usd&include_24hr_change=true`,
      { signal: AbortSignal.timeout(6000) }
    );
    if (res.ok) {
      const json = await res.json();
      for (const [cgId, key] of Object.entries(CG_MAP)) {
        const d = json[cgId];
        if (d?.usd) {
          prices[key] = {
            bid: d.usd,
            change: +(d.usd_24h_change ?? 0).toFixed(2),
          };
        }
      }
    }
  } catch { /* fall through */ }

  // 3. metals.live (gold & silver — truly free, no key)
  try {
    const res = await fetch("https://api.metals.live/v1/spot/gold,silver", {
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const json = await res.json();
      // API returns either [{gold:X},{silver:Y}] or {gold:X,silver:Y}
      const obj = Array.isArray(json)
        ? Object.assign({}, ...json)
        : json;
      if (obj.gold)   prices.XAUUSD = { bid: +Number(obj.gold).toFixed(2),   change: prices.XAUUSD.change };
      if (obj.silver) prices.XAGUSD = { bid: +Number(obj.silver).toFixed(3), change: prices.XAGUSD.change };
    }
  } catch { /* fall through */ }

  cache = { data: prices, ts: now };
  return NextResponse.json({ prices, ts: now, cached: false });
}
