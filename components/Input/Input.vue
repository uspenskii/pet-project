<template lang='pug'>
input.input(
  :placeholder='placeholder',
  v-bind:value='value',
  v-on:input='updateValue($event.target.value)'
)
</template>

<script>
export default {
  props: ['placeholder', 'value'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
  },
}
</script>
<style lang='scss' src='./input.scss'></style>