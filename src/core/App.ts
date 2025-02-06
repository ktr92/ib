import getters from '../store/moex/getters'
import {getApiData} from '../utils/api.adapter'

export const App = {
  initApp: function() {
    this.getState = getters
  },
  getApi: function(source: Apisource) {
    this.apidata = getApiData(source)
  }
}
