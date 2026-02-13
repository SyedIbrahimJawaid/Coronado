import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <div className="bg-white/10 rounded-lg p-4 mb-4 flex items-center justify-center h-20 w-full max-w-[200px]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="bg-white/10 rounded-lg p-3 mb-4 flex items-center justify-center h-16 w-full max-w-[180px]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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

