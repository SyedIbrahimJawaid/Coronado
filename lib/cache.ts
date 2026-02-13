/**
 * Caching utilities for API responses
 * Uses Next.js ISR (Incremental Static Regeneration) and edge caching
 */

export const CACHE_TIMES = {
  // Listing data - updates frequently
  LISTINGS: 60, // 60 seconds

  // Market data - updates monthly
  MARKET: 3600, // 1 hour (ISR revalidation)

  // CMS content - updates infrequently
  CMS: 86400, // 24 hours

  // Static content
  STATIC: 31536000, // 1 year
} as const

/**
 * Get cache headers for Next.js fetch
 */
export function getCacheHeaders(revalidate: number) {
  return {
    next: {
      revalidate,
    },
  }
}

/**
 * Cache key generator for consistent caching
 */
export function getCacheKey(prefix: string, params?: Record<string, any>): string {
  if (!params || Object.keys(params).length === 0) {
    return prefix
  }

  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&')

  return `${prefix}:${sortedParams}`
}

