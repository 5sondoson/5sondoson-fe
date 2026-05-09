import type { ComponentType, SVGProps } from 'react'
import TrendUpIcon from '@/assets/icons/trend-up.svg?react'
import TrendDownIcon from '@/assets/icons/trend-down.svg?react'
import TrendFlatIcon from '@/assets/icons/trend-flat.svg?react'
import {
  formatGrowthPercent,
  formatMarketValue,
  shortenSeason,
  TREND_PRESET,
  type Trend,
} from '@/entities/player'
import type { GrowthSummaryCardsProps } from '../model/type'

const TREND_ICON: Record<Trend, ComponentType<SVGProps<SVGSVGElement>>> = {
  UP: TrendUpIcon,
  DOWN: TrendDownIcon,
  FLAT: TrendFlatIcon,
}

export function GrowthSummaryCards({
  summary,
  seasonCount,
}: GrowthSummaryCardsProps) {
  const { totalMarketValueGrowth, peakSeason, currentTrend } = summary
  const trend = TREND_PRESET[currentTrend.trend]
  const TrendIcon = TREND_ICON[currentTrend.trend]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <SummaryCard
        label="총 성장률"
        valueClassName="text-brand"
        value={
          totalMarketValueGrowth.value !== null
            ? formatGrowthPercent(totalMarketValueGrowth.value)
            : '—'
        }
        caption={`지난 ${seasonCount}시즌 대비`}
      />
      <SummaryCard
        label="피크 시즌"
        value={peakSeason ? shortenSeason(peakSeason.season) : '—'}
        caption={
          peakSeason ? (
            <>
              <span className="text-brand">
                {formatMarketValue(peakSeason.marketValue)}
              </span>{' '}
              (최고 가치)
            </>
          ) : (
            '데이터 부족'
          )
        }
      />
      <SummaryCard
        label="현재 트렌드"
        value={
          <span className="inline-flex items-center gap-2">
            <span
              className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${trend.bgClass} ${trend.colorClass}`}
            >
              <TrendIcon width={14} height={14} aria-hidden />
            </span>
            <span className={trend.colorClass}>{trend.label}</span>
          </span>
        }
        caption="최근 3시즌 기준"
      />
    </div>
  )
}

interface SummaryCardProps {
  label: string
  value: React.ReactNode
  caption: React.ReactNode
  valueClassName?: string
}

function SummaryCard({
  label,
  value,
  caption,
  valueClassName = 'text-gray-100',
}: SummaryCardProps) {
  return (
    <div className="rounded-xl bg-card/80 p-5">
      <p className="text-xs text-gray-400">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${valueClassName}`}>{value}</p>
      <p className="mt-2 text-xs text-gray-500">{caption}</p>
    </div>
  )
}
