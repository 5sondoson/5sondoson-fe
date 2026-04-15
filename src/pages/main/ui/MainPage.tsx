import HeroBanner from './HeroBanner'
import { SearchBar } from '@/features/player-search'
import { useState } from 'react'
import StatsSection from './StatsSection'
import LeagueAdaptationSection from '@/features/main/league-adaptation/ui/LeagueAdaptationSection'
import FeatureHighlightSection from './FeatureHighlightSection'
import CtaBanner from '@/features/main/league-adaptation/ui/CtaBanner'
import { useNavigate } from 'react-router'

export function MainPage() {
  const [searchValue, setSearchValue] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search?keyword=${searchValue}`)
  }
  return (
    <div className="pt-16">
      <HeroBanner />
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onSearch={() => handleSearch()}
        isFilterOpen={isFilterOpen}
        onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
        showFilterButton={false}
        className="max-w-2xl"
        isSuggestionSectionOpen={true}
      />
      <StatsSection />
      <LeagueAdaptationSection />
      <FeatureHighlightSection />
      <CtaBanner />
    </div>
  )
}
