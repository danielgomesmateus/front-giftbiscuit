import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from '../views/Administrators/Home'

import Contacts from '../views/Contacts/List'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/admin', 
      component: Admin, 
      meta: {
        title: 'Gift Biscuit - Administração',
        metaTags: [
          {
            name: 'description',
            content: 'Gift Biscuit - Administração'
          },
          {
            property: 'og:description',
            content: 'Gift Biscuit - Administração'
          }
        ]
      },
      children: [{
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
      }] 
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})