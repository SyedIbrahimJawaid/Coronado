import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "ReadyNest Real Estate brokerage disclosures and licensing information for Southern California.",
};

export default function DisclosuresPage() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-serif text-primary mb-8">Disclosures</h1>
        <p className="text-body-secondary text-sm mb-8">Last updated: February 9, 2026</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Brokerage Information</h2>
            <p className="text-body-secondary leading-relaxed">
              ReadyNest Real Estate is a licensed real estate brokerage in the State of California.
            </p>
            <div className="mt-4 card">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-body-secondary">Brokerage Name:</span>
                  <p className="font-semibold text-primary">ReadyNest Real Estate</p>
                </div>
                <div>
                  <span className="text-body-secondary">DRE License #:</span>
                  <p className="font-semibold text-primary">XXXXXXXX</p>
                </div>
                <div>
                  <span className="text-body-secondary">Broker of Record:</span>
                  <p className="font-semibold text-primary">[Broker Name]</p>
                </div>
                <div>
                  <span className="text-body-secondary">Service Areas:</span>
                  <p className="font-semibold text-primary">San Diego, Orange, Los Angeles Counties</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Agency Disclosure</h2>
            <p className="text-body-secondary leading-relaxed">
              In California, real estate agents can represent buyers, sellers, or both (dual agency).
              ReadyNest primarily provides buyer representation. Before entering into a representation
              agreement, we will provide you with the California &quot;Disclosure Regarding Real Estate
              Agency Relationship&quot; form as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Compensation Disclosure</h2>
            <p className="text-body-secondary leading-relaxed">
              In most transactions, buyer agent compensation is offered by the seller or listing broker.
              We will clearly explain how compensation works in your specific transaction before you sign
              any agreements. You have the right to negotiate compensation terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Fair Housing Statement</h2>
            <p className="text-body-secondary leading-relaxed">
              ReadyNest Real Estate is committed to complying with all federal, state, and local fair
              housing laws. We do not discriminate on the basis of race, color, religion, sex, handicap,
              familial status, national origin, sexual orientation, gender identity, or any other
              protected class.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Partner Network Disclosure</h2>
            <p className="text-body-secondary leading-relaxed">
              ReadyNest coordinates with third-party service providers (lenders, inspectors, contractors)
              for your convenience. These are independent businesses and ReadyNest does not guarantee
              their work. You are never required to use our recommended partners and are free to choose
              your own service providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">Material Relationship Disclosure</h2>
            <p className="text-body-secondary leading-relaxed">
              If ReadyNest has any financial interest in or receives compensation from any recommended
              service provider, we will disclose this relationship to you in writing before any referral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

