import { NextRequest, NextResponse } from 'next/server'
import { subscribeToHotSheet } from '@/lib/api/email'
import type { EmailSubscriber } from '@/lib/types/api'

/**
 * API route for email subscriptions
 * Handles Hot Sheet signups and other email subscriptions
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const subscriber: EmailSubscriber = {
      email: body.email,
      name: body.name,
      phone: body.phone,
      segments: body.segments || [],
      tags: body.tags || [],
      metadata: body.metadata || {},
    }

    // Validate email
    if (!subscriber.email || !subscriber.email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    const result = await subscribeToHotSheet(subscriber)

    if (result.success) {
      return NextResponse.json(result, { status: 200 })
    } else {
      return NextResponse.json(result, { status: 500 })
    }
  } catch (error) {
    console.error('Error in email subscribe route:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

