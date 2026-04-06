import PredictIcon from '@/assets/icons/predict.svg?react'
import HistoryIcon from '@/assets/icons/history.svg?react'
import SimilarPlayerIcon from '@/assets/icons/person.svg?react'

const FEATURE_ITEMS = [
  {
    id: 'history',
    icon: <HistoryIcon />,
    title: '시즌별 퍼포먼스 히스토리 분석',
    description:
      '선수의 시즌별 골, 도움, xG 등 핵심 지표를 한눈에 확인하세요. 과거 데이터를 기반으로 선수의 성장 흐름을 파악할 수 있습니다.',
    accent: 'emerald',
  },
  {
    id: 'predict',
    icon: <PredictIcon />,
    title: '이적 퍼포먼스 예측',
    description:
      '5대리그 이적 후 예상 골, 도움, 평점을 ML로 예측합니다. 새로운 환경에서 선수가 얼마나 활약할 수 있는지 데이터로 확인하세요.',
    accent: 'blue',
  },
  {
    id: 'similar',
    icon: <SimilarPlayerIcon />,
    title: '유사 선수 매칭',
    description:
      '이적 예측 지표 기반으로 5대리그 내 유사한 퍼포먼스의 선수를 추천합니다. 대안 영입 후보를 데이터로 찾아보세요.',
    accent: 'rose',
  },
] as const

const ACCENT_STYLES = {
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-400',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-400',
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-400',
  },
}

export default function FeatureHighlightSection() {
  return (
    <section className="py-14 px-6 text-center">
      <h2 className="text-2xl font-semibold text-white">
        스카우터의 눈으로, 데이터로
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Footure가 제공하는 핵심 분석 기능
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {FEATURE_ITEMS.map(({ id, icon, title, description, accent }) => {
          const style = ACCENT_STYLES[accent]
          return (
            <div
              key={id}
              className="flex flex-col gap-4 text-left p-5 rounded-xl bg-white/[0.03] transition-all duration-200 "
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${style.icon}`}
              >
                {icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-medium text-white">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
