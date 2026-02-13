import Link from 'next/link'

interface InternalLinksProps {
  links?: Array<{ label: string; href: string }>
  title?: string
}

export default function InternalLinks({ links, title }: InternalLinksProps) {
  const defaultLinks = [
    { label: 'Coronado Real Estate Hub', href: '/coronado/' },
    { label: 'Market Report', href: '/coronado/market-report/' },
  ]

  const linkList = links || defaultLinks

  if (!linkList || linkList.length === 0) {
    return null
  }

  return (
    <div className="bg-background rounded-xl p-6 border-l-4 border-accent">
      {title && (
        <h3 className="font-semibold text-primary mb-3">{title}</h3>
      )}
      <ul className="flex flex-wrap gap-4 text-sm">
        {linkList.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-secondary hover:text-primary underline transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

