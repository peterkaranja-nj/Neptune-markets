export const INSTRUMENTS = [
  { cat: "forex",       symbol: "EUR/USD",  name: "Euro / US Dollar",            bid: 1.08462, ask: 1.08471, spread: 0.1,  change: -0.12, leverage: "1:500" },
  { cat: "forex",       symbol: "GBP/USD",  name: "British Pound / US Dollar",   bid: 1.26530, ask: 1.26541, spread: 0.1,  change:  0.21, leverage: "1:500" },
  { cat: "forex",       symbol: "USD/JPY",  name: "US Dollar / Japanese Yen",    bid: 154.770, ask: 154.782, spread: 0.2,  change: -0.34, leverage: "1:500" },
  { cat: "forex",       symbol: "AUD/USD",  name: "Australian Dollar / US Dollar",bid:0.65410, ask: 0.65422, spread: 0.1,  change: -0.15, leverage: "1:500" },
  { cat: "forex",       symbol: "USD/CAD",  name: "US Dollar / Canadian Dollar", bid: 1.36540, ask: 1.36552, spread: 0.2,  change:  0.08, leverage: "1:500" },
  { cat: "forex",       symbol: "USD/CHF",  name: "US Dollar / Swiss Franc",     bid: 0.90120, ask: 0.90131, spread: 0.1,  change: -0.22, leverage: "1:500" },
  { cat: "commodities", symbol: "XAU/USD",  name: "Gold vs US Dollar",           bid: 2318.12, ask: 2318.40, spread: 0.28, change:  0.45, leverage: "1:200" },
  { cat: "commodities", symbol: "XAG/USD",  name: "Silver vs US Dollar",         bid: 27.180,  ask: 27.210,  spread: 0.03, change:  1.12, leverage: "1:200" },
  { cat: "commodities", symbol: "BRENT",    name: "Brent Crude Oil",             bid: 83.220,  ask: 83.240,  spread: 0.02, change:  0.67, leverage: "1:100" },
  { cat: "commodities", symbol: "WTI",      name: "WTI Crude Oil",               bid: 78.540,  ask: 78.560,  spread: 0.02, change:  0.54, leverage: "1:100" },
  { cat: "indices",     symbol: "US500",    name: "S&P 500 Index",               bid: 5218.4,  ask: 5218.9,  spread: 0.5,  change:  0.32, leverage: "1:200" },
  { cat: "indices",     symbol: "NAS100",   name: "NASDAQ 100 Index",            bid: 18246.8, ask: 18247.3, spread: 0.5,  change:  0.39, leverage: "1:200" },
  { cat: "indices",     symbol: "GER40",    name: "DAX 40 Index",                bid: 18721.2, ask: 18722.1, spread: 0.9,  change: -0.18, leverage: "1:200" },
  { cat: "indices",     symbol: "UK100",    name: "FTSE 100 Index",              bid: 8124.5,  ask: 8125.2,  spread: 0.7,  change:  0.11, leverage: "1:200" },
  { cat: "crypto",      symbol: "BTC/USD",  name: "Bitcoin vs US Dollar",        bid: 68420.5, ask: 68432.1, spread: 11.6, change:  1.24, leverage: "1:20"  },
  { cat: "crypto",      symbol: "ETH/USD",  name: "Ethereum vs US Dollar",       bid: 3845.8,  ask: 3847.2,  spread: 1.4,  change:  2.18, leverage: "1:20"  },
  { cat: "crypto",      symbol: "XRP/USD",  name: "Ripple vs US Dollar",         bid: 0.5241,  ask: 0.5243,  spread: 0.002,change:  0.87, leverage: "1:10"  },
  { cat: "stocks",      symbol: "AAPL",     name: "Apple Inc.",                  bid: 189.42,  ask: 189.48,  spread: 0.06, change:  0.54, leverage: "1:20"  },
  { cat: "stocks",      symbol: "TSLA",     name: "Tesla Inc.",                  bid: 174.12,  ask: 174.24,  spread: 0.12, change: -1.32, leverage: "1:20"  },
  { cat: "stocks",      symbol: "MSFT",     name: "Microsoft Corp.",             bid: 414.20,  ask: 414.34,  spread: 0.14, change:  0.76, leverage: "1:20"  },
];

export const TICKER_ITEMS = [
  { symbol: "EURUSD",  price: "1.0847",    change: "-0.12%", up: false },
  { symbol: "XAUUSD",  price: "2,318.40",  change: "+0.45%", up: true  },
  { symbol: "BTCUSD",  price: "68,432.10", change: "+1.24%", up: true  },
  { symbol: "US30",    price: "38,914.50", change: "-0.08%", up: false },
  { symbol: "GBPUSD",  price: "1.2654",    change: "+0.21%", up: true  },
  { symbol: "USDJPY",  price: "154.78",    change: "-0.34%", up: false },
  { symbol: "ETHUSD",  price: "3,847.20",  change: "+2.18%", up: true  },
  { symbol: "BRENT",   price: "83.24",     change: "+0.67%", up: true  },
  { symbol: "NAS100",  price: "18,247.30", change: "+0.39%", up: true  },
  { symbol: "AUDUSD",  price: "0.6542",    change: "-0.15%", up: false },
  { symbol: "XAGUSD",  price: "27.21",     change: "+1.12%", up: true  },
  { symbol: "USDCAD",  price: "1.3655",    change: "+0.08%", up: true  },
];

export const NAV_LINKS = [
  {
    label: "Markets",
    items: [
      { label: "Forex",       desc: "70+ currency pairs from 0.0 pips",          icon: "trending-up",    href: "/markets/forex"       },
      { label: "Commodities", desc: "Gold, Silver, Oil & agricultural products",  icon: "diamond",        href: "/markets/commodities" },
      { label: "Indices",     desc: "S&P 500, NASDAQ, DAX, FTSE and more",        icon: "bar-chart-2",    href: "/markets/indices"     },
      { label: "Stocks",      desc: "1,000+ global share CFDs",                   icon: "briefcase",      href: "/markets/stocks"      },
      { label: "Crypto",      desc: "BTC, ETH, XRP and 30+ digital assets",       icon: "cpu",            href: "/markets/crypto"      },
      { label: "ETFs",        desc: "Diversified exposure across sectors",         icon: "layers",         href: "/markets/etfs"        },
    ],
  },
  {
    label: "Platforms",
    items: [
      { label: "MetaTrader 5",          desc: "Advanced charting & automated trading",       icon: "monitor",     href: "/platforms/mt5" },
      { label: "MetaTrader 4",          desc: "The world's most popular trading platform",     icon: "bar-chart-2", href: "/platforms/mt4" },
      { label: "MetaTrader WebTerminal",desc: "Trade instantly in your browser, no download", icon: "globe",       href: "/platforms/web" },
    ],
  },
  {
    label: "Accounts",
    items: [
      { label: "Standard Account",  desc: "Commission-free trading from $100",       icon: "credit-card",  href: "/accounts/standard"     },
      { label: "Raw Pro Account",   desc: "Raw spreads from 0.0 pips",               icon: "star",         href: "/accounts/raw-pro"      },
      { label: "Institutional",     desc: "Custom pricing & dedicated support",       icon: "building-2",   href: "/accounts/institutional" },
      { label: "Copy Trading",      desc: "Follow top traders or get copied",         icon: "users",        href: "/accounts/copy-trading" },
    ],
  },
  {
    label: "Education",
    items: [
      { label: "Neptune Academy",   desc: "Structured courses for every level",       icon: "book-open",    href: "/education/academy"   },
      { label: "Market Analysis",   desc: "Daily expert forecasts & commentary",      icon: "activity",     href: "/education/analysis"  },
      { label: "Economic Calendar", desc: "High-impact events that move markets",     icon: "calendar",     href: "/education/calendar"  },
      { label: "Trading Glossary",  desc: "500+ trading terms explained",             icon: "hash",         href: "/education/glossary"  },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us",          desc: "Our story, mission & global presence",     icon: "info",         href: "/company/about"      },
      { label: "Regulation",        desc: "Our licences across jurisdictions",         icon: "shield",       href: "/company/regulation" },
      { label: "Security of Funds", desc: "How we protect your capital",              icon: "lock",         href: "/company/security"   },
      { label: "Contact Us",        desc: "24/7 multilingual support",                icon: "message-circle",href: "/company/contact"   },
    ],
  },
];

export const ACCOUNT_TYPES = [
  {
    tier: "Beginner Friendly",
    name: "Standard",
    desc: "Zero commission. Everything you need to start trading global markets.",
    price: "$0",
    priceLabel: "Commission",
    deposit: "From $100 minimum deposit",
    featured: false,
    features: [
      { text: "Spreads from 0.8 pips",        accent: false },
      { text: "MT4, MT5 & WebTrader",            accent: false },
      { text: "1:500 max leverage",            accent: false },
      { text: "Negative balance protection",   accent: false },
      { text: "1,000+ instruments",            accent: false },
    ],
    cta: "Open Standard Account",
    ctaStyle: "outline",
  },
  {
    tier: "For Professionals",
    name: "Raw Pro",
    desc: "Raw interbank spreads. Built for high-frequency and professional traders.",
    price: "$3.5",
    priceLabel: "per lot commission",
    deposit: "From $500 minimum deposit",
    featured: true,
    features: [
      { text: "Raw spreads from 0.0 pips",     accent: true  },
      { text: "All platforms + API access",    accent: true  },
      { text: "1:500 max leverage",            accent: true  },
      { text: "Priority support line",         accent: true  },
      { text: "Free VPS hosting",              accent: true  },
    ],
    cta: "Open Raw Pro Account",
    ctaStyle: "fill",
  },
  {
    tier: "Enterprise",
    name: "Institutional",
    desc: "Custom pricing, dedicated infrastructure, and white-glove service.",
    price: "Custom",
    priceLabel: "volume tiers",
    deposit: "Contact our institutional desk",
    featured: false,
    features: [
      { text: "Dedicated account manager",     accent: false },
      { text: "Custom liquidity bridge",       accent: false },
      { text: "Deep market depth",             accent: false },
      { text: "PAMM/MAM solutions",            accent: false },
      { text: "Priority execution",            accent: false },
    ],
    cta: "Contact Sales Team",
    ctaStyle: "dark",
  },
];

export const PROMOTIONS = [
  {
    tag: "Welcome Bonus",
    title: "100% First Deposit Bonus",
    desc: "Double your first deposit up to $10,000. Start trading with twice the power from day one.",
    icon: "gift",
    href: "/promotions/welcome-bonus",
  },
  {
    tag: "Referral Program",
    title: "Refer a Friend, Earn $10",
    desc: "Invite friends and earn $10 cash for every friend who opens a funded live account. Unlimited referrals.",
    icon: "users",
    href: "/promotions/referral",
  },
  {
    tag: "Trading Contest",
    title: "$50,000 Prize Pool",
    desc: "Compete in our monthly trading championship. Top performers share a $50K prize pool.",
    icon: "trophy",
    href: "/promotions/contest",
  },
];

export const FEATURES = [
  { icon: "zap",          title: "Ultra-Fast Execution",            desc: "Orders filled in under 12ms via Tier-1 Equinix data centres. Zero requotes. Zero rejections on every trade." },
  { icon: "trending-down",title: "Raw Spreads from 0.0",            desc: "Direct market access with no markup. Competitive commission for high-volume traders. What you see is what you pay." },
  { icon: "shield",       title: "Fully Regulated",                 desc: "Multiple jurisdictional licences. Client funds in segregated Tier-1 bank accounts. Negative balance protection guaranteed." },
  { icon: "headphones",   title: "24/7 Priority Support",           desc: "Dedicated multilingual account managers around the clock. Average response time under 90 seconds across all channels." },
  { icon: "credit-card",  title: "Instant Deposits & Withdrawals",  desc: "20+ payment methods including M-Pesa, Airtel, cards, crypto and wire. 92%+ of withdrawals approved same business day." },
  { icon: "bar-chart-2",  title: "Advanced Market Analysis",        desc: "Free access to Trading Central, Autochartist pattern recognition, daily analyst briefings and sentiment indicators." },
];

export const REGULATORS = [
  { name: "FSA",  sub: "Seychelles"    },
  { name: "FSC",  sub: "Mauritius"     },
  { name: "CySEC",sub: "Cyprus"        },
  { name: "FSCA", sub: "South Africa"  },
  { name: "CMA",  sub: "Kenya"         },
];

export const STATS = [
  { value: 500,  suffix: "K+", label: "Active Traders"  },
  { value: 180,  suffix: "+",  label: "Countries Served" },
  { value: 1000, suffix: "+",  label: "Instruments"     },
  { value: 40,   suffix: "+",  label: "Global Awards"   },
];

export const PLATFORMS = [
  {
    id: "mt5",
    name: "MetaTrader 5",
    desc: "Advanced charting, 80+ indicators, automated trading with Expert Advisors",
    icon: "monitor",
  },
  {
    id: "mt4",
    name: "MetaTrader 4",
    desc: "The world's most trusted and widely-used trading platform",
    icon: "smartphone",
  },
  {
    id: "web",
    name: "WebTrader",
    desc: "Trade instantly in your browser. Zero download required.",
    icon: "globe",
  },
];
