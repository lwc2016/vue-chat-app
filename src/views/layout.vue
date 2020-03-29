<template>
    <router-view />
</template>
<script>
export default {
  mounted () {
    // 创建webSocket
    this.createWebSocket()
    // 获取朋友信息
    this.$store.dispatch('friend/fetchList')
  }
}
</script>
