<template>
    <div
        :class="{
            'message-item': true,
            'message-right': isSelf
        }"
    >
        <img class="avatar" src='http://www.aspku.com/uploads/allimg/190819/221H3Mc-7.jpg' />
        <div class="message-content">
            <div :class="isSelf ? 'arrow-right' : 'arrow-left'"></div>
            <span>{{data.content}}</span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isSelf () {
      console.log(parseInt(this.$store.state.user.info.id) === parseInt(this.data.fromId))
      return parseInt(this.$store.state.user.info.id) === parseInt(this.data.fromId)
    }
  }
}
</script>
<style lang="less" scoped>
.message-item{
    padding: 0 24/@r;
    margin-bottom: 20/@r;
    display: flex;
    align-items: flex-start;
}
.message-right{
    flex-direction: row-reverse;
}
.message-item:nth-child(1){
    margin-top: 20/@r;
}
.avatar{
    width: 80/@r;
    height: 80/@r;
    border-radius: 6/@r;
    overflow: hidden;
    img{
        width: 100%;
    }
}
.message-content{
    max-width: 460/@r;
    background-color: @primary;
    color: @white;
    font-size: 28/@r;
    padding: 8/@r 10/@r;
    border-radius: 6/@r;
    line-height: 36/@r;
    margin: 0 20/@r;
    margin-top: 16/@r;
    position: relative;
    .arrow-left{
        position: absolute;
        border: 12/@r solid transparent;
        left: -22/@r;
        border-right: 12/@r solid @primary;
    }
    .arrow-right{
        position: absolute;
        border: 12/@r solid transparent;
        right: -22/@r;
        border-left: 12/@r solid @primary;
    }
}
</style>
