export const POSITION_COLORS: Record<string, string> = {
  FW: 'bg-red-500/10 text-red-400',
  MF: 'bg-sky-500/10 text-sky-400',
  DF: 'bg-emerald-500/10 text-emerald-400',
  GK: 'bg-amber-500/10 text-amber-400',
}

export function getPositionColor(position: string): string {
  return POSITION_COLORS[position] ?? 'bg-gray-500 text-white'
}

const MILLION = 1000000
const THOUSAND = 1000

export function formatMarketValue(value: number): string {
  if (value >= MILLION) return `€${+(value / MILLION).toFixed(1)}M`
  if (value >= THOUSAND) return `€${+(value / THOUSAND).toFixed(1)}K`
  return `€${value}`
}
