import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ReadyNest Real Estate terms of service. Rules and guidelines for using our website and services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-serif text-primary mb-8">Terms of Service</h1>
        <p className="text-body-secondary text-sm mb-8">Last updated: February 9, 2026</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-body-secondary leading-relaxed">
              By accessing and using the ReadyNest Real Estate website, you accept and agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">2. Services Description</h2>
            <p className="text-body-secondary leading-relaxed">
              ReadyNest Real Estate provides real estate brokerage services including buyer representation,
              seller representation, and home preparation coordination in Southern California. Our website
              provides information about our services and allows you to submit inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">3. No Agency Relationship</h2>
            <p className="text-body-secondary leading-relaxed">
              Submitting an inquiry through our website does not create an agency relationship. A formal
              agency relationship is only established through a signed representation agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Accuracy of Information</h2>
            <p className="text-body-secondary leading-relaxed">
              While we strive to provide accurate and current information, we make no warranties about the
              completeness, reliability, or accuracy of information on this website. Market conditions,
              pricing, and availability change frequently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">5. User Responsibilities</h2>
            <p className="text-body-secondary leading-relaxed mb-4">
              When using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-secondary">
              <li>Provide accurate information in all forms</li>
              <li>Not use the site for any unlawful purpose</li>
              <li>Not attempt to interfere with the site&apos;s functionality</li>
              <li>Not submit spam or fraudulent inquiries</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">6. Intellectual Property</h2>
            <p className="text-body-secondary leading-relaxed">
              All content on this website — including text, images, logos, and design — is the property of
              ReadyNest Real Estate and is protected by copyright and trademark laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-body-secondary leading-relaxed">
              ReadyNest Real Estate shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of this website or our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">8. Governing Law</h2>
            <p className="text-body-secondary leading-relaxed">
              These terms are governed by the laws of the State of California. Any disputes shall be
              resolved in the courts of San Diego County, California.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">9. Contact</h2>
            <p className="text-body-secondary leading-relaxed">
              For questions about these terms, contact us at legal@readynest.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

