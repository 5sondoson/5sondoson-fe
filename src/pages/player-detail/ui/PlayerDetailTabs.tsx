import HistoryIcon from '@/assets/icons/history.svg?react'
import TransferIcon from '@/assets/icons/transfer.svg?react'
import type { PlayerDetailTabLabel } from '../model/types'

const TABS = [
  { label: '선수 히스토리', icon: HistoryIcon },
  { label: '이적 예측', icon: TransferIcon },
] as const satisfies readonly {
  label: PlayerDetailTabLabel
  icon: typeof HistoryIcon
}[]

interface PlayerDetailTabsProps {
  activeTab: PlayerDetailTabLabel
  onChange: (tab: PlayerDetailTabLabel) => void
}

export function PlayerDetailTabs({
  activeTab,
  onChange,
}: PlayerDetailTabsProps) {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex h-12.5 w-74 items-center rounded-xl bg-card/80 p-1">
          {TABS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => onChange(label)}
              className={`cursor-pointer flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition-all ${
                activeTab === label
                  ? 'bg-brand text-black shadow-sm'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon width={14} height={14} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
