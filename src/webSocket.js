function install (Vue) {
  Vue.mixin({
    methods: {
      createWebSocket () {
        if (!Vue.prototype.$ws) {
          const ws = new WebSocket('ws://localhost:3030')
          ws.onopen = () => {
            console.log('连接上服务器了')
          }
          ws.onmessage = (message) => {
            // 解析信息
            const data = JSON.parse(message.data)
            data.isRead = this.$route.name === 'chat-room'
            console.log(data)
            // 将信息推送到message中
            this.$store.commit('message/push', data)
          }
          ws.onclose = () => {
            console.log('断了连接了')
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
