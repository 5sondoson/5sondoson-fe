import { useQuery, keepPreviousData } from '@tanstack/react-query'
import type { UsePlayerSearchParams } from './types'
import { fetchPlayerSearch } from '../api/fetchPlayerSearch'

export function usePlayerSearch({
  keyword = '',
  page = 1,
  size = 12,
  league,
  position,
  isActive = true,
}: UsePlayerSearchParams = {}) {
  return useQuery({
    queryKey: [
      'players',
      'search',
      { keyword, page, size, league, position, isActive },
    ],
    queryFn: () =>
      fetchPlayerSearch({ keyword, page, size, league, position, isActive }),
    placeholderData: keepPreviousData,
  })
}
