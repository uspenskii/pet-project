<template lang='pug'>
.sales  
  .grid.is-row.is-strech    
    .col-12.col-xl-9.col-md-8.col-m-12
      .sales__list(:class='{ "is-load": loading }')
        .sales__item(v-for='item in data.products', :key='item.id')
          Product(:data='item')
      .sales__pagination(v-if='hasPagination')
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

<style lang='scss' src='./sales.scss'></style>