import type { LeagueSelectorProps } from '../model/type'

export default function LeagueSelector({
  leagueKey,
  flag,
  label,
  isActive,
  onClick,
}: LeagueSelectorProps) {
  return (
    <button
      onClick={() => onClick(leagueKey)}
      className={`
        flex flex-1 items-center justify-center gap-2 px-3 py-2.5 rounded-lg
        outline-none ring-1 ring-border text-sm font-medium transition-all duration-150 cursor-pointer
        ${
          isActive
            ? 'ring-brand bg-emerald-500/10 text-emerald-400'
            : 'border-white/10 bg-button/80 text-gray-400 hover:border-white/20 hover:text-gray-300'
        }
      `}
    >
      <span className="text-base leading-none">{flag}</span>
      <span className="hidden sm:inline whitespace-nowrap">{label}</span>
    </button>
  )
}
