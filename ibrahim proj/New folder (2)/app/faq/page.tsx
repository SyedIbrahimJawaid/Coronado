import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about buying, selling, and upgrading homes for growing families in Southern California. ReadyNest Real Estate FAQ.",
};

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        q: "What is ReadyNest?",
        a: "ReadyNest is a family-focused real estate agency serving Southern California. We specialize in helping growing families — especially expecting parents and new families — buy, sell, and prepare homes with a coordinated, calm approach.",
      },
      {
        q: "What areas do you serve?",
        a: "We currently serve San Diego County, Orange County, and Los Angeles County. We have deep knowledge of family-friendly neighborhoods in each region.",
      },
      {
        q: "How do I get started?",
        a: "Fill out our intake form (Create My Family Home Plan). We'll review your situation and reach out within 24 hours with a personalized plan.",
      },
      {
        q: "Is there any cost or obligation to fill out the form?",
        a: "No. The intake form is completely free and no-obligation. It simply helps us understand your family's situation so we can provide the best guidance.",
      },
    ],
  },
  {
    category: "Buying a Home",
    faqs: [
      {
        q: "How long does it take to buy a home?",
        a: "A typical home purchase takes 60–90 days from offer to close. Our Express pathway can compress this to 45 days for qualified buyers in time-sensitive situations.",
      },
      {
        q: "Do I need pre-approval before contacting you?",
        a: "No. While pre-approval is helpful, we can connect you with family-friendly lenders as part of the process. We'll help you get prepared.",
      },
      {
        q: "What makes your approach different from other agents?",
        a: "We focus exclusively on families. Our process considers not just the house, but schools, safety, timing around pregnancy, baby-safe preparations, and reducing stress during a major life transition.",
      },
      {
        q: "Do you charge buyer fees?",
        a: "In most transactions, our commission is covered by the seller. We'll explain compensation transparently before you commit to anything.",
      },
    ],
  },
  {
    category: "Selling & Upgrading",
    faqs: [
      {
        q: "Can I sell and buy at the same time?",
        a: "Yes, and it's our specialty. We create a coordinated timeline so you're not stuck between homes or carrying two mortgages longer than necessary.",
      },
      {
        q: "Do I need to renovate before selling?",
        a: "Not always. We'll advise on high-impact, low-cost improvements that maximize value. Some homes sell best as-is.",
      },
      {
        q: "What if my home doesn't sell fast enough?",
        a: "We plan for this. Our transition plan includes contingency strategies — bridge financing, extended occupancy, or timeline adjustments.",
      },
    ],
  },
  {
    category: "45-Day Express",
    faqs: [
      {
        q: "What is the 45-Day Express pathway?",
        a: "It's our accelerated home-buying process for qualified families in time-sensitive situations — like an approaching due date or an expiring lease. From strategy to keys in 45 days or less.",
      },
      {
        q: "Does everyone qualify for Express?",
        a: "No. Express requires pre-approved financing, decision readiness, and flexibility on cosmetic preferences. We'll be honest about whether it's right for you.",
      },
      {
        q: "Does Express mean cutting corners?",
        a: "Absolutely not. Inspections, due diligence, and negotiation all happen — just on a compressed, tightly coordinated schedule.",
      },
    ],
  },
  {
    category: "Home Preparation",
    faqs: [
      {
        q: "What kind of home preparation do you coordinate?",
        a: "Baby-safe upgrades, nursery setup, essential renovations (painting, flooring, safety gates), and connecting you with trusted contractors — all after closing.",
      },
      {
        q: "Do you do the renovation work yourselves?",
        a: "No. We coordinate with trusted, vetted partners. We manage the relationships and timeline so you don't have to juggle contractors.",
      },
      {
        q: "Are major renovations included?",
        a: "Our coordination focuses on cosmetic updates and safety upgrades. Major renovations requiring permits follow standard contractor timelines.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about working with ReadyNest.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-serif text-primary mb-6 pb-2 border-b border-border">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.faqs.map((faq) => (
                  <div key={faq.q} className="pb-6 border-b border-border/50 last:border-0">
                    <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{faq.q}</h3>
                    <p className="text-body-secondary leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl font-serif text-primary mb-4">Still Have Questions?</h2>
          <p className="text-body-secondary text-lg mb-8 max-w-xl mx-auto">
            We&apos;re happy to help. Create your family home plan and we&apos;ll address any questions during our consultation.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}

