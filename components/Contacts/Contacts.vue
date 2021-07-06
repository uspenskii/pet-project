<template lang='pug'>
.contacts
  .contacts__item(v-for='phone in data.phones')
    a.contacts__link(:href='"tel:" + phone') {{ phone }}
  .contacts__item(v-for='mail in data.emails')
    a.contacts__link.is-small(:href='"mailto:" + mail') {{ mail }}
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./contacts.scss'></style>