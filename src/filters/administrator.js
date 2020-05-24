import Vue from 'vue'

const getStatusName = (status) => {
  return status == true ? 'Ativado' : 'Desativado'
}

const getStatusColor = (status) => {
  return status == true ? 'green' : 'orange'
}

Vue.filter('getStatusName', getStatusName)
Vue.filter('getStatusColor', getStatusColor)

export default {
  getStatusName,
  getStatusColor
}