<template lang='pug'>
label.checkbox
  input.checkbox__input(
    type='checkbox',
    @change='addCheck'
  )
  span.checkbox__label Согласен на обработку персональных данных
</template>



<script>
export default {
  methods: {
    addCheck(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style lang='scss' src='../Checkbox/checkbox.scss'></style>