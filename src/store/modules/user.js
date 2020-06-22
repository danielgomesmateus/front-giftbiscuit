import UserService from '../../services/UserService'

export const namespaced = true

export const state = {
  user: {}
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  loginUser({ commit }, user) {  
    return UserService.loginUser(user)
      .then(response => {
        commit('SET_USER', response.data)
      })
      .catch(e => {
        return e
      })
  },
}

export const getters = {
  getUser: state => {
    return state.user
  }
}