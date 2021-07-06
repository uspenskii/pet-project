<template lang='pug'>
a.button(v-if='(type === "link")', :href='link')
  span {{ label }}
button.button(v-else)
  span {{ label }}
</template>

<script>
export default {
  props: ['type', 'label', 'link'],
}
</script>

<style lang='scss' src='./button.scss'></style>