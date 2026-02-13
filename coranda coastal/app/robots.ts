import { MetadataRoute } from 'next'
import { env } from '@/lib/config/env'

/**
 * Robots.txt generator
 * Allows all indexable pages, blocks search pages with query params
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.siteUrl || 'https://crowncoronado.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/search', // Search pages with query params
          '/api/', // API routes
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

