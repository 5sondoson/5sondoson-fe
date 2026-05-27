import { Routes, Route, useLocation } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { RootLayout } from '@/app/layouts/RootLayout'
import { PlayerSearchPage } from '@/pages/player-search'
import { PlayerDetailPage } from '@/pages/player-detail'
import { AdminPage } from '@/pages/admin'
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
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a2535',
            color: '#e2e8f0',
            border: '1px solid #1a2235',
            fontSize: '14px',
            maxWidth: '420px',
          },
          success: {
            duration: 3500,
            iconTheme: { primary: '#00c785', secondary: '#1a2535' },
          },
          error: {
            duration: 6000,
            iconTheme: { primary: '#f87171', secondary: '#1a2535' },
          },
        }}
      />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<PlayerSearchPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
