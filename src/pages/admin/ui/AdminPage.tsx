import { useState } from 'react'
import {
  AdminGate,
  PredictionBatchPanel,
  ExecutionHistory,
  useExecutionHistory,
} from '@/features/admin-prediction'
import {
  getAdminToken,
  setAdminToken,
  clearAdminToken,
} from '@/shared/lib/adminToken'

export function AdminPage() {
  const [token, setToken] = useState<string | null>(getAdminToken)
  const { entries, append, clear } = useExecutionHistory()

  const handleAuth = (next: string) => {
    setAdminToken(next)
    setToken(next)
  }

  const handleLogout = () => {
    clearAdminToken()
    setToken(null)
  }

  if (!token) {
    return <AdminGate onSubmit={handleAuth} />
  }

  return (
    <div className="min-h-screen bg-page text-white">
      <header className="border-b border-line/12">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-5">
          <span className="text-base font-bold tracking-tight text-white">
            Footure
            <span className="ml-2 align-middle text-[11px] font-semibold text-brand bg-brand/10 border border-brand/40 rounded px-1.5 py-0.5">
              ADMIN
            </span>
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-8 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          관리자 콘솔
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          예측 데이터 적재
        </h1>
        <p className="mt-2 text-sm text-text-gray leading-relaxed">
          적재는 백그라운드에서 비동기로 처리됩니다. 진행 상태는 제공되지
          않으며, 결과는 서비스 화면에서 확인할 수 있습니다.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-stretch">
          <section className="rounded-2xl bg-card ring-1 ring-border p-8">
            <PredictionBatchPanel onTriggered={append} />
          </section>

          <aside className="lg:relative">
            <div className="custom-scrollbar rounded-2xl bg-card ring-1 ring-border p-6 lg:absolute lg:inset-0 lg:overflow-y-auto">
              <ExecutionHistory entries={entries} onClear={clear} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
