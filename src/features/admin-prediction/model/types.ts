import type { TopLeagueKey } from '@/shared/lib/league'

export type PredictionStepKey =
  | 'pipeline'
  | 'performance'
  | 'market-value'
  | 'similar-players'

export interface PredictionStepDef {
  key: PredictionStepKey
  path: string
  label: string
  failurePolicy: string
  kind: 'pipeline' | 'step'
}

export interface ExecutionLogEntry {
  id: string
  stepKey: PredictionStepKey
  stepLabel: string
  leagueKey: TopLeagueKey
  leagueLabel: string
  triggeredAt: number
}
