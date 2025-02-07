import getIdbyTickers from '../../api/getidbyisin';
import {stateData} from '.';
import Getters from './getters';
import getPricesbyIsins from '../../api/getlastprice';
import Mutations from './mutations';
import getClosePrices from '../../api/getcloseprice';

const Actions = Object.create(stateData)

Actions.addPosition = function(portfolio: string, position: IPosition) {
  const portf = Getters.getPortfolioById(portfolio)
  portf.markets.push(position)
}

Actions.initPrices = async function() {
  const tickers = Getters.getTypes()
  const instruments = await getPricesbyIsins(tickers)
  const closePrices = await getClosePrices(tickers)
  Mutations.initMarketPrice(instruments, closePrices)
}

export default Actions
