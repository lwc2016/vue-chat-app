<template>
    <div>
        <profile />
        <c-session class="body">
          <c-session-item title="设置" />
        </c-session>
    </div>
</template>
<script>
import profile from '@/components/profile'
export default {
  components: {
    profile
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
</style>
