<template lang='pug'>
.search
  form.search__form(@submit.prevent='send')
    input.search__input(
      type='text',
      placeholder='Поиск по сайту...',
      v-model='string',
      @input='search',
      @blur='close'
    )
    button.search__button
      img.search__icon(src='/img/i-search.svg') 
  transition(name='fade')
    .search__dropdown(v-if='opened')
      .search__list
        .search__item(v-for='(item, index) in result', :key='index')
          nuxt-link.search__link(:to='`/product/${item.alias}`') {{ item.title }}
      .search__footer
        .menu-options
          .menu-options__control
            .menu-options__image
              img.menu-options__img(src='/img/i-options1.svg')
            .menu-options__content
              nuxt-link.menu-options__link(to='/search')
                h4.is-limited.menu-options__title Расширенный поиск
</template>

<script>
export default {
  data() {
    return {
      opened: false,
      result: [],
      string: '',
    }
  },
  methods: {
    send() {
      if (!this.string) {
        return
      }
      this.$router.push({
        path: '/search/result',
        query: { text: this.string },
      })
    },
    search() {
      this.$api
        .get('/search/quick', { text: { text: this.string } })
        .then((data) => {
          this.result = data.products

          if (this.result.length > 0) {
            this.opened = true
          }
        })
    },
    close() {
      this.opened = false
      this.result = []
    },
  },
}
</script>

<style lang='scss' src='./search.scss'></style>