import { env } from '@/lib/config/env'
import type { MarketData, MarketReport, MarketTimeSeries } from '@/lib/types/api'

const REVALIDATE_TIME = 3600 // 1 hour ISR revalidation (market data updates monthly)

/**
 * Fetch current market KPIs
 * Uses ISR caching - market data updates monthly
 */
export async function getMarketData(): Promise<MarketData | null> {
  if (!env.marketApiUrl || !env.marketApiKey) {
    console.warn('Market API not configured, returning null')
    return null
  }

  try {
    const response = await fetch(`${env.marketApiUrl}/kpis`, {
      headers: {
        'Authorization': `Bearer ${env.marketApiKey}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    })

    if (!response.ok) {
      throw new Error(`Market API error: ${response.statusText}`)
    }

    return (await response.json()) as MarketData
  } catch (error) {
    console.error('Error fetching market data:', error)
    return null
  }
}

/**
 * Fetch market time series data
 */
export async function getMarketTimeSeries(
  days: number = 365
): Promise<MarketTimeSeries[]> {
  if (!env.marketApiUrl || !env.marketApiKey) {
    return []
  }

  try {
    const response = await fetch(
      `${env.marketApiUrl}/timeseries?days=${days}`,
      {
        headers: {
          'Authorization': `Bearer ${env.marketApiKey}`,
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: REVALIDATE_TIME,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Market API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data.timeSeries || []
  } catch (error) {
    console.error('Error fetching market time series:', error)
    return []
  }
}

/**
 * Get formatted market report with KPIs and time series
 */
export async function getMarketReport(): Promise<MarketReport | null> {
  try {
    const [marketData, timeSeries] = await Promise.all([
      getMarketData(),
      getMarketTimeSeries(365),
    ])

    if (!marketData) {
      return null
    }

    return {
      kpis: [
        {
          label: 'Median Price',
          value: formatCurrency(marketData.medianPrice),
        },
        {
          label: 'Active Listings',
          value: marketData.activeListings,
        },
        {
          label: 'New Listings (30d)',
          value: marketData.newListings30d,
        },
        {
          label: 'Avg Days on Market',
          value: marketData.avgDaysOnMarket,
        },
        {
          label: 'Price / Sq Ft',
          value: formatCurrency(marketData.pricePerSqft),
        },
        {
          label: 'Sold (30d)',
          value: marketData.sold30d,
        },
      ],
      timeSeries,
      lastUpdated: marketData.lastUpdated,
      updateFrequency: 'monthly',
    }
  } catch (error) {
    console.error('Error fetching market report:', error)
    return null
  }
}

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value.toFixed(0)}`
}

