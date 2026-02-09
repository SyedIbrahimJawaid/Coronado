import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ReadyNest Real Estate privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-serif text-primary mb-8">Privacy Policy</h1>
        <p className="text-body-secondary text-sm mb-8">Last updated: February 9, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Information We Collect</h2>
            <p className="text-body-secondary leading-relaxed mb-4">
              When you use our website or submit our intake form, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-secondary">
              <li>Name, email address, and phone number</li>
              <li>Home buying/selling preferences (budget, timeline, location)</li>
              <li>Family situation details you choose to share</li>
              <li>Website usage data (pages visited, time on site)</li>
              <li>Device and browser information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-body-secondary leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-secondary">
              <li>Respond to your inquiry and create your personalized home plan</li>
              <li>Match you with appropriate services and resources</li>
              <li>Communicate with you about your real estate needs</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Information Sharing</h2>
            <p className="text-body-secondary leading-relaxed">
              We do not sell your personal information. We may share your information with trusted
              partners (lenders, inspectors, contractors) only with your explicit consent and only as
              necessary to provide the services you&apos;ve requested.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Data Security</h2>
            <p className="text-body-secondary leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">5. Your Rights</h2>
            <p className="text-body-secondary leading-relaxed mb-4">
              Under California law (CCPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-secondary">
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of your personal information (we don&apos;t sell it)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">6. Cookies</h2>
            <p className="text-body-secondary leading-relaxed">
              We use essential cookies for website functionality and analytics cookies to understand
              how visitors use our site. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-primary mb-4">7. Contact Us</h2>
            <p className="text-body-secondary leading-relaxed">
              For privacy-related questions or to exercise your rights, contact us at
              privacy@readynest.com or through our intake form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

