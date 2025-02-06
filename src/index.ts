import {App} from './core/App';
import {stateData} from './store/moex';
import Getters from './store/moex/getters';

const appGetter = Object.create(Getters)
const tickers = appGetter.getTypes()
console.log(tickers)

const app = Object.create(App)
app.initApp()
