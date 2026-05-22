import api from '@/shared/api/axios'
import type { PlayerHistoryResponse } from '../model/type'

export async function fetchPlayerHistory(playerId: number) {
  const res = await api.get<PlayerHistoryResponse>(
    `/api/players/${playerId}/history`,
  )
  return res.data.data
}
