const LEAGUE_INFO: Record<
  string,
  { displayName: string; emblem: string; countryCode: string }
> = {
  eredivisie: {
    displayName: '에레디비지에',
    emblem: '/leagues/eredivisie.svg',
    countryCode: 'nl',
  },
  'primeira liga': {
    displayName: '프리메이라 리가',
    emblem: '/leagues/primeira-liga.svg',
    countryCode: 'pt',
  },
  'belgian pro league': {
    displayName: '벨기에 프로 리그',
    emblem: '/leagues/belgian-pro-league.svg',
    countryCode: 'be',
  },
}

export function getLeagueDisplayName(league: string): string {
  return LEAGUE_INFO[league.toLowerCase()]?.displayName ?? league
}

export function getLeagueEmblem(league: string): string | undefined {
  return LEAGUE_INFO[league.toLowerCase()]?.emblem
}

export function getNationalityFlag(nationality: string): string {
  return `https://flagcdn.com/${nationality.toLowerCase()}.svg`
}

export function getLeagueOptionFlag(league: string): string | undefined {
  const info = LEAGUE_INFO[league.toLowerCase()]
  return info ? getNationalityFlag(info.countryCode) : undefined
}

export type TopLeagueKey = 'EPL' | 'LA' | 'BL' | 'SA' | 'L1'

export interface Player {
  name: string
  club: string
  flag: string
  pos: string
  initials: string
  adapt: number
}

export interface LeagueData {
  label: string
  players: Player[]
}
