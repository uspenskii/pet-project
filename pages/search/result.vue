<template lang='pug'>
.page__content
  .page__search
    Section
      Search
  Section(v-if='!data.search.text', title='Пустой поисковый запрос') 
  Section(v-else-if='!data.products.length', :title='resultTitle') 
    p Ничего не найдено
  Section(v-else, :title='resultTitle')
    p Надено {{ resultCount }}
    SearchResults(:data='data') 
</template>

<script>
import { labelFormat } from '@/helpers/formatter'
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  watchQuery: true,
  computed: {
    resultTitle() {
      return 'Результаты поиска «' + this.data.search.text + '»'
    },
    resultCount() {
      return (
        this.data.search.count +
        ' ' +
        labelFormat(this.data.search.count, ['товар', 'товара', 'товаров'])
      )
    },
  },
  asyncData(context) {
    return context.$api.load('search/result', context.route.query)
  },
}
</script>