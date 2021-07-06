<template lang='pug'>
.brands
  .brands__header
    h2.brands__title Бренды
    .brands__buttons(v-if="data.length > 6")
      Arrow(
        className='is-slider is-prev js-brands-prev',
        hasImg='true',
        img='/img/i-arrow-enabled.svg'
      )
      Arrow(
        className='is-slider is-next js-brands-next',
        hasImg='true',
        img='/img/i-arrow-enabled.svg'
      )
  .brands__container(ref='slider')
    .brands__wrapper
      .brands__slide(v-for="(item, index) in data" :key="index")
        Brand(:brands='item')
</template>

<script>
import Swiper from 'swiper'
export default {
  props: ['data'],
  mounted() {
    new Swiper(this.$refs.slider, {
      wrapperClass: 'brands__wrapper',
      slideClass: 'brands__slide',
      spaceBetween: 15,
      slidesPerView: 3,
      navigation: {
        nextEl: '.js-brands-next',
        prevEl: '.js-brands-prev',
      },
      breakpoints: {
        559: {
          spaceBetween: 110,
          slidesPerView: 'auto',
        },
      },
    })
  },
}
</script>

<style lang='scss' src='./brands.scss'></style>