'use client'

import { useState, useEffect } from 'react'
import type { MarketData } from '@/lib/types/api'

/**
 * Client-side hook for market data
 * Falls back gracefully if API fails
 */
export function useMarketData() {
  const [data, setData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/market')
        if (!response.ok) {
          throw new Error('Failed to fetch market data')
        }
        const marketData = await response.json()
        setData(marketData)
      } catch (err) {
        console.error('Error fetching market data:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        // Don't set data to null - keep previous data if available
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

