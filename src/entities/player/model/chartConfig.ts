import type { Position } from './types'

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
  Goals: CHART_COLORS.brand,
  Assists: CHART_COLORS.yellow,
  SoT: CHART_COLORS.sky,
  'Key Passes': CHART_COLORS.orange,
  Passes: CHART_COLORS.cyan,
  'Pass%': CHART_COLORS.brand,
  Tackles: CHART_COLORS.orange,
  Interceptions: CHART_COLORS.sky,
  Clearances: CHART_COLORS.yellow,
  'Aerials Won': CHART_COLORS.rose,
  Saves: CHART_COLORS.brand,
  GA: CHART_COLORS.rose,
  'Clean Sheets': CHART_COLORS.sky,
}

export const RATING_CHART_COLOR = CHART_COLORS.violet

export const RATING_CHART_DOMAIN: [number, number] = [5, 10]

export interface StatGroup {
  title: string
  statLabels: string[]
}

export const STAT_GROUPS_BY_POSITION: Record<Position, StatGroup[]> = {
  FW: [
    { title: '골 / 도움 / 유효슈팅', statLabels: ['Goals', 'Assists', 'SoT'] },
    { title: '키패스 (공격 기여)', statLabels: ['Key Passes'] },
  ],
  MF: [
    {
      title: '도움 / 키패스 / 패스',
      statLabels: ['Assists', 'Key Passes', 'Passes'],
    },
    { title: '패스 정확도', statLabels: ['Pass%'] },
  ],
  DF: [
    {
      title: '태클 / 인터셉트 / 클리어',
      statLabels: ['Tackles', 'Interceptions', 'Clearances'],
    },
    { title: '공중볼 경합', statLabels: ['Aerials Won'] },
  ],
  GK: [
    { title: '선방 / 실점', statLabels: ['Saves', 'GA'] },
    { title: '클린시트', statLabels: ['Clean Sheets'] },
  ],
}
