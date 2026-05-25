import LeagueSelector from '@/shared/ui/LeagueSelector'
import { TOP_LEAGUE_TABS } from '@/shared/lib/league'
import { useState } from 'react'
import type { TopLeagueKey } from '@/shared/lib/league'
import { AdaptScoreCard } from './AdaptScoreCard'
import type { PlayerPredictionProps } from '../model/type'
import { StatComparisonSection } from './StatComparisonSection'
import { MarketValueSection } from './MarketValueSection'
import { useLeaguePrediction } from '../model/useLeaguePrediction'
import { SimilarPlayerSection } from './SimilarPlayerSection'

export function PlayerPrediction({
  playerId,
  position,
}: PlayerPredictionProps) {
  const [selected, setSelected] = useState<TopLeagueKey>('EPL')
  const selectedTab = TOP_LEAGUE_TABS.find((t) => t.key === selected)!
  const { data, isLoading } = useLeaguePrediction(playerId, selected)

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
              total={data?.adaptScore.total}
            />
          ))}
        </div>
      </div>

      {isLoading || !data ? (
        <div className="mt-6 rounded-xl bg-card/80 p-8 text-center text-sm text-gray-400">
          {isLoading ? '불러오는 중...' : '예측 데이터가 없습니다.'}
        </div>
      ) : (
        <>
          <AdaptScoreCard
            leagueLabel={selectedTab.label}
            leagueFlag={selectedTab.flag}
            total={data.adaptScore.total}
          />

          <StatComparisonSection
            position={position}
            currentStats={data.currentStats}
            predictedStats={data.predictedStats}
            statChanges={data.statChanges}
            leagueLabel={selectedTab.label}
            marketValueChangeRate={data.predictedStats.marketValueChangeRate}
            teamLabel="Sporting CP" //찬빈오빠꺼랑 머지할때 고치기
          />

          <MarketValueSection
            currentMarketValue={data.currentStats.marketValue}
            predictedMarketValue={data.predictedStats.marketValue}
            marketValueChangeRate={data.predictedStats.marketValueChangeRate}
          />

          {data.similarPlayers?.results?.length > 0 && (
            <SimilarPlayerSection players={data.similarPlayers.results} />
          )}
        </>
      )}
    </div>
  )
}
