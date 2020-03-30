<template>
    <div class="empty">
        <img class="empty-icon" :src="emptyIcon" />
        <p class="notice">{{title}}</p>
    </div>
</template>
<script>
import emptyIcon from '@/assets/empty-box.png'
export default {
  props: ['title'],
  data () {
    return { emptyIcon }
  }
}
</script>
<style lang="less" scoped>
.empty{
    text-align: center;
}
.empty-icon{
    width: 300/@r;
    margin-top: 360/@r;
}
.notice{
    font-size: 26/@r;
    color: #999999;
    margin-top: 10/@r;
}
</style>
