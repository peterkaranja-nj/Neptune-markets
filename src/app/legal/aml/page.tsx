import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "AML Policy | Neptune Markets — Anti-Money Laundering" };

export default function AmlPage() {
  return (
    <PageLayout>
      <PageHero tag="Legal" title="Anti-Money Laundering (AML) Policy" subtitle="Last updated: January 2026" />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">1. Policy Statement</h2>
            <p>Neptune Markets Group Ltd. is committed to preventing its services from being used for money laundering, terrorist financing, or other financial crimes. This AML Policy sets out our approach to anti-money laundering and counter-terrorist financing (AML/CTF) compliance, in accordance with applicable laws and international standards including FATF recommendations.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">2. Know Your Customer (KYC)</h2>
            <p>All clients must undergo identity verification before opening an account or processing transactions. KYC requirements include: proof of identity (government-issued ID, passport); proof of address (utility bill, bank statement dated within 3 months); and source of funds documentation for deposits above applicable thresholds. Enhanced due diligence may be applied to higher-risk clients, including Politically Exposed Persons (PEPs) and clients from high-risk jurisdictions.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">3. Transaction Monitoring</h2>
            <p>Neptune Markets employs automated systems to monitor transactions for unusual patterns or activities that may indicate money laundering or terrorist financing. Suspicious transaction patterns include: unusual deposit or withdrawal patterns; transactions inconsistent with a client&apos;s stated purpose or risk profile; structuring of transactions to avoid reporting thresholds; and round-trip transactions without apparent economic purpose.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">4. Reporting Obligations</h2>
            <p>Neptune Markets will file Suspicious Activity Reports (SARs) or equivalent reports with competent authorities as required by applicable law. All staff are trained to identify and report suspicious activities through our internal escalation procedures. We maintain records of all reports and supporting documentation for the periods required by applicable law.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">5. Sanctions Screening</h2>
            <p>Neptune Markets screens all clients and transactions against applicable sanctions lists, including those maintained by the UN Security Council, OFAC, EU, and other relevant authorities. We will not open accounts for, or conduct transactions with, sanctioned individuals, entities, or jurisdictions.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">6. Deposit and Withdrawal Policy</h2>
            <p>Funds deposited with Neptune Markets must originate from accounts in the client&apos;s own name. We do not accept deposits from or process withdrawals to third parties. Withdrawals are processed to the same method and account used for the original deposit. Neptune Markets reserves the right to request source of funds documentation for any transaction.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">7. Staff Training</h2>
            <p>All Neptune Markets employees receive regular AML/CTF training appropriate to their role. Our Compliance Officer maintains oversight of all AML matters and provides guidance to staff on complex cases.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">8. Contact</h2>
            <p>For AML-related enquiries or to report concerns, contact our Compliance team at: compliance@neptunemarkets.com</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
