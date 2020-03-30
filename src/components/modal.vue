<template>
    <div class="box">
        <transition name="fade">
            <div v-if="isShow" class="mask"></div>
        </transition>
        <transition name="fade">
            <div v-if="isShow" class="modal">
                <div class="modal-title">{{title}}</div>
                <div class="modal-body">{{body}}</div>
                <div class="modal-footer">
                    <div @click="hide" class="btn btn-left">关闭</div>
                    <div @click="handleOk" class="btn btn-right">确定</div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    onOk: {
      type: Function,
      default: () => {}
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
    },
    hide () {
      this.isShow = false
      setTimeout(this.remove, 1000)
    },
    handleOk () {
      this.hide()
      this.onOk && this.onOk()
    }
  }
}
</script>
<style lang="less" scoped>
.box{
    position: relative;
}
.mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 100;
}
.modal{
    position: fixed;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 540/@r;
    background-color: @white;
    z-index: 100;
    border-radius: 6/@r;
}
.modal-title{
    height: 80/@r;
    text-align: center;
    line-height: 80/@r;
    font-size: 30/@r;
    font-weight: 500;
    color: #333333;
}
.modal-body{
    padding: 60/@r 20/@r;
    border-top: 1px solid #e5e5e5;
    font-size: 28/@r;
    font-weight: 500;
    color: #4f4f4f;
    text-align: center;
}
.modal-footer{
    display: flex;
}
.btn{
    width: 50%;
    height: 80/@r;
    font-size: 30/@r;
    text-align: center;
    line-height: 80/@r;
}
.btn-left{
    color: #4f4f4f;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
}
.btn-right{
    color: @white;
    background-color: @primary;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
