import type { TopLeagueKey } from '@/shared/lib/league'

export interface AdaptScoreCardProps {
  leagueLabel: TopLeagueKey
  leagueFlag: string
  total: number
}
