import type { PlayerDetailResponse } from '../model/types'

export async function fetchPlayerDetail(id: string) {
  const res = await fetch(`/api/players/${id}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = (await res.json()) as { data: PlayerDetailResponse }
  return json.data
}
