<template lang='pug'>
.products
  .products__filter
    FilterApp(:data='data.subCategories', :sortItems='data.sort')
  .grid.is-row.is-strech
    transition(name='fade')
      .col-2.col-xl-3.col-md-4.col-m-12(v-if="open")      
        .products__sidebar
          Sidebar(:data='data.filter', :type='type', @facets='updateFacets')
    .col-10.col-xl-9.col-md-8.col-m-12
      .products__list(:class='{ "is-load": loading }')
        .products__item(v-for='item in data.products', :key='item.id')
          Product(:data='item')
      .products__pagination(v-if='hasPagination')
        Pagination(:data='data.pagination')
</template>

<script>
export default {
  props: ['data', 'loading', 'type'],
  data() {
    return {      
      open: true,
    }
  },
  computed: {
    hasPagination() {
      return (
        this.data.pagination.totalCount > this.data.pagination.defaultPageSize
      )
    },
  },

  methods: {
    updateFacets(data) {
      this.$emit('facets', data)
    },
    toogleFilter() {
      this.open = !this.open
    },
  },
  mounted() {
    this.$nuxt.$on('toogleFilter', this.toogleFilter)
  },
}
</script>

<style lang='scss' src='./products.scss'></style>