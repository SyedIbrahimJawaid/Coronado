import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Guides for Growing Families",
  description:
    "Helpful guides, articles, and tips for growing families navigating real estate in Southern California.",
};

const articles = [
  {
    slug: "buying-home-while-pregnant",
    title: "Buying a Home While Pregnant: A Complete Guide",
    excerpt: "Everything you need to know about timing your home purchase around your pregnancy — from pre-approval to closing before the due date.",
    category: "Buying",
    readTime: "8 min",
  },
  {
    slug: "sell-and-upgrade-with-kids",
    title: "How to Sell & Upgrade When You Have Young Kids",
    excerpt: "Practical tips for selling your current home and upgrading to a bigger space without disrupting your family's routine.",
    category: "Selling",
    readTime: "7 min",
  },
  {
    slug: "baby-proofing-new-home",
    title: "Baby-Proofing Your New Home: Essential Checklist",
    excerpt: "A room-by-room guide to making your new home safe for babies and toddlers, with cost estimates and priority levels.",
    category: "Preparation",
    readTime: "6 min",
  },
  {
    slug: "best-family-neighborhoods-san-diego",
    title: "Best Family Neighborhoods in San Diego County (2026)",
    excerpt: "Our top picks for family-friendly neighborhoods in San Diego — considering schools, safety, parks, and home values.",
    category: "Areas",
    readTime: "10 min",
  },
  {
    slug: "first-time-buyer-checklist-families",
    title: "First-Time Buyer Checklist for Growing Families",
    excerpt: "What to look for when buying your first family home — beyond bedrooms and bathrooms.",
    category: "Buying",
    readTime: "5 min",
  },
  {
    slug: "understanding-45-day-express",
    title: "Can You Really Buy a Home in 45 Days?",
    excerpt: "How our Express pathway works, who qualifies, and what to expect during an accelerated home purchase.",
    category: "Express",
    readTime: "6 min",
  },
];

const categories = ["All", "Buying", "Selling", "Preparation", "Areas", "Express"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-clay font-semibold text-sm uppercase tracking-wider mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Guides for Growing Families
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Helpful articles and guides to navigate real estate when your family is growing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-offwhite border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-white text-body-secondary hover:bg-primary/10 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.slug} className="card hover:shadow-md transition-shadow group">
                <div className="h-40 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 bg-gradient-to-br from-primary/5 to-sage/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-clay uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-body-secondary">{article.readTime} read</span>
                </div>
                <h2 className="text-lg font-serif text-primary mb-2 group-hover:text-clay transition-colors">
                  {article.title}
                </h2>
                <p className="text-body-secondary text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-clay text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-3xl font-serif text-primary mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-body-secondary text-lg max-w-xl mx-auto mb-8">
            Reading is great, but nothing beats a personalized plan. Tell us about your family and get started.
          </p>
          <Link href="/get-started" className="btn-primary text-lg">
            Create My Family Home Plan
          </Link>
        </div>
      </section>
    </>
  );
}

