import { useQuery } from '@tanstack/react-query'
import { fetchLeaguePrediction } from '../api/fetchLeaguePrediction'

export const useLeaguePrediction = (playerId: number, league: string) =>
  useQuery({
    queryKey: ['leaguePrediction', playerId, league],
    queryFn: () => fetchLeaguePrediction(playerId, league),
    enabled: !!playerId && !!league,
  })
