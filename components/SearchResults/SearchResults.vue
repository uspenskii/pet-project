<template lang='pug'>
.search-results 
  .grid.is-row.is-strech 
    .col-12.col-xl-9.col-md-8.col-m-12
      .search-results__list(:class='{ "is-load": loading }')
        .search-results__item(v-for='item in data.products', :key='item.id')
          Product(:data='item')
      .search-results__pagination(v-if='hasPagination')
        Pagination(:data='data.pagination')
</template>

<script>
export default {
  props: ['data', 'loading'],

  computed: {
    hasPagination() {
      return (
        this.data.pagination.totalCount > this.data.pagination.defaultPageSize
      )
    },
  },
}
</script>

<style lang='scss' src='./search-results.scss'></style>