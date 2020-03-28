<template>
    <div>
        <c-profile :data="$store.state.user.info" />
        <c-session class="body">
          <c-session-item title="设置" />
        </c-session>
    </div>
</template>
<script></script>
<style lang="less" scoped>
.buttons{
    margin: 0 24/@r;
    margin-top: 80/@r;
}
.body{
  margin-top: 20/@r;
}
</style>
