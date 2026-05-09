import type { StatCardProps } from '../model/type'
import { LABEL_MAP } from '../model/predictionConstants'

export function StatCard({ title, stats, isPredict, changes }: StatCardProps) {
  const commonStats = [
    {
      label: '출전 시간(분)',
      value: stats.minutes,
      change: changes?.minutes,
      key: 'minutes',
    },
    {
      label: '시장가치',
      value: stats.marketValue,
      change: changes?.marketValue,
      key: 'marketValue',
    },
  ]

  return (
    <div
      className={`flex-1 rounded-2xl p-5 ${isPredict ? 'bg-brand/[3%] border border-emerald-400/20' : 'bg-card/60'}`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isPredict ? 'bg-emerald-400' : 'bg-gray-400'}`}
          />
          <span
            className={`text-sm font-medium ${isPredict ? 'text-emerald-400' : 'text-gray-400'}`}
          >
            {title}
          </span>
        </div>
        {isPredict && <span className="text-xs text-gray-500">ML 예측</span>}
      </div>

      <div className="flex flex-col gap-4">
        {stats.keyStats.map((stat, index) => {
          const change = changes?.keyStats?.[index]?.value
          return (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {LABEL_MAP[stat.label] ?? stat.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">
                  {stat.value.toLocaleString()}
                </span>
                {isPredict && change !== undefined && (
                  <span
                    className={`text-xs font-medium px-1.5 py-0.5 rounded flex items-center gap-0.5
                    ${change > 0 ? 'text-emerald-400' : 'text-red-400'}`}
                  >
                    {change > 0 ? '▲' : '▼'} {Math.abs(change)}
                  </span>
                )}
              </div>
            </div>
          )
        })}

        {commonStats.map(({ label, value, change, key }) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                {key === 'marketValue'
                  ? `€${(Number(value) / 1000000).toFixed(0)}M`
                  : Number(value).toLocaleString()}
              </span>
              {isPredict && change !== undefined && (
                <span
                  className={`text-xs font-medium px-1.5 py-0.5 rounded flex items-center gap-0.5
                  ${Number(change) > 0 ? 'text-emerald-400' : 'text-red-400'}`}
                >
                  {Number(change) > 0 ? '▲' : '▼'}{' '}
                  {key === 'marketValue'
                    ? `€${(Math.abs(Number(change)) / 1000000).toFixed(0)}M`
                    : Math.abs(Number(change))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
