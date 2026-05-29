import type { Trend } from './types'

export const STAT_LABEL_MAP: Record<string, string> = {
  Rating: '평점',
  'Goals/90': '득점',
  'ShotsOnTarget/90': '유효슈팅',
  'Passes/90': '패스',
  'KeyPass/90': '키패스',
  Interceptions: '인터셉트',
  'AerialsWon/90': '공중볼',
  GoalsConceded: '실점',
  Saves: '선방',
}

export function getStatLabel(field: string): string {
  return STAT_LABEL_MAP[field] ?? field
}

export const HISTORY_STAT_LABEL_MAP: Record<string, string> = {
  'Goals/90': '득점',
  'Shots/90': '슈팅',
  'SuccessfulDribbles/90': '드리블 성공',
  'KeyPass/90': '키패스',
  'Passes/90': '패스',
  'Tackles/90': '태클',
  'AerialsWon/90': '공중볼 경합',
  'Blocks/90': '블록',
  PassAccuracy: '패스 정확도',
  CleanSheets: '클린시트',
}

export function getHistoryStatLabel(label: string): string {
  return HISTORY_STAT_LABEL_MAP[label] ?? label
}

export const TREND_PRESET: Record<
  Trend,
  { label: string; colorClass: string; bgClass: string }
> = {
  up: {
    label: '상승 중',
    colorClass: 'text-brand',
    bgClass: 'bg-brand/10',
  },
  down: {
    label: '하락 중',
    colorClass: 'text-red-400',
    bgClass: 'bg-red-400/10',
  },
  flat: {
    label: '유지',
    colorClass: 'text-gray-300',
    bgClass: 'bg-gray-400/10',
  },
}

export function shortenSeason(
  season: string | null | undefined,
  mode: 'long' | 'short' = 'long',
): string {
  if (!season) return '—'
  const [start, end] = season.split('/')
  if (!end) return season
  const startPart = mode === 'short' ? start.slice(-2) : start
  return `${startPart}/${end.slice(-2)}`
}

export function formatGrowthPercent(value: number): string {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`
}

export function formatStatValue(label: string, value: number | null): string {
  if (value === null) return '—'
  if (label === 'PassAccuracy') return `${value.toFixed(1)}%`
  return Math.round(value).toLocaleString('en-US')
}

export function formatRating(rating: number | null): string {
  if (rating === null) return '—'
  return rating.toFixed(1)
}

export function getRatingColor(rating: number | null): string {
  if (rating === null) return 'text-gray-500'
  if (rating >= 8.0) return 'text-brand'
  if (rating >= 7.5) return 'text-emerald-400'
  if (rating >= 7.0) return 'text-yellow-400'
  if (rating >= 6.5) return 'text-orange-400'
  return 'text-red-400'
}

export function formatCount(value: number | null): string {
  if (value === null) return '—'
  return Math.round(value).toLocaleString('en-US')
}

export const POSITION_COLORS: Record<string, string> = {
  FW: 'bg-red-500/10 text-red-400',
  MF: 'bg-sky-500/10 text-sky-400',
  DF: 'bg-emerald-500/10 text-emerald-400',
  GK: 'bg-amber-500/10 text-amber-400',
}

export function getPositionColor(position: string | null): string {
  if (!position) return 'bg-gray-500/10 text-gray-400'
  return POSITION_COLORS[position] ?? 'bg-gray-500 text-white'
}

const MILLION = 1000000
const THOUSAND = 1000

export function formatMarketValue(value: number | null | undefined): string {
  if (value == null) return '–'
  if (value >= MILLION) return `€${+(value / MILLION).toFixed(1)}M`
  if (value >= THOUSAND) return `€${+(value / THOUSAND).toFixed(1)}K`
  return `€${value}`
}

export function formatContractExpiry(value: string | null | undefined): string {
  if (value == null) return '-'
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

export function getAdaptBadgeStyle(score: number): string {
  if (score >= 90)
    return 'bg-emerald-400/20 text-emerald-400 border border-emerald-400'
  if (score >= 80) return 'bg-sky-400/20 text-sky-400 border border-sky-400/30'
  if (score >= 70)
    return 'bg-yellow-400/20 text-yellow-400 border border-yellow-400'
  return 'bg-gray-400/20 text-gray-400 border border-gray-400'
}
