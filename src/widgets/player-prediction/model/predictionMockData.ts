export const predictionMockData = {
  EPL: {
    data: {
      currentStats: {
        minutes: 3200,
        marketValue: 85000000,
        keyStats: [
          { label: 'Goals/90', value: 1.21 },
          { label: 'Shots/90', value: 4.5 },
          { label: 'SuccessfulDribbles/90', value: 2.25 },
        ],
      },
      predictedStats: {
        minutes: 2760,
        marketValue: 125000000,
        marketValueChangeRate: 0.47,
        keyStats: [
          { label: 'Goals/90', value: 0.81 },
          { label: 'Shots/90', value: 3.21 },
          { label: 'SuccessfulDribbles/90', value: 1.62 },
        ],
      },
      statChanges: {
        minutes: -440,
        marketValue: 40000000,
        keyStats: [
          { label: 'Goals/90', value: -0.4 },
          { label: 'Shots/90', value: -1.29 },
          { label: 'SuccessfulDribbles/90', value: -0.63 },
        ],
      },
      adaptScore: {
        total: 78,
        breakdown: {
          minutesScore: 22,
          performanceScore: 31,
          marketValueScore: 17,
          consistencyScore: 8,
        },
      },
      similarPlayers: {
        pagination: { page: 1, size: 3, totalPages: 1, totalElements: 3 },
        results: [
          { playerId: 10, similarityScore: 0.91 },
          { playerId: 23, similarityScore: 0.87 },
          { playerId: 45, similarityScore: 0.83 },
        ],
      },
      llmSummary:
        '피지컬과 침투 능력이 뛰어나 EPL 스타일에 어느 정도 적합하지만, 리그 강도 상승으로 득점 생산성은 다소 하락이 예상됩니다. 적응 기간이 주어진다면 충분한 경쟁력을 보여줄 수 있는 프로파일입니다.',
    },
  },

  LA: {
    data: {
      currentStats: {
        minutes: 3200,
        marketValue: 85000000,
        keyStats: [
          { label: 'Goals/90', value: 1.21 },
          { label: 'Shots/90', value: 4.5 },
          { label: 'SuccessfulDribbles/90', value: 2.25 },
        ],
      },
      predictedStats: {
        minutes: 2890,
        marketValue: 130000000,
        marketValueChangeRate: 0.53,
        keyStats: [
          { label: 'Goals/90', value: 0.94 },
          { label: 'Shots/90', value: 3.52 },
          { label: 'SuccessfulDribbles/90', value: 1.81 },
        ],
      },
      statChanges: {
        minutes: -310,
        marketValue: 45000000,
        keyStats: [
          { label: 'Goals/90', value: -0.27 },
          { label: 'Shots/90', value: -0.98 },
          { label: 'SuccessfulDribbles/90', value: -0.44 },
        ],
      },
      adaptScore: {
        total: 91,
        breakdown: {
          minutesScore: 27,
          performanceScore: 37,
          marketValueScore: 18,
          consistencyScore: 9,
        },
      },
      similarPlayers: {
        pagination: { page: 1, size: 3, totalPages: 1, totalElements: 3 },
        results: [
          { playerId: 11, similarityScore: 0.93 },
          { playerId: 24, similarityScore: 0.89 },
          { playerId: 46, similarityScore: 0.86 },
        ],
      },
      llmSummary:
        '라리가의 공간 활용 전술과 침투형 플레이 스타일이 갸코레스의 강점과 매우 잘 맞습니다. 스웨덴 출신 선수들의 라리가 성공 사례가 풍부하며, 높은 적응도 점수가 이를 뒷받침합니다.',
    },
  },

  BL: {
    data: {
      currentStats: {
        minutes: 3200,
        marketValue: 85000000,
        keyStats: [
          { label: 'Goals/90', value: 1.21 },
          { label: 'Shots/90', value: 4.5 },
          { label: 'SuccessfulDribbles/90', value: 2.25 },
        ],
      },
      predictedStats: {
        minutes: 3010,
        marketValue: 135000000,
        marketValueChangeRate: 0.59,
        keyStats: [
          { label: 'Goals/90', value: 1.02 },
          { label: 'Shots/90', value: 3.87 },
          { label: 'SuccessfulDribbles/90', value: 1.94 },
        ],
      },
      statChanges: {
        minutes: -190,
        marketValue: 50000000,
        keyStats: [
          { label: 'Goals/90', value: -0.19 },
          { label: 'Shots/90', value: -0.63 },
          { label: 'SuccessfulDribbles/90', value: -0.31 },
        ],
      },
      adaptScore: {
        total: 88,
        breakdown: {
          minutesScore: 26,
          performanceScore: 35,
          marketValueScore: 18,
          consistencyScore: 9,
        },
      },
      similarPlayers: {
        pagination: { page: 1, size: 3, totalPages: 1, totalElements: 3 },
        results: [
          { playerId: 12, similarityScore: 0.92 },
          { playerId: 25, similarityScore: 0.88 },
          { playerId: 47, similarityScore: 0.84 },
        ],
      },
      llmSummary:
        '분데스리가의 역습 중심 전술과 공간 축구 비중이 높아 갸코레스의 스타일에 최적화된 환경입니다. Zlatan, Forsberg 등 스웨덴 선수들의 분데스리가 성공 사례가 풍부하며, 시장가치 상승 폭이 가장 클 것으로 예측됩니다.',
    },
  },

  SA: {
    data: {
      currentStats: {
        minutes: 3200,
        marketValue: 85000000,
        keyStats: [
          { label: 'Goals/90', value: 1.21 },
          { label: 'Shots/90', value: 4.5 },
          { label: 'SuccessfulDribbles/90', value: 2.25 },
        ],
      },
      predictedStats: {
        minutes: 2720,
        marketValue: 118000000,
        marketValueChangeRate: 0.39,
        keyStats: [
          { label: 'Goals/90', value: 0.87 },
          { label: 'Shots/90', value: 3.38 },
          { label: 'SuccessfulDribbles/90', value: 1.71 },
        ],
      },
      statChanges: {
        minutes: -480,
        marketValue: 33000000,
        keyStats: [
          { label: 'Goals/90', value: -0.34 },
          { label: 'Shots/90', value: -1.12 },
          { label: 'SuccessfulDribbles/90', value: -0.54 },
        ],
      },
      adaptScore: {
        total: 74,
        breakdown: {
          minutesScore: 21,
          performanceScore: 29,
          marketValueScore: 16,
          consistencyScore: 8,
        },
      },
      similarPlayers: {
        pagination: { page: 1, size: 3, totalPages: 1, totalElements: 3 },
        results: [
          { playerId: 13, similarityScore: 0.88 },
          { playerId: 26, similarityScore: 0.84 },
          { playerId: 48, similarityScore: 0.8 },
        ],
      },
      llmSummary:
        '세리에A의 촘촘한 수비 조직과 낮은 블록 전술은 갸코레스의 침투형 플레이를 제한할 수 있습니다. 적응 기간이 다소 필요하지만, 피지컬 우위를 활용한 득점 기회 창출은 충분히 가능합니다.',
    },
  },

  L1: {
    data: {
      currentStats: {
        minutes: 3200,
        marketValue: 85000000,
        keyStats: [
          { label: 'Goals/90', value: 1.21 },
          { label: 'Shots/90', value: 4.5 },
          { label: 'SuccessfulDribbles/90', value: 2.25 },
        ],
      },
      predictedStats: {
        minutes: 3060,
        marketValue: 122000000,
        marketValueChangeRate: 0.44,
        keyStats: [
          { label: 'Goals/90', value: 1.08 },
          { label: 'Shots/90', value: 4.01 },
          { label: 'SuccessfulDribbles/90', value: 2.06 },
        ],
      },
      statChanges: {
        minutes: -140,
        marketValue: 37000000,
        keyStats: [
          { label: 'Goals/90', value: -0.13 },
          { label: 'Shots/90', value: -0.49 },
          { label: 'SuccessfulDribbles/90', value: -0.19 },
        ],
      },
      adaptScore: {
        total: 83,
        breakdown: {
          minutesScore: 25,
          performanceScore: 33,
          marketValueScore: 17,
          consistencyScore: 8,
        },
      },
      similarPlayers: {
        pagination: { page: 1, size: 3, totalPages: 1, totalElements: 3 },
        results: [
          { playerId: 14, similarityScore: 0.9 },
          { playerId: 27, similarityScore: 0.86 },
          { playerId: 49, similarityScore: 0.82 },
        ],
      },
      llmSummary:
        '리그1은 상대적으로 낮은 경쟁 강도 덕분에 스탯 유지율이 가장 높게 예측됩니다. 다만 리그 수준 대비 시장가치 상승폭은 제한적이며, 커리어 정점을 위한 발판으로서의 이적 의미가 크지 않을 수 있습니다.',
    },
  },
} satisfies Record<string, unknown>
