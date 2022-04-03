import { createStore } from 'vuex'

import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'

export default createStore({
  state: {
    products: [],
    cart: [],
  },

  actions,

  mutations,

  getters,

  modules: {},
})
