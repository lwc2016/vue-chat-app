<template>
    <h3 class="title"><slot /></h3>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    line-height: 60/@r;
    font-weight: 500;
    height: 60/@r;
    color: #333333;
}
</style>
