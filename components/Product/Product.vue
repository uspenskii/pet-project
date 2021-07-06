<template lang='pug'>
.product(@mouseleave='clearImg', :class='{ "is-big": isBig }')
  CompareButton(:productId='data.id' :class='{ "is-big": isBig }')
  .product__info
    p.product__article(v-if="data.code") Арт {{ data.code }}
    .product__badges
      Badges(:options='data')
  .product__cover
    .product__slider(v-if='hasImages')
      .product__slide(
        v-for='(item, index) in data.images',
        :key='index',
        @mouseenter='toggleImg(item, index)'
      )
    .product__paginations(v-if='hasPagination')
      .product__pagination(
        v-for='(item, index) in data.images',
        :key='index',
        :class='{ "is-active": index == indexSlide }'
      )
    img.product__img(v-if='hasImages', :src='image')
  .product__body
    nuxt-link.product__name(:to='`/product/${data.alias}`') {{ data.title }}
    .product__rating
      Rating(:rating='data.rating', :reviewCount='data.reviewCount')
  .product__footer
    .product__prices
      Price(:data='{ cost: data.cost, costOld: data.costOld, isBig: isBig }')
    .product__button
      Counter(:productId='data.id', :isAlt='isBig') 
</template>

<script>
export default {
  props: ['data', 'isBig'],
  data() {
    return {
      image: this.data.images[0],
      indexSlide: 0,
      compare: this.data.inCompare,
      category: this.categoires,
    }
  },
  methods: {
    toggleImg(img, index) {
      if (this.hasImages) {
        this.image = img
        this.indexSlide = index
      }
    },
    clearImg() {
      if (this.hasImages) {
        this.image = this.data.images[0]
        this.indexSlide = 0
      }
    },
  },
  computed: {
    hasImages() {
      return this.data.images && this.data.images.length > 0
    },
    hasPagination() {
      return this.data.images.length > 1
    },
  },
  mounted() {
    if (this.hasImages) {
      this.image = this.data.images[0]
    } else {
      this.image = '/img/no-photo-product.png'
    }
  },
}
</script>

<style lang='scss' src='./product.scss'></style>