<template lang='pug'>
form.form 
  .form__body.is-order
    .grid.is-row
      .col-12
        h2.form__title Получение товара
      .col-6.col-m-12
        label.form__label
        span.form__span Способ доставки
        .form__input
          Select(:data='data.delivery.types', v-model='form.delivery.type')
          span.form__error {{ errors.delivery.type }}
      .col-6.col-m-12
        label.form__label
        span.form__span Адрес доставки
        .form__input
          Input(v-model='form.delivery.address')
          span.form__error {{ errors.delivery.address }}
      .col-6.col-m-12
        label.form__label
        span.form__span Удобный способ оплаты
        .form__input 
          Select(:data='data.payment.types', v-model='form.payment.type')
          span.form__error {{ errors.payment.type }}
      .col-12
        Alert(
          data='После оформления заказа наши менеджеры свяжуться с вами для обсуждения всех деталей оплаты и доставки'
        )
      .col-12
        h2.form__title Персональные данные
      .col-6.col-m-12
        label.form__label
        span.form__span Ваше ФИО *
        .form__input
          Input(v-model='form.customer.name')
          span.form__error {{ errors.customer.name }}
      .col-6.col-m-12
        label.form__label
        span.form__span Название предприятия
        .form__input
          Input(v-model='form.customer.company') 
      .col-6.col-m-12
        label.form__label
        span.form__span Ваш Email *
        .form__input
          Input(v-model='form.customer.email')
          span.form__error {{ errors.customer.email }}
      .col-6.col-m-12
        label.form__label
        span.form__span Ваш телефон *
        .form__input
          Input(v-model='form.customer.phone')
          span.form__error {{ errors.customer.phone }}
      .col-12
        label.form__label
        span.form__span Коментарий к заказу
        .form__input
          textarea.input(v-model='form.comment')
</template>



<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { getError, getErrors } from '@/helpers/errors'
export default {
  props: ['data'],
  data() {
    return {
      isLoading: false,
      serverErrors: {},
      error: '',
      form: {
        delivery: {
          type: '',
          address: '',
        },
        payment: {
          type: '',
        },
        customer: {
          name: '',
          company: '',
          email: '',
          phone: '',
        },
        comment: '',
      },
    }
  },
  validations: {
    form: {
      delivery: {
        type: {
          required,
        },
        address: {
          required,
          minLength: minLength(3),
        },
      },
      payment: {
        type: {
          required,
        },
      },
      customer: {
        name: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
        },
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
        .post('checkout', this.form)
        .then((data) => {
          this.$router.push('/checkout/success/' + data.success_token)
        })
        .catch((data) => {
          this.serverErrors = getErrors(data)
          this.error = getError(data)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
  computed: {
    errors() {
      let errors = {
        delivery: {
          type: this.serverErrors['delivery.type'],
          address: this.serverErrors['delivery.address'],
        },
        payment: {
          type: this.serverErrors['payment.type'],
        },
        customer: {
          name: this.serverErrors['customer.name'],
          company: this.serverErrors['customer.company'],
          email: this.serverErrors['customer.email'],
          phone: this.serverErrors['customer.phone'],
        },
        comment: this.serverErrors['comment'],
      }

      if (this.$v.form.delivery.type.$dirty) {
        if (!this.$v.form.delivery.type.required) {
          errors.delivery.type = 'Укажите способ доставки'
        }
      }

      if (this.$v.form.delivery.address.$dirty) {
        if (!this.$v.form.delivery.address.required) {
          errors.delivery.address = 'Укажите адрес'
        }
      }

      if (this.$v.form.delivery.type.$dirty) {
        if (!this.$v.form.payment.type.required) {
          errors.payment.type = 'Укажите способ оплаты'
        }
      }

      if (this.$v.form.customer.name.$dirty) {
        if (!this.$v.form.customer.name.required) {
          errors.customer.name = 'Укажите имя'
        }
        if (!this.$v.form.customer.name.minLength) {
          errors.customer.name = 'Минимум 3 символа'
        }
      }

      if (this.$v.form.customer.email.$dirty) {
        if (!this.$v.form.customer.email.required) {
          errors.customer.email = 'Укажите email'
        }
        if (!this.$v.form.customer.email.email) {
          errors.customer.email = 'Некорректный email'
        }
      }

      if (this.$v.form.customer.phone.$dirty) {
        if (!this.$v.form.customer.phone.required) {
          errors.customer.phone = 'Укажите телефон'
        }
      }

      return errors
    },
  },
}
</script>

<style lang='scss' src='../Form/form.scss'></style>