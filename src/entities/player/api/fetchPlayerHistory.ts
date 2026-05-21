import type { PlayerHistoryResponse } from '../model/types'

export async function fetchPlayerHistory(playerId: number) {
  const res = await fetch(`/api/players/${playerId}/history`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = (await res.json()) as PlayerHistoryResponse
  return json.data
}
