/**
 * Neighborhood content template
 * Ensures all neighborhood pages include required information-gain elements
 */

export interface NeighborhoodContent {
  // Basic Info
  name: string
  slug: string
  title: string
  description: string
  
  // Intro (90-140 words)
  intro: string
  
  // Highlights
  highlights: {
    bestFor: string[]
    housingTypes: string[]
    parking: string
    beachAccess: string
    hoaNotes?: string
  }
  
  // Local Intel (8-15 specific details)
  localIntel: {
    streets: string[] // Specific streets and their character
    pocketFeel: string[] // Pocket feel descriptions
    beachAccessPoints: string[] // Exact beach access locations
    parkingPatterns: string[] // Street-by-street parking notes
    schoolNotes: string[] // School proximity and quality
    shoppingClusters: string[] // Specific shopping areas/stores
    trafficPatterns?: string[] // Commute and traffic notes
    noiseLevels?: string[] // Noise assessment
    walkability?: string // Walk Score or description
    publicTransit?: string[] // Transit access notes
  }
  
  // Pros & Cons (balanced assessment)
  pros: string[]
  cons: string[]
  
  // Market Context
  marketContext: {
    priceRange: string // With disclaimer
    typicalDom?: string
    linkToMarketReport: string
  }
  
  // FAQs (3-5 neighborhood-specific questions)
  faqs: Array<{
    q: string
    a: string
  }>
  
  // Internal Links
  internalLinks: Array<{
    label: string
    href: string
  }>
  
  // Metadata
  lastUpdated: string
  updateFrequency: 'monthly' | 'quarterly' | 'annually'
}

/**
 * Validate neighborhood content meets requirements
 */
export function validateNeighborhoodContent(content: NeighborhoodContent): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []

  // Check intro length (90-140 words)
  const introWords = content.intro.split(/\s+/).length
  if (introWords < 90 || introWords > 140) {
    errors.push(`Intro must be 90-140 words (currently ${introWords})`)
  }

  // Check local intel count (8-15 specific details)
  const localIntelCount =
    content.localIntel.streets.length +
    content.localIntel.pocketFeel.length +
    content.localIntel.beachAccessPoints.length +
    content.localIntel.parkingPatterns.length +
    content.localIntel.schoolNotes.length +
    content.localIntel.shoppingClusters.length +
    (content.localIntel.trafficPatterns?.length || 0) +
    (content.localIntel.noiseLevels?.length || 0) +
    (content.localIntel.publicTransit?.length || 0)

  if (localIntelCount < 8) {
    errors.push(`Local intel must include at least 8 specific details (currently ${localIntelCount})`)
  }
  if (localIntelCount > 15) {
    errors.push(`Local intel should not exceed 15 details (currently ${localIntelCount})`)
  }

  // Check pros and cons balance
  if (content.pros.length === 0) {
    errors.push('Must include at least one pro')
  }
  if (content.cons.length === 0) {
    errors.push('Must include at least one con for balanced assessment')
  }

  // Check FAQs (3-5 questions)
  if (content.faqs.length < 3) {
    errors.push(`Must include at least 3 FAQs (currently ${content.faqs.length})`)
  }
  if (content.faqs.length > 5) {
    errors.push(`Should not exceed 5 FAQs (currently ${content.faqs.length})`)
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Example neighborhood content structure
 */
export const exampleNeighborhoodContent: Partial<NeighborhoodContent> = {
  name: 'Village',
  slug: 'village',
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
  lastUpdated: new Date().toISOString(),
  updateFrequency: 'quarterly',
}

