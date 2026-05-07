import { PLAYER_DETAIL_TABS, type PlayerDetailTabLabel } from '../model/types'

interface PlayerDetailTabsProps {
  activeTab: PlayerDetailTabLabel
  onTabChange: (tab: PlayerDetailTabLabel) => void
}

export function PlayerDetailTabs({
  activeTab,
  onTabChange,
}: PlayerDetailTabsProps) {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex h-12.5 w-74 items-center rounded-xl bg-card/80 p-1">
          {PLAYER_DETAIL_TABS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => onTabChange(label)}
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
