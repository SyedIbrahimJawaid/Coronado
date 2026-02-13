"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "How We Help",
    href: "/how-we-help",
  },
  {
    label: "Buy a Home",
    href: "/buy",
    children: [
      { label: "Buying Process", href: "/buy" },
      { label: "Areas We Serve", href: "/areas" },
    ],
  },
  {
    label: "Sell & Upgrade",
    href: "/sell-upgrade",
  },
  {
    label: "45-Day Express",
    href: "/express",
  },
  {
    label: "Areas",
    href: "/areas",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            className="w-9 h-9 text-primary"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4L3 18h5v16h10v-10h4v10h10V18h5L20 4z"
              fill="currentColor"
              opacity="0.15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M14 28v-6h12v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-primary tracking-tight">
              ReadyNest
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-body-secondary">
              Real Estate
            </span>
          </div>
          <span className="hidden sm:inline-block text-body-secondary text-sm ml-2 pl-2 border-l border-border">
            Real Estate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children ? setOpenDropdown(item.label) : undefined}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-body-secondary hover:text-primary transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M3 5l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-border py-2 mt-0">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-body-secondary hover:text-primary hover:bg-offwhite transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <Link href="/get-started" className="btn-primary text-sm !py-2.5 !px-6">
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container-max px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-body-secondary hover:text-primary hover:bg-offwhite rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body-secondary hover:text-primary hover:bg-offwhite rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                href="/get-started"
                className="btn-primary block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
