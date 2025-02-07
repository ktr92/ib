import getIdbyTickers from '../../api/getidbyticker';
import {stateData} from '.';
import Getters from './getters';
import getPricesbyIsins from '../../api/getlastprice';
import Mutations from './mutations';

const Actions = Object.create(stateData)

Actions.addPosition = function(portfolio: string, position: IPosition) {
  const portf = Getters.getPortfolioById(portfolio)
  portf.markets.push(position)
}

interface IMarketData extends IPosition {
  marketPrice: number
}

Actions.initPrices = async function() {
  const tickers = Getters.getTypes()
  const instruments = await getPricesbyIsins(tickers)
  Mutations.initMarketPrice(instruments)
  console.log(this.portfolio)

  /* const marketData = instruments.map(item => {
    return {
      lastprice: item.lastprice,
      figi: item.figi
    }
  }) */
  return instruments
}

export default Actions
