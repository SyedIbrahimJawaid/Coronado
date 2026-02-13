/**
 * Guide content template
 * For buyer question guides published biweekly
 */

export interface GuideContent {
  // Basic Info
  title: string
  slug: string
  description: string
  tag: 'Buyer Guide' | 'Lifestyle' | 'Neighborhood' | 'Market' | 'Process'
  
  // Introduction
  intro: string // Why this guide matters
  
  // Main Content Sections
  sections: Array<{
    heading: string
    content: string
    subsections?: Array<{
      subheading: string
      content: string
    }>
  }>
  
  // Key Takeaways
  takeaways: string[]
  
  // FAQs (3-5 related questions)
  faqs: Array<{
    q: string
    a: string
  }>
  
  // Related Links
  relatedLinks: Array<{
    label: string
    href: string
  }>
  
  // Metadata
  lastUpdated: string
  publishDate: string
}

/**
 * Priority guide topics
 */
export const guideTopics = [
  {
    title: 'HOA Fees in Coronado',
    slug: 'hoa-fees-coronado',
    tag: 'Buyer Guide' as const,
    description: 'Complete breakdown of HOA fees by building and area in Coronado.',
  },
  {
    title: 'Parking in Coronado',
    slug: 'parking-coronado',
    tag: 'Buyer Guide' as const,
    description: 'Street-by-street guide to parking in Coronado neighborhoods.',
  },
  {
    title: 'Coronado Shores vs Village',
    slug: 'shores-vs-village',
    tag: 'Neighborhood' as const,
    description: 'Detailed comparison of Coronado Shores and Village neighborhoods.',
  },
  {
    title: 'Schools in Coronado',
    slug: 'coronado-schools',
    tag: 'Lifestyle' as const,
    description: 'Complete guide to schools in Coronado: proximity, quality, enrollment.',
  },
  {
    title: 'Beach Access Points in Coronado',
    slug: 'beach-access-coronado',
    tag: 'Lifestyle' as const,
    description: 'Exact locations and rules for beach access in Coronado.',
  },
  {
    title: 'Moving to Coronado',
    slug: 'moving-to-coronado',
    tag: 'Buyer Guide' as const,
    description: 'Complete relocation guide for new Coronado residents.',
  },
  {
    title: 'Cost of Living in Coronado',
    slug: 'cost-of-living',
    tag: 'Lifestyle' as const,
    description: 'Detailed expense breakdown for living in Coronado.',
  },
  {
    title: 'Coronado Cays Guide',
    slug: 'coronado-cays-guide',
    tag: 'Neighborhood' as const,
    description: 'Complete guide to Coronado Cays: dock access, HOA, lifestyle.',
  },
  {
    title: 'Waterfront Property Guide',
    slug: 'waterfront-property-guide',
    tag: 'Buyer Guide' as const,
    description: 'Guide to waterfront properties: docks, access, regulations.',
  },
  {
    title: 'Luxury Home Market in Coronado',
    slug: 'luxury-home-market',
    tag: 'Market' as const,
    description: 'What defines luxury in Coronado and current pricing trends.',
  },
] as const

