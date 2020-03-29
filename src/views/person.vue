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
          <c-session-item @click="handleClear">
            <template>信息清除</template>
          </c-session-item>
        </c-session>
        <div class="buttons">
          <c-button @click="handleLogout" type="danger">退出登录</c-button>
        </div>
    </div>
</template>
<script>
import { userLogout } from '@/services/user'
export default {
  methods: {
    handleLogout () {
      this.$modal.confirm({
        title: '提示信息',
        body: '确定需要退出登录吗？',
        onOk: async () => {
          await userLogout()
          this.$store.commit('user/clearDetail')
          this.$message.success('退出登录成功！')
          this.$router.push('/')
        }
      })
    },
    handleClear () {
      this.$modal.confirm({
        title: '提示信息',
        body: '确定需要清除信息吗？',
        onOk: () => {
          this.$store.commit('message/clear')
          this.$message.success('信息清除成功！')
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
