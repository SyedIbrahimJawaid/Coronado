import { env } from '@/lib/config/env'
import type {
  EmailSubscriber,
  EmailSubscriptionResponse,
} from '@/lib/types/api'

/**
 * Subscribe email to Hot Sheet list
 * Non-blocking - doesn't throw errors to avoid blocking page render
 */
export async function subscribeToHotSheet(
  subscriber: EmailSubscriber
): Promise<EmailSubscriptionResponse> {
  if (!env.emailProviderApiKey) {
    console.warn('Email provider not configured')
    return {
      success: false,
      message: 'Email service not configured',
    }
  }

  try {
    // This is a placeholder - replace with actual email provider API
    // Examples: Mailchimp, ConvertKit, SendGrid, etc.
    const response = await fetch('/api/email/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.emailProviderApiKey}`,
      },
      body: JSON.stringify({
        ...subscriber,
        segments: ['hot-sheet', ...(subscriber.segments || [])],
      }),
    })

    if (!response.ok) {
      throw new Error(`Email API error: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      success: true,
      subscriberId: data.id,
      message: 'Successfully subscribed',
    }
  } catch (error) {
    console.error('Error subscribing to Hot Sheet:', error)
    // Return success: false but don't throw - allow page to continue
    return {
      success: false,
      message: 'Failed to subscribe. Please try again.',
    }
  }
}

/**
 * Subscribe with buyer segment
 */
export async function subscribeAsBuyer(
  subscriber: EmailSubscriber
): Promise<EmailSubscriptionResponse> {
  return subscribeToHotSheet({
    ...subscriber,
    segments: ['buyers', ...(subscriber.segments || [])],
  })
}

/**
 * Subscribe with investor segment
 */
export async function subscribeAsInvestor(
  subscriber: EmailSubscriber
): Promise<EmailSubscriptionResponse> {
  return subscribeToHotSheet({
    ...subscriber,
    segments: ['investors', ...(subscriber.segments || [])],
  })
}

/**
 * Subscribe with international segment
 */
export async function subscribeAsInternational(
  subscriber: EmailSubscriber
): Promise<EmailSubscriptionResponse> {
  return subscribeToHotSheet({
    ...subscriber,
    segments: ['international', ...(subscriber.segments || [])],
  })
}

