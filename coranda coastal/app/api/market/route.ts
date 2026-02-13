import { NextResponse } from 'next/server'
import { getMarketData } from '@/lib/api/market'

/**
 * API route for market data
 * Uses ISR caching - revalidates every hour
 */
export async function GET() {
  try {
    const marketData = await getMarketData()

    if (!marketData) {
      return NextResponse.json(
        { error: 'Market data not available' },
        { status: 503 }
      )
    }

    return NextResponse.json(marketData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error in market API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

