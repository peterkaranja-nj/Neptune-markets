import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Cookie Policy | Neptune Markets" };

const COOKIE_TYPES = [
  { type: "Strictly Necessary",    examples: "Session tokens, CSRF protection, login state",           canDisable: false, desc: "Essential for the website to function. Cannot be disabled." },
  { type: "Performance",           examples: "Google Analytics, Hotjar session recordings",            canDisable: true,  desc: "Help us understand how visitors use our site to improve performance." },
  { type: "Functional",            examples: "Language preference, chart settings, theme preference",  canDisable: true,  desc: "Remember your preferences to improve your experience." },
  { type: "Targeting / Marketing", examples: "Google Ads, Meta Pixel, retargeting cookies",           canDisable: true,  desc: "Used to show relevant advertisements on other websites." },
];

export default function CookiesPage() {
  return (
    <PageLayout>
      <PageHero tag="Legal" title="Cookie Policy" subtitle="Last updated: January 2026" />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies may be session-based (deleted when you close your browser) or persistent (stored on your device for a set period).</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">2. How We Use Cookies</h2>
            <p>Neptune Markets uses cookies to: maintain your logged-in session securely; remember your platform preferences; analyse site usage and performance; and measure the effectiveness of our marketing. We do not use cookies to collect your trading data or financial information — that is handled through our secure trading infrastructure.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">3. Types of Cookies We Use</h2>
            <div className="space-y-4 mt-4">
              {COOKIE_TYPES.map((ct) => (
                <div key={ct.type} className="bg-surface-bg border border-border rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-text text-sm">{ct.type}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${ct.canDisable ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
                      {ct.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mb-2">{ct.desc}</p>
                  <p className="text-xs text-text-faint italic">Examples: {ct.examples}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">4. Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services that appear on our pages, such as analytics providers and advertising networks. These third parties have their own privacy policies. Neptune Markets does not control these third-party cookies.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">5. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you disable essential cookies, some parts of our website may not function correctly. You can also manage your preferences via our cookie consent banner when you first visit our site.</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-text mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. We will notify you of significant changes by updating the date at the top of this page and, where appropriate, providing additional notice.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
