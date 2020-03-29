export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    push (state, payload) {
      state.list.push(payload)
    }
  }
}
