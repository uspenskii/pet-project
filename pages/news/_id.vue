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
            .col-9.shift-1.col-m-12.unshift-m-0
              Article(:data='data.post')
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
        title: 'Пресс-центр',
        url: '/news',
      },
    ]    

    this.breadcrumbs.push({
      title: this.data.post.title,
    })
  },
  asyncData(context) {
    return context.$api.load(`news/${context.route.params.id}`)
  },
}
</script>