import { useHeaderVisibility } from '@/shared/lib/useHeaderVisibility'
import { AppHeader } from '@/widgets/header'
import { AppFooter } from '@/widgets/footer'
import { PlayerSearchPage } from '@/pages/player-search'

function App() {
  const isHeaderVisible = useHeaderVisibility()

  return (
    <div className="min-h-screen bg-page">
      <AppHeader isVisible={isHeaderVisible} />

      <div className="pt-16">
        <PlayerSearchPage isHeaderVisible={isHeaderVisible} />
      </div>

      <AppFooter />
    </div>
  )
}

export default App
