import { type PlayerDetailResponse } from '@/entities/player'

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
