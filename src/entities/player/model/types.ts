export interface PlayerStat {
  label: string
  value: string | number
}

export interface PlayerApiItem {
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

export interface PlayerApiPagination {
  page: number
  size: number
  totalPages: number
  totalElements: number
}

export interface PlayerApiResponse {
  pagination: PlayerApiPagination
  results: PlayerApiItem[]
}

export interface PlayerCardProps {
  playerId: string
  name: string
  nameKo?: string
  nationality: string
  team: string
  league: string
  position: string
  age: number
  rating?: number
  marketValue: number
  keyStats: [PlayerStat, PlayerStat]
  imageUrl?: string
}

export interface PlayerListCardProps extends PlayerCardProps {
  order: number
}
