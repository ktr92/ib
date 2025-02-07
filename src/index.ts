import {App} from './core/App';
import Actions from './store/moex/actions';
import Getters from './store/moex/getters';
import Mutations from './store/moex/mutations';
import getIdbyTickers from './api/getidbyisin'

Mutations.changeDepo('1', 123000)
/* Actions.addPosition('1', {
  posID: '2323',
  posPortfoliID: '1',
  posTicker: 'GAZP',
  posIsin: 'RU0007661625',
  posType: 'stock',
  posMarket: 'TQBR',
  posPrice: 130,
  posCount: 33,
  posFigi: '123'
}); */

async function fetchData() {
  await Actions.initPrices()
}
fetchData().then(result => {
  console.log(result)
})

const app = Object.create(App)
app.initApp()
