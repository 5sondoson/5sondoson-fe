import { useState } from 'react'
import { getLeagueOptionFlag, getLeagueDisplayName } from '@/shared/lib/league'
import { Dropdown } from '@/shared/ui/Dropdown'
import { type DropdownOption } from '@/shared/model/types'
import { LEAGUE_OPTIONS, POSITION_OPTIONS } from '../model/constants'
import { type FilterPanelProps } from '../model/types'

const leagueDropdownOptions: DropdownOption[] = LEAGUE_OPTIONS.map(
  (league) => ({
    value: league,
    label: league === '전체' ? league : getLeagueDisplayName(league),
    flagUrl: getLeagueOptionFlag(league),
  }),
)

const positionDropdownOptions: DropdownOption[] = POSITION_OPTIONS.map(
  (position) => ({
    value: position,
    label: position,
  }),
)

export function FilterPanel({ isOpen }: FilterPanelProps) {
  const [selectedLeague, setSelectedLeague] = useState('전체')
  const [selectedPosition, setSelectedPosition] = useState('전체')

  return (
    <div
      className={`grid transition-all duration-300 ease-in-out grid-rows-[1fr] ${isOpen ? 'sm:grid-rows-[1fr]' : 'sm:grid-rows-[0fr]'}`}
    >
      <div className="overflow-hidden">
        <div className="border-b border-t border-border border-t-white/10 bg-surface px-6 py-4">
          <div className="mx-auto max-w-5xl">
            <div className="hidden flex-col gap-4 sm:flex">
              <div className="flex items-center gap-4">
                <span className="w-10 shrink-0 text-xs font-semibold text-gray-500">
                  리그
                </span>
                <div className="flex items-center gap-1 overflow-x-auto rounded-lg bg-page p-1">
                  {LEAGUE_OPTIONS.map((league) => {
                    const flag = getLeagueOptionFlag(league)
                    return (
                      <button
                        key={league}
                        onClick={() => setSelectedLeague(league)}
                        className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                          selectedLeague === league
                            ? 'bg-brand text-black'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {flag && (
                          <img
                            src={flag}
                            alt={league}
                            className="h-3 w-4 object-cover"
                          />
                        )}
                        {league === '전체'
                          ? '전체'
                          : getLeagueDisplayName(league)}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 shrink-0 text-xs font-semibold text-gray-500">
                  포지션
                </span>
                <div className="flex items-center gap-1 rounded-lg bg-page p-1">
                  {POSITION_OPTIONS.map((position) => (
                    <button
                      key={position}
                      onClick={() => setSelectedPosition(position)}
                      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                        selectedPosition === position
                          ? 'bg-brand text-black'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {position === '전체' ? '전체' : position}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:hidden">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500">
                  리그
                </span>
                <Dropdown
                  options={leagueDropdownOptions}
                  value={selectedLeague}
                  onChange={setSelectedLeague}
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500">
                  포지션
                </span>
                <Dropdown
                  options={positionDropdownOptions}
                  value={selectedPosition}
                  onChange={setSelectedPosition}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
