import { Metadata } from 'next'

const BASE_URL = 'https://crowncoronado.com'

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
}

export function generateMetadata(config: SEOConfig): Metadata {
  const canonicalUrl = config.canonical 
    ? (config.canonical.startsWith('http') ? config.canonical : `${BASE_URL}${config.canonical}`)
    : undefined

  return {
    title: config.title,
    description: config.description,
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(config.noindex && {
      robots: {
        index: false,
        follow: config.nofollow !== false,
      },
    }),
  }
}

