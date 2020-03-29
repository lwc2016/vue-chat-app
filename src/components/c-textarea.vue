<template>
    <textarea class="textarea" v-bind="$attrs" :value="value" @input="event => $emit('input', event.target.value)"></textarea>
</template>
<script>
export default {
  props: ['value']
}
</script>
<style lang="less" scoped>
.textarea{
    width: 100%;
    border: 1px solid #c5c5c5;
    box-sizing: border-box;
    padding: 10/@r 20/@r;
    border-radius: 6/@r;
    -webkit-appearance: none;
    font-size: 26/@r;
    font-weight: 500;
    color: #4f4f4f;
    min-height: 120/@r;
    background-color: transparent;
}
</style>
