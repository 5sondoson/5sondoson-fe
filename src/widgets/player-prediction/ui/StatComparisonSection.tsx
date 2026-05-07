import type { StatComparisonSectionProps } from '../model/type'
import { StatCard } from './StatCard'
import { StatChartSection } from './StatChartSection'

export function StatComparisonSection({
  position,
  currentStats,
  predictedStats,
  statChanges,
  leagueLabel,
  teamLabel,
}: StatComparisonSectionProps) {
  return (
    <div>
      <div className="flex gap-4 mt-4">
        <StatCard
          title={`현재 (${teamLabel})`}
          stats={currentStats}
          position={position}
          isPredict={false}
        />
        <StatCard
          title={`예측 (${leagueLabel})`}
          stats={predictedStats}
          position={position}
          isPredict={true}
          changes={statChanges}
        />
      </div>
      <StatChartSection
        position={position}
        currentStats={currentStats}
        predictedStats={predictedStats}
      />
    </div>
  )
}
