import { useQuery } from '@tanstack/react-query'
import { fetchPlayerHistory } from '../api/fetchPlayerHistory'

export function usePlayerHistory(playerId: number | undefined) {
  return useQuery({
    queryKey: ['player', 'history', playerId],
    queryFn: () => fetchPlayerHistory(playerId!),
    enabled: playerId !== undefined,
  })
}
