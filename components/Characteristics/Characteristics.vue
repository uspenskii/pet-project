<template lang='pug'>
.characteristics
  .characteristics__item(v-for='row in data', :key='row.id')
    .characteristics__title {{ row.label }}
    .characteristics__row
      .characteristics__value(
        v-for='(value, index) in row.values',
        :key='index'
      ) {{ value }}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    removeComare() {},
  },
}
</script>

<style lang='scss' src='./characteristics.scss'></style>