<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs' :headline='data.meta.h1')
  Section
    Stocks(:data='data.stocks')
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
          title: 'Акции',
        },
      ],
    }
  },
  
  asyncData(context) {
    return context.$api.load('stocks')
  },  
}
</script>