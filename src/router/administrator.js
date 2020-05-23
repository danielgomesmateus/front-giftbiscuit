import Vue from 'vue'
import VueRouter from 'vue-router'

import Administrators from '../views/Administrators/Home'

import PageList from '../views/Pages/List'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/administracao', 
      component: Administrators
    },
    {
      path: '/administracao/paginas',
      name: 'pageList',
      component: PageList,      
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})