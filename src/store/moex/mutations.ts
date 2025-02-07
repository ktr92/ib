import {stateData} from '.';

const Mutations = Object.create(stateData)

Mutations.changeDepo = function(portfolio: string, value: number) {
  const portf: IPortfolio = this.portfolio.filter((item: IPortfolio) => item.id === portfolio)[0]
  portf.depo += value
}

export default Mutations
