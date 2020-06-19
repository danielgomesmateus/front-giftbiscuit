import Vue from 'vue'
import VueRouter from 'vue-router'

import Administrators from '../views/Administrators/Home'
import AdministratorsLogin from '../views/Administrators/Login'

import PageList from '../views/Pages/List'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/administracao-login',
      component: AdministratorsLogin
    },
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