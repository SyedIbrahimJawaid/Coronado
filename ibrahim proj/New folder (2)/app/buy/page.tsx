import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Buy a Family Home in Southern California",
  description:
    "Find the perfect family home in San Diego, Orange County, or Los Angeles. ReadyNest helps growing families buy with confidence and a clear plan.",
  keywords: ["family buyer agent southern california", "buy family home san diego", "buyer agent orange county"],
};

const benefits = [
  {
    title: "Family-Focused Search",
    description: "We filter for what families actually need: safe streets, nearby schools, enough bedrooms, and a layout that works for kids.",
  },
  {
    title: "Expert Buyer Representation",
    description: "We negotiate on your behalf — price, repairs, timelines, contingencies. Your interests come first, always.",
  },
  {
    title: "Lender & Inspector Coordination",
    description: "We connect you with family-friendly lenders and trusted inspectors. Everything is coordinated so you don't juggle calls.",
  },
  {
    title: "Neighborhood Intelligence",
    description: "School ratings, park proximity, commute times, future developments — we know the details that matter to parents.",
  },
  {
    title: "Transparent Timeline",
    description: "We give you a realistic timeline from day one. If your baby is due in 3 months, we plan around that.",
  },
  {
    title: "Home Preparation After Close",
    description: "Once you have keys, we connect you with trusted partners for nursery setup, safety upgrades, and essential renovations.",
  },
];

const faqs = [
  {
    q: "How long does it take to buy a home?",
    a: "Typically 60–90 days from offer to close. If your situation is time-sensitive, our Express pathway can potentially compress this to 45 days for qualified buyers.",
  },
  {
    q: "Do I need to get pre-approved first?",
    a: "We recommend it but can help you get started. We'll connect you with lenders who understand family timelines and can move quickly.",
  },
  {
    q: "What areas do you cover?",
    a: "We serve San Diego County, Orange County, and Los Angeles County — with deep knowledge of family-friendly neighborhoods in each.",
  },
  {
    q: "Do you charge buyer fees?",
    a: "In most transactions, our commission is covered by the seller. We'll explain exactly how compensation works before you commit to anything.",
  },
];

export default function BuyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              Buy a Home
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Find the Right Home for Your Growing Family
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Not just any home — the right home. Safe neighborhood, enough space, near good schools, and
              ready for your family&apos;s next chapter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary text-lg">
                Start Your Home Search
              </Link>
              <Link href="/areas" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-center">
                Explore Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              What You Get With ReadyNest
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Buying a home while growing a family shouldn&apos;t be stressful. Here&apos;s how we make it calm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg font-serif text-primary mb-3">{b.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-primary mb-2 font-sans">{faq.q}</h3>
                <p className="text-body-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Find Your Family&apos;s Home?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-6">
                Tell us what you need and we&apos;ll build a personalized search plan. No pressure, just clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/areas/san-diego-county" className="text-clay hover:text-clay-dark text-sm font-medium underline">
                  San Diego →
                </Link>
                <Link href="/areas/orange-county" className="text-clay hover:text-clay-dark text-sm font-medium underline">
                  Orange County →
                </Link>
                <Link href="/areas/los-angeles-county" className="text-clay hover:text-clay-dark text-sm font-medium underline">
                  Los Angeles →
                </Link>
              </div>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Start My Home Search" />
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
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

