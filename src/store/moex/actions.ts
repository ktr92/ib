import getIdbyTickers from '../../api/getidbyticker';
import {stateData} from '.';
import Getters from './getters';

const Actions = Object.create(stateData)

Actions.addPosition = function(portfolio: string, position: IPosition) {
  const portf = Getters.getPortfolioById(portfolio)
  portf.markets.push(position)
}

interface IMarketData {
  marketTicker: string
  marketPrice: number
  marketNKD?: number
  marketCurrencyPrice?: number
}

Actions.initPrices = async function() {
  const tickers = Getters.getTypes()
  const instruments = await getIdbyTickers(tickers)
  return instruments
}

export default Actions
