<template>
    <div>
        <h3 class="title">好友消息</h3>
        <c-session>
            <c-list-item
                v-for="item in messages"
                :path="$store.state.user.info.id == item.fromId ? `/chatRoom/${item.toId}`:  `/chatRoom/${item.fromId}`"
                :imgUrl="item.avatar"
                :key="item.id"
            >
                <template v-slot:primary>{{item.nickName}}</template>
                <template v-slot:secondary>{{item.content}}</template>
            </c-list-item>
        </c-session>
    </div>
</template>
<script>
export default {
  computed: {
    messages () {
      const list = []
      this.$store.state.message.list.forEach(item => {
        const index = list.findIndex(option => option.fromId === item.fromId || option.toId === item.fromId)
        if (index >= 0) {
          list[index].notReadCount += (item.isRead ? 0 : 1)
          list[index] = { ...list[index], ...item }
        } else {
          const { nickName, avatar } = this.$store.state.friend.list.find(option => {
            if (parseInt(this.$store.state.user.info.id) === parseInt(item.fromId)) {
              return parseInt(option.userId) === parseInt(item.toId)
            } else {
              return parseInt(option.userId) === parseInt(item.fromId)
            }
          }) || {}
          item.notReadCount = item.isRead ? 0 : 1
          list.push({ ...item, nickName, avatar })
        }
      })
      return list
    }
  }
}
</script>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    color: #333333;
    font-weight: 500;
    line-height: 60/@r;
    height: 60/@r;
}
</style>
