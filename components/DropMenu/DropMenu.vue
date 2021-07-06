<template lang='pug'>
.drop-menu(v-click-outside='closeOut')
  .drop-menu__sidebar
    ul.drop-menu__list
      li.drop-menu__item(
        @mouseover='toggleId(index)',
        v-for='(item, index) in data',
        :key='index'
      )
        .drop-menu__link-adaptive(@click='toggleId(index)')
          img.drop-menu__icon(:src='item.icon', alt='')
          span.drop-menu__title {{ item.title }}
        nuxt-link.drop-menu__link(
          @click.native='close',
          :to='`/categories/${item.alias}`'
        )
          img.drop-menu__icon(:src='item.icon', alt='')
          span.drop-menu__title {{ item.title }}
  .drop-menu__body(
    v-if='category == activeIndex',
    :class='{ "is-active": category == activeIndex }'
  )
    .drop-menu__nav(v-for='(item, j) in data[activeIndex].items', :key='j')
      nuxt-link.drop-menu__name(
        :to='`/categories/${item.alias}`',
        @click.native='close'
      ) 
        div {{ item.title }}
      ul.drop-menu__list.is-alt
        li.drop-menu__item(
          v-for='(subcategory, z) in data[activeIndex].items[j].items',
          :key='z'
        )
          nuxt-link.drop-menu__link(
            :to='`/categories/${subcategory.alias}`',
            @click.native='close'
          )
            div {{ subcategory.title }}
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  props: ['data'],
  data() {
    return {
      category: 1,
      id: 1,
      activeIndex: 0,
    }
  },
  methods: {
    toggleId(id) {
      this.category = id
      this.activeIndex = id
    },
    close() {
      this.$nuxt.$emit('closeMenu')
    },
    closeOut(event) {
      // console.log(document.querySelector('.header__dropdown'));
      // if (document.querySelectorAll('.header__dropdown')) {
      this.$nuxt.$emit('closeMenu')
      // }
    },
  },
  directives: {
    ClickOutside,
  },
  mounted() {
    // this.category = 1
    // if (window.innerWidth) {
    //   this.category = 0
    // }
  },
}
</script>

<style lang='scss' src='./drop-menu.scss'></style>