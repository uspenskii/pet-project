<template lang='pug'>
.stock-page   
  .stock-page__cover
    img(:src='data.images.desktop').stock-page__img     
    img(:src='data.images.mobile').stock-page__mobile
  .stock-page__description(v-html="data.content")
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./stock-page.scss'></style>