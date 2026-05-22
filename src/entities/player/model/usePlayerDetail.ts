import { useQuery } from '@tanstack/react-query'
import { fetchPlayerDetail } from '../api/fetchPlayerDetail'

export function usePlayerDetail(id: string | undefined) {
  return useQuery({
    queryKey: ['player', 'detail', id],
    queryFn: () => fetchPlayerDetail(id!),
    enabled: !!id,
  })
}
