import {stateData} from '.'

interface getter {
  isins: string[]
  getTypes: CallableFunction
  getPortfolioById: CallableFunction
}

const Getters: getter = Object.create(stateData)
Getters.getPortfolioById = function(id: string) {
  return this.portfolio.filter((item: IPortfolio) => item.id === id)[0]
}

Getters.getTypes = function() {
  this.isins = []
  this.portfolio.forEach((element: IPortfolio) => {
    const tlist = element.markets.map(item => item.posIsin)
    this.isins.push(...tlist)
  });
  return this.isins
}

export default Getters
