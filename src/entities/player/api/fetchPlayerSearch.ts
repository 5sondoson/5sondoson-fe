import api from '@/shared/api/axios'
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
  const res = await api.get<PlayerSearchResponse>('/api/players/search', {
    params: {
      ...(keyword && { keyword }),
      ...(league && { league }),
      ...(position && { position }),
      ...(isActive !== undefined && { isActive }),
      page,
      size,
    },
  })
  return res.data.data
}
