import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import api from '@/shared/api/axios'

async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    await api.post('/admin/api/auth/verify', { adminToken: token })
    return true
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 403) {
      return false
    }
    throw new Error('인증 서버에 연결할 수 없습니다. 잠시 후 다시 시도하세요.')
  }
}

export function useVerifyAdminToken() {
  return useMutation({ mutationFn: verifyAdminToken })
}
