<template lang='pug'>
.page
  main.page__body
    Nuxt
</template>


<script>
export default { 
  
  async fetch() {
    await this.$api.get(`layout`).then((response) => {
      this.data = response
    })
  },
}
</script>