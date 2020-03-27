<template>
    <div class="session-item">
        <div>
            <div class="title">{{title}}</div>
        </div>
        <div>
            <div class="right-text"></div>
            <img class="arrow" :src="arrowIcon" />
        </div>
    </div>
</template>
<script>
import arrowIcon from '@/assets/arrow.png'
export default {
  props: [
    'title'
  ],
  data () {
    return {
      arrowIcon
    }
  }
}
</script>
<style lang="less" scoped>
.session-item{
    height: 90/@r;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 24/@r;
}
.title{
    font-size: 28/@r;
    color: #4f4f4f;
    font-weight: 500;
}
.arrow{
    width: 36/@r;
    height: 36/@r;
}
</style>
