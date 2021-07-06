<template lang='pug'>
label.checkbox(ref='label')
  input.checkbox__input(
    type='checkbox',
    :checked='data.is_checked',
    :value='data.value',
    :disabled='disabled',
    @change='addFilter'
  )
  span.checkbox__label {{ data.label }}
  span ({{ data.count }})
</template>



<script>
export default {
  props: ['data', 'disabled'],
  methods: {
    addFilter(e) {
      this.$emit('change', this.$refs.label)
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style lang='scss' src='./checkbox.scss'></style>