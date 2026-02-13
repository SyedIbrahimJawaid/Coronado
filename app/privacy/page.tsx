import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Privacy Policy | Crown Coronado',
  description: 'Privacy policy for Crown Coronado real estate website.',
  canonical: '/privacy/',
})

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Information We Collect</h2>
              <p className="text-secondary mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-secondary space-y-2">
                <li>Name and contact information (email, phone)</li>
                <li>Property preferences and search criteria</li>
                <li>Information submitted through forms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">How We Use Your Information</h2>
              <p className="text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-secondary space-y-2">
                <li>Send you the Hot Sheet and property updates</li>
                <li>Respond to your inquiries</li>
                <li>Provide real estate services</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Email Communications</h2>
              <p className="text-secondary mb-4">
                If you subscribe to our Hot Sheet or other email communications, you can unsubscribe at any time 
                by clicking the unsubscribe link in any email or contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Data Security</h2>
              <p className="text-secondary mb-4">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Contact Us</h2>
              <p className="text-secondary">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="/contact/" className="text-primary hover:underline">our contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

