import { useMutation } from '@tanstack/react-query'
import type { TopLeagueKey } from '@/shared/lib/league'
import { getAdminToken, ADMIN_TOKEN_HEADER } from '@/shared/lib/adminToken'

interface TriggerParams {
  stepPath: string
  destinationLeague: TopLeagueKey
}

async function triggerPrediction({
  stepPath,
  destinationLeague,
}: TriggerParams) {
  const token = getAdminToken()
  if (!token) {
    throw new Error('관리자 토큰이 없습니다. 다시 로그인하세요.')
  }

  const res = await fetch(`/admin/api/predictions/${stepPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [ADMIN_TOKEN_HEADER]: token,
    },
    body: JSON.stringify({ destinationLeague }),
  })

  if (res.status === 202) return

  if (res.status === 401 || res.status === 403) {
    throw new Error('인증에 실패했습니다. 관리자 토큰을 확인하세요.')
  }
  if (res.status === 400) {
    throw new Error('잘못된 요청입니다. 리그 선택을 확인하세요.')
  }
  if (res.status >= 500) {
    throw new Error('서버 오류로 적재 요청에 실패했습니다.')
  }
  throw new Error(`적재 요청 실패 (HTTP ${res.status})`)
}

export function useTriggerPrediction() {
  return useMutation({ mutationFn: triggerPrediction })
}
