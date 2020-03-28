<template>
    <div>
        <h3 class="title">好友消息</h3>
        <div class="messages">
            <router-link to="/chatRoom/1" class="message">
                <div class="left">
                    <div class="logo">
                        <img src="http://img3.cache.netease.com/photo/0026/2016-09-22/C1J71ODR3ONH0026.jpg" />
                    </div>
                    <div class="count">12</div>
                </div>
                <div class="info">
                    <h3 class="name">东方不败</h3>
                    <p class="content">睡觉了吗？</p>
                </div>
            </router-link>
            <router-link to="/chatRoom/1" class="message">
                <div class="left">
                    <div class="logo">
                        <img src="http://img3.cache.netease.com/photo/0026/2016-09-22/C1J71ODR3ONH0026.jpg" />
                    </div>
                    <div class="count">12</div>
                </div>
                <div class="info">
                    <h3 class="name">东方不败</h3>
                    <p class="content">睡觉了吗？</p>
                </div>
            </router-link>
            <router-link to="/chatRoom/1" class="message">
                <div class="left">
                    <div class="logo">
                        <img src="http://img3.cache.netease.com/photo/0026/2016-09-22/C1J71ODR3ONH0026.jpg" />
                    </div>
                    <div class="count">12</div>
                </div>
                <div class="info">
                    <h3 class="name">东方不败</h3>
                    <p class="content">睡觉了吗？</p>
                </div>
            </router-link>
            <router-link to="/chatRoom/1" class="message">
                <div class="left">
                    <div class="logo">
                        <img src="http://img3.cache.netease.com/photo/0026/2016-09-22/C1J71ODR3ONH0026.jpg" />
                    </div>
                    <div class="count">12</div>
                </div>
                <div class="info">
                    <h3 class="name">东方不败</h3>
                    <p class="content">睡觉了吗？</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script></script>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    color: #333333;
    font-weight: 500;
    line-height: 60/@r;
    height: 60/@r;
}
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
.message + .message{
    border-top: 1px solid #e5e5e5;
}
</style>
