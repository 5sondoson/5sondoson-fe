import type {
  PlayerHistoryResponse,
  Position,
} from '@/entities/player/model/types'

const VIKTOR_GYOKERES_HISTORY: PlayerHistoryResponse['data'] = {
  history: [
    {
      season: '2020/2021',
      marketValue: 5000000,
      club: 'Coventry City',
      league: 'premier_league',
      clubLogoUrl: null,
      appearances: 38,
      minutes: 3240,
      ratingAverage: 6.9,
      keyStats: [
        { label: 'Goals', value: 9 },
        { label: 'Assists', value: 4 },
        { label: 'SoT', value: 28 },
        { label: 'Key Passes', value: 18 },
      ],
    },
    {
      season: '2021/2022',
      marketValue: 10000000,
      club: 'Coventry City',
      league: 'premier_league',
      clubLogoUrl: null,
      appearances: 45,
      minutes: 3780,
      ratingAverage: 7.4,
      keyStats: [
        { label: 'Goals', value: 17 },
        { label: 'Assists', value: 5 },
        { label: 'SoT', value: 38 },
        { label: 'Key Passes', value: 22 },
      ],
    },
    {
      season: '2022/2023',
      marketValue: 30000000,
      club: 'Sporting CP',
      league: 'primeira_liga',
      clubLogoUrl: null,
      appearances: 30,
      minutes: 2620,
      ratingAverage: 7.8,
      keyStats: [
        { label: 'Goals', value: 22 },
        { label: 'Assists', value: 8 },
        { label: 'SoT', value: 44 },
        { label: 'Key Passes', value: 29 },
      ],
    },
    {
      season: '2023/2024',
      marketValue: 65000000,
      club: 'Sporting CP',
      league: 'primeira_liga',
      clubLogoUrl: null,
      appearances: 33,
      minutes: 2890,
      ratingAverage: 8.2,
      keyStats: [
        { label: 'Goals', value: 29 },
        { label: 'Assists', value: 10 },
        { label: 'SoT', value: 54 },
        { label: 'Key Passes', value: 35 },
      ],
    },
    {
      season: '2024/2025',
      marketValue: 85000000,
      club: 'Sporting CP',
      league: 'primeira_liga',
      clubLogoUrl: null,
      appearances: 38,
      minutes: 3320,
      ratingAverage: 8.6,
      keyStats: [
        { label: 'Goals', value: 43 },
        { label: 'Assists', value: 11 },
        { label: 'SoT', value: 68 },
        { label: 'Key Passes', value: 42 },
      ],
    },
  ],
  growthSummary: {
    totalMarketValueGrowth: { value: 1600 },
    peakSeason: { season: '2024/2025', marketValue: 85000000 },
    currentTrend: { trend: 'UP' },
  },
}

const FREDERICO_RODRIGUES_HISTORY: PlayerHistoryResponse['data'] = {
  history: [
    {
      season: '2021/2022',
      marketValue: 12000000,
      club: 'PSV Eindhoven',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 28,
      minutes: 2210,
      ratingAverage: 7.2,
      keyStats: [
        { label: 'Assists', value: 6 },
        { label: 'Key Passes', value: 41 },
        { label: 'Passes', value: 1380 },
        { label: 'Pass%', value: 86.4 },
      ],
    },
    {
      season: '2022/2023',
      marketValue: null,
      club: 'PSV Eindhoven',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 25,
      minutes: 1980,
      ratingAverage: 7.3,
      keyStats: [
        { label: 'Assists', value: 7 },
        { label: 'Key Passes', value: 47 },
        { label: 'Passes', value: 1290 },
        { label: 'Pass%', value: 87.1 },
      ],
    },
    {
      season: '2023/2024',
      marketValue: 38000000,
      club: 'PSV Eindhoven',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 27,
      minutes: 2190,
      ratingAverage: 7.6,
      keyStats: [
        { label: 'Assists', value: 9 },
        { label: 'Key Passes', value: 56 },
        { label: 'Passes', value: 1574 },
        { label: 'Pass%', value: 88.2 },
      ],
    },
    {
      season: '2024/2025',
      marketValue: 55000000,
      club: 'PSV Eindhoven',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 30,
      minutes: 2650,
      ratingAverage: 7.9,
      keyStats: [
        { label: 'Assists', value: 12 },
        { label: 'Key Passes', value: 73 },
        { label: 'Passes', value: 1812 },
        { label: 'Pass%', value: 89.0 },
      ],
    },
  ],
  growthSummary: {
    totalMarketValueGrowth: { value: 358.3 },
    peakSeason: { season: '2024/2025', marketValue: 55000000 },
    currentTrend: { trend: 'UP' },
  },
}

const ARDA_TUNCEL_HISTORY: PlayerHistoryResponse['data'] = {
  history: [
    {
      season: '2022/2023',
      marketValue: 8000000,
      club: 'Club Brugge',
      league: 'pro_league',
      clubLogoUrl: null,
      appearances: 28,
      minutes: 2430,
      ratingAverage: 6.9,
      keyStats: [
        { label: 'Tackles', value: 62 },
        { label: 'Interceptions', value: 41 },
        { label: 'Clearances', value: 88 },
        { label: 'Aerials Won', value: 74 },
      ],
    },
    {
      season: '2023/2024',
      marketValue: 16000000,
      club: 'Club Brugge',
      league: 'pro_league',
      clubLogoUrl: null,
      appearances: 31,
      minutes: 2790,
      ratingAverage: 7.1,
      keyStats: [
        { label: 'Tackles', value: 71 },
        { label: 'Interceptions', value: 49 },
        { label: 'Clearances', value: 102 },
        { label: 'Aerials Won', value: null },
      ],
    },
    {
      season: '2024/2025',
      marketValue: 20000000,
      club: 'Club Brugge',
      league: 'pro_league',
      clubLogoUrl: null,
      appearances: 33,
      minutes: 2870,
      ratingAverage: 7.4,
      keyStats: [
        { label: 'Tackles', value: 84 },
        { label: 'Interceptions', value: 58 },
        { label: 'Clearances', value: 121 },
        { label: 'Aerials Won', value: 96 },
      ],
    },
  ],
  growthSummary: {
    totalMarketValueGrowth: { value: 150 },
    peakSeason: { season: '2024/2025', marketValue: 20000000 },
    currentTrend: { trend: 'UP' },
  },
}

const NIKLAS_HOFER_HISTORY: PlayerHistoryResponse['data'] = {
  history: [
    {
      season: '2023/2024',
      marketValue: 9000000,
      club: 'Ajax',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 30,
      minutes: 2700,
      ratingAverage: 7.18,
      keyStats: [
        { label: 'Saves', value: 96 },
        { label: 'GA', value: 32 },
        { label: 'Clean Sheets', value: 9 },
      ],
    },
    {
      season: '2024/2025',
      marketValue: 12000000,
      club: 'Ajax',
      league: 'eredivisie',
      clubLogoUrl: null,
      appearances: 34,
      minutes: 3060,
      ratingAverage: 7.42,
      keyStats: [
        { label: 'Saves', value: 112 },
        { label: 'GA', value: 28 },
        { label: 'Clean Sheets', value: 12 },
      ],
    },
  ],
  growthSummary: {
    totalMarketValueGrowth: { value: 33.3 },
    peakSeason: { season: '2024/2025', marketValue: 12000000 },
    currentTrend: { trend: 'UP' },
  },
}

export const MOCK_PLAYER_HISTORY_BY_POSITION: Record<
  Position,
  PlayerHistoryResponse['data']
> = {
  FW: VIKTOR_GYOKERES_HISTORY,
  MF: FREDERICO_RODRIGUES_HISTORY,
  DF: ARDA_TUNCEL_HISTORY,
  GK: NIKLAS_HOFER_HISTORY,
}
