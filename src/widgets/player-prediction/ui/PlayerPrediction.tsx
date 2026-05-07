import LeagueSelector from '@/shared/ui/LeagueSelector'
import { TOP_LEAGUE_TABS } from '@/features/main/league-adaptation/model/constants'
import { useState } from 'react'
import type { TopLeagueKey } from '@/shared/lib/league'
// import { predictionMockData } from '../model/predictionMockData'

export function PlayerPrediction() {
  const [selected, setSelected] = useState<TopLeagueKey>('EPL')

  return (
    <div className="mx-auto max-w-5xl px-4 py-4">
      <div className="bg-card/60 outline-none border border-line/10 ring-1 ring-border rounded-lg p-1">
        <div className="flex gap-2">
          {TOP_LEAGUE_TABS.map((tab) => (
            <LeagueSelector
              key={tab.key}
              leagueKey={tab.key}
              flag={tab.flag}
              label={tab.label}
              isActive={selected === tab.key}
              onClick={setSelected}
              variant="prediction"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
