<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1') 
  Section
    .brands.is-all
      .grid.is-row
        .col-2.col-m-3(v-for="(item, index) in data.brands" :key="index")
          Brand( :brands='item')
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Бренды',          
        },        
      ]

      breadcrumbs.push()

      return breadcrumbs
    },
  },

  asyncData(context) {
    return context.$api.load('brands')
  },
}
</script>