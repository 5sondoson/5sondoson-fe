import type { PredictionStepDef } from './types'

export const PIPELINE_STEP: PredictionStepDef = {
  key: 'pipeline',
  path: 'pipeline',
  label: '전체 파이프라인',
  failurePolicy: '한 단계라도 실패하면 이후 단계 없이 전체가 즉시 중단됩니다.',
  kind: 'pipeline',
}

export const INDIVIDUAL_STEPS: PredictionStepDef[] = [
  {
    key: 'performance',
    path: 'performance',
    label: '퍼포먼스 예측',
    failurePolicy: '실패한 청크는 건너뛰고 나머지 선수는 계속 적재합니다.',
    kind: 'step',
  },
  {
    key: 'market-value',
    path: 'market-value',
    label: '시장가치 예측',
    failurePolicy: '실패한 청크는 건너뛰고 나머지 선수는 계속 적재합니다.',
    kind: 'step',
  },
  {
    key: 'similar-players',
    path: 'similar-players',
    label: '유사 선수 추천',
    failurePolicy: '실패한 청크는 건너뛰고 나머지 선수는 계속 적재합니다.',
    kind: 'step',
  },
]

export const EXECUTION_HISTORY_STORAGE_KEY = 'admin:prediction-history'
export const MAX_HISTORY_ENTRIES = 50
