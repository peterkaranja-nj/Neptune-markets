import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Risk Disclosure | Neptune Markets" };

export default function RiskPage() {
  return (
    <PageLayout>
      <PageHero tag="Legal" title="Risk Disclosure Statement" subtitle="Last updated: January 2026" />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-3xl mx-auto prose prose-sm max-w-none">
          <div className="space-y-8 text-text-muted text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">1. General Risk Warning</h2>
              <p>Trading in financial instruments including Contracts for Difference (CFDs), foreign exchange (Forex), and other leveraged products involves significant risk of loss. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <strong className="text-text">74% of retail investor accounts lose money when trading CFDs with Neptune Markets.</strong> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">2. Leverage Risk</h2>
              <p>Leveraged products allow you to trade on margin, meaning a small deposit controls a much larger position. While this amplifies potential profits, it also amplifies potential losses. Your losses can exceed your initial deposit. Neptune Markets offers leverage of up to 1:500 on certain instruments. You should only trade with money you can afford to lose and ensure you understand the full implications of leverage before trading.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">3. Market Risk</h2>
              <p>Financial markets are inherently unpredictable. Prices can move rapidly and unexpectedly due to economic announcements, geopolitical events, market sentiment, and technical factors. Even well-researched trading decisions can result in losses.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">4. Cryptocurrency Risk</h2>
              <p>Cryptocurrency markets are particularly volatile. Prices can rise and fall by significant percentages within short time periods. Regulatory changes, technological failures, and market sentiment can cause extreme price movements. Cryptocurrency CFDs may have additional risks compared to traditional assets.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">5. Execution Risk</h2>
              <p>During periods of extreme market volatility or low liquidity, orders may be executed at prices significantly different from the requested price (slippage). Stop-loss orders are not guaranteed to fill at the specified price in all market conditions.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">6. Counterparty Risk</h2>
              <p>When trading CFDs, you are entering into a contract with Neptune Markets Group Ltd. as the counterparty. While Neptune Markets maintains regulatory capital requirements and holds client funds in segregated accounts, you should be aware of this counterparty relationship.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">7. Negative Balance Protection</h2>
              <p>Neptune Markets provides negative balance protection for all retail clients, meaning your account balance cannot fall below zero. However, you may lose your entire invested capital in a position. You should never invest money that you cannot afford to lose.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">8. Suitability</h2>
              <p>CFD trading is not suitable for all investors. Before trading, you should carefully consider your investment objectives, level of experience, and risk tolerance. If in doubt, seek independent financial advice. Neptune Markets may restrict access to products if we determine they are not appropriate for you based on our suitability assessment.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">9. Past Performance</h2>
              <p>Past performance of any trading instrument or strategy is not indicative of future results. Any market analysis, forecasts, or opinions provided by Neptune Markets are for informational purposes only and do not constitute investment advice.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-text mb-3">10. Geographic Restrictions</h2>
              <p>Neptune Markets&apos; services are not available to residents of the United States of America, Belgium, Canada, Japan, and certain other jurisdictions. By accessing our services, you confirm that you are not a resident of a restricted jurisdiction.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
