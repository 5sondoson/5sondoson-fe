import { type MainPageProps } from '../../player-search/model/types'
import HeroBanner from './HeroBanner'
import { SearchBar } from '@/features/player-search'
import { useState } from 'react'
import StatsSection from './StatsSection'
import LeagueAdaptationSection from '@/features/main/league-adaptation/ui/LeagueAdaptationSection'
import FeatureHighlightSection from './FeatureHighlightSection'
import CtaBanner from '@/features/main/league-adaptation/ui/CtaBanner'

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
        <CtaBanner />
      </div>
    </div>
  )
}
