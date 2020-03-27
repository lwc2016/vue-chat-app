<template>
    <button :class="{
        'button': true,
        'primary-btn': type === 'primary',
        'danger-btn': type === 'danger'
    }"><slot /></button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style lang="less" scoped>
.button{
    width: 100%;
    height: 80/@r;
    border: none;
    border-radius: 4/@r;
    color: @white;
    font-size: 30/@r;
    font-weight: bold;
    box-sizing: border-box;
}
.primary-btn{
    background-color: @primary;
}
.danger-btn{
    color: @danger;
    border: 1px solid @danger;
    background-color: #ffffff;
}
</style>
