import SimilarPlayerCard from './SimilarPlayer'
import type { SimilarPlayer } from '../model/type'
import type { PlayerDetailResponse } from '@/entities/player'
import { TOP_LEAGUE_TABS } from '@/shared/lib/league'

interface Props {
  player: PlayerDetailResponse
  players: SimilarPlayer[]
}

export function SimilarPlayerSection({ player, players }: Props) {
  const tab = TOP_LEAGUE_TABS.find((t) => t.key === players[0].player.league)
  const flag = tab?.flag ?? ''
  const league = tab?.label ?? player.league

  return (
    <div className="rounded-2xl bg-card/60 p-6 mt-4">
      <h2 className="text-sm font-medium text-white mb-1">예측 유사 선수</h2>
      <p className="text-text-gray text-xs mb-3 flex items-center flex-wrap">
        {player.name}의 예측 퍼포먼스 지표를 기반으로
        <span className="inline-flex items-center gap-1 ml-2">
          {flag && <img className="w-3" src={flag} alt="리그 국기" />}
          {league}
        </span>
        에서 가장 유사한 선수 3인을 선발했습니다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {players.map((player) => (
          <SimilarPlayerCard key={player.player.playerId} data={player} />
        ))}
      </div>
    </div>
  )
}
