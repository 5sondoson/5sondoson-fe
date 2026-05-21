import type { Position } from '@/shared/model/types'

export type Trend = 'UP' | 'DOWN' | 'FLAT'

export type League = 'ERE' | 'PRL' | 'BPL'

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
  playerId: number
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

export interface KeyStat {
  label: string
  value: number | null
}

export interface SeasonHistory {
  season: string
  marketValue: number | null
  club: string | null
  league: string | null
  clubLogoUrl: string | null
  appearances: number | null
  minutes: number | null
  ratingAverage: number | null
  keyStats: KeyStat[]
}

export interface TotalMarketValueGrowth {
  value: number | null
}

export interface PeakSeason {
  season: string
  marketValue: number
}

export interface CurrentTrend {
  trend: Trend
}

export interface GrowthSummary {
  totalMvGrowth: TotalMarketValueGrowth
  peakSeason: PeakSeason | null
  currentTrend: CurrentTrend
}

export interface PlayerHistoryResponse {
  data: {
    history: SeasonHistory[]
    growthSummary: GrowthSummary
  }
}

export interface UsePlayerSearchParams {
  keyword?: string
  page?: number
  size?: number
  league?: League
  position?: Position
  isActive?: boolean
}
