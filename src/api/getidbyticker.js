
import axios from 'axios'

const API_URL = process.env.API_URL
const token = process.env.API_TOKEN
/**
 * функция для получения информации о торговых инструментах по isin
 * @async
 * @param {string} isins - все полученные из портфеля isin ["GAZP", ...]
 * @return {Promise<Object>} - объект вида {GAZP: [{акция}, {облигация}, ...}]}
 */
const getIdbyIsins = async (isins) => {
  /**
   * функция находит инструмент по isin через API
   * https://russianinvestments.github.io/investAPI/swagger-ui/#/InstrumentsService/InstrumentsService_FindInstrument
   * @async
   * @param {string} isin - isin для поиска
   * @return {Promise<Array>} - список всех связанных с данным isin инструментов
   */
  async function getInstrumentIdByTicker(isin) {
    try {
      const response = await axios(
          API_URL +
          '/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument',
          {
            data: {
              query: isin, // Ищем по isin
              instrumentKind: 'INSTRUMENT_TYPE_UNSPECIFIED',
              apiTradeAvailableFlag: true,
            },
            method: 'post',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      )

      // Обрабатываем ответ,  если найдена хотя бы одна акция
      if (response.data.instruments.length > 0) {
        return response.data.instruments
      } else {
        console.log(`Инструмент с тикером ${isin} не найден.`)
        return null
      }
    } catch (error) {
      console.error('Error fetching instrumentId:', error)
      return null
    }
  }

  /**
   * функция создает объект в котором ключам-тикерам соотвествует массив найденных данных
   * @async
   * @param {string[]} isins - массив isin
 * @return {Promise<Object>} - объект вида {GAZP: [{акция}, {облигация}, ...}]}
   */
  async function createTickerInstrumentIdMap(isins) {
    const tickerInstrumentIdMap = {}
    for (const isin of isins) {
      const instrumentId = await getInstrumentIdByTicker(isin)
      if (instrumentId) {
        tickerInstrumentIdMap[isin] = instrumentId
      }
    }
    return tickerInstrumentIdMap
  }

  return await createTickerInstrumentIdMap(isins)
}

export default getIdbyIsins
