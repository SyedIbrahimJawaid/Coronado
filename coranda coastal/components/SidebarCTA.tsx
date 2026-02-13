import Link from 'next/link'
import Image from 'next/image'

export default function SidebarCTA() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div>
        {/* Logo */}
        <div className="relative h-20 w-full mb-4 flex items-center justify-center">
          <Image
            src="/crown-coronado-logo.png"
            alt="Crown Coronado - Coronado Island • San Diego"
            width={180}
            height={72}
            className="object-contain h-full w-auto"
            priority
          />
        </div>
        <h2 className="text-2xl font-serif text-primary mb-2">
          Find Your Place in Coronado
        </h2>
        <p className="text-secondary text-sm mb-4">
          Homes, condos, waterfront – plus off-market access.
        </p>
        <div className="relative h-32 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-accent/20" />
          <Image
            src="/hero-coronado.jpg"
            alt="Coronado"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/off-market/"
          className="block w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors text-center font-medium"
        >
          Get the Coronado Hot Sheet
        </Link>
        <Link
          href="/coronado/homes-for-sale/"
          className="block w-full border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center font-medium"
        >
          View Homes for Sale
        </Link>
      </div>
    </div>
  )
}

