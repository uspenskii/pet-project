<template lang='pug'>
.product-card
  .product-card__control    
    .product-card__rating
      Rating(:rating='data.rating' :reviewCount='data.reviewCount')
    CompareButton.product(:productId='data.id' type='productCard')   
  .product-card__body
    .grid.is-row
      .col-4.col-m-12
        .product-card__slider
          .product-card__badges
            Badges(:options='data')
          ProductSlider(:data='data.slider')
      .col-5.col-m-12
        .product-card__specifications
          .specifications__header
            img.specifications__logo(v-if="data.brand" :src='data.brand.image')
            p.specifications__article(v-if="data.code") Артикул: {{ data.code }}
          .product-card__specifications-more
            Specifications(:data='data.characteristics' :brand='data.brand' :category='data.category')
      .col-3.col-m-12
        .product-card__sidebar
          ProductSidebar(:cost='data.cost' :costold='data.costOld' :counter='data.inCartCount' :id='data.id' :drop='data.isDroplet')
</template>



<script>
export default {
  props: ['data'],
  
}
</script>

<style lang='scss' src='./product-card.scss'></style>