import { useState, type FormEvent } from 'react'
import { useVerifyAdminToken } from '@/entities/prediction-batch'

interface AdminGateProps {
  onSubmit: (token: string) => void
}

export default function AdminGate({ onSubmit }: AdminGateProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const { mutateAsync, isPending } = useVerifyAdminToken()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const token = value.trim()
    if (!token) {
      setError('토큰을 입력하세요.')
      return
    }
    setError(null)
    try {
      const valid = await mutateAsync(token)
      if (valid) {
        onSubmit(token)
      } else {
        setError('유효하지 않은 토큰입니다.')
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '인증에 실패했습니다. 다시 시도하세요.',
      )
    }
  }

  return (
    <div className="min-h-screen bg-page flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <span className="text-xl font-bold tracking-tight text-white">
            Footure
            <span className="ml-2 align-middle text-[11px] font-semibold text-brand bg-brand/10 border border-brand/40 rounded px-1.5 py-0.5">
              ADMIN
            </span>
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card ring-1 ring-border p-7"
        >
          <h1 className="text-xl font-bold text-white">관리자 인증</h1>
          <p className="mt-2 text-sm text-text-gray leading-relaxed">
            예측 데이터 적재 콘솔에 접근하려면
            <br />
            관리자 토큰이 필요합니다.
          </p>

          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (error) setError(null)
            }}
            placeholder="관리자 토큰"
            autoFocus
            disabled={isPending}
            className={`mt-6 w-full rounded-xl bg-input px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none ring-1 transition-colors disabled:opacity-60 ${
              error ? 'ring-red-500/60' : 'ring-border focus:ring-brand'
            }`}
          />
          {error && <p className="mt-2 text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="mt-4 w-full rounded-xl bg-brand hover:bg-brand-hover text-black font-semibold text-base py-3.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isPending ? '확인 중' : '입장'}
          </button>
        </form>
      </div>
    </div>
  )
}
