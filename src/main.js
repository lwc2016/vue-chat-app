import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import filters from './filters'
import routerAuth from './router/auth'
import webSocket from './webSocket'

Vue.config.productionTip = false

Vue.use(components)
Vue.use(webSocket)
Vue.use(filters)

// 路由守卫
routerAuth(router, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
