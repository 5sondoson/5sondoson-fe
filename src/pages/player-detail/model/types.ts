import type { PlayerDetailResponse, SeasonHistory } from '@/entities/player'

export type PlayerDetailTabLabel = '선수 히스토리' | '이적 예측'

export interface PlayerDetailHeaderProps {
  player: PlayerDetailResponse
  scrollProgress?: number
}

export interface PlayerDetailDesktopHeaderProps {
  player: PlayerDetailResponse
  scrollProgress: number
}

export interface PlayerDetailMobileHeaderProps {
  player: PlayerDetailResponse
  scrollProgress: number
}

export interface MarketValueChartProps {
  history: SeasonHistory[]
}
