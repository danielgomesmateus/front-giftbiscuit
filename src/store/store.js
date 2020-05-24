import Vue from 'vue'
import Vuex from 'vuex'

import * as page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page
  },
  state: {}
})