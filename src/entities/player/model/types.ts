export interface PlayerStat {
  label: string
  value: string | number
}

export interface PlayerSearchItem {
  playerId: string
  name: string
  nameKo?: string
  nationality: string
  position: string
  team: string
  league: string
  age: number
  rating?: number
  marketValue: number
  imageUrl?: string
  keyStats: [PlayerStat, PlayerStat]
}

export interface PlayerSearchPagination {
  page: number
  size: number
  totalPages: number
  totalElements: number
}

export interface PlayerSearchResponse {
  pagination: PlayerSearchPagination
  results: PlayerSearchItem[]
}

export type PlayerCardProps = PlayerSearchItem

export type PlayerListCardProps = PlayerSearchItem & { order: number }

export interface PlayerDetailResponse {
  playerId: string
  name: string
  position: string
  team: string
  league: string
  age: number
  nationality: string
  currentMarketValue: number
  imageUrl?: string
  teamLogoUrl?: string
  contractExpires: string
  height: number
  weight: number
}
