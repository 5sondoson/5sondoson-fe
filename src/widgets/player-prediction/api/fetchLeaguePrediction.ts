import api from '@/shared/api/axios'
import type { PlayerPredictionResponseProps } from '../model/type'

export async function fetchLeaguePrediction(playerId: number, league: string) {
  const res = await api.get<PlayerPredictionResponseProps>(
    `/api/players/${playerId}/predict/${league}`,
  )
  return res.data.data
}
