import type { Position } from '@/shared/model/types'

export const CHART_COLORS = {
  brand: 'var(--color-brand, #00c785)',
  axis: 'var(--color-line, #94a3b8)',
  grid: 'var(--color-border, #1a2235)',
  tooltipBg: 'var(--color-page, #0f1923)',
  tooltipBorder: 'var(--color-border, #1a2235)',
  yellow: 'var(--color-yellow-400, #facc15)',
  sky: 'var(--color-sky-400, #38bdf8)',
  orange: 'var(--color-orange-400, #fb923c)',
  cyan: 'var(--color-cyan-400, #22d3ee)',
  rose: 'var(--color-rose-400, #fb7185)',
  violet: 'var(--color-violet-400, #a78bfa)',
} as const

export const CHART_TOOLTIP_STYLE = {
  background: CHART_COLORS.tooltipBg,
  border: `1px solid ${CHART_COLORS.tooltipBorder}`,
  borderRadius: 8,
  fontSize: 12,
  color: 'var(--color-gray-100, #f1f5f9)',
} as const

export const CHART_TOOLTIP_LABEL_STYLE = {
  color: 'var(--color-gray-300, #cbd5e1)',
  fontWeight: 500,
  marginBottom: 2,
} as const

export const HISTORY_STAT_COLOR_MAP: Record<string, string> = {
  'Goals/90': CHART_COLORS.brand,
  'Shots/90': CHART_COLORS.sky,
  'SuccessfulDribbles/90': CHART_COLORS.orange,
  'KeyPass/90': CHART_COLORS.orange,
  'Passes/90': CHART_COLORS.cyan,
  'Tackles/90': CHART_COLORS.sky,
  'AerialsWon/90': CHART_COLORS.rose,
  'Blocks/90': CHART_COLORS.yellow,
  PassAccuracy: CHART_COLORS.brand,
  CleanSheets: CHART_COLORS.sky,
}

export const RATING_CHART_COLOR = CHART_COLORS.violet

export const RATING_CHART_DOMAIN: [number, number] = [5, 10]

export interface StatGroup {
  title: string
  statLabels: string[]
}

export const STAT_GROUPS_BY_POSITION: Record<Position, StatGroup[]> = {
  FW: [
    { title: '득점 / 슈팅', statLabels: ['Goals/90', 'Shots/90'] },
    { title: '드리블 성공', statLabels: ['SuccessfulDribbles/90'] },
  ],
  MF: [
    { title: '키패스 / 태클', statLabels: ['KeyPass/90', 'Tackles/90'] },
    { title: '패스', statLabels: ['Passes/90'] },
  ],
  DF: [
    { title: '공중볼 경합 / 블록', statLabels: ['AerialsWon/90', 'Blocks/90'] },
  ],
  GK: [
    { title: '패스 정확도', statLabels: ['PassAccuracy'] },
    { title: '클린시트', statLabels: ['CleanSheets'] },
  ],
}
