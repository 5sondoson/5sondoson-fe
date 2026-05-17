import { useMutation } from '@tanstack/react-query'

async function verifyAdminToken(token: string): Promise<boolean> {
  const res = await fetch('/admin/api/auth/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminToken: token }),
  })

  if (res.status === 200) return true
  if (res.status === 401 || res.status === 403) return false

  throw new Error('인증 서버에 연결할 수 없습니다. 잠시 후 다시 시도하세요.')
}

export function useVerifyAdminToken() {
  return useMutation({ mutationFn: verifyAdminToken })
}
