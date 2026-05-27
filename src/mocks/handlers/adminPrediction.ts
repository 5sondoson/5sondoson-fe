import { http, HttpResponse, delay } from 'msw'

const STEPS = [
  'pipeline',
  'performance',
  'market-value',
  'similar-players',
] as const

const VALID_LEAGUES = ['EPL', 'LA', 'BL', 'SA', 'L1']

const MOCK_ADMIN_TOKEN = 'mockadmin'

const forbiddenAdminTokenResponse = () =>
  HttpResponse.json(
    {
      code: 'FORBIDDEN_ADMIN_TOKEN',
      message: '어드민 토큰이 유효하지 않습니다.',
    },
    { status: 403 },
  )

const adminVerifyHandler = http.post(
  '/admin/api/auth/verify',
  async ({ request }) => {
    await delay(300)
    const body = (await request.json().catch(() => null)) as {
      adminToken?: string
    } | null
    if (!body?.adminToken || body.adminToken !== MOCK_ADMIN_TOKEN) {
      return forbiddenAdminTokenResponse()
    }
    return new HttpResponse(null, { status: 200 })
  },
)

const predictionStepHandlers = STEPS.map((step) =>
  http.post(`/admin/api/predictions/${step}`, async ({ request }) => {
    await delay(400)

    const token = request.headers.get('X-ADMIN-TOKEN')
    if (!token || token !== MOCK_ADMIN_TOKEN) {
      return forbiddenAdminTokenResponse()
    }

    const body = (await request.json().catch(() => null)) as {
      destinationLeague?: string
    } | null
    if (
      !body?.destinationLeague ||
      !VALID_LEAGUES.includes(body.destinationLeague)
    ) {
      return HttpResponse.json(
        { code: 'INVALID_LEAGUE', message: '허용 값: EPL, LA, BL, SA, L1' },
        { status: 400 },
      )
    }

    return new HttpResponse(null, { status: 202 })
  }),
)

export const adminPredictionHandlers = [
  adminVerifyHandler,
  ...predictionStepHandlers,
]
