import { type MainPageProps } from '../../player-search/model/types'
import HeroSection from './HeroBanner'

export function MainPage({ isHeaderVisible = true }: MainPageProps) {
  return (
    <div>
      <div
        className={`sticky z-10 bg-page transition-[top] duration-300 ${isHeaderVisible ? 'top-16' : 'top-0'}`}
      >
        <HeroSection />
      </div>
    </div>
  )
}
