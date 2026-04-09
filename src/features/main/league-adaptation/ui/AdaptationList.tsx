import AdaptationItem from '../../../player-search/ui/AdaptationItem'
import type { AdaptationListProps } from '../model/type'

export default function AdaptationList({ currentData }: AdaptationListProps) {
  return (
    <>
      {!currentData ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <span className="text-2xl">🏆</span>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            위 리그 중 하나를 선택하면
            <br />
            이적 적응도 상위 선수 5명을 보여드려요
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500">이적 적응도 Top 5</span>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
              {currentData.label}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {currentData.players.map((player, i) => (
              <AdaptationItem
                key={player.id}
                player={player}
                rank={i + 1}
                animationDelay={i * 60}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
