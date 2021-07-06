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
          '/brands/' + this.$route.params.id + '/facets',
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
          title: 'Бренды',
          url: '/brands',
        },
        {
          title: this.data.brand.title,
        },
      ]

      breadcrumbs.push()

      return breadcrumbs
    },
  },

  watchQuery: true,

  asyncData(context) {
    return context.$api.load(
      `brands/${context.route.params.id}`,
      context.route.query
    )
  },
}
</script>