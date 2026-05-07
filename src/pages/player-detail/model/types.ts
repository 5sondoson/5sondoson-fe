import HistoryIcon from '@/assets/icons/history.svg?react'
import TransferIcon from '@/assets/icons/transfer.svg?react'
import { type PlayerDetailResponse } from '@/entities/player'

export const PLAYER_DETAIL_TABS = [
  { label: '선수 히스토리', icon: HistoryIcon },
  { label: '이적 예측', icon: TransferIcon },
] as const

export type PlayerDetailTabLabel = (typeof PLAYER_DETAIL_TABS)[number]['label']

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
