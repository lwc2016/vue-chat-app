<template>
    <transition name="down">
        <div
            v-if="isShow"
            :class="{
                'message': true,
                [type]: true
            }"
        >{{text}}</div>
    </transition>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(this.hide, 3000)
    },
    hide () {
      this.isShow = false
      setTimeout(this.remove, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
.message{
    position: fixed;
    left: 0;
    top: 0;
    width: 750/@r;
    height: 60/@r;
    text-align: center;
    line-height: 60/@r;
    color: @white;
    font-size: 28/@r;
    font-weight: 500;
    overflow: hidden;
}
.error{
    background-color: @danger;
}
.success{
    background-color: @secondary;
}
.down-enter-active, .down-leave-active {
  transition: height .5s;
}
.down-enter, .down-leave-to {
  height: 0;
}
</style>
