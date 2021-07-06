<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs' :headline='data.meta.h1')
  Section
    .grid.is-row
      .col-2
        SidebarAbout
      .col-10.col-m-12
        Section
          .grid.is-row
            .col-3.col-m-6.col-s-12(v-for="(item, index) in data.news" :key="index")
              News(:data='item')
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
    return context.$api.load('news')
  },
}
</script>