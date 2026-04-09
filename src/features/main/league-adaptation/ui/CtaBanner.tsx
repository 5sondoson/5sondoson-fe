import { useNavigate } from 'react-router'

export default function CtaBanner() {
  const navigate = useNavigate()
  return (
    <section className="px-5 pb-16">
      <div
        className="max-w-4xl mx-auto flex items-center justify-between gap-6 px-8 py-7 rounded-2xl border"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,199,133,0.15), rgba(0,163,110,0.08))',
          borderColor: 'rgba(0,199,133,0.20)',
        }}
      >
        <div className="flex flex-col gap-1.5">
          <h2 className="text-base font-semibold text-white">
            지금 선수를 검색해보세요
          </h2>
          <p className="text-sm text-[#94A3B8]">
            감이 아닌 데이터로, 다음 이적 시장을 먼저 읽어보세요.
          </p>
        </div>

        <button
          onClick={() => navigate('/search')}
          className="cursor-pointer flex-shrink-0 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 transition-colors duration-150 text-xs font-semibold text-black"
        >
          선수 검색하기
        </button>
      </div>
    </section>
  )
}
