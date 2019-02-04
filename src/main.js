// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from '../store/store'
const getApi = require('../getApi/getApi')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    getApi.getApi(result => {
      result.kq.then(function (res) {
        return res
      })
    })
  },
  components: { App },
  template: '<App/>'
})
