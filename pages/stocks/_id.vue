<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1')
  Section 
    StockPage(:data='data.stock')
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
          title: 'Акции',
          url: '/stocks',
        },
        {
          title: this.data.stock.title,
        },
      ]

      breadcrumbs.push()

      return breadcrumbs
    },
  },

  asyncData(context) {
    return context.$api.load(
      `stocks/${context.route.params.id}`,
      context.route.query
    )
  },
}
</script>