import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "45-Day Express — Accelerated Home Buying for Families",
  description:
    "A calm plan — even when time is tight. In qualified situations, we coordinate an accelerated path to secure the right home in as few as 45 days.",
  keywords: ["fast home buying california", "move before due date", "accelerated closing", "time-sensitive move"],
};

const qualifications = [
  "Pre-approved or pre-approvable financing",
  "Clear budget range and area preference",
  "Decision-ready (both partners aligned)",
  "Flexible on cosmetic preferences",
  "Available for viewings within 48 hours",
];

const expressTimeline = [
  {
    day: "Day 1–5",
    title: "Qualification & Strategy",
    description: "We assess your readiness, confirm financing, define must-haves vs nice-to-haves, and build your accelerated search plan.",
  },
  {
    day: "Day 5–15",
    title: "Intensive Search",
    description: "Focused showing schedule. We pre-screen homes so you only visit strong candidates. Daily communication on new listings.",
  },
  {
    day: "Day 15–20",
    title: "Offer & Negotiation",
    description: "Strategic offer positioning. We negotiate terms, timeline, and contingencies optimized for speed without sacrificing protection.",
  },
  {
    day: "Day 20–40",
    title: "Escrow & Coordination",
    description: "Inspections, appraisal, and loan processing — all coordinated tightly. We manage every deadline so nothing slips.",
  },
  {
    day: "Day 40–45",
    title: "Close & Prepare",
    description: "Final walkthrough, closing, keys. We immediately connect you with partners for any family-ready preparations needed.",
  },
];

const boundaries = [
  {
    title: "Express is not for everyone",
    description: "We only recommend this pathway when the buyer is truly qualified and the situation warrants speed. We'll be honest if a standard timeline is better for you.",
  },
  {
    title: "Speed ≠ carelessness",
    description: "We accelerate the process, not cut corners. Inspections, due diligence, and negotiation still happen — just on a compressed schedule.",
  },
  {
    title: "No permit-heavy work included",
    description: "Post-close preparations focus on cosmetic updates, safety upgrades, and nursery setup. Major renovations requiring permits follow standard timelines.",
  },
];

export default function ExpressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-clay rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              45-Day Express
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              A calm plan — <span className="italic">even when time is tight.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              In qualified situations, we coordinate an accelerated path to secure the right home and
              start preparation immediately after keys.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Check Express Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Is Express Right for You?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-8">
                The 45-Day Express pathway is designed for families who need to move quickly —
                often because of a pregnancy, a lease ending, or a sudden life change. But speed only
                works when the fundamentals are in place.
              </p>

              <h3 className="text-lg font-semibold text-primary mb-4 font-sans">
                You may qualify if:
              </h3>
              <ul className="space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-clay flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-body-secondary">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-primary/5 border-primary/10">
              <div className="text-center">
                <div className="text-6xl font-bold text-clay mb-2 font-serif">45</div>
                <div className="text-lg font-semibold text-primary mb-4">Days or Less</div>
                <p className="text-body-secondary text-sm leading-relaxed">
                  From strategy session to keys in hand. Not every situation qualifies, but when it does,
                  we execute with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              The Express Timeline
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              Every day is planned. Every step is coordinated. Here&apos;s how 45 days breaks down.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {expressTimeline.map((item) => (
              <div key={item.day} className="flex gap-6 items-start">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-sm font-bold text-clay">{item.day}</span>
                </div>
                <div className="w-px bg-border self-stretch relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-clay rounded-full" />
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-primary mb-1 font-sans">{item.title}</h3>
                  <p className="text-body-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Honest Boundaries
            </h2>
            <p className="text-body-secondary text-lg max-w-2xl mx-auto">
              We believe in transparency. Here&apos;s what Express does and doesn&apos;t include.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {boundaries.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg font-serif text-primary mb-3">{b.title}</h3>
                <p className="text-body-secondary text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Check Your Express Eligibility
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-4">
                Fill out the form and select &quot;Up to 45 days&quot; as your timeline. We&apos;ll assess
                your situation and let you know if Express is right for you.
              </p>
              <p className="text-body-secondary text-sm">
                If Express isn&apos;t the right fit, we&apos;ll recommend the best pathway for your family.
                No pressure either way.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Check Express Eligibility" />
          </div>
        </div>
      </section>
    </>
  );
}

