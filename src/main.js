import Vue from 'vue'
import App from './App.vue'
import http from './axios'

Vue.config.productionTip = false
Vue.prototype.$axios = http

new Vue({
  render: h => h(App),
}).$mount('#app')