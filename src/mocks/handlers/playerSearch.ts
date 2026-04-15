import { http, HttpResponse, delay } from 'msw'
import {
  MOCK_PLAYER_SEARCH_LIST,
  type League,
  type Position,
} from '../data/playerSearchList'

const VALID_LEAGUES: League[] = ['eredivisie', 'primeira_liga', 'pro_league']
const VALID_POSITIONS: Position[] = ['FW', 'MF', 'DF', 'GK']

export const playerSearchHandler = http.get(
  '/api/players/search',
  async ({ request }) => {
    await delay(200)

    const url = new URL(request.url)
    const keyword = url.searchParams.get('keyword') ?? ''
    const league = url.searchParams.get('league') as League | null
    const position = url.searchParams.get('position') as Position | null
    const size = Number(url.searchParams.get('size') ?? 20)
    const page = Number(url.searchParams.get('page') ?? 1)
    const isActive = url.searchParams.get('isActive')

    if (keyword && keyword.length < 2) {
      return HttpResponse.json(
        {
          code: 'INVALID_QUERY_LENGTH',
          message: '검색어는 최소 2자 이상 입력해야 합니다.',
        },
        { status: 400 },
      )
    }

    if (league && !VALID_LEAGUES.includes(league)) {
      return HttpResponse.json(
        {
          code: 'INVALID_LEAGUE',
          message: '허용 값: eredivisie, primeira_liga, pro_league',
        },
        { status: 400 },
      )
    }

    if (position && !VALID_POSITIONS.includes(position)) {
      return HttpResponse.json(
        { code: 'INVALID_POSITION', message: '허용 값: FW, MF, DF, GK' },
        { status: 400 },
      )
    }

    let results = MOCK_PLAYER_SEARCH_LIST.filter((player) => {
      if (keyword && !player.name.toLowerCase().includes(keyword.toLowerCase()))
        return false
      if (league && player.league !== league) return false
      if (position && player.position !== position) return false
      if (isActive !== null) {
        const active = player.age !== null && player.age < 38
        if (isActive === 'true' && !active) return false
        if (isActive === 'false' && active) return false
      }
      return true
    })

    const totalElements = results.length
    const totalPages = Math.max(1, Math.ceil(totalElements / size))
    results = results.slice((page - 1) * size, page * size)

    return HttpResponse.json({
      data: {
        pagination: { page, size, totalPages, totalElements },
        results,
      },
    })
  },
)
