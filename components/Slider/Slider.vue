<template lang='pug'>
.slider
  .grid.is-row
    .col-9.col-l-12.col-m-12
      .slider__content
        .slider__container.js-slider-container
          .slider__wrapper.js-slider-wrapper
            .slider__slide.js-slider-slide(
              v-for='(item, index) in data',
              :key='index'
            )
              Slide(:data='item') 
          .slider__paginations.js-slider-pagination
    .col-3.col-l-12
      .grid.is-row
        .col-12.col-l-6.col-m-12(
          v-for='(item, index) in advance',
          :key='index'
        ) 
          .slider__stock
            Stock(
              :className='item.id == 2 ? "is-orange" : "is-blue"',
              :data='item'
            ) 
</template>

<script>
import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Parallax,
  Autoplay,
} from 'swiper'
Swiper.use([Navigation, Pagination, EffectFade, Parallax, Autoplay])
export default {
  props: ['data', 'advance'],
  mounted() {
    new Swiper('.js-slider-container', {
      wrapperClass: 'js-slider-wrapper',
      slideClass: 'js-slider-slide',
      spaceBetween: 44,
      effect: 'fade',
      loop: true,
      parallax: true,
      speed: 500,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.js-slider-pagination',
        clickable: true,
      },
    })
  },
}
</script>

<style lang='scss' src='./slider.scss'></style>