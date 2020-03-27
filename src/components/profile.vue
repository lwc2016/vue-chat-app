<template>
    <div class="info">
        <img class="avatar" src="http://p2.ifengimg.com/a/2018_31/2dd37bca611f306_size220_w1024_h1027.jpg" />
        <div class="content">
            <h3 class="nickName">赵丽颖</h3>
            <p class="item"><span>账号：</span><span>zhaoliying</span></p>
            <p class="item"><span>备注：</span><span>平安就是福气</span></p>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
    .info{
        padding: 20/@r 24/@r;
        background-color: #ffffff;
        display: flex;
        .avatar{
            width: 120/@r;
            height: 120/@r;
            border-radius: 6/@r;
        }
        .content{
            margin-left: 20/@r;
            .nickName{
                font-size: 36/@r;
                color: #4f4f4f;
                font-weight: bold;
            }
            .item{
                font-size: 28/@r;
                color: #666666;
                margin-top: 12/@r;
            }
        }
    }
</style>
