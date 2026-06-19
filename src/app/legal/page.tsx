import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { FileText, Shield, Lock, AlertTriangle, Cookie, Scale } from "lucide-react";

export const metadata = { title: "Legal Documents | Neptune Markets" };

const DOCS = [
  { icon: AlertTriangle, title: "Risk Disclosure",      desc: "Understanding the risks involved in CFD and leveraged trading.",    href: "/legal/risk",    updated: "Jan 2026" },
  { icon: Lock,          title: "Privacy Policy",        desc: "How we collect, use, and protect your personal data.",              href: "/legal/privacy", updated: "Jan 2026" },
  { icon: FileText,      title: "Terms & Conditions",   desc: "The contractual terms governing your use of Neptune Markets.",       href: "/legal/terms",   updated: "Jan 2026" },
  { icon: Shield,        title: "AML Policy",           desc: "Our anti-money laundering and counter-terrorist financing policy.",  href: "/legal/aml",     updated: "Jan 2026" },
  { icon: Cookie,        title: "Cookie Policy",         desc: "How we use cookies and similar tracking technologies.",             href: "/legal/cookies", updated: "Jan 2026" },
  { icon: Scale,         title: "Regulation & Licences",desc: "Our regulatory licences across all operating jurisdictions.",        href: "/company/regulation", updated: "Jan 2026" },
];

export default function LegalPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Legal"
        title="Legal Documents & Regulatory Information"
        subtitle="All legal documentation governing your relationship with Neptune Markets Group Ltd. We are committed to full transparency."
      />

      <section className="py-24 px-12 bg-surface-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {DOCS.map((doc) => (
              <Link
                key={doc.title}
                href={doc.href}
                className="flex items-start gap-4 bg-white border border-border rounded-xl p-6 hover:border-purple-300 hover:shadow-purple transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <doc.icon size={20} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display text-sm font-bold text-text group-hover:text-purple-700 transition-colors">{doc.title}</span>
                    <span className="text-xs text-text-faint">Updated {doc.updated}</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{doc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Important:</strong> By using Neptune Markets&apos; services, you confirm that you have read, understood, and agreed to all applicable legal documents listed above. Please review them regularly as they may be updated to reflect regulatory changes.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
