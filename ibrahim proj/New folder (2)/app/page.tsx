import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const checkItems = [
  "Baby on the way – but your home feels too small",
  "You need to find and move within a few months",
  "Buying or selling feels overwhelming",
  "Renovations need to be quick and safe",
];

const steps = [
  {
    number: "1",
    title: "Tell Us Your Situation",
    description:
      "Fill out a short form about your timeline, budget, and what matters to your family. No pressure — just clarity.",
    icon: (
      <svg className="w-8 h-8 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "We Build Your Plan",
    description:
      "We review your needs and create a clear plan — whether it's buying, selling and upgrading, or coordinating a fast move.",
    icon: (
      <svg className="w-8 h-8 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Move With Confidence",
    description:
      "From house hunting to closing to getting your home family-ready — we coordinate every step so you can focus on what matters.",
    icon: (
      <svg className="w-8 h-8 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Buy a Family Home",
    description:
      "We find homes that fit your family's life — the right space, safe neighborhood, and close to what matters.",
    href: "/buy",
    icon: (
      <svg className="w-10 h-10 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Sell & Upgrade",
    description:
      "Outgrown your home? We help you sell smart and move up — with a clear plan, not chaos.",
    href: "/sell-upgrade",
    icon: (
      <svg className="w-10 h-10 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "45-Day Express",
    description:
      "When time is tight, we accelerate everything — finding, closing, and preparing your new home.",
    href: "/express",
    icon: (
      <svg className="w-10 h-10 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Home Preparation",
    description:
      "We coordinate baby-safe renovations, nursery setup, and essential upgrades through trusted partners.",
    href: "/how-we-help",
    icon: (
      <svg className="w-10 h-10 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const areas = [
  {
    name: "San Diego County",
    description: "Coastal charm meets family-friendly communities",
    href: "/areas/san-diego-county",
    cities: "Carlsbad, Encinitas, Chula Vista, Oceanside, Escondido",
  },
  {
    name: "Orange County",
    description: "Top-rated schools and suburban living",
    href: "/areas/orange-county",
    cities: "Irvine, Mission Viejo, Laguna Niguel, Tustin, Fullerton",
  },
  {
    name: "Los Angeles County",
    description: "Diverse neighborhoods for every family",
    href: "/areas/los-angeles-county",
    cities: "Pasadena, Burbank, Long Beach, Torrance, Santa Clarita",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[600px] md:min-h-[620px] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6">
              A Home That&apos;s Ready for Your Family –{" "}
              <span className="italic">When It Matters Most</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-lg">
              We help growing families in San Diego find, sell, and prepare the right home — so you
              can focus on your health, your baby, and what really matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/get-started" className="btn-primary text-lg !py-4 !px-10">
                Create My Family Home Plan
              </Link>
              <Link
                href="/how-we-help"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 text-center"
              >
                How Our Process Works
              </Link>
            </div>
            <p className="text-white/70 text-sm tracking-wide">
              Family-Focused &bull; Trusted Partners &bull; SoCal Experts
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ IS THIS YOUR SITUATION + FORM ═══════════════════ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Situation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Is This Your Situation?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-8">
                Starting or growing a family comes with pressure and excitement. We&apos;re here to
                take some of the burden away.
              </p>
              <ul className="space-y-4">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-sage flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="12" opacity="0.2" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body-secondary text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Form */}
            <div>
              <LeadForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              How It Works
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Three clear steps to your family&apos;s next home. No surprises, no pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-clay/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-clay uppercase tracking-wider mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{step.title}</h3>
                <p className="text-body-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              Everything Your Growing Family Needs
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              From finding the right home to making it family-ready — we handle the coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card hover:shadow-md transition-shadow group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                  {service.title}
                </h3>
                <p className="text-body-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-clay text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ AREAS ═══════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Areas We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              Southern California Communities
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              We know the neighborhoods, schools, and communities that matter to growing families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card hover:shadow-md transition-shadow group overflow-hidden"
              >
                <div className="h-40 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 bg-gradient-to-br from-primary/10 to-sage/20 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                  {area.name}
                </h3>
                <p className="text-body-secondary text-sm mb-3">{area.description}</p>
                <p className="text-xs text-body-secondary/70">{area.cities}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/areas" className="btn-secondary">
              Explore All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST / TESTIMONIAL PLACEHOLDER ═══════════════════ */}
      <section className="section-padding bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Helping Families Move Forward With Confidence
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Every family we serve gets a personalized plan, transparent communication, and a team that genuinely
            cares about your well-being during one of life&apos;s biggest transitions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-clay mb-2">100%</div>
              <div className="text-white/60 text-sm">Family-Focused</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-clay mb-2">3</div>
              <div className="text-white/60 text-sm">Counties Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-clay mb-2">45</div>
              <div className="text-white/60 text-sm">Day Express Option</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-6">
            Ready to Start Your Family&apos;s Home Plan?
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mb-8">
            Tell us about your situation and we&apos;ll create a clear, calm plan — no matter your timeline.
          </p>
          <Link href="/get-started" className="btn-primary text-lg !py-4 !px-12">
            Create My Family Home Plan
          </Link>
        </div>
      </section>
    </>
  );
}

