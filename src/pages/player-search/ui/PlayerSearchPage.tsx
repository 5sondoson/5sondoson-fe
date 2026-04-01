import { useState } from 'react'
import {
  PlayerListCard,
  PlayerGridCard,
  type PlayerCardProps,
} from '@/entities/player'
import {
  SearchBar,
  FilterPanel,
  ViewToggle,
  Pagination,
  type ViewType,
} from '@/features/player-search'
import { type PlayerSearchPageProps } from '../model/types'

const ITEMS_PER_PAGE = 12

const MOCK_PLAYERS: PlayerCardProps[] = [
  {
    playerId: 'sporting_viktor_gyokeres_001',
    name: 'Viktor Gyokeres',
    nameKo: '빅토르 예케레스',
    nationality: 'se',
    team: 'Sporting CP',
    league: 'primeira liga',
    position: 'FW',
    age: 26,
    rating: 8.9,
    marketValue: 90_000_000,
    keyStats: [
      { label: '득점', value: 43 },
      { label: 'xG', value: '35.2' },
    ],
  },
  {
    playerId: 'feyenoord_santiago_gimenez_001',
    name: 'Santiago Gimenez',
    nameKo: '산티아고 히메네스',
    nationality: 'mx',
    team: 'Feyenoord',
    league: 'eredivisie',
    position: 'FW',
    age: 23,
    rating: 8.1,
    marketValue: 40_000_000,
    keyStats: [
      { label: '득점', value: 23 },
      { label: 'xG', value: '19.8' },
    ],
  },
  {
    playerId: 'psv_xavi_simons_001',
    name: 'Xavi Simons',
    nameKo: '하비 시몬스',
    nationality: 'nl',
    team: 'PSV Eindhoven',
    league: 'eredivisie',
    position: 'MF',
    age: 22,
    rating: 8.3,
    marketValue: 80_000_000,
    keyStats: [
      { label: '어시스트', value: 14 },
      { label: '키패스', value: 87 },
    ],
  },
  {
    playerId: 'benfica_vangelis_pavlidis_001',
    name: 'Vangelis Pavlidis',
    nameKo: '반겔리스 파블리디스',
    nationality: 'gr',
    team: 'Benfica',
    league: 'primeira liga',
    position: 'FW',
    age: 28,
    rating: 7.9,
    marketValue: 30_000_000,
    keyStats: [
      { label: '득점', value: 28 },
      { label: 'xG', value: '22.4' },
    ],
  },
  {
    playerId: 'brugge_hans_vanaken_001',
    name: 'Hans Vanaken',
    nameKo: '한스 바나켄',
    nationality: 'be',
    team: 'Club Brugge',
    league: 'belgian pro league',
    position: 'MF',
    age: 32,
    rating: 7.8,
    marketValue: 12_000_000,
    keyStats: [
      { label: '어시스트', value: 16 },
      { label: '키패스', value: 94 },
    ],
  },
  {
    playerId: 'sporting_pedro_goncalves_001',
    name: 'Pedro Gonçalves',
    nameKo: '페드루 곤살베스',
    nationality: 'pt',
    team: 'Sporting CP',
    league: 'primeira liga',
    position: 'MF',
    age: 26,
    rating: 7.7,
    marketValue: 35_000_000,
    keyStats: [
      { label: '어시스트', value: 12 },
      { label: '키패스', value: 76 },
    ],
  },
  {
    playerId: 'cercle_gustaf_nilsson_001',
    name: 'Gustaf Nilsson',
    nameKo: '구스타프 닐손',
    nationality: 'se',
    team: 'Cercle Brugge',
    league: 'belgian pro league',
    position: 'FW',
    age: 25,
    rating: 7.5,
    marketValue: 8_000_000,
    keyStats: [
      { label: '득점', value: 18 },
      { label: 'xG', value: '16.1' },
    ],
  },
  {
    playerId: 'brugge_ardon_jashari_001',
    name: 'Ardon Jashari',
    nameKo: '아르돈 야샤리',
    nationality: 'ch',
    team: 'Club Brugge',
    league: 'belgian pro league',
    position: 'MF',
    age: 22,
    rating: 7.6,
    marketValue: 25_000_000,
    keyStats: [
      { label: '패스 성공률', value: '91%' },
      { label: '압박 성공', value: 84 },
    ],
  },
  {
    playerId: 'psv_noa_lang_001',
    name: 'Noa Lang',
    nameKo: '노아 랑',
    nationality: 'nl',
    team: 'PSV Eindhoven',
    league: 'eredivisie',
    position: 'FW',
    age: 25,
    rating: 7.8,
    marketValue: 35_000_000,
    keyStats: [
      { label: '어시스트', value: 11 },
      { label: '드리블 성공', value: 68 },
    ],
  },
  {
    playerId: 'benfica_orkun_kokcu_001',
    name: 'Orkun Kökçü',
    nameKo: '오르쿤 쾨크추',
    nationality: 'nl',
    team: 'Benfica',
    league: 'primeira liga',
    position: 'MF',
    age: 24,
    rating: 7.7,
    marketValue: 30_000_000,
    keyStats: [
      { label: '키패스', value: 72 },
      { label: '패스 성공률', value: '88%' },
    ],
  },
  {
    playerId: 'brugge_simon_mignolet_001',
    name: 'Simon Mignolet',
    nameKo: '시몽 미뇰레',
    nationality: 'be',
    team: 'Club Brugge',
    league: 'belgian pro league',
    position: 'GK',
    age: 36,
    rating: 7.9,
    marketValue: 4_000_000,
    keyStats: [
      { label: '선방률', value: '78%' },
      { label: '클린시트', value: 14 },
    ],
  },
  {
    playerId: 'benfica_angel_di_maria_001',
    name: 'Ángel Di María',
    nameKo: '앙헬 디 마리아',
    nationality: 'ar',
    team: 'Benfica',
    league: 'primeira liga',
    position: 'FW',
    age: 36,
    rating: 7.5,
    marketValue: 6_000_000,
    keyStats: [
      { label: '어시스트', value: 9 },
      { label: '드리블 성공', value: 44 },
    ],
  },
  {
    playerId: 'psv_luuk_de_jong_001',
    name: 'Luuk de Jong',
    nameKo: '뤼크 더 용',
    nationality: 'nl',
    team: 'PSV Eindhoven',
    league: 'eredivisie',
    position: 'FW',
    age: 34,
    rating: 7.4,
    marketValue: 5_000_000,
    keyStats: [
      { label: '득점', value: 16 },
      { label: 'xG', value: '13.2' },
    ],
  },
  {
    playerId: 'benfica_goncalo_ramos_001',
    name: 'Gonçalo Ramos',
    nameKo: '곤살루 하무스',
    nationality: 'pt',
    team: 'Benfica',
    league: 'primeira liga',
    position: 'FW',
    age: 23,
    rating: 7.8,
    marketValue: 60_000_000,
    keyStats: [
      { label: '득점', value: 21 },
      { label: 'xG', value: '17.5' },
    ],
  },
  {
    playerId: 'brugge_andreas_skov_olsen_001',
    name: 'Andreas Skov Olsen',
    nameKo: '안드레아스 스코우 올센',
    nationality: 'dk',
    team: 'Club Brugge',
    league: 'belgian pro league',
    position: 'FW',
    age: 24,
    rating: 7.6,
    marketValue: 18_000_000,
    keyStats: [
      { label: '어시스트', value: 10 },
      { label: '드리블 성공', value: 57 },
    ],
  },
  {
    playerId: 'psv_malik_tillman_001',
    name: 'Malik Tillman',
    nameKo: '말리크 틸만',
    nationality: 'us',
    team: 'PSV Eindhoven',
    league: 'eredivisie',
    position: 'MF',
    age: 22,
    rating: 7.5,
    marketValue: 22_000_000,
    keyStats: [
      { label: '어시스트', value: 8 },
      { label: '키패스', value: 61 },
    ],
  },
  {
    playerId: 'benfica_fredrik_aursnes_001',
    name: 'Fredrik Aursnes',
    nameKo: '프레드리크 아우르스네스',
    nationality: 'no',
    team: 'Benfica',
    league: 'primeira liga',
    position: 'MF',
    age: 29,
    rating: 7.4,
    marketValue: 20_000_000,
    keyStats: [
      { label: '패스 성공률', value: '89%' },
      { label: '압박 성공', value: 77 },
    ],
  },
  {
    playerId: 'antwerp_toby_alderweireld_001',
    name: 'Toby Alderweireld',
    nameKo: '토비 알더바이럴트',
    nationality: 'be',
    team: 'Royal Antwerp',
    league: 'belgian pro league',
    position: 'DF',
    age: 35,
    rating: 7.3,
    marketValue: 3_000_000,
    keyStats: [
      { label: '공중볼 승리', value: 74 },
      { label: '태클 성공', value: 58 },
    ],
  },
  {
    playerId: 'ajax_sebastien_haller_001',
    name: 'Sébastien Haller',
    nameKo: '세바스티앙 알레르',
    nationality: 'ci',
    team: 'AFC Ajax',
    league: 'eredivisie',
    position: 'FW',
    age: 30,
    rating: 7.3,
    marketValue: 12_000_000,
    keyStats: [
      { label: '득점', value: 14 },
      { label: 'xG', value: '12.8' },
    ],
  },
  {
    playerId: 'antwerp_zeki_amdouni_001',
    name: 'Zeki Amdouni',
    nameKo: '제키 암두니',
    nationality: 'ch',
    team: 'Royal Antwerp',
    league: 'belgian pro league',
    position: 'FW',
    age: 23,
    rating: 7.2,
    marketValue: 15_000_000,
    keyStats: [
      { label: '득점', value: 13 },
      { label: 'xG', value: '11.4' },
    ],
  },
]

export function PlayerSearchPage({
  isHeaderVisible = true,
}: PlayerSearchPageProps) {
  const [searchValue, setSearchValue] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewType, setViewType] = useState<ViewType>('list')
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(MOCK_PLAYERS.length / ITEMS_PER_PAGE)
  const paginated = MOCK_PLAYERS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-page text-white">
      <div
        className={`sticky z-10 bg-surface transition-[top] duration-300 ${isHeaderVisible ? 'top-16' : 'top-0'}`}
      >
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={() => {}}
          isFilterOpen={isFilterOpen}
          onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
        />
        <FilterPanel isOpen={isFilterOpen} />
      </div>

      <main className="mx-auto max-w-5xl px-6 pb-10 pt-2">
        <div className="flex items-center justify-between py-4">
          <span className="text-sm text-gray-400">
            총 {MOCK_PLAYERS.length}명의 선수
          </span>
          <div className="hidden sm:block">
            <ViewToggle view={viewType} onViewChange={setViewType} />
          </div>
        </div>

        <div className="hidden sm:block">
          {viewType === 'list' ? (
            <div className="flex flex-col gap-3">
              {paginated.map((player, index) => (
                <PlayerListCard
                  key={player.playerId}
                  {...player}
                  order={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {paginated.map((player) => (
                <PlayerGridCard key={player.playerId} {...player} />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {paginated.map((player) => (
            <PlayerGridCard key={player.playerId} {...player} />
          ))}
        </div>

        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  )
}
