import { MOCK_PLAYER_HISTORY_BY_POSITION } from '@/mocks/data/playerHistory'
import type { PlayerHistoryTabProps } from '../../model/types'
import { GrowthSummaryCards } from './GrowthSummaryCards'
import { MarketValueChart } from './MarketValueChart'
import { SeasonStatsSection } from './SeasonStatsSection'

export function PlayerHistoryTab({ position }: PlayerHistoryTabProps) {
  const { history, growthSummary } = MOCK_PLAYER_HISTORY_BY_POSITION[position]

  if (history.length === 0) {
    return (
      <div className="rounded-xl bg-card/80 p-8 text-center text-sm text-gray-400">
        해당 선수의 시즌 데이터가 존재하지 않습니다.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <GrowthSummaryCards
        summary={growthSummary}
        seasonCount={history.length}
      />
      <MarketValueChart history={history} />
      <SeasonStatsSection history={history} position={position} />
    </div>
  )
}
