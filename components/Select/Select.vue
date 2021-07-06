<template lang='pug'>
v-select(:options='data', v-bind:value='selected', v-on:input='updateValue')
</template>

<script>
import 'vue-select/dist/vue-select.css'
export default {
  props: ['data', 'value'],

  computed: {
    selected() {
      return this.data.find((option) => option.value == this.value)
    },
  },

  methods: {
    updateValue: function (option) {
      this.$emit('input', option ? option.value : '')
    },
  },
}
</script>


<style lang='scss' src='./select.scss'></style>