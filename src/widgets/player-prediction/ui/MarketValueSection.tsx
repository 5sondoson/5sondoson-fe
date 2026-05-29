import { formatMarketValue } from '@/entities/player'
import type { MarketValueSectionProps } from '../model/type'

export function MarketValueSection({
  currentMarketValue,
  predictedMarketValue,
  marketValueChangeRate,
}: MarketValueSectionProps) {
  const changePercent =
    marketValueChangeRate != null
      ? Math.round(marketValueChangeRate * 100)
      : null
  const isPositive = (changePercent ?? 0) >= 0

  const currentDisplay = formatMarketValue(currentMarketValue)
  const predictedDisplay = formatMarketValue(predictedMarketValue)

  return (
    <div
      className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between px-4 sm:px-6 py-4 sm:py-5 rounded-2xl"
      style={{
        background: 'rgba(0,199,133,0.06)',
        border: '1px solid rgba(0,199,133,0.20)',
      }}
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-gray-400">예측 시장가치 변화</span>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-white">
            {currentDisplay}
          </span>
          <span className="text-gray-500">→</span>
          <span className="text-2xl font-bold text-emerald-400">
            {predictedDisplay}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span
          className={`text-xl font-bold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}
        >
          {changePercent != null
            ? `${isPositive ? '+' : ''}${changePercent}%`
            : '-'}
        </span>
        <span className="text-xs text-text-gray">
          {changePercent != null
            ? isPositive
              ? '가치 상승 예측'
              : '가치 하락 예측'
            : '데이터 없음'}
        </span>
      </div>
    </div>
  )
}
