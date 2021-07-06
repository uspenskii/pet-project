<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs' :headline='data.meta.h1')
  Section
    .grid.is-row
      .col-2
        SidebarAbout
      .col-10.col-m-12
        ContactsPage(:data='data')
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
    return context.$api.load('contacts')
  },
}
</script>