import { useHeaderVisibility } from '@/shared/lib/useHeaderVisibility'
import { APP_HEADER_HEIGHT } from '@/widgets/header'
import { useDetectElementHeight } from '@/shared/lib/useDetectElementHeight'
import { useScrollProgress } from '@/shared/lib/useScrollProgress'
import { PlayerDetailHeader } from './PlayerDetailHeader'
import { type PlayerDetailResponse } from '@/entities/player'
import { PlayerDetailTabs } from './PlayerDetailTabs'
import { PlayerPrediction } from '@/widgets/player-prediction/ui/PlayerPrediction'

const MOCK_PLAYER_DETAIL: PlayerDetailResponse = {
  playerId: '1',
  name: 'Viktor Gyokeres',
  position: 'FW',
  team: 'Sporting CP',
  league: 'primeira liga',
  age: 26,
  nationality: 'SE',
  currentMarketValue: 85000000,
  imageUrl: undefined,
  teamLogoUrl: undefined,
  contractExpires: '2026-06',
  height: 185,
  weight: 85,
}

export function PlayerDetailPage() {
  const isAppHeaderVisible = useHeaderVisibility()
  const { targetRef: fixedRef, detectedHeight: fixedAreaHeight } =
    useDetectElementHeight<HTMLDivElement>()
  const { sectionRef: headerRef, scrollProgress } = useScrollProgress()

  const appHeaderOffset = isAppHeaderVisible ? APP_HEADER_HEIGHT : 0

  return (
    <div className="min-h-screen bg-page">
      <div
        ref={fixedRef}
        className="fixed left-0 right-0 z-20 transition-[top] duration-300"
        style={{ top: appHeaderOffset }}
      >
        <div ref={headerRef}>
          <PlayerDetailHeader
            player={MOCK_PLAYER_DETAIL}
            scrollProgress={scrollProgress}
          />
        </div>
        <div className="border-b border-line/12 bg-surface/95">
          <PlayerDetailTabs />
        </div>
        <PlayerPrediction position={MOCK_PLAYER_DETAIL.position} />
      </div>

      <div style={{ paddingTop: APP_HEADER_HEIGHT + fixedAreaHeight }}>
        <div className="h-[500vh]" />
      </div>
    </div>
  )
}
