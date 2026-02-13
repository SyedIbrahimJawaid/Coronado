interface ProsConsProps {
  pros: string[]
  cons: string[]
}

/**
 * Pros & Cons component
 * Balanced assessment for neighborhood pages
 */
export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
        <h3 className="font-semibold text-primary mb-3">Pros</h3>
        <ul className="text-secondary text-sm space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
        <h3 className="font-semibold text-primary mb-3">Cons</h3>
        <ul className="text-secondary text-sm space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

