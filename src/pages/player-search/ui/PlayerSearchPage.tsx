import { useState } from 'react'
import { useHeaderVisibility } from '@/shared/lib/useHeaderVisibility'
import { useDetectElementHeight } from '@/shared/lib/useDetectElementHeight'
import { APP_HEADER_HEIGHT } from '@/widgets/header'
import {
  PlayerListCard,
  PlayerGridCard,
  usePlayerSearch,
} from '@/entities/player'
import {
  SearchBar,
  FilterPanel,
  ViewToggle,
  Pagination,
  type ViewType,
} from '@/features/player-search'
import { useSearchParams } from 'react-router'

const ITEMS_PER_PAGE = 12

export function PlayerSearchPage() {
  const isHeaderVisible = useHeaderVisibility()
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') ?? ''
  const [searchValue, setSearchValue] = useState(keyword)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewType, setViewType] = useState<ViewType>('list')
  const [currentPage, setCurrentPage] = useState(1)
  const { targetRef: searchBarRef, detectedHeight: searchBarHeight } =
    useDetectElementHeight<HTMLDivElement>()

  const { data } = usePlayerSearch({
    keyword: searchValue,
    page: currentPage,
    size: ITEMS_PER_PAGE,
  })

  const pagination = data?.pagination
  const paginated = data?.results ?? []
  const totalPages = pagination?.totalPages ?? 1

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = () => {
    setSearchParams(searchValue ? { keyword: searchValue } : {})
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-page text-white">
      <div
        ref={searchBarRef}
        className="fixed left-0 right-0 z-10 bg-surface transition-transform duration-300"
        style={{
          top: APP_HEADER_HEIGHT,
          transform: `translateY(${isHeaderVisible ? 0 : -APP_HEADER_HEIGHT}px)`,
        }}
      >
        <div className="border-b border-border bg-surface ">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={() => handleSearch()}
            isFilterOpen={isFilterOpen}
            onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
          />
          <FilterPanel isOpen={isFilterOpen} />
        </div>
      </div>

      <main
        className="mx-auto max-w-5xl px-6 pb-10 pt-2"
        style={{ paddingTop: APP_HEADER_HEIGHT + searchBarHeight + 8 }}
      >
        <div className="flex items-center justify-between py-4">
          <span className="text-sm text-gray-400">
            총 {pagination?.totalElements ?? 0}명의 선수
          </span>
          <div className="hidden sm:block">
            <ViewToggle view={viewType} onViewChange={setViewType} />
          </div>
        </div>

        <div className="hidden sm:block">
          {viewType === 'list' ? (
            <div className="flex flex-col gap-3">
              {paginated.map((player, index) => (
                <PlayerListCard
                  key={player.playerId}
                  {...player}
                  order={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {paginated.map((player) => (
                <PlayerGridCard key={player.playerId} {...player} />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {paginated.map((player) => (
            <PlayerGridCard key={player.playerId} {...player} />
          ))}
        </div>

        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  )
}
