const LEAGUE_EMBLEMS: Record<string, string> = {
  eredivisie: '/leagues/eredivisie.svg',
  'primeira liga': '/leagues/primeira-liga.svg',
  'belgian pro league': '/leagues/belgian-pro-league.svg',
}

const LEAGUE_DISPLAY_NAME: Record<string, string> = {
  eredivisie: 'Eredivisie',
  'primeira liga': 'Primeira Liga',
  'belgian pro league': 'Belgian Pro League',
}

export function getLeagueDisplayName(league: string): string {
  return LEAGUE_DISPLAY_NAME[league.toLowerCase()] ?? league
}

export function getLeagueEmblem(league: string): string | undefined {
  return LEAGUE_EMBLEMS[league.toLowerCase()]
}

export function getNationalityFlag(nationality: string): string {
  return `https://flagcdn.com/${nationality.toLowerCase()}.svg`
}
