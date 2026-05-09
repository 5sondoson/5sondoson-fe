import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  CHART_COLORS,
  CHART_TOOLTIP_LABEL_STYLE,
  CHART_TOOLTIP_STYLE,
  formatMarketValue,
  type SeasonHistory,
} from '@/entities/player'
import type { MarketValueChartProps } from '../../model/types'

interface ChartPoint {
  startYear: number
  season: string
  marketValue: number | null
}

function toChartData(history: SeasonHistory[]): ChartPoint[] {
  const points = history.map((h) => ({
    startYear: Number(h.season.split('/')[0]),
    season: h.season,
    marketValue: h.marketValue,
  }))

  const firstValidIndex = points.findIndex((p) => p.marketValue !== null)
  return firstValidIndex === -1 ? [] : points.slice(firstValidIndex)
}

function formatYAxis(value: number): string {
  if (value === 0) return '€0M'
  return formatMarketValue(value)
}

export function MarketValueChart({ history }: MarketValueChartProps) {
  const data = toChartData(history)

  return (
    <section className="rounded-xl bg-card/80 p-5">
      <header className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-100">
            시장가치 추이
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            최근 {data.length}시즌 기준, Transfermarkt 데이터
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-card/60 px-2.5 py-1 text-xs text-gray-300 ring-1 ring-line/12">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full"
            style={{ background: CHART_COLORS.brand }}
          />
          시장가치 (€M)
        </div>
      </header>

      <div className="h-64 w-full">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="mvFill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={CHART_COLORS.brand}
                  stopOpacity={0.35}
                />
                <stop
                  offset="100%"
                  stopColor={CHART_COLORS.brand}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={CHART_COLORS.grid} vertical={false} />
            <XAxis
              dataKey="startYear"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickCount={data.length}
              stroke={CHART_COLORS.axis}
              tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: CHART_COLORS.grid }}
            />
            <YAxis
              stroke={CHART_COLORS.axis}
              tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYAxis}
              width={56}
            />
            <Tooltip
              cursor={{ stroke: CHART_COLORS.grid }}
              contentStyle={CHART_TOOLTIP_STYLE}
              labelStyle={CHART_TOOLTIP_LABEL_STYLE}
              labelFormatter={(_, payload) =>
                payload?.[0]?.payload?.season ?? ''
              }
              formatter={(value) => {
                if (value == null) return ['데이터 없음', '시장가치']
                const num = typeof value === 'number' ? value : Number(value)
                return [formatMarketValue(num), '시장가치']
              }}
            />
            <Area
              type="monotone"
              dataKey="marketValue"
              stroke={CHART_COLORS.brand}
              strokeWidth={2}
              fill="url(#mvFill)"
              dot={{
                fill: CHART_COLORS.brand,
                stroke: CHART_COLORS.brand,
                r: 3,
              }}
              activeDot={{ r: 5 }}
              connectNulls={false}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
