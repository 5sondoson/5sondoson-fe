import { getNationalityFlag, type TopLeagueKey } from '@/shared/lib/league'

export const TOP_LEAGUE_TABS: {
  key: TopLeagueKey
  flag: string
  label: string
}[] = [
  { key: 'EPL', flag: getNationalityFlag('gb-eng'), label: '프리미어리그' },
  { key: 'LA', flag: getNationalityFlag('es'), label: '라리가' },
  { key: 'BL', flag: getNationalityFlag('de'), label: '분데스리가' },
  { key: 'SA', flag: getNationalityFlag('it'), label: '세리에 A' },
  { key: 'L1', flag: getNationalityFlag('fr'), label: '리그 1' },
]
