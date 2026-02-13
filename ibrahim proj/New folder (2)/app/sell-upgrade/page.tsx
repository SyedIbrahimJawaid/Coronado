import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Sell & Upgrade — Move Into the Home Your Family Needs",
  description:
    "Your family grew. Your home didn't. We help families in Southern California sell their current home and move into the right one with a clear plan.",
  keywords: ["sell and buy home same time california", "upgrade to bigger home with kids", "sell home because too small"],
};

const timeline = [
  {
    phase: "Phase 1",
    title: "Evaluate & Plan",
    items: [
      "Assess your current home's market value",
      "Define what your family needs in the next home",
      "Create a sell → buy timeline that avoids gaps",
      "Connect with lender for pre-approval",
    ],
  },
  {
    phase: "Phase 2",
    title: "Prepare & List",
    items: [
      "Strategic home prep (not over-renovation)",
      "Professional photography & listing",
      "Market positioning for maximum value",
      "Begin coordinated home search simultaneously",
    ],
  },
  {
    phase: "Phase 3",
    title: "Sell & Buy",
    items: [
      "Negotiate your sale for best terms",
      "Align closing dates to minimize disruption",
      "Manage contingencies and bridge solutions",
      "Coordinate inspections on both sides",
    ],
  },
  {
    phase: "Phase 4",
    title: "Transition & Settle",
    items: [
      "Move planning and logistics support",
      "Connect with partners for family-ready upgrades",
      "Baby-safe preparations in new home",
      "You focus on family — we handle the rest",
    ],
  },
];

const faqs = [
  {
    q: "Can I sell and buy at the same time?",
    a: "Yes, and it's what we specialize in. We create a coordinated timeline so you're not stuck between homes or carrying two mortgages longer than necessary.",
  },
  {
    q: "What if my home doesn't sell fast enough?",
    a: "We prepare for this. Our plan includes contingency strategies — bridge financing, extended occupancy, or timeline adjustments — so you're never caught off guard.",
  },
  {
    q: "Do I need to renovate before selling?",
    a: "Not always. We'll advise on high-impact, low-cost improvements that maximize value without over-investing. Some homes sell best as-is.",
  },
  {
    q: "How do you handle the overlap period?",
    a: "We negotiate rent-back agreements, coordinate closing dates, and plan moves so the transition is as smooth as possible for your family.",
  },
];

export default function SellAndUpgradePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
              Sell & Upgrade
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Your family grew. <span className="italic">Your home didn&apos;t.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              We help families in Southern California sell their current home and move into the right one —
              with a clear plan, smart timing, and calm execution.
            </p>
            <Link href="/get-started" className="btn-primary text-lg">
              Create My Sell &amp; Upgrade Plan
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              The Upgrade Dilemma
            </h2>
            <p className="text-body-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              You love your home, but it&apos;s not enough anymore. An extra bedroom, a bigger yard, a safer
              street — your family needs more. But selling while buying feels impossible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="card">
              <div className="text-3xl mb-3">😰</div>
              <h3 className="font-semibold text-primary mb-2 font-sans">Timing Stress</h3>
              <p className="text-body-secondary text-sm">What if your home sells before you find the next one?</p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-primary mb-2 font-sans">Financial Overlap</h3>
              <p className="text-body-secondary text-sm">Two mortgages, bridge loans, and budget uncertainty.</p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="font-semibold text-primary mb-2 font-sans">Family Disruption</h3>
              <p className="text-body-secondary text-sm">Moving with a baby or during pregnancy adds complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-3">
              Your Transition Plan
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              A Clear Path From Here to There
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase) => (
              <div key={phase.phase} className="card">
                <div className="text-sm font-bold text-clay uppercase tracking-wider mb-2">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-serif text-primary mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body-secondary">
                      <svg className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center">
            Common Questions
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Ready to Upgrade?
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-4">
                Tell us about your situation. We&apos;ll create a transition plan that works for your family&apos;s
                timeline, budget, and comfort.
              </p>
              <p className="text-body-secondary leading-relaxed">
                Whether you need to sell first, buy first, or do both simultaneously — we&apos;ve got a plan for that.
              </p>
            </div>
            <LeadForm variant="sidebar" ctaLabel="Create My Sell & Upgrade Plan" />
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

