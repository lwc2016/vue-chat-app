<template>
    <div class="list-item">
        <router-link
            :to="path"
            class="message"
        >
            <div class="left">
                <div class="logo">
                    <img :src="imgUrl || defaultIcon" />
                </div>
                <div v-if="count" class="count">{{count}}</div>
            </div>
            <div class="info">
                <div class="info-item">
                    <h3 class="name">
                      <slot name='primary'></slot>
                    </h3>
                    <slot name="rightTop"></slot>
                </div>
                <div class="info-item">
                    <p class="content">
                        <slot name="secondary"></slot>
                    </p>
                    <p class="content">
                        <slot name="rightBottom"></slot>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
import defaultIcon from '@/assets/avatar.png'
export default {
  props: ['path', 'imgUrl', 'count'],
  data () {
    return { defaultIcon }
  }
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
        flex: 1;
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
    .info-item{
        display: flex;
        justify-content: space-between;
    }
}
.list-item + .list-item{
    border-top: 1px solid #e5e5e5;
}
</style>
