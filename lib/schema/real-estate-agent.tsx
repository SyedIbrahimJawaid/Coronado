import Script from 'next/script'

/**
 * RealEstateAgent schema
 * Should be added site-wide (in layout)
 * Update with actual brokerage details
 */
export function RealEstateAgentSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Crown Coronado',
    url: 'https://crowncoronado.com',
    logo: 'https://crowncoronado.com/crown-coronado-logo.png',
    description: 'Coronado Island real estate experts specializing in homes, condos, and waterfront properties.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coronado',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Coronado',
    },
    // Update with actual contact information
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    // Update with actual brokerage information
    memberOf: {
      '@type': 'Organization',
      name: 'Brokerage Name', // Update with actual brokerage
    },
  }

  return (
    <Script
      id="real-estate-agent-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

