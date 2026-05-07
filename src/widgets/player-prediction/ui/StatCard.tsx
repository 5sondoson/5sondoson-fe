import type { StatCardProps } from '../model/type'

const POSITION_STATS = {
  FW: [
    { key: 'goalsP90', label: '골/90분' },
    { key: 'shotsP90', label: '슈팅/90분' },
  ],
  MF: [
    { key: 'keyPassesP90', label: '키패스/90분' },
    { key: 'passesP90', label: '패스/90분' },
  ],
  DF: [
    { key: 'aerialsWonP90', label: '공중볼/90분' },
    { key: 'blockedShotsP90', label: '슈팅차단/90분' },
  ],
  GK: [
    { key: 'passAccuracy', label: '패스 성공률' },
    { key: 'cleanSheets', label: '클린시트' },
  ],
} as const

export function StatCard({
  title,
  stats,
  position,
  isPredict,
  changes,
}: StatCardProps) {
  const positionStats = POSITION_STATS[position]

  const allStats = [
    ...positionStats,
    { key: 'minutes', label: '출전 시간(분)' },
    { key: 'marketValue', label: '시장가치' },
  ]

  return (
    <div
      className={`flex-1 rounded-2xl p-5 ${
        isPredict
          ? 'bg-emerald-950/40 border border-emerald-400/20'
          : 'bg-surface'
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
