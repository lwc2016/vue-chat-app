<template>
    <button class="button"><slot /></button>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.button{
    width: 100%;
    background-color: @primary;
    height: 80/@r;
    border: none;
    border-radius: 4/@r;
    color: @white;
    font-size: 30/@r;
    font-weight: bold;
}
</style>
