<template>
    <div>
        <message-content />
        <footer-form />
    </div>
</template>
<script>
import messageContent from './message-content'
import footerForm from './footer-form'
export default {
  components: {
    footerForm,
    messageContent
  },
  mounted () {
    // 设置已读
    this.$store.commit('message/setRead', this.$route.params.id)
  }
}
</script>
