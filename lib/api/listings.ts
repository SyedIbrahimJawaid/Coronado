import { env } from '@/lib/config/env'
import type {
  Listing,
  ListingSearchParams,
  ListingSearchResponse,
} from '@/lib/types/api'

const CACHE_TTL = 60 // 60 seconds for listings
const REVALIDATE_TIME = 3600 // 1 hour ISR revalidation

/**
 * Fetch listings with search parameters
 * Uses ISR caching and edge caching for performance
 */
export async function searchListings(
  params: ListingSearchParams = {}
): Promise<ListingSearchResponse> {
  if (!env.listingsApiUrl || !env.listingsApiKey) {
    // Fallback to empty results if API not configured
    console.warn('Listings API not configured, returning empty results')
    return {
      listings: [],
      total: 0,
      page: params.page || 1,
      limit: params.limit || 20,
      totalPages: 0,
    }
  }

  try {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, String(value))
      }
    })

    const url = `${env.listingsApiUrl}/search?${searchParams.toString()}`
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${env.listingsApiKey}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    })

    if (!response.ok) {
      throw new Error(`Listings API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data as ListingSearchResponse
  } catch (error) {
    console.error('Error fetching listings:', error)
    // Return empty results to avoid blocking page render
    return {
      listings: [],
      total: 0,
      page: params.page || 1,
      limit: params.limit || 20,
      totalPages: 0,
    }
  }
}

/**
 * Get a single listing by ID
 */
export async function getListingById(id: string): Promise<Listing | null> {
  if (!env.listingsApiUrl || !env.listingsApiKey) {
    return null
  }

  try {
    const response = await fetch(`${env.listingsApiUrl}/listings/${id}`, {
      headers: {
        'Authorization': `Bearer ${env.listingsApiKey}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    })

    if (!response.ok) {
      return null
    }

    return (await response.json()) as Listing
  } catch (error) {
    console.error(`Error fetching listing ${id}:`, error)
    return null
  }
}

/**
 * Get featured listings (for homepage, etc.)
 */
export async function getFeaturedListings(
  limit: number = 6
): Promise<Listing[]> {
  const response = await searchListings({
    status: 'active',
    limit,
  })
  return response.listings
}

