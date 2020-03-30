<template>
    <div class="container">
      <router-view />
    </div>
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
<style lang="less" scoped>
.container{
  width: 750/@r;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0 0 5px #999999;
}
</style>
