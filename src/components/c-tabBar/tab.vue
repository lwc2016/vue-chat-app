<template>
    <router-link :to="path" class="tab">
        <div class="tab-icon">
            <img :src="active ? activeIcon: icon" />
            <div v-if="count" class='count'>{{count}}</div>
        </div>
        <div :class="{'tab-text': true, 'tab-text-active': active}">{{title}}</div>
    </router-link>
</template>
<script>
export default {
  props: [
    'path',
    'icon',
    'activeIcon',
    'active',
    'title',
    'count'
  ]
}
</script>
<style lang="less" scoped>
.tab{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.tab-icon{
    width: 50/@r;
    height: 50/@r;
    position: relative;
   img{
     width: 100%;
   }
   .count{
     position: absolute;
     width: 32/@r;
     height: 32/@r;
     background-color: @danger;
     top: -6/@r;
     right: -16/@r;
     border-radius: 100%;
     font-size: 20/@r;
     color: #ffffff;
     text-align: center;
     line-height: 32/@r;
   }
}
.tab-text{
    font-size: 28/@r;
    margin-top: 6/@r;
    color: #999999;
    font-weight: bold;
}
.tab-text-active{
    color: @primary;
}
</style>
