<template>
    <div>
      <message v-for="(item, index) in list" :key="index" :data="item" />
    </div>
</template>
<script>
import message from './message'
export default {
  components: {
    message
  },
  computed: {
    list () {
      return this.$store.state.message.list
    }
  }
}
</script>
