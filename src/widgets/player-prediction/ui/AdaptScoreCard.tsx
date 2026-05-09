import type { AdaptScoreCardProps } from '../model/type'

export function AdaptScoreCard({
  leagueLabel,
  leagueFlag,
  total,
}: AdaptScoreCardProps) {
  const getLabel = (score: number) => {
    if (score >= 85) return '최적의 이적지'
    if (score >= 70) return '적응 가능'
    return '적응 어려움'
  }

  return (
    <div
      className=" mt-5 flex flex-col items-center justify-between gap-3 px-8 py-5.5 rounded-2xl border"
      style={{
        background:
          'linear-gradient(to bottom right, rgba(0,199,133,0.094), rgba(0,199,133,0.03))',
        border: '1px solid rgba(0,199,133,0.19)',
      }}
    >
      <span className="text-text-gray -mb-2 flex items-center gap-2">
        <img src={leagueFlag} alt="국기" className="w-5 h-4 object-cover" />
        {leagueLabel} 적응도 점수
      </span>

      <div className="flex items-end gap-4">
        <span className="text-7xl font-bold text-emerald-400">{total}</span>
        <span className="text-3xl text-gray-500 ">/ 100</span>
      </div>

      <div className="w-full max-w-xs h-3 mt-1 rounded-full bg-white/10">
        <div
          className="h-3 rounded-full bg-emerald-400 transition-all duration-500"
          style={{ width: `${total}%` }}
        />
      </div>

      <span className="text-sm text-emerald-400">{getLabel(total)}</span>
    </div>
  )
}
