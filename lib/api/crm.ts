import { env } from '@/lib/config/env'
import type { CRMLead, CRMWebhookResponse } from '@/lib/types/api'

/**
 * Send lead to CRM via webhook
 * Non-blocking - fires and forgets, doesn't block page render
 */
export async function sendLeadToCRM(
  lead: CRMLead
): Promise<CRMWebhookResponse> {
  if (!env.crmWebhookUrl) {
    // CRM is optional, so silently fail
    return {
      success: false,
      message: 'CRM not configured',
    }
  }

  try {
    // Fire and forget - don't await to avoid blocking
    fetch(env.crmWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toISOString(),
        source: 'website',
      }),
    }).catch((error) => {
      // Log error but don't throw
      console.error('Error sending lead to CRM:', error)
    })

    // Return success immediately (optimistic)
    return {
      success: true,
      message: 'Lead sent to CRM',
    }
  } catch (error) {
    console.error('Error sending lead to CRM:', error)
    return {
      success: false,
      message: 'Failed to send lead to CRM',
    }
  }
}

