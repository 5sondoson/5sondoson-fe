import type { TopLeagueKey } from '@/shared/lib/league'
export type Position = 'FW' | 'MF' | 'DF' | 'GK'

export interface AdaptScoreCardProps {
  leagueLabel: TopLeagueKey
  leagueFlag: string
  total: number
}

export type StatComparisonSectionProps = {
  position: Position
  currentStats: Record<string, number>
  predictedStats: Record<string, number>
  statChanges: Record<string, number>
  leagueLabel: string
  teamLabel: string
}

export type StatCardProps = {
  title: string
  stats: Record<string, number>
  position: Position
  isPredict: boolean
  changes?: Record<string, number>
}

export type PlayerPredictionProps = {
  position: Position
}
