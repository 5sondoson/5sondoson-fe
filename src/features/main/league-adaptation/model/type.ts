export interface AdaptationPlayer {
  playerId: string
  name: string
  position: string
  team: string
  league: string
  age: number
  currentMarketValue: number
  imageUrl: string
  adaptScore: number
  predictedMv: number
}

export interface LeagueAdaptationResult {
  label: string
  players: AdaptationPlayer[]
}

export interface AdaptationListProps {
  currentData: LeagueAdaptationResult | null
}

export interface AdaptationItemProps {
  player: AdaptationPlayer
  rank: number
  animationDelay: number
}
