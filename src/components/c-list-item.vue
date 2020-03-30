<template>
    <div class="list-item">
        <router-link
            :to="path"
            class="message"
        >
            <div class="left">
                <div class="logo">
                    <img :src="imgUrl" />
                </div>
                <div v-if="count" class="count">{{count}}</div>
            </div>
            <div class="info">
                <h3 class="name">
                    <slot name='primary'></slot>
                </h3>
                <p class="content">
                    <slot name="secondary"></slot>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  props: ['path', 'imgUrl', 'count']
}
</script>
<style lang="less" scoped>
.messages{
    padding-left: 24/@r;
    background-color: #ffffff;
}
.message{
    padding: 20/@r 24/@r 20/@r 0;
    display: flex;
    .left{
        width: 80/@r;
        height: 80/@r;
        position: relative;
        .count{
            position: absolute;
            width: 32/@r;
            height: 32/@r;
            top: -16/@r;
            right: -16/@r;
            font-size: 20/@r;
            color: #ffffff;
            text-align: center;
            line-height: 32/@r;
            border-radius: 100%;
            background-color: @danger;
        }
    }
    .logo{
        width: 80/@r;
        height: 80/@r;
        overflow: hidden;
        border-radius: 6/@r;
        img{
            width: 100%;
        }
    }
    .info{
        margin-left: 20/@r;
    }
    .name{
        font-size: 30/@r;
        color: #333333;
        font-weight: bold;
    }
    .content{
        font-size: 24/@r;
        color: #666666;
        margin-top: 16/@r;
    }
}
.list-item + .list-item{
    border-top: 1px solid #e5e5e5;
}
</style>
