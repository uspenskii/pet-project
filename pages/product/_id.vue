<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs' :headline='data.meta.h1')  
  Section
    ProductCard(:data='data.product')
    Tabs(:data='data.product' :reviews='data.reviews')
    TabsMobile(:data='data.product' :reviews='data.reviews')
  Section(v-if="data.related_products.products.length > 0")
    Popular(:data='data.related_products'  title='С этим товаром покупают' type='related')
  Section(v-if="data.similar_products.products.length > 0")
    Popular(:data='data.similar_products'  title='Из этой же категории' type='similar')
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  data() {
    return {
      alias: this.$route.params.id,
      breadcrumbs: [],
    }
  },
  mounted() {
    this.breadcrumbs = [
      {
        title: 'Каталог',
        url: '/categories',
      },
    ]

    for (let item in this.data.breadcrumbs) {
      this.breadcrumbs.push({
        title: this.data.breadcrumbs[item].title,
        url: '/categories/' + this.data.breadcrumbs[item].alias,
      })
    }

    this.breadcrumbs.push({
      title: this.data.product.title,
    })
  },

  asyncData(context) {
    return context.$api.load(`products/${context.route.params.id}`)
  },
}
</script>