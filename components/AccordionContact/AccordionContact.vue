<template lang='pug'>
.accordion-contact
  .accordion-contact__header(@click='toggle')
    h2.accordion-contact__headline {{data.city}}
    button.accordion-contact__toggle(:class='{ "is-active": opened }')
  transition(name='fade')
    .accordion-contact__body(v-if='opened')
      .accordion-contact__item
        p.accordion-contact__title Телефон
        p.accordion-contact__subtitle(v-for="item in data.phones" :key="item.id") {{item}}
        p.accordion-contact__title Работаем
        p.accordion-contact__subtitle {{data.workTime[0].day}}  |  {{data.workTime[0].time}}        
        p.accordion-contact__subtitle {{data.workTime[1].day}}  |  {{data.workTime[1].time}}        
      .accordion-contact__item
        p.accordion-contact__title Адрес
        p.accordion-contact__subtitle {{data.address}}
        p.accordion-contact__subtitle.alt {{data.hint}}
      .accordion-contact__item
        p.accordion-contact__title E-mail
        p.accordion-contact__subtitle(v-for="item in data.emails" :key="item.id") {{item}}
        .accordion-contact__button
          a(href="mailto:orders@sangarant.ru")
            Button.is-bordered(label="Написать нам")      
      .accordion-contact__map
        Map(:data='data.map' :content='data.address')        
      .accordion-contact__video(v-for="item in data.videos" :key="item.id")
        iframe( width="100%" height="100%" :src="item" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Alert(:data='data.description')
</template>

<script>
export default {
  props: ['data','open'],
  data() {
    return {
      opened: !this.open,
    }
  },
  methods: {
    toggle() {
      this.opened = !this.opened
    },
  },
}
</script>

<style lang='scss' src='./accordion-contact.scss'></style>