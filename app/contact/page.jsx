import LeadForm from '@/components/LeadForm'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Contact Crown Coronado | Get in Touch',
  description: 'Contact Crown Coronado for real estate inquiries, property consultations, and market insights.',
  canonical: '/contact/',
})

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif text-primary mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-secondary text-center mb-12">
            Have questions about Coronado real estate? We're here to help.
          </p>

          <LeadForm
            content={{
              title: 'Contact Us',
              subtitle: "Fill out the form below and we'll get back to you soon.",
              fields: [
                {
                  key: 'name',
                  label: 'Your Name',
                  type: 'text',
                  required: true,
                },
                {
                  key: 'email',
                  label: 'Your Email',
                  type: 'email',
                  required: true,
                },
                {
                  key: 'phone',
                  label: 'Phone (optional)',
                  type: 'tel',
                  required: false,
                },
                {
                  key: 'message',
                  label: 'Message',
                  type: 'textarea',
                  required: true,
                },
              ],
              submitLabel: 'Send Message',
              privacyNote: 'We respect your privacy and will never share your information.',
            }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

