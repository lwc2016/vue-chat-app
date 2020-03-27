<template>
    <div>
        <c-profile />
        <div class="buttons">
            <c-button type="primary" class="button">添加好友</c-button>
            <c-button type="danger" class="button">删除好友</c-button>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.buttons{
    margin: 0 24/@r;
    margin-top: 80/@r;
}
.button{
    margin-bottom: 20/@r;
}
</style>
