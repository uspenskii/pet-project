<template lang='pug'>
.service
  .service__img
    img.service__image(:src='items.img')
  .service__content
    p.service__text {{ items.text }}
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang='scss' src='./service.scss'></style>