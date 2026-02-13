import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Terms of Service | Crown Coronado',
  description: 'Terms of service for Crown Coronado real estate website.',
  canonical: '/terms/',
})

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-secondary mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Real Estate Services</h2>
              <p className="text-secondary mb-4">
                Crown Coronado provides real estate information and services. All property information 
                is subject to verification and may change without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Market Data Disclaimer</h2>
              <p className="text-secondary mb-4">
                Market data provided on this website is for informational purposes only. Individual 
                results may vary. The indicators and signals presented help estimate market conditions 
                but do not guarantee timing outcomes. Property-specific factors, individual constraints, 
                and market dynamics can significantly impact results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Property Listings</h2>
              <p className="text-secondary mb-4">
                Property listings are provided for informational purposes. All property information, 
                including but not limited to price, availability, and features, is subject to change 
                without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Limitation of Liability</h2>
              <p className="text-secondary mb-4">
                Crown Coronado shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from the use of this website or its services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Contact Us</h2>
              <p className="text-secondary">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="/contact/" className="text-primary hover:underline">our contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

