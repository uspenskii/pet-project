<template lang='pug'>
.filter-app
  ul.filter-app__list
    li.filter-app__item(v-for='item in data', :key='item.id')
      nuxt-link.filter-app__button(:to='`/categories/${item.alias}`') {{ item.title }}
  .filter-app__filters
    .filter-app__filter(@click='toogle')
      img(src='/img/filter.svg')
      label Фильтры
    .filter-app__dropdown(v-click-outside='hide')
      .filter-app__toggle(@click='show', :class='{ "is-active": opened }') {{ currentSort }}
      transition(name='fade')
        .filter-app__sorting(v-if='opened', :class='{ "is-active": opened }')
          .filter-app__sort(
            v-for='(item, index) in sortItems',
            :key='index',
            @click='sort(index)'
          ) {{ item.label }}
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  props: ['data', 'sortItems'],
  data() {
    return {
      opened: false,      
    }
  },
  methods: {
    toogle() {
      this.$nuxt.$emit('toogleFilter')
    },
    show() {
      this.opened = !this.opened
    },
    hide() {
      this.opened = false
    },
    sort(index) {
      this.opened = false

      for (const i in this.sortItems) {
        this.sortItems[i].active = false
      }

      this.sortItems[index].active = true

      this.$router.push({
        query: {
          ...this.$route.query,
          sort: this.sortItems[index].value,
        },
      })
    },
  },
  directives: {
    ClickOutside,
  },
  computed: {
    currentSort() {
      for (const index in this.sortItems) {
        if (this.sortItems[index].active) {
          if (!this.sortItems[index].value) {
            return 'Сортировка'
          }
          return this.sortItems[index].label
        }
      }
      return 'Сортировка'
    },
  },
}
</script>

<style lang='scss' src='./filter-app.scss'></style>