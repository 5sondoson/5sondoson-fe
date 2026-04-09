import HeroBanner from './HeroBanner'
import { SearchBar } from '@/features/player-search'
import { useState } from 'react'
import StatsSection from './StatsSection'
import LeagueAdaptationSection from '@/features/main/league-adaptation/ui/LeagueAdaptationSection'
import FeatureHighlightSection from './FeatureHighlightSection'
import CtaBanner from '@/features/main/league-adaptation/ui/CtaBanner'

export function MainPage() {
  const [searchValue, setSearchValue] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="pt-16">
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
  )
}
