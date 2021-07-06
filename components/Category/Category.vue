<template lang='pug'>
nuxt-link.category(:to='"categories/" + products.alias')
  .category__header
    img.category__img(:src='products.image')
  .category__body
    h3.category__name {{ products.title }}
</template>

<script>
export default {
  props: ['products'],
}
</script>

<style lang='scss' src='./category.scss'></style>