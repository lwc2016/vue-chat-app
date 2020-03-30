const messages = localStorage.getItem('messages')
const list = messages ? JSON.parse(messages) : []

export default {
  namespaced: true,
  state: {
    list
  },
  mutations: {
    push (state, payload) {
      state.list.push(payload)
      // 缓存消息
      localStorage.setItem('messages', JSON.stringify(state.list))
    },
    setRead (state, payload) {
      state.list.forEach(item => {
        if (parseInt(item.fromId) === parseInt(payload)) {
          item.isRead = true
        }
      })
      // 保存消息
      localStorage.setItem('messages', JSON.stringify(state.list))
    },
    setReadById (state, payload) {
      state.list.forEach(item => {
        if (parseInt(item.id) === parseInt(payload)) {
          item.isRead = true
        }
      })
      // 保存消息
      localStorage.setItem('messages', JSON.stringify(state.list))
    },
    clear (state) {
      // 清除消息
      state.list = []
      localStorage.removeItem('messages')
    }
  },
  getters: {
    total (state) {
      const count = state.list.reduce((total, item) => {
        total += item.isRead ? 0 : 1
        return total
      }, 0)
      console.log(count)
      return count
    }
  }
}
