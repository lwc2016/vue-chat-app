<template>
    <div class="container">
        <c-form ref="form" :form="form" :rules="rules" class="form">
            <c-form-item>
              <c-input v-model="form.name" type="text" placeholder="用户名" />
            </c-form-item>
            <c-form-item>
              <c-input v-model="form.nickName" type="text" placeholder="昵称" />
            </c-form-item>
            <c-form-item>
              <c-input v-model="form.password" type="password" placeholder="密码" />
            </c-form-item>
            <c-form-item>
              <c-input v-model="form.confirmPassword" type="password" placeholder="确认密码" />
            </c-form-item>
            <c-form-item>
              <c-button @click="handleSubmit">注册</c-button>
            </c-form-item>
        </c-form>
        <p class="notice">
          <router-link to='/login'>已有账号？立即登录</router-link>
        </p>
    </div>
</template>
<script>
import { userRegister } from '@/services/user'
export default {
  data () {
    return {
      form: {
        name: '',
        nickName: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        name: [{ required: true, message: '请填写用户名！' }],
        nickName: [{ required: true, message: '请填写昵称！' }],
        password: [{ required: true, message: '请填写密码！' }],
        confirmPassword: [{ required: true, message: '请再次确认密码！' }]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(error => {
        if (error) {
          return this.$message.error(error[0].message)
        }
        if (this.form.password !== this.form.confirmPassword) return this.$message.error('两次输入的密码不一致！')
        this.register()
      })
    },
    async register () {
      await userRegister(this.form)
      this.$message.success('注册成功，立即登录吧！')
      this.$router.replace('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  width: 750/@r;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0 0 5px #999999;
}
.form{
    padding-top: 80/@r;
}
.notice{
  padding: 0 24/@r;
  text-align: right;
  font-size: 26/@r;
}
</style>
