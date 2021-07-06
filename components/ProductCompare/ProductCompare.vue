<template lang='pug'>
.product.is-compare
  button.product__remove(@click='removeComare(data.id)')
  .product__wrapper
    .product__cover 
      img.product__img(:src='data.images[0]')
    .product__body
      nuxt-link.product__name(:to='`/product/${data.alias}`') {{ data.title }}
    .product__footer
      .product__rating
        Rating(:rating='data.rating', :reviewCount='data.reviewCount')
      .product__prices
        Price.is-compare(:data='{ cost: data.cost, costOld: data.costOld }')
      Counter(:productId='data.id')
</template>

<script>
export default {
  props: ['data', 'characteristics'],
  methods: {
    removeComare(id) {
      this.$store.dispatch("compare/remove", id);
    },
  },
}
</script>

<style lang='scss' src='../Product/product.scss'></style>