import type {
  GrowthSummary,
  PlayerDetailResponse,
  Position,
  SeasonHistory,
} from '@/entities/player'

export type PlayerDetailTabLabel = '선수 히스토리' | '이적 예측'

export type PlayerDetailTabSlug = 'history' | 'transfer'

export interface PlayerDetailHeaderProps {
  player: PlayerDetailResponse
  scrollProgress?: number
}

export interface PlayerDetailDesktopHeaderProps {
  player: PlayerDetailResponse
  scrollProgress: number
}

export interface PlayerDetailMobileHeaderProps {
  player: PlayerDetailResponse
  scrollProgress: number
}

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
