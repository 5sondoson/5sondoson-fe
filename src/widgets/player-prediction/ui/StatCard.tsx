import type { StatCardProps } from '../model/type'
import { POSITION_STAT_KEYS } from '../model/predictionConstants'

export function StatCard({
  title,
  stats,
  position,
  isPredict,
  changes,
}: StatCardProps) {
  const positionStats = POSITION_STAT_KEYS[position]

  const allStats = [
    ...positionStats,
    { key: 'minutes', label: '출전 시간(분)' },
    { key: 'marketValue', label: '시장가치' },
  ]

  return (
    <div
      className={`flex-1 rounded-2xl p-5 ${
        isPredict ? 'bg-brand/[3%] border border-emerald-400/20' : 'bg-card/60'
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isPredict ? 'bg-emerald-400' : 'bg-gray-400'}`}
          />
          <span
            className={`text-sm font-medium  ${isPredict ? 'text-emerald-400' : 'text-gray-400'}`}
          >
            {title}
          </span>
        </div>
        {isPredict && <span className="text-xs text-gray-500">ML 예측</span>}
      </div>

      <div className="flex flex-col gap-4">
        {allStats.map(({ key, label }) => {
          const value = stats[key as keyof typeof stats]
          const change = changes?.[key as keyof typeof changes]

          return (
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
          )
        })}
      </div>
    </div>
  )
}
