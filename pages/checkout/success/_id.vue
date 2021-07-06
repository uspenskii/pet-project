<template lang='pug'>
.page__content
  Success(:data='data')
</template>

<script>
export default {
  layout: 'default',
  asyncData(context) {
    return context.$api.load(
      `checkout/success/${context.route.params.id}`,
      context.route.query
    )
  },
}
</script>