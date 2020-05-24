import PageService from '../../services/PageService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  pages: [],
  page: {}
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  SET_PAGE(state, page) {
    state.page = page
  }
}

export const actions = {
  getPages({ commit }) {  
    return PageService.getPages()
      .then(response => {
        commit('SET_PAGES', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getPageBySlug({ commit, getters, state }, slug) {
    if (slug == state.page.slug) {
      return state.page
    }

    if (state.pages.count >= 1) {
      let page = getters.getPageBySlug(slug)

      if (page) {
        commit('SET_PAGE', page)
        return page
      }
    }

    return PageService.getPageBySlug(slug)
      .then(response => {
        commit('SET_PAGE', response.data)
        return response.data
      })
  }
}

export const getters = {
  getPages: state => {
    return state.pages
  },  
  getPageBySlug: state => slug => {
    const pages = state.pages.results
    return _.find(pages, function(page) { return page.slug == slug })
  }
}