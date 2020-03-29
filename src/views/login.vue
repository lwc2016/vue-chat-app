<template>
    <div>
        <c-form ref="form" :form='form' :rules="rules" class="form">
            <c-form-item prop="name">
              <c-input v-model="form.name" placeholder="用户名" />
            </c-form-item>
            <c-form-item prop="password">
              <c-input v-model="form.password" type="password" placeholder="密码" />
            </c-form-item>
            <c-form-item>
              <c-button @click='handleSubmit'>登录</c-button>
            </c-form-item>
        </c-form>
        <p class="notice">
          <router-link to='/register'>没有账号？立即注册</router-link>
        </p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请填写用户名！' }],
        password: [{ required: true, message: '请填写密码！' }]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(error => {
        if (error) {
          return this.$message.error(error[0].message)
        }
        this.$store.dispatch('user/login', { ...this.form }).then(resp => {
          this.$message.success('登录成功！')
          this.$router.push('/')
        }).catch(error => {
          this.$message.error(error)
        })
      })
    }
  }
}
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
