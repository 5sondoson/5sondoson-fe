import { getLeagueEmblem, getNationalityFlag } from '@/shared/lib/league'
import { type PlayerCardProps } from '../model/types'
import { formatMarketValue, getPositionColor } from '../model/utils'

export function PlayerGridCard({
  name,
  nameKo,
  nationality,
  team,
  league,
  position,
  rating,
  marketValue,
  keyStats,
  imageUrl,
}: PlayerCardProps) {
  const leagueEmblem = getLeagueEmblem(league)

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-card/60 ring-1 ring-[#94A3B8]/12 transition-all hover:bg-card/80 hover:ring-brand">
      <div className="relative h-44 w-full overflow-hidden bg-black">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-linear-to-b from-card to-page" />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-page via-page/50 to-transparent" />

        <img
          src={getNationalityFlag(nationality)}
          alt={nationality}
          className="absolute right-2 top-2 h-3 w-4 object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span
            className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${getPositionColor(position)}`}
          >
            {position}
          </span>
          <div className="mt-1 truncate text-sm font-bold text-white transition-colors group-hover:text-brand">
            {name}
          </div>
          {nameKo && (
            <div className="truncate text-[11px] text-gray-400">{nameKo}</div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="truncate text-xs text-gray-400">{team}</span>
        {leagueEmblem && (
          <img
            src={leagueEmblem}
            alt={league}
            className="h-4 w-4 shrink-0 rounded-sm bg-white object-contain p-0.5"
          />
        )}
      </div>

      <div className="border-t border-white/5">
        <div className="flex flex-col divide-y divide-white/5 border-b border-white/5">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between px-3 py-2"
            >
              <span className="text-[11px] text-gray-500">{stat.label}</span>
              <span className="text-xs font-semibold text-gray-300">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-white/5">
          <div className="flex flex-col items-center py-3">
            <span className="text-lg font-bold text-white">
              {rating ?? '–'}
            </span>
            <span className="text-[10px] text-gray-500">평점</span>
          </div>
          <div className="flex flex-col items-center py-3">
            <span className="text-lg font-bold text-brand">
              {formatMarketValue(marketValue)}
            </span>
            <span className="text-[10px] text-gray-500">시장가치</span>
          </div>
        </div>
      </div>
    </div>
  )
}
