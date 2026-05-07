import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { POSITION_STAT_KEYS } from '../model/predictionConstants'
import type { StatChartSectionProps } from '../model/type'

export function StatChartSection({
  position,
  currentStats,
  predictedStats,
}: StatChartSectionProps) {
  const statKeys = POSITION_STAT_KEYS[position]

  const chartData = [
    ...statKeys.map(({ key, label }) => ({
      name: label,
      현재: currentStats[key] ?? 0,
      예측: predictedStats[key] ?? 0,
    })),
    {
      name: '출전시간/100',
      현재: (currentStats.minutes ?? 0) / 100,
      예측: (predictedStats.minutes ?? 0) / 100,
    },
  ]

  return (
    <div className="rounded-2xl bg-card/60 p-6 mt-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-white">스탯 비교 시각화</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-gray-500" />
            <span className="text-xs text-gray-400">현재</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" className="rounded">
              <polygon points="0,12 12,0 12,12" fill="#34d399" />
              <polygon points="0,0 12,0 0,12" fill="#f87171" />
            </svg>
            <span className="text-xs text-gray-400">예측</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220} debounce={50}>
        <BarChart data={chartData} barCategoryGap="30%" barGap={4}>
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
