import { useNavigate } from 'react-router'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg?react'
import {
  getLeagueDisplayName,
  getLeagueEmblem,
  getNationalityFlag,
} from '@/shared/lib/league'
import {
  formatContractExpiry,
  formatMarketValue,
  getPositionColor,
} from '@/entities/player'
import { type PlayerDetailMobileHeaderProps } from '../model/types'

export function PlayerDetailMobileHeader({
  player,
  scrollProgress,
}: PlayerDetailMobileHeaderProps) {
  const navigate = useNavigate()
  const leagueEmblem = getLeagueEmblem(player.league)
  const isScrolled = scrollProgress > 0.1

  return (
    <div className="sm:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-card hover:text-white"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="relative shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-card ring-1 ring-line/20">
            {player.imageUrl ? (
              <img
                src={player.imageUrl}
                alt={player.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-linear-to-b from-card to-page" />
            )}
          </div>
          <img
            src={getNationalityFlag(player.nationality)}
            alt={player.nationality}
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-3 object-cover ring-1 ring-surface"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-bold text-white">
              {player.name}
            </span>
            <span
              className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-bold ${getPositionColor(player.position)}`}
            >
              {player.position}
            </span>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-[10px] text-gray-500">시장가치</div>
          <div className="text-sm font-bold text-white">
            {formatMarketValue(player.currentMarketValue)}
          </div>
        </div>
      </div>

      {/* 추가 정보: 스크롤 시 접힘 */}
      <div
        className="grid"
        style={{
          gridTemplateRows: isScrolled ? '0fr' : '1fr',
          opacity: isScrolled ? 0 : 1,
          transition:
            'grid-template-rows 250ms ease-out, opacity 200ms ease-out',
        }}
      >
        <div className="overflow-hidden">
          <div className="border-b border-line/12 px-4 py-2.5">
            <div className="flex flex-wrap items-center gap-x-1.5 text-xs text-gray-500">
              <span className="shrink-0">{player.team}</span>
              <span>·</span>
              <span className="inline-flex shrink-0 items-center gap-1">
                {leagueEmblem && (
                  <img
                    src={leagueEmblem}
                    alt={player.league}
                    className="h-3.5 w-3.5 rounded-sm bg-white object-contain p-0.5"
                  />
                )}
                {getLeagueDisplayName(player.league)}
              </span>
              <span>·</span>
              <span className="shrink-0">{player.age}세</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-gray-500">
              <span className="shrink-0">
                {player.height}cm / {player.weight}kg
              </span>
              <span>·</span>
              <span className="shrink-0">
                계약 만료: {formatContractExpiry(player.contractExpires)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
