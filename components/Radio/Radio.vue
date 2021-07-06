<template lang='pug'>
label.radio
  input.radio__field(
    type='radio',
    :checked='isChecked',
    :value='value',
    @change='$emit("change", $event.target.value)'
  )
  span.radio__label {{ label }}
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    label: { type: String, default: '', required: true },
    modelValue: { default: '' },
    value: { type: String, default: undefined },
  },
  computed: {
    isChecked() {
      return this.modelValue == this.value
    },
  },
}
</script>

<style lang='scss' src='./radio.scss'></style>

