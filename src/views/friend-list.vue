<template>
    <div>
        <c-session>
            <c-session-item>添加好友</c-session-item>
        </c-session>
        <h3 class="title">我的朋友</h3>
        <div class="list">
            <c-friend v-for="item in list" :key="item.id" :data="item" />
        </div>
    </div>
</template>
<script>
import { friendList } from '@/services/friend'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.fetchList()
  },
  methods: {
    async fetchList () {
      this.list = await friendList()
    }
  }
}
</script>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    line-height: 60/@r;
    font-weight: 500;
    height: 60/@r;
    color: #333333;
}
.list{
    background-color: #ffffff;
    padding-left: 24/@r;
}
.friend{
    padding: 20/@r 24/@r 20/@r 0;
    display: flex;
    align-items: center;
    .logo{
        width: 80/@r;
        height: 80/@r;
        overflow: hidden;
        border-radius: 6/@r;
        img{
            width: 100%;
        }
    }
    .name{
        font-size: 30/@r;
        color: #4f4f4f;
        margin-left: 20/@r;
        font-weight: bold;
    }
}
.friend + .friend{
    border-top: 1px solid #e5e5e5;
}
</style>
