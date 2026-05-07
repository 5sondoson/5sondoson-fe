export type Position = 'FW' | 'MF' | 'DF' | 'GK'

export interface PlayerStat {
  label: string
  value: number | null
}

export interface PlayerSearchItem {
  playerId: number
  name: string
  nameKo?: string
  nationality: string | null
  position: string | null
  team: string | null
  league: string | null
  age: number
  marketValue: number | null
  imageUrl: string | null
  keyStats: PlayerStat[]
}

export interface PlayerSearchPagination {
  page: number
  size: number
  totalPages: number
  totalElements: number
}

export interface PlayerSearchResponse {
  data: {
    pagination: PlayerSearchPagination
    results: PlayerSearchItem[]
  }
}

export type PlayerCardProps = PlayerSearchItem

export type PlayerListCardProps = PlayerSearchItem & { order: number }

export interface PlayerDetailResponse {
  playerId: string
  name: string
  position: Position
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
