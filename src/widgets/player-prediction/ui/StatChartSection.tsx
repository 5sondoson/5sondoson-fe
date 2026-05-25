import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import {
  CHART_TOOLTIP_STYLE,
  CHART_TOOLTIP_LABEL_STYLE,
} from '@/entities/player'
import { LABEL_MAP } from '../model/predictionConstants'
import type {
  PredictionTooltipProps,
  StatChartSectionProps,
} from '../model/type'

function PredictionTooltip({ active, payload, label }: PredictionTooltipProps) {
  if (!active || !payload || payload.length === 0) return null

  const currentItem = payload.find((p) => p.name === '현재')
  const predictedItem = payload.find((p) => p.name === '예측')
  const currentValue =
    typeof currentItem?.value === 'number'
      ? currentItem.value
      : Number(currentItem?.value)
  const predictedValue =
    typeof predictedItem?.value === 'number'
      ? predictedItem.value
      : Number(predictedItem?.value)
  const predictedColor = predictedValue < currentValue ? '#f87171' : '#34d399'

  const colorMap: Record<string, string> = {
    현재: '#9ca3af',
    예측: predictedColor,
  }

  return (
    <div style={{ ...CHART_TOOLTIP_STYLE, padding: '8px 10px' }}>
      <div style={CHART_TOOLTIP_LABEL_STYLE}>{label}</div>
      {payload.map((p) => {
        const numericValue =
          typeof p.value === 'number' ? p.value : Number(p.value)
        const color = colorMap[String(p.name)] ?? '#f1f5f9'
        return (
          <div
            key={String(p.dataKey)}
            style={{
              display: 'flex',
              gap: 8,
              fontSize: 12,
              alignItems: 'baseline',
            }}
          >
            <span style={{ color }}>{p.name}</span>
            <span style={{ color: 'var(--color-gray-100, #f1f5f9)' }}>
              {Number.isFinite(numericValue)
                ? numericValue % 1 === 0
                  ? numericValue.toString()
                  : numericValue.toFixed(2)
                : '—'}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export function StatChartSection({
  currentStats,
  predictedStats,
}: StatChartSectionProps) {
  const chartData = [
    ...currentStats.keyStats.map((stat, index) => ({
      name: LABEL_MAP[stat.label] ?? stat.label,
      현재: stat.value,
      예측: predictedStats.keyStats[index]?.value ?? 0,
    })),
  ]
  const allDown = chartData.every((entry) => entry['예측'] < entry['현재'])
  const allUp = chartData.every((entry) => entry['예측'] >= entry['현재'])
  const legendType = allDown ? 'down' : allUp ? 'up' : 'mixed'

  return (
    <div className="rounded-2xl bg-card/60 p-4 sm:p-6 mt-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-white">스탯 비교 시각화</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-gray-500" />
            <span className="text-xs text-gray-400">현재</span>
          </div>
          <div className="flex items-center gap-1.5">
            {legendType === 'mixed' ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="rounded"
              >
                <polygon points="0,12 12,0 12,12" fill="#34d399" />
                <polygon points="0,0 12,0 0,12" fill="#f87171" />
              </svg>
            ) : (
              <span
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor:
                    legendType === 'down' ? '#f87171' : '#34d399',
                }}
              />
            )}
            <span className="text-xs text-gray-400">예측</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220} debounce={50}>
        <BarChart data={chartData} barCategoryGap="30%" barGap={4}>
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            content={<PredictionTooltip />}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={30}
          />
          <Bar dataKey="현재" fill="#4b5563" radius={[4, 4, 0, 0]} />
          <Bar dataKey="예측" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry['예측'] < entry['현재'] ? '#f87171' : '#34d399'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
