import axios from 'axios'
import quotation2decimal from '../utils/quotation2decimal'
const API_URL = process.env.API_URL
const token = process.env.API_TOKEN
/**
 * функция для получения цены закрытия (вчерашней)
 * @see https://russianinvestments.github.io/investAPI/swagger-ui/#/MarketDataService/MarketDataService_GetClosePrices
 * @async
 * @param {string} figislist - все полученные из портфеля figi ["FIGI_1", ...]
 * @return {Promise<Array>} - массив вида:
 * [
    {
      "closePrices": [
        {
          "eveningSessionPrice": {
            "nano": 6,
            "units": "units"
          },
          "price": {
            "nano": 6,
            "units": "units"
          },
          "instrumentUid": "instrumentUid",
          "figi": "figi",
          "time": "2000-01-23T04:56:07.000Z"
        },
        {
          "eveningSessionPrice": {
            "nano": 6,
            "units": "units"
          },
          "price": {
            "nano": 6,
            "units": "units"
          },
          "instrumentUid": "instrumentUid",
          "figi": "figi",
          "time": "2000-01-23T04:56:07.000Z"
        }
      ]
    }

    ]
 */
const getClosePrices = async (figislist) => {
  try {
    /**
     * привести массив figi к такому виду
     *  [
          {
            "instrumentId": "string"
          }
        ]
     */
    const formatFigiList = figislist.map(item => {
      if (item) {
        return {
          'instrumentId': item
        }
      }
    })

    const response = await axios(
        API_URL +
        '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetClosePrices',
        {
          data: {
            'instruments': formatFigiList, // Ищем по figi
            'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED'
          },
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    )
    if (response.data.closePrices.length > 0) {
      const result = response.data.closePrices.map(item => {
        return {
          closeprice: quotation2decimal(item.eveningSessionPrice ? item.eveningSessionPrice : item.price),
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

export default getClosePrices
