import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Family-Friendly Homes in San Diego County",
  description:
    "Find family-friendly homes in San Diego County. ReadyNest helps growing families discover the best neighborhoods, schools, and communities in San Diego.",
  keywords: ["family-friendly homes san diego county", "buyer agent san diego", "best family areas san diego"],
};

const cities = [
  { name: "Carlsbad", description: "Coastal charm with top schools and family beaches" },
  { name: "Encinitas", description: "Laid-back beach town with excellent schools" },
  { name: "Oceanside", description: "Affordable coastal living with growing amenities" },
  { name: "Escondido", description: "Affordable family homes with mountain views" },
  { name: "Chula Vista", description: "Diverse communities close to everything" },
  { name: "La Mesa", description: "Walkable downtown with suburban neighborhoods" },
  { name: "Poway", description: "Top-rated schools in a quiet suburban setting" },
  { name: "San Marcos", description: "Growing community with new family developments" },
  { name: "Vista", description: "Affordable homes with good school options" },
  { name: "El Cajon", description: "Affordable entry point with community feel" },
];

const considerations = [
  {
    title: "Schools & Education",
    description: "San Diego County has several top-rated school districts including Poway USD, San Dieguito USD, and Carlsbad USD.",
  },
  {
    title: "Outdoor Living",
    description: "Year-round sunshine, beaches, parks, and hiking trails. Families enjoy an active outdoor lifestyle.",
  },
  {
    title: "Commute & Access",
    description: "I-5, I-15, and the Coaster rail connect communities. Consider your work location when choosing areas.",
  },
  {
    title: "Home Types & Budget",
    description: "From coastal condos to inland single-family homes. Prices range from $500k inland to $2M+ coastal.",
  },
  {
    title: "Safety & Community",
    description: "Many San Diego neighborhoods rank among the safest in California with strong community involvement.",
  },
];

const faqs = [
  { q: "What is the average home price in San Diego County?", a: "The median home price in San Diego County ranges from $650k to $1.5M+ depending on the area. Inland communities tend to be more affordable than coastal." },
  { q: "What are the best school districts in San Diego?", a: "Poway Unified, San Dieguito Union HSD, and Carlsbad Unified are consistently top-rated. Each serves different communities with different price points." },
  { q: "Is San Diego good for families?", a: "Absolutely. San Diego offers excellent schools, year-round outdoor activities, diverse communities, and a generally family-friendly lifestyle." },
  { q: "How long does it take to buy a home in San Diego?", a: "Typically 60–90 days. With our Express pathway, qualified buyers can close in as few as 45 days." },
];

export default function SanDiegoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/areas" className="text-white/60 hover:text-white text-sm mb-4 inline-block">
              ← Areas We Serve
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              San Diego County
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              From coastal Carlsbad to suburban Poway, San Diego County offers diverse family-friendly
              communities with year-round sunshine and top-rated schools.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Find Homes in San Diego
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Popular Family Communities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="card hover:shadow-md transition-shadow">
                <h3 className="text-lg font-serif text-primary mb-2">{city.name}</h3>
                <p className="text-body-secondary text-sm">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Family Considerations in San Diego
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {considerations.map((c) => (
              <div key={c.title} className="card">
                <h3 className="text-lg font-serif text-primary mb-3">{c.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ReadyNest Helps */}
      <section className="section-padding bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            How ReadyNest Helps in San Diego
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            We know San Diego&apos;s neighborhoods, school districts, and market dynamics. Whether you&apos;re
            buying your first family home or upgrading, we guide you with local expertise.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-serif text-primary mb-10 text-center">
            San Diego FAQ
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

      {/* CTA Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Explore San Diego?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Tell us about your family and we&apos;ll recommend the best San Diego neighborhoods for your
                situation, budget, and lifestyle.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Find Homes in San Diego" />
          </div>
        </div>
      </section>

      {/* Schema */}
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

