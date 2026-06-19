import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import GoogleTranslate from "@/components/layout/GoogleTranslate";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neptune Markets | Trade Global Markets with Confidence",
  description: "Access Forex, Commodities, Indices, Stocks and Crypto through institutional-grade infrastructure. Spreads from 0.0 pips. Multi-regulated global broker.",
  keywords: "forex broker, CFD trading, commodities, indices, crypto, MT4, MT5",
  openGraph: {
    title: "Neptune Markets | Trade Global Markets with Confidence",
    description: "Institutional-grade trading. Spreads from 0.0 pips. 1,000+ instruments. Multi-regulated.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <GoogleTranslate />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
