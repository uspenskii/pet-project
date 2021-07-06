<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1')
  Section
    .grid.is-row
      .col-9.col-m-12
        Services(:data='data.attendances')
      .col-3.col-m-12 
        Stock(
          v-for='(item, index) in data.stocks',
          :key='index',
          :className='item.id == 2 ? "is-orange" : "is-blue"',
          :data='item'
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
    return context.$api.load('attendance')
  },
}
</script>