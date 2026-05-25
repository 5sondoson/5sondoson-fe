import { formatMarketValue } from '@/entities/player'
import { TOP_LEAGUE_TABS } from '@/shared/lib/league'
import { LABEL_MAP } from '../model/predictionConstants'
import type { SimilarPlayer } from '../model/type'

interface SimilarPlayerCardProps {
  data: SimilarPlayer
  rank: 1 | 2 | 3
}

const RANK_STYLES = {
  1: {
    bar: 'bg-[#1d9e75]',
    badge: 'bg-[#e1f5ee] text-[#085041]',
  },
  2: {
    bar: 'bg-[#888780]',
    badge: 'bg-[#f1efe8] text-[#444441]',
  },
  3: {
    bar: 'bg-[#ba7517]',
    badge: 'bg-[#faeeda] text-[#633806]',
  },
}

export default function SimilarPlayerCard({
  data,
  rank,
}: SimilarPlayerCardProps) {
  const { player, similarityScore } = data
  const style = RANK_STYLES[rank]

  const marketValueLabel = formatMarketValue(player.marketValue)

  return (
    <div className="flex flex-col rounded-xl border border-text-gray/20 bg-card/60 overflow-hidden w-full">
      <div className={`h-1 w-full ${style.bar}`} />

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${style.badge}`}
          >
            {Math.round(similarityScore * 100)}% 일치
          </span>
          <span className="text-xs text-text-gray bg-button px-2.5 py-1 rounded-md">
            {player.position}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-11 h-11 rounded-lg object-cover bg-zinc-800"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              {player.name}
            </span>
            <span className="text-xs text-text-gray">{player.team}</span>
            <span className="text-xs text-text-gray">
              {(() => {
                const tab = TOP_LEAGUE_TABS.find((t) => t.key === player.league)
                return tab ? (
                  <span className="flex items-center gap-1">
                    <img className="w-4" src={tab.flag} alt="리그 국기" />
                    {tab.label}
                  </span>
                ) : (
                  player.league
                )
              })()}
            </span>
          </div>
        </div>

        <div
          className="grid rounded-lg p-3 bg-card divide-x divide-text-gray text-center"
          style={{
            gridTemplateColumns: `repeat(${player.keyStats.length}, 1fr)`,
          }}
        >
          {player.keyStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 ${i === 0 ? 'pr-2' : i === player.keyStats.length - 1 ? 'pl-2' : 'px-2'}`}
            >
              <span className="text-xs text-zinc-500">
                {LABEL_MAP[stat.label] ?? stat.label}
              </span>
              <span className="text-lg font-medium text-white">
                {stat.value ?? '-'}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-gray">시장가치</span>
          <span className="text-sm font-medium text-brand">
            {marketValueLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
