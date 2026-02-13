import Script from 'next/script'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbListProps {
  items: BreadcrumbItem[]
}

/**
 * BreadcrumbList schema
 * Should be added to all inner pages
 */
export function BreadcrumbListSchema({ items }: BreadcrumbListProps) {
  const baseUrl = 'https://crowncoronado.com'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

