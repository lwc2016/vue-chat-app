function install (Vue) {
  Vue.mixin({
    methods: {
      createWebSocket () {
        if (!Vue.prototype.$ws) {
          const url = process.env.NODE_ENV === 'development' ? 'ws://localhost:3030' : 'ws://chatroom.supersummer.top:3030'
          const ws = new WebSocket(url)
          ws.onopen = () => {
            // console.log('连接上服务器了')
          }
          ws.onmessage = (message) => {
            // 解析信息
            const data = JSON.parse(message.data)
            data.isRead = this.$route.name === 'chat-room'
            // 将信息推送到message中
            this.$store.commit('message/push', data)
          }
          ws.onclose = () => {
            // console.log('断了连接了')
          }
          Vue.prototype.$ws = ws
        }
      }
    }
  })
}

export default {
  install
}
