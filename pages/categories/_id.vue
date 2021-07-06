<template lang='pug'>
.page__content 
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1') 
  Section
    Products(:data='data', :loading='loading', @facets='updateFacets') 
</template>

<script>
import { CancelToken } from 'axios'
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  data() {
    return {
      loading: false,
      ajax: null,
    }
  },

  methods: {
    updateFacets({ params, callback }) {
      if (this.ajax) {
        this.ajax.cancel()
      }

      this.ajax = CancelToken.source()
      this.$api
        .get(
          '/categories/' + this.$route.params.id + '/facets',
          params,
          this.ajax.token
        )
        .then((data) => {
          this.data.filter = data
          callback()
        })
    },
  },

  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Каталог',
          url: '/categories',
        },
      ]

      if (this.data.breadcrumbs.length > 0) {
        breadcrumbs.push({
          title: this.data.breadcrumbs[0].title,
          url: this.data.breadcrumbs[0].alias,
        })
      }

      breadcrumbs.push({
        title: this.data.category.title,
      })

      return breadcrumbs
    },
  },

  watchQuery: true,

  asyncData(context) {
    return context.$api.load(
      `categories/${context.route.params.id}`,
      context.route.query
    )
  },
}
</script>