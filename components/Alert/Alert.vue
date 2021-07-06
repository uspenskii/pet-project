<template lang='pug'>
.alert
  .alert__icon
    img(src="/img/i-alert-alt.svg", alt="")
  .alert__info(v-html="data")    
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./alert.scss'></style>