import { friendList } from '@/services/friend'
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async fetchList ({ commit }, payload) {
      const resp = await friendList()
      commit('setList', resp)
    }
  },
  computed: {
    total (state) {
      return state.list.length
    }
  }
}
