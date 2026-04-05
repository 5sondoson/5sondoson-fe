import SearchIcon from '@/assets/icons/search.svg?react'
import FilterIcon from '@/assets/icons/filter.svg?react'
import { type SearchBarProps } from '../model/types'

export function SearchBar({
  value,
  onChange,
  onSearch,
  isFilterOpen,
  onFilterToggle,
  showFilterButton = true,
}: SearchBarProps) {
  return (
    <div className="mx-auto flex max-w-5xl gap-3 px-6 py-5">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="선수 이름으로 검색..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full rounded-xl bg-input py-3.5 pl-11 pr-24 text-white placeholder-gray-500 outline-none ring-1 ring-border focus:ring-brand"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-brand px-4 py-2 font-semibold text-black transition-colors hover:bg-brand-hover"
        >
          검색
        </button>
      </div>

      {showFilterButton && (
        <button
          onClick={onFilterToggle}
          className={`hidden rounded-xl px-4 py-3 transition-colors sm:block ${
            isFilterOpen
              ? 'bg-brand text-black'
              : 'bg-input text-gray-400 ring-1 ring-border hover:text-white'
          }`}
          aria-label="필터"
        >
          <FilterIcon />
        </button>
      )}
    </div>
  )
}
