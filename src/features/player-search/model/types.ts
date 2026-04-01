import { LEAGUE_OPTIONS, POSITION_OPTIONS } from './constants'

export type LeagueOption = (typeof LEAGUE_OPTIONS)[number]
export type PositionOption = (typeof POSITION_OPTIONS)[number]

export interface FilterPanelProps {
  isOpen: boolean
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  isFilterOpen: boolean
  onFilterToggle: () => void
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
