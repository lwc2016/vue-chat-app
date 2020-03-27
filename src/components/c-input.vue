<template>
    <input class="input" v-bind="$attrs" />
</template>
<style lang="less" scoped>
    .input{
        width: 100%;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        height: 80/@r;
        padding: 0 20/@r;
        border-radius: 4/@r;
        -webkit-appearance: none;
        font-size: 26/@r;
        font-weight: 500;
        color: #4f4f4f;
    }
</style>
