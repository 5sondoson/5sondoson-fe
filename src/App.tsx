import { Routes, Route } from 'react-router'
import { RootLayout } from '@/app/layouts/RootLayout'
import { PlayerSearchPage } from '@/pages/player-search'
import { PlayerDetailPage } from '@/pages/player-detail'

function App() {
  return (
    <div className="min-h-screen bg-page">
      <Routes>
        <Route element={<RootLayout />}>
          // TODO: 메인 페이지 구현 후 연결하기
          <Route path="/" element={null} />
          <Route path="/search" element={<PlayerSearchPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
