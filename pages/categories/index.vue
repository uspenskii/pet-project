<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1') 
  Section
    .grid.is-row
      .col-2.col-l-4.col-m-6(style='margin-bottom: 30px' v-for="item in data.categories" :key="item.id")
        Category(:products='item')      
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  data() {
    return {     
      breadcrumbs: [
        {
        title: 'Каталог',
        url: '/',
      },
      ],
    }
  },
  asyncData(context) {
    return context.$api.load('categories')
  },
}
</script>