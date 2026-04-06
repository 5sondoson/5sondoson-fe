import { type MainPageProps } from '../../player-search/model/types'
import HeroBanner from './HeroBanner'
import { SearchBar } from '@/features/player-search'
import { useState } from 'react'
import StatsSection from './StatsSection'
import LeagueAdaptationSection from '@/features/main/league-adaption/ui/LeagueAdaptionSection'
import FeatureHighlightSection from './FeatureHightlightSection'

export function MainPage({ isHeaderVisible = true }: MainPageProps) {
  const [searchValue, setSearchValue] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div>
      <div
        className={`sticky z-10 bg-page transition-[top] duration-300 ${isHeaderVisible ? 'top-16' : 'top-0'}`}
      >
        <HeroBanner />
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={() => {}}
          isFilterOpen={isFilterOpen}
          onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
          showFilterButton={false}
          className="max-w-2xl"
        />
        <StatsSection />
        <LeagueAdaptationSection />
        <FeatureHighlightSection />
      </div>
    </div>
  )
}
