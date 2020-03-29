<template>
    <div>
        <h3 class="title">好友消息</h3>
        <div class="messages">
            <router-link
                v-for="item in messages"
                :key="item.id"
                :to="$store.state.user.info.id == item.fromId ? `/chatRoom/${item.toId}`:  `/chatRoom/${item.fromId}`"
                class="message"
            >
                <div class="left">
                    <div class="logo">
                        <img :src="item.avatar" />
                    </div>
                    <div v-if="item.notReadCount" class="count">{{item.notReadCount}}</div>
                </div>
                <div class="info">
                    <h3 class="name">{{item.nickName}}</h3>
                    <p class="content">{{item.content}}</p>
                </div>
            </router-link>
        </div>
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
          console.log(item)
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
.messages{
    padding-left: 24/@r;
    background-color: #ffffff;
}
.message{
    padding: 20/@r 24/@r 20/@r 0;
    display: flex;
    .left{
        width: 80/@r;
        height: 80/@r;
        position: relative;
        .count{
            position: absolute;
            width: 32/@r;
            height: 32/@r;
            top: -16/@r;
            right: -16/@r;
            font-size: 20/@r;
            color: #ffffff;
            text-align: center;
            line-height: 32/@r;
            border-radius: 100%;
            background-color: @danger;
        }
    }
    .logo{
        width: 80/@r;
        height: 80/@r;
        overflow: hidden;
        border-radius: 6/@r;
        img{
            width: 100%;
        }
    }
    .info{
        margin-left: 20/@r;
    }
    .name{
        font-size: 30/@r;
        color: #333333;
        font-weight: bold;
    }
    .content{
        font-size: 24/@r;
        color: #666666;
        margin-top: 16/@r;
    }
}
.message + .message{
    border-top: 1px solid #e5e5e5;
}
</style>
