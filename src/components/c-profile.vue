<template>
    <div class="info">
        <img class="avatar" :src="data.avatar || avatarIcon" />
        <div class="content">
            <h3 class="nickName">{{data.nickName}}</h3>
            <p class="item"><span>账号：</span><span>{{data.name}}</span></p>
            <p class="item"><span>备注：</span><span>{{data.remarks || '这人很懒什么都没有留下'}}</span></p>
        </div>
    </div>
</template>
<script>
import avatarIcon from '@/assets/avatar.png'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      avatarIcon
    }
  }
}
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
