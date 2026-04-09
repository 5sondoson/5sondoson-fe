import type { TopLeagueKey } from '@/shared/lib/league'

export interface AdaptationPlayer {
  player_id: string
  name: string
  position: string
  team: string
  league: string
  age: number
  current_market_value: number
  image_url: string
  adapt_score: number
  predicted_mv: number
}

export interface LeagueAdaptationResult {
  label: string
  players: AdaptationPlayer[]
}

export interface AdaptationListProps {
  currentData: LeagueAdaptationResult | null
}

export interface LeagueSelectorProps {
  leagueKey: TopLeagueKey
  flag: string
  label: string
  isActive: boolean
  onClick: (key: TopLeagueKey) => void
}
