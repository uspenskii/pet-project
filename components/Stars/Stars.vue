<template lang='pug'>
.stars
  .stars__inner
    input#reviewformmark_5.stars__field(
      type='radio',
      name='2',
      value='5',
      checked='checked'
      v-model="rate"  
      v-on:input='updateValue($event.target.value)'    
    )
    label.stars__label(for='reviewformmark_5') 

    input#reviewformmark_4.stars__field(
      type='radio',
      name='2',
      value='4',
      checked='checked'
      v-model="rate"
      v-on:input='updateValue($event.target.value)'
    )
    label.stars__label(for='reviewformmark_4') 

    input#reviewformmark_3.stars__field(
      type='radio',
      name='2',
      value='3',
      checked='checked'
      v-model="rate"
      v-on:input='updateValue($event.target.value)'
    )
    label.stars__label(for='reviewformmark_3') 

    input#reviewformmark_2.stars__field(
      type='radio',
      name='2',
      value='2',
      checked='checked'
      v-model="rate"
      v-on:input='updateValue($event.target.value)'
    )
    label.stars__label(for='reviewformmark_2') 

    input#reviewformmark_1.stars__field(
      type='radio',
      name='2',
      value='1',
      checked='checked'
      v-model="rate"
      v-on:input='updateValue($event.target.value)'
    )
    label.stars__label(for='reviewformmark_1') 
</template>



<script>
export default {
  data() {
    return {
      rate: 5,     
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
  },
  
}
</script>

<style lang='scss' src='./stars.scss'></style>