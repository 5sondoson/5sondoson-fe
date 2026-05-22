import type { League, PlayerSearchResponse } from '../model/types'
import type { Position } from '@/shared/model/types'

export async function fetchPlayerSearch({
  keyword,
  page,
  size,
  league,
  position,
  isActive,
}: {
  keyword: string
  page: number
  size: number
  league?: League
  position?: Position
  isActive?: boolean
}) {
  const params = new URLSearchParams()
  if (keyword) params.set('keyword', keyword)
  if (league) params.set('league', league)
  if (position) params.set('position', position)
  if (isActive !== undefined) params.set('isActive', String(isActive))
  params.set('page', String(page))
  params.set('size', String(size))

  const res = await fetch(`/api/players/search?${params}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = (await res.json()) as PlayerSearchResponse
  return json.data
}
