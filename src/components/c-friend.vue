<template>
    <router-link :to="`/friend/${data.userId}`" class="friend">
        <div class="logo">
            <img :src="data.avatar" />
        </div>
        <div class="info">
            <h3 class="name">{{data.nickName}}</h3>
            <p class="username">{{data.name}}</p>
        </div>
    </router-link>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="less" scoped>
.friend{
    padding: 20/@r 24/@r 20/@r 0;
    display: flex;
    align-items: center;
    .logo{
        width: 80/@r;
        height: 80/@r;
        overflow: hidden;
        border-radius: 6/@r;
        img{
            width: 100%;
        }
    }
    .name{
        font-size: 30/@r;
        color: #4f4f4f;
        font-weight: bold;
    }
    .info{
        margin-left: 20/@r;
    }
    .username{
        font-size: 24/@r;
        font-weight: 500;
        color: #666666;
        margin-top: 18/@r;
    }
}
.friend + .friend{
    border-top: 1px solid #e5e5e5;
}
</style>
