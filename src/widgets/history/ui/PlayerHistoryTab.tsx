import { usePlayerHistory } from '@/entities/player'
import type { PlayerHistoryTabProps } from '../model/type'
import { GrowthSummaryCards } from './GrowthSummaryCards'
import { MarketValueChart } from './MarketValueChart'
import { SeasonStatsSection } from './SeasonStatsSection'

export function PlayerHistoryTab({
  playerId,
  position,
}: PlayerHistoryTabProps) {
  const { data, isLoading } = usePlayerHistory(playerId)

  if (isLoading) {
    return (
      <div className="rounded-xl bg-card/80 p-8 text-center text-sm text-gray-400">
        불러오는 중...
      </div>
    )
  }

  if (!data || data.history.length === 0) {
    return (
      <div className="rounded-xl bg-card/80 p-8 text-center text-sm text-gray-400">
        해당 선수의 시즌 데이터가 존재하지 않습니다.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <GrowthSummaryCards
        summary={data.growthSummary}
        seasonCount={data.history.length}
      />
      <MarketValueChart history={data.history} />
      <SeasonStatsSection history={data.history} position={position} />
    </div>
  )
}
