export const flagUrl = (code: string, width: 20 | 40 = 20) =>
  `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;

// Crypto — branded SVG icon + the currency it's paired against
export const CRYPTO_ICONS: Record<string, { icon: string; pairedFlag?: string }> = {
  BTCUSD: { icon: "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/btc.svg", pairedFlag: "us" },
  ETHUSD: { icon: "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/eth.svg", pairedFlag: "us" },
  XRPUSD: { icon: "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/xrp.svg", pairedFlag: "us" },
};

// Commodities — colored dot badge + the currency it's priced in
export const COMMODITY_DOTS: Record<string, { bg: string; label: string; pairedFlag?: string }> = {
  XAUUSD: { bg: "linear-gradient(135deg,#b45309,#f59e0b)", label: "Au",  pairedFlag: "us" },
  XAGUSD: { bg: "linear-gradient(135deg,#475569,#94a3b8)", label: "Ag",  pairedFlag: "us" },
  BRENT:  { bg: "linear-gradient(135deg,#1c1917,#57534e)", label: "OIL", pairedFlag: "us" },
  WTI:    { bg: "linear-gradient(135deg,#1c1917,#78716c)", label: "WTI", pairedFlag: "us" },
};

// Forex pairs and single-country indices
export const PAIR_FLAG_CODES: Record<string, string[]> = {
  EURUSD: ["eu", "us"],
  GBPUSD: ["gb", "us"],
  USDJPY: ["us", "jp"],
  AUDUSD: ["au", "us"],
  USDCAD: ["us", "ca"],
  USDCHF: ["us", "ch"],
  NZDUSD: ["nz", "us"],
  EURGBP: ["eu", "gb"],
  US30:   ["us"],
  NAS100: ["us"],
  UK100:  ["gb"],
  GER40:  ["de"],
};
