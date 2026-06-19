import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Newsroom | Neptune Markets — Company News & Market Insights" };

const NEWS = [
  {
    cat: "Company News",
    date: "June 3, 2026",
    title: "Neptune Markets Receives CMA Licence, Expands Operations in Kenya",
    excerpt: "Neptune Markets Group has been granted a Securities Dealer licence by the Capital Markets Authority of Kenya, enabling the company to offer full-service retail and institutional trading to Kenyan clients under local regulatory oversight.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=70",
    readTime: "3 min read",
  },
  {
    cat: "Product Update",
    date: "May 20, 2026",
    title: "WebTerminal 2.0 Launches with Advanced Charting and One-Click Trading",
    excerpt: "Neptune Markets has released a major update to its browser-based WebTerminal platform, introducing a rebuilt charting engine with 50+ technical indicators, a redesigned one-click order ticket, and enhanced multi-tab portfolio management.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=70",
    readTime: "4 min read",
  },
  {
    cat: "Market Insights",
    date: "May 12, 2026",
    title: "Gold Hits All-Time High Above $2,400 Amid Central Bank Buying Surge",
    excerpt: "Gold surpassed $2,400 per ounce for the first time in history last week, driven by record central bank purchases and safe-haven demand amid geopolitical uncertainty. Neptune Markets analysts see continued upside toward $2,600.",
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=70",
    readTime: "5 min read",
  },
  {
    cat: "Award",
    date: "April 28, 2026",
    title: "Neptune Markets Named Best Forex Broker Africa 2026",
    excerpt: "We are proud to announce that Neptune Markets has received the Best Forex Broker Africa award at the 2026 Global Forex Awards ceremony in London. The award recognises our continued investment in execution quality, regulation, and client service.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=70",
    readTime: "2 min read",
  },
  {
    cat: "Product Update",
    date: "April 15, 2026",
    title: "Copy Trading Platform Launches — Follow Verified Traders from $100",
    excerpt: "Neptune Markets is proud to launch our full copy trading platform, giving clients the ability to follow verified, audited strategy providers and automatically replicate their trades in real time.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=70",
    readTime: "4 min read",
  },
  {
    cat: "Market Insights",
    date: "March 30, 2026",
    title: "Fed Holds Rates at 5.25%: What It Means for Forex and Equity Traders",
    excerpt: "The US Federal Reserve held its benchmark rate at 5.25%–5.50% at the March FOMC meeting, as expected. However, the updated dot plot signalled only two cuts for 2026, surprising markets expecting three.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=70",
    readTime: "6 min read",
  },
];

const CAT_COLOURS: Record<string, string> = {
  "Company News":    "bg-blue-50   text-blue-700  border-blue-200",
  "Product Update":  "bg-purple-50 text-purple-700 border-purple-200",
  "Market Insights": "bg-amber-50  text-amber-700  border-amber-200",
  "Award":           "bg-green-50  text-green-700  border-green-200",
};

export default function NewsPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Newsroom"
        title="Latest News, Updates & Market Insights"
        subtitle="Follow Neptune Markets announcements, platform updates, regulatory news, and expert market commentary from our research desk."
        img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
      />

      <section className="py-20 px-5 md:px-12 bg-surface-bg">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Company News", "Product Update", "Market Insights", "Award"].map((cat) => (
              <button key={cat} className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${cat === "All" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-border text-text-muted hover:border-purple-300 hover:text-purple-600"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((article) => (
              <article key={article.title} className="bg-white border border-border rounded-2xl overflow-hidden hover:border-purple-200 hover:shadow-purple-md transition-all group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${CAT_COLOURS[article.cat] || "bg-surface-bg text-text-faint border-border"}`}>
                      {article.cat}
                    </span>
                    <span className="text-xs text-text-faint">{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-text mb-3 leading-snug group-hover:text-purple-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="text-xs text-text-faint">{article.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-12 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-extrabold mb-5">Stay Informed. Trade Better.</h2>
          <p className="text-white/60 text-lg mb-10">Open a Neptune Markets account for free access to daily market analysis, briefings, and company news.</p>
          <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">Open Free Account</a>
        </div>
      </section>
    </PageLayout>
  );
}
