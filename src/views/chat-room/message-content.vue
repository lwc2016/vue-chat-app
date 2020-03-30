<template>
    <div class="messages">
      <message v-for="(item, index) in list" :key="index" :data="item" />
    </div>
</template>
<script>
import message from './message'
export default {
  components: {
    message
  },
  computed: {
    list () {
      const list = this.$store.state.message.list.map(item => {
        if (parseInt(item.fromId) === parseInt(this.$store.state.user.info.id)) {
          item.avatar = this.$store.state.user.info.avatar
        } else {
          const { avatar } = this.$store.state.friend.list.find(option => parseInt(item.fromId) === parseInt(option.userId)) || {}
          item.avatar = avatar
        }
        return item
      })
      return list
    }
  }
}
</script>
<style lang="less" scoped>
.messages{
  padding-top: 20/@r;
}
</style>
