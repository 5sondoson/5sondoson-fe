import type { SeasonHistory, GrowthSummary } from '@/entities/player'
import type { Position } from '@/shared/model/types'

export interface MarketValueChartProps {
  history: SeasonHistory[]
}

export interface GrowthSummaryCardsProps {
  summary: GrowthSummary
  seasonCount: number
}

export interface SeasonStatsSectionProps {
  history: SeasonHistory[]
  position: Position
}

export interface SeasonStatsTableProps {
  history: SeasonHistory[]
}

export interface SeasonStatsChartsProps {
  history: SeasonHistory[]
  position: Position
}

export interface PlayerHistoryTabProps {
  position: Position
}
