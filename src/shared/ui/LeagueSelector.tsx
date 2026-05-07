import type { LeagueSelectorProps } from '../model/types'

export default function LeagueSelector({
  leagueKey,
  flag,
  label,
  isActive,
  onClick,
  variant = 'default',
  total,
}: LeagueSelectorProps) {
  const baseClass = `
    flex flex-1 items-center justify-center gap-2 px-5 py-2.5 rounded-lg
    outline-none text-sm font-medium transition-all duration-150 cursor-pointer
  `

  const variantClass = {
    default: isActive
      ? 'ring-1 ring-brand bg-emerald-500/10 text-emerald-400'
      : 'ring-1 ring-border bg-button/80 text-gray-400 hover:border-white/20 hover:text-gray-300',

    prediction: isActive
      ? 'bg-button text-white '
      : 'bg-transparent text-gray-500 ',
  }

  return (
    <button
      onClick={() => onClick(leagueKey)}
      className={`${baseClass} ${variantClass[variant]}`}
    >
      <img className="w-5" src={flag} alt="국적국기" />
      <span className="hidden sm:inline whitespace-nowrap">{label}</span>
      {variant === 'prediction' && total !== undefined && isActive && (
        <span className="text-emerald-400 font-semibold px-1 py-0.5 text-xs bg-emerald-400/15 rounded">
          {total}
        </span>
      )}
    </button>
  )
}
