<template>
    <router-link :to="path" class="tab">
        <div class="tab-icon">
            <img :src="active ? activeIcon: icon" />
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
    'title'
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
   img{
     width: 100%;
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
