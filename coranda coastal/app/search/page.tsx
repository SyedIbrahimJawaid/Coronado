import { Metadata } from 'next'
import SearchCard from '@/components/SearchCard'

// Search pages are noindex with canonical to base listing pages
export const metadata: Metadata = {
  title: 'Search Coronado Real Estate | Crown Coronado',
  description: 'Search Coronado Island homes, condos, and properties.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://crowncoronado.com/coronado/homes-for-sale/',
  },
}

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif text-primary mb-8">Search Coronado Properties</h1>
        <div className="bg-white rounded-xl shadow-md p-6">
          <SearchCard />
        </div>
      </div>
    </div>
  )
}

