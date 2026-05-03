import { Routes, Route, useLocation } from 'react-router'
import { RootLayout } from '@/app/layouts/RootLayout'
import { PlayerSearchPage } from '@/pages/player-search'
import { PlayerDetailPage } from '@/pages/player-detail'
import { MainPage } from './pages/main/ui/MainPage'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-page">
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<PlayerSearchPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
