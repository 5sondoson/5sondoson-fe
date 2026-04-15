import { useState, useEffect } from 'react'
import type { PlayerSearchResponse } from '../model/types'

interface UsePlayerSearchParams {
  keyword?: string
  page?: number
  size?: number
}

export function usePlayerSearch({
  keyword = '',
  page = 1,
  size = 12,
}: UsePlayerSearchParams = {}) {
  const [data, setData] = useState<PlayerSearchResponse['data'] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const params = new URLSearchParams()
    if (keyword && keyword.length >= 2) params.set('keyword', keyword)
    params.set('page', String(page))
    params.set('size', String(size))

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true)
    fetch(`/api/players/search?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
      })
      .then((json: PlayerSearchResponse) => {
        setData(json.data)
        setError(null)
      })
      .catch((err: Error) => setError(err))
      .finally(() => setIsLoading(false))
  }, [keyword, page, size])

  return { data, isLoading, error }
}
