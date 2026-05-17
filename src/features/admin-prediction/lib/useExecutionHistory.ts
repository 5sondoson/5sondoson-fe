import { useCallback, useEffect, useState } from 'react'
import {
  EXECUTION_HISTORY_STORAGE_KEY,
  MAX_HISTORY_ENTRIES,
} from '../model/constants'
import type { ExecutionLogEntry } from '../model/types'

function readHistory(): ExecutionLogEntry[] {
  try {
    const raw = localStorage.getItem(EXECUTION_HISTORY_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as ExecutionLogEntry[]) : []
  } catch {
    return []
  }
}

function writeHistory(entries: ExecutionLogEntry[]): void {
  try {
    localStorage.setItem(EXECUTION_HISTORY_STORAGE_KEY, JSON.stringify(entries))
  } catch {
    /* localStorage 비활성 환경 무시 */
  }
}

export function useExecutionHistory() {
  const [entries, setEntries] = useState<ExecutionLogEntry[]>(readHistory)

  useEffect(() => {
    writeHistory(entries)
  }, [entries])

  const append = useCallback(
    (entry: Omit<ExecutionLogEntry, 'id' | 'triggeredAt'>) => {
      setEntries((prev) =>
        [
          {
            ...entry,
            id:
              typeof crypto !== 'undefined' && crypto.randomUUID
                ? crypto.randomUUID()
                : String(Date.now()),
            triggeredAt: Date.now(),
          },
          ...prev,
        ].slice(0, MAX_HISTORY_ENTRIES),
      )
    },
    [],
  )

  const clear = useCallback(() => setEntries([]), [])

  return { entries, append, clear }
}
