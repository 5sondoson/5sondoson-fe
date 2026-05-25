import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  CHART_COLORS,
  CHART_TOOLTIP_LABEL_STYLE,
  CHART_TOOLTIP_STYLE,
  HISTORY_STAT_COLOR_MAP,
  RATING_CHART_COLOR,
  RATING_CHART_DOMAIN,
  STAT_GROUPS_BY_POSITION,
  getHistoryStatLabel,
  shortenSeason,
  type SeasonHistory,
  type StatGroup,
} from '@/entities/player'
import type { SeasonStatsChartsProps } from '../model/type'

interface ChartRow {
  season: string
  rating: number | null
  [statKey: string]: string | number | null
}

function toDataKey(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '_')
}

function buildChartData(history: SeasonHistory[]): ChartRow[] {
  return history.map((h) => {
    const row: ChartRow = {
      season: shortenSeason(h.season, 'short'),
      rating: h.ratingAverage,
    }
    h.keyStats.forEach((s) => {
      row[toDataKey(s.label)] = s.value
    })
    return row
  })
}

function formatTooltipValue(
  dataKey: string,
  value: number | null | undefined,
): string {
  if (value == null || !Number.isFinite(value)) return '-'
  if (dataKey === 'rating') return value.toFixed(1)
  if (dataKey === 'pass_') return `${value.toFixed(1)}%`
  return Math.round(value).toLocaleString('en-US')
}

interface HistoryTooltipPayloadItem {
  dataKey?: string | number
  value?: number | string
  name?: string
  color?: string
}

interface HistoryTooltipProps {
  active?: boolean
  payload?: HistoryTooltipPayloadItem[]
  label?: string | number
}

function HistoryTooltip({ active, payload, label }: HistoryTooltipProps) {
  if (!active || !payload || payload.length === 0) return null

  const seen = new Set<string>()
  const items = payload.filter((p) => {
    const key = String(p.dataKey)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return (
    <div style={{ ...CHART_TOOLTIP_STYLE, padding: '8px 10px' }}>
      <div style={CHART_TOOLTIP_LABEL_STYLE}>{label}</div>
      {items.map((p) => {
        const dataKey = String(p.dataKey)
        const numericValue =
          typeof p.value === 'number' ? p.value : Number(p.value)
        return (
          <div
            key={dataKey}
            style={{
              display: 'flex',
              gap: 8,
              fontSize: 12,
              alignItems: 'baseline',
            }}
          >
            <span style={{ color: p.color }}>{p.name}</span>
            <span style={{ color: 'var(--color-gray-100, #f1f5f9)' }}>
              {Number.isFinite(numericValue)
                ? formatTooltipValue(dataKey, numericValue)
                : '—'}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export function SeasonStatsCharts({
  history,
  position,
}: SeasonStatsChartsProps) {
  if (history.length === 0) return null

  const data = buildChartData(history)
  const groups = STAT_GROUPS_BY_POSITION[position]

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <StatGroupChart key={group.title} group={group} data={data} />
      ))}
      <RatingChart data={data} />
    </div>
  )
}

interface ChartCardProps {
  title: string
  children: React.ReactNode
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div>
      <p className="mb-2 text-sm text-gray-300">{title}</p>
      <div className="h-44 w-full">{children}</div>
    </div>
  )
}

interface StatGroupChartProps {
  group: StatGroup
  data: ChartRow[]
}

function StatGroupChart({ group, data }: StatGroupChartProps) {
  const isSingle = group.statLabels.length === 1
  const lastIndex = group.statLabels.length - 1

  return (
    <ChartCard title={group.title}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
          <XAxis
            dataKey="season"
            stroke={CHART_COLORS.axis}
            tick={{ fill: CHART_COLORS.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: CHART_COLORS.grid }}
          />
          <YAxis
            stroke={CHART_COLORS.axis}
            tick={{ fill: CHART_COLORS.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={36}
          />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            content={<HistoryTooltip />}
          />
          {group.statLabels.length > 1 && (
            <Legend
              iconSize={10}
              wrapperStyle={{
                fontSize: 12,
                color: CHART_COLORS.axis,
                paddingTop: 4,
              }}
            />
          )}
          {group.statLabels.map((label, i) => {
            const color = HISTORY_STAT_COLOR_MAP[label]
            const dataKey = toDataKey(label)
            const isLast = i === lastIndex
            const renderAsLine = !isSingle && isLast
            const name = getHistoryStatLabel(label)
            if (renderAsLine) {
              return (
                <Line
                  key={label}
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={2}
                  dot={{ fill: color, stroke: color, r: 3 }}
                  name={name}
                  isAnimationActive={false}
                />
              )
            }
            return (
              <Bar
                key={label}
                dataKey={dataKey}
                fill={color}
                radius={[3, 3, 0, 0]}
                barSize={isSingle ? 22 : 14}
                name={name}
                isAnimationActive={false}
              />
            )
          })}
          {isSingle && (
            <Line
              type="monotone"
              dataKey={toDataKey(group.statLabels[0])}
              stroke={HISTORY_STAT_COLOR_MAP[group.statLabels[0]]}
              strokeWidth={2}
              dot={{
                fill: HISTORY_STAT_COLOR_MAP[group.statLabels[0]],
                stroke: HISTORY_STAT_COLOR_MAP[group.statLabels[0]],
                r: 3,
              }}
              name={getHistoryStatLabel(group.statLabels[0])}
              isAnimationActive={false}
              legendType="none"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

interface RatingChartProps {
  data: ChartRow[]
}

function RatingChart({ data }: RatingChartProps) {
  return (
    <ChartCard title="시즌 평균 평점 추이">
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
          <XAxis
            dataKey="season"
            stroke={CHART_COLORS.axis}
            tick={{ fill: CHART_COLORS.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: CHART_COLORS.grid }}
          />
          <YAxis
            stroke={CHART_COLORS.axis}
            tick={{ fill: CHART_COLORS.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={36}
            domain={RATING_CHART_DOMAIN}
          />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            content={<HistoryTooltip />}
          />
          <Bar
            dataKey="rating"
            fill={RATING_CHART_COLOR}
            radius={[3, 3, 0, 0]}
            barSize={22}
            name="평점"
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="rating"
            stroke={RATING_CHART_COLOR}
            strokeWidth={2}
            dot={{ fill: RATING_CHART_COLOR, stroke: RATING_CHART_COLOR, r: 3 }}
            name="평점"
            isAnimationActive={false}
            legendType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
