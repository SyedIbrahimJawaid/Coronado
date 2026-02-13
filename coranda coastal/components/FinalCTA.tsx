'use client'

import { useState } from 'react'
import { subscribeToHotSheet } from '@/lib/api/email'
import { sendLeadToCRM } from '@/lib/api/crm'
import { trackFormSubmit, trackEmailSubscribe } from '@/lib/analytics'

interface FinalCTAProps {
  content?: {
    title?: string
    subtitle?: string
    formFields?: Array<{ key: string; label: string; type: string; required?: boolean }>
    submitLabel?: string
    privacyNote?: string
  }
}

export default function FinalCTA({ content }: FinalCTAProps) {
  const defaultContent = {
    title: 'Get the Weekly Coronado Hot Sheet',
    subtitle: 'New listings, price changes, and off-market opportunities delivered weekly.',
    formFields: [
      { key: 'name', label: 'Your Name', type: 'text', required: true },
      { key: 'email', label: 'Your Email', type: 'email', required: true },
    ],
    submitLabel: 'Subscribe',
    privacyNote: 'We respect your privacy. Unsubscribe anytime.',
  }

  const data = content || defaultContent
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Subscribe to email list
      const emailResult = await fetch('/api/email/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          segments: ['hot-sheet'],
        }),
      })

      if (emailResult.ok) {
        setSubmitStatus('success')
        // Send to CRM (non-blocking)
        sendLeadToCRM({
          name: formData.name || '',
          email: formData.email,
          source: 'hot-sheet-signup',
        }).catch(() => {
          // Silently fail - CRM is optional
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-primary text-white rounded-xl shadow-lg p-6">
      <div className="text-center">
        <h2 className="text-xl font-serif mb-2">{data.title}</h2>
        {data.subtitle && <p className="text-white/90 text-sm mb-6">{data.subtitle}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          {data.formFields?.map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.label}
              required={field.required}
              value={formData[field.key] || ''}
              onChange={(e) =>
                setFormData({ ...formData, [field.key]: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-white text-sm"
            />
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-accent transition-colors font-medium w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : data.submitLabel}
          </button>

          {submitStatus === 'success' && (
            <p className="text-sm text-white mt-4">✓ Thank you for subscribing!</p>
          )}

          {submitStatus === 'error' && (
            <p className="text-sm text-white/90 mt-4">Something went wrong. Please try again.</p>
          )}

          {data.privacyNote && submitStatus === 'idle' && (
            <p className="text-sm text-white/70 mt-4">{data.privacyNote}</p>
          )}
        </form>
      </div>
    </section>
  )
}

