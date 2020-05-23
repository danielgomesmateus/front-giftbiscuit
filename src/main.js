import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'

import router from './router/index'

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next()

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  .forEach(tag => document.head.appendChild(tag))

  next()
});

Vue.config.productionTip = false

Vue.use(VuePageTransition)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
