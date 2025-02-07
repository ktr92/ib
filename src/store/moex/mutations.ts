import {stateData} from '.';

interface IPrice {
  figi: string
  lastprice: number
}
interface IClosePrice {
  figi: string
  closeprice: number
}

const Mutations = Object.create(stateData)

Mutations.changeDepo = function(portfolio: string, value: number) {
  const portf: IPortfolio = this.portfolio.filter((item: IPortfolio) => item.id === portfolio)[0]
  portf.depo += value
}

Mutations.initMarketPrice = function(prices: IPrice[], clPrices: IClosePrice[]) {
  this.portfolio.forEach((item: IPortfolio) => {
    item.markets.forEach((market: IPosition) => {
      const lastPrices = prices.filter((price: IPrice) => price.figi === market.posFigi)[0]
      market.marketPrice = lastPrices.lastprice

      const closePrices = clPrices.filter((price: IClosePrice) => price.figi === market.posFigi)[0]
      market.closePrice = closePrices.closeprice
    })
  })

  console.log(this.portfolio)
}

export default Mutations
