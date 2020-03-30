<template>
    <div>
        <div v-if="invitations.length > 0">
          <c-title>系统消息</c-title>
          <c-session>
            <c-list-item
              v-for="item in invitations"
              :path="`/invitation/${item.id}`"
              :key="item.id"
              :imgUrl="item.avatar"
              :count="item.isRead ? 0 : 1"
            >
              <template v-slot:primary>{{item.nickName}}</template>
              <template v-slot:secondary>
                <div v-if="item.subType === 'invitation_received'">请求加为好友，<span v-if="item.remarks">({{item.remarks}})</span></div>
                <div v-if="item.subType === 'invitation_refused'">拒绝加你为好友！</div>
              </template>
              <template v-slot:rightBottom>{{item.createdTime | formatDateTime }}</template>
            </c-list-item>
          </c-session>
        </div>
        <div v-if="messages.length > 0">
          <c-title>好友消息</c-title>
          <c-session>
              <c-list-item
                  v-for="item in messages"
                  :path="$store.state.user.info.id == item.fromId ? `/chatRoom/${item.toId}`:  `/chatRoom/${item.fromId}`"
                  :imgUrl="item.avatar"
                  :key="item.id"
                  :count="item.notReadCount"
              >
                <template v-slot:primary>{{item.nickName}}</template>
                <template v-slot:secondary>{{item.content}}</template>
                <template v-slot:rightBottom>{{item.createdTime | formatDateTime }}</template>
              </c-list-item>
          </c-session>
        </div>
        <c-empty v-if="$store.state.message.list.length === 0" title="～ 暂无消息 ～" />
    </div>
</template>
<script>
export default {
  computed: {
    messages () {
      const list = []
      this.$store.state.message.list.forEach(item => {
        if (item.type === 'system') return null
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
    },
    invitations () {
      const list = []
      this.$store.state.message.list.forEach(item => {
        if (item.type === 'system') {
          list.push(item)
        }
      })
      console.log(list)
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
