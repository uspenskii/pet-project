<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs' headline='Сравнить товары')
  Section
    Compare
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
          title: 'Сравнение',
        },
      ],
    }
  },
  async asyncData({ store }) {
    await store.dispatch('compare/get')
  },
}
</script>