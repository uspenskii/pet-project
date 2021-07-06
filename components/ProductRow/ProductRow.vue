<template lang='pug'>
.product-row
  .product-row__wrapper
    .product-row__cover
      img.product-row__img(:src='data.image')
    .product-row__info
      nuxt-link.product-row__name(:to='`/product/${data.alias}`') {{ data.title }}
      .product-row__price
        Price(:data='{ cost: data.cost, costOld: data.costOld, isBig: false }')
  .product-row__footer
    .product-row__counter
      Counter(:productId='data.id', :isAlt='false')
    Price(:data='{ cost: data.totalCost, isBig: false }')
    .product-row__remove(@click='removeProduct(data.id)')
</template>

<script>
export default {
  props: ['data'],
  methods: {    
    removeProduct(id) {
      this.$store.dispatch("cart/remove", [id]);
    },    
  },
}
</script>

<style lang='scss' src='./product-row.scss'></style>