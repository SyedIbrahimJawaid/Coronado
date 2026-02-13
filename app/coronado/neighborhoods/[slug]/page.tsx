import { notFound } from 'next/navigation'
import HeroSplit from '@/components/HeroSplit'
import FAQ from '@/components/FAQ'
import LocalIntel from '@/components/LocalIntel'
import ProsCons from '@/components/ProsCons'
import InternalLinks from '@/components/InternalLinks'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { NeighborhoodContent } from '@/lib/content/neighborhood-template'

// This would typically come from a CMS or data file
const neighborhoods: Record<string, Partial<NeighborhoodContent>> = {
  village: {
    title: 'Village Neighborhood',
    description: 'The heart of Coronado Island, featuring walkable streets, classic architecture, and local shops.',
    intro: 'The Village is Coronado\'s historic core, offering walkable streets, classic architecture, and a vibrant local community. This neighborhood combines historic charm with modern convenience. Located between Orange Avenue and the beach, the Village provides easy access to shops, restaurants, and the iconic Hotel del Coronado.',
    highlights: {
      bestFor: ['Walkability', 'Classic Coronado lifestyle', 'Local shopping and dining'],
      housingTypes: ['Single-family homes', 'Historic cottages', 'Select condos'],
      parking: 'Street parking and some driveways',
      beachAccess: 'Short walk to Coronado Beach',
      hoaNotes: 'Some areas have HOA restrictions',
    },
    localIntel: {
      streets: [
        'Orange Avenue (main commercial strip) - bustling with shops and restaurants',
        'C Avenue - quieter residential, tree-lined',
        '1st Street - closest to beach, higher foot traffic',
      ],
      pocketFeel: [
        'Blocks between Orange and C avenues feel quieter and more residential',
        'Area near Hotel del Coronado has more tourist activity',
      ],
      beachAccessPoints: [
        'Ocean Boulevard at 1st Street - main beach access',
        'Glorietta Bay Park - quieter access point',
      ],
      parkingPatterns: [
        'Street parking is tight after 5pm on Orange Avenue',
        'Most homes have driveways or garages',
        'Visitor parking available at public lots',
      ],
      schoolNotes: [
        'Coronado Elementary is a 5-minute walk from most Village homes',
        'Coronado Middle School is within walking distance',
      ],
      shoppingClusters: [
        'Orange Avenue between 8th and 10th has the best local shops',
        'Village Market and local boutiques throughout',
      ],
      trafficPatterns: ['Morning commute to downtown is 15 minutes via bridge'],
      noiseLevels: ['Quieter than Shores, but some street noise on main arteries'],
      walkability: 'Walk Score: 92 - most errands can be done on foot',
      publicTransit: ['Bus stops on Orange Avenue every 15 minutes'],
    },
    pros: [
      'Excellent walkability to shops, restaurants, and beach',
      'Historic charm and character',
      'Strong sense of community',
      'Close to schools',
    ],
    cons: [
      'Parking can be challenging for visitors',
      'Some street noise on main arteries',
      'Higher prices due to prime location',
    ],
    marketContext: {
      priceRange: '$1.5M - $4M+ (varies by property type and condition)',
      typicalDom: '28-45 days',
      linkToMarketReport: '/coronado/market-report/',
    },
    faqs: [
      {
        q: 'Is Village walkable?',
        a: 'Yes, Village has a Walk Score of 92. Most errands can be done on foot, with easy access to shops, restaurants, and the beach.',
      },
      {
        q: 'What is parking like in Village?',
        a: 'Street parking is available but can be tight after 5pm. Most homes have driveways or garages. Public parking lots are available for visitors.',
      },
      {
        q: 'Are there HOA fees in Village?',
        a: 'Some areas have HOA restrictions, but fees vary by specific location. Many Village homes do not have HOA fees.',
      },
    ],
    internalLinks: [
      { label: 'Coronado Homes for Sale', href: '/coronado/homes-for-sale/' },
      { label: 'Market Report', href: '/coronado/market-report/' },
    ],
  },
  'coronado-shores': {
    title: 'Coronado Shores',
    description: 'Beachfront condos with direct beach access and ocean views.',
    intro: 'Coronado Shores offers beachfront living with direct access to the Pacific Ocean. This condominium community features modern amenities and stunning views.',
    highlights: {
      bestFor: ['Beachfront living', 'Ocean views', 'Resort-style amenities'],
      housingTypes: ['Beachfront condos', 'Ocean-view units'],
      parking: 'Assigned parking spaces',
      beachAccess: 'Direct beach access',
      hoaNotes: 'HOA manages building amenities',
    },
  },
  'coronado-cays': {
    title: 'Coronado Cays',
    description: 'Waterfront community with private docks and marina access.',
    intro: 'Coronado Cays is a waterfront community featuring private docks, marina access, and boating lifestyle. Perfect for water enthusiasts.',
    highlights: {
      bestFor: ['Boating lifestyle', 'Waterfront living', 'Private docks'],
      housingTypes: ['Waterfront homes', 'Condos with dock access'],
      parking: 'Garages and driveways',
      beachAccess: 'Marina and bay access',
      hoaNotes: 'HOA manages marina and common areas',
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(neighborhoods).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const neighborhood = neighborhoods[params.slug]
  if (!neighborhood) {
    return {}
  }

  return genMeta({
    title: `${neighborhood.title} | Coronado Neighborhoods | Crown Coronado`,
    description: neighborhood.description,
    canonical: `/coronado/neighborhoods/${params.slug}/`,
  })
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const neighborhood = neighborhoods[params.slug]
  
  if (!neighborhood) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <HeroSplit
        content={{
          headline: neighborhood.title,
          subheadline: neighborhood.description,
          primaryCTA: { label: 'View Homes Here', href: '/coronado/homes-for-sale/' },
          secondaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About {neighborhood.title}</h2>
          <p className="text-secondary mb-6">{neighborhood.intro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Best For</h3>
              <ul className="text-secondary text-sm space-y-1">
                {neighborhood.highlights.bestFor.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Housing Types</h3>
              <ul className="text-secondary text-sm space-y-1">
                {neighborhood.highlights.housingTypes.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: `What makes ${neighborhood.title} unique?`,
                a: neighborhood.intro,
              },
              {
                q: 'Are there homes for sale in this neighborhood?',
                a: 'Yes, browse our listings or join the Hot Sheet for off-market opportunities.',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

