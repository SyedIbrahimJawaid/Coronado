import Script from 'next/script'

/**
 * WebSite schema with SearchAction
 * Should be added to homepage
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Crown Coronado',
    url: 'https://crowncoronado.com',
    description: 'Coronado Island real estate. Homes, condos, waterfront properties, and off-market access.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://crowncoronado.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

