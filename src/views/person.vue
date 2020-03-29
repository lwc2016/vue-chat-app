<template>
    <div>
        <c-profile :data="$store.state.user.info" />
        <c-session class="body">
          <c-session-item>
            <template>好友邀请</template>
          </c-session-item>
          <c-session-item>
            <template>我的邀请</template>
          </c-session-item>
          <c-session-item>
            <template>消除清除</template>
          </c-session-item>
        </c-session>
        <div class="buttons">
          <c-button @click="handleLagout" type="danger">退出登录</c-button>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    handleLagout () {
      this.$modal.confirm({
        title: '提示信息',
        body: '确定需要退出登录吗？',
        onOk: () => {
          console.log('okk')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.buttons{
    margin: 0 24/@r;
    margin-top: 80/@r;
}
.body{
  margin-top: 20/@r;
}
.buttons{
  margin: 0 24/@r;
  margin-top: 80/@r;
}
</style>
