export default function HeroBanner() {
  return (
    <section className="text-white w-full mt-20 mb-5 px-6 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1 rounded-full text-sm mb-6 border border-brand">
          <span className="w-2 h-2 bg-brand rounded-full" />
          ML 기반 이적 예측 서비스
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          비5대리그 선수의 <br />
          <span className="text-brand">이적 가능성</span>을 예측합니다
        </h1>

        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
          데이터 기반 스카우팅으로 “이 선수가 EPL에 가면?”에 대한 답을{' '}
          <br className="hidden md:block" />
          즉시 확인하세요.
        </p>
      </div>
    </section>
  )
}
