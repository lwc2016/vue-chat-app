<template>
    <input class="input" v-bind="$attrs" :value="value" @input="event => $emit('input', event.target.value)" />
</template>
<script>
export default {
  props: ['value']
}
</script>
<style lang="less" scoped>
    .input{
        width: 100%;
        border: 1px solid #c5c5c5;
        box-sizing: border-box;
        height: 80/@r;
        padding: 0 20/@r;
        border-radius: 6/@r;
        -webkit-appearance: none;
        font-size: 26/@r;
        font-weight: 500;
        color: #4f4f4f;
        background-color: transparent;
    }
</style>
