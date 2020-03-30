<template>
    <div>
        <c-profile :data="detail" />
        <c-form class="form">
           <c-form-item>
            <c-textarea placeholder="请填写备注" />
           </c-form-item>
        </c-form>
        <div class="buttons">
            <router-link :to="`/chatRoom/${detail.id}`">
              <c-button>发消息</c-button>
            </router-link>
            <c-button @click='handleAdd' type="primary" class="button">添加好友</c-button>
            <c-button type="danger" class="button">删除好友</c-button>
        </div>
    </div>
</template>
<script>
import { userDetail } from '@/services/user'
import { invitationSend } from '@/services/invitation'
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
      this.detail = await userDetail({ id: this.$route.params.id })
    },
    async handleAdd () {
      await invitationSend({ userId: this.detail.id })
      this.$message.success('邀请发送成功！')
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
