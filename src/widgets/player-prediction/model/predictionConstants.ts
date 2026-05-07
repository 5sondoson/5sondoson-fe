export const POSITION_STAT_KEYS = {
  FW: [
    { key: 'goalsP90', label: '골/90분' },
    { key: 'shotsP90', label: '슈팅/90분' },
    { key: 'successfulDribblesP90', label: '드리블/90분' },
  ],
  MF: [
    { key: 'keyPassesP90', label: '키패스/90분' },
    { key: 'passesP90', label: '패스/90분' },
    { key: 'tacklesP90', label: '태클/90분' },
  ],
  DF: [
    { key: 'aerialsWonP90', label: '공중볼/90분' },
    { key: 'blockedShotsP90', label: '슈팅차단/90분' },
  ],
  GK: [
    { key: 'passAccuracy', label: '패스성공률' },
    { key: 'cleanSheets', label: '클린시트' },
  ],
} as const
