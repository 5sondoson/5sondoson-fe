const ADMIN_TOKEN_STORAGE_KEY = 'admin:x-admin-token'

export const ADMIN_TOKEN_HEADER = 'X-ADMIN-TOKEN'

export function getAdminToken(): string | null {
  try {
    return sessionStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)
  } catch {
    return null
  }
}

export function setAdminToken(token: string): void {
  try {
    sessionStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token)
  } catch {
    /* sessionStorage 비활성 환경 무시 */
  }
}

export function clearAdminToken(): void {
  try {
    sessionStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)
  } catch {
    /* noop */
  }
}
