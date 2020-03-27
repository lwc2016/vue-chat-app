<template>
    <div>
        <c-form class="form">
            <c-form-item>
              <c-input placeholder="用户名" />
            </c-form-item>
            <c-form-item>
              <c-input placeholder="昵称" />
            </c-form-item>
            <c-form-item>
              <c-input placeholder="密码" />
            </c-form-item>
            <c-form-item>
              <c-input placeholder="确认密码" />
            </c-form-item>
            <c-form-item>
              <c-button>注册</c-button>
            </c-form-item>
        </c-form>
        <p class="notice">
          <router-link to='/register'>已有账号？立即登录</router-link>
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
