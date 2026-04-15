import { usePlayerSearch } from '@/entities/player'
import { getPositionColor } from '@/entities/player'

interface SearchSuggestionSectionProps {
  keyword: string
  onSelect: (playerId: string) => void
}

export function SearchSuggestionSection({
  keyword,
  onSelect,
}: SearchSuggestionSectionProps) {
  const { data, isLoading } = usePlayerSearch({ keyword, page: 1, size: 7 })
  const suggestions = data?.results ?? []
  return (
    <ul className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-xl bg-card shadow-lg ring-1 ring-border">
      {isLoading && (
        <li className="px-4 py-3 text-sm text-gray-500">검색 중...</li>
      )}
      {!isLoading && suggestions.length === 0 && (
        <li className="px-4 py-3 text-sm text-gray-500">검색 결과가 없어요</li>
      )}
      {!isLoading &&
        suggestions.map((player) => (
          <li
            key={player.playerId}
            onMouseDown={() => onSelect(player.playerId)}
            className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5"
          >
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-page">
              {player.imageUrl ? (
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-linear-to-b from-card to-page" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                {player.name}
              </p>
              <p className="truncate text-xs text-gray-500">
                {player.team ?? '–'} · {player.league}
              </p>
            </div>

            <span
              className={`shrink-0 rounded px-2 py-0.5 text-xs font-bold ${getPositionColor(player.position)}`}
            >
              {player.position}
            </span>
          </li>
        ))}
    </ul>
  )
}
