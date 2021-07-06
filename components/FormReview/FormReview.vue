<template lang='pug'>
form.form(@submit.prevent='send' )
  .form__body.is-review(v-if="success")
    h2.form__title Отзыв отправлен
  .form__body.is-review(v-if="!success" :class='{ "is-loading": isLoading }')
    h2.form__title Оставить отзыв
    label.form__label
      span.form__span Ваше Имя и Фамилия
      .form__input
        Input(v-model='form.name' :class='{ "error": errors.name }')
        span.form__error {{ errors.name }}
    .form__label
      span.form__span Ваша оценка
      Stars(v-model='form.rating')
    label.form__label
      span.form__span Отзыв о товаре
      .form__input
        textarea.input(v-model='form.content' :class='{ "error": errors.content }')
        span.form__error {{ errors.content }}
    .form__label
      CheckAgree(v-model='form.checkbox')
      span.form__error {{ errors.checkbox }}
    .form__button
      Button.is-form(label='Оставить свой отзыв')
</template>



<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { getError, getErrors } from '@/helpers/errors'
export default {
  props: ['data', 'id'],
  data() {
    return {
      isLoading: false,
      success: false,
      serverErrors: {},
      error: '',
      form: {
        name: '',
        rating: 5,
        content: '',
        checkbox: '',
        productId: this.id
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      content: {
        required,
        minLength: minLength(3),
      },
      checkbox: {
        required,
      },
    },
  },
  methods: {
    send() {
      if (this.isLoading) {
        return
      }

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      this.isLoading = true

      this.$api
        .post('reviews/send', this.form)
        .then((data) => {
          
        })
        .catch((data) => {
          this.serverErrors = getErrors(data)
          this.error = getError(data)
        })
        .finally(() => {
          this.isLoading = false
          this.success = true
        })
    },
  },
  computed: {
    errors() {
      let errors = {
        name: '',
        rating: '',
        content: '',
        checkbox: '',
        // delivery: {
        //   type: this.serverErrors['delivery.type'],
        //   address: this.serverErrors['delivery.address'],
        // },
        // payment: {
        //   type: this.serverErrors['payment.type'],
        // },
        // customer: {
        //   name: this.serverErrors['customer.name'],
        //   company: this.serverErrors['customer.company'],
        //   email: this.serverErrors['customer.email'],
        //   phone: this.serverErrors['customer.phone'],
        // },
        // comment: this.serverErrors['comment'],
      }

      if (this.$v.form.name.$dirty) {
        if (!this.$v.form.name.required) {
          errors.name = 'Укажите имя'
        }
        if (!this.$v.form.name.minLength) {
          errors.name = 'Минимум 3 символа'
        }
      }

      if (this.$v.form.content.$dirty) {
        if (!this.$v.form.content.required) {
          errors.content = 'Оставьте свой отзыв'
        }
        if (!this.$v.form.content.minLength) {
          errors.content = 'Минимум 3 символа'
        }
      }

      if (this.$v.form.checkbox.$dirty) {
        if (!this.$v.form.checkbox.required) {
          errors.checkbox = 'Оставьте свой отзыв'
        }
      }

      return errors
    },
  } 
}
</script>

<style lang='scss' src='../Form/form.scss'></style>