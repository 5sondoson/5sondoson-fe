import type { TopLeagueKey } from '@/shared/lib/league'
export type Position = 'FW' | 'MF' | 'DF' | 'GK'

export type KeyStat = { label: string; value: number }

export type StatsData = {
  minutes: number
  marketValue: number
  keyStats: KeyStat[]
}

export type PredictedStatsData = StatsData & {
  marketValueChangeRate: number
}

export type StatChangesData = {
  minutes: number
  marketValue: number
  keyStats: KeyStat[]
}

export interface AdaptScoreCardProps {
  leagueLabel: TopLeagueKey
  leagueFlag: string
  total: number
}

export type StatComparisonSectionProps = {
  position: Position
  currentStats: StatsData
  predictedStats: PredictedStatsData
  statChanges: StatChangesData
  leagueLabel: string
  teamLabel: string
  marketValueChangeRate: number
}

export type StatCardProps = {
  title: string
  stats: StatsData
  isPredict: boolean
  changes?: StatChangesData
}

export type PlayerPredictionProps = {
  position: Position
}

export interface StatChartSectionProps {
  currentStats: StatsData
  predictedStats: StatsData
}

export interface MarketValueSectionProps {
  currentMarketValue: number
  predictedMarketValue: number
  marketValueChangeRate: number
}
