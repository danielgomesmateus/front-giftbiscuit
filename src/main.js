import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import VuePageTransition from 'vue-page-transition'

import filters from './filters/administrator'

import router from './router/administrator'


Vue.use(VuePageTransition)
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
