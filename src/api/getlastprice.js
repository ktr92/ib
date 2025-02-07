
import axios from 'axios'
import quotation2decimal from '../utils/quotation2decimal'
const API_URL = process.env.API_URL
const token = process.env.API_TOKEN
/**
 * функция для получения цены последней сделки по инструментам
 * @async
 * @param {string} figislist - все полученные из портфеля figi ["FIGI_1", ...]
 * @return {Promise<Array>} - массив вида:
    {
        "figi": "BBG00475K2X9",
        "price": {
            "units": "0",
            "nano": 566500000
        },
        "time": "2025-02-07T18:31:28.161352Z",
        "instrumentUid": "62560f05-3fd0-4d65-88f0-a27f249cc6de",
        "lastPriceType": "LAST_PRICE_EXCHANGE"
    },

]
 */
const getPricesbyIsins = async (figislist) => {
  try {
    figislist = figislist.filter(item => !!item)
    const response = await axios(
        API_URL +
          '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastPrices',
        {
          data: {
            instrumentId: figislist, // Ищем по figi
            lastPriceType: 'LAST_PRICE_UNSPECIFIED',
            instrumentStatus: 'INSTRUMENT_STATUS_UNSPECIFIED',
          },
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    )
    if (response.data.lastPrices.length > 0) {
      const result = response.data.lastPrices.map(item => {
        return {
          lastprice: quotation2decimal(item.price),
          ...item
        }
      })
      return result
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching instrumentId:', error)
    return null
  }
}

export default getPricesbyIsins
