import type { NeighborhoodContent } from '@/lib/content/neighborhood-template'

interface LocalIntelProps {
  localIntel: NeighborhoodContent['localIntel']
}

/**
 * Local Intel component
 * Displays 8-15 specific local details for neighborhood pages
 */
export default function LocalIntel({ localIntel }: LocalIntelProps) {
  return (
    <div className="bg-background rounded-xl p-6 mb-6">
      <h3 className="text-xl font-serif text-primary mb-4">Local Intel</h3>
      
      {localIntel.streets.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Streets & Character</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.streets.map((street, i) => (
              <li key={i}>• {street}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.pocketFeel.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Pocket Feel</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.pocketFeel.map((feel, i) => (
              <li key={i}>• {feel}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.beachAccessPoints.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Beach Access Points</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.beachAccessPoints.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.parkingPatterns.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Parking Patterns</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.parkingPatterns.map((pattern, i) => (
              <li key={i}>• {pattern}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.schoolNotes.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Schools</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.schoolNotes.map((note, i) => (
              <li key={i}>• {note}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.shoppingClusters.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Shopping & Amenities</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.shoppingClusters.map((cluster, i) => (
              <li key={i}>• {cluster}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.trafficPatterns && localIntel.trafficPatterns.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Traffic & Commute</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.trafficPatterns.map((pattern, i) => (
              <li key={i}>• {pattern}</li>
            ))}
          </ul>
        </div>
      )}

      {localIntel.walkability && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Walkability</h4>
          <p className="text-secondary text-sm">{localIntel.walkability}</p>
        </div>
      )}

      {localIntel.publicTransit && localIntel.publicTransit.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">Public Transit</h4>
          <ul className="text-secondary text-sm space-y-2">
            {localIntel.publicTransit.map((transit, i) => (
              <li key={i}>• {transit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

