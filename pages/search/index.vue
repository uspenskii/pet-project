<template lang='pug'>
.page__content
  Section(title='Поиск товаров')
    .grid.is-row
      .col-12
        FormSearch(:data='data.form')
  Section(v-if='data.isEmptyRequest' title='Введите параметры поиска')     
  Section(v-else-if='!data.products.length' title='Ничего не найдено') 
  Section(v-else)
    SearchResults(:data='data')     
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  watchQuery: true,
  asyncData(context) {
    return context.$api.load('search/advanced', context.route.query)
  },
}
</script>