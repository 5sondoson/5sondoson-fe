import { LEAGUE_OPTIONS, POSITION_OPTIONS } from './constants'
import type { League } from '@/entities/player'
import type { Position } from '@/shared/model/types'

export type LeagueOption = (typeof LEAGUE_OPTIONS)[number]
export type PositionOption = (typeof POSITION_OPTIONS)[number]

export interface FilterPanelProps {
  isOpen: boolean
  onLeagueChange?: (league: League | undefined) => void
  onPositionChange?: (position: Position | undefined) => void
}

export type ViewType = 'list' | 'grid'

export interface ViewToggleProps {
  view: ViewType
  onViewChange: (view: ViewType) => void
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
