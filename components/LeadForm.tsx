'use client'

import { useState } from 'react'
import { trackFormSubmit } from '@/lib/analytics'

interface LeadFormProps {
  content?: {
    title?: string
    subtitle?: string
    fields?: Array<{
      key: string
      label: string
      type: string
      required?: boolean
      options?: string[]
    }>
    submitLabel?: string
    privacyNote?: string
  }
}

export default function LeadForm({ content }: LeadFormProps) {
  const defaultContent = {
    title: 'Join the Coronado Hot Sheet',
    subtitle: 'Weekly: new listings + price changes + off-market when available.',
    fields: [],
    submitLabel: 'Subscribe',
    privacyNote: 'No spam. Unsubscribe anytime.',
  }

  const data = content || defaultContent
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track form submission
    trackFormSubmit('lead-form', 'contact')
    
    try {
      const response = await fetch('/api/email/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          segments: ['hot-sheet'],
        }),
      })

      if (response.ok) {
        alert('Thank you for subscribing to the Hot Sheet!')
        // Reset form
        setFormData({})
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-serif text-primary mb-2">{data.title}</h2>
      {data.subtitle && <p className="text-secondary mb-8">{data.subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {data.fields?.map((field) => (
          <div key={field.key}>
            {field.type === 'select' ? (
              <select
                required={field.required}
                value={formData[field.key] || ''}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
                className="w-full px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              >
                <option value="">{field.label}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                placeholder={field.label}
                required={field.required}
                value={formData[field.key] || ''}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              />
            ) : (
              <input
                type={field.type}
                placeholder={field.label}
                required={field.required}
                value={formData[field.key] || ''}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
                className="w-full px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-medium"
        >
          {data.submitLabel}
        </button>

        {data.privacyNote && (
          <p className="text-sm text-secondary text-center">{data.privacyNote}</p>
        )}
      </form>
    </section>
  )
}

