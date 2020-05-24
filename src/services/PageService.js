import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${ process.env.VUE_APP_BASE_URL_API }`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getPages() {
    return apiClient.get(`/pages/`)
  },
  getPageBySlug(slug) {
    return apiClient.get(`/pages/${ slug }`)
  }
}