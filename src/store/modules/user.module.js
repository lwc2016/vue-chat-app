import { userInfo, userLogin } from '../../services/user'

export default {
  namespaced: true,
  state: {
    isLogined: false,
    isFetched: false,
    info: {}
  },
  mutations: {
    setDetail (state, info) {
      state.info = info
      state.isLogined = true
      state.isFetched = true
    },
    clearDetail (state) {
      state.info = {}
      state.isLogined = false
    }
  },
  actions: {
    async fetchDetail ({ commit }) {
      const resp = await userInfo()
      commit('setDetail', resp)
    },
    async login ({ commit }, payload) {
      const resp = await userLogin(payload)
      commit('setDetail', resp)
    }
  }
}
