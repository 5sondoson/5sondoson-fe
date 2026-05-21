import {
  formatCount,
  formatMarketValue,
  formatRating,
  formatStatValue,
  getHistoryStatLabel,
  getRatingColor,
  shortenSeason,
} from '@/entities/player'
import type { SeasonStatsTableProps } from '../model/type'

export function SeasonStatsTable({ history }: SeasonStatsTableProps) {
  if (history.length === 0) return null

  const ordered = [...history].reverse()
  const statLabels = ordered[0].keyStats.map((s) => s.label)

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-175 text-sm">
        <thead>
          <tr className="text-xs text-gray-500">
            <th className="px-3 py-3 text-left font-normal">시즌</th>
            <th className="px-3 py-3 text-left font-normal">팀</th>
            <th className="px-3 py-3 text-center font-normal">경기</th>
            {statLabels.map((label) => (
              <th
                key={label}
                className="px-3 py-3 text-center font-normal"
                title={label}
              >
                {getHistoryStatLabel(label)}
              </th>
            ))}
            <th className="px-3 py-3 text-center font-normal">평점</th>
            <th className="px-3 py-3 text-right font-normal">시장가치</th>
          </tr>
        </thead>
        <tbody>
          {ordered.map((row, index) => {
            const isCurrent = index === 0
            return (
              <tr
                key={row.season}
                className="border-t border-line/10 text-gray-200"
              >
                <td className="px-3 py-3 font-medium tracking-wider tabular-nums">
                  <span className="inline-flex items-center gap-2">
                    {isCurrent && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-brand"
                      />
                    )}
                    {shortenSeason(row.season)}
                  </span>
                </td>
                <td className="px-3 py-3 text-gray-300">{row.club ?? '—'}</td>
                <td className="px-3 py-3 text-center tabular-nums">
                  {formatCount(row.appearances)}
                </td>
                {row.keyStats.map((stat, i) => (
                  <td
                    key={stat.label}
                    className={`px-3 py-3 text-center tabular-nums ${
                      i === 0 ? 'font-semibold text-gray-100' : ''
                    }`}
                  >
                    {formatStatValue(stat.label, stat.value)}
                  </td>
                ))}
                <td
                  className={`px-3 py-3 text-center tabular-nums ${getRatingColor(row.ratingAverage)}`}
                >
                  {formatRating(row.ratingAverage)}
                </td>
                <td className="px-3 py-3 text-right font-medium tabular-nums">
                  {formatMarketValue(row.marketValue)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
