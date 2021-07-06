<template lang='pug'>
.header(ref='header')
  .container
    .header__top
      .header__contacts
        Contacts(:data='data.contacts')
      .header__nav
        Nav
  .header__middle
    .container
      .header__inner
        .header__logo
          Logo
          button.header__hamburg(@click='toggleDropMenu')
            span.header__span 
            span.header__span 
            span.header__span
        button.header__burger.is-mobile(@click='toggleMenu') Каталог товаров
        .header__search
          Search 
        .header__options
          .header__search.is-mobile
            MenuOptions(img='/img/i-search-alt.svg', title='Поиск')
          .menu-options
            .menu-options__control
              .menu-options__image
                img.menu-options__img(src='/img/i-options1.svg')
              .menu-options__content
                nuxt-link.menu-options__link(to='/search')
                  h4.is-limited.menu-options__title Расширенный поиск
            .menu-options__control(:class='{ unactive: compare < 1 }')
              .menu-options__image
                img.menu-options__img(src='/img/i-options2.svg')
              .menu-options__content
                nuxt-link.menu-options__link(to='/compare')
                  h4.menu-options__title Сравнение
                  p.menu-options__text {{ compareCountText }}
          MenuCart
    .header__dropmenu(v-if='menu', :class='{ "is-active": menu }')
      .menu-options
        .menu-options__control
          .menu-options__image
            img.menu-options__img(src='/img/za-lupa.svg')
          .menu-options__content
            nuxt-link.menu-options__link(
              to='/search/result',
              @click.native='closeDropMenu'
            )
              h4.is-limited.menu-options__title Поиск
        .menu-options__control
          .menu-options__image
            img.menu-options__img(src='/img/i-options1.svg')
          .menu-options__content
            nuxt-link.menu-options__link(
              to='/search',
              @click.native='closeDropMenu'
            )
              h4.is-limited.menu-options__title Расширенный поиск
        .menu-options__control
          .menu-options__image
            img.menu-options__img(src='/img/i-options2.svg')
          .menu-options__content
            nuxt-link.menu-options__link(
              to='/compare',
              @click.native='closeDropMenu'
            )
              h4.menu-options__title Сравнение товаров
        .menu-options__control
          .menu-options__image
            img.menu-options__img(src='/img/i-cart.svg')
          .menu-options__content
            nuxt-link.menu-options__link(
              to='/cart',
              @click.native='closeDropMenu'
            )
              h4.menu-options__title Ваша корзина
      Nav 
    .header__dropdown(v-if='opened', :class='{ "is-active": opened }')
      .container
        DropMenu(:data='data.menu_catalog')
  .container
    .header__menu
      button.header__burger(@click.stop='toggleMenu') Каталог товаров
      .header__nav.is-mobile
        Nav
      .header__links
        Menu(:data='data.menu')
</template>

<script>
import { labelFormat } from '@/helpers/formatter'
import ClickOutside from 'vue-click-outside'
export default {
  props: ['data'],
  data() {
    return { scrollTop: 0, opened: false, menu: false }
  },
  methods: {
    toggleDropMenu() {
      this.menu = !this.menu
    },
    closeDropMenu() {
      this.menu = false
    },
    toggleMenu() {
      this.opened = !this.opened
    },
    closeMenu() {
      this.opened = false
    },
  },
  mounted() {
    this.$nuxt.$on('closeMenu', this.closeMenu)
    this.$nuxt.$on('closeDropMenu', this.closeDropMenu)
    window.addEventListener('scroll', () => {
      this.scrollTop = pageYOffset

      if (window.outerWidth >= 500) {
        if (this.scrollTop > 100) {
          this.$refs.header.classList.add('pre-fixed')
        } else {
          this.$refs.header.classList.remove('pre-fixed')
        }

        if (this.scrollTop > 149) {
          this.$refs.header.classList.add('is-fixed')
          this.$refs.header.classList.remove('pre-fixed')
        } else {
          this.$refs.header.classList.remove('is-fixed')
        }
      } else {
        this.$refs.header.classList.add('is-fixed')
      }
    })
  },
  directives: {
    ClickOutside,
  },
  computed: {
    compareCountText() {
      return (
        this.compare +
        ' ' +
        labelFormat(this.compare, ['товар', 'товара', 'товаров'])
      )
    },
    compare() {
      return this.$store.state.compare.products.length
    },
  },
}
</script>

<style lang='scss' src='./header.scss'></style>