<template>
    <div>
        <c-profile :data="detail" />
        <c-form class="form">
           <c-form-item class="form-group">
            <c-input v-model="remark" placeholder="填写备注" />
            <c-button @click="handleUpdate" class="save-btn">保存</c-button>
           </c-form-item>
        </c-form>
        <div class="buttons">
            <router-link :to="`/chatRoom/${detail.userId}`">
              <c-button>发消息</c-button>
            </router-link>
            <c-button type="danger" class="button">删除好友</c-button>
        </div>
    </div>
</template>
<script>
import { friendDetail, friendUpdate } from '@/services/friend'
export default {
  data () {
    return {
      detail: {},
      remark: ''
    }
  },
  created () {
    this.fetchDetail()
  },
  methods: {
    async fetchDetail () {
      this.detail = await friendDetail({ id: this.$route.params.id })
      this.remark = this.detail.remarkName
    },
    async handleUpdate () {
      await friendUpdate({ id: this.$route.params.id, remarkName: this.remark })
      this.$store.dispatch('friend/fetchList')
      this.$message.success('修改备注成功！')
      this.fetchDetail()
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
.form-group{
  display: flex;
}
.button{
    margin-bottom: 20/@r;
}
.save-btn{
  width: 120/@r!important;
  margin-left: 10/@r;
}
</style>
