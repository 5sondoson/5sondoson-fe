export const STAT_LABEL_MAP: Record<string, string> = {
  goals_p90: '득점',
  shots_on_target_p90: '유효슈팅',
  passes_p90: '패스',
  key_passes_p90: '키패스',
  interceptions_p90: '인터셉트',
  aerials_won_p90: '공중볼',
  goals_conceded_p90: '실점',
  saves_total: '선방',
  Rating: '평점',
}

export function getStatLabel(field: string): string {
  return STAT_LABEL_MAP[field] ?? field
}

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

export function formatContractExpiry(value: string): string {
  return value.replace('-', '.')
}

//메인페이지의 적응도 Top5 선수 카드 관련 유틸

export const RANK_STYLE: Record<
  number,
  { color: string; ring: string; bg: string }
> = {
  1: {
    color: 'text-yellow-400',
    ring: 'ring-yellow-400/40',
    bg: 'bg-yellow-400/10',
  },
  2: {
    color: 'text-gray-400',
    ring: 'ring-gray-400/30',
    bg: 'bg-gray-400/10',
  },
  3: {
    color: 'text-orange-400',
    ring: 'ring-orange-400/30',
    bg: 'bg-orange-400/10',
  },
}

export const DEFAULT_RANK_STYLE = {
  color: 'text-gray-600',
  ring: 'ring-transparent',
  bg: 'bg-white/5',
}

export function getAdaptColor(score: number): string {
  if (score >= 90) return 'text-emerald-400'
  if (score >= 80) return 'text-sky-400'
  if (score >= 70) return 'text-yellow-400'
  return 'text-gray-400'
}

export function getAdaptBarColor(score: number): string {
  if (score >= 90) return 'bg-emerald-400'
  if (score >= 80) return 'bg-sky-400'
  if (score >= 70) return 'bg-yellow-400'
  return 'bg-gray-400'
}
