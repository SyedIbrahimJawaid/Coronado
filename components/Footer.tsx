import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <div className="relative h-12 w-auto mb-4">
              <Image
                src="/logo.png"
                alt="Coronado Coastal"
                width={120}
                height={48}
              />
            </div>
            <p className="text-white/80 text-sm">
              Your trusted partner for Coronado Island real estate.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/coronado/homes-for-sale/" className="text-white/80 hover:text-white">
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/coronado/condos-for-sale/" className="text-white/80 hover:text-white">
                  Condos for Sale
                </Link>
              </li>
              <li>
                <Link href="/coronado/market-report/" className="text-white/80 hover:text-white">
                  Market Report
                </Link>
              </li>
              <li>
                <Link href="/off-market/" className="text-white/80 hover:text-white">
                  Off-Market Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/contact/" className="hover:text-white">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Crown Coronado. All rights reserved. |{' '}
            <Link href="/privacy/" className="hover:text-white/80">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms/" className="hover:text-white/80">
              Terms of Service
            </Link>
          </p>
          <p className="mt-2">
            Market data is for informational purposes only. Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  )
}

