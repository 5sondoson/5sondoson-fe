import ListViewIcon from '@/assets/icons/list-view.svg?react'
import GridViewIcon from '@/assets/icons/grid-view.svg?react'
import { type ViewToggleProps } from '../model/types'

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-1 rounded-lg bg-card/60 p-1 ring-1 ring-[#94A3B8]/12">
      <button
        onClick={() => onViewChange('list')}
        className={`rounded p-1.5 transition-colors ${
          view === 'list'
            ? 'bg-brand/10 text-brand'
            : 'text-gray-500 hover:text-gray-300'
        }`}
        aria-label="리스트 뷰"
      >
        <ListViewIcon />
      </button>
      <button
        onClick={() => onViewChange('grid')}
        className={`rounded p-1.5 transition-colors ${
          view === 'grid'
            ? 'bg-brand/10 text-brand'
            : 'text-gray-500 hover:text-gray-300'
        }`}
        aria-label="그리드 뷰"
      >
        <GridViewIcon />
      </button>
    </div>
  )
}
