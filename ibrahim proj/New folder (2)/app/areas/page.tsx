import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Serve — Southern California Family Neighborhoods",
  description:
    "Explore family-friendly neighborhoods in San Diego, Orange County, and Los Angeles. ReadyNest helps growing families find the right community.",
};

const counties = [
  {
    name: "San Diego County",
    slug: "san-diego-county",
    description:
      "From coastal Carlsbad to suburban Chula Vista, San Diego County offers diverse family-friendly communities with year-round sunshine, top schools, and outdoor living.",
    cities: [
      "Carlsbad", "Encinitas", "Oceanside", "Escondido", "Chula Vista",
      "La Mesa", "Poway", "San Marcos", "Vista", "El Cajon",
    ],
    highlights: ["Top-rated school districts", "Beach communities", "Affordable suburbs", "Military-friendly"],
  },
  {
    name: "Orange County",
    slug: "orange-county",
    description:
      "Orange County combines excellent schools, safe neighborhoods, and a suburban lifestyle ideal for growing families. From Irvine's master-planned communities to coastal Laguna.",
    cities: [
      "Irvine", "Mission Viejo", "Laguna Niguel", "Tustin", "Fullerton",
      "Lake Forest", "Yorba Linda", "San Clemente", "Aliso Viejo", "Dana Point",
    ],
    highlights: ["Master-planned communities", "Top public schools", "Family parks", "Low crime rates"],
  },
  {
    name: "Los Angeles County",
    slug: "los-angeles-county",
    description:
      "LA County's diverse neighborhoods offer something for every family — from Pasadena's tree-lined streets to South Bay's beach towns and the San Gabriel Valley's cultural richness.",
    cities: [
      "Pasadena", "Burbank", "Long Beach", "Torrance", "Santa Clarita",
      "Arcadia", "Redondo Beach", "Glendale", "Claremont", "Manhattan Beach",
    ],
    highlights: ["Cultural diversity", "Career opportunities", "Neighborhood variety", "Urban parks"],
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
            Areas We Serve
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Find Your Family&apos;s Neighborhood
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            We know Southern California&apos;s best family communities — the schools, parks, safety,
            and lifestyle that matter when you&apos;re growing a family.
          </p>
        </div>
      </section>

      {/* Counties */}
      <section className="section-padding bg-offwhite">
        <div className="container-max space-y-16">
          {counties.map((county, index) => (
            <div
              key={county.slug}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                  {county.name}
                </h2>
                <p className="text-body-secondary text-lg leading-relaxed mb-6">
                  {county.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {county.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-sage/20 text-primary text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/areas/${county.slug}`}
                  className="btn-primary inline-block"
                >
                  Explore {county.name}
                </Link>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-primary mb-4 font-sans">
                  Featured Cities
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {county.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/areas/${county.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-body-secondary hover:text-clay transition-colors py-1"
                    >
                      {city} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8">
            Tell us about your family&apos;s priorities — schools, commute, budget, lifestyle — and we&apos;ll suggest
            the best neighborhoods for you.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>
    </>
  );
}

