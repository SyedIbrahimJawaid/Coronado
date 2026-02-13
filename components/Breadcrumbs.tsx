import Link from 'next/link'
import { BreadcrumbListSchema } from '@/lib/schema/breadcrumbs'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  showSchema?: boolean
}

/**
 * Breadcrumb navigation component
 * Includes visual breadcrumbs and schema markup
 */
export default function Breadcrumbs({ items, showSchema = true }: BreadcrumbsProps) {
  return (
    <>
      {showSchema && <BreadcrumbListSchema items={items} />}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-secondary">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-accent" aria-hidden="true">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-primary font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

