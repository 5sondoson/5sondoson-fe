import { useState } from 'react'
import BarChartIcon from '@/assets/icons/bar-chart.svg?react'
import TableIcon from '@/assets/icons/table.svg?react'
import type { SeasonStatsSectionProps } from '../../model/types'
import { SeasonStatsCharts } from './SeasonStatsCharts'
import { SeasonStatsTable } from './SeasonStatsTable'

type ViewMode = 'chart' | 'table'

export function SeasonStatsSection({
  history,
  position,
}: SeasonStatsSectionProps) {
  const [mode, setMode] = useState<ViewMode>('chart')

  return (
    <section className="rounded-xl bg-card/80 p-5">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-gray-100">시즌별 스탯</h3>
          <p className="mt-1 text-xs text-gray-500">최신 시즌부터 표시</p>
        </div>
        <ViewModeToggle mode={mode} onChange={setMode} />
      </header>

      {mode === 'chart' ? (
        <SeasonStatsCharts history={history} position={position} />
      ) : (
        <SeasonStatsTable history={history} />
      )}
    </section>
  )
}

interface ViewModeToggleProps {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
}

function ViewModeToggle({ mode, onChange }: ViewModeToggleProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-card/60 p-1 text-xs font-medium ring-1 ring-line/12">
      <ToggleButton
        active={mode === 'chart'}
        onClick={() => onChange('chart')}
        label="그래프"
      >
        <BarChartIcon />
      </ToggleButton>
      <ToggleButton
        active={mode === 'table'}
        onClick={() => onChange('table')}
        label="표"
      >
        <TableIcon />
      </ToggleButton>
    </div>
  )
}

interface ToggleButtonProps {
  active: boolean
  onClick: () => void
  label: string
  children: React.ReactNode
}

function ToggleButton({ active, onClick, label, children }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors ${
        active ? 'bg-brand text-black' : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {children}
      {label}
    </button>
  )
}
