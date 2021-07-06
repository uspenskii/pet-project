<template lang='pug'>
.roll
  .roll__header
    h2.roll__title Каталог
    .roll__buttons
      Arrow(
        className='is-slider is-prev js-roll-prev',
        hasImg='true',
        img='/img/i-arrow-enabled.svg'
      )
      Arrow(
        className='is-slider is-next js-roll-next',
        hasImg='true',
        img='/img/i-arrow-enabled.svg'
      )
  .roll__container(ref='slider')
    .roll__wrapper 
      .roll__slide(v-for='(item, index) in data', :key='index')
        Category(:products='item')
</template>

<script>
import Swiper from 'swiper'
export default {
  props: ['data'],  
  mounted() {    
    if (window.outerWidth >= 1200) {
      new Swiper(this.$refs.slider, {
      wrapperClass: 'roll__wrapper',
      slideClass: 'roll__slide',
      spaceBetween: 16,
      width: 152,
      navigation: {
        nextEl: '.js-roll-next',
        prevEl: '.js-roll-prev',
      },
      breakpoints: {
        559: {
          width: 228,
          spaceBetween: 30,
        },        
      },
    })
     }
    
     
  },
}
</script>

<style lang='scss' src='./roll.scss'></style>