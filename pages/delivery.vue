<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1')
  Section
    .grid.is-row
      .col-9.col-m-12
        Payment(:data='item', v-for='item in data.groups', :key='item.id')
      .col-3.col-m-12 
        Stock(
          v-for='(item, index) in data.stocks',
          :key='index',
          :className='item.id == 2 ? "is-orange" : "is-blue"',
          :data='item'
        )
    .grid.is-row(style='margin-top: 50px')
      .col-3.col-m-12
        iframe(
          src='https://widgets.dellin.ru/calculator?derival_to_door=off&arrival_to_door=on&disabled_calculation=on&insurance=0&package=1',
          width='100%',
          height='375px',
          scrolling='no',
          frameborder='0'
        ) 
      .col-3.col-m-12
        iframe#cdek-calc(
          src='https://cdek-online.ru/construct_form.php',
          scrolling='no',
          frameborder='0',
          height='375px',
          width='100%'
        ) 
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  data() {
    return {
      breadcrumbs: [],
    }
  },
  mounted() {
    this.breadcrumbs.push({
      title: this.data.page.title,
    })
  },
  asyncData(context) {
    return context.$api.load('delivery')
  },
}
</script>