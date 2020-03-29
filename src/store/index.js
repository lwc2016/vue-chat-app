import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user.module'
import messageModule from './modules/message.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userModule,
    message: messageModule
  }
})
