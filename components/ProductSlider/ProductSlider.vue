<template lang='pug'>
.product-slider
  .product-slider__container(ref='container')
    .product-slider__wrapper
      .product-slider__slide(v-for='(item, i) in data.photos', :key='i')
        img.product-slider__img(:src='item')
  .product-slider__container.is-thumb(ref='thumbs')
    .product-slider__thumbs
      .product-slider__thumbs-slide(v-for='(item, j) in data.thumbs', :key='j')
        img(:src='item')
</template>

<script>
import Swiper, { Navigation, Thumbs } from 'swiper'
Swiper.use([Navigation, Thumbs])
export default {
  props: ['data'],
  methods: {
    initSwiper() {
      new Swiper(this.$refs.container, {
        wrapperClass: 'product-slider__wrapper',
        slideClass: 'product-slider__slide',
        slidesPerView: 1,
        pagination: {
          el: '.product-slider__pagination',
          type: 'bullets',
        },
        spaceBetween: 20,
        direction: 'horizontal',
        thumbs: {
          swiper: new Swiper(this.$refs.thumbs, {
            wrapperClass: 'product-slider__thumbs',
            slideClass: 'product-slider__thumbs-slide',
            spaceBetween: 36,
            width: 90,
            direction: 'horizontal',
          }),
        },
      })
    },
  },
  mounted() {
    this.initSwiper()
  },
}
</script>

<style lang='scss' src='./product-slider.scss'></style>