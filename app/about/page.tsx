import HeroSplit from '@/components/HeroSplit'
import Steps from '@/components/Steps'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsStrip from '@/components/TestimonialsStrip'
import FinalCTA from '@/components/FinalCTA'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'About Crown Coronado | Coronado Island Real Estate',
  description: 'Meet Crown Coronado, a Coronado-first real estate team combining local expertise with AI-driven market insights to help buyers and sellers move with confidence.',
  canonical: '/about/',
})

export default function AboutPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'About Crown Coronado',
          subheadline: 'Local expertise, data-driven strategy, and white-glove service for Coronado Island buyers and sellers.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'Contact Us', href: '/contact/' },
          image: '/hero-coronado.png',
          useBackgroundImage: true,
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4">Our Story</h2>
          <p className="text-secondary mb-4">
            Crown Coronado is built around a simple idea: pairing deep local knowledge with modern market intelligence.
            We live and work on Coronado Island, so we understand the nuances that do not show up in listing photos or
            generic market reports.
          </p>
          <p className="text-secondary">
            From off-market access to pricing strategy, we guide clients with clarity and care, helping them move faster
            when it matters and negotiate with confidence.
          </p>
        </div>

        <Steps
          content={{
            title: 'How We Work',
            steps: [
              {
                title: 'Local Intelligence',
                description: 'Neighborhood-level insights on walkability, parking, micro-streets, and inventory pockets.',
              },
              {
                title: 'Data-Driven Timing',
                description: 'AI-driven signals on inventory, reductions, and demand to help clients time decisions.',
              },
              {
                title: 'Off-Market Access',
                description: 'Relationships that unlock pocket listings and pre-market opportunities when available.',
              },
              {
                title: 'White-Glove Support',
                description: 'Clear communication, proactive updates, and hands-on guidance through closing.',
              },
            ],
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <WhyChooseUs
          content={{
            title: 'Why Clients Choose Us',
            cards: [
              {
                title: 'Coronado-First Focus',
                body: 'We specialize in Coronado Island, so our advice is relevant, precise, and local.',
              },
              {
                title: 'Smart Market Strategy',
                body: 'We interpret market data into simple, actionable steps for buyers and sellers.',
              },
              {
                title: 'Negotiation Edge',
                body: 'We lead with facts and positioning to protect your timeline and value.',
              },
              {
                title: 'Long-Term Partnership',
                body: 'Clients come back for honest guidance and steady support at every stage.',
              },
            ],
            proofLine: 'Trusted by buyers and sellers across Coronado Island',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <TestimonialsStrip />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto w-full max-w-sm">
          <FinalCTA
            content={{
              title: 'Get the Weekly Coronado Hot Sheet',
              subtitle: 'New listings, price changes, and off-market opportunities delivered weekly.',
              formFields: [
                { key: 'name', label: 'Your Name', type: 'text', required: true },
                { key: 'email', label: 'Your Email', type: 'email', required: true },
              ],
              submitLabel: 'Subscribe',
              privacyNote: 'We respect your privacy. Unsubscribe anytime.',
            }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}
