import axios from 'axios'
import quotation2decimal from '../utils/quotation2decimal'
const API_URL = process.env.API_URL
const token = process.env.API_TOKEN

const sendRequest = async (method, data, field, transformer) => {
  try {
    const response = await axios(
        API_URL +
        `/tinkoff.public.invest.api.contract.v1.MarketDataService/${method}`,
        {
          data,
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    )
    if (response.data[field].length > 0) {
      let result = response.data[field]
      if (transformer) {
        result = response.data[field].map(transformer)
      }
      return result
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching instrumentId:', error)
    return null
  }
}

export default sendRequest
