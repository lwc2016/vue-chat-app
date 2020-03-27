<template>
    <div>
        <c-form class="form">
            <c-form-item>
              <c-input placeholder="用户名" />
            </c-form-item>
            <c-form-item>
              <c-input placeholder="密码" />
            </c-form-item>
            <c-form-item>
              <c-button>登录</c-button>
            </c-form-item>
        </c-form>
        <p class="notice">
          <router-link to='/register'>没有账号？立即注册</router-link>
        </p>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.form{
    padding-top: 80/@r;
}
.notice{
  padding: 0 24/@r;
  text-align: right;
  font-size: 26/@r;
}
</style>
