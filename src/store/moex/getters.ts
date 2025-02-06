import {stateData} from '.'

interface getter {
  tickers: string[]
  initTypesList: CallableFunction
  getTypes: CallableFunction
}

const Getters: getter = Object.create(stateData)

Getters.initTypesList = function() {
  this.tickers = []
  this.portfolio.forEach((element: IPortfolio) => {
    const tlist = element.markets.map(item => item.posTicker)
    this.tickers.push(...tlist)
  });
};

Getters.getTypes = function() {
  return this.tickers
}

Getters.initTypesList()

export default Getters
