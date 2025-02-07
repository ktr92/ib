import {stateData} from '.';

interface IPrice {
  figi: string
  lastprice: number
}

const Mutations = Object.create(stateData)

Mutations.changeDepo = function(portfolio: string, value: number) {
  const portf: IPortfolio = this.portfolio.filter((item: IPortfolio) => item.id === portfolio)[0]
  portf.depo += value
}

Mutations.initMarketPrice = function(prices: IPrice[]) {
  this.portfolio.forEach((item: IPortfolio) => {
    item.markets.forEach((market: IPosition) => {
      const intersection = prices.filter((price: IPrice) => price.figi === market.posFigi)[0]
      market.marketPrice = intersection.lastprice
    })
  })
}

export default Mutations
