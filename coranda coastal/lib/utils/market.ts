/**
 * Utility functions for formatting and processing market data
 */

import type { MarketData, MarketKPI } from '@/lib/types/api'

/**
 * Format market data into KPI format for display
 */
export function formatMarketKPIs(marketData: MarketData | null): MarketKPI[] {
  if (!marketData) {
    // Return default/fallback KPIs
    return [
      { label: 'Median Price', value: 'N/A' },
      { label: 'Active Listings', value: 'N/A' },
      { label: 'Avg Days on Market', value: 'N/A' },
    ]
  }

  return [
    {
      label: 'Median Price',
      value: formatCurrency(marketData.medianPrice),
    },
    {
      label: 'Active Listings',
      value: marketData.activeListings.toString(),
    },
    {
      label: 'Avg Days on Market',
      value: marketData.avgDaysOnMarket.toString(),
    },
  ]
}

/**
 * Format currency values
 */
export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value.toFixed(0)}`
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

