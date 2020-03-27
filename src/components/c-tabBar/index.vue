<template>
    <div class="tabbar">
        <tab v-for="(item, index) in navs" :key="index" v-bind="item" :active="$route.path === item.path" />
    </div>
</template>
<script>
import messageIcon from '../../assets/message-icon.png'
import messageActiveIcon from '../../assets/message-active-icon.png'
import friendsIcon from '../../assets/friends-icon.png'
import friendsActiveIcon from '../../assets/friends-active-icon.png'
import userIcon from '../../assets/user-icon.png'
import userActiveIcon from '../../assets/user-active-icon.png'
import tab from './tab'
export default {
  components: {
    tab
  },
  data () {
    return {
      navs: [
        { path: '/', icon: messageIcon, activeIcon: messageActiveIcon, title: '消息' },
        { path: '/friend/list', icon: friendsIcon, activeIcon: friendsActiveIcon, title: '好友' },
        { path: '/person', icon: userIcon, activeIcon: userActiveIcon, title: '我的' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100/@r;
    border-top: 1px solid #d5d5d5;
    background-color: @white;
    display: flex;
}
</style>
