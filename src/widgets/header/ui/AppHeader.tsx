import { useNavigate } from 'react-router'
import SearchIcon from '@/assets/icons/search.svg?react'
import { type AppHeaderProps } from '../model/types'

export const APP_HEADER_HEIGHT = 64

export function AppHeader({ isVisible }: AppHeaderProps) {
  const navigate = useNavigate()
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 border-b border-line/12 bg-page transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate('/')}
          className="cursor-pointer text-lg font-bold tracking-tight text-white"
        >
          Footure
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white"
          >
            홈
          </button>
          <button
            onClick={() => navigate('/search')}
            className="cursor-pointer flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-brand-hover"
          >
            <SearchIcon width={14} height={14} />
            선수 검색
          </button>
        </div>
      </nav>
    </header>
  )
}
