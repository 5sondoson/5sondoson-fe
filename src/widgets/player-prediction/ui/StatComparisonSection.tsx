import type { StatComparisonSectionProps } from '../model/type'
import { StatCard } from './StatCard'
import { StatChartSection } from './StatChartSection'

export function StatComparisonSection({
  currentStats,
  predictedStats,
  statChanges,
  leagueLabel,
  teamLabel,
}: StatComparisonSectionProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <StatCard
          title={`현재 (${teamLabel})`}
          stats={currentStats}
          isPredict={false}
        />
        <StatCard
          title={`예측 (${leagueLabel})`}
          stats={predictedStats}
          isPredict={true}
          changes={statChanges}
        />
      </div>
      <StatChartSection
        currentStats={currentStats}
        predictedStats={predictedStats}
      />
    </>
  )
}
