import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Terms & Conditions | Neptune Markets" };

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero tag="Legal" title="Terms & Conditions" subtitle="Last updated: January 2026" />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">1. Acceptance of Terms</h2>
            <p>By accessing, registering for, or using any Neptune Markets Group Ltd. service, platform, or website, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use our services. These Terms constitute a legally binding agreement between you and Neptune Markets Group Ltd.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">2. About Neptune Markets</h2>
            <p>Neptune Markets Group Ltd. is a licensed financial services provider authorised and regulated by the Financial Services Authority of Seychelles (FSA), the Financial Services Commission of Mauritius (FSC), the Cyprus Securities and Exchange Commission (CySEC), the Financial Sector Conduct Authority of South Africa (FSCA), and the Capital Markets Authority of Kenya (CMA).</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">3. Eligibility</h2>
            <p>To open an account with Neptune Markets, you must: be at least 18 years of age (or the age of majority in your jurisdiction); not be a resident of a restricted jurisdiction (including the USA, Belgium, Canada, or Japan); not be acting on behalf of any person in a restricted jurisdiction; and have the legal capacity to enter into financial contracts in your jurisdiction.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">4. Account Registration</h2>
            <p>You must provide accurate, complete, and current information during registration and promptly update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify Neptune Markets of any unauthorised use of your account.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">5. Trading Terms</h2>
            <p>All trades are executed at the prices displayed on our platform at the time of execution. Neptune Markets acts as principal counterparty to all transactions. You acknowledge that CFD trading involves significant risk and that losses can exceed your initial deposit. All trades are subject to the specific instrument specifications published on our platform.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">6. Deposits and Withdrawals</h2>
            <p>All client funds are held in segregated accounts separate from Neptune Markets&apos; operational funds. Deposits are credited to your account upon confirmation of receipt. Withdrawal requests are processed in accordance with our payment policy. Neptune Markets reserves the right to request verification documents before processing withdrawals.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">7. Prohibited Conduct</h2>
            <p>You may not use Neptune Markets&apos; services to engage in: market manipulation or abusive trading practices; money laundering or terrorist financing activities; trading on material non-public information; any form of arbitrage that exploits platform errors; or any activity that violates applicable laws or regulations.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">8. Intellectual Property</h2>
            <p>All content on Neptune Markets&apos; website and platforms, including text, graphics, logos, software, and data, is owned by Neptune Markets Group Ltd. or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">9. Limitation of Liability</h2>
            <p>Neptune Markets shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total aggregate liability for any claim shall not exceed the amount of funds held in your account at the time the claim arises.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">10. Governing Law</h2>
            <p>These Terms are governed by the laws of the Republic of Seychelles. Any disputes shall be subject to the exclusive jurisdiction of the courts of Seychelles, except where mandatory local law requires otherwise.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
