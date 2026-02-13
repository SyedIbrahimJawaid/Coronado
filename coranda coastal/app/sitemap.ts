import { MetadataRoute } from 'next'
import { env } from '@/lib/config/env'

/**
 * Dynamic sitemap generator
 * Includes only indexable URLs (excludes search pages with query params)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.siteUrl || 'https://crowncoronado.com'

  // Static curated landing pages (money pages)
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/coronado/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/coronado/homes-for-sale/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${base}/coronado/condos-for-sale/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${base}/coronado/luxury-homes/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${base}/coronado/waterfront-homes/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${base}/coronado/coronado-shores/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/coronado/coronado-cays/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/coronado/market-report/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/coronado/neighborhoods/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/off-market/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/buyers/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/sellers/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/guides/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Dynamic neighborhood pages
  const neighborhoodUrls: MetadataRoute.Sitemap = []
  
  try {
    if (env.cmsUrl) {
      const response = await fetch(`${env.cmsUrl}/neighborhoods`, {
        next: { revalidate: 86400 },
      })
      
      if (response.ok) {
        const neighborhoods = await response.json()
        neighborhoodUrls.push(
          ...neighborhoods.map((n: { slug: string }) => ({
            url: `${base}/coronado/neighborhoods/${n.slug}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          }))
        )
      }
    } else {
      const hardcodedNeighborhoods = [
        'village',
        'coronado-shores',
        'coronado-cays',
        'bayfront',
        'golf-course',
        'north-island',
      ]
      
      neighborhoodUrls.push(
        ...hardcodedNeighborhoods.map((slug) => ({
          url: `${base}/coronado/neighborhoods/${slug}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      )
    }
  } catch (error) {
    console.error('Error fetching neighborhoods for sitemap:', error)
  }

  // Dynamic guide pages
  const guideUrls: MetadataRoute.Sitemap = []
  
  try {
    if (env.cmsUrl) {
      const response = await fetch(`${env.cmsUrl}/guides`, {
        next: { revalidate: 86400 },
      })
      
      if (response.ok) {
        const guides = await response.json()
        guideUrls.push(
          ...guides.map((g: { slug: string }) => ({
            url: `${base}/guides/${g.slug}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          }))
        )
      }
    } else {
      const hardcodedGuides = [
        'moving-to-coronado',
        'cost-of-living',
        'coronado-shores',
      ]
      
      guideUrls.push(
        ...hardcodedGuides.map((slug) => ({
          url: `${base}/guides/${slug}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      )
    }
  } catch (error) {
    console.error('Error fetching guides for sitemap:', error)
  }

  return [...staticUrls, ...neighborhoodUrls, ...guideUrls]
}

