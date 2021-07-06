<template lang='pug'>
.page__content
  Section.is-first
    Slider(:data='data.slider', :advance='data.slider_stocks')
  Section
    Roll(:data='data.categories')
  Section
    Serv
  Section(v-if="data.popular.products.length > 0")
    Popular(:data='data.popular' title='Популярные товары' type='popular')
  Section
    .grid.is-row
      .col-6.col-l-12(v-for='(item, index) in data.slider_stocks', :key='index' style="margin-bottom: 20px")        
        Stock.is-big(
          className='is-big',
          :className='item.id == 2 ? "is-orange" : "is-blue"',
          :data='item'          
        )
  Section(v-if="data.best.products.length > 0")
    Popular(:data='data.best' title='Лучшие спецпредложения' type='best')
  Section
    Brands(:data='data.brands')
  Section.is-grey
    Discounts
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',

  asyncData(context) {
    return context.$api.load('home')
  },
}
</script>