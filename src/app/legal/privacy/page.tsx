import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Privacy Policy | Neptune Markets" };

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero tag="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">1. Introduction</h2>
            <p>Neptune Markets Group Ltd. (&quot;Neptune Markets&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and trading platforms.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Identity information: name, date of birth, nationality, government-issued ID</li>
              <li>Contact information: email address, phone number, postal address</li>
              <li>Financial information: bank account details, source of funds, annual income</li>
              <li>Trading information: trading history, preferences, and platform usage</li>
              <li>Technical information: IP address, device identifiers, browser type</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide, operate, and maintain our trading services</li>
              <li>Verify your identity and comply with KYC/AML obligations</li>
              <li>Process transactions and manage your account</li>
              <li>Send service-related communications and account notifications</li>
              <li>Detect, investigate, and prevent fraud and security breaches</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our platforms and services through analytics</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share your information with: regulatory authorities and law enforcement as required by law; payment processors to facilitate transactions; technology service providers operating under strict data processing agreements; and auditors and legal advisors bound by professional confidentiality obligations.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including 256-bit SSL encryption, multi-factor authentication, and regular security audits to protect your personal data. Our data is stored in secure, ISO 27001-certified data centres.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">6. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to provide our services and to comply with our legal obligations. For regulatory compliance purposes, account records are typically retained for a minimum of 5 years following account closure.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to: access your personal data; correct inaccurate data; request deletion of your data; object to processing; request data portability; and withdraw consent. To exercise these rights, contact us at privacy@neptunemarkets.com.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">8. Contact</h2>
            <p>For privacy-related enquiries, contact our Data Protection Officer at: privacy@neptunemarkets.com or Neptune Markets Group Ltd., Suite 305, Eden Plaza, Eden Island, Seychelles SC39001.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
