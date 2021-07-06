<template lang='pug'>
.discount(:class='className')
    .discount__header
      span.discount__discount {{discount}}
      img(src='icon', alt="").discount__icon
    .discount__body
      p.discount__text {{text}}
</template>

<script>
export default {
  props: ['className', 'discount', 'text', 'icon'],
}
</script>

<style lang='scss' src='./discount.scss'></style>