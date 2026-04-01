import ChevronRightIcon from '@/assets/icons/chevron-right.svg?react'
import {
  getLeagueEmblem,
  getLeagueDisplayName,
  getNationalityFlag,
} from '@/shared/lib/league'
import { type PlayerListCardProps } from '../model/types'
import { formatMarketValue, getPositionColor } from '../model/utils'

export function PlayerListCard({
  order,
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
}: PlayerListCardProps) {
  const leagueEmblem = getLeagueEmblem(league)

  return (
    <div className="group flex items-center gap-5 rounded-xl bg-card/60 px-6 py-5 ring-1 ring-[#94A3B8]/12 transition-all hover:bg-card/80 hover:ring-brand">
      <span className="w-5 shrink-0 text-center text-sm text-gray-500">
        {order}
      </span>

      <div className="relative shrink-0">
        <div className="h-16 w-16 overflow-hidden rounded-lg bg-black">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-linear-to-b from-card to-page" />
          )}
        </div>
        <img
          src={getNationalityFlag(nationality)}
          alt={nationality}
          className="absolute -bottom-1 -right-1 h-2.5 w-3.5 object-cover ring-1 ring-page"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-white transition-colors group-hover:text-brand">
            {name}
          </span>
          {nameKo && <span className="text-sm text-gray-500">({nameKo})</span>}
        </div>
        <div className="mt-1 flex min-w-0 items-center gap-1 text-gray-500">
          <span className="truncate text-sm">{team}</span>
          <span className="shrink-0 text-sm">·</span>
          {leagueEmblem && (
            <img
              src={leagueEmblem}
              alt={league}
              className="inline h-5 w-5 shrink-0 rounded-sm bg-white object-contain p-0.5"
            />
          )}
          <span className="shrink-0 text-xs">
            {getLeagueDisplayName(league)}
          </span>
        </div>
      </div>

      <div className="hidden shrink-0 items-center gap-5 sm:flex">
        <div className="w-12 text-center">
          <div className="mb-1.5 text-[10px] text-gray-500">포지션</div>
          <span
            className={`rounded px-2 py-0.5 text-xs font-bold ${getPositionColor(position)}`}
          >
            {position}
          </span>
        </div>
        {keyStats.map((stat) => (
          <div key={stat.label} className="w-16 text-center">
            <div className="mb-1.5 text-[10px] leading-tight text-gray-500">
              {stat.label}
            </div>
            <div className="text-xs font-semibold text-white">{stat.value}</div>
          </div>
        ))}
        <div className="w-16 text-center">
          <div className="mb-1.5 text-[10px] text-gray-500">평점</div>
          <div className="text-xs font-semibold text-white">
            {rating ?? '–'}
          </div>
        </div>
        <div className="w-16 text-center">
          <div className="mb-1.5 text-[10px] text-gray-500">시장가치</div>
          <div className="text-xs font-semibold text-white">
            {formatMarketValue(marketValue)}
          </div>
        </div>
      </div>

      <button className="shrink-0 text-gray-600 transition-colors group-hover:text-brand">
        <ChevronRightIcon />
      </button>
    </div>
  )
}
