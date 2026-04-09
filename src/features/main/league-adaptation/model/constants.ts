import type { TopLeagueKey } from '@/shared/lib/league'

export const TOP_LEAGUE_TABS: {
  key: TopLeagueKey
  flag: string
  label: string
}[] = [
  { key: 'EPL', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', label: '프리미어리그' },
  { key: 'LA', flag: '🇪🇸', label: '라리가' },
  { key: 'BL', flag: '🇩🇪', label: '분데스리가' },
  { key: 'SA', flag: '🇮🇹', label: '세리에 A' },
  { key: 'L1', flag: '🇫🇷', label: '리그 1' },
]
