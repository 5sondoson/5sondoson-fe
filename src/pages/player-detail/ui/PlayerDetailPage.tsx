import { useSearchParams, useParams } from 'react-router'
import { useHeaderVisibility } from '@/shared/lib/useHeaderVisibility'
import { APP_HEADER_HEIGHT } from '@/widgets/header'
import { useDetectElementHeight } from '@/shared/lib/useDetectElementHeight'
import { useScrollProgress } from '@/shared/lib/useScrollProgress'
import { PlayerDetailHeader } from './PlayerDetailHeader'
import { usePlayerDetail } from '@/entities/player'
import { PlayerDetailTabs } from './PlayerDetailTabs'
import { PlayerPrediction } from '@/widgets/player-prediction/ui/PlayerPrediction'
import type { PlayerDetailTabLabel, PlayerDetailTabSlug } from '../model/types'
import { PlayerHistoryTab } from '@/widgets/player-history/ui/PlayerHistoryTab'

const TAB_LABEL_BY_SLUG: Record<PlayerDetailTabSlug, PlayerDetailTabLabel> = {
  history: '선수 히스토리',
  transfer: '이적 예측',
}

const TAB_SLUG_BY_LABEL: Record<PlayerDetailTabLabel, PlayerDetailTabSlug> = {
  '선수 히스토리': 'history',
  '이적 예측': 'transfer',
}

const DEFAULT_TAB: PlayerDetailTabLabel = '선수 히스토리'

export function PlayerDetailPage() {
  const { id } = useParams<{ id: string }>()
  const isAppHeaderVisible = useHeaderVisibility()
  const { targetRef: fixedRef, detectedHeight: fixedAreaHeight } =
    useDetectElementHeight<HTMLDivElement>()
  const { sectionRef: headerRef, scrollProgress } = useScrollProgress()
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: player, isLoading } = usePlayerDetail(id)

  const tabParam = searchParams.get('tab')
  const activeTab: PlayerDetailTabLabel =
    tabParam && tabParam in TAB_LABEL_BY_SLUG
      ? TAB_LABEL_BY_SLUG[tabParam as PlayerDetailTabSlug]
      : DEFAULT_TAB

  const handleTabChange = (label: PlayerDetailTabLabel) => {
    setSearchParams((prev) => {
      prev.set('tab', TAB_SLUG_BY_LABEL[label])
      return prev
    })
  }

  const appHeaderOffset = isAppHeaderVisible ? APP_HEADER_HEIGHT : 0

  return (
    <div className="min-h-screen bg-page">
      <div
        ref={fixedRef}
        className="fixed left-0 right-0 z-20 transition-[top] duration-300"
        style={{ top: appHeaderOffset }}
      >
        <div ref={headerRef}>
          {player && (
            <PlayerDetailHeader
              player={player}
              scrollProgress={scrollProgress}
            />
          )}
        </div>
        <div className="border-b border-line/12 bg-surface/95">
          <PlayerDetailTabs activeTab={activeTab} onChange={handleTabChange} />
        </div>
      </div>

      <div style={{ paddingTop: APP_HEADER_HEIGHT + fixedAreaHeight }}>
        {isLoading ? (
          <div className="flex min-h-[50vh] items-center justify-center text-gray-400">
            불러오는 중...
          </div>
        ) : !player ? (
          <div className="flex min-h-[50vh] items-center justify-center text-gray-400">
            선수를 찾을 수 없습니다.
          </div>
        ) : (
          <div className="mx-auto max-w-5xl px-4 py-6">
            {activeTab === '선수 히스토리' && (
              <PlayerHistoryTab
                playerId={player.playerId}
                position={player.position}
              />
            )}
            {activeTab === '이적 예측' && (
              <PlayerPrediction
                player={player}
                playerId={player.playerId}
                position={player.position}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
