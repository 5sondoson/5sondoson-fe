import type { ExecutionLogEntry } from '../model/types'

interface ExecutionHistoryProps {
  entries: ExecutionLogEntry[]
  onClear: () => void
}

function formatRelative(ts: number): string {
  const diff = Date.now() - ts
  const min = Math.floor(diff / 60000)
  if (min < 1) return '방금 전'
  if (min < 60) return `${min}분 전`
  const hour = Math.floor(min / 60)
  if (hour < 24) return `${hour}시간 전`
  return `${Math.floor(hour / 24)}일 전`
}

export default function ExecutionHistory({
  entries,
  onClear,
}: ExecutionHistoryProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white">실행 내역</p>
        {entries.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-text-gray hover:text-gray-300 transition-colors cursor-pointer"
          >
            전체 삭제
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <p className="mt-6 text-sm text-text-gray">실행 내역이 없습니다.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="rounded-xl ring-1 ring-border bg-button/70 px-3.5 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-white truncate">
                  {entry.leagueLabel}
                  <span className="text-gray-600"> · </span>
                  {entry.stepLabel}
                </span>
                <span className="shrink-0 text-xs text-text-gray">
                  {formatRelative(entry.triggeredAt)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
