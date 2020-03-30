<template>
    <div>
        <c-profile :data="detail" />
        <c-form class="form">
           <c-form-item>
            <c-textarea placeholder="请填写备注" />
           </c-form-item>
        </c-form>
        <div class="buttons">
            <c-button @click='handleAdd' type="primary" class="button">添加好友</c-button>
            <c-button type="danger" class="button">删除好友</c-button>
        </div>
    </div>
</template>
<script>
import { invitationSend, invitationDetail } from '@/services/invitation'
export default {
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.fetchDetail()
  },
  methods: {
    async fetchDetail () {
      this.detail = await invitationDetail({ id: this.$route.params.id })
    },
    async handleAdd () {
      try {
        await invitationSend({ userId: this.detail.id })
        this.$message.success('邀请发送成功！')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.form{
  margin-top: 20/@r;
}
.buttons{
    margin: 0 24/@r;
    margin-top: 80/@r;
}
.button{
    margin-bottom: 20/@r;
}
</style>
