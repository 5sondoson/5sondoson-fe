import { useState } from 'react'
import LeagueSelector from './LeagueSelector'
import { type TopLeagueKey } from '@/shared/lib/topLeague'

const TOP_LEAGUE_TABS: {
  key: TopLeagueKey
  flag: string
  label: string
}[] = [
  { key: 'EPL', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', label: '프리미어리그' },
  { key: 'LA', flag: '🇪🇸', label: '라리가' },
  { key: 'BL', flag: '🇩🇪', label: '분데스리가' },
  { key: 'SA', flag: '🇮🇹', label: '세리에 A' },
  { key: 'L1', flag: '🇫🇷', label: '리그 1' },
]

export default function LeagueAdaptationSection() {
  const [selected, setSelected] = useState<TopLeagueKey | null>(null)
  return (
    <section className="px-5 md:px-20 mx-auto max-x-5xl py-8">
      <div className="flex items-start mb-5">
        <div>
          <h2 className="text-base font-medium text-white">
            리그별 이적 적응도 탐색
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            리그를 선택하면 이적 시 적응도가 높은 선수 Top 5를 확인할 수 있어요
          </p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <div className="flex gap-2 mb-5">
          {TOP_LEAGUE_TABS.map((tab) => (
            <LeagueSelector
              key={tab.key}
              leagueKey={tab.key}
              flag={tab.flag}
              label={tab.label}
              isActive={selected === tab.key}
              onClick={setSelected}
            />
          ))}
        </div>

        <div className="h-px bg-white/8 mb-5" />
      </div>
    </section>
  )
}
