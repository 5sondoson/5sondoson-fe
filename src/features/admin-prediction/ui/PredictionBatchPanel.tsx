import { useState } from 'react'
import toast from 'react-hot-toast'
import ConfirmDialog from '@/shared/ui/ConfirmDialog'
import { TOP_LEAGUE_TABS, type TopLeagueKey } from '@/shared/lib/league'
import { useTriggerPrediction } from '@/entities/prediction-batch'
import { PIPELINE_STEP, INDIVIDUAL_STEPS } from '../model/constants'
import type { ExecutionLogEntry, PredictionStepDef } from '../model/types'

interface PredictionBatchPanelProps {
  onTriggered: (entry: Omit<ExecutionLogEntry, 'id' | 'triggeredAt'>) => void
}

export default function PredictionBatchPanel({
  onTriggered,
}: PredictionBatchPanelProps) {
  const [leagueKey, setLeagueKey] = useState<TopLeagueKey | null>(null)
  const [pending, setPending] = useState<PredictionStepDef | null>(null)
  const { mutate, isPending } = useTriggerPrediction()

  const selectedLeague = TOP_LEAGUE_TABS.find((l) => l.key === leagueKey)
  const disabled = !leagueKey || isPending

  const handleConfirm = () => {
    if (!pending || !leagueKey || !selectedLeague) return
    const step = pending
    mutate(
      { stepPath: step.path, destinationLeague: leagueKey },
      {
        onSuccess: () => {
          onTriggered({
            stepKey: step.key,
            stepLabel: step.label,
            leagueKey,
            leagueLabel: selectedLeague.label,
          })
          toast.success(
            `${selectedLeague.label} · ${step.label} 적재를 요청했습니다.`,
          )
          setPending(null)
        },
        onError: (err) => {
          toast.error(
            err instanceof Error ? err.message : '적재 요청에 실패했습니다.',
          )
          setPending(null)
        },
      },
    )
  }

  return (
    <div>
      <p className="text-sm font-medium text-white">이적 목적지 리그</p>
      <p className="mt-1 text-xs text-text-gray">
        적재할 대상 리그를 선택합니다.
      </p>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-2">
        {TOP_LEAGUE_TABS.map((league) => {
          const active = leagueKey === league.key
          return (
            <button
              key={league.key}
              type="button"
              onClick={() => setLeagueKey(league.key)}
              className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-medium transition-all duration-150 cursor-pointer ring-1 ${
                active
                  ? 'ring-brand bg-emerald-500/10 text-emerald-400'
                  : 'ring-border bg-button/80 text-gray-400 hover:text-gray-200'
              }`}
            >
              <img
                src={league.flag}
                alt=""
                className="h-3.5 w-5 shrink-0 rounded-xs object-cover"
              />
              <span className="truncate">{league.label}</span>
            </button>
          )
        })}
      </div>

      <div
        className="mt-6 rounded-2xl p-5"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(0,199,133,0.094), rgba(0,199,133,0.03))',
          border: '1px solid rgba(0,199,133,0.19)',
        }}
      >
        <p className="text-sm font-semibold text-white">전체 파이프라인 적재</p>
        <p className="mt-1 text-xs text-text-gray leading-relaxed">
          퍼포먼스 → 시장가치 → 유사 선수 순으로 실행됩니다.
          <br />한 단계라도 실패하면 즉시 중단됩니다.
        </p>
        <button
          type="button"
          disabled={disabled}
          onClick={() => setPending(PIPELINE_STEP)}
          className="mt-4 w-full rounded-xl bg-brand hover:bg-brand-hover text-black font-semibold text-sm py-3.5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          전체 파이프라인 실행
        </button>
      </div>

      <div className="my-6 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />

      <p className="text-sm font-medium text-white">개별 단계 실행</p>
      <p className="mt-1 text-xs text-text-gray">
        실패한 청크는 건너뛰고 계속 진행합니다.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {INDIVIDUAL_STEPS.map((step) => (
          <button
            key={step.key}
            type="button"
            disabled={disabled}
            onClick={() => setPending(step)}
            className="rounded-xl ring-1 ring-border bg-button/70 text-gray-300 text-xs font-medium py-3 hover:ring-brand hover:bg-emerald-500/10 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:ring-border disabled:hover:bg-button/70 disabled:hover:text-gray-300 cursor-pointer transition-all duration-150"
          >
            {step.label}
          </button>
        ))}
      </div>

      {!leagueKey && (
        <p className="mt-5 text-center text-xs text-text-gray">
          먼저 리그를 선택하세요.
        </p>
      )}

      <ConfirmDialog
        open={pending !== null}
        title={
          pending && selectedLeague
            ? `${selectedLeague.label} · ${pending.label}`
            : ''
        }
        description="기존 예측 데이터를 덮어쓰며 되돌릴 수 없습니다."
        confirmText="적재 실행"
        loading={isPending}
        onConfirm={handleConfirm}
        onCancel={() => !isPending && setPending(null)}
      />
    </div>
  )
}
