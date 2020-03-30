<template>
    <div>
        <c-profile :data="detail" />
        <div class="text">{{detail.invitationRemarks}}</div>
        <div class="buttons">
          <c-button @click="handleRefuse" type="danger" class="button">拒绝</c-button>
          <c-button @click='handleAgree' type="primary" class="button">同意</c-button>
        </div>
    </div>
</template>
<script>
import { invitationDetail, invitationAgree, invitationRefuse } from '@/services/invitation'
export default {
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.fetchDetail()
    this.$store.commit('message/setReadById', this.$route.params.id)
  },
  methods: {
    async fetchDetail () {
      this.detail = await invitationDetail({ id: this.$route.params.id })
    },
    async handleAgree () {
      await invitationAgree({ id: this.$route.params.id })
      this.$message.success('好友添加成功！')
    },
    async handleRefuse () {
      await invitationRefuse({ id: this.$route.params.id })
      this.$message.success('拒绝成功！')
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
    display: flex;
}
.button{
    margin-bottom: 20/@r;
}
.button + .button{
  margin-left: 20/@r;
}
.text{
  margin: 0 24/@r;
  padding: 20/@r;
  border: 1px solid #d5d5d5;
  margin-top: 30/@r;
  border-radius: 6/@r;
  font-size: 28/@r;
  color: #333333;
  font-weight: 500;
  min-height: 80/@r;
}
</style>
