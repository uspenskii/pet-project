<template lang='pug'>
.popular
  .popular__header
    h2.popular__title {{ title }}
    .popular__buttons
      Arrow(
        className=`is-slider is-prev`,
        img='/img/i-arrow-enabled.svg',
        ref='prevpop'
      ) 
      Arrow(
        className=`is-slider is-next `,
        img='/img/i-arrow-enabled.svg',
        ref='nextpop'
      ) 
  .popular__list
    button.popular__button(@click='toggleCategory(0)' :class='{ "is-active": categoryId == 0 }' ) Все
    button.popular__button(
      v-for='(category, index) in data.categories',
      :key='index',
      :class='{ "is-active": categoryId == category.id }'
      @click='toggleCategory(category.id)'
    ) {{ category.title }}
  .popular__container(ref='type')
    .popular__wrapper 
      .popular__slide(
        v-for='(product, index) in filteredProducts',
        :key='index'
      )
        Product(:data='product', :isBig='index == 0')
</template>

<script>
import Swiper from 'swiper'
Swiper.use(Swiper)
import ClickOutside from 'vue-click-outside'
export default {
  props: ['data', 'title', 'type'],
  data() {
    return {
      products: this.data.products,
      swiper: null,
      loading: true,
      opened: false,
      categoryId: 0,
    }
  },
  methods: {
    toggleCategory(id) {
      this.categoryId = id
      setTimeout(() => {
        this.swiper.update()
      }, 0)
    },
    show() {
      this.opened = !this.opened
    },
    hide() {
      this.opened = false
    },
    initSlider() {
      setTimeout(() => {
        this.swiper = new Swiper(this.$refs.type, {
          wrapperClass: 'popular__wrapper',
          slideClass: 'popular__slide',
          spaceBetween: 30,
          slidesPerView: 'auto',
          navigation: {
            nextEl: this.$refs.nextpop.$refs.button,
            prevEl: this.$refs.prevpop.$refs.button,
          },
        })
      }, 0)
    },
  },
  mounted() {
    this.initSlider()
  },
  directives: {
    ClickOutside,
  },
  computed: {
    filteredProducts() {
      if (!this.categoryId) {
        return this.data.products
      }

      return this.data.products.filter((product) => {
        return this.categoryId == product.categoryId
      })
    },
  },
}
</script>

<style lang='scss' src='./popular.scss'></style>