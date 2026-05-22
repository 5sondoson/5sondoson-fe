import api from '@/shared/api/axios'
import type { PlayerDetailResponse } from '../model/types'

export async function fetchPlayerDetail(id: string) {
  const res = await api.get<{ data: PlayerDetailResponse }>(
    `/api/players/${id}`,
  )
  return res.data.data
}
