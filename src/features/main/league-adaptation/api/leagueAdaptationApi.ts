import api from '@/shared/api/axios'

interface FeaturedParams {
  size?: number
  destinationLeague?: string
}

export const getFeaturedPlayers = (params?: FeaturedParams) =>
  api.get('/api/players/featured', { params })
