<template>
    <div class="tabbar"></div>
</template>
<script>
import messageIcon from '../assets/message-icon.png'
import messageActiveIcon from '../assets/message-active-icon.png'
import friendsIcon from '../assets/friends-icon.png'
import friendsActiveIcon from '../assets/friends-active-icon.png'
export default {
  data () {
    return {
      messageIcon,
      messageActiveIcon,
      friendsIcon,
      friendsActiveIcon
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
}
</style>
