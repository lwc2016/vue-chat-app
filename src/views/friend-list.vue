<template>
    <div>
        <c-session>
            <c-session-item>添加好友</c-session-item>
        </c-session>
        <h3 class="title">我的朋友</h3>
        <div class="list">
            <router-link to="/friend/2" class="friend">
                <div class="logo">
                    <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=be9f02e9b5315c60579863bdecd8a076/8326cffc1e178a82e760d15cff03738da877e8ea.jpg" />
                </div>
                <div class="name">欧阳娜娜</div>
            </router-link>
            <router-link to="/friend/2" class="friend">
                <div class="logo">
                    <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=be9f02e9b5315c60579863bdecd8a076/8326cffc1e178a82e760d15cff03738da877e8ea.jpg" />
                </div>
                <div class="name">欧阳娜娜</div>
            </router-link>
            <router-link to="/friend/2" class="friend">
                <div class="logo">
                    <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=be9f02e9b5315c60579863bdecd8a076/8326cffc1e178a82e760d15cff03738da877e8ea.jpg" />
                </div>
                <div class="name">欧阳娜娜</div>
            </router-link>
            <router-link to="/friend/2" class="friend">
                <div class="logo">
                    <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=be9f02e9b5315c60579863bdecd8a076/8326cffc1e178a82e760d15cff03738da877e8ea.jpg" />
                </div>
                <div class="name">欧阳娜娜</div>
            </router-link>
            <router-link to="/friend/2" class="friend">
                <div class="logo">
                    <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=be9f02e9b5315c60579863bdecd8a076/8326cffc1e178a82e760d15cff03738da877e8ea.jpg" />
                </div>
                <div class="name">欧阳娜娜</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.title{
    padding: 0 24/@r;
    font-size: 30/@r;
    line-height: 60/@r;
    font-weight: 500;
    height: 60/@r;
    color: #333333;
}
.list{
    background-color: #ffffff;
    padding-left: 24/@r;
}
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
        margin-left: 20/@r;
        font-weight: bold;
    }
}
.friend + .friend{
    border-top: 1px solid #e5e5e5;
}
</style>
