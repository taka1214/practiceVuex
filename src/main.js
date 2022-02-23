import Vue from 'vue'
import App from './App.vue'
import http from './axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')