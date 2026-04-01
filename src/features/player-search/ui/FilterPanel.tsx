import { useState } from 'react'
import { LEAGUE_OPTIONS, POSITION_OPTIONS } from '../model/constants'
import { type FilterPanelProps } from '../model/types'

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
                <div className="flex items-center gap-1 rounded-lg bg-page p-1">
                  {LEAGUE_OPTIONS.map((league) => (
                    <button
                      key={league}
                      onClick={() => setSelectedLeague(league)}
                      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                        selectedLeague === league
                          ? 'bg-brand text-black'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {league}
                    </button>
                  ))}
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
                      {position}
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
                <select
                  value={selectedLeague}
                  onChange={(e) => setSelectedLeague(e.target.value)}
                  className="w-full rounded-lg bg-page px-3 py-2.5 text-sm text-white outline-none ring-1 ring-border focus:ring-brand"
                >
                  {LEAGUE_OPTIONS.map((league) => (
                    <option key={league} value={league}>
                      {league}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500">
                  포지션
                </span>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full rounded-lg bg-page px-3 py-2.5 text-sm text-white outline-none ring-1 ring-border focus:ring-brand"
                >
                  {POSITION_OPTIONS.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
