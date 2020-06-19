import Vue from 'vue'
import Vuex from 'vuex'

import * as page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page
  },
  state: {
    layout: 'app-layout'
  },
  mutations: {
    SET_LAYOUT(state, layout) {
      state.layout = layout
    }
  },
  getters: {
    layout: state => {
      return state.layout
    }
  }
})