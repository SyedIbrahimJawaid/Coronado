import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "How We Help", href: "/how-we-help" },
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell & Upgrade", href: "/sell-upgrade" },
    { label: "45-Day Express", href: "/express" },
  ],
  Areas: [
    { label: "San Diego County", href: "/areas/san-diego-county" },
    { label: "Orange County", href: "/areas/orange-county" },
    { label: "Los Angeles County", href: "/areas/los-angeles-county" },
    { label: "All Areas", href: "/areas" },
  ],
  Company: [
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Get Started", href: "/get-started" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclosures", href: "/disclosures" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-white/70">
          Buyer Agents for Families in Southern California · Serving San Diego · Orange County · Los Angeles
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4L3 18h5v16h10v-10h4v10h10V18h5L20 4z"
                  fill="currentColor"
                  opacity="0.2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-bold">ReadyNest</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Family-focused real estate for growing families in Southern California.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4 font-sans">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} ReadyNest Real Estate. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center max-w-xl">
            ReadyNest Real Estate is a licensed real estate brokerage in the State of California.
            DRE License #XXXXXXXX. All information is deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}

