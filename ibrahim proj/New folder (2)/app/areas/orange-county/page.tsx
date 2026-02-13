import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Family-Friendly Homes in Orange County",
  description:
    "Find family-friendly homes in Orange County, CA. ReadyNest helps growing families discover the best neighborhoods, schools, and communities in OC.",
  keywords: ["family-friendly homes orange county", "buyer agent orange county", "best family areas orange county"],
};

const cities = [
  { name: "Irvine", description: "Master-planned communities with top-rated schools" },
  { name: "Mission Viejo", description: "Lake community with excellent family amenities" },
  { name: "Laguna Niguel", description: "Hillside homes with coastal proximity" },
  { name: "Tustin", description: "Central location with historic charm" },
  { name: "Fullerton", description: "University town with diverse neighborhoods" },
  { name: "Lake Forest", description: "Suburban living with parks and trails" },
  { name: "Yorba Linda", description: "Spacious homes and highly rated schools" },
  { name: "San Clemente", description: "Spanish Village by the Sea lifestyle" },
  { name: "Aliso Viejo", description: "Newer community with family focus" },
  { name: "Dana Point", description: "Coastal living with harbor charm" },
];

const considerations = [
  {
    title: "Schools & Education",
    description: "Orange County is home to some of California's top school districts, including Irvine USD, Capistrano USD, and Placentia-Yorba Linda USD.",
  },
  {
    title: "Community & Safety",
    description: "Many OC cities consistently rank among the safest in California, with strong community associations and family programming.",
  },
  {
    title: "Outdoor Recreation",
    description: "Beach access, regional parks, hiking trails, and community pools — OC offers abundant family recreation options.",
  },
  {
    title: "Home Types & Pricing",
    description: "From townhomes in Irvine to estates in Yorba Linda. Median prices range from $800k to $2M+ depending on community.",
  },
  {
    title: "Commute Considerations",
    description: "I-5, 405, 73, and 241 toll roads connect communities. Metrolink serves north OC. Choose location based on your workplace.",
  },
];

const faqs = [
  { q: "What is the average home price in Orange County?", a: "The median home price ranges from $800k to $2M+ depending on the city. Irvine, Mission Viejo, and Lake Forest offer good family value." },
  { q: "What are the best school districts in Orange County?", a: "Irvine USD, Capistrano USD, and Placentia-Yorba Linda USD are consistently top-rated. Each serves different communities." },
  { q: "Is Orange County good for families?", a: "Orange County is one of the best family markets in California — safe communities, top schools, abundant parks, and coastal access." },
  { q: "How competitive is the Orange County housing market?", a: "OC is competitive, especially in top school districts. Having pre-approval and a clear strategy gives families an edge." },
];

export default function OrangeCountyPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/areas" className="text-white/60 hover:text-white text-sm mb-4 inline-block">
              ← Areas We Serve
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Orange County
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Top-rated schools, safe neighborhoods, and master-planned communities make Orange County
              one of the best places in California to raise a family.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Find Homes in Orange County
            </Link>
          </div>
        </div>
      </section>

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

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Family Considerations in Orange County
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

      <section className="section-padding bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            How ReadyNest Helps in Orange County
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            We know OC&apos;s neighborhoods, school zones, HOA communities, and market dynamics.
            Let us find the right fit for your family.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-serif text-primary mb-10 text-center">Orange County FAQ</h2>
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

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Explore Orange County?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed">
                Tell us about your family and we&apos;ll recommend the best OC neighborhoods for you.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Find Homes in Orange County" />
          </div>
        </div>
      </section>

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

