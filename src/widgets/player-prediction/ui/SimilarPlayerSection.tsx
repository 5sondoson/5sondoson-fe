import SimilarPlayerCard from './SimilarPlayer'
import type { SimilarPlayer } from '../model/type'

interface Props {
  players: SimilarPlayer[]
}

export function SimilarPlayerSection({ players }: Props) {
  return (
    <div className="rounded-2xl bg-card/60 p-6 mt-4">
      <h2 className="text-sm font-medium text-gray-400 mb-3 text-white">
        예측 유사 선수
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {players.map((player) => (
          <SimilarPlayerCard key={player.player.playerId} data={player} />
        ))}
      </div>
    </div>
  )
}
