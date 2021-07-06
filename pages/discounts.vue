<template lang='pug'>
.page__content 
  Breadcrumb(:data='breadcrumbs', :headline='data.meta.h1') 
  Section    
    Sales(:data='data') 
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
          '/sales/' + this.$route.params.id + '/facets',
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
          title: 'Скидки',
        },        
      ]

      breadcrumbs.push()

      return breadcrumbs
    },
  },

  watchQuery: true,

  asyncData(context) {
    return context.$api.load('sales')
  }, 
}
</script>