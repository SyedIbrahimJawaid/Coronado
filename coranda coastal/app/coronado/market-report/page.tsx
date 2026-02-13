import HeroSplit from '@/components/HeroSplit'
import KPIGrid from '@/components/KPIGrid'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import marketReportData from '@/data/market-report.json'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Real Estate Market Report (Updated Monthly) | Crown Coronado',
  description: 'Monthly Coronado market report with inventory, pricing, days on market, and trend insights for buyers and sellers.',
  canonical: '/coronado/market-report/',
})

export default function MarketReportPage() {
  return (
    <div className="min-h-screen">
      <HeroSplit content={marketReportData.sections.find(s => s.id === 'hero')?.content} />

      <div className="container mx-auto px-4 py-12">
        <KPIGrid content={marketReportData.sections.find(s => s.id === 'kpis')?.content} />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">Market Trends</h2>
          <p className="text-secondary mb-4">
            Our market analysis combines listing data with AI-driven insights to help you
            understand timing, inventory levels, and pricing trends.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-2">Buyer Takeaway</h3>
              <p className="text-secondary text-sm">
                When inventory rises and reductions increase, buyers often gain leverage
                (property-specific factors still matter).
              </p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-2">Seller Takeaway</h3>
              <p className="text-secondary text-sm">
                When demand is tight, pricing and presentation remain critical; overpricing
                can extend DOM and reduce leverage.
              </p>
            </div>
          </div>
        </div>

        <FAQ content={marketReportData.sections.find(s => s.id === 'faq')?.content} />

        {/* Internal Links */}
        <div className="mt-8">
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Homes for Sale', href: '/coronado/homes-for-sale/' },
              { label: 'Condos for Sale', href: '/coronado/condos-for-sale/' },
              { label: 'Coronado Shores', href: '/coronado/coronado-shores/' },
            ]}
          />
        </div>

        {/* Compliance Disclaimer */}
        <div className="bg-background rounded-xl p-6 mt-8 border-l-4 border-accent">
          <p className="text-sm text-secondary">
            <strong className="text-primary">Disclaimer:</strong> Market data is for informational purposes only. 
            Individual results may vary. The indicators and signals presented help estimate market conditions 
            but do not guarantee timing outcomes. Property-specific factors, individual constraints, and 
            market dynamics can significantly impact results.
          </p>
        </div>
      </div>
    </div>
  )
}

