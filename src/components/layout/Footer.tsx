import Link from "next/link";
import { type ReactNode } from "react";

const FOOTER_LINKS = [
  { title:"Markets",    links:["Forex Trading","Commodities","Indices","Stocks & Shares","Cryptocurrencies","ETFs"],                    hrefs:["/markets/forex","/markets/commodities","/markets/indices","/markets/stocks","/markets/crypto","/markets/etfs"] },
  { title:"Trading",    links:["Copy Trading","MT4","MT5"],                                                                               hrefs:["/accounts/copy-trading","/platforms/mt4","/platforms/mt5"] },
  { title:"Company",    links:["About Us","Regulation","Security of Funds","Contact Us","Partners"],                                      hrefs:["/company/about","/company/regulation","/company/security","/company/contact","/partners"] },
  { title:"Legal",      links:["Help Centre","Risk Disclosure","Privacy Policy","Terms & Conditions","AML Policy","Cookie Policy","Legal Documents"], hrefs:["/support","/legal/risk","/legal/privacy","/legal/terms","/legal/aml","/legal/cookies","/legal"] },
];
const SOCIALS = [
  { label:"Facebook",  path:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label:"X/Twitter", path:"M4 4l16 16M4 20L20 4" },
  { label:"LinkedIn",  path:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label:"Instagram", path:"M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { label:"Telegram",  path:"M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0v5.5l3.5-3" },
];

function PayCard({ bg, label, children }: { bg: string; color?: string; label: string; children: ReactNode }) {
  return (
    <div title={label} className="h-8 px-2.5 rounded flex items-center justify-center gap-1.5 select-none" style={{ background: bg }}>
      {children}
    </div>
  );
}

function PaymentIcons() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Visa */}
      <PayCard bg="#1a1f71" label="Visa">
        <span className="text-white font-black italic text-[13px] tracking-tighter leading-none" style={{ fontFamily: "Arial, sans-serif" }}>VISA</span>
      </PayCard>

      {/* Mastercard */}
      <PayCard bg="#1a1a1a" label="Mastercard">
        <span className="relative flex items-center w-[30px] h-[20px]">
          <span className="absolute left-0 top-0 w-5 h-5 rounded-full" style={{ background: "#eb001b" }} />
          <span className="absolute left-[10px] top-0 w-5 h-5 rounded-full" style={{ background: "#f79e1b", mixBlendMode: "normal", opacity: 0.9 }} />
        </span>
      </PayCard>

      {/* M-Pesa */}
      <PayCard bg="#4caf50" label="M-Pesa">
        <span className="text-white text-[9.5px] font-black tracking-tighter leading-none whitespace-nowrap">M-PESA</span>
      </PayCard>

      {/* Airtel */}
      <PayCard bg="#e40000" label="Airtel">
        <span className="text-white text-[9.5px] font-black tracking-tight leading-none whitespace-nowrap">AIRTEL</span>
      </PayCard>

      {/* MTN */}
      <PayCard bg="#ffc80a" label="MTN">
        <span className="text-[9.5px] font-black tracking-tight leading-none whitespace-nowrap" style={{ color: "#1a1a1a" }}>MTN</span>
      </PayCard>

      {/* Skrill */}
      <PayCard bg="#862165" label="Skrill">
        <span className="text-white text-[9.5px] font-black tracking-tight leading-none whitespace-nowrap">SKRILL</span>
      </PayCard>

      {/* Neteller */}
      <PayCard bg="#c20000" label="Neteller">
        <span className="text-white text-[9px] font-black tracking-tight leading-none whitespace-nowrap">NETELLER</span>
      </PayCard>

      {/* Wire Transfer */}
      <PayCard bg="#2d4a6b" label="Wire Transfer">
        <svg viewBox="0 0 18 16" width="16" height="14" fill="white">
          <rect x="1" y="13" width="16" height="2" rx="0.5" />
          <polygon points="9,1 1,5 17,5" />
          <rect x="2" y="5" width="3" height="7" />
          <rect x="7.5" y="5" width="3" height="7" />
          <rect x="13" y="5" width="3" height="7" />
        </svg>
        <span className="text-white text-[8.5px] font-bold leading-none whitespace-nowrap">WIRE</span>
      </PayCard>

      {/* USDT */}
      <PayCard bg="#009393" label="USDT (Tether)">
        <svg viewBox="0 0 20 20" width="15" height="15" fill="white">
          <path d="M10 1.5a8.5 8.5 0 1 0 0 17A8.5 8.5 0 0 0 10 1.5zm1 11.2v2.8H9v-2.8c-2.1-.3-3.6-1.2-3.6-2.2h1.4c0 .6 1.2 1.1 3.2 1.1s3.2-.5 3.2-1.1H14.6c0 1-.9 1.9-3.6 2.2zm3.6-4.2H5.4V7h3V5.5h3V7h3v1.5z"/>
        </svg>
        <span className="text-white text-[8.5px] font-bold leading-none">USDT</span>
      </PayCard>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/65 pt-20 pb-10 px-12">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-purple-gradient rounded-[10px] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.18L18 8v8l-6 3.82L6 16V8l6-3.82z" fill="white"/>
                  <path d="M9 9l6 3-6 3V9z" fill="white"/>
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">Neptune<span className="text-purple-400">Markets</span></span>
            </div>
            <p className="text-sm leading-7 text-white/45 mb-7 max-w-[260px]">
              Empowering traders worldwide with institutional-grade technology, transparent pricing, and unwavering support.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, path }) => (
                <button key={label} aria-label={label}
                  className="w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/60 hover:bg-purple-600 hover:border-purple-500 hover:text-white hover:-translate-y-0.5 transition-all">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path}/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold text-white mb-5">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link href={col.hrefs[i]} className="text-sm text-white/45 hover:text-white/90 hover:pl-1 transition-all block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.08] mb-8" />
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11.5px] leading-7 text-white/35 mb-3">
              Neptune Markets is a trading name of Neptune Markets Group Ltd., authorised and regulated across multiple jurisdictions. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 74% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
            </p>
            <p className="text-[11.5px] leading-6 text-white/25">
              The information on this website is not directed at residents of the United States, Belgium, Canada or Japan. Client funds are held in segregated Tier-1 bank accounts.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Payment Methods</div>
            <PaymentIcons />
          </div>
        </div>
        <div className="mt-6 text-[11px] text-white/25">
          © {new Date().getFullYear()} Neptune Markets Group Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
