<template>
    <div class="item">
      <router-link :to="path" v-if="path" class="session-item">
        <div>
            <div class="title">
              <slot />
            </div>
        </div>
        <div>
            <div class="right-text"></div>
            <img class="arrow" :src="arrowIcon" />
        </div>
      </router-link>
      <div v-else @click="$emit('click')" class="session-item">
          <div>
              <div class="title">
                <slot />
              </div>
          </div>
          <div>
              <div class="right-text"></div>
              <img class="arrow" :src="arrowIcon" />
          </div>
      </div>
    </div>
</template>
<script>
import arrowIcon from '@/assets/arrow.png'
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      arrowIcon
    }
  }
}
</script>
<style lang="less" scoped>
.session-item{
    height: 90/@r;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 24/@r;
}
.item + .item{
  border-top: 1px solid #e5e5e5;
}
.title{
    font-size: 28/@r;
    color: #4f4f4f;
    font-weight: bold;
}
.arrow{
    width: 36/@r;
    height: 36/@r;
}
</style>
