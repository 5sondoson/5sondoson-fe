import { useQuery } from '@tanstack/react-query'
import { getFeaturedPlayers } from '../api/leagueAdaptationApi'

export const useFeaturedPlayers = (size?: number, destinationLeague?: string) =>
  useQuery({
    queryKey: ['featuredPlayers', size, destinationLeague],
    queryFn: () =>
      getFeaturedPlayers({ size, destinationLeague }).then(
        (res) => res.data.data.players,
      ),
  })
