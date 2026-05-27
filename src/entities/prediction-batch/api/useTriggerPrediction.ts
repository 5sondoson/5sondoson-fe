import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import api from '@/shared/api/axios'
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

  try {
    await api.post(
      `/admin/api/predictions/${stepPath}`,
      { destinationLeague },
      { headers: { [ADMIN_TOKEN_HEADER]: token } },
    )
  } catch (err) {
    if (!axios.isAxiosError(err)) {
      throw new Error('적재 요청에 실패했습니다.')
    }
    const status = err.response?.status
    if (status === 403) {
      throw new Error('인증에 실패했습니다. 관리자 토큰을 확인하세요.')
    }
    if (status === 400) {
      throw new Error('잘못된 요청입니다. 리그 선택을 확인하세요.')
    }
    if (status && status >= 500) {
      throw new Error('서버 오류로 적재 요청에 실패했습니다.')
    }
    throw new Error(
      status ? `적재 요청 실패 (HTTP ${status})` : '적재 요청에 실패했습니다.',
    )
  }
}

export function useTriggerPrediction() {
  return useMutation({ mutationFn: triggerPrediction })
}
