<template>
    <form>
        <slot />
    </form>
</template>
<script>
import Schema from 'async-validator'
export default {
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    validate (callback) {
      const schema = new Schema(this.rules)
      schema.validate(this.form, callback)
    }
  }
}
</script>
