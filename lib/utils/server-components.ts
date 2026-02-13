/**
 * Server component utilities for data fetching
 * These functions are safe to use in Server Components
 */

import { getMarketData } from '@/lib/api/market'
import { getFeaturedListings } from '@/lib/api/listings'
import type { MarketData } from '@/lib/types/api'
import type { Listing } from '@/lib/types/api'

/**
 * Fetch market data for server components
 * Returns null if unavailable - page still renders
 */
export async function fetchMarketDataForPage(): Promise<MarketData | null> {
  try {
    return await getMarketData()
  } catch (error) {
    console.error('Error fetching market data:', error)
    return null
  }
}

/**
 * Fetch featured listings for server components
 * Returns empty array if unavailable - page still renders
 */
export async function fetchFeaturedListingsForPage(
  limit: number = 6
): Promise<Listing[]> {
  try {
    return await getFeaturedListings(limit)
  } catch (error) {
    console.error('Error fetching featured listings:', error)
    return []
  }
}

