import StatItem from './StatItem'

export default function StatsSection() {
  return (
    <section className="w-full  px-6 py-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <div className="flex justify-center gap-12 md:gap-20">
          <StatItem value="12,400+" label="분석된 선수" />
          <StatItem value="3개" label="커버 리그" />
          <StatItem value="92%" label="예측 정확도" />
        </div>
      </div>
    </section>
  )
}
