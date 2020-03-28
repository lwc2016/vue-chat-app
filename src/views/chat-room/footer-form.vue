<template>
    <div class="footer">
        <div class="pictrue-icon">
            <img :src="pictureIcon" />
        </div>
        <div class="input-content" contenteditable="true"></div>
    </div>
</template>
<script>
import pictureIcon from '@/assets/picture.png'
export default {
  data () {
    return {
      pictureIcon
    }
  }
}
</script>
<style lang="less" scoped>

.footer{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 20/@r 24/@r;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
}
.pictrue-icon{
    width: 60/@r;
    height: 60/@r;
    padding: 8/@r;
    img{
        width: 100%;
    }
}
.input-content{
    width: 100%;
    border: 1px solid #c5c5c5;
    padding: 20/@r 10/@r;
    -webkit-appearance: none;
    border-radius: 4/@r;
    font-size: 28/@r;
    box-sizing: border-box;
}
</style>
