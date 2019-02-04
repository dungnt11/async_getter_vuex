import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const axios = require('axios')

export const store = new vuex.Store({
  state: {
    kq: ''
  },
  mutations: {
    getApi (state) {
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-04&sortBy=publishedAt&apiKey=7ee5e494a5af464cad6e76183dfe57c7').then(function (res) {  
      state.kq = res
      console.log('da lay kq')
      })
    }
  },
  actions: {
    hanhDong ({ commit }) {
      commit('getApi')
    }
  },
  getters: {
    layBody (state) {
      return state.kq
    }
  }
})