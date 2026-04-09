import type { AdaptationItemProps } from '../model/type'
import {
  RANK_STYLE,
  DEFAULT_RANK_STYLE,
  getAdaptBarColor,
  getAdaptColor,
  formatMarketValue,
  getPositionColor,
} from '@/entities/player/model/utils'
import { getLeagueEmblem } from '@/shared/lib/league'

export default function AdaptationItem({
  player,
  rank,
  animationDelay,
}: AdaptationItemProps) {
  const style = RANK_STYLE[rank] ?? DEFAULT_RANK_STYLE
  const adaptColor = getAdaptColor(player.adaptScore)
  const adaptBarColor = getAdaptBarColor(player.adaptScore)
  const mvChange = player.predictedMv - player.currentMarketValue
  const mvChangeSign = mvChange >= 0 ? '+' : ''
  const leagueEmblem = getLeagueEmblem(player.league)

  return (
    <div
      className="
        group flex items-center gap-3
        px-3 py-3 sm:px-4
        rounded-xl outline-none ring-1 ring-border bg-button/70
        hover:ring-brand hover:bg-emerald-500/10 hover:text-emerald-400
        transition-all duration-150 cursor-pointer
        animate-fadeUp
      "
      style={{
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'both',
      }}
    >
      <span
        className={`w-5 text-center text-xs font-semibold flex-shrink-0 ${style.color}`}
      >
        {rank}
      </span>

      <div
        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex-shrink-0 ring-1 ${style.ring} overflow-hidden bg-white/10`}
      >
        <img
          src={player.imageUrl}
          alt={player.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            target.nextElementSibling?.classList.remove('hidden')
          }}
        />
        <div className="hidden absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-300">
          {player.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <p className="text-sm font-medium text-white truncate">
            {player.name}
          </p>
          <span className="hidden sm:inline-flex text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded flex-shrink-0">
            만 {player.age}세
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
          <span
            className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-bold ${getPositionColor(player.position)}`}
          >
            {player.position}
          </span>
          {leagueEmblem && (
            <img
              src={leagueEmblem}
              alt={player.league}
              className="inline h-5 w-5 shrink-0 rounded-sm bg-white object-contain p-0.5"
            />
          )}
          <span className="text-[11px] text-gray-500 truncate max-w-[120px] sm:max-w-none">
            {player.team}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:hidden flex-wrap">
          <span className="text-[10px] text-gray-600">
            {formatMarketValue(player.currentMarketValue)}
          </span>
          <span className="text-[10px] text-gray-500">→</span>
          <span className="text-[10px] font-medium text-white">
            {formatMarketValue(player.predictedMv)}
          </span>
          <span
            className={`text-[10px] font-medium ${mvChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}
          >
            ({mvChangeSign}
            {formatMarketValue(Math.abs(mvChange))})
          </span>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0 text-sm">
        <span className="text-gray-400">
          {formatMarketValue(player.currentMarketValue)}
        </span>
        <span className="text-gray-600">→</span>
        <span className="font-medium text-white">
          {formatMarketValue(player.predictedMv)}
        </span>
        <span
          className={`font-medium ${mvChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}
        >
          ({mvChangeSign}
          {formatMarketValue(Math.abs(mvChange))})
        </span>
      </div>

      <div className="flex flex-col ml-2 items-end gap-1.5 flex-shrink-0 min-w-[52px]">
        <span className={`text-sm font-semibold ${adaptColor}`}>
          {player.adaptScore}
          <span className="text-[10px] font-normal text-gray-500 ml-0.5">
            점
          </span>
        </span>
        <div className="w-12 sm:w-14 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full ${adaptBarColor} transition-all duration-700`}
            style={{ width: `${player.adaptScore}%` }}
          />
        </div>
      </div>
    </div>
  )
}
