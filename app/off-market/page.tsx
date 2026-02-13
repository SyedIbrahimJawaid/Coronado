import HeroSplit from '@/components/HeroSplit'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import Steps from '@/components/Steps'
import PageWrapper from '@/components/PageWrapper'
import offMarketData from '@/off-market.json'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Off-Market Homes in Coronado | Crown Coronado Hot Sheet',
  description: 'Request Coronado off-market and pocket listings. Get weekly updates, timing insights, and a buyer wishlist call with our local team.',
  canonical: '/off-market/',
})

export default function OffMarketPage() {
  return (
    <PageWrapper>
      <HeroSplit content={offMarketData.sections.find(s => s.id === 'hero')?.content} />
      
      <div className="container mx-auto px-4 py-12">
        <Steps content={offMarketData.sections.find(s => s.id === 'howItWorks')?.content} />
      </div>

      <div className="container mx-auto px-4 py-12" id="signup">
        <LeadForm content={offMarketData.sections.find(s => s.id === 'signup')?.content} />
      </div>

      <div className="container mx-auto px-4 py-12">
        <FAQ content={offMarketData.sections.find(s => s.id === 'faq')?.content} />
      </div>
    </PageWrapper>
  )
}

