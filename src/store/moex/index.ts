interface IStateData {
  portfolio: Userdata
}

export const stateData: IStateData = {
  portfolio: [
    {
      id: '1',
      name: 'Среднесрочный портфель',
      depo: 450000,
      comm: 0.09,
      markets: [
        {
          posID: '1',
          posPortfoliID: '1',
          posTicker: 'HYDR',
          posIsin: 'RU000A0JPKH7',
          posType: 'stock',
          posMarket: 'TQBR',
          posPrice: 0.567,
          posCount: 416000,
          posArchive: []
        }
      ]
    },
    {
      id: '2',
      name: 'Долгосрочный портфель',
      depo: 200000,
      comm: 0.09,
      markets: [
        {
          posID: '2',
          posPortfoliID: '2',
          posTicker: 'ASTR',
          posIsin: 'RU000A106T36',
          posType: 'stock',
          posMarket: 'TQCB',
          posPrice: 510,
          posCount: 178,
        },
        {
          posID: '3',
          posPortfoliID: '2',
          posTicker: 'SNGSP',
          posIsin: 'RU0009029524',
          posType: 'stock',
          posMarket: 'TQCB',
          posPrice: 42,
          posCount: 1000,
        },
      ]
    },

    {
      id: '3',
      name: 'Портфель облигаций',
      depo: 500000,
      comm: 0.095,
      markets: [
        {
          posID: '6',
          posPortfoliID: '3',
          posTicker: 'RU000A105A95',
          posIsin: 'RU000A105A95',
          posType: 'bond',
          posMarket: 'TQCB',
          posNKD: 10,
          posPrice: 110,
          posCount: 1,
          posNominal: 1000,
          posCurrency: 'USD',
          posCurrencyPrice: 90,
        },
        {
          posID: '7',
          posPortfoliID: '3',
          posTicker: 'RU000A107B43',
          posIsin: 'RU000A107B43',

          posType: 'bond',
          posMarket: 'TQCB',
          posNKD: 13,
          posPrice: 84,
          posCount: 2,
          posNominal: 1000,
          posCurrency: 'USD',
          posCurrencyPrice: 92,
        },
        {
          posID: '8',
          posPortfoliID: '3',
          posTicker: 'RU000A107B43',
          posIsin: 'RU000A107B43',
          posType: 'bond',
          posNKD: 11,
          posMarket: 'TQCB',
          posPrice: 84,
          posCount: 1,
          posNominal: 1000,
          posCurrency: 'USD',
          posCurrencyPrice: 88,
        },

        {
          posID: '9',
          posPortfoliID: '3',
          posTicker: 'SU26238RMFS4',
          posIsin: 'RU000A1038V6',
          posType: 'bond',
          posMarket: 'TQOB',
          posPrice: 55,
          posCount: 50,
          posNominal: 1000,
          posCurrency: '',
          posNKD: 7,
        },
      ],

    },
  ]

}
