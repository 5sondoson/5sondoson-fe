import { useQuery, keepPreviousData } from '@tanstack/react-query'
import type { PlayerSearchResponse } from '../model/types'

interface UsePlayerSearchParams {
  keyword?: string
  page?: number
  size?: number
}

async function fetchPlayerSearch({
  keyword,
  page,
  size,
}: Required<UsePlayerSearchParams>) {
  const params = new URLSearchParams()
  if (keyword) params.set('keyword', keyword)
  params.set('page', String(page))
  params.set('size', String(size))

  const res = await fetch(`/api/players/search?${params}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = (await res.json()) as PlayerSearchResponse
  return json.data
}

export function usePlayerSearch({
  keyword = '',
  page = 1,
  size = 12,
}: UsePlayerSearchParams = {}) {
  return useQuery({
    queryKey: ['players', 'search', { keyword, page, size }],
    queryFn: () => fetchPlayerSearch({ keyword, page, size }),
    placeholderData: keepPreviousData,
  })
}
