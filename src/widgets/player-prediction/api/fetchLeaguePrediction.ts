import type { PlayerPredictionResponseProps } from '../model/type'

export async function fetchLeaguePrediction(playerId: number, league: string) {
  const res = await fetch(`/api/players/${playerId}/predict/${league}`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  const json = (await res.json()) as PlayerPredictionResponseProps
  return json.data
}
