import type { PlayerDetailResponse } from '@/entities/player'
import type { Position } from '@/shared/model/types'

export type KeyStat = { label: string; value: number }

export type StatsData = {
  marketValue: number
  keyStats: KeyStat[]
}

export type PredictedStatsData = StatsData & {
  marketValueChangeRate: number
}

export type StatChangesData = {
  marketValue: number
  keyStats: KeyStat[]
}

export interface AdaptScoreCardProps {
  leagueLabel: string
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
  player: PlayerDetailResponse
  playerId: number
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

export interface PredictionTooltipPayloadItem {
  dataKey?: string | number
  value?: number | string
  name?: string
}

export interface PredictionTooltipProps {
  active?: boolean
  payload?: PredictionTooltipPayloadItem[]
  label?: string | number
}

export interface PredictionCurrentStats {
  marketValue: number
  keyStats: KeyStat[]
}

export interface PredictionPredictedStats {
  marketValue: number
  marketValueChangeRate: number
  keyStats: KeyStat[]
}

export interface PredictionStatChanges {
  marketValue: number
  keyStats: KeyStat[]
}

export interface AdaptScoreBreakdown {
  leagueAdaptabilityScore: number
  performanceScore: number
  marketValueScore: number
  consistencyScore: number
}

export interface AdaptScore {
  total: number
  breakdown: AdaptScoreBreakdown
}

export interface SimilarPlayer {
  player: {
    playerId: number
    name: string
    nationality: string
    position: string
    team: string
    league: string
    age: number
    marketValue: number
    imageUrl: string
    keyStats: KeyStat[]
  }
  similarityScore: number
}

export interface PlayerPredictionResponseProps {
  data: {
    currentStats: PredictionCurrentStats
    predictedStats: PredictionPredictedStats | null
    statChanges: PredictionStatChanges | null
    adaptScore: AdaptScore | null
    similarPlayers: {
      results: SimilarPlayer[]
    }
  }
}
